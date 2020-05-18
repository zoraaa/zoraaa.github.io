$(function() {
    $(".in_profileItem a").hover(function() {
        $(this).stop().animate({ top: "-20px", opacity: ".7" });
    }, function() {
        $(this).stop().animate({ top: "0", opacity: "1" });
    })
})