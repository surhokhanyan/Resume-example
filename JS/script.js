// Functional for  Carousel
$('.slider').each(function() {
    var $this = $(this);
    var $group = $this.find('.slide_group');
    var $slides = $this.find('.slide');
    var bulletArray = [];
    var currentIndex = 0;
    var timeout;
    
    function move(newIndex) {
      var animateLeft, slideLeft;
      
      advance();
      
      if ($group.is(':animated') || currentIndex === newIndex) {
        return;
      }
      
      bulletArray[currentIndex].removeClass('active');
      bulletArray[newIndex].addClass('active');
      
      if (newIndex > currentIndex) {
        slideLeft = '100%';
        animateLeft = '-100%';
      } else {
        slideLeft = '-100%';
        animateLeft = '100%';
      }
      
      $slides.eq(newIndex).css({
        display: 'block',
        left: slideLeft
      });
      $group.animate({
        left: animateLeft
      }, function() {
        $slides.eq(currentIndex).css({
          display: 'none'
        });
        $slides.eq(newIndex).css({
          left: 0
        });
        $group.css({
          left: 0
        });
        currentIndex = newIndex;
      });
    }
    
    function advance() {
      clearTimeout(timeout);
      timeout = setTimeout(function() {
        if (currentIndex < ($slides.length - 1)) {
          move(currentIndex + 1);
        } else {
          move(0);
        }
      }, 4000);
    }
    
    $('.next_btn').on('click', function() {
      if (currentIndex < ($slides.length - 1)) {
        move(currentIndex + 1);
      } else {
        move(0);
      }
    });
    
    $('.previous_btn').on('click', function() {
      if (currentIndex !== 0) {
        move(currentIndex - 1);
      } else {
        move(3);
      }
    });
    
    $.each($slides, function(index) {
      var $button = $('<a class="slide_btn">&bull;</a>');
      
      if (index === currentIndex) {
        $button.addClass('active');
      }
      $button.on('click', function() {
        move(index);
      }).appendTo('.slide_buttons');
      bulletArray.push($button);
    });
    
    advance();
  });  // Functional end

//Pree Loader function
let loader = document.querySelector("#preeLoader");
loader.setAttribute("class", "animate__animated animate__fadeOut");
setTimeout(()=>{
    loader.style.display = "none";
}, 2000);

// Functional for website
var typed = new Typed(".auto-type", {
    strings: [" Sarga Joe", " a Designer", " a Developer"],
    typeSpeed:70,
    backSpeed:70,
    loop:true
});
let header = document.querySelector("header");
window.addEventListener("scroll", ()=>{
    header.classList.toggle("sticky", window.scrollY > 0)
});
let home = document.querySelector("nav li:nth-child(1)");
let about = document.querySelector("nav li:nth-child(2)");
let projects = document.querySelector("nav li:nth-child(3)");
let resume = document.querySelector("nav li:nth-child(4)");
let blog = document.querySelector("nav li:nth-child(5)");
let contacts = document.querySelector("nav li:nth-child(6)");
let ulLi = document.querySelectorAll("nav ul li");

ulLi.forEach(item =>{
    item.addEventListener("click", ()=>{
        ulLi.forEach(elem =>{
            elem.removeAttribute("class");
        })
        item.setAttribute("class", "active");
    })
});

let skills = document.querySelectorAll("#twoMainSkillsPercentsDivBigProgress span");
let lineOne = document.querySelector("#twoMainSkillsPercentsDivBigLine1");
let lineTwo = document.querySelector("#twoMainSkillsPercentsDivBigLine2");
let lineThree = document.querySelector("#twoMainSkillsPercentsDivBigLine3");
let lineFour = document.querySelector("#twoMainSkillsPercentsDivBigLine4");
window.addEventListener("scroll", ()=>{
    if (window.scrollY > 710){
        skills.forEach(item =>{
            item.style.animation = "spanLoad 2s";
        })
        lineOne.style.animation = "loading 2s forwards cubic-bezier(0, 0, 0, 0)";
        lineTwo.style.animation = "loading2 2s forwards cubic-bezier(0, 0, 0, 0)";
        lineThree.style.animation = "loading3 2s forwards cubic-bezier(0, 0, 0, 0)";
        lineFour.style.animation = "loading4 2s forwards cubic-bezier(0, 0, 0, 0)";
    }
    if (window.scrollY < 790){
        about.removeAttribute("class");
        home.setAttribute("class", "active");
    }else if(window.scrollY > 790 && window.scrollY < 1580){
        home.removeAttribute("class");
        projects.removeAttribute("class");
        about.setAttribute("class", "active");
    }else if(window.scrollY > 1580 && window.scrollY < 2720){
        about.removeAttribute("class");
        resume.removeAttribute("class");
        projects.setAttribute("class", "active");
    }else if(window.scrollY > 2720 && window.scrollY < 3710){
        projects.removeAttribute("class");
        blog.removeAttribute("class");
        resume.setAttribute("class", "active");
    }else if(window.scrollY > 3710 && window.scrollY < 4220){
        resume.removeAttribute("class");
        contacts.removeAttribute("class");
        blog.setAttribute("class", "active");
    }else if(window.scrollY > 4220){
        blog.removeAttribute("class");
        contacts.setAttribute("class", "active");
    }
});

