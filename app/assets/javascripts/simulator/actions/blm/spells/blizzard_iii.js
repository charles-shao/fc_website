blm.actions.BlizzardIII = function(observers) {
  var action = observers.actionObserver.action;
  var castTime = action.castTime;
  var afMultiplier = blm.utils.baseDmgMultiplier;

  // The presence of Astral Fire should reduce the potency of the fire action
  // by the base * scalar depending on the number of stacks
  indexOfAstralFire = observers.effectObserver.indexOf(blm.traits.AstralFire);
  if (indexOfAstralFire > -1) {
    astralFire = observers.effectObserver.effects[indexOfAstralFire].obj;
    afMultiplier = afMultiplier * astralFire.attributes().iceDmgMultiplier;

    // The presence of Astral Fire should reduce the cast time of the ice spell
    // when at 3 stacks
    castTime = castTime * astralFire.attributes().iceCastTimeMultiplier;
  }

  var multiplier = jobActions.utils.calculateDamageBuffs(observers.effectObserver.effects);
  // Apply Astral Fire multipliers before handling Umbral Ice stacks
  multiplier = multiplier * afMultiplier;

  var potency = jobActions.utils.calculatePotency(action, multiplier);

  // Remove Astral Fire
  indexOfAstralFire = observers.effectObserver.indexOf(blm.traits.AstralFire);
  if (indexOfAstralFire > -1) {
    observers.effectObserver.removeAtIndex(indexOfAstralFire);
  }

  // Grant max Umbral Ice stacks
  indexOfUmbralIce = observers.effectObserver.indexOf(blm.traits.UmbralIce);
  if (indexOfUmbralIce > -1) {
    // Ensure UI is at max stacks before refreshing duration
    effect = observers.effectObserver.effects[indexOfUmbralIce];
    umbralIce = effect.obj;
    umbralIce.maxStack();
    effect.refreshDuration(umbralIce.attributes().duration);
  } else {
    umbralIce = new blm.traits.UmbralIce();
    umbralIce.maxStack();

    effect = new Effect(umbralIce);
    observers.effectObserver.add(effect);
  }

  this.viewerAttr = function() {
    return {
      name: action.name,
      potency: potency,
      multiplier: multiplier,
      activeEffects: observers.effectObserver.effects,
      encounterTime: observers.encounterObserver.timeAt()
    };
  }
}
