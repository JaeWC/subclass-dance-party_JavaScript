// Creates and returns a new dancer object that can step
var Starfighter = function(top, left, timeBetweenSteps) {
  this.$node = $('<span class="starfighter"></span>');

  this.step()
  this.setPosition(top, left)
}

Starfighter.prototype.step = function() {
  setTimeout(this.step.bind(this), this.timeBetweenSteps)
}

Starfighter.prototype.setPosition = function(top, left) {
  var styleSettings = {
    top: top,
    left: left
  };
  this.$node.css(styleSettings);
}
