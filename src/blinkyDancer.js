var MakeBlinkyDancer = function(top, left, timeBetweenSteps) {
  MakeDancer.call(this, top, left, timeBetweenSteps);
  //this.$node = $('<span class="blinkyDancer"></span>');
  // we plan to overwrite the step function below, but we still want the superclass step behavior to work,
  // so we must keep a copy of the old version of this function
  this.$node.wrapInner('<img class="img1" src="marioGif.gif"></img>');
};

MakeBlinkyDancer.prototype = Object.create(MakeDancer.prototype);
MakeBlinkyDancer.prototype.constructor = MakeBlinkyDancer;


MakeBlinkyDancer.prototype.step = function() {
//debugger;  
  MakeDancer.prototype.step.call(this, this.timeBetweenSteps);
  
  this.$node.toggle();
};

MakeBlinkyDancer.prototype.lineUp = function() {  
  this.$node.css({top: 200, position: 'absolute'});
};

MakeBlinkyDancer.prototype.lineUpBottom = function() {  
  this.$node.css({top: 800, position: 'absolute'});
};

//MakeBlinkyDancer.prototype.lineUpBottom = function() {  
//  this.$node.css({bottom: 200, position: 'absolute'});
//};

  
// // FUNCTIONAL ------------------------------------------------ 
//  var oldStep = blinkyDancer.step;
 
//  blinkyDancer.step = function() {
//     blinkyDancer.$node.toggle();
//   };  
  
// // INCORRECT ASSUMPTIONS
//   this.oldStep = this.step;
//                   ^^ points to instantiation, NOT
//                   instantiation's prototype

//   //return this;
// };


