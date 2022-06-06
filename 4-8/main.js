const str = "こはるはるここはるここはるはるここはるこはるはるはる";

let count = 0;
let count2 = 0;
for (let i = 0; i < str.length; i++) {
  const threeString = str[i] + str[i + 1] + str[i + 2];
  if (threeString === "こはる") {
    count++;
  } else if (threeString === "はるこ") {
    count2++;
  }
}
console.log(`こはる: ${count}`);
console.log(`はるこ: ${count2}`);
