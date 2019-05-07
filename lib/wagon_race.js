// TODO: write your code here
const moveTrump = (wagon, image, soundbite) => {
  const audio = new Audio(soundbite);
  audio.play();
  wagon.nextElementSibling.classList.add('active');
  wagon.nextElementSibling.innerHTML = `<td><img src="images/${image}.png"></td>`;
  wagon.classList.remove('active');
  wagon.innerHTML = '<td></td>';
};


const trumpWins = () => {
  alert('🍔🍔🍔🍔🍔🍔\nTrump got the burger!\n NOMNOMNOMNOMNOM\n🍔🍔🍔🍔🍔');
};

const checkWin = (trump) => {
  if (trump.classList.contains('finish_line')) {
    trumpWins();
    document.location.reload();
  }
};

document.addEventListener("keyup", (event) => {
  // console.log(event);
  if (event.key === "q") {
    const redWagon = document.querySelector('#player1_race > .active');
    checkWin(redWagon);
    moveTrump(redWagon, "trump2", 'images/rich.mp3');
  }
  if (event.key === "p") {
    const blueWagon = document.querySelector('#player2_race > .active');
    checkWin(blueWagon);
    moveTrump(blueWagon, "trump", 'images/china.mp3');
  }
});
