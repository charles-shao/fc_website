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
  self.displayDuration = self.duration;

  self.tick = function(time) {
    self.duration = self.duration - time;
    self.displayDuration = self.renderDuration();
  };

  self.renderDuration = function() {
    if (self.duration <= 0) {
      return self.duration + " (time steal)";
    } else {
      return self.duration;
    }
  }
  // Apply animation lock to duration
}
