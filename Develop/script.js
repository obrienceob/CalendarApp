//To Do list
//display the current date
//create timeblocks for the work day
//each timeblock has event listeners for clicks to edit
//color code timeblocks for time of day
//save edits for local storage of events for the day
//save is controlled by the save button
//persistent local storage

$(document).ready(function() {
    $("#currentDay").text(moment().format('dddd, MMMM Do YYYY, h:mm:ss a'));
    var currentTime = moment();
    currentTime = currentTime.startOf("hour");
    var pastTime = moment().startOf("day").add(9, "hours");
    
    
    //creating timeblock variables, to populate the hour into the block
    var hour9 = pastTime.add(0, "h");
    hour9 = hour9.format("h:mm:ss a");
    $("block1").text(hour9);
    
    var hour10 = pastTime.add(1, "h");
    hour10 = hour10.format("h:mm:ss a");
    $("block2").text(hour10);

    var hour11 = pastTime.add(2, "h");
    hour11 = hour11.format("h:mm:ss a");
    $("block3").text(hour9);

    var hour12 = pastTime.add(3, "h");
    hour12 = hour12.format("h:mm:ss a");
    $("block4").text(hour12);

    var hour1 = pastTime.add(4, "h");
    hour1 = hour1.format("h:mm:ss a");
    $("block5").text(hour1);

    var hour2 = pastTime.add(5, "h");
    hour2 = hour2.format("h:mm:ss a");
    $("block6").text(hour2);

    var hour3 = pastTime.add(6, "h");
    hour3 = hour3.format("h:mm:ss a");
    $("block7").text(hour3);

    var hour4 = pastTime.add(7, "h");
    hour4 = hour4.format("h:mm:ss a");
    $("block8").text(hour4);

    var hour5 = pastTime.add(8, "h");
    hour5 = hour5.format("h:mm:ss a");
    $("block9").text(hour5);

    function whatTime() {
        hour9 = moment().startOf("day").add(9, "hours");
        currentTime = currentTime.startOf("hour");
        if (currentTime.isAfter(hour9)) {
            $(".form9").addClass("past");
        }
        else if (currentTime.isBefore(hour9)) {
            $(".form9").addClass("future");
        }
        else if (currentTime.isSame(hour9)) {
            $(".form9").addClass("present")
        };
        
        hour10 = moment().startOf("day").add(10, "hours");
        currentTime = currentTime.startOf("hour");
        if (currentTime.isAfter(hour10)) {
            $(".form9").addClass("past");
        }
        else if (currentTime.isBefore(hour10)) {
            $(".form9").addClass("future");
        }
        else if (currentTime.isSame(hour10)) {
            $(".form9").addClass("present")
        };

        hour11 = moment().startOf("day").add(11, "hours");
        currentTime = currentTime.startOf("hour");
        if (currentTime.isAfter(hour11)) {
            $(".form9").addClass("past");
        }
        else if (currentTime.isBefore(hour11)) {
            $(".form9").addClass("future");
        }
        else if (currentTime.isSame(hour11)) {
            $(".form9").addClass("present")
        };

        hour12 = moment().startOf("day").add(12, "hours");
        currentTime = currentTime.startOf("hour");
        if (currentTime.isAfter(hour12)) {
            $(".form9").addClass("past");
        }
        else if (currentTime.isBefore(hour12)) {
            $(".form9").addClass("future");
        }
        else if (currentTime.isSame(hour12)) {
            $(".form9").addClass("present")
        };

        hour1 = moment().startOf("day").add(13, "hours");
        currentTime = currentTime.startOf("hour");
        if (currentTime.isAfter(hour1)) {
            $(".form9").addClass("past");
        }
        else if (currentTime.isBefore(hour1)) {
            $(".form9").addClass("future");
        }
        else if (currentTime.isSame(hour1)) {
            $(".form9").addClass("present")
        };

        hour2 = moment().startOf("day").add(14, "hours");
        currentTime = currentTime.startOf("hour");
        if (currentTime.isAfter(hour2)) {
            $(".form9").addClass("past");
        }
        else if (currentTime.isBefore(hour2)) {
            $(".form9").addClass("future");
        }
        else if (currentTime.isSame(hour2)) {
            $(".form9").addClass("present")
        };

        hour3 = moment().startOf("day").add(15, "hours");
        currentTime = currentTime.startOf("hour");
        if (currentTime.isAfter(hour3)) {
            $(".form9").addClass("past");
        }
        else if (currentTime.isBefore(hour3)) {
            $(".form9").addClass("future");
        }
        else if (currentTime.isSame(hour3)) {
            $(".form9").addClass("present")
        };

        hour4 = moment().startOf("day").add(16, "hours");
        currentTime = currentTime.startOf("hour");
        if (currentTime.isAfter(hour4)) {
            $(".form9").addClass("past");
        }
        else if (currentTime.isBefore(hour4)) {
            $(".form9").addClass("future");
        }
        else if (currentTime.isSame(hour4)) {
            $(".form9").addClass("present")
        };

        hour5 = moment().startOf("day").add(17, "hours");
        currentTime = currentTime.startOf("hour");
        if (currentTime.isAfter(hour5)) {
            $(".form9").addClass("past");
        }
        else if (currentTime.isBefore(hour5)) {
            $(".form9").addClass("future");
        }
        else if (currentTime.isSame(hour5)) {
            $(".form9").addClass("present")
        };
    };

    whatTime();
    var hourGroup = [9, 10, 11, 12, 1, 2, 3, 4, 5];
    for (var i = 0; i < hourGroup.length; i++) {
        var dataHour = localStorage.getItem(hourGroup[i]);
        $(".form" + hourGroup[i]).val(dataHour);
    };



    $(".saveBtn").on("click", function save() {
        save.preventDefault();
        var formText = $(this).siblings("form-control").val();
        console.log("save button used");
        var userText = $(this).parent().data("hour");

        localStorage.setItem(userText, formText);
    });

})