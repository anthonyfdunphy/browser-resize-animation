const scroll = new LocomotiveScroll({
    el: document.querySelector("[data-scroll-container]"),
    smooth: true,
    mobile: {
        smooth: true
    },
    tablet: {
        smooth: true
    }
});

function customEase(t) {
    if (t < 0.5) {
      return 1 - Math.pow(2, -10 * t * 2);
    } else {
      return 0.5 - 0.5 * Math.pow(2, 10 * (t - 0.5));
    }
}
  

const textTop = document.getElementById('text-top');
let currentValue = 0;

scroll.on('scroll', function(scroll) {
  const scrollY = scroll.y;
  const matrixValue = textTop.style.transform;
  const regex = /-?\d+\.\d+/;
  const match = matrixValue.match(regex);
  const extractedValue = match ? Number(match[0]) : 0;

  if (extractedValue !== currentValue) {
    currentValue = extractedValue;
    const newValue = (currentValue + 100) / 100; // convert range to 0-1
    textTop.style.opacity = newValue.toFixed(2); // set opacity to the new value
    console.log(newValue);
  }
});

// JavaScript code
const linkElement = document.querySelector('.link');
const ulElement = document.querySelector('.work');
const liElements = document.querySelectorAll('.work li');
const inDetail = document.querySelector('.in-detail');
const exitDetail = document.querySelector('.exit');
const textDetail = document.querySelector('.by-line');

// this event listener checks when the + symbol is clicked and runs scripts

linkElement.addEventListener('click', function() {
  liElements.forEach(function(liElement) {
    liElement.style.height = '0%'; // Change the value as needed
  });

  ulElement.style.opacity = '0'; // Set the opacity of the ul element to 0

  ulElement.addEventListener('transitionend', function() {
    // function to set height of detail div for timer
    function setHeight() {
      inDetail.style.height = "100%";
      inDetail.style.opacity = "100%";
      textDetail.style.opacity = "100%";
      console.log("text fading!")
    };

    inDetail.classList.remove('hidden'); // Add the 'hidden' class from the detail div
    ulElement.classList.add('hidden'); // Add the 'hidden' class to the ul element when the CSS transition ends

    const myTimeout = setTimeout(setHeight, 50);  // Set Height of detail div after 0.5 ms


  }, { once: true }); // Use the 'once' option to remove the event listener after it has fired
});

// this event listener checks when the X in the detail div is clicked and runs scripts
exitDetail.addEventListener('click', function() {
  console.log("exit detail function working!");
  inDetail.style.height = "0%"; // Set height to 0 when closing

  inDetail.addEventListener('transitionend', function() {
    console.log("transition! exit detail function working!");
    inDetail.style.opacity = "0";
    liElements.forEach(function(liElement) {
      liElement.style.height = "80px"; // Change the value as needed
    });

    ulElement.classList.remove('hidden'); //Remove the 'hidden' class to the ul element when the CSS transition ends

    // function to set height of detail div for timer
    function setOpacity() {
      ulElement.style.opacity = '1';
    };

    const opacityTimer = setTimeout(setOpacity, 50);  // Set Height of detail div after 0.5 ms
    

  }, { once: true });
});



