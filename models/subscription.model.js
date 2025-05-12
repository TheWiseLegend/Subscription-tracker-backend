import mongoose from "mongoose";

const subscriptionSchema = new mongoose.Schema(
    {
        name: {
            type: String,
            required: [true, "Subscription name is required"],
            trim: true,
            minLength: 2,
            maxLength: 100,
        },
        price: {
            type: Number,
            required: [true, "Price is required"],
            min: [0, "Price must be a positive number"],
        },
        currency: {
            type: String,
            enum: ["USD", "RM"],
            default: "RM",
        },
        frequency: {
            type: String,
            enum: ["daily", "weekly", "monthly", "yearly"],
        },
        category: {
            type: String,
            enum: [
                "entertainment",
                "food",
                "utilities",
                "transportation",
                "health",
                "education",
                "other",
            ],
            required: [true, "Category is required"],
        },
        paymentMethod: {
            type: String,
            required: true,
            trim: true,
        },
        status: {
            type: String,
            enum: ["active", "expired", "cancelled"],
            default: "active",
        },
        startDate: {
            type: Date,
            required: [true, "Start date is required"],
            validate: {
                validator: (value) => value <= new Date(),
                message: "Start date must be in the past",
            },
        },
        renewalDate: {
            type: Date,
            validate: {
                validator: function (value) {
                    return value > this.startDate;
                },
                message: "Renewal date must be after the the start date",
            },
        },
        user: {
            type: mongoose.Schema.Types.ObjectId,
            ref: "User",
            required: [true, "User is required"],
            index: true,
        },
    },
    { timestamps: true }
);

// auto-calaculate renewal date if missing
subscriptionSchema.pre("save", function (next) {
    if (!this.renewalDate) {
        const renewalPeriods = {
            daily: 1,
            weekly: 7,
            monthly: 30,
            yearly: 365,
        };

        this.renewalDate = new Date(this.startDate);
        this.renewalDate.setDate(
            this.renewalDate.getDate() + renewalPeriods[this.frequency]
        );
    }

    // Auto update the status of the subscription of renewal has passed
    if (this.renewalDate < new Date()) {
        this.status = "expired";
    }

    next();
});

const Subscription = mongoose.model("Subscription", subscriptionSchema);

export default Subscription;
