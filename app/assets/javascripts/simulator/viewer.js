function Viewer(executor) {
  var self = this;

  self.name = executor.action.name;
  self.encounterTime = executor.encounterTime;
  self.effects = executor.effects;
  self.effectivePotency = executor.effectivePotency;
  self.multiplier = executor.multiplier.toFixed(2);
  self.targetMultiplier = 1.0.toFixed(2);

}
