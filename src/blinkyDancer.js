var MakeBlinkyDancer = function(top, left, timeBetweenSteps) {
  // this = Object.create(MakeBlinkyDancer.prototype)
  //debugger;
  Dancer.call(this, top, left, timeBetweenSteps); 
  
  // we plan to overwrite the step function below, but we still want the superclass step behavior to work,
  // so we must keep a copy of the old version of this function
  // this currently points to instantiation

/*
  
// FUNCTIONAL ------------------------------------------------ 
 var oldStep = blinkyDancer.step;
 
 blinkyDancer.step = function() {
    blinkyDancer.$node.toggle();
  };  
  
// INCORRECT ASSUMPTIONS
  this.oldStep = this.step;
                  ^^ points to instantiation, NOT
                  instantiation's prototype
*/
  //return this;
};

MakeBlinkyDancer.prototype = Object.create(Dancer.prototype);
MakeBlinkyDancer.prototype.constructor = MakeBlinkyDancer;

MakeBlinkyDancer.prototype.step = function() {
  
  Dancer.prototype.step.call(this);

// INCORRECT
// this.oldStep()
 
  this.$node.toggle();
};