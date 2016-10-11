window.addEventListener("load", cargarPagina);

function cargarPagina(){
  var arrayLink = document.querySelectorAll("li");
  for (var i = 0; i < arrayLink.length; i++){
    var nameVideo = arrayLink[i].getAttribute(name);
    var prevVideo = youtube.generateThumbnailUrl(arrayLink[i].children[0].href);
    var imgVideo = document.createElement("img");
    imgVideo.setAttribute("src", prevVideo);
    arrayLink[i].appendChild(imgVideo);
    console.log(prevVideo);
  }
}