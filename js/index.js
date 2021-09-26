let text = "#newText";
$(".agregar").on("click", function (event) {
  event.preventDefault();
  if ($(text).val() != "") {
    $(".Lista").append(`<div> 
        <li class = "lis"> 
            <p class = "itemShop" style="color:gray">${$("#newText").val()}</p>
            <button id="checkButton"> check </button>
            <button id="deleteButton"> delete </button>
        </li> </div>`);
  } else {
    alert("El campo esta vacio");
  }
});

$(document).on("click", "#checkButton", function (event) {
  event.preventDefault();
  $(this).parent().toggleClass("chec");
});

$(document).on("click", "#deleteButton", function (event) {
  event.preventDefault();
  $(this)
    .parent()
    .fadeOut("slow", function () {
      $(this).parent().remove();
    });
});
