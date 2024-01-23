window.addEventListener("scroll", function() {
    var triggerElement = document.getElementById("trigger");

    // Get the position of the trigger element relative to the viewport
    var triggerElementRect = triggerElement.getBoundingClientRect();

    // Check if the bottom of the trigger element is above the viewport
    if (triggerElementRect.bottom < 0) {
        scrolledDown();
    }

    if (triggerElementRect.bottom > 0) {
        scrolledUp();
    }
})

function scrolledDown() {
    // Make the divs visible by removing the 'hidden' class
    document.getElementById('div1').classList.remove('hidden');
    document.getElementById('div2').classList.remove('hidden');

    document.getElementById('returnToTop').style.right = '2.5vh';
}

function scrolledUp() {
    // Make the divs invisible by removing the 'hidden' class
    document.getElementById('div1').classList.add('hidden');
    document.getElementById('div2').classList.add('hidden');

    document.getElementById('returnToTop').style.right = '-10vh';
}

function returnToTop() {
    document.documentElement.scrollTop = 0;
}