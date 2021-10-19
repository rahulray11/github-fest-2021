$(document).ready(function () {
    var count = 0;

    $("#minus").click(function () {
        if (count >= 1) {
            count--;
        }
        if (count % 2 != 0) {
            $("#Numbering").text(count).css("color", "red");
            $("body").css("background-color", "gray");
        }
        else {
            $("#Numbering").text(count).css("color", "white");
            $("body").css("background-color", "skyblue");
        }
    });

    $("#plus").click(function () {

        if (count < 10) {
            count++;
        }
        if (count % 2 != 0) {
            $("#Numbering").text(count).css("color", "red");
            $("body").css("backgroundColor", "gray");
        }
        else {
            $("#Numbering").text(count).css("color", "white");
            $("body").css("backgroundColor", "skyblue");
        }
    });

    $("#reset").click(function () {
        count = 0;
        $("#Numbering").text(count).css("color", "white");
        $("body").css("backgroundColor", "skyblue");
    });
});