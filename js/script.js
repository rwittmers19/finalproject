// Adds elastic feature to each letter in the header of the site
const spans = document.querySelectorAll('h1 span')
spans.forEach(span => span.addEventListener('mouseover', function(event) {
    span.classList.add('animated','rubberBand');
}));

spans.forEach(span => span.addEventListener('mouseout', function(event) {
    span.classList.remove('animated','rubberBand');
}));

// Get each of the skill bars
const htmlBar = document.querySelector('.bar-html');
const cssBar = document.querySelector('.bar-css');
const jsBar = document.querySelector('.bar-javascript');
const javaBar = document.querySelector('.bar-java');
const pythonBar = document.querySelector('.bar-python');

// Animate the bars when scrolling to the skills section
var barTimer = new TimelineLite();
barTimer.fromTo(htmlBar, .75, {width: `calc(0% - 6px)`},
{width: `calc(95% - 6px)`, ease: Power4.easeOut});

barTimer.fromTo(cssBar, .75, {width: `calc(0% - 6px)`},
{width: `calc(85% - 6px)`, ease: Power4.easeOut});

barTimer.fromTo(jsBar, .75, {width: `calc(0% - 6px)`},
{width: `calc(70% - 6px)`, ease: Power4.easeOut});

barTimer.fromTo(javaBar, .75, {width: `calc(0% - 6px)`},
{width: `calc(65% - 6px)`, ease: Power4.easeOut});

barTimer.fromTo(pythonBar, .75, {width: `calc(0% - 6px)`},
{width: `calc(90% - 6px)`, ease: Power4.easeOut});

// Controlls when each of the bars begins to slide across
const controller = new ScrollMagic.Controller()
const scene = new ScrollMagic.Scene({
    triggerElement: '.skills',
    triggerHook: .01
})

// Adds the "clock" to the bars
.setTween(barTimer)
.addTo(controller)

// Shows pertinent image links when certain buttons are clicked (a filtering effect)
const showRequiredCategory = event => {
    const getId = event.id;
    const links = document.querySelectorAll('.work-category button');
    
    for(i = 0; i < links.length; i++) {
        if(links[i].hasAttribute('class')) {
            links[i].classList.remove('active');
        }
    }

    // Adds active class to images to display them and hide the others
    event.classList.add('active');
    const getCategory = document.querySelector(`.category-${getId}`);
    const categories = document.querySelectorAll('div[class ^= "category-"]');

    for(i = 0; i < categories.length; i++) {
        if(categories[i].hasAttribute('class')) {
            categories[i].classList.remove('showCategory');
            categories[i].classList.add('hideCategory');
        }
    }

    getCategory.classList.remove('hideCategory');
    getCategory.classList.add('showCategory');
}

// Ajax Call for form!
window.addEventListener("DOMContentLoaded", function() {

    // Get the form elements defined in the form
    
    var form = document.getElementById("my-form");
    var button = document.getElementById("my-form-button");
    var status = document.getElementById("my-form-status");

    // Success and Error functions for after the form is submitted
    
    function success() {
      form.reset();
      button.style = "display: none ";
      status.innerHTML = "Thanks!";
    }

    function error() {
      status.innerHTML = "One or more of your fields was filled out incorrectly.";
    }

    // Handle the form submission event

    form.addEventListener("submit", function(ev) {
      ev.preventDefault();
      var data = new FormData(form);
      ajax(form.method, form.action, data, success, error);
    });
  });
  
  // Helper function for sending an AJAX request
  function ajax(method, url, data, success, error) {
    var xhr = new XMLHttpRequest();
    xhr.open(method, url);
    xhr.setRequestHeader("Accept", "application/json");
    xhr.onreadystatechange = function() {
      if (xhr.readyState !== XMLHttpRequest.DONE) return;
      if (xhr.status === 200) {
        success(xhr.response, xhr.responseType);
      } else {
        error(xhr.status, xhr.response, xhr.responseType);
      }
    };
    xhr.send(data);
  }