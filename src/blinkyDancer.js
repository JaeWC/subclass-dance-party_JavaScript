var Bug = function(top, left, timeBetweenSteps) {
  Starfighter.call(this, top, left, timeBetweenSteps)
  this.$node.addClass('bug')

  var path = ('img/')
  var imgs = ['bugs1.png', 'bugs2.png', 'bugs3.png', 'bugs4.png']
  i = Math.floor(Math.random() * imgs.length)
  k = Math.floor(Math.random() * 4) + 3

  for (var j = 0; j < k; j++) {
    this.$node.append("<img src='" + path + imgs[i]+"'width='50px' height='50px'>")
  }
}

Bug.prototype = Object.create(Starfighter.prototype)
Bug.prototype.constructor = Bug

Bug.prototype.step = function() {
  Starfighter.prototype.step.call(this)

  this.$node.animate({
    left: "+=50"
  }, 'slow')
}