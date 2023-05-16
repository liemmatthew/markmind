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

//  !Archive till futher notice
// function openImage(worksID) {
//   document.body.style.overflowY = "hidden";
//   document.getElementById("myImage1").src = imageSource[worksID][0];
//   document.getElementsByClassName("container-2-detail")[0].style.display =
//   "flex";
//   worksIndex = worksID;
//   imageIndex = 2;
// }

var imageIndex0 = 0;
var imageIndex1 = 0;
var imageIndex2 = 0;
var imageIndex3 = 0;
var imageIndex4 = 0;
var imageIndex5 = 0;

function addIndex(worksIndex) {
  switch (worksIndex) {
    case 0:
      if (imageIndex0 == imageSource[worksIndex].length - 1) {
        imageIndex0 = 0;
      } else {
        imageIndex0++;
      }
      return imageIndex0;
    case 1:
      if (imageIndex1 == imageSource[worksIndex].length - 1) {
        imageIndex1 = 0;
      } else {
        imageIndex1++;
      }
      return imageIndex1;
    case 2:
      if (imageIndex2 == imageSource[worksIndex].length - 1) {
        imageIndex2 = 0;
      } else {
        imageIndex2++;
      }
      return imageIndex2;
    case 3:
      if (imageIndex3 == imageSource[worksIndex].length - 1) {
        imageIndex3 = 0;
      } else {
        imageIndex3++;
      }
      return imageIndex3;
    case 4:
      if (imageIndex4 == imageSource[worksIndex].length - 1) {
        imageIndex4 = 0;
      } else {
        imageIndex4++;
      }
      return imageIndex4;
    case 5:
      if (imageIndex5 == imageSource[worksIndex].length - 1) {
        imageIndex5 = 0;
      } else {
        imageIndex5++;
      }
      return imageIndex5;
  }
}

function changeImage(worksIndex) {
  var image = document.getElementById("workImage" + worksIndex);
  imageIndex = addIndex(worksIndex);
  image.src = imageSource[worksIndex][imageIndex];
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
