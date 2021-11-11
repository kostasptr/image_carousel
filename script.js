let carouselObj = [
  {id: 1, src: "./images/image1.jpg", title: "Bleeding Heart", description: "Lamprocapnos"},
  {id: 2, src: "./images/image2.jpg", title: "Cherry Blossom", description: "Prunus subhirtella"},
  {id: 3, src: "./images/image3.jpg", title: "Bird of Paradise", description: "Strelitzia reginae"},
  {id: 4, src: "./images/image4.jpg", title: "Dahlia", description: "Dahlia"},
  {id: 5, src: "./images/image5.jpg", title: "Subterranean Plant", description: "Hydnora africana"},
  {id: 6, src: "./images/image6.jpg", title: "Jade Vine", description: "Strongylodon Macrobotrys"},
  {id: 7, src: "./images/image7.jpg", title: "Parrot Flower", description: "Impatiens Psittacina"},
  {id: 8, src: "./images/image8.jpg", title: "Naked Man Orchid", description: "Orchis italica"},
  {id: 9, src: "./images/image9.jpg", title: "Moon Orchid", description: "Phalaenopsis amabilis"},
  {id: 10, src: "./images/image10.jpg", title: "Black Bat Flower", description: "Tacca chantrieri"}
]

var z = `url(${carouselObj[0].src})`;


function Carousel() {
  document.getElementById("carousel").style.backgroundImage = "url(" + carouselObj[0].src + ")";
  document.getElementById("title").innerHTML = carouselObj[0].title;
  document.getElementById("scientific").innerHTML = carouselObj[0].description;

  for (let i = 0; i < 10; i++) {
    // targeting the svg itself
    const svgns = "http://www.w3.org/2000/svg";
    // variable for the namespace 
    var svg = document.querySelector("svg");
    var x = i.toString();
    var name = "newCircle" + x;
    var name2 = name;
    var counter = i + 1;
    var position = 36 * counter;
    // make a simple rectangle
    var name = document.createElementNS(svgns, "circle");
    // set attributes of new circle
    gsap.set(name, {attr: {
      cx: position, 
      cy: 25, 
      r: 8, 
      width: 30, 
      height: 30, 
      fill: "#316161",
      id: name2
    }});
    // append the new rectangle to the svg
    svg.appendChild(name);
  }

  gsap.set(circles[0], {attr: {
    fill: "white"
  }});

}

var count = 0;
const larrow = document.getElementById("larrow");
const rarrow = document.getElementById("rarrow");
const circles = document.getElementsByTagName("circle");

function change(counter) {
  document.getElementById("carousel").style.backgroundImage = "url(" + carouselObj[counter].src + ")";
  document.getElementById("title").innerHTML = carouselObj[counter].title;
  document.getElementById("scientific").innerHTML = carouselObj[counter].description;
  gsap.set(circles[counter], {attr: {
    fill: "white"
  }});
}

larrow.addEventListener("click", () => {
  gsap.set(circles[count], {attr: {
    fill: "#316161"
  }});
  count = count - 1;

  if (count < 0 ) {
    count = 9;
  }
  change(count);
})

rarrow.addEventListener("click", () => {
  gsap.set(circles[count], {attr: {
    fill: "#316161"
  }});
  count = count + 1;

  if (count > 9 ) {
    count = 0;
  }
  change(count);
})