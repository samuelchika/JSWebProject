const form = document.getElementById("submit");
const name = document.getElementById("names");
const email = document.getElementById("email");
const dob = document.getElementById("dob");
let gender = "";
const male = document.getElementById("male");
const female = document.getElementById("female");
const result = document.getElementById("result");
const genderLabel = document.getElementById("genderLabel");
const city = document.getElementById("city");
const html = document.getElementById("html");
const css = document.getElementById("css");
const html5 = document.getElementById("html5");
const css3 = document.getElementById("css3");
const js = document.getElementById("js");
const php = document.getElementById("php");
let course = "";
let todos = [];
manipulation();
todos = JSON.parse(window.localStorage.getItem('user'));
  console.log(todos);
form.addEventListener("click", function(e) {
  e.preventDefault();
  if (html.checked || css.checked || html5.checked || css3.checked || js.checked || php.checked) {
    course += (html.checked) ? (html.value.toUpperCase() + " ") : "";
    course += (css.checked) ? (css.value.toUpperCase() + " ") : "";
    course += (html5.checked) ? (html5.value.toUpperCase() + " ") : "";
    course += (css3.checked) ? (css3.value.toUpperCase() + " ") : "";
    course += (js.checked) ? (js.value.toUpperCase() + " ") : "";
    course += (php.checked) ? (php.value.toUpperCase() + " ") : "";


  }


  let names = name.value;
  let emails = email.value;
  if(male.checked) {
    gender = male.value;
  } else if(female.checked) {
    gender = female.value;
  }
  let d = dob.value;

  var cities = city.value;
  validation(names, emails, gender, d, cities, course)  ? console.log("one is not enterd") : console.log("all entered");
  //assinging the input into the variable.
  let input = inputs (names, emails, gender, d, cities, course);
  const jsonDataCheck = JSON.parse(window.localStorage.getItem('user'));
    console.log(jsonDataCheck);

  todos.push(input);
  window.localStorage.setItem('user', JSON.stringify(todos));
  manipulation();

  //console.log(todos);
  course = "";
});

function validation(names, emails, gender, d, cities, courses) {

  return valid = (names == "" || emails == "" || gender == "" || d.toString() == "" || cities == "" || course == "") ? console.log("one is not enterd") : console.log("all entered");
}

function inputs (names, emails, gender, d, cities, course) {
  var date = new Date(d);
  var dateOfBirth = date.toDateString();
  var cours = [];
  cours = course.trim().split(" ");
  let dataCollected = {
    "name" : names,
    "email" : emails,
    "gender" : gender,
    "dob" : dateOfBirth,
    "city" : cities,
    "course" : cours
  }
  return dataCollected;
}

function manipulation() {
  const tableBody = document.getElementById("tableBody");
  let outputs = "";

  const jsonData = JSON.parse(window.localStorage.getItem('user'));

  for (var i = 0; i < jsonData.length; i++) {
    outputs += "<tr><td>" + (i + 1) + "</td><td>" + jsonData[i].name +"</td><td>" + jsonData[i].email + "</td><td>" + jsonData[i].dob +"</td> <td> " + jsonData[i].gender +"</td> <td> " + jsonData[i].city +" </td> <td> " + jsonData[i].course.join(" ") +" </td><td><button onclick=removes(" + i + ")>Delete Entry</button></td></tr>";
  }
  tableBody.innerHTML = outputs;

}
function removes(i) {
  const todos = JSON.parse(window.localStorage.getItem('user'));
  todos.splice(i,1);
  window.localStorage.setItem('user', JSON.stringify(todos));
  console.log(i);
  manipulation();
}

// function split(course) {
//   let courses = "";
//   for (var i = 0; i < course.length; i++) {
//     courses += course[i] + " ";
//   }
//   return courses.trim();
// }

//first - Get the requierd information;
//second - assign it into a variable
//third - get the data from the json and parse to text file into a variable;
//fourth - add the newly gotten datas
//fifth - output it to the page,
//sixth -  convert back to json and save.