let name = document.querySelector("#name:nth-child(1)");
let email = document.querySelector("#name:nth-child(2)");
let nameRegEx = /^[A-Z]/;
let emailRegEx = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
let submit = document.querySelector("#sixMainBottomLeftInputs button");

submit.addEventListener("click", ()=>{
    if (nameRegEx.test(name.value) === false){
        name.style.border = "1px solid red";
    }else{
        name.style.border = "1px solid #090909";
    };
    if (emailRegEx.test(email.value) === false){
        email.style.border = "1px solid red";
    }else{
        email.style.border = "1px solid #090909";
    };
});

let all = document.querySelector("#threeMainSelect li:nth-child(1)");
let web = document.querySelector("#threeMainSelect li:nth-child(2)");
let mobile = document.querySelector("#threeMainSelect li:nth-child(3)");
let graphic = document.querySelector("#threeMainSelect li:nth-child(4)");
let personalAll = document.querySelectorAll("#threeMainSelect li");
let sectionThree = document.querySelector("#sectionThree");
let threeMain = document.querySelector("#threeMain");
let portfolio = document.querySelector("#threeMainPortfolio");
let portOne = document.querySelector("#threeMainPortfolioBig:nth-child(1)");
let portTwo = document.querySelector("#threeMainPortfolioSmall:nth-child(2)");
let portThree = document.querySelector("#threeMainPortfolioSmall:nth-child(3)");
let portFour = document.querySelector("#threeMainPortfolioBig:nth-child(4)");
let portFive = document.querySelector("#threeMainPortfolioBig:nth-child(5)");
let portSix = document.querySelector("#threeMainPortfolioSmall:nth-child(6)");

personalAll.forEach(item =>{
    item.addEventListener("click", ()=>{
        personalAll.forEach(elem =>{
            elem.removeAttribute("id");
        })
        item.setAttribute("id", "active");
    });
});
all.addEventListener("click", ()=>{
    portOne.removeAttribute("class");
    portTwo.removeAttribute("class");
    portThree.removeAttribute("class");
    portFour.removeAttribute("class");
    portFive.removeAttribute("class");
    portSix.removeAttribute("class");
    portOne.setAttribute("class", "animate__animated animate__fadeIn");
    portTwo.setAttribute("class", "animate__animated animate__fadeIn");
    portThree.setAttribute("class", "animate__animated animate__fadeIn");
    portFour.setAttribute("class", "animate__animated animate__fadeIn");
    portFive.setAttribute("class", "animate__animated animate__fadeIn");
    portSix.setAttribute("class", "animate__animated animate__fadeIn");
    sectionThree.style.height = "1151.6px";
    threeMain.style.height = "1011.6px";
    portfolio.style.height = "830px";
    portOne.style.display = "flex";
    portTwo.style.display = "flex";
    portThree.style.display = "flex";
    portFour.style.display = "flex";
    portFive.style.display = "flex";
    portSix.style.display = "flex";
})
web.addEventListener("click", ()=>{
    portTwo.removeAttribute("class");
    portSix.removeAttribute("class");
    portOne.setAttribute("class", "animate__animated animate__fadeOutUp");
    portThree.setAttribute("class", "animate__animated animate__fadeOutUp");
    portFour.setAttribute("class", "animate__animated animate__fadeOutUp");
    portFive.setAttribute("class", "animate__animated animate__fadeOutUp");
    setTimeout(()=>{
        sectionThree.style.height = "621.6px";
        threeMain.style.height = "481.6px";
        portfolio.style.height = "330px";
        portOne.style.display = "none";
        portTwo.style.display = "flex";
        portThree.style.display = "none";
        portFour.style.display = "none";
        portFive.style.display = "none";
        portSix.style.display = "flex";
    }, 500)
});
mobile.addEventListener("click", ()=>{
    portFour.removeAttribute("class");
    portFive.removeAttribute("class");
    portOne.setAttribute("class", "animate__animated animate__fadeOutUp");
    portTwo.setAttribute("class", "animate__animated animate__fadeOutUp");
    portThree.setAttribute("class", "animate__animated animate__fadeOutUp");
    portSix.setAttribute("class", "animate__animated animate__fadeOutUp");
    setTimeout(()=>{
        sectionThree.style.height = "821.6px";
        threeMain.style.height = "681.6px";
        portfolio.style.height = "530px";
        portOne.style.display = "none";
        portTwo.style.display = "none";
        portThree.style.display = "none";
        portFour.style.display = "flex";
        portFive.style.display = "flex";
        portSix.style.display = "none";
    }, 500);
});
graphic.addEventListener("click", ()=>{
    portOne.removeAttribute("class");
    portThree.removeAttribute("class");
    portTwo.setAttribute("class", "animate__animated animate__fadeOut");
    portFour.setAttribute("class", "animate__animated animate__fadeOut");
    portFive.setAttribute("class", "animate__animated animate__fadeOut");
    portSix.setAttribute("class", "animate__animated animate__fadeOut");
    setTimeout(()=>{
        sectionThree.style.height = "821.6px";
        threeMain.style.height = "681.6px";
        portfolio.style.height = "530px";
        portOne.style.display = "flex";
        portTwo.style.display = "none";
        portThree.style.display = "flex";
        portFour.style.display = "none";
        portFive.style.display = "none";
        portSix.style.display = "none";
    },500)
})