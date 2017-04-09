function Effect(obj) {
  this.obj = obj;

  var attributes = obj.attributes();
  this.name = attributes.name;
  this.duration = attributes.duration;
  this.imagePath = "";

  this.refreshDuration = function(timer) {
    this.duration = timer;
  }
}
