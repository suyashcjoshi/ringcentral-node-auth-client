# Node.js Client App demonstrating 3-legged OAuth 2.0 Flow

Authentication Demo for RingCentral App using 3-legged OAuth Flow with help of RingCentra's [Node.js SDK](https://www.npmjs.com/package/@ringcentral/sdk). For more information please refer this guide: https://developers.ringcentral.com/guide/authentication. For 3-legged OAuth Flow with PKCE refer to this guide: https://developers.ringcentral.com/guide/authentication/auth-code-pkce-flow

![alt text](https://netstorage.ringcentral.com/dpw/guide/images/oauth-auth-token-flow.png?v=2022-03-04![image](https://user-images.githubusercontent.com/395039/160492497-d0058fa4-59d9-49ac-8f9e-4e8a4e1aa1b7.png))


## Pre-Requisite

- Have an existing an application on RingCentral Developer Portal. **To create a new app using 3-Legged Auth Flow, please refer to this guide**: https://developers.ringcentral.com/guide/authentication/quick-start#create-an-app
- Make sure the application has the ReadAccounts, ReadCallLog permissions.
- Make sure the redirect URL matches the one  in `.env` file, for this demo: http://localhost:5000/oauth2callback

## Download & Configure project 

- ```$ git clone <this project> ```
- ```$ npm install```
- Open .env file and update it with your sandbox application credentials for RC_CLIENT_ID, RC_CLIENT_SECRET & RC_REDIRECT_URL values.


## Run the demo

- ```$ node index.js```
- On a Web browser, open to http://localhost:5000 
- Click 'Login with RingCentral' and follow the wizard to authenticatate
- Call any APIs to test the app


