# ringcentral-node-auth-client
Authentication Demo for RingCentral App using 3-legged OAuth

## Pre-Requisite

- Create an application at RingCentral Developer Portal.
- Select Server/Web for the Platform type.
- Add the ReadAccounts, ReadCallLog permissions for the app.
- Specify the redirect Uri as http://localhost:5000/oauth2callback
- For step by step guide, please refer to : https://developer.ringcentral.com/library/getting-started.html

## Clone & Configure project 

- ```$ npm install```
- Open .env file and update it with your sandbox application credentials (RC_CLIENT_ID, RC_CLIENT_SECRET)
- Set RC_REDIRECT_URL to 'http://localhost:5000/oauth2callback', make sure that is also the `OAuth Redirect URI` in your application settings


## Run the demo

- ```$ node index.js```
- On a Web browser, open to http://localhost:5000 
- Click 'Login with RingCentral' and follow the wizard to authenticatate
- Call any APIs to test the app


