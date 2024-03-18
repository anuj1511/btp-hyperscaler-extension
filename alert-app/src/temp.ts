
// import { OAuthAuthentication, AlertNotificationClient, EntityType, RegionUtils, State } from '@sap_oss/alert-notification-client';

// const client = new AlertNotificationClient({
//     authentication: new OAuthAuthentication({
//         username: "sb-dcf0192f-3fc7-4048-a6ea-ab08b76e7b74!b29020|ans-xsuaa!b125",
//         password: "32790be3-4c34-4ac6-b699-0746f9d4baeb$ZoMorfgZnmvbtxGmwiO0eDS9HrWoOw5_7LhYCUi-mxg=",
//         oAuthTokenUrl: 'https://e5d69cadtrial.authentication.ap21.hana.ondemand.com/oauth/token?grant_type=client_credentials'
//     }),
//     region: RegionUtils.AP21
// });

// const action = {
//     name: 'to-email',
//     type: 'EMAIL',
//     description: 'send to my mail',
//     state: State.ENABLED,
//     properties: {
//         destination: 'anujjadhav0215@gmail.com'
//     }
// }

// client.create(EntityType.ACTION, action)
// .then(action => {
//     client.get(EntityType.ACTION, action.name)
//         .then(action => console.log(action)) // Action you have created
//         .catch(error => console.log(error));
// })
// .catch(error => console.log(error)); // Shouldn't happen if everything above is setup correctly

// client.create(EntityType.ACTION, action).catch(error => console.log(error))


/*
{
    "url": "https://clm-sl-ans-live-ans-service-api.cfapps.ap21.hana.ondemand.com",
    "client_id": "sb-dcf0192f-3fc7-4048-a6ea-ab08b76e7b74!b29020|ans-xsuaa!b125",
    "client_secret": "32790be3-4c34-4ac6-b699-0746f9d4baeb$ZoMorfgZnmvbtxGmwiO0eDS9HrWoOw5_7LhYCUi-mxg=",
    "oauth_url": "https://e5d69cadtrial.authentication.ap21.hana.ondemand.com/oauth/token?grant_type=client_credentials"
}
*/


import {
    AlertNotificationClient,
    EntityType,
    OAuthAuthentication,
    RegionUtils,
    Severity,
    Category,
    State,
    Predicate
} from '@sap_oss/alert-notification-client';

const client = new AlertNotificationClient({
    authentication: new OAuthAuthentication({
        username: "sb-dcf0192f-3fc7-4048-a6ea-ab08b76e7b74!b29020|ans-xsuaa!b125",
        password: "32790be3-4c34-4ac6-b699-0746f9d4baeb$ZoMorfgZnmvbtxGmwiO0eDS9HrWoOw5_7LhYCUi-mxg=",
        oAuthTokenUrl: 'https://e5d69cadtrial.authentication.ap21.hana.ondemand.com/oauth/token?grant_type=client_credentials'
    }),
    region: RegionUtils.AP21
});

client.importConfiguration({
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
})
.then(_configuration => {
    client.sendEvent({
        body: 'Your test-resource has exceeed the cpu limit',
        subject: 'test-resource exceeds cpu limits',
        eventType: 'HighCpu',
        severity: Severity.WARNING,
        category: Category.ALERT,
        resource: {
            resourceName: 'test-resource',
            resourceType: 'application',
            resourceInstance: '123456',
            tags: {
                detailsLink: 'https://example.details.com'
            }
        },
        eventTimestamp: 1602787032,
        priority: 1
    })
    .then(event => console.log("event: ", event)) 
    .catch(error => console.log("Error in send event func: ", error));
})
.catch(error => console.log("Error in import configuration: ", error));

