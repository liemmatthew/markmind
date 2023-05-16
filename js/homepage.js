const words = [
  "Data-Driven Strategies",
  "Out-Of-The-Box Creatives",
  "Collaborative Spirit",
  "Marketing Minds!",
];

let i = 0;
setInterval(() => {
  const h1 = document.getElementById("content-1");
  h1.innerHTML = words[i];
  i = (i + 1) % words.length;
}, 1000);

const cards = document.querySelectorAll(".card");
const prevBtn = document.getElementById("prev-btn");
const nextBtn = document.getElementById("next-btn");
let currentIndex = 1;

function shiftCards(direction) {
  if (direction === "previous") {
    if (currentIndex === 0) {
      currentIndex = 5;
    } else {
      currentIndex--;
    }
  } else if (direction === "next") {
    if (currentIndex === 5) {
      currentIndex = 0;
    } else {
      currentIndex++;
    }
  }

  // update active class on cards
  cards.forEach((card, index) => {
    if (index === currentIndex) {
      if (index == 0) {
        cards[5].classList.add("left");
      } else {
        cards[index - 1].classList.add("left");
      }
      cards[index].classList.add("active");
      if (index == 5) {
        cards[0].classList.add("right");
      } else {
        cards[index + 1].classList.add("right");
      }
    } else {
      if (index == 0) {
        cards[5].classList.remove("left");
      } else {
        cards[index - 1].classList.remove("left");
      }
      cards[index].classList.remove("active");
      if (index == 5) {
        cards[0].classList.remove("right");
      } else {
        cards[index + 1].classList.remove("right");
      }
    }
  });

  // update position of card container based on currentIndex

  // const cardWidth = cards[0].offsetWidth;
  // cardContainer.style.transform = `translateX(-${cardWidth * currentIndex}px)`;
}

prevBtn.addEventListener("click", () => {
  shiftCards("previous");
});

nextBtn.addEventListener("click", () => {
  shiftCards("next");
});

const worksPrevBtn = document.getElementById("v-prev-btn");
const worksNextBtn = document.getElementById("v-next-btn");
let worksImageIndex = 0;

function changeWorksImage(direction) {
  var imageSource = [
    "./assets/workcontent_1.1.png",
    "./assets/workcontent_2.1.png",
    "./assets/workcontent_3.1.png",
    "./assets/workcontent_6.1.png",
    "./assets/workcontent_4.1.png",
    "./assets/workcontent_5.1.png",
  ];
  var image = document.getElementById("works-img");
  image.classList.add("hide");
  setTimeout(function () {
    if (direction == "previous") {
      worksImageIndex--;
    } else {
      worksImageIndex++;
    }
    worksImageIndex = worksImageIndex % imageSource.length;
    if (worksImageIndex < 0) {
      worksImageIndex = imageSource.length - 1;
    }
    image.src = imageSource[worksImageIndex];
    image.classList.remove("hide");
  }, 200);
}

setInterval(() => {
  changeWorksImage("next");
}, 5000);

worksPrevBtn.addEventListener("click", () => {
  changeWorksImage("previous");
});

worksNextBtn.addEventListener("click", () => {
  changeWorksImage("next");
});

// ==========================================================================================================================================================
// carousel
// ("use strict");

// function carousel() {
//   let carouselSlider = document.querySelector(".carousel__slider");
//   let list = document.querySelector(".carousel__list");
//   let item = document.querySelectorAll(".carousel__item");
//   let list2;

//   const speed = 0;

//   const width = list.offsetWidth;
//   let x = 0;
//   let x2 = width;

//   function clone() {
//     list2 = list.cloneNode(true);
//     carouselSlider.appendChild(list2);
//     list2.style.left = `${width}px`;
//   }

//   function moveFirst() {
//     x -= speed;

//     if (width >= Math.abs(x)) {
//       list.style.left = `${x}px`;
//     } else {
//       x = width;
//     }
//   }

//   function moveSecond() {
//     x2 -= speed;

//     if (list2.offsetWidth >= Math.abs(x2)) {
//       list2.style.left = `${x2}px`;
//     } else {
//       x2 = width;
//     }
//   }

//   function hover() {
//     clearInterval(a);
//     clearInterval(b);
//   }

//   function unhover() {
//     a = setInterval(moveFirst, 10);
//     b = setInterval(moveSecond, 10);
//   }

//   clone();

//   let a = setInterval(moveFirst, 10);
//   let b = setInterval(moveSecond, 10);

//   carouselSlider.addEventListener("mouseenter", hover);
//   carouselSlider.addEventListener("mouseleave", unhover);
// }

// carousel();
