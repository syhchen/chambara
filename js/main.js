// var scene = document.getElementById('scene');
// var parallax = new Parallax(scene);


$('#download-link').click(function(e) {
    e.preventDefault();
    $('html,body').animate({
       scrollTop: $("#download").offset().top
    });
});
