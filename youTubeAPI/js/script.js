
$(function() {
   var searchField = $('#query');
   var icon = $('#search-btn');

   $('#search-form').submit((e) => {
      e.preventDefault();
   });
})
function search() {
   //clear results
   $('#result').html('');
   $('#buttons').html('');

   //grap what the user want to search for
   var q = $('#query').val();

   //Run GET Request on YouTubeAPI
   $.get(
      "https://www.googleapis.com/youtube/v3/search", {
         part: 'snippet, id',
         q: q,
         type: 'video',
         key: 'AIzaSyAbZg20QOmlKF-LesqN5JhKvsEZmXOMfjA'
      }, function(data){ //the searh url above return the data we are passing into the function and it is with the data we can access the title, channel name etc
         var nextPageToken = data.nextPageToken;
         var prevPageToken = data.prevPageToken;
         //we have to loop through each data item
         console.log(data);
         $.each(data.items, function(i, item){
            //we save the data inside output and append to result
            var output = getOutput(item);

            //Display Result
            $('#result').append(output);

            //buttons

         });
         var button = getButtons(prevPageToken, nextPageToken, q);
         console.log(button);
         $('#buttons').append(button);
      }
   )
}
//prev page function

function prevPage() {
   var token =  $('#prev-button').data('token');
   var query =  $('#prev-button').data('query');
   //copy everything in the search();

   //clear results
   $('#result').html('');
   $('#buttons').html('');

   //grap what the user want to search for
   var q = $('#query').val();

   //Run GET Request on YouTubeAPI
   $.get(
      "https://www.googleapis.com/youtube/v3/search", {
         part: 'snippet, id',
         q: q,
         pageToken: token,
         type: 'video',
         key: 'AIzaSyAbZg20QOmlKF-LesqN5JhKvsEZmXOMfjA'
      }, function(data){ //the searh url above return the data we are passing into the function and it is with the data we can access the title, channel name etc
         var nextPageToken = data.nextPageToken;
         var prevPageToken = data.prevPageToken;
         //we have to loop through each data item
         console.log(data);
         $.each(data.items, function(i, item){
            //we save the data inside output and append to result
            var output = getOutput(item);

            //Display Result
            $('#result').append(output);

            //buttons

         });
         var button = getButtons(prevPageToken, nextPageToken, q);
         console.log(button);
         $('#buttons').append(button);
      }
   )
}

//next page function
function nextPage() {
   var token =  $('#next-button').data('token');
   var query =  $('#next-button').data('query');
   //copy everything in the search();

   //clear results
   $('#result').html('');
   $('#buttons').html('');

   //grap what the user want to search for
   var q = $('#query').val();

   //Run GET Request on YouTubeAPI
   $.get(
      "https://www.googleapis.com/youtube/v3/search", {
         part: 'snippet, id',
         q: q,
         pageToken: token,
         type: 'video',
         key: 'AIzaSyAbZg20QOmlKF-LesqN5JhKvsEZmXOMfjA'
      }, function(data){ //the searh url above return the data we are passing into the function and it is with the data we can access the title, channel name etc
         var nextPageToken = data.nextPageToken;
         var prevPageToken = data.prevPageToken;
         //we have to loop through each data item
         console.log(data);
         $.each(data.items, function(i, item){
            //we save the data inside output and append to result
            var output = getOutput(item);

            //Display Result
            $('#result').append(output);

            //buttons

         });
         var button = getButtons(prevPageToken, nextPageToken, q);
         console.log(button);
         $('#buttons').append(button);
      }
   )
}


function getOutput(item) {

   //the id came from the line after the get where we wrote the
   //part: 'snippet, id',
   var videoId = item.id.videoId;
   var title = item.snippet.title;
   //every other thing is in the snippet file.
   //only the video id is outside the snippet file.
   var description = item.snippet.description;
   var thumb = item.snippet.thumbnails.high.url;
   var channelTitle = item.snippet.channelTitle;
   var videoDate = item.snippet.publishedAt;

   //Build Output String
   var output;
   var li = document.createElement("li");
   var div = document.createElement("div");
   div.className = "list-left";
   var img = document.createElement("img");
   img.setAttribute("src", thumb);
   div.append(img);
   var div2 = document.createElement("div");
   div2.className = "list-right";
   var h3 = document.createElement("h3");
   var a = document.createElement("a");
   a.setAttribute("data-fancybox", "");
   a.setAttribute("data-type", "iframe");
   a.setAttribute("href", "https://www.youtube.com/embed/"+videoId);
   a.innerHTML = title;
   h3.append(a);
   var small = document.createElement("small");
   var span = document.createElement("span");
   span.className = "cTitle";
   span.innerHTML = channelTitle;
   small.innerHTML = "By ";
   small.append(span);
   small.innerHTML += " on " + videoDate;
   var p = document.createElement("p");
   p.innerHTML = description;
   div2.append(h3);
   div2.append(small);
   div2.append(p);
   var divClear = document.createElement("div");
   divClear.className = "clearfix";
   li.append(div);
   li.append(div2);
   li.append(divClear);
   output = li;

   return output;

}

function getButtons(prevPageToken, nextPageToken, q) {
   var btnoutput;
   var divb = document.createElement("div");
   divb.className = "button-container";
   //next page
   var btnNext = document.createElement("button");

   btnNext.className = "paging-button";
   btnNext.setAttribute("id", "next-button");
   btnNext.setAttribute("data-token", nextPageToken);
   btnNext.setAttribute("data-query", q);
   btnNext.setAttribute("onclick", "nextPage();");
   btnNext.innerHTML = "Next Page";
   //prev page
   var btnPrev = document.createElement("button");
   btnPrev.className = "paging-button";
   btnPrev.setAttribute("id", "prev-button");
   btnPrev.setAttribute("data-token", prevPageToken);
   btnPrev.setAttribute("onclick", "prevPage();");
   btnPrev.setAttribute("data-query", q);
   btnPrev.innerHTML = "Prev Page";

   if(!prevPageToken) {
      divb.append(btnNext);
      btnoutput = divb;
   } else if(!nextPageToken) {
      divb.append(btnPrev);
      btnoutput = divb;
   }else {
      divb.append(btnPrev);
      divb.append(btnNext);
      btnNext.style.float = "right";
      btnoutput = divb;
   }
   return btnoutput;
}
