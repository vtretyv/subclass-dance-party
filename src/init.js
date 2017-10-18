$(document).ready(function() {
  window.dancers = [];

  $('.addDancerButton').on('click', function(event) {
    console.log("added a dancer");
    /* This function sets up the click handlers for the create-dancer
     * buttons on dancefloor.html. You should only need to make one small change to it.
     * As long as the "data-dancer-maker-function-name" attribute of a
     * class="addDancerButton" DOM node matches one of the names of the
     * maker functions available in the global scope, clicking that node
     * will call the function to make the dancer.
     */

    /* dancerMakerFunctionName is a string which must match
     * one of the dancer maker functions available in global scope.
     * A new object of the given type will be created and added
     * to the stage.
     */
    var dancerMakerFunctionName = $(this).data('dancer-maker-function-name');

    // get the maker function for the kind of dancer we're supposed to make
    var dancerMakerFunction = window[dancerMakerFunctionName];

    // make a dancer with a random position

    var dancer = new dancerMakerFunction(
      $("body").height() * Math.random(),
      $("body").width() * Math.random(),
      Math.random() * 1000
    );
    $('body').append(dancer.$node);
    //console.log(dancer.$node);
    // Added  
    window.dancers.push(dancer);

  });

  $('.lineUpButton').on('click', function(event) {
      //var dancers = window.dancers;
      //var topDancers = dancers.slice(0,dancers.length-1/2);
      //var bottomDancers = dancers.slice(dancers.length-1/2);

      for (var i = 0; i < window.dancers.length; i ++){
        window.dancers[i].lineUp();   
      }

    });

  $('.lineUpButtonSplit').on('click', function(event) {
      //var dancers = window.dancers;
      //var topDancers = dancers.slice(0,dancers.length-1/2);
      //var bottomDancers = dancers.slice(dancers.length-1/2);

      for (var i = 0; i < Math.floor(window.dancers.length/2); i ++){
        window.dancers[i].lineUp();   
      }
      for (var i = Math.floor(window.dancers.length/2); i < window.dancers.length; i ++){
        window.dancers[i].lineUpBottom();   
      }
    });

  $('.danceFight').on('click', function(event) {
      var minDistance = Infinity;
      var xDistance;
      var yDistance;
      var distance;
      var shortestPath = [];
      
      for (var i = 0; i < window.dancers.length; i++) {
        for (var j = 0; j < window.dancers.length; j ++) {
          if (i ==j){
    
            continue;
            } else {
                console.log("in the else")
                xDistance = Math.pow((window.dancers[i].left - window.dancers[j].left),2) 
                yDistance = Math.pow((window.dancers[i].top - window.dancers[j].top),2)
                distance = Math.sqrt(xDistance + yDistance);
    
                if (minDistance > distance){
                  shortestPath = [];
                  minDistance = distance;
                  shortestPath.push(window.dancers[i]);
                  shortestPath.push(window.dancers[j]);
                }
              }
          }
        }
    
      shortestPath[0].$node.css({'position': 'absolute', 'top': '50vh','right': '50vw','bottom': '50vh','left': '45vw'});
      // JL - should have added Class left battle dancer + right battle dancer
      shortestPath[1].$node.css({'position': 'absolute', 'top': '50vh','right': '50vw','bottom': '50vh','left': '55vw'});
    
    });



// Every dancer has 'dancer' class from makeDancer (dancer.js)
// jQuery grab any span element with 'dancer'
// on hover, make the element do something.

  // $('span.dancer').on('mouseover', function(event) {
  //    console.log(this);
 
  // });


  $('body').on('mouseover', '.dancer', function(event){
    $(this).addClass('dancerMouseOver');
  });

  $('body').on('mouseout', '.dancer', function(event){
    $(this).removeClass('dancerMouseOver');
  });  


});


