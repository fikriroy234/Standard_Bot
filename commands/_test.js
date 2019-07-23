/*CMD
  command: /test
  help: 
  need_reply: 
  auto_retry_time: 
  folder: 

  <<ANSWER

  ANSWER
  keyboard: 
  aliases: 
CMD*/

let msg = Bot.getProperty("stat");
if(msg == ""){
Bot.sendMessage("oke");
} else {
Bot.sendMessage("\n"+user.telegramid);
}
