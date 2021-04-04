// var slideIndex = 1;
// showSlides(slideIndex);

// // Next/previous controls
// function plusSlides(n) {
//   showSlides(slideIndex += n);
// }

// // Thumbnail image controls
// function currentSlide(n) {
//   showSlides(slideIndex = n);
// }

// function showSlides(n) {
//   var i;
//   var slides = document.getElementsByClassName("mySlides");
//   var dots = document.getElementsByClassName("dot");
//   if (n > slides.length) {slideIndex = 1}
//   if (n < 1) {slideIndex = slides.length}
//   for (i = 0; i < slides.length; i++) {
//       slides[i].style.display = "none";
//   }
//   for (i = 0; i < dots.length; i++) {
//       dots[i].className = dots[i].className.replace(" active", "");
//   }
//   slides[slideIndex-1].style.display = "block";
//   dots[slideIndex-1].className += " active";
// }





// console.log("Hello is this working?")

// load the airtable library, call it "Airtable"
let Airtable = require("airtable");
console.log(Airtable);

// connect our airtable base to our website using API key
let base = new Airtable({ apiKey: "keyHgmsY3PeOahiOd" }).base(
    "appkjFKTVoK8Banc1"
);

//get our airtable data, specify how to retrieve it
base("gemstone").select({}).eachPage(gotPageOfGems, gotAllGems);

// an empty array to hold our book data
// could type in arrays? ["dots" "lines"] but this is left empty
const gems = [];

// callback function that receives our data
function gotPageOfGems(records, fetchNextPage) {
    console.log("gotPageOfGems()");
    // add the records from this page to our array
    // push is another word for add
    gems.push(...records);
    // request more pages
    fetchNextPage();
;}

// call back function that is called when all pages are loaded
function gotAllGems(err) {
    console.log("gotAllGems()");
  
    // report an error, you'd want to do something better than this in production
    if (err) {
      console.log("error loading data");
      console.error(err);
      return;
    }
  
    // call functions to log and show the spirals
    consoleLogGems();
    showGems();
};

// just loop through the spirals and console.log them
function consoleLogGems() {
    console.log("consoleLogGems()");
    gems.forEach((gem) => {
      console.log("Gem:", gem);
    });
};
  
// loop through airtable data, and display them onto our page
function showGems() {
    console.log("showGems()");
    gems.forEach((gem) => {

        // creating a new div container, where our info will go
        let gemContainer = document.createElement("div");
        gemContainer.classList.add("container");
        document.querySelector(".container").appendChild(gemContainer);
      
        let gemTitle = document.createElement("h1");
        gemTitle.classList.add("container");
        gemTitle.innerText = gem.fields.title;
        gemContainer.appendChild(gemTitle);

        let gemShape = document.createElement("h1");
        gemShape.classList.add("container");
        gemShape.innerText = gem.fields.shape;
        gemContainer.appendChild(gemShape);

        let gemImage = document.createElement("img");
        gemImage.classList.add("container");
        gemImage.src = gem.fields.image[0].url;
        gemContainer.appendChild(gemImage);

        // get field from airtable
        let gemColor = document.createElement("h1");
        gemColor.classList.add("container");
        gemColor.innerText = gem.fields.color;
        gemContainer.appendChild(gemColor);
});
}