$(document).ready(function () {
 $('#touchBtn').click(function(e) {
        e.preventDefault(); // Prevent form from submitting

        var messageValue = $('#message').val().trim();

        if (messageValue === "") {
            $('#mesageerror').text("Please enter a message").css("color", "red");
        } else {
            $('#mesageerror').text(""); // Remove the message if user typed something
            alert("Message sent: " + messageValue); // Optional: show the message
        }
    });

    // Optional: remove error as soon as user starts typing
    $('#message').on('input', function() {
        $('#mesageerror').text("");
    });





  // Get in Touch button animation
 $("#mesageerror").text("enter message");

  $("#touchBtn").click(function () {
    let message=$("#message").val();
    let name=$("#nameinput").val();

    if(message==""){

    }
    else{
         alert("Thanks for contacting me!    "  +name +"");
    }
   $("#nameinput").val("");
    $("#email").val("");
    $("#message").val("");

    // Remove error text
    $('#mesageerror').text("");

 
  });

  // Hover effect on buttons
  $("button").hover(
    function () {
      $(this).css("transform", "scale(1.05)");
    },
    function () {
      $(this).css("transform", "scale(1)");
    }
  );

});





/* Typing Effect */
// var typed = new Typed("#typedText", {
//     strings: ["Hello, I am Seid Kassa"],
//     typeSpeed: 60,
//     loop: true
// });
var typed = new Typed("#typedText", {
    strings: [
        "Hello, I am Seid Kassa",
        "What can I help you with?",
        "I am a Frontend Web Developer"
    ],
    typeSpeed: 60,
    backSpeed: 40,
    backDelay: 1000,
    loop: true
});


/* AOS Init */
AOS.init({
    duration: 900,
    once: true
});

/* Dark Mode Toggle */
$("#toggleDark").click(function() {
    $("body").toggleClass("dark");
});

/* Back to top button */
$(window).scroll(function () {
    if ($(this).scrollTop() > 200) {
        $("#backTop").fadeIn();
    } else {
        $("#backTop").fadeOut();
    }
});
$("#backTop").click(function () {
    $("html, body").animate({ scrollTop: 0 }, 500);
});

/* Animate skill bars */
$(window).on("scroll", function () {
    $(".progress-bar").each(function () {
        var pos = $(this).offset().top;
        var winTop = $(window).scrollTop() + $(window).height();
        if (winTop > pos) {
            $(this).css("width", $(this).data("width"));
        }
    });
});
$(document).ready(function() {
    // When About nav link clicked
    $('.navbar-nav a[href="#About"]').click(function(e) {
        e.preventDefault();

        // Add 'expanded' to About
        $('#About').addClass('expanded');

        // Scroll smoothly to About
        $('html, body').animate({
            scrollTop: $('#About').offset().top - 100 // offset for fixed navbar
        }, 500);
    });

    // Optional: when clicking other nav links, remove expanded from About
    $('.navbar-nav a').not('[href="#About"]').click(function() {
        $('#About').removeClass('expanded');
    });
});


$('.navbar-nav a[href^="#"]').click(function(e) {
    e.preventDefault();
    var target = $($(this).attr('href'));
    if(target.length){
        var navbarHeight = $('.navbar').outerHeight();
        $('html, body').animate({
            scrollTop: target.offset().top - navbarHeight
        }, 500);
    }
});

/* Hover animation for skill boxes */
// $(document).ready(function () {
//     $(".skill-box").hover(
//         function () {
//             $(this).css({
//                 transform: "scale(1.05)",
//                 transition: "0.3s",
//                 boxShadow: "0 4px 15px rgba(0,0,0,0.2)"
//             });
//         },
//         function () {
//             $(this).css({
//                 transform: "scale(1)",
//                 boxShadow: "0 2px 10px rgba(0,0,0,0.1)"
//             });
//         }
//     );
// });
/* Vertical hover animation */
$(document).ready(function () {

    $(".skill-box").each(function () {
        // Save default height
        $(this).data("defaultHeight", $(this).height());
    });

    $(".skill-box").hover(
        function () {
            $(this).css({
                height: $(this).data("defaultHeight") + 30 + "px", // increase height
                paddingTop: "25px"
            });
        },
        function () {
            $(this).css({
                height: $(this).data("defaultHeight") + "px",
                paddingTop: "15px"
            });
        }
    );

});

$(document).ready(function () {

    $(".project-card").each(function () {
        $(this).data("defaultHeight", $(this).height());
    });

    $(".project-card").hover(
        function () {
            $(this).css({
                height: $(this).data("defaultHeight") + 40 + "px",
                paddingTop: "25px"
            });
        },
        function () {
            $(this).css({
                height: $(this).data("defaultHeight") + "px",
                paddingTop: "15px"
            });
        }
    );

});



