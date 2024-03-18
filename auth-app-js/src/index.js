const express = require('express')
const xssec = require('@sap/xssec')

const cors = require('cors')
const app = express();
app.use(cors())

const xsuaaCredentials = {
    // "apiurl": "https://api.authentication.ap21.hana.ondemand.com",
    "clientid": "sb-xsapp-fiori!t29020",
    "clientsecret": "6f7084ac-d923-4a4b-9559-ae45852cbe6c$dy-Z5kddWOu1VnQZHXQlXf45ViE84ESjIVCfz2jHI5M=",
    // "credential-type": "binding-secret",
    // "identityzone": "e5d69cadtrial",
    // "identityzoneid": "0bdb4b86-17c7-4da0-a65c-61dde11824f8",
    // "sburl": "https://internal-xsuaa.authentication.ap21.hana.ondemand.com",
    // "serviceInstanceId": "7f7da3db-a5cc-4584-9532-443b73a25584",
    // "subaccountid": "0bdb4b86-17c7-4da0-a65c-61dde11824f8",
    // "tenantid": "0bdb4b86-17c7-4da0-a65c-61dde11824f8",
    // "tenantmode": "dedicated",
    // "uaadomain": "authentication.ap21.hana.ondemand.com",
    "url": "https://e5d69cadtrial.authentication.ap21.hana.ondemand.com",
    // "verificationkey": "-----BEGIN PUBLIC KEY-----\nMIIBIjANBgkqhkiG9w0BAQEFAAOCAQ8AMIIBCgKCAQEArID3NtZrCWetMp5P3MCw\nhrXjMyEbQY61+fT1wEMYj6CkRXicTB87M1R3skCy+x3mqdbsVl1pc0ZiIFSotunZ\n3CKXHZvRDORIZLkWI064JHqq3jxH1rHrhFJzyfPyI1lzDLc/dLCXd0LoGdkPCCTP\nJ2pMzmYzMvq7IEbwAiaHjnK7pRqgSoDSepfPyam44S+inwRY/FjvTIYAXhZcb1n8\nksR+cA2joN/xaf9LhQruWc4FNhhEN4sRYSiMpES3KI4r66R5XUhTNXJNLRzjSAIu\n1T6zCNNhXKt6axkzCCsRwhKbTa9bsKYgdWPtgLk/don82l/MGVaVmgEoeR6BMrNZ\nUQIDAQAB\n-----END PUBLIC KEY-----",
    // "xsappname": "xsapp-fiori!t29020",
    // "zoneid": "0bdb4b86-17c7-4da0-a65c-61dde11824f8"
}

app.use((req, res, next) => {
    console.log(req.headers.authorization)
    const accessToken = req.headers.authorization ? req.headers.authorization.split(' ')[1]: null;
    console.log(accessToken)

    if(!accessToken) {
        return res.status(401).send('Unauthorized1');
    }

    console.log("here 1");
    
    const xsuaaService = new xssec.JWTStrategy(xsuaaCredentials);
    console.log("here 2");
    
    xsuaaService.authenticate(req, (err, userInfo) => {
        if(err) {
            console.log(err)
            return res.status(401).send('Unauthorized2');
        }
        console.log("here 3");
        
        req.user = userInfo;
        next();
    })
    console.log("here 4");
})

app.get('/', (req, res) => {
    res.send('Hello, World!');
})

const PORT= process.env.PORT || 3000;
app.listen(PORT, () => {
    console.log(`Server is listening on port ${PORT}`);
})