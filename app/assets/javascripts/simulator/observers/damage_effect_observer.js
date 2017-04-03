// EffectObserver
//
// Keeps track of abilities that have elapsed
function DamageEffectObserver(action) {
  var self = this;
  self.action = action

  self.name = self.action.type.name;
  self.multiplier = self.action.type.multiplier;
  self.castedTime = 0;
}
