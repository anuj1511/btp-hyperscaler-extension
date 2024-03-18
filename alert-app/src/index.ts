import express from 'express';
import bodyParser from 'body-parser';
import { AlertNotificationClient, OAuthAuthentication, RegionUtils, Severity, Category, State, Predicate } from '@sap_oss/alert-notification-client';

const app = express();
const port = 3000;

// Configure the AlertNotificationClient
const client = new AlertNotificationClient({
    authentication: new OAuthAuthentication({
        username: "sb-dcf0192f-3fc7-4048-a6ea-ab08b76e7b74!b29020|ans-xsuaa!b125",
        password: "32790be3-4c34-4ac6-b699-0746f9d4baeb$ZoMorfgZnmvbtxGmwiO0eDS9HrWoOw5_7LhYCUi-mxg=",
        oAuthTokenUrl: 'https://e5d69cadtrial.authentication.ap21.hana.ondemand.com/oauth/token?grant_type=client_credentials'
    }),
    region: RegionUtils.AP21
});

app.use(bodyParser.json());

// Import configuration and send event when API endpoint is called
app.post('/sendAlert', async (req, res) => {
    try {
        // Import configuration
        await client.importConfiguration({
            actions: [
                {
                    name: 'to-email',
                    type: 'EMAIL',
                    description: 'send to my mail',
                    state: State.ENABLED,
                    properties: {
                        destination: 'anujjadhav0215@gmail.com'
                    }
                }
            ],
            conditions: [
                {
                    name: 'event-type-contains-HighCpu',
                    description: 'Match events which body contains HighCpu',
                    propertyKey: 'eventType',
                    predicate: Predicate.CONTAINS,
                    propertyValue: 'HighCpu'
                }
            ],
            subscriptions: [
                {
                    name: 'event-with-eventType-HighCpu-to-mail',
                    state: State.ENABLED,
                    actions: ['to-email'],
                    conditions: ['event-type-contains-HighCpu'],
                    description: 'Subscription will act when an event with eventType - HighCpu is received and will send an email to me'
                }
            ]
        });

        // Send event
        const event = await client.sendEvent({
            body: req.body.body,
            subject: req.body.subject,
            eventType: req.body.eventType,
            severity: Severity.WARNING,
            category: Category.ALERT,
            resource: {
                resourceName: req.body.resource.resourceName,
                resourceType: req.body.resource.resourceType,
                resourceInstance: req.body.resource.resourceInstance,
                tags: {
                    detailsLink: req.body.resource.tags.detailsLink
                }
            },
            eventTimestamp: req.body.eventTimestamp,
            priority: req.body.priority
        });

        console.log("Event sent:", event);
        res.status(200).json({ success: true, message: 'Alert sent successfully' });
    } catch (error) {
        console.error("Error sending alert:", error);
        res.status(500).json({ success: false, message: 'Failed to send alert' });
    }
});

app.listen(port, () => {
    console.log(`Server is listening on port ${port}`);
});
