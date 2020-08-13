// will show default table data, and any new data entered moving forward
$.get("/api/all", function (data) {
  console.log(`defalut table values: ${JSON.stringify(data)}`);

  for (var i = 0; i < data.length; i++) {
    // Create a parent div to hold default burger data &Add an id to the div to mark which div it is
    var defaultBurgDiv = $("<div>").addClass("well").attr("id", "burger-well- " + i);
    var devourBtn = $("<button>").attr({ type: "button", class: "btn btn-info", id: "devour-btn" + i }).text("Devour Me!");
    var defaultBurgName = $("<h5>" + (i + 1) + ". " + data[i].burger_name + "</h5>").attr("id", "defaultText");
    $(defaultBurgDiv).append(defaultBurgName, devourBtn);
    $("#devour-body").append(defaultBurgDiv);
  }

  
});


//user creates a new burger 
// and this function runs after the "Submit" btn is clicked
$("#submit-btn").on("click", function (event) {
  // Make sure to preventDefault on a submit event.
  console.log("submit btn clicked!")
  event.preventDefault();

  var newBurger = {
    burger_name: $("#textbox").val().trim(),
    // setting the default value to 0 so the burger is not "devoured" as yet
    devoured: 0
  };

  // Send the POST request.
  $.post("/api/newburger", newBurger)
    .then(
      function (data) {
        // Reload the page to get the updated list
        location.reload();
      }
    );
});

// User presses the devour btn to move burger to devour bin
$(".btn-info").on("click", function (event) {
  console.log("devour btn was clicked!");
  var id = $(this).data("id");

  var burgerChanged = {
    devoured: 1
  };

  // Send the PUT request.
  $.put("/api/burger/" + id, burgerChanged).then(
    function (data) {
      console.log("changed to devoured ", burgerChanged);
      if (data.devoured == 1) {
        var devourBurgDiv = $("<div>").addClass("wellDevour").attr("id", "burger-devour- " + i);
        var deleteBtn = $("<button>").attr({ type: "button", class: "btn btn-dark", id: "delete-btn" + i }).text("Delete Me!");
        var devourBurgName = $("<h5>" + (i + 1) + ". " + burgerChanged.burger_name + "</h5>").attr("id", "changedBurg");
        $(devourBurgDiv).append(devourBurgName, deleteBtn);
        $("#devour-bin").append(devourBurgDiv);
      }
      // Reload the page to get the updated list
      location.reload();
    }
  );


});

