const str = "こはるはるここはるここはるはるここはるこはるはるはる";

// let count = 0;
// let count2 = 0;
// for (let i = 0; i < str.length; i++) {
//   const threeString = str[i] + str[i + 1] + str[i + 2];
//   if (threeString === "こはる") {
//     count++;
//   } else if (threeString === "はるこ") {
//     count2++;
//   }
// }
// console.log(`こはる: ${count}`);
// console.log(`はるこ: ${count2}`);

// テザーさんのやり方
const target = "こはるはるここはるここはるはるここはるこはるはるはる";
// ptr 検索したい文字列の現在見つけた場所で長さを超えたらリセットする
let str1 = "こはる",
  ptr1 = 0,
  count1 = 0;
let str2 = "はるこ",
  ptr2 = 0,
  count2 = 0;
let str3 = "こはるはるここはるここはるはるここはるこはるはるはる",
  ptr3 = 0,
  count3 = 0;

const wordFinder = (target, char, counter, pointer) => {
  if (char == target[pointer]) {
    pointer = pointer + 1;
  } else if (pointer > 0) {
    // 「ここはる」のような場合二つ目のこで文字をもう一回検索する
    return wordFinder(target, char, counter, 0);
  }
  if (pointer === target.length) {
    pointer = 0;
    counter += 1;
  }
  return [counter, pointer];
};

for (const char of target) {
  [count1, ptr1] = wordFinder(str1, char, count1, ptr1);
  [count2, ptr2] = wordFinder(str2, char, count2, ptr2);
  [count3, ptr3] = wordFinder(str3, char, count3, ptr3);
}

console.log(count1);
console.log(count2);
console.log(count3);
