// ==== Table columns
// Seq.
// Time
// Skill/ Spell
// Active Effects
// Base Potency
// Self-multipliers
// Target multipliers
// Critical Chance
// Critical Variance
// Total potency
function ActionObserver(timeline, action, effectsActive, sequence) {
  var self = this;

  self.timeline = timeline;
  self.action = action;
  self.effectsActive = effectsActive;

  self.sequence = sequence;
  self.name = action.type.name;

  if (self.action.type instanceof Spell) {
    var spellObserver = new SpellObserver(self.action, self.effectsActive);
    self.timeSinceEncounter = elapsedTimeSinceEncounter(spellObserver);
    self.potency = spellObserver.potency;
    self.multiplierText = spellObserver.damageMultiplier.toFixed(2);
    self.criticalChance = spellObserver.criticalChance;
    self.criticalVariance = spellObserver.criticalVariance;

    criticalDmg = spellObserver.totalPotency() * spellObserver.criticalVariance;
    self.totalPotency = spellObserver.totalPotency().toFixed(2) + " ≈ (" + criticalDmg.toFixed(2) + ")";
  } else if (self.action.type instanceof DamageMultiplierAbility) {
    var damageEffectObserver = new DamageEffectObserver(self.action);
    self.timeSinceEncounter = elapsedTimeSinceEncounter(damageEffectObserver);
    self.potency = null;
    self.multiplierText = null;
    self.criticalChance = null;
    self.criticalVariance = null;
    self.totalPotency = null;
  } else if (self.action.type instanceof CriticalMultiplierAbility) {
    var criticalEffectObserver = new CriticalEffectObserver(self.action);
    self.timeSinceEncounter = elapsedTimeSinceEncounter(criticalEffectObserver);
    self.potency = null;
    self.multiplierText = null;
    self.criticalChance = null;
    self.criticalVariance = null;
    self.totalPotency = null;
  }

  function elapsedTimeSinceEncounter(observer) {
    self.timeline.elapseTime(observer.castedTime);
    return self.timeline.timeElapsed;
  }

}
