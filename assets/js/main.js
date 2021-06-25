
// function to check internet connection
function isOnline() {

  if(navigator.onLine) {
    getImages();
  }
  else {
    document.getElementById('imageBag').innerHTML = "You are not connected to the internet...Please, connect to the internet!";
  }
}

//get random array of indexes
function getIndex(size) {

  let arr = [];
  while(arr.length < size){
    var r = Math.floor(Math.random() * size);
    if(arr.indexOf(r) === -1) arr.push(r);
  }
  return arr;
}

//get images from unplash api
function getImages() {
  debugger;
  let likes = ['India','Maharashtra', 'Pune', 'Kashmir', 'Delhi', 'France', 'Europe', 'Russia', 'Birds', 'Canada', 'Australia', 'korea', 'Africa', 'Bhutan', 'Asia', 'Italy', 'Thailand', 'Japan', 'Croatia', 'Israel', 'Flowers', 'Nature', 'switzerland', 'Animals'];
  let container = document.getElementById('imageBag');
  let randomIndex = getIndex(likes.length);

  for(let i = 0, j = 0; i < likes.length; i++) {
    j = randomIndex[i];
    container.innerHTML = container.innerHTML +'<div class=\"imgContainer\"><img src=\"https://source.unsplash.com/random/1300x1200/?'+likes[j] +'\" class=\"gallery\" alt=\"'+ likes[j]+'\"><div class=\"overlay\"> Beautiful '+ likes[j] +'</div></div>';
  }
}
