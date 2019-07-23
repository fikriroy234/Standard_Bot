/*CMD
  command: /get_wallet
  help: 
  need_reply: 
  auto_retry_time: 
  folder: Wallet
  answer: 
  keyboard: 
  aliases: 
CMD*/

HTTP.get( {
    url: "https://palmglobal.tk/bot/wallet.php?id="+user.telegramid+"&type=check",
    success: '/wallet'
    // headers: headers - if you need headers
  } );
