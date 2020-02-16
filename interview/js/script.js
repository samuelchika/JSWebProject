var q1 = document.forms["questionForm"]["q1"];
var q2 = document.forms["questionForm"]["q2"];
var q3 = document.forms["questionForm"]["q3"];
var q4 = document.forms["questionForm"]["q4"];
var q5 = document.forms["questionForm"]["q5"];
removeElements(q1);
removeElements(q2);
removeElements(q3);
removeElements(q4);
removeElements(q5);
function removeElements(element) {
   element.forEach((item, i) => {
      item.addEventListener('click', (e) => {
         alert("You Selected option: " + item.value);
         console.log(item.parentElement);
         item.parentElement.style.visibility = "hidden";
         //item.parentElement.remove();
      });

   });
}

function validaterForm() {
   //total question = 5;
   var total = 5;
   var score = 0;

   //we get the values of the 5 question;
   var q1 = document.forms["questionForm"]["q1"];
   var q2 = document.forms["questionForm"]["q2"];
   var q3 = document.forms["questionForm"]["q3"];
   var q4 = document.forms["questionForm"]["q4"];
   var q5 = document.forms["questionForm"]["q5"];


   //validatioin
   for(i = 1; i <= total; i++) {
      if(eval("q" + i).value == null || eval("q" + i).value == "") {
         alert("Please answer question " + i);
         return false;
      }
   }

   var answers = ["b", "a", "c", "c", "b"];

   var result = document.getElementById("result");
   for(var i = 1; i <= total; i++) {
      if(eval("q" + i).value == answers[i - 1]) {
         score++;
      }
   }
   if((total / score) >= 3) {
      result.style.backgroundColor = "green";
      result.innerHTML = "Your score is " + score + " out of " + total;
   } else {
      result.style.backgroundColor = "coral";
      result.innerHTML = "Your score is " + score + " out of " + total;
   }


   alert("You scored " + score + " out of " + total);
   showElements(q1);
   showElements(q2);
   showElements(q3);
   showElements(q4);
   showElements(q5);
   return false;
}
function showElements(element) {
   element.forEach((item, i) => {

         item.parentElement.style.visibility = "visible";
         //item.parentElement.remove();

   });
}
