forever

const Discord = require('discord.js');
const bot = new Discord.Client();

const token = 'Njk3NjA5MzkxMTc5OTU2MjU1.Xo6IXg.L_lwgSOKYUpWuVMsesAVDMEPRuI';

bot.on('ready', () =>{
    console.log('Windows 95 startup sound plays');
})
const PREFIX = '>';
var servers = {};




//Command Handler Script
const fs = require('fs');
bot.commands = new Discord.Collection();
const commandFiles = fs.readdirSync('./Commands').filter(File => File.endsWith('.js'));
for(const File of commandFiles){
    const command = require(`./Commands/${File}`);

    bot.commands.set(command.name, command);
}
// End Command Handler Script

bot.on('guildMemberAdd', member =>{

    const channel = member.guild.channels.find(channel => channel.name === "announcements");
if(!channel) return;

channel.send(`Welcome to ${guild.name} @${member.tag} Have a great time in ${guild.name}!`)
});

bot.on('message', msg=>{
    if(msg.content === "Mac"){
        msg.reply('No windows is better');
    }
})

bot.on('message', msg=>{
    if(msg.content === "Apple"){
        msg.reply('Sucks');
    }
})

bot.on('message', msg=>{
    if(msg.content === "Microsoft Rules"){
        msg.reply('yeahhhhhh boiiiiiiiiiiiiiiii!!!!!');
    }
})


bot.on('message', msg => {

    let args = msg.content.substring(PREFIX.length).split(" ");

    switch (args[0]) {
        case 'ping':
            bot.commands.get('ping').execute(msg, args);
            break;
        case 'info':
           bot.commands.get('info').execute(msg, args);
            break;
        case 'clear':
           bot.commands.get('clear').execute(msg, args);
            break;
        case 'playerinfo':
           bot.commands.get('playerinfo').execute(msg, args);
            break;
        case 'mute':
           bot.commands.get('mute').execute(msg, args);
            break;

            break;
        case 'kick':
            if (!args[1]) msg.channel.send('Error Missing person ^kick   <----[HERE]')

            const user1 = msg.mentions.users.first();

            if (user1) {
                const member = msg.guild.member(user1);

                if (member) {
                    member.kick('Kicked for Acting Up').then(() => {
                        msg.reply(`Sucessfully kicked @${user.tag}`);
                    }).catch(Error => {
                        msg.reply(`I was unable to kick @${user.tag}!`);
                        console.log(Error);
                    });
                } else {
                    msg.reply(`@${user1.tag} isn\'t in the server!`)
                }
            } else {
                msg.reply(`@${user1.tag} isn\'t in the guild!`)
            }
            break;
        case 'ban':
            if (!args[1]) msg.channel.send('Error Missing person ^kick   <----[HERE]')

            const user = msg.mentions.users.first();

            if (user) {
                const member = msg.guild.member(user);

                if (member) {
                    member.ban({
                        ression: 'you were bad '
                    }).then(() => {
                        msg.reply(`@${user.tag} was banned!`)
                    })

                } else {
                    msg.reply(`@${user.tag} isn\'t in the server!`)
                }
            } else {
                msg.reply(`@${user.tag} isn\'t in the guild!`)
            }

            break;

/* case 'Meme':
image2(msg);
break;
*/
case 'meme':
                            image(msg);
                            break;

      
           
                
        };
    }   )
    
    
    bot.login(token);

function image(msg) {

    var options = {
        url: "http://results.dogpile.com/serp?qc=images&q=" + "Windows Memes",
        method: "GET",
        headers: {
            "Accept": "text/html",
            "User-Agent": "Chrome"
        }
    };

    request(options, function (error, response, responseBody) {
        if (error) {
            return;
        }

        $ = cheerio.load(responseBody);


        var links = $(".image a.link");

        var urls = new Array(links.length).fill(0).map((v, i) => links.eq(i).attr("href"));

        console.log(urls);
        if (!urls.length) {

            return;

        }

        //send request
        msg.channel.send(urls[Math.floor(Math.random() * urls.length)]);

    });
}
