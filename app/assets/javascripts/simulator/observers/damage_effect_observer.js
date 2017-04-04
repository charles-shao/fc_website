// Keeps track of abilities that have elapsed
function DamageEffectObserver(action) {
  var self = this;
  self.action = action

  self.name = self.action.type.name;
  self.multiplier = self.action.type.multiplier;
  self.duration = self.action.type.duration;
  self.animationLock = self.action.type.animationLock;
  self.castedTime = self.animationLock; // outside of GCD

  self.tick = function(time) {
    self.duration = self.duration - time;
  };

  // Apply animation lock to duration
  self.duration = self.duration - self.animationLock;
}
