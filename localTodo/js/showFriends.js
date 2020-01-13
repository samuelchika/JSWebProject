window.addEventListener("load", alls);
var friends = [
    {
        name: "Richard Lewis",
        email: "RichardLewis@outlook.com",
        profilPic: "img/p1.jpg",
        isOnline: true
    },
    {
        name: "Kent	Hill",
        email: "KentHill@gmail.com",
        profilPic: "img/p2.jpg",
        isOnline: false
    },
    {
        name: "Michael Perez",
        email: "MichaelPerez@yahoo.com",
        profilPic: "img/p3.jpg",
        isOnline: true
    },
    {
        name: "Roy Moreno",
        email: "RoyMoreno@outlook.uk",
        profilPic: "img/p4.jpg",
        isOnline: false
    }
];
let online = document.getElementById("on");
let offline = document.getElementById("off");
let all = document.getElementById("all");
all.addEventListener("click", alls);
on.addEventListener("click", onLine);
off.addEventListener("click", offLine);

function everyOne(friendses) {
    let output = "";
    let counter = 1;
    let friend = document.getElementById("friendsList");
    friendses.forEach(function(e) {
        var status = "";
        if(e.isOnline) {
             status = "isOnline";
        } else {
         status = "isOffline";
        }
        output +=
        ''+
    '<li>'+
    	'<img src="../'+e.profilPic+'" alt="">'+
    								'<div class="content">'+
    												'<h2>' +e.name+'</h2>'+
    												'<h4>'+e.email+'</h4>'+
    								'</div>'+
    ''+	'<span class="'+status+' "></span>'+
    				'</li>';
    });
    friend.innerHTML += output;
}
function onLine(e) {
    e.preventDefault();
    let newOnline = friends.filter((item) => {
        return (item.isOnline) ? true : false;
    });
    let friend = document.getElementById("friendsList").innerHTML = "";
    everyOne(newOnline);
    //console.log(newOnline);

}
function alls(e) {
    e.preventDefault();
    let friend = document.getElementById("friendsList").innerHTML = "";
    everyOne(friends);
}
function offLine(e) {
    e.preventDefault();
    let newOnline = friends.filter((item) => {
        return (!(item.isOnline)) ? true : false;
    });
    let friend = document.getElementById("friendsList").innerHTML = "";
    everyOne(newOnline);
    //console.log(newOnline);

}
