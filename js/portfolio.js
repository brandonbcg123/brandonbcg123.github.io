$(document).ready(function () {


    // $(document).ready(function(){
        // $("a.konami").tooltip();

    // $('[data-toggle="tooltip"]').tooltip();

    var circleOpen = false,
        circleCount = 0;
    var resumeOpen = false,
        resumeCount = 0;
    var briefcaseOpen = false,
        briefcaseCount = 0;

    $("#aboutMe").click(function (e) {
        e.preventDefault();
        if(circleCount % 2 == 0){
            $(".img-circle").slideDown();
            $(".designer").slideDown();
            $("#summary").slideDown();
            $(".img-social").slideDown();
            $(".img-robot").slideUp();

            circleOpen = true;
        }else{
            $('.img-circle').slideUp();
            $(".designer").slideUp();
            $("#summary").slideUp();
            $(".img-social").slideUp();
            $(".img-robot").slideToggle();

            circleOpen = false;
        }
        circleCount++;

        if($(".img-briefcase").css('display') == 'inline') {
            $(".img-briefcase").slideUp();
            $(".briefcase-click").slideUp();
            briefcaseCount++;
            briefcaseOpen = false;
        }
        if($(".img-resume").css('display') == 'inline') {
            $(".img-resume").slideUp();
            $(".resume-click").slideUp();
            resumeCount++;
            resumeOpen = false;
        }
    });

    // $("#aboutMe").click(function () {
    //     $(".img-robot").slideToggle();
    // });

    $("#portfolio").click(function (e) {
        e.preventDefault();
        if(briefcaseCount % 2 == 0){
            $(".img-briefcase").slideDown();
            $(".briefcase-click").css('display', 'block').slideDown();
            $(".img-robot").slideUp();
            briefcaseOpen = true;
        }else{
            $(".img-briefcase").slideUp();
            $(".briefcase-click").slideUp();
            $(".img-robot").slideToggle();
            briefcaseOpen = false;
        }
        briefcaseCount++;
        if($(".img-circle").css('display') == 'inline'){
            $(".img-circle").slideUp();
            $(".designer").slideUp();
            $("#summary").slideUp();
            $(".img-social").slideUp();
            circleOpen = false;
            circleCount++;

        }
        if($(".img-resume").css('display') == 'inline'){
            $(".img-resume").slideUp();
            $(".resume-click").slideUp();
            resumeOpen = false;
            resumeCount++;
        }
    });

    // $("#portfolio").click(function () {
    //     $(".img-robot").slideToggle();
    // });

    $("#resume").click(function (e) {
        e.preventDefault();
        if(resumeCount % 2 == 0){
            $('.img-resume').slideDown();
            $(".resume-click").css('display', 'block').slideDown();
            $(".img-robot").slideUp();
            resumeOpen = true;
        }else{
            $('.img-resume').slideUp();
            $(".img-robot").slideToggle();
            resumeOpen = false;
        }
        resumeCount++;
        if($(".img-briefcase").css('display') == 'inline') {
            $(".img-briefcase").slideUp();
            $(".briefcase-click").slideUp();
            briefcaseOpen = false;
            briefcaseCount++;
        }
        if($(".img-circle").css('display') == 'inline') {
            $(".img-circle").slideUp();
            $(".designer").slideUp();
            $("#summary").slideUp();
            $(".img-social").slideUp();
            circleCount++;
            circleOpen = false;
        }
    });
})();