var players = [
  {
    name: "Sujon",
    avg: 38.25,
  },
  {
    name: "Uzzal",
    avg: 44.33,
  },
  {
    name: "Rahul",
    avg: 35.18,
  },
  {
    name: "Nasir",
    avg: 52.14,
  },
];

// var playersWithAvgThirtySeven = [];

// for (var i = 0; i < players.length; i++) {
//   if (players[i].avg >= 37) {
//     playersWithAvgThirtySeven.push(players[i]);
//   }
// }
// console.log(playersWithAvgThirtySeven);

var playersWithAvgThirtySeven = players.filter((player) => player.avg >= 37);

console.log(playersWithAvgThirtySeven);
