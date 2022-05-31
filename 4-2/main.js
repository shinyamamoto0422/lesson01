// 3の倍数であれば、wowを表示する
// 3が含まれていてもwowを表示する

const fiftyArray = [...Array(50).keys()].map((x) => x + 1);
const wow = "WOW";

fiftyArray.forEach((x) => {
  if (x % 3 === 0) {
    console.log(wow);
  } else if (x.toString().includes("3")) {
    console.log(wow);
  } else {
    console.log(x);
  }
});
