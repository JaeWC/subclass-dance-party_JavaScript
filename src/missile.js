var Missile = function(top, left, timeBetweenSteps) {
  Starfighter.call(this, top, left, timeBetweenSteps)
  this.$node.addClass('missile')
}

Missile.prototype = Object.create(Starfighter.prototype)
Missile.prototype.constructor = Missile

Missile.prototype.step = function() {
  Starfighter.prototype.step.call(this)

	this.$node.fadeToggle();

}