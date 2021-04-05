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
        gemContainer.classList.add("gem-container");
        document.querySelector(".js-container").appendChild(gemContainer);
      
        let gemTitle = document.createElement("h2");
        gemTitle.classList.add("gem-title");
        gemTitle.innerText = gem.fields.title;
        gemContainer.appendChild(gemTitle);

        let gemShape = document.createElement("h2");
        gemShape.classList.add("gem-shape");
        gemShape.innerText = gem.fields.shape;
        gemContainer.appendChild(gemShape);

        let gemImage = document.createElement("img");
        gemImage.classList.add("gem-image");
        gemImage.src = gem.fields.image[0].url;
        gemContainer.appendChild(gemImage);

        // add event lister
        // when user clicks on gemContiner
        // other elements will appear or disappear
        gemContainer.addEventListener("click", function(){
            // toggle = light switch
            gemTitle.classList.toggle("active");
            gemShape.classList.toggle("active");
        });

        // get genre field from airtable, 
        // loop through the array and add each genre as a class to the song container
        let gemColor = gem.fields.color;
        gemColor.forEach(function(color){
            gemContainer.classList.add(color)
        });

        // add event listener to filter (to add an active class to gems)
        let filterRed = document.querySelector(".js-red");
        filterRed.addEventListener("click", function(){

            if (gemContainer.classList.contains("red")) {
                gemContainer.style.display = "block";
            } else {
                gemContainer.style.display = "none";
            }
        });

        let filterOrange = document.querySelector(".js-orange");
        filterOrange.addEventListener("click", function(){

            if (gemContainer.classList.contains("orange")) {
                gemContainer.style.display = "block";
            } else {
                gemContainer.style.display = "none";
            }
        });


        let filterGreen = document.querySelector(".js-green");
        filterGreen.addEventListener("click", function(){

            if (gemContainer.classList.contains("green")) {
                gemContainer.style.display = "block";
            } else {
                gemContainer.style.display = "none";
            }
        });

        let filterBlue = document.querySelector(".js-blue");
        filterBlue.addEventListener("click", function(){

            if (gemContainer.classList.contains("blue")) {
                gemContainer.style.display = "block";
            } else {
                gemContainer.style.display = "none";
            }
        });

        let filterPurple = document.querySelector(".js-purple");
        filterPurple.addEventListener("click", function(){

            if (gemContainer.classList.contains("purple")) {
                gemContainer.style.display = "block";
            } else {
                gemContainer.style.display = "none";
            }
        });

        let filterPink = document.querySelector(".js-pink");
        filterPink.addEventListener("click", function(){

            if (gemContainer.classList.contains("pink")) {
                gemContainer.style.display = "block";
            } else {
                gemContainer.style.display = "none";
            }
        });

        let filterWhite = document.querySelector(".js-white");
        filterWhite.addEventListener("click", function(){

            if (gemContainer.classList.contains("white")) {
                gemContainer.style.display = "block";
            } else {
                gemContainer.style.display = "none";
            }
        });

        let filterReset = document.querySelector(".js-reset");
        filterReset.addEventListener("click", function(){
            gemContainer.style.display = "block";
        });
});
}