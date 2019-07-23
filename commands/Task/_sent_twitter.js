/*CMD
  command: /sent_twitter
  help: 
  need_reply: true
  auto_retry_time: 
  folder: Task
  answer: Enter your twitter username (ex: @user) 
  keyboard: 
  aliases: 
CMD*/

if(data.message=="❎ Cancel"){
Bot.runCommand("/menu");
}else{
Bot.setProperty("twitter", data.message, "String");
Bot.runCommand("/sent_fb");
}
