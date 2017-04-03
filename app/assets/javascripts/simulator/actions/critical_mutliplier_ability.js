function CriticalMultiplierAbility(obj) {
  var self = this;

  self.id = obj.id;
  self.name = obj.name;
  self.percentageGain = obj.percentageGain;
  self.varianceGain = obj.varianceGain;
  self.duration = obj.duration;
  self.cooldown = obj.cooldown;
  self.animationLock = obj.animationLock;
  self.image = obj.image;

  self.imagePath = "/assets/" + self.image;
}
