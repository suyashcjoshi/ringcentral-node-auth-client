# Node.JS Client App using RingCentral SDK

Authentication Demo for RingCentral App using 3-legged OAuth. For more information please refer this guide: https://developers.ringcentral.com/guide/authentication

![alt text](https://netstorage.ringcentral.com/dpw/guide/images/oauth-auth-token-flow.png?v=2022-03-04![image](https://user-images.githubusercontent.com/395039/160492497-d0058fa4-59d9-49ac-8f9e-4e8a4e1aa1b7.png))


## Pre-Requisite

- Have an existing an application on RingCentral Developer Portal. **To create a new app using 3-Legged Auth Flow, please refer to this guide**: https://developers.ringcentral.com/guide/authentication/quick-start#create-an-app
- Make sure the application has the ReadAccounts, ReadCallLog permissions.
- Make sure the redirect URL matches the one  in `.env` file, for this demo: http://localhost:5000/oauth2callback

## Clone & Configure project 

- ```$ npm install```
- Open .env file and update it with your sandbox application credentials (RC_CLIENT_ID, RC_CLIENT_SECRET)
- Set RC_REDIRECT_URL to 'http://localhost:5000/oauth2callback', make sure that is also the `OAuth Redirect URI` in your application settings


## Run the demo

- ```$ node index.js```
- On a Web browser, open to http://localhost:5000 
- Click 'Login with RingCentral' and follow the wizard to authenticatate
- Call any APIs to test the app


