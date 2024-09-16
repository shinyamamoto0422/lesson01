const names = process.argv[2].split(",");
const a = process.argv[3];

// nameを小文字に変換して、aが含まれていれば、その配列を作成する
// アルファベット順位並べて出力する
const lowers = names.map((name) => {
  return name.toLowerCase();
});

const includesA = lowers.filter((lower) => {
  return lower.includes(a);
});

const sortFunc = (a, b) => {
  if (b > a) return -1;
  else if (b < a) return 1;
  return 0;
};
const sorted = includesA.sort(sortFunc);
sorted.map((name) => {
  process.stdout.write(name + " ");
});
