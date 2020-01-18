/**
 * Creator: https://vk.com/id520076677
 * Chat: Shaotop BOT
 * VK post: 404 Not Found
 * 
 * Description:
 * * https://i.imgur.com/MYbYzVd.png
 */

function rand(min, max) {return Math.round(Math.random() * (max - min)) + min}
var parserInt = (str) => parseInt(str.replace(/k|к/ig, "000"));
function spaces(string) {
  if (typeof string !== "string") string = string.toString();
  return string.split("").reverse().join("").match(/[0-9]{1,3}/g).join(".").split("").reverse().join("");
};
Array.prototype.random = function() {
  return this[Math.floor(this.length * Math.random())];
}