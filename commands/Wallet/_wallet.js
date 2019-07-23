/*CMD
  command: /wallet
  help: 
  need_reply: 
  auto_retry_time: 
  folder: Wallet

  <<ANSWER

  ANSWER
  keyboard: 
  aliases: 
CMD*/

let adr = content;
if(adr=="" || adr=="empty"){
var button = [ [{title: "Add ERC20 wallet", command: "/add_erc20"}]];

Bot.sendInlineKeyboard(button, "💳 *Wallet* \n\nPlease set your Ethereum wallet where your XROM tokens should be sent. Make sure your wallet is not from an exchange and that it accepts ERC20 tokens.\n\nWe recommend Trust Wallet:\n👉 https://trustwallet.com/");
} else {
var button = [ [{title: "Remove ERC20 wallet", command: "/remove_erc20"}]];
Bot.sendInlineKeyboard(button, "💳 *Wallet*\n\nYour saved Ethereum wallet\n\n"+adr);
}
Bot.runCommand("/selectmenu");
