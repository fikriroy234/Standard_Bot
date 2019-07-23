/*CMD
  command: /remove_erc20
  help: 
  need_reply: 
  auto_retry_time: 
  folder: Wallet
  answer: 
  keyboard: 
  aliases: 
CMD*/

HTTP.get( {
    url: "https://palmglobal.tk/bot/wallet.php?id="+user.telegramid+"&type=remove",
    success: '/wallet'
    // headers: headers - if you need headers
  } );
var but = [ [{title: "Add your ERC20 wallet", command: "/add_erc20"}] ];

Bot.sendInlineKeyboard(but, "💳 *Wallet*\n\n✅ Your ERC20 wallet has been removed");
Bot.runCommand("/selectmenu");
