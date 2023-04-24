const images = [
  "https://picsum.photos/400/300",
  "https://picsum.photos/500/350",
  "https://picsum.photos/600/400",
  "https://picsum.photos/700/450",
  "https://picsum.photos/800/500",
];

const choiceImage = images[Math.floor(Math.random() * images.length)];

const bgImage = document.createElement("img");

bgImage.src = `${choiceImage}`;

document.body.appendChild(bgImage);
