$(document).ready(function() {
  window.dancers = [];

  $('.addDancerButton').on('click', function(event) {
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
//console.log(window.dancers.length, "window.dancers.length");
//console.log(Math.floor(window.dancers.length/2), "window.dancers.length/2");
//      for (var i = 0; i < window.bottomDancers.length; i ++){
//        window.dancers[i].lineUpBottom();   
//      }

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
      var middleHeight = ($("body").height())/2;
      var middleWidth1 = ($("body").width())/2 -100;
      var middleWidth2 = ($("body").width())/2 +100;
      for (var i = 0; i < window.dancers.length; i++) {
        for (var j = 0; j < window.dancers.length; j ++) {
          if (i ==j){
            console.log("indexes are equal, in the if")
            continue;
            } else {
                console.log("in the else")
                xDistance = Math.pow((window.dancers[i].left - window.dancers[j].left),2) 
                yDistance = Math.pow((window.dancers[i].top - window.dancers[j].top),2)
                distance = Math.sqrt(xDistance + yDistance);
                console.log(xDistance, "xDistance")
                console.log(yDistance, "yDistance")           
                console.log(minDistance, "minDistance")
                console.log(distance, "distance");
                if (minDistance > distance){
                  shortestPath = [];
                  minDistance = distance;
                  shortestPath.push(window.dancers[i]);
                  shortestPath.push(window.dancers[j]);
                }
              }
          }
        }
    
      console.log(shortestPath[0]);
      shortestPath[0].$node.css({'position': 'absolute', 'top': middleHeight,'right': middleWidth1,'bottom': middleHeight,'left': middleWidth1});
      shortestPath[1].$node.css({'position': 'absolute', 'top': middleHeight,'right': middleWidth2,'bottom': middleHeight,'left': middleWidth2});
    
    });



});



// $(document).ready(function() {
//   window.dancers = [];

//   $('.addDancerButton').on('click', function(event) {
//     /* This function sets up the click handlers for the create-dancer
//      * buttons on dancefloor.html. You should only need to make one small change to it.
//      * As long as the "data-dancer-maker-function-name" attribute of a
//      * class="addDancerButton" DOM node matches one of the names of the
//      * maker functions available in the global scope, clicking that node
//      * will call the function to make the dancer.
//      */

//      dancerMakerFunctionName is a string which must match
//      * one of the dancer maker functions available in global scope.
//      * A new object of the given type will be created and added
//      * to the stage.
     
//     var dancerMakerFunctionName = $(this).data('dancer-maker-function-name');

//     // get the maker function for the kind of dancer we're supposed to make
//     var dancerMakerFunction = window[dancerMakerFunctionName];

//     // make a dancer with a random position

//     var dancer = dancerMakerFunction(
//       $("body").height() * Math.random(),
//       $("body").width() * Math.random(),
//       Math.random() * 1000
//     );
//     $('body').append(dancer.$node);
//   });
// });



