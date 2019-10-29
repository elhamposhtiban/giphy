
//here we difine one arrays of our gif
const animations = ["up", "toy story 4", "frozen", "inside out"];

function displayAnimationInfo () {

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
    
      const bt = $("<button class = btn btn-warning id = more-buttons>");
      bt.addClass ("animation");
      bt.attr ("data-name", animations[i]);
      bt.text (animations[i]);
      $("#buttons-view").append(bt);

    }
}

      // This function handles events where one button is clicked
      $("#add-button").on("click", function(event) {
        event.preventDefault();

        // This line grabs the input from the textbox
        const animation = $("#gif-input").val().trim();

        // Adding the movie from the textbox to our array
        animations.push(animation);
        console.log(animations);
        renderButtons();
      });

      // Function for displaying the movie info
      $(document).on("click", ".animation", displayAnimationInfo);

      renderButtons();