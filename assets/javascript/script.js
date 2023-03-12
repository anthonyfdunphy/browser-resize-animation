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

linkElement.addEventListener('click', function() {
  liElements.forEach(function(liElement) {
    liElement.style.height = '0px'; // Change the value as needed
  });

  ulElement.style.opacity = '0'; // Set the opacity of the ul element to 0
  ulElement.addEventListener('transitionend', function() {
    inDetail.classList.remove('hidden');
    ulElement.classList.add('hidden'); // Add the 'hidden' class to the ul element when the CSS transition ends
  }, { once: true }); // Use the 'once' option to remove the event listener after it has fired
});



