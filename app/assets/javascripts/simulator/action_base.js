// Copy of all the attributes from the database
function ActionBase(obj) {
  this.id = obj.id;
  this.name = obj.name;
  this.potency = obj.potency;
  this.cost = obj.cost;
  this.resource = obj.resource;
  this.castTime = parseFloat(obj.cast_time);
  this.animationLock = parseFloat(obj.animation_lock);
  this.duration = obj.duration;
  this.cooldown = obj.cooldown;
  this.category = obj.category;
  this.modifier = parseFloat(obj.modifier);
  this.gcdLocked = obj.gcd_locked;
  this.imagePath = obj.image_path;
  this.objectName = obj.object_name;
}
