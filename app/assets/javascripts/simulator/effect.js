function Effect(obj) {
  this.obj = obj;
  // var category = category;
  var attributes = obj.attributes();

  this.name = attributes.name;
  this.duration = attributes.duration;
  this.imagePath = "";
  this.dmgMultiplier = 1.0;

  this.refreshDuration = function(timer) {
    this.duration = timer;
  }

  this.updateDmgMultiplier = function(value) {
    this.dmgMultiplier = value;
  }
}
