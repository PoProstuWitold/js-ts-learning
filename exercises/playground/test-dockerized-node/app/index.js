const app = require("express")()
const appId = process.env.APP_ID
//TEST COMMIT

app.get('/', (req, res) => 
res.send(`appid: ${appId} home page: says hello!`))

app.get('/app1', (req, res) => 
res.send(`appid: ${appId} app1 page: says hello!`))
 
app.get('/app2', (req, res) => 
res.send(`appid: ${appId} app2 page: says hello!`))
 
app.get('/admin', (req, res) => 
res.send(`appid: ${appId} ADMIN page: very few people should see this`))
 
app.listen(9999, () => console.log(`${appId} is listening on 9999`))