const express = require("express")
const app = express()
const client = new (require("discord.js")).Client()

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
    const yogurt = await client.users.fetch("269267598527561729")
    const rep7 = await client.users.fetch("330879828683390976") //dinamicos ok!
        
    const server = await client.guilds.fetch("642499335858290701") 
    const role = await server.roles.fetch('944298404375322664'); //role
  const vip = await server.roles.fetch('944298404375322664');
    
    await server.members.fetch(); //fetch nos membros do servidor
    const { members } = role //um push nos membros da role especifica 
  





    let values = ["4ngp7pWwiJ0", "NYX6e7X3jQ4", "rUWMh-GPY0M", "ZZlgs4FB3tg", "i0hONpMvNVU"];
  
    let valueToUse = values[Math.floor(Math.random() * values.length)];

    
    return res.render("index", { yogurt, rep7, members, server, valueToUse });
});

app.get("/angel", async (req, res, next) => {
  const yogurt = await client.users.fetch("269267598527561729")
    const server = await client.guilds.fetch("642499335858290701")
    const role = await server.roles.fetch("952588579849273394");
    
    await server.members.fetch();
    const { members } = role
  





    let values = ["4ngp7pWwiJ0", "NYX6e7X3jQ4", "rUWMh-GPY0M", "ZZlgs4FB3tg", "i0hONpMvNVU"];
  
    let valueToUse = values[Math.floor(Math.random() * values.length)];

    

    return res.render("angel", { yogurt, members, server, valueToUse  });
});



app.use((req, res)  => {
    res.status(404).render('404');
});

client.login(process.env['TOKEN']);

app.listen(process.env.PORT, () => {
    console.log('[EXPRESS] Iniciado')
});

setTimeout(() => process.exit(), 600000)
