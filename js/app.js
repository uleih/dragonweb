$(document).ready(function() {
    $(".menu a").click(function() {
       ga('send', 'event', 'menu-links', 'Click', $(this).attr("href")); 
    });
});

$("img").load(function() {    
    $('.uil-ring-css').remove();
});