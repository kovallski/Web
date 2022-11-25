let blocks = document.querySelectorAll("a");
const currentLocation = document.location.pathname.split("/").reverse()[0].split(".")[0];
switch(currentLocation) {
  case "index" :
    blocks[0].style.color='red';
    break;
  case "gallery":
    blocks[1].style.color='red';
    break;
  case "plans":
    blocks[2].style.color='red';
}	  	