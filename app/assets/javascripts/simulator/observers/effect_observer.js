// EffectObserver
//
// Keeps track of abilities that have elapsed
function EffectObserver(action) {
  var self = this;
  self.action = action

  self.name = self.action.type.name;
  self.potency = null;
  self.totalPotency = null;
  self.multiplier = self.action.type.multiplier;
  self.castedTime = 0;
}
