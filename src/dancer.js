// Creates and returns a new dancer object that can step
var MakeDancer = function(top, left, timeBetweenSteps) {
  // use jQuery to create an HTML <span> tag
  this.$node = $('<span class="dancer"></span>');
  this.top = top;
  this.left = left;
  this.timeBetweenSteps = timeBetweenSteps;

  // now that we have defined the dancer object, we can start setting up important parts of it by calling the methods we wrote
  // this one sets the position to some random default point within the body
  
  this.step(timeBetweenSteps);
  this.setPosition(top, left);

  $( ".inner" ).wrapInner( "<div class='new'></div>");
  this.$node.wrapInner('<img class="img1" src="marioGif.gif"></img>');

};

MakeDancer.prototype.step = function(timeBetweenSteps) {
  // the basic dancer doesn't do anything interesting at all on each step,
  // it just schedules the next step
  setTimeout(this.step.bind(this, timeBetweenSteps), timeBetweenSteps);
};


MakeDancer.prototype.setPosition = function(top, left) {
  // Use css top and left properties to position our <span> tag
  // where it belongs on the page. See http://api.jquery.com/css/
  //
  var styleSettings = {
    top: top,
    left: left
  };
  this.$node.css(styleSettings);
};

MakeDancer.prototype.lineUp = function() {
//debugger;  
  
  this.$node.css({right: 200, position: 'absolute'});
  //$("#mydiv").css({top: 200, left: 200, position:'absolute'});
};



// // Creates and returns a new dancer object that can step
// var Dancer = function(top, left, timeBetweenSteps) {

//   // use jQuery to create an HTML <span> tag
//   this.$node = $('<span class="dancer"></span>');
//   this.top = top;
//   this.left = left;
//   this.timeBetweenSteps = timeBetweenSteps;


  
// // OLD ------------------------------------------------------------------

//   dancer.step = function() {
//     // the basic dancer doesn't do anything interesting at all on each step,
//     // it just schedules the next step
//     setTimeout(dancer.step, timeBetweenSteps);
//   };
//   dancer.step();
  
 

//   // now that we have defined the dancer object, we can start setting up important parts of it by calling the methods we wrote
//   // this one sets the position to some random default point within the body
//   this.step();
//   this.setPosition(top, left);
// };

// Dancer.prototype.step = function() {
 
//   setTimeout(this.step.bind(this), this.timeBetweenSteps);
// };

// Dancer.prototype.setPosition = function(top, left) {
//   var styleSettings = {
//     top: top,
//     left: left
//   };
//   this.$node.css(styleSettings);
// };
//   