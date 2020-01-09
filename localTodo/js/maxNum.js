window.addEventListener("load", function(e) {
  e.preventDefault();
  var number;
  const span = document.getElementById("orange");
  const p = document.getElementById("vals");
  const p1 = document.getElementById("val");
  var arr = [];
   do {
     number = prompt("Add an item to the array (it must be a number) \nType exit to stop");
     if(number.toLocaleLowerCase() === "exit"){
       break;
     }
     if(!isNaN(number)){
         arr.push(number);
      }

    } while (true);
    console.log(arr);
  if(arr.length === 0){
    const head = document.createElement("h2");
    const text = document.createTextNode("Your array is empty");
    p1.append(head.appendChild(text));
  } else {
  var check = arr.reduce(function(acc, e) {
      if(e >= acc){
        acc = e;
      }
      return acc;
  }, arr[0]);
  //check = (check == 0) ? "" : check;
  console.log(check);

  if(!isNaN(check) && (check != 0)){
    p.style.visibility = 'visible';
    span.innerHTML = check;
  }
  }
});
