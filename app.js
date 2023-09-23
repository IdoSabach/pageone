function addname(){
  var newname = document.getElementById("box");
  var newel = document.createElement("div");
  newel.innerHTML = newname.value;
  document.getElementById("fuckblok").appendChild(newel);
}


