import express from 'express';
import bodyParser from 'body-parser';
import { AlertNotificationClient, OAuthAuthentication, RegionUtils, Severity, Category, State, Predicate } from '@sap_oss/alert-notification-client';
import cors from 'cors';

const app = express();
const port = 3000;

app.use(cors()); 
app.use(bodyParser.json());

let client: any = null;

// /login endpoint
app.post('/login', async (req, res) => {
    try {

        if (client) {
            return res.status(200).json({ success: true, message: 'User is already logged in' });
        }

        const { username, password } = req.body;

        const oAuthAuthentication = new OAuthAuthentication({
            username: username,
            password: password,
            oAuthTokenUrl: 'https://e5d69cadtrial.authentication.ap21.hana.ondemand.com/oauth/token?grant_type=client_credentials'
        });

        oAuthAuthentication.getAuthorizationHeaderValue()
        .then(authHeaderValue => {
            console.log(authHeaderValue);
            client = new AlertNotificationClient({
                authentication: oAuthAuthentication,
                region: RegionUtils.AP21
            });

            res.status(200).json({ success: true, message: 'Login successful' });
        })
        .catch(error => {
            console.error("Error during login:", error);
            res.status(500).json({ success: false, message: 'Failed to login, Bad credentials' });
        });
    } catch (error) {
        console.error("Error during login:", error);
        res.status(500).json({ success: false, message: 'Failed to login, Bad credentials' });
    }
});

// /logout endpoint
app.post('/logout', (req, res) => {
    client = null; 
    res.status(200).json({ success: true, message: 'Logout successful' });
});

// /sendAlert endpoint
app.post('/sendAlert', async (req, res) => {
    try {
        // Check if client is initialized
        if (!client) {
            return res.status(401).json({ success: false, message: 'Unauthorized. Please login first.' });
        }

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
                },
                {
                    name: 'event-type-contains-Test',
                    description: 'Match events which body contains Test',
                    propertyKey: 'eventType',
                    predicate: Predicate.CONTAINS,
                    propertyValue: 'Test'
                }
            ],
            subscriptions: [
                {
                    name: 'event-with-eventType-HighCpu-to-mail',
                    state: State.ENABLED,
                    actions: ['to-email'],
                    conditions: ['event-type-contains-HighCpu'],
                    description: 'Subscription will act when an event with eventType - HighCpu is received and will send an email to me'
                },
                {
                    name: 'event-with-eventType-Test-to-mail',
                    state: State.ENABLED,
                    actions: ['to-email'],
                    conditions: ['event-type-contains-Test'],
                    description: 'Subscription will act when an event with eventType - Test is received and will send an email to me'
                },
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
