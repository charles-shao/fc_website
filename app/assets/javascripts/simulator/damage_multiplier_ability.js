// DamageMultiplierAbility
//
//
function DamageMultiplierAbility(obj) {
  var self = this;

  self.id = obj.id;
  self.name = obj.name;
  self.multiplier = obj.multiplier;
  self.animationLock = obj.animationLock;
  self.image = obj.image;

  self.imagePath = "/assets/" + self.image;
}
