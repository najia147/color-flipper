const colors = ['Tomato', 'Orange', 'DodgerBlue', 'Gray', 'LightGray', 'green', 'red'];
const btn = document.getElementById('btn');
const color = document.querySelector('.color');

btn.addEventListener('click', function (){
  const randomNumber = getRandomNumber();
  document.body.style.backgroundColor = colors[randomNumber];
  color.textContent = colors[randomNumber];
  console.log(randomNumber);
})

function getRandomNumber() {
  return Math.floor((Math.random() * colors.length));
}

