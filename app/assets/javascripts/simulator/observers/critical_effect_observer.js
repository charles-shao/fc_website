// Keeps track of abilities that have elapsed
function CriticalEffectObserver(action) {
  var self = this;
  self.action = action

  self.name = self.action.type.name;
  self.percentageGain = self.action.type.percentageGain;
  self.varianceGain = self.action.type.varianceGain;
  self.duration = self.action.type.duration;
  self.animationLock = self.action.type.animationLock;
  self.castedTime = self.animationLock; // outside of GCD

  self.tick = function(time) {
    self.duration = self.duration - time;
  };

  // Apply animation lock to duration
  self.duration = self.duration - self.animationLock;
}
