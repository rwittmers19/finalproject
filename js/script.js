// Adds elastic feature to each letter in the header of the site
const spans = document.querySelectorAll('h1 span')
spans.forEach(span => span.addEventListener('mouseover', function(event) {
    span.classList.add('animated','rubberBand')
}))

spans.forEach(span => span.addEventListener('mouseout', function(event) {
    span.classList.remove('animated','rubberBand')
}))

// Get each of the skill bars
const htmlBar = document.querySelector('.bar-html')
const cssBar = document.querySelector('.bar-css')
const jsBar = document.querySelector('.bar-javascript')
const javaBar = document.querySelector('.bar-java')
const pythonBar = document.querySelector('.bar-python')

// Animate the bars when scrolling to the skills section
var barTimer = new TimelineLite()
barTimer.fromTo(htmlBar, .75, {width: `calc(0% - 6px)`},
{width: `calc(95% - 6px)`, ease: Power4.easeOut})

barTimer.fromTo(cssBar, .75, {width: `calc(0% - 6px)`},
{width: `calc(85% - 6px)`, ease: Power4.easeOut})

barTimer.fromTo(jsBar, .75, {width: `calc(0% - 6px)`},
{width: `calc(70% - 6px)`, ease: Power4.easeOut})

barTimer.fromTo(javaBar, .75, {width: `calc(0% - 6px)`},
{width: `calc(65% - 6px)`, ease: Power4.easeOut})

barTimer.fromTo(pythonBar, .75, {width: `calc(0% - 6px)`},
{width: `calc(90% - 6px)`, ease: Power4.easeOut})

// Controlls when each of the bars begins to slide across
const controller = new ScrollMagic.Controller()
const scene = new ScrollMagic.Scene({
    triggerElement: '.skills',
    triggerHook: .01
})

// Adds the "clock" to the bars
.setTween(time1)
.addTo(controller)

// Shows pertinent image links when certain buttons are clicked (a filtering effect)
const showRequiredCategory = event => {
    const getId = event.id
    const links = document.querySelectorAll('.work-category button')
    
    for(i = 0; i < links.length; i++) {
        if(links[i].hasAttribute('class')) {
            links[i].classList.remove('active')
        }
    }

    event.classList.add('active')
    const getCategory = document.querySelector(`.category-${getId}`)
    const categories = document.querySelectorAll('div[class ^= "category-"]')

    for(i = 0; i < categories.length; i++) {
        if(categories[i].hasAttribute('class')) {
            categories[i].classList.remove('showCategory')
            categories[i].classList.add('hideCategory')
        }
    }

    getCategory.classList.remove('hideCategory')
    getCategory.classList.add('showCategory')
}

// Make the form make an AJAX call
