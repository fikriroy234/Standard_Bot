/*CMD
  command: /menu
  help: 
  need_reply: 
  auto_retry_time: 
  folder: Menu

  <<ANSWER

  ANSWER
  keyboard: 
  aliases: 
CMD*/

Bot.sendKeyboard("💰 Balance, 🎁  Earn XROM,\n💳 Wallet,💠 About, \n🎊 Refferal contest", "Select menu");
Bot.runCommand("/selectmenu");
