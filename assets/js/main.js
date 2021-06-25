


// function to check internet connection
function isOnline() {
  if(navigator.onLine) {
    getImages();
    console.log("connected");
  }
  else {
    document.getElementById('imageBag').innerHTML = "You are not connected to the internet...Please, connect to the internet!";
  }
}

function getImages() {
  debugger;
  let likes = ['India','maharashtra', 'Pune', 'Banglore', 'Delhi', 'france', 'europe', 'russia', 'uk', 'canada', 'australia', 'korea', 'africa', 'bhutan', 'asia'];

  for(let i = 0; i < likes.length; i++) {
    var container = document.getElementById('imageBag');
    container.innerHTML = container.innerHTML +'<img src=\"https://source.unsplash.com/random/1300x1200/?'+likes[i] +'\" alt=\"image\">';
  }
}
