/*CMD
  command: /balance
  help: 
  need_reply: 
  auto_retry_time: 
  folder: Menu
  answer: 
  keyboard: 
  aliases: 
CMD*/

function info(b, r){
Bot.sendMessage("💰 Balance \n\n"+b+" XROM\nReferrals: "+r+" \n\nShare and forward the referral link to your network and get 3 XROM for each friend invited! They will have to join our chat and stay until the end of the Airdrop campagne you to receive the reward! \n\nYour referral link:\nhttps://t.me/RomAirdrop_bot?start="+user.telegramid);
}

let b = content;
let a = 0;
let r = 0;

if(b>0){
a = b - 15;
r = a/3;
info (b, r);
} else {
info(0,0);
}
Bot.runCommand("/selectmenu");
