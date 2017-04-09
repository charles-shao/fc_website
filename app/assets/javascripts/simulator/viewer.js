function Viewer(attributes) {
  var self = this;

  self.name = attributes.name;
  self.encounterTime = 0;
  self.effects = attributes.activeEffects;
  self.effectivePotency = attributes.potency;
  self.multiplier = attributes.multiplier;
  self.targetMultiplier = 1.0.toFixed(2);
}
