
const express = require("express"),
    app = express(),
    ejs = require('ejs'),
    client = new (require("discord.js")).Client()

client.on("ready", async () => {
    console.log('[BOT] Iniciado')
    await client.user.setStatus("invisible");
});


app.set("view engine", "ejs");
app.use(express.static("public"))




app.use(function (req, res, next) {
    res.removeHeader("x-powered-by")
    next();
});

app.post("*", async (req, res) => {
   return res.send('foi mal mano nao vai rolar request aq')
});


app.get("/", async (req, res, next) => {
  const yogurt = await client.users.fetch
  ("230113935351611392")
  const rep7 = await client.users.fetch
  ("330879828683390976")
  const emoji = await client.channels.fetch
  ("947627696861622293")
  const server = await client.guilds.fetch("642499335858290701")



  //const membros = server.roles.fetch('944298404375322664').members.map(m=>m.user.tag);
  //console.log(membros);

const role = await server.roles.fetch('944298404375322664');
await server.members.fetch();
const { members } = role

//members.forEach(async (obj) => {
  //const response = await client.users.fetch
 // (obj.user.id)
//})


var values = ["EtyAG1-EuMU","Ev-bHJso4Qs","TDq9tow8B_I","ZZlgs4FB3tg","i0hONpMvNVU"],
valueToUse = values[Math.floor(Math.random() * values.length)];

       return res.render("index", {
     yogurt,
     rep7,
     members,
     server,
     valueToUse,
     emoji
    });
});


app.use(function (req,res){
	res.status(404).render('404');
});

client.login(process.env['TOKEN']);

app.listen(process.env.PORT, () => {
    console.log('[EXPRESS] Iniciado') 
});


setTimeout(() => process.exit(), 600000)
