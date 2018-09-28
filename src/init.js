$(document).ready(function() {
  window.ships = [];

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
    var dancerMakerFunctionName = $(this).data('starfighter-maker-function-name');

    // get the maker function for the kind of dancer we're supposed to make
    var dancerMakerFunction = window[dancerMakerFunctionName];

    // make a dancer with a random position

    var dancer = new dancerMakerFunction(
      $("body").height() * Math.random(),
      $("body").width() * Math.random(),
      Math.random() * 1000
    );
    $('body').append(dancer.$node);
  });

  $('.lineup').on('click', function() {
    $('.starfighter').offset({top: 900})

    var $newMessage = $('<div class=over></div')
    $newMessage.html('GAME OVER!')
    $newMessage.appendTo('body')
  })

  $('.bomb').on('click', function() {
    $('.missile').remove()
    $('body').append('<img class="explode" src="boo.gif" width="100%" height="100%" />')
    setTimeout(function() {
      $('.explode').remove()
    }, 1500)
    $('.starfighter').remove()
  })
});

