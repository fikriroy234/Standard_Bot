/*CMD
  command: /selectmenu
  help: 
  need_reply: true
  auto_retry_time: 
  folder: Menu
  answer: 
  keyboard: 
  aliases: 
CMD*/

if(data.message == "⏪ Back"){
Bot.runCommand("/menu");
}
else if(data.message == "🎁  Earn XROM"){
Bot.runCommand("/checkstat");
}
else if(data.message == "💳 Wallet"){
Bot.runCommand("/get_wallet");
}
else if(data.message == "💰 Balance"){
Bot.runCommand("/get_balance");
}
else if(data.message == "💠 About"){
Bot.runCommand("/about");
}
else if(data.message == "🎊 Refferal contest"){
Bot.runCommand("/contest");
}
else {
Bot.runCommand("/selectmenu");
}


