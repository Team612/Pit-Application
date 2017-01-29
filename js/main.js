//Main JavaScript

const fetchSchedule = function (team_number) {
    console.log("Getting team " + team_number + " info from TBA...");
    $('#other_match').html("<center>Displaying data for team: " + team_number + "</center>");
    //TODO: TBA
}

$(document).ready(function() {
    console.log("Application loaded!");

    //choosing team
    $('#chosen_team').keypress(function(e) {
        if(e.which === 13) {
            let team = "0000";
            if(!isNaN($('#chosen_team').val())) {
                team = $('#chosen_team').val();
                $('#chosen_team').val("");
                console.log("Team chosen: " + team);
                fetchSchedule(team);
            } else {
                $('#chosen_team').val("");
            }
        }
    });

    //entering match delay
    $('#delay').keypress(function(e) {
        if(e.which === 13) {
            let delay = "0";
            if(!isNaN($('#delay').val())) {
                delay = $('#delay').val();
                $('#chosen_team').val("");
                console.log("Delay set: " + delay + " minutes");
                if(delay == 0)
                    $('#display-delay').html('Delay: <span class="green">on time</span>');
                else
                    $('#display-delay').html('Delay: <span class="red">' + delay + ' minutes' + '</span>');
                $('#delay').val("");
            } else {
                $('#delay').val("");
            }
        }
    });

    //settings
    $('body').keypress(function(e) {
        //if space bar is pressed and the inputs are not focued
        if(e.which === 32 && $('input:focus').length === 0) {
            //then toggleSettings menu
            toggleSettings();
        }
    });
});

const toggleSettings = function() {
    $('#settings').slideToggle(700);
}
