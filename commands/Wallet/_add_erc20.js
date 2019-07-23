/*CMD
  command: /add_erc20
  help: 
  need_reply: 
  auto_retry_time: 
  folder: Wallet
  answer: 
  keyboard: 
  aliases: 
CMD*/

Bot.sendKeyboard("⏪ Back", "Send your Ethereum (ERC20) wallet address");
Bot.runCommand("/input_wallet");
