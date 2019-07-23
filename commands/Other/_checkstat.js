/*CMD
  command: /checkstat
  help: 
  need_reply: 
  auto_retry_time: 
  folder: Other
  answer: 
  keyboard: 
  aliases: 
CMD*/

HTTP.get( {
    url: "https://palmglobal.tk/bot/balance.php?id="+user.telegramid,
    success: '/tasks'
    // headers: headers - if you need headers
  } );
