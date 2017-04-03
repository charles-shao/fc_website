function CriticalMultiplierAbility(obj) {
  var self = this;

  self.id = obj.id;
  self.name = obj.name;
  self.additiveBonus = obj.additiveBonus;
  self.duration = obj.duration;
  self.cooldown = obj.cooldown;
  self.animationLock = obj.animationLock;
  self.image = obj.image;

  self.imagePath = "/assets/" + self.image;
}
