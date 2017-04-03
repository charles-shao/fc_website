// Keeps track of abilities that have elapsed
function CriticalEffectObserver(action) {
  var self = this;
  self.action = action

  self.name = self.action.type.name;
  self.percentageGain = self.action.type.percentageGain;
  self.varianceGain = self.action.type.varianceGain;
  self.duration = self.action.type.duration;
  self.castedTime = 0;

  self.tick = function(time) {
    self.duration = self.duration - time;
  };
}
