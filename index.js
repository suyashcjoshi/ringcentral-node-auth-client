const app = require("express")();
const session = require("express-session");
const RC = require("@ringcentral/sdk").SDK;
const path = require("path");
require("dotenv").config();

const usePKCE = false; // change to true for enabling authorization code with PKCE flow

app.use(session({ secret: "session secret variable", tokens: "" }));
app.set("views", path.join(__dirname, "views"));
app.set("view engine", "ejs");

REDIRECT_URL = process.env.RC_REDIRECT_URL;

const rcsdk = new RC({
    "server":       process.env.RC_SERVER_URL,
    "clientId":     process.env.RC_CLIENT_ID,
    "clientSecret": process.env.RC_CLIENT_SECRET,
    "redirectUri":  REDIRECT_URL
});

const server = require("http").createServer(app);
server.listen(5000);
console.log("Server running at http://localhost:5000");

app.get("/index", function(req, res) {
  res.redirect("/");
});

app.get("/", async function(req, res) {
  const platform = rcsdk.platform();
  if (req.session.tokens != undefined) {
    platform.auth().setData(req.session.tokens);
    if (await platform.loggedIn()) {
      return res.render("protected");
    }
  } 
  else {
    res.render("index", {
      authorize_uri: platform.loginUrl({
        redirectUri: REDIRECT_URL,
        usePKCE,
      })
    });
  }
});

app.get("/logout", async function(req, res) {
  if (req.session.tokens != undefined) {
    const platform = rcsdk.platform();
    platform.auth().setData(req.session.tokens);
    if (platform.loggedIn()) {
      try {
        await platform.logout();
      } 
      catch (e) {
        console.log(e);
      }
    }
    req.session.tokens = null;
  }
  res.redirect("/");
});

app.get("/oauth2callback", async function(req, res) {
  if (req.query.code) {
    try {
      const platform = rcsdk.platform();
      let resp = await platform.login({
        code: req.query.code,
        redirectUri: REDIRECT_URL
      })
      req.session.tokens = await resp.json();
      res.redirect("/protected");
    } 
    catch (e) {
      res.send("Login error " + e);
    }
  } else {
    res.send("No Auth code was found!");
  }
});

app.get("/protected", function(req, res) {
  if (req.session.tokens != undefined) {
    const platform = rcsdk.platform();
    platform.auth().setData(req.session.tokens);
    if (platform.loggedIn()) {
      if (req.query.api == "extension") {
        let endpoint = "/restapi/v1.0/account/~/extension";
        let params = {};
        return callGetMethod(platform, endpoint, params, res);
      } 
      else if (req.query.api == "extension-call-log") {
        let endpoint = "/restapi/v1.0/account/~/extension/~/call-log";
        let params = {};
        return callGetMethod(platform, endpoint, params, res);
      } 
      else if (req.query.api == "account-call-log") {
        let endpoint = "/restapi/v1.0/account/~/call-log";
        let params = {};
        return callGetMethod(platform, endpoint, params, res);
      }
    }
  }
  res.redirect("/");
});

async function callGetMethod(platform, endpoint, params, res) {
  try {
    let resp = await platform.get(endpoint, params);
    let jsonObj = await resp.json();
    res.send(JSON.stringify(jsonObj));
  } 
  catch (e) {
    res.send("Error occurred: " + e.message);
  }
};