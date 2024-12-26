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
// ============================================
// Automation number count part start
$(function(){

$('.counter').counterUp({
  delay: 10,
  time: 3000
});


})

// Automation number count part end

// ====================================

// countdown my birtday or lottery time start 

(function () {
  const second = 1000,
        minute = second * 60,
        hour = minute * 60,
        day = hour * 24;

  //I'm adding this section so I don't have to keep updating this pen every year :-)
  //remove this if you don't need it
  let today = new Date(),
      dd = String(today.getDate()).padStart(2, "0"),
      mm = String(today.getMonth() + 1).padStart(2, "0"),
      yyyy = today.getFullYear(),
      nextYear = yyyy + 1,
      dayMonth = "09/30/",
      birthday = dayMonth + yyyy;
  
  today = mm + "/" + dd + "/" + yyyy;
  if (today > birthday) {
    birthday = dayMonth + nextYear;
  }
  //end
  
  const countDown = new Date(birthday).getTime(),
      x = setInterval(function() {    

        const now = new Date().getTime(),
              distance = countDown - now;

        document.getElementById("days").innerText = Math.floor(distance / (day)),
          document.getElementById("hours").innerText = Math.floor((distance % (day)) / (hour)),
          document.getElementById("minutes").innerText = Math.floor((distance % (hour)) / (minute)),
          document.getElementById("seconds").innerText = Math.floor((distance % (minute)) / second);

        //do something later when date is reached
        if (distance < 0) {
          document.getElementById("headline").innerText = "It's my birthday!";
          document.getElementById("countdown").style.display = "none";
          document.getElementById("content").style.display = "block";
          clearInterval(x);
        }
        //seconds
      }, 0)
  }());

// countdown my birtday or lottery time  end

// =============================================


// venu box js file start

$(function(){
new VenoBox({
  selector: '.my-image-links',
  numeration: true,
  infinigall: true,
  share: true,
  spinner: 'rotating-plane'
});

})

// venu box js file end

// =======================================