function Effect(obj) {
  this.obj = obj;
  this.name = this.obj.attributes().name;
  this.duration = this.obj.attributes().duration;
  this.imagePath = this.obj.attributes().imagePath;
  this.dmgMultiplier = 1.0;

  this.refreshDuration = function(timer) {
    this.duration = timer;
  };

  this.updateDmgMultiplier = function(value) {
    this.dmgMultiplier = value;
  };

}
