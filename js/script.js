  //  Stykey Header scrolling 
  $(window).scroll(function(){
    var scrolling = $(this).scrollTop();
    
    if(scrolling > 200){
        $('.navbar').addClass('stickyheader');
    }
    else {
         $('.navbar').removeClass('stickyheader');
    }
    }); 

    // ================================================


    //==== Back-to-top button
  $(window).on('scroll', function(event) {
    if($(this).scrollTop() > 600){
        $('.back-to-top').fadeIn(200)
    } else{
        $('.back-to-top').fadeOut(200)
    }
});
//==== Animate the scroll to top
$('.back-to-top').on('click', function(event) {
    event.preventDefault();
    $('html, body').animate({
        scrollTop: 0,
    }, 1000);
});

// ==============================================


// button clickable hide show start

$(function(){
    //  hide code button start
    $("#hide").click(function(){
      $(".box").hide()
    })
    //  hide code button end


    //  show code button start
    $("#show").click(function(){
      $(".box").show()
    })
    //  show code button end


    // hide  show code button start
    $("#hideshow").click(function(){
      $(".box").toggle(1000)
    })
    //  hide show code button end
})
// =================================================

// button clickable fadein fadeout start
$(function(){
  
  
  // fade in code button start
  $("#fadein").click(function(){
    $(".boxx").fadeIn(1000)
  })
  //  hide show code button end
  
  
  
  // fade out code button start
  $("#fadeout").click(function(){
    $(".boxx").fadeOut(1000)
  })
  //  hide show code button end



  // fade inout code toggle button start
  $("#fadeinout").click(function(){
    $(".boxx").fadeToggle(1000)
  })
  //  hide show code button end

})


// button clickable fadein fadeout end
// =============================================


// buttton slide up down part start

$(function(){
  
  
  // slide up code button start
  $("#slideUp").click(function(){
    $(".slidebox").slideUp(1000)
  })
  //  slide up code button end
  
  
  
  // slide down code button start
  $("#Slidedown").click(function(){
    $(".slidebox").slideDown(1000)
  })
  //  Slide Down code button end



  //  slide up Down toggle button start
  $("#slideupdown").click(function(){
    $(".slidebox").slideToggle(1000)
  })
  //     slide up downbutton end

})

// buttton slide up down part end


// ==========================================

// add class remove class only use html replace css class not call html class
$(function(){
              //  add class js file
  $("#in").click(function(){
    $(".slidebox").addClass("onlycssclass")
  })
 
                  //  remove class file
  $("#out").click(function(){
    $(".slidebox").removeClass("onlycssclass")
  })

                  //  Add class remove class file
  $("#inOut").click(function(){
    $(".slidebox").toggleClass("onlycssclass")
  })


})


// add class remove class only use html replace css class not call html class