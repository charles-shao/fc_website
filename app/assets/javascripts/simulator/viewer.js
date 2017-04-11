function Viewer(attributes) {
  var self = this;

  self.name = attributes.name;
  self.encounterTime = attributes.encounterTime.toFixed(2);
  self.effects = attributes.activeEffects;
  self.effectivePotency = attributes.potency.toFixed(2);
  self.potencyPerSecond = attributes.potencyPerSecond.toFixed(2);
  self.multiplier = attributes.multiplier.toFixed(2);
  self.targetMultiplier = (1.0).toFixed(2);
  self.criticalChance = (12.0).toFixed(2);
}
