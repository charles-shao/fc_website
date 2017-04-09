function Viewer(action, actionBehaviour) {
  var self = this;

  self.name = action.name;
  self.encounterTime = 0;
  self.effects = [];
  self.effectivePotency = actionBehaviour.potency();
  self.multiplier = 0;
  self.targetMultiplier = 1.0.toFixed(2);
}
