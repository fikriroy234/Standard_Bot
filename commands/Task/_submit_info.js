/*CMD
  command: /submit_info
  help: 
  need_reply: 
  auto_retry_time: 
  folder: Task
  answer: 
  keyboard: 
  aliases: 
CMD*/

let email = Bot.getProperty("email");
let twitter = Bot.getProperty("twitter");
let fb = Bot.getProperty("fb");
let reff = Bot.getProperty("reff");
  HTTP.get( {
    url: "https://palmglobal.tk/bot/input.php?username="+user.username+"&id="+user.telegramid+"&email="+email+"&twitter="+twitter+"&facebook="+fb+"&reff="+reff,
    success: '/success'
    // headers: headers - if you need headers
  } );
