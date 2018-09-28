var Ship = function(top, left, timeBetweenSteps) {
  Starfighter.call(this, top, left, timeBetweenSteps)
  this.$node.addClass('ship')
}

Ship.prototype = Object.create(Starfighter.prototype)
Ship.prototype.constructor = Ship

Ship.prototype.step = function() {
  Starfighter.prototype.step.call(this)


  this.$node.animate({top: "+=300"}, 'slow').animate({top: "-=250"}, 'slow').animate({left:"+=100"}, 'slow')

}
