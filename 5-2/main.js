// users.jsonを読み込む
const usersArray = require("./users.json").users;

// ランクと年数によって給料の計算をする
const rankSalary = (rank, years) => {
  if (rank === "A" && years < 5) {
    const salary = 3000 * years + 100000;
    return salary;
  } else if (rank === "A" && years >= 5) {
    const salary = 3000 * years + 120000;
    return salary;
  } else if (rank === "B") {
    const salary = 4000 * years + 140000;
    return salary;
  } else {
    const salary = 5000 * years + 160000;
    return salary;
  }
};

// 給料の計算をした結果を名前と一緒に配列に入れる
const users = usersArray.map((user) => {
  const salary = rankSalary(user.rank, user.years);
  return {
    name: user.name,
    salary: salary,
  };
});

// 給料の大きさを比較する
const compare = (a, b) => {
  if (a.salary > b.salary) {
    return -1;
  } else if (a.salary < b.salary) {
    return 1;
  } else {
    return 0;
  }
};

// 給料の大きさを比較して降順にソートする
const sortedUsers = users.sort(compare);

sortedUsers.map((user) => [console.log(`${user.name}:${user.salary}`)]);
