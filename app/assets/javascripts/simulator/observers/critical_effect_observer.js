// EffectObserver
//
// Keeps track of abilities that have elapsed
function CriticalEffectObserver(action) {
  var self = this;
  self.action = action

  self.name = self.action.type.name;
  self.percentageGain = self.action.type.percentageGain;
  self.varianceGain = self.action.type.varianceGain;
  self.castedTime = 0;
}
