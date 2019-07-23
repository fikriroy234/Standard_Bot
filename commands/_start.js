/*CMD
  command: /start
  help: 
  need_reply: 
  auto_retry_time: 
  folder: 

  <<ANSWER

  ANSWER
  keyboard: 
  aliases: 
CMD*/

let trackOptions = {
  onAttracted: doAttracted
}

Libs.ReferralLib.currentUser.track(trackOptions);

function doAttracted(channel){
  Bot.setProperty("reff", channel, "String");
}
Bot.runCommand("/random");
