$(document).ready(function(){
 
  //Menus
  $('nav .nav-menu .menu').on('click', function(){
    $('nav .nav-menu .menu').removeClass('active');
    $(this).addClass('active');
  });



  $('.slider').slick({
    infinite: true,
    slidesToShow: 5,
    arrows: true,
    autoplay:true,
    autoplaySpeed: 3000,
    pauseOnHover: true,
    pauseOnFocus: true,
    infinite: true,
    prevArrow: '<button type="button" class="slick-prev"><i class="fa fa-caret-left"></i></button>', 
    nextArrow: '<button type="button" class="slick-next"><i class="fa fa-caret-right"></i></button>', 
    responsive: [
      {
        breakpoint: 1029,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 3,
          infinite: true,
        }
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2
        }
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 3
        }
      }
    ]
  });


  // Testimonials
  $('.testimonial-slider').slick({
    infinite: true,
    slidesToShow: 4,
    arrows: true,
    dots: true,
    autoplay:true,
    autoplaySpeed: 3000,
    pauseOnHover: true,
    pauseOnFocus: true,
    infinite: true,
    prevArrow: '<button type="button" class="slick-prev2"><i class="fa fa-chevron-left"></i></button>', 
    nextArrow: '<button type="button" class="slick-next2"><i class="fa fa-chevron-right"></i></button>', 
    responsive: [
      {
        breakpoint: 1029,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 3,
          infinite: true,
        }
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2
        }
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1
        }
      }
    ]
  });

  // Navbar
  $('.menu-toggle').click(function() {
    $('.nav-menu').toggleClass('open');
  });

  $('.nav-menu a').click(function() {
    $('.nav-menu').removeClass('open'); /* Hide the menu by removing the 'open' class */
  });

  //Faq Accordion
  $('.faq-accordion-header').click(function(){
    $(this).next('.faq-accordion-content').slideToggle();
  });



  // Form1 Validation
  $("#form1").submit(function(e){
    e.preventDefault();
    let name = $("#name1").val();
    let email = $("#email1").val();
    let phone = $("#phone1").val();
    $("#nameError1").text("");
    $("#emailError1").text("");
    $("#phoneError1").text("");

    if(name.trim() === ""){
        $("#nameError1").text("Name is required.");
        return;
    }

    if(email.trim() === ""){
        $("#emailError1").text("Email is required.");
        return;
    }

    if(!isValidEmail(email)){
        $("#emailError1").text("Invalid email address.");
        return;
    }

    if(phone.trim() === ""){
        $("#phoneError1").text("Phone number is required.");
        return;
    }

    if(!isValidPhoneNumber(phone)){
        $("#phoneError1").text("Invalid phone number.");
        return;
      }

    $("#form1").unbind('submit').submit();
  });

    function isValidEmail(email){
        let emailRegex = /^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/;
        return emailRegex.test(email);
    }

    function isValidPhoneNumber(phone){
        let phoneRegex = /^\d{10}$/;
        return phoneRegex.test(phone);
    }

    // Form2 Validations
    $("#form2").submit(function(e){
      e.preventDefault();
      let name = $("#name2").val();
      let email = $("#email2").val();
      let phone = $("#phone2").val();
      let course =$("#course2").val();
      let city =$("#city2").val();
      $("#nameError2").text("");
      $("#emailError2").text("");
      $("#phoneError2").text("");
      $("#courseError2").text("");
      $("#cityError2").text("");
  
      if(name.trim() === ""){
          $("#nameError2").text("Name is required.");
          return;
      }
  
      if(email.trim() === ""){
          $("#emailError2").text("Email is required.");
          return;
      }
  
      if(!isValidEmail(email)){
          $("#emailError2").text("Invalid email address.");
          return;
      }
  
      if(phone.trim() === ""){
          $("#phoneError2").text("Phone number is required.");
          return;
      }
  
      if(!isValidPhoneNumber(phone)){
          $("#phoneError2").text("Invalid phone number.");
          return;
        }

      if(course.trim() === ""){
        $("#courseError2").text("Course name is required.");
        return;
      }

      if(city.trim() === ""){
        $("#cityError2").text("Please enter your city name.");
        return;
      }
  
      $("#form2").unbind('submit').submit();
    });
  
      function isValidEmail(email){
          let emailRegex = /^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/;
          return emailRegex.test(email);
      }
  
      function isValidPhoneNumber(phone){
          let phoneRegex = /^\d{10}$/;
          return phoneRegex.test(phone);
      }

    // Popup
    $("#openPopup").click(function(){
      $("#overlay").fadeIn();
      $("#popupForm").fadeIn();
    });

    $(".close").click(function(){
        $("#overlay").fadeOut();
        $("#popupForm").fadeOut();
    });

    // Form 3
    $("#form3").submit(function(e){
      e.preventDefault();
      let name = $("#name3").val();
      let email = $("#email3").val();
      let phone = $("#phone3").val();
      $("#nameError3").text("");
      $("#emailError3").text("");
      $("#phoneError3").text("");
  
      if(name.trim() === ""){
          $("#nameError3").text("Name is required.");
          return;
      }
  
      if(email.trim() === ""){
          $("#emailError3").text("Email is required.");
          return;
      }
  
      if(!isValidEmail(email)){
          $("#emailError3").text("Invalid email address.");
          return;
      }
  
      if(phone.trim() === ""){
          $("#phoneError3").text("Phone number is required.");
          return;
      }
  
      if(!isValidPhoneNumber(phone)){
          $("#phoneError3").text("Invalid phone number.");
          return;
        }
  
      $("#form3").unbind('submit').submit();
    });
  
      function isValidEmail(email){
          let emailRegex = /^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/;
          return emailRegex.test(email);
      }
  
      function isValidPhoneNumber(phone){
          let phoneRegex = /^\d{10}$/;
          return phoneRegex.test(phone);
      }

      // Form 4
      // Form 3
    $("#form4").submit(function(e){
      e.preventDefault();
      let name = $("#name4").val();
      let email = $("#email4").val();
      $("#nameError4").text("");
      $("#emailError4").text("");
  
      if(name.trim() === ""){
          $("#nameError4").text("Name is required.");
          return;
      }
  
      if(email.trim() === ""){
          $("#emailError4").text("Email is required.");
          return;
      }
  
      if(!isValidEmail(email)){
          $("#emailError4").text("Invalid email address.");
          return;
      }
  
      $("#form4").unbind('submit').submit();
    });
  
      function isValidEmail(email){
          let emailRegex = /^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/;
          return emailRegex.test(email);
    }
});
