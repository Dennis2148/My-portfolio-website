$(document).ready(function(){
$('#menu').click(function(){
$(this).toggleClass('fa-times');
$('header').toggleClass('toggle')
});
$(window).on('scroll load',function(){
    $('#menu').removeClass('fa-times');
    $('header').removeClass('toggle')

})
});


function openEmailClient(){
    const emailAddress = 'dennixmusyoka1@gmail.com';
    const subject = encodeURIComponent('Inquiry from website');
    const body = encodeURIComponent('Hello! i would like more information about your services.');
    const mailtourl = 'mailto:dennixmusyoka1@gmail.com?subject=Inquiry from website&body=Hello! i would like more information about your services. ';
    window.open(mailtourl,'self');
}






document.getElementById('whatsapp-link').addEventListener('click',function(){
    var phoneNumber = '254716975570';
    var message = 'Hello! i would like more information about your services.';
    var whatsappurl = 'https://wa.me/' + 254716975570 + '?text= Hello!<br> I would like to know more information about your services....'+
    encodeURIComponent(message);
    window.open(whatsappurl,'-self');
});