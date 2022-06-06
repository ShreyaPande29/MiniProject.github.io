$(document).ready(function (){
    let pic =$("#myimg");
    let images = [
        "images/view.jpg",
        "images/view1.jpg",
        "images/view2.jpg",
        "images/view3.avif"
    ];
    let i = 0;
    setInterval(function (){
        i = (i + 1) % images.length;
        pic.fadeOut(350, function (){
            $(this).attr("src",images[i]);
            $(this).fadeIn(500);
        });
    }, 5000);
});