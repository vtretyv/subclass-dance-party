var MakeFadeDancer = function(top, left, timeBetweenSteps) {
  MakeDancer.call(this, top, left, timeBetweenSteps);
  
  // we plan to overwrite the step function below, but we still want the superclass step behavior to work,
  // so we must keep a copy of the old version of this function
  this.$node.wrapInner('<img class="img1" src="bmo.gif"></img>');
  this.$node.addClass('bouncyDancer');
};

MakeFadeDancer.prototype = Object.create(MakeDancer.prototype);
MakeFadeDancer.prototype.constructor = MakeFadeDancer;


MakeFadeDancer.prototype.step = function() {
//debugger;  
  
  MakeDancer.prototype.step.call(this, this.timeBetweenSteps);
  
    this.$node.fadeIn(1000);
    this.$node.fadeOut(1000);
    //this.$node.animate({'top': 'top-=50px'}, 1000);
    //this.$node.animate({'top': 'top+=50px'}, 1000);
};


MakeFadeDancer.prototype.lineUp = function() {
//debugger;  
  
  this.$node.css({top: 200, position: 'absolute'});
};

MakeFadeDancer.prototype.lineUpBottom = function() {  
  this.$node.css({top: 800, position: 'absolute'});
};