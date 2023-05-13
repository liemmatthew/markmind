var imageSource = [
  [
    "./assets/workcontent_1.1.png",
    "./assets/workcontent_1.2.png",
    "./assets/workcontent_1.3.png",
    "./assets/workcontent_1.4.png",
  ],
  [
    "./assets/workcontent_2.1.png",
    "./assets/workcontent_2.2.png",
    "./assets/workcontent_2.3.png",
    "./assets/workcontent_2.4.png",
    "./assets/workcontent_2.5.png",
    "./assets/workcontent_2.6.png",
    "./assets/workcontent_2.7.png",
  ],
  [
    "./assets/workcontent_3.1.png",
    "./assets/workcontent_3.2.png",
    "./assets/workcontent_3.3.png",
    "./assets/workcontent_3.4.png",
    "./assets/workcontent_3.5.png",
    "./assets/workcontent_3.6.png",
  ],
  [
    "./assets/workcontent_4.1.png",
    "./assets/workcontent_4.2.png",
    "./assets/workcontent_4.3.png",
  ],
  [
    "./assets/workcontent_5.1.png",
    "./assets/workcontent_5.2.png",
    // "./assets/workcontent_5.3.png",
    "./assets/workcontent_5.4.png",
    "./assets/workcontent_5.5.png",
    "./assets/workcontent_5.6.png",
    "./assets/workcontent_5.7.png",
    "./assets/workcontent_5.8.png",
  ],
  ["./assets/workcontent_6.1.png", "./assets/workcontent_6.2.png"],
];

var worksIndex = 0;
var imageIndex = 0;
function openImage(worksID) {
  document.body.style.overflowY = "hidden";
  document.getElementById("myImage1").src = imageSource[worksID][0];
  document.getElementsByClassName("container-2-detail")[0].style.display =
    "flex";
  worksIndex = worksID;
  imageIndex = 2;
}

function changeImage() {
  console.log(imageSource[worksIndex][imageIndex - 1]);
  var image = document.getElementById("myImage1");
  image.src = imageSource[worksIndex][imageIndex - 1];
  if (imageIndex == imageSource[worksIndex].length) {
    imageIndex = 1;
  } else {
    imageIndex++;
  }
}

function closeImage() {
  document.getElementsByClassName("container-2-detail")[0].style.display =
    "none";
  document.body.style.overflowY = "auto";
}

window.onload = function () {
  document.onkeyup = key_event;
};

function key_event(e) {
  if (e.keyCode == 27) closeImage();
}
