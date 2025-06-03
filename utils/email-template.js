export const generateEmailTemplate = ({
    userName,
    subscriptionName,
    renewalDate,
    planName,
    price,
    paymentMethod,
    accountSettingsLink,
    supportLink,
    daysLeft,
}) => `
<div style="font-family: 'Inter', 'Segoe UI', -apple-system, BlinkMacSystemFont, 'Roboto', sans-serif; line-height: 1.6; color: #1a1a1a; max-width: 600px; margin: 0 auto; padding: 20px; background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);">
    <table cellpadding="0" cellspacing="0" border="0" width="100%" style="background-color: #ffffff; border-radius: 16px; overflow: hidden; box-shadow: 0 20px 40px rgba(0, 0, 0, 0.15);">

        <!-- Header Section -->
        <tr>
            <td style="background: linear-gradient(135deg, #6366f1 0%, #8b5cf6 50%, #ec4899 100%); text-align: center; padding: 30px 20px;">
                <h1 style="margin: 0; font-size: 32px; font-weight: 700; color: #ffffff; letter-spacing: -0.5px; text-shadow: 0 2px 4px rgba(0,0,0,0.1);">
                    Amr Sapience Inc.
                </h1>
                <p style="margin: 8px 0 0 0; font-size: 14px; color: rgba(255, 255, 255, 0.9); font-weight: 500;">
                    Subscription Management
                </p>
            </td>
        </tr>

        <!-- Main Content -->
        <tr>
            <td style="padding: 40px 30px;">

                <!-- Greeting -->
                <div style="text-align: center; margin-bottom: 35px;">
                    <h2 style="margin: 0 0 15px 0; font-size: 24px; font-weight: 600; color: #1a1a1a;">
                        Hi ${userName}! 👋
                    </h2>
                    <p style="margin: 0; font-size: 16px; color: #6b7280;">
                        We wanted to give you a heads up about your upcoming renewal
                    </p>
                </div>

                <!-- Alert Badge -->
                <div style="text-align: center; margin-bottom: 30px;">
                    <span style="display: inline-block; background: linear-gradient(135deg, #fbbf24 0%, #f59e0b 100%); color: #ffffff; padding: 8px 20px; border-radius: 25px; font-size: 14px; font-weight: 600; box-shadow: 0 4px 12px rgba(251, 191, 36, 0.3);">
                        🔔 ${daysLeft} Day${
    daysLeft > 1 ? "s" : ""
} Until Renewal
                    </span>
                </div>

                <!-- Subscription Details Card -->
                <div style="background: linear-gradient(135deg, #f8fafc 0%, #f1f5f9 100%); border-radius: 12px; padding: 25px; margin-bottom: 30px; border: 1px solid #e2e8f0;">
                    <h3 style="margin: 0 0 20px 0; font-size: 18px; font-weight: 600; color: #1e293b; display: flex; align-items: center;">
                        📋 Subscription Details
                    </h3>

                    <table cellpadding="0" cellspacing="0" border="0" width="100%">
                        <tr>
                            <td style="padding: 12px 0; border-bottom: 1px solid #e2e8f0;">
                                <table cellpadding="0" cellspacing="0" border="0" width="100%">
                                    <tr>
                                        <td style="width: 30%; font-size: 14px; color: #64748b; font-weight: 500;">Service:</td>
                                        <td style="font-size: 15px; color: #1e293b; font-weight: 600; text-align: right;">${subscriptionName}</td>
                                    </tr>
                                </table>
                            </td>
                        </tr>
                        <tr>
                            <td style="padding: 12px 0; border-bottom: 1px solid #e2e8f0;">
                                <table cellpadding="0" cellspacing="0" border="0" width="100%">
                                    <tr>
                                        <td style="width: 30%; font-size: 14px; color: #64748b; font-weight: 500;">Plan:</td>
                                        <td style="font-size: 15px; color: #1e293b; font-weight: 600; text-align: right;">${planName}</td>
                                    </tr>
                                </table>
                            </td>
                        </tr>
                        <tr>
                            <td style="padding: 12px 0; border-bottom: 1px solid #e2e8f0;">
                                <table cellpadding="0" cellspacing="0" border="0" width="100%">
                                    <tr>
                                        <td style="width: 30%; font-size: 14px; color: #64748b; font-weight: 500;">Amount:</td>
                                        <td style="font-size: 16px; color: #059669; font-weight: 700; text-align: right;">${price}</td>
                                    </tr>
                                </table>
                            </td>
                        </tr>
                        <tr>
                            <td style="padding: 12px 0; border-bottom: 1px solid #e2e8f0;">
                                <table cellpadding="0" cellspacing="0" border="0" width="100%">
                                    <tr>
                                        <td style="width: 30%; font-size: 14px; color: #64748b; font-weight: 500;">Payment Method:</td>
                                        <td style="font-size: 15px; color: #1e293b; font-weight: 600; text-align: right;">${paymentMethod}</td>
                                    </tr>
                                </table>
                            </td>
                        </tr>
                        <tr>
                            <td style="padding: 12px 0;">
                                <table cellpadding="0" cellspacing="0" border="0" width="100%">
                                    <tr>
                                        <td style="width: 30%; font-size: 14px; color: #64748b; font-weight: 500;">Renewal Date:</td>
                                        <td style="font-size: 15px; color: #dc2626; font-weight: 700; text-align: right;">${renewalDate}</td>
                                    </tr>
                                </table>
                            </td>
                        </tr>
                    </table>
                </div>

                <!-- Action Buttons -->
                <div style="text-align: center; margin-bottom: 30px;">
                    <table cellpadding="0" cellspacing="0" border="0" style="margin: 0 auto;">
                        <tr>
                            <td style="padding: 0 10px 0 0;">
                                <a href="${accountSettingsLink}" style="display: inline-block; background: linear-gradient(135deg, #6366f1 0%, #8b5cf6 100%); color: #ffffff; text-decoration: none; padding: 14px 28px; border-radius: 8px; font-weight: 600; font-size: 14px; box-shadow: 0 4px 12px rgba(99, 102, 241, 0.3); transition: all 0.2s;">
                                    ⚙️ Manage Subscription
                                </a>
                            </td>
                            <td style="padding: 0 0 0 10px;">
                                <a href="${supportLink}" style="display: inline-block; background: #ffffff; color: #6366f1; text-decoration: none; padding: 14px 28px; border-radius: 8px; font-weight: 600; font-size: 14px; border: 2px solid #6366f1; transition: all 0.2s;">
                                    💬 Get Support
                                </a>
                            </td>
                        </tr>
                    </table>
                </div>

                <!-- Info Message -->
                <div style="background: linear-gradient(135deg, #eff6ff 0%, #dbeafe 100%); border-radius: 10px; padding: 20px; margin-bottom: 25px; border-left: 4px solid #3b82f6;">
                    <p style="margin: 0; font-size: 14px; color: #1e40af; line-height: 1.5;">
                        <strong>💡 Good to know:</strong> You can modify or cancel your subscription anytime before the renewal date. No questions asked!
                    </p>
                </div>

                <!-- Closing -->
                <div style="text-align: center; margin-top: 35px;">
                    <p style="margin: 0 0 10px 0; font-size: 16px; color: #374151;">
                        Questions? We're here to help!
                    </p>
                    <p style="margin: 0 0 20px 0; font-size: 14px; color: #6b7280;">
                        Reach out to our support team anytime.
                    </p>
                    <p style="margin: 0; font-size: 16px; color: #1a1a1a; font-weight: 600;">
                        Best regards,<br>
                        <span style="color: #6366f1;">Amr Sapience Inc.</span>
                    </p>
                </div>
            </td>
        </tr>

        <!-- Footer -->
        <tr>
            <td style="background: linear-gradient(135deg, #f8fafc 0%, #f1f5f9 100%); padding: 25px 30px; text-align: center; border-top: 1px solid #e2e8f0;">
                <p style="margin: 0 0 15px 0; font-size: 14px; color: #6b7280; font-weight: 500;">
                    Amr Sapience Inc. | Building the Future of Subscription Management
                </p>
                <div style="margin-bottom: 15px;">
                    <a href="#" style="color: #6366f1; text-decoration: none; font-size: 13px; margin: 0 15px; font-weight: 500;">Unsubscribe</a>
                    <a href="#" style="color: #6366f1; text-decoration: none; font-size: 13px; margin: 0 15px; font-weight: 500;">Privacy Policy</a>
                    <a href="#" style="color: #6366f1; text-decoration: none; font-size: 13px; margin: 0 15px; font-weight: 500;">Terms of Service</a>
                </div>
                <p style="margin: 0; font-size: 12px; color: #9ca3af;">
                    This email was sent to you as a reminder for your subscription renewal.
                </p>
            </td>
        </tr>
    </table>
</div>
`;

export const emailTemplates = [
    {
        label: "7 days before reminder",
        generateSubject: (data) =>
            `📅 Reminder: Your ${data.subscriptionName} Subscription Renews in 7 Days!`,
        generateBody: (data) => generateEmailTemplate({ ...data, daysLeft: 7 }),
    },
    {
        label: "5 days before reminder",
        generateSubject: (data) =>
            `⏳ ${data.subscriptionName} Renews in 5 Days – Stay Subscribed!`,
        generateBody: (data) => generateEmailTemplate({ ...data, daysLeft: 5 }),
    },
    {
        label: "2 days before reminder",
        generateSubject: (data) =>
            `🚀 2 Days Left! ${data.subscriptionName} Subscription Renewal`,
        generateBody: (data) => generateEmailTemplate({ ...data, daysLeft: 2 }),
    },
    {
        label: "1 days before reminder",
        generateSubject: (data) =>
            `⚡ Final Reminder: ${data.subscriptionName} Renews Tomorrow!`,
        generateBody: (data) => generateEmailTemplate({ ...data, daysLeft: 1 }),
    },
];
