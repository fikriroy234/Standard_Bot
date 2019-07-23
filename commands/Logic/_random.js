/*CMD
  command: /random
  help: 
  need_reply: 
  auto_retry_time: 
  folder: Logic
  answer: 
  keyboard: 
  aliases: 
CMD*/

let r = Libs.Random.randomInt(1,20);
let r2 = Libs.Random.randomInt(1,20);
let h = r + r2;
Bot.setProperty("r1", r, "Integer");
Bot.setProperty("r2", r2, "Integer");
Bot.setProperty("h", h, "Integer");
Bot.runCommand("/verif");
