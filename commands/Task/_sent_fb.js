/*CMD
  command: /sent_fb
  help: 
  need_reply: true
  auto_retry_time: 
  folder: Task
  answer: Enter your profile facebook URL
  keyboard: 
  aliases: 
CMD*/

if(data.message=="❎ Cancel"){
Bot.runCommand("/menu");
}else{
Bot.setProperty("fb", data.message, "String");
Bot.runCommand("/submit_info");
}
