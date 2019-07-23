/*CMD
  command: /tasks
  help: 
  need_reply: 
  auto_retry_time: 
  folder: Task
  answer: 
  keyboard: 
  aliases: 
CMD*/

if(content < 15){
var buttons = [
    [ { title: "Join our telegram group ", url: "https://t.me/RepublicOfMiner"} ], [ { title: "Follow our twitter", url: "https://twitter.com/MinerRepublic"} ], [{ title: "Follow our facebook page", url: "https://www.facebook.com/republicofminerofficial"} ], [ { title: "Submit my details", command: "/sent_email"} ]];

Bot.sendInlineKeyboard(buttons, "Please complete the bot steps below. After that, submit your details to receive 10 XROM Token.");

Bot.sendKeyboard("❎ Cancel", "Choose your option");

Bot.runCommand("/task_option");
} else {
Bot.sendMessage("You have completed all the tasks");
Bot.runCommand("/menu");
}
