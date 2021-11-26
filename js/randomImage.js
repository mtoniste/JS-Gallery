const myButton = document.querySelector('button');
const image = document.querySelector('img');
const images = ["1.jpeg", "2.jpeg", "3.jpeg", "4.jpeg"];

myButton.addEventListener('click', changeImage);

function changeImage() {
    let randomIndex = Math.floor(Math.random() * images.length);
    console.log(randomIndex);
    image.src = "images/" + images[randomIndex];
}