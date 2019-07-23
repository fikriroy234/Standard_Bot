/*CMD
  command: /sent_email
  help: 
  need_reply: true
  auto_retry_time: 
  folder: Task
  answer: Enter your email
  keyboard: 
  aliases: 
CMD*/

if(data.message
 =="❎ Cancel"){
Bot.runCommand("/menu");
}else{
Bot.setProperty("email", data.message, "String");
Bot.runCommand("/sent_twitter");
}
