/*CMD
  command: /verif
  help: 
  need_reply: true
  auto_retry_time: 
  folder: Logic

  <<ANSWER
In order to continue, please answer the following mathematical question
<r1> + <r2> = ?
  ANSWER
  keyboard: 
  aliases: 
CMD*/

if(data.message == Bot.getProperty("h")){
Bot.runCommand("/menu");
}
else{
Bot.runCommand("/random");
}
