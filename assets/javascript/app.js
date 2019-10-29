
//here we difine one arrays of our gif
const animations = ["up", "toy story 4", "frozen", "inside out"];

function displayAnimations () {
    const animation = $(this).attr("data-name");
    const APIKey = "PH3KRjup1KQ8EayuI8G0JSJYv4XM4jPN";
    const queryURL = `https://api.giphy.com/v1/gifs/trending?s=${animation}&range=pg&api_key=${APIKey}`;
$.ajax ({
    url: queryURL,
    method: "GET"
}).then(function(response) {
    $("#gif-view").text(JSON.stringify(response));
  });
}

//here we generate function for render buttons
function renderButtons () {

    $("#buttons-view").empty();

    for (let i=0; i<animations.length; i++){
    
      const bt = $("<button>");
      bt.addclass ("animation");
      bt.attr ("data-name", animations[i]);
      bt.text (animations[i]);
      $("#buttons-view").append(bt);

    }
}
//here we define our on click event fot submit button
 $("#submit-button").on("click", function(event) {
    event.preventDefault();

const gif = $("#gif-input").val();
const final = $("<button class = final-button>"+gif+"</button>")

// const APIKey = "PH3KRjup1KQ8EayuI8G0JSJYv4XM4jPN";
// const queryURL = `https://api.giphy.com/v1/gifs/trending?s=${gif}&range=pg&api_key=${APIKey}`;
// // Here we run our AJAX call to the OpenWeatherMap API
// $.ajax({
//         url: queryURL,
//         method: "GET"
//     })
//     .then(function(response) {
//          const $salam = $("<img>").attr("src",response.data[2].images.original.url)
//          $("#hi").append($salam);
//         // console.log(queryURL);
//         //  console.log(response)
//         ;})
    });