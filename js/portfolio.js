(function () {


    // $(document).ready(function(){
        // $("a.konami").tooltip();

    $('[data-toggle="tooltip"]').tooltip();

    var circleOpen = false,
        circleCount = 0;
    var resumeOpen = false,
        resumeCount = 0;
    var briefcaseOpen = false,
        briefcaseCount = 0;

    $("#aboutMe").click(function () {
        if(circleCount % 2 == 0){
            event.preventDefault();
            $(".img-circle").slideDown();
            $(".img-robot").slideUp();

            circleOpen = true;
        }else{
            $('.img-circle').slideUp();
            $(".img-robot").slideToggle();

            circleOpen = false;
        }
        circleCount++;

        if($(".img-briefcase").css('display') == 'inline') {
            $(".img-briefcase").slideUp();
            briefcaseCount++;
            briefcaseOpen = false;
        }
        if($(".img-resume").css('display') == 'inline') {
            $(".img-resume").slideUp();
            resumeCount++;
            resumeOpen = false;
        }
    });

    // $("#aboutMe").click(function () {
    //     $(".img-robot").slideToggle();
    // });

    $("#portfolio").click(function () {
        if(briefcaseCount % 2 == 0){
            event.preventDefault();
            $(".img-briefcase").slideDown();
            $(".img-robot").slideUp();
            briefcaseOpen = true;
        }else{
            $(".img-briefcase").slideUp();
            $(".img-robot").slideToggle();
            briefcaseOpen = false;
        }
        briefcaseCount++;
        if($(".img-circle").css('display') == 'inline'){
            $(".img-circle").slideUp();
            circleOpen = false;
            circleCount++;

        }
        if($(".img-resume").css('display') == 'inline'){
            $(".img-resume").slideUp();
            resumeOpen = false;
            resumeCount++;
        }
    });

    // $("#portfolio").click(function () {
    //     $(".img-robot").slideToggle();
    // });

    $("#resume").click(function () {
        if(resumeCount % 2 == 0){
            event.preventDefault();
            $('.img-resume').slideDown();
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
            briefcaseOpen = false;
            briefcaseCount++;
        }
        if($(".img-circle").css('display') == 'inline') {
            $(".img-circle").slideUp();
            circleCount++;
            circleOpen = false;
        }

    });

    // $("#resume").click(function () {
    // });
    //     function () {
    //         $(".img-robot").slideToggle();
    // });
//     (function () {
//         "use strict";
//         $(document).ready(function () {
//             $("#highlight").click(function (event) {
//                 event.preventDefault();
//                 $("dd").toggleClass("invisible");
//                 //have to put "dd" to select and unselect because the invisible class would disappear from the dd element after clicking the anchor, but the element would not disappear.
//             });
//         });
//
//         $("dt").click(function () {
// //			    $("dt").css("background-color", "#FFF");
//             $(this).css("background-color", "#7CB342");
//         });
//
//         //Transversing Section
//
// //			$("#yellow-bkgr").click(function(event){
// //                $(".four-facts-about-the-park").children().next().next().next().css("background-color", "yellow");
// //            });
//
//
//         $("#yellow-bkgr").click(function (event) {
//             $("ul").each(function (index) {
//                 $(this).children().last().css("background-color", "yellow");
//             });
//         });
// //			This version is the better way than the .next().next.next() version that why I commented out that version and kept this
//
//
// //            var list = $("h3").next().children();
// //			console.log(list);
//         $("h3").click(function (event) {
//             $(this).next().children().css("font-weight", "bold");
//         });
//
//         $("li").click(function (event) {
//             $(this).parent().children().first().css("color", "blue");
//         });
//
//         $(".swap").click(function (event) {
//
//
//             if ($(this).is(".swap:last")) {
//                 var imgThree = $(this).prev(); // third image
//                 var imgOneFirst = $(this).parent().prev().prev().children().first(); // first image
//                 var imgOneSrc = imgOneFirst.attr("src");
//
//                 imgOneFirst.attr("src", imgThree.attr("src"));
//                 imgThree.attr("src", imgOneSrc);
//                 // put the image on this div in the first div
//                 // put the image in the first div here
//             } else {
//                 var imgOne = $(this).prev(); // current image
//                 var imgTwo = $(this).parent().next().children().first();  //image at the right
//
//
//                 var imgTwoSrc = imgTwo.attr("src"); // the src/url of the image at the right
//
//                 imgTwo.attr("src", imgOne.attr("src"));
//                 imgOne.attr("src", imgTwoSrc);
//
//             }
//
//         }); //(image)
//
//
// //			JQuery Effects Exercise
//         $("span").click(function () {
//             $(this).parent().hide();
//         });
//
//         $("h3").click(function () {
//             $(this).next().slideToggle();
//         });
//
//
//         function fadeRegister() {
//             console.log("it runs");
//             $("#register").fadeIn();
//         }
//
//         setTimeout(fadeRegister, 8000);
//
//         function modalAppear() {
//             $("#myModal").modal();
//         }
//
//         setTimeout(modalAppear, 8000);
//
//
//
//     // $("#keyLock").hover(
//     //     function () {
//     //         $("#konami").show();
//     //     },
//     //     function () {
//     //         $("#konami").hide();
//     //     }
//     // );
//
//
//     // });
})();