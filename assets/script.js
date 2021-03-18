$(document).ready(function() {
    //setting up date and time for today's date
    var now = moment().format('MMMM Do YYYY');
    
    var $dateHeading = $('#navbar-subtitle');
    $dateHeading.text(now);

    var currentTime = parseInt(moment().format("HH"));

    //create variables of each time frame
    var $text9AM = $("#text9AM");
    var $text10AM = $("#text10AM");
    var $text11AM = $("#text11AM");
    var $text12PM = $("#text12PM");
    var $text1PM = $("#text1PM");
    var $text2PM = $("#text2PM");
    var $text3PM = $("#text3PM");
    var $text4PM = $("#text4PM");
    var $text5PM = $("#text5PM");

    //changing the colors of the schedule block

    $("textarea").each(function() {
        var name = parseInt($(this).attr("name"));
        if (name < currentTime) {
            $(this).css("background-color", "gray");
        }

        if (name > currentTime) {
            $(this).css("background-color", "green");
        }

        if(name === currentTime) {
            $(this).css("background-color", "red");
        }
    })
//setting local storage
$("button").on("click", function() {
    localStorage.setItem("9AM", ($text9AM.val()));
    localStorage.setItem("10AM", ($text10AM.val()));
    localStorage.setItem("11AM", ($text11AM.val()));
    localStorage.setItem("12PM", ($text12PM.val()));
    localStorage.setItem("1PM", ($text1PM.val()));
    localStorage.setItem("2PM", ($text2PM.val()));
    localStorage.setItem("3PM", ($text3PM.val()));
    localStorage.setItem("4PM", ($text4PM.val()));
    localStorage.setItem("5PM", ($text5PM.val()));
});

//recovering localstorage
$("#text9AM").append(localStorage.getItem("9AM"));
$("#text10AM").append(localStorage.getItem("10AM"));
$("#text11AM").append(localStorage.getItem("11AM"));
$("#text12PM").append(localStorage.getItem("12PM"));
$("#text1PM").append(localStorage.getItem("1PM"));
$("#text2PM").append(localStorage.getItem("2PM"));
$("#text3PM").append(localStorage.getItem("3PM"));
$("#text4PM").append(localStorage.getItem("4PM"));
$("#text5PM").append(localStorage.getItem("5PM"));
});
