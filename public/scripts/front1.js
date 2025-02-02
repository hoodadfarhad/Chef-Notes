window.onload = function() {
  if (!localStorage.getItem("alertShown")) {
      alert("Ma hame chaghale Dr. Hoodad Hastim; khoda sayash ro az saremun kam nakone!");
      localStorage.setItem("alertShown", "true"); // Store flag in localStorage
  }
};

$("h1").css("color","black");

// setInterval(function () {
//     $("h1").fadeToggle(500); // Fades in/out repeatedly
//   }, 400);

  $("h1").click(function(){
    $(".btn-txt").css("color","red");
    
    setTimeout(function() {
        $(".btn-txt").css("color","black");
        
      }, 1000);
  })

$("#contactSubmit").click(function(){
    alert("Thank you for your message. We will get back to you soon!");
});




$(document).ready(function() {
 

  $("#searchInput").on("keyup", function() {
      let input = $(this).val().toLowerCase();




for (let i = 0; i <  $(".foodCard").length; i++) {
  let foodName = $(".foodCard").eq(i).find(".foodName").text().toLowerCase();
  
  if (foodName.includes(input) && input !== "") {
    $(".foodCard").eq(i).css("background-color", "#ffff99").show(); // Highlight & show matches
} else if (input === "") {
  for (let e = 0; e < $(".foodCard").length; e++) {
     $(".foodCard").eq(e).css("background-color", "").show(); // Reset when search is cleared
     $(".marginCard").eq(e).css("background-color", "").show();
  }
  
} else {
  $(".marginCard").eq(i).css("background-color", "").hide(); // Hide non-matching items
}



}

  });
  

  
});


