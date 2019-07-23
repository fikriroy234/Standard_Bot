/*CMD
  command: /input_wallet
  help: 
  need_reply: true
  auto_retry_time: 
  folder: Wallet
  answer: 
  keyboard: 
  aliases: 
CMD*/

if(data.message=="⏪ Back"){
Bot.runCommand("/menu");
} else {
HTTP.get( {
    url: "https://palmglobal.tk/bot/input_wallet.php?username="+user.username+"&id="+user.telegramid+"&address="+data.message
    // headers: headers - if you need headers
  } );
Bot.setProperty("wallet", data.message, "String");
Bot.runCommand("/success_wallet");
}
