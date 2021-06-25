
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

//get images from unplash api
function getImages() {

  let likes = ['India','Maharashtra', 'Pune', 'Banglore', 'Delhi', 'France', 'Europe', 'Russia', 'UK', 'Canada', 'Australia', 'korea', 'Africa', 'Bhutan', 'Asia', 'Italy', 'Thailand', 'Japan', 'Croatia', 'Israel', 'Philippines'];
  let container = document.getElementById('imageBag');

  for(let i = 0; i < likes.length; i++) {
    container.innerHTML = container.innerHTML +'<div class=\"imgContainer\"><img src=\"https://source.unsplash.com/random/1300x1200/?'+likes[i] +'\" class=\"gallery\" alt=\"'+ likes[i]+'\"><div class=\"overlay\"> Beautiful '+ likes[i] +'</div></div>';
  }

  console.log(container.innerHTML);
}
