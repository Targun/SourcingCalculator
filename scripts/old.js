var workinghours = 1; // about 2080 working hours per year

var lbsInput = $('input[id="lbs"]');
var savedInput = $('input[id="saved"]');

var button = $("button:first-child");

function calculateSavings() {
  var lbs = lbsInput.val();
  var saved = savedInput.val();  

  if (button.text() === "per year") {  
    // calculate salaries and limit to 2 decimal places
    var monthlbs = (lbs / 12 * saved).toFixed(2);
    var yearlbs = (lbs * 1 * saved).toFixed(2);

    $("#month").html("$" + monthlbs);
    $("#year").html("$" + yearlbs);      
  }

  else if (button.text() === "per month") {
    var yearlbs = (lbs * 12 * saved).toFixed(2);
    var monthlbs = (lbs * 1 * saved).toFixed(2);

    $("#year").html("$" + yearlbs);
    $("#month").html("$" + monthlbs);
  }
}

lbsInput.keyup(calculateSavings);
savedInput.keyup(calculateSavings);


$(".dropdown-menu li").on("click", function(event){
    var getSelection = $(this).text();
    $(button).text(getSelection);
    $(".dropdown-menu").children("li").show();
    $(this).hide();
    $("p.lead span:first-child").text("$____");
    lbsInput.keyup();
  
  if (this.id == "monthSelect") {
    $("#results p").show();
  }
  
  else if (this.id == "yearSelect") {
    $("#results p").show();
  }
  
});

$(document).ready(function() {
  $("li:first-child").hide();
});