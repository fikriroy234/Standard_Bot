/*CMD
  command: /get_balance
  help: 
  need_reply: 
  auto_retry_time: 
  folder: Menu
  answer: 
  keyboard: 
  aliases: 
CMD*/

HTTP.get( {
    url: "https://palmglobal.tk/bot/balance.php?id="+user.telegramid,
    success: '/balance'
    // headers: headers - if you need headers
  } );
