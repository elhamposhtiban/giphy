
//here we declare one arrays of our gif
const animations = ["up", "frozen", "toy story", "incredibles"];

function displayAnimationInfo () {

    const animation = $(this).attr("data-name");
    const APIKey = "PH3KRjup1KQ8EayuI8G0JSJYv4XM4jPN";
    const queryURL = `https://api.giphy.com/v1/gifs/search?q=${animation}&api_key=${APIKey}&rating=PG&limit=10`;

    $.ajax ({
    url: queryURL,
    method: "GET"
    }).then(function(response) {

        $("#gif-view").empty();
        // console.log (queryURL);

        result = response.data;
        for(let i=0; i<result.length; i++) {

            const $gif = $("<img>").attr("src", result[i].images.fixed_width_still.url)
           state = $gif.attr("data-state", "still")
           $gif.attr("data-animate", result[i].images.fixed_width.url)
           $gif.attr("data-still", result[i].images.fixed_width_still.url)
           $gif.attr("id", "picture")
           $gif.addClass("active-gif")
             $("#gif-view").append($gif);
      
            }
     
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
};

      // This function handles events where one button is clicked
      $("#add-button").on("click", function(event) {

        event.preventDefault();
        const newAnimation = $("#gif-input").val().trim();
        animations.push(newAnimation);
        renderButtons();

      });
 
    function AnimatePause() {

      let state = $(this).attr("data-state");
    //   console.log(state)
      if(state === "still") {
          $(this).attr("src", $(this).attr("data-animate"));
          $(this).attr("data-state", "animate");
      } if(state === "animate") {
          $(this).attr("src", $(this).attr("data-still"));
          $(this).attr("data-state", "still")
      }
    };

      // Function for displaying gifs & pausing gif
      $(document).on("click", ".animation", displayAnimationInfo);
      $(document).on("click", ".active-gif", AnimatePause);

      renderButtons();