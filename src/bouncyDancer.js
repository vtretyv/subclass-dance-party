var MakeBouncyDancer = function(top, left, timeBetweenSteps) {
  MakeDancer.call(this, top, left, timeBetweenSteps);
  
  // we plan to overwrite the step function below, but we still want the superclass step behavior to work,
  // so we must keep a copy of the old version of this function
  
  this.$node.addClass('bouncyDancer');
//  $( ".inner" ).wrapInner( "<div class='new'></div>");
//  this.$node.wrapInner('<img class="img1" src="marioGif.gif"></img>');
};

MakeBouncyDancer.prototype = Object.create(MakeDancer.prototype);
MakeBouncyDancer.prototype.constructor = MakeBouncyDancer;


MakeBouncyDancer.prototype.step = function() {
//debugger;  
  
  MakeDancer.prototype.step.call(this, this.timeBetweenSteps);
  
    //this.$node.fadeIn(1000);
    //this.$node.fadeOut(1000);
    this.$node.animate({'marginLeft': '-=50px', 'marginTop': '-=50px'}, 1000);
    this.$node.animate({'marginLeft': '+=50px', 'marginTop': '+=50px'}, 1000);
    
    this.$node.animate({'marginLeft': '+=50px', 'marginTop': '-=50px'}, 1000);
    this.$node.animate({'marginLeft': '-=50px', 'marginTop': '+=50px'}, 1000);
};