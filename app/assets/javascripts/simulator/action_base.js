// Copy of all the attributes from the database
function ActionBase(obj) {
  var self = this;

  self.id = obj.id;
  self.name = obj.name;
  self.potency = obj.potency;
  self.cost = obj.cost;
  self.resource = obj.resource;
  self.castTime = parseFloat(obj.cast_time);
  self.animationLock = parseFloat(obj.animation_lock);
  self.duration = obj.duration;
  self.cooldown = obj.cooldown;
  self.category = obj.category;
  self.modifier = parseFloat(obj.modifier);
  self.gcdLocked = obj.gcd_locked;
  self.imagePath = obj.image_path;
}