var scene = document.getElementById('scene');
var parallax = new Parallax(scene);

$('#download-link').click(function(e) {
    e.preventDefault();
    $('html,body').animate({
       scrollTop: $("#video").offset().top
    });
});

$('#friends-link').click(function(e) {
    e.preventDefault();
    $('#friends').css('display', 'block');
});
$('#friends>.close').click(function(e) {
    e.preventDefault();
    $('#friends').css('display', 'none');
});
