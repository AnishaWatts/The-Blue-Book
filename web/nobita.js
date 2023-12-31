$("#headbed").fadeOut('slow');
$("#headbed").fadeIn('slow');

let flkty = new Flickity(".Slider", {
  setGallerySize: false,
  pageDots: false,
  initialIndex: 8 // I set the initial index to the middle fruit.
});

/** MY CODE BELOW TO ALLOW SCROLLING **/

// get the carousel so can move next/previous.
let $carousel = $(".Slider").flickity();

// Check for mouse scroll using jquery mousewheel.
$("body").on("mousewheel", function (event) {
  // use flickity methods to go previous or next depending on scroll direction

  if (event.deltaY == -1) {
    $carousel.flickity("previous");
  }

  if (event.deltaY == 1) {
    $carousel.flickity("next");
  }
});

/* End of my code, below is default transformer, can modify this for different effects */

const transformer = new FlickityTransformer(flkty, [
  {
    name: "scale",
    stops: [
      [-300, 0.5],
      [0, 0.8],
      [300, 0.5]
    ]
  },
  {
    name: "translateY",
    stops: [
      [-1000, 500],
      [0, 0],
      [1000, 500]
    ]
  },
  {
    name: "rotate",
    stops: [
      [-300, -30],
      [0, 0],
      [300, 30]
    ]
  },
  {
    // Declare perspective here, before rotateY. At least two stops are required, hence the duplication.
    name: "perspective",
    stops: [
      [0, 600],
      [1, 600]
    ]
  },
  {
    name: "rotateY",
    stops: [
      [-300, 45],
      [0, 0],
      [300, -45]
    ]
  }
]);