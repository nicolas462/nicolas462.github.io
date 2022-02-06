$(document).ready(function () {
    $("#spain").click(function () { 
        $(".lang-en").hide();
        $(".lang-es").show();
        $("#spain").css('opacity', '1');
        $("#england").css('opacity', '0.3');
    });

    $("#england").click(function () { 
        $(".lang-es").hide();
        $(".lang-en").show();
        $("#spain").css('opacity', '0.3');
        $("#england").css('opacity', '1');        
    });
});