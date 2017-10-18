var MakeMoonWalkerDancer = function(top, left, timeBetweenSteps) {
  MakeDancer.call(this, top, left, timeBetweenSteps);
  
  // we plan to overwrite the step function below, but we still want the superclass step behavior to work,
  // so we must keep a copy of the old version of this function
  
  this.$node.addClass('moonwalkingDancer');
  $( ".inner" ).wrapInner( "<div class='new'></div>");
  this.$node.wrapInner('<img class="moonwalk" src="ross.gif"></img>');
};

MakeMoonWalkerDancer.prototype = Object.create(MakeDancer.prototype);
MakeMoonWalkerDancer.prototype.constructor = MakeMoonWalkerDancer;

MakeMoonWalkerDancer.prototype.step = function() {
  
  MakeDancer.prototype.step.call(this, this.timeBetweenSteps);
    this.$node.animate({'marginLeft': '-=100px'}, 2000);
    //this.$node.css({'-webkit-transform': 'scale(-1, 1)'})
    this.$node.animate({'marginLeft': '+=100px'}, 2000);
};

MakeMoonWalkerDancer.prototype.lineUp = function() {
  this.$node.css({top: 200, position: 'absolute'});
};

MakeMoonWalkerDancer.prototype.lineUpBottom = function() {  
  this.$node.css({top: 800, position: 'absolute'});
};