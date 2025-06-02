import Subscription from "../models/subscription.model.js";
import { workflowClient } from "../config/upstash.js";
import { SERVER_URL } from "../config/env.js";

export const createSubscription = async (req, res, next) => {
    try {
        const subscription = await Subscription.create({
            ...req.body,
            user: req.user._id,
        });

        const { workflowRunId } = await workflowClient.trigger({
            url: `${SERVER_URL}/api/v1/workflows/subscription/reminder`,
            body: {
                subscriptionId: subscription.id,
            },
            headers: {
                "Content-Type": "application/json",
            },
            retries: 0,
        });

        res.status(201).json({
            success: true,
            message: "Subscription created successfully",
            data: { subscription, workflowRunId },
        });
    } catch (e) {
        next(e);
    }
};

export const getUserSubscriptions = async (req, res, next) => {
    try {
        if (req.user.id !== req.params.id) {
            const error = new Error(
                "You are not authorized to view this user's subscriptions"
            );
            error.status = 401;
            throw error;
        }

        const subscriptions = await Subscription.find({ user: req.params.id });
        res.status(200).json({
            success: true,
            message: "User subscriptions fetched successfully",
            data: subscriptions,
        });
    } catch (e) {
        next(e);
    }
};

// Additional methods can be added here as needed, such as updating, deleting subscriptions, etc.
