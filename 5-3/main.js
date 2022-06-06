const playData = require("./playdata.json").data;
const songData = require("./songs.json").songs;

const compare = (a, b) => {
  const aNum = Number(a.count);
  const bNum = Number(b.count);
  if (aNum < bNum) {
    return 1;
  }
  if (aNum > bNum) {
    return -1;
  }
  return 0;
};
const sortedPlayData = playData.sort(compare);

// sortedPlayDataのidに一致するsongDataのtitleを取得
const getTitle = (id) => {
  const numberId = Number(id);
  const song = songData.find((song) => song.id === numberId);
  return song?.title;
};
// 二つのデータを合体させる
const mergeData = (sortedPlayData) => {
  const mergedData = sortedPlayData.map((play) => {
    const title = getTitle(play.id);
    return {
      title,
      count: play.count,
    };
  });
  return mergedData;
};

console.log(
  mergeData(sortedPlayData).map(
    (data) => `順位:title ${data.title}\t${data.count}`
  )
);
