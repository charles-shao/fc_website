function Viewer(attributes) {
  var self = this;

  self.name = attributes.name;
  self.encounterTime = attributes.encounterTime.toFixed(3);
  self.effects = attributes.activeEffects;
  self.effectivePotency = attributes.potency.toFixed(3);
  self.multiplier = attributes.multiplier.toFixed(3);
  self.targetMultiplier = 1.0.toFixed(3);
}
