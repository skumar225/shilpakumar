$(document).ready(function() {

$('.container').css('display', 'none');

$('.container').fadeIn(1500);



$('.link').click(function(event) {

event.preventDefault();

newLocation = this.href;

$('.container').fadeOut(1500, newpage);

});



function newpage() {

window.location = newLocation;

}

});
