const candidate = Array(45) // new의 유무가 차이가 있긴한데 거의 안붙여도 된다.
  .fill(0)
  .map((v, i) => i + 1);

//피셔-예이츠 셔플(배열을 섞고나서 앞에서부터 7개 번호를 가져옴)
const shuffle = [];
while (candidate.length > 0) {
  const random = Math.floor(Math.random() * candidate.length);
  const spliceArray = candidate.splice(random, 1);
  const value = spliceArray[0];
  shuffle.push(value);
}

// ⭐ splice와 slice의 차이 알기
const winBalls = shuffle.slice(0, 6).sort((a, b) => a - b);
const bonus = shuffle[6];
console.log(winBalls, bonus);

// 🌟 배열의 메소드 중 원본을 바꾸는 경우, arr.slice() 로 해서 테스트해보면 원본을 유지할 수 있다.
// 왜냐하면 arr.slice()는 깊은 복사가 되는 경우로 생긴 것만 다른 아예 다른 객체를 만들기 때문!

const $result = document.querySelector('#result');
const $bonus = document.querySelector('#bonus');

const colorize = (number, $tag) => {
  if (number < 10) {
    $tag.style.backgroundColor = 'red';
    $tag.style.color = 'white';
  } else if (number < 20) {
    $tag.style.backgroundColor = 'orange';
  } else if (number < 30) {
    $tag.style.backgroundColor = 'yellow';
  } else if (number < 40) {
    $tag.style.backgroundColor = 'blue';
    $tag.style.color = 'white';
  } else {
    $tag.style.backgroundColor = 'green';
    $tag.style.color = 'white';
  }
};
const drawball = (number, $target) => {
  const $ball = document.createElement('div');
  $ball.className = 'ball';
  $ball.textContent = number;
  colorize(number, $ball);
  $target.appendChild($ball);
};

for (let i = 0; i < winBalls.length; i++) {
  setTimeout(() => {
    drawball(winBalls[i], $result);
  }, 1000 * (i + 1));
}

// // var를 쓰고 클로져 문제 해결
// for (var i = 0; i < winBalls.length; i++) {
//   (function (j) {
//     setTimeout(() => {
//       drawball(winBalls[j], $result);
//     }, 1000 * (j + 1));
//   })(i);
// }

setTimeout(() => {
  drawball(bonus, $bonus);
}, 1000 * 7);
