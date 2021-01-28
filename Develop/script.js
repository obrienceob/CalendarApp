//To Do list
//display the current date
//create timeblocks for the work day
//each timeblock has event listeners for clicks to edit
//color code timeblocks for time of day
//save edits for local storage of events for the day
//save is controlled by the save button
//persistent local storage

$(document).ready(function() {
    //using moment.js date time library for the calendar app. 
    $("#currentDay").text(moment().format('dddd, MMMM Do YYYY, h:mm:ss a'));
    var currentTime = moment();
    currentTime = currentTime.startOf("hour");
    var pastTime = moment().startOf("day").add(9, "hours");
    
    
    //creating timeblock variables, to populate the hour into the block
    var time1 = pastTime.add(0, "h");
    time1 = time1.format("hh:mm a");
    $(".block1").text(time1);
    
    var time2 = pastTime.add(1, "h");
    time2 = time2.format("hh:mm a");
    $(".block2").text(time2);

    var time3 = pastTime.add(1, "h");
    time3 = time3.format("hh:mm a");
    $(".block3").text(time3);

    var time4 = pastTime.add(1, "h");
    time4 = time4.format("hh:mm a");
    $(".block4").text(time4);

    var time5 = pastTime.add(1, "h");
    time5 = time5.format("hh:mm a");
    $(".block5").text(time5);

    var time6 = pastTime.add(1, "h");
    time6 = time6.format("hh:mm a");
    $(".block6").text(time6);

    var time7 = pastTime.add(1, "h");
    time7 = time7.format("hh:mm a");
    $(".block7").text(time7);

    var time8 = pastTime.add(1, "h");
    time8 = time8.format("hh:mm a");
    $(".block8").text(time8);

    var time9 = pastTime.add(1, "h");
    time9 = time9.format("hh:mm a");
    $(".block9").text(time9);

    //creating a function to declare what time of day it is, then adding the class from the style sheet for future, present, or past to the input blocks
    //each hour has it's own form in the html, so each gets its own if, else if loop.
    function whatTime() {
        time1 = moment().startOf("day").add(9, "hours");
        currentTime = currentTime.startOf("hour");
        if (currentTime.isAfter(time1)) {
            $(".form9").addClass("past");
        }
        else if (currentTime.isBefore(time1)) {
            $(".form9").addClass("future");
        }
        else if (currentTime.isSame(time1)) {
            $(".form9").addClass("present")
        };
        
        time2 = moment().startOf("day").add(10, "hours");
        currentTime = currentTime.startOf("hour");
        if (currentTime.isAfter(time2)) {
            $(".form10").addClass("past");
        }
        else if (currentTime.isBefore(time2)) {
            $(".form10").addClass("future");
        }
        else if (currentTime.isSame(time2)) {
            $(".form10").addClass("present")
        };

        time3 = moment().startOf("day").add(11, "hours");
        currentTime = currentTime.startOf("hour");
        if (currentTime.isAfter(time3)) {
            $(".form11").addClass("past");
        }
        else if (currentTime.isBefore(time3)) {
            $(".form11").addClass("future");
        }
        else if (currentTime.isSame(time3)) {
            $(".form11").addClass("present")
        };

        time4 = moment().startOf("day").add(12, "hours");
        currentTime = currentTime.startOf("hour");
        if (currentTime.isAfter(time4)) {
            $(".form12").addClass("past");
        }
        else if (currentTime.isBefore(time4)) {
            $(".form12").addClass("future");
        }
        else if (currentTime.isSame(time4)) {
            $(".form12").addClass("present")
        };

        time5 = moment().startOf("day").add(13, "hours");
        currentTime = currentTime.startOf("hour");
        if (currentTime.isAfter(time5)) {
            $(".form1").addClass("past");
        }
        else if (currentTime.isBefore(time5)) {
            $(".form1").addClass("future");
        }
        else if (currentTime.isSame(time5)) {
            $(".form1").addClass("present")
        };

        time6 = moment().startOf("day").add(14, "hours");
        currentTime = currentTime.startOf("hour");
        if (currentTime.isAfter(time6)) {
            $(".form2").addClass("past");
        }
        else if (currentTime.isBefore(time6)) {
            $(".form2").addClass("future");
        }
        else if (currentTime.isSame(time6)) {
            $(".form2").addClass("present")
        };

        time7 = moment().startOf("day").add(15, "hours");
        currentTime = currentTime.startOf("hour");
        if (currentTime.isAfter(time7)) {
            $(".form3").addClass("past");
        }
        else if (currentTime.isBefore(time7)) {
            $(".form3").addClass("future");
        }
        else if (currentTime.isSame(time7)) {
            $(".form3").addClass("present")
        };

        time8 = moment().startOf("day").add(16, "hours");
        currentTime = currentTime.startOf("hour");
        if (currentTime.isAfter(time8)) {
            $(".form4").addClass("past");
        }
        else if (currentTime.isBefore(time8)) {
            $(".form4").addClass("future");
        }
        else if (currentTime.isSame(time8)) {
            $(".form4").addClass("present")
        };

        time9 = moment().startOf("day").add(17, "hours");
        currentTime = currentTime.startOf("hour");
        if (currentTime.isAfter(time9)) {
            $(".form5").addClass("past");
        }
        else if (currentTime.isBefore(time9)) {
            $(".form5").addClass("future");
        }
        else if (currentTime.isSame(time9)) {
            $(".form5").addClass("present")
        };
    };

    //defining the data hour blocks. looping through
    whatTime();
    var hourBlock = [9, 10, 11, 12, 1, 2, 3, 4, 5];
    for (var i = 0; i < hourBlock.length; i++) {
        var dataHour = localStorage.getItem(hourBlock[i]);
        $(".form" + hourBlock[i]).val(dataHour);
        };


    //creating a save function on the save button to save inputs
    $(".saveBtn").on("click", function() {
        var inputText = $(this).siblings(".form-control").val();
        console.log("save button used");
        var inputHour = $(this).parent().data("hour");
        
        localStorage.setItem(inputHour, inputText);
        
    });

})