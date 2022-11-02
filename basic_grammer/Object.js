//object 만들기

//----------------
const player = {
  name: 'nico',
  points: 10,
  fat: true,
};

console.log(player);
console.log(player.name);
console.log(player['name']);

//update
player.fat = false;
player.points = player.points + 15;

//add
player.lastname = 'potato';
