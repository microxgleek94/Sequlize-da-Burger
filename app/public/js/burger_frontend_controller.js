$.get("/api/all", function (data) {
  console.log(`defalut table values: ${JSON.stringify(data)}`);
  
  // var response = data;
  //  = response.burger_name;
  // var defaultBurgID = response.id; 

  for (var i = 0; i < data.length; i++) {
    // Create a parent div to hold default burger data &Add an id to the div to mark which div it is
    var defaultBurgDiv = $("<div>").addClass("well").attr("id", "burger-well-" + i);
  
    var devourBtn = $("<button>").attr({ type: "button", class: "btn btn-info" }).text("Devour Me!");
    var defaultBurgName = $("<h5>" + (i + 1) + ". " + data[i].burger_name + "</h5>").attr("id", "defaultText");
    $(defaultBurgDiv).append(defaultBurgName, devourBtn);
    $("#devour-body").append(defaultBurgDiv);
  }
});


    // // user creates a new burger
    // $("#submit-btn").on("click", function (event) {
    //   // Make sure to preventDefault on a submit event.
    //   event.preventDefault();

    //   var newBurger = {
    //     burger_name: $("#textbox").val().trim(),
    //     devoured: 0
    //   };

    //   // Send the POST request.
    //   $.ajax("/api/newburger", {
    //     type: "POST",
    //     data: newBurger
    //   }).then(
    //     function () {
    //       console.log(`new burger created: ${newBurger.burger_name}`);
    //       // Reload the page to get the updated list
    //       location.reload();
    //     }
    //   );
    // });

    // $(".clone-burger").on("click", function(event) {
    //   var burgerName = $(this).data("burger_name");

    //   var clonedBurger = {
    //     burger_name: burgerName,
    //     devoured: 0
    //   };

    //   // Send the POST request.
    //   $.ajax("/api/newburger", {
    //     type: "POST",
    //     data: clonedBurger
    //   }).then(
    //     function() {
    //       console.log("Cloned New Burger");
    //       // Reload the page to get the updated list
    //       location.reload();
    //     }
    //   );
    // });

    // $(".delete-burger").on("click", function(event) {
    //   var id = $(this).data("id");

    //   // Send the PUT request.
    //   $.ajax("/api/burger/" + id, {
    //     type: "DELETE",
    //     data: {id:id}
    //   }).then(
    //     function() {
    //       // Reload the page to get the updated list
    //       location.reload();
    //     }
    //   );
    // });

    // $(".devour-burger").on("click", function(event) {
    //   var id = $(this).data("id");

    //   var burgerChanged = {
    //     devoured: 1
    //   };

    //   // Send the PUT request.
    //   $.ajax("/api/burger/devour/" + id, {
    //     type: "PUT",
    //     data: burgerChanged
    //   }).then(
    //     function() {
    //       console.log("changed to devoured ", burgerChanged);
    //       // Reload the page to get the updated list
    //       location.reload();
    //     }
    //   );
    // });

