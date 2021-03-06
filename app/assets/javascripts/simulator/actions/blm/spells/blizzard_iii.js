blm.actions.BlizzardIII = function(observers) {
  var action = observers.actionObserver.action;
  var castTime = action.castTime;
  var effects = observers.effectObserver.activeEffects();
  var multiplier = jobActions.utils.calculateDamageBuffs(effects);

  indexOfAstralFire = observers.effectObserver.indexOf(blm.traits.AstralFire);
  indexOfUmbralIce = observers.effectObserver.indexOf(blm.traits.UmbralIce);

  // The presence of Astral Fire should reduce the potency of the fire action
  // by the base * scalar depending on the number of stacks
  if (indexOfAstralFire > -1) {
    astralFire = effects[indexOfAstralFire].obj;
    multiplier = multiplier * astralFire.attributes().iceDmgMultiplier;

    // The presence of Astral Fire should reduce the cast time of the ice spell
    // when at 3 stacks
    castTime = castTime * astralFire.attributes().iceCastTimeMultiplier;
  }

  // Apply Astral Fire multipliers before handling Umbral Ice stacks
  var potency = jobActions.utils.calculatePotency(action, multiplier);

  // Remove Astral Fire
  if (indexOfAstralFire > -1) {
    observers.effectObserver.removeAtIndex(indexOfAstralFire);
  }

  // Grant max Umbral Ice stacks
  if (indexOfUmbralIce > -1) {
    // Ensure UI is at max stacks before refreshing duration
    effect = effects[indexOfUmbralIce];
    umbralIce = effect.obj;
    umbralIce.maxStack();

    // Reduce all effect timers
    observers.effectObserver.tick(castTime);

    // Refresh UI after ticks
    effect.refreshDuration(umbralIce.attributes().duration);

    // Update observer
    observers.effectObserver.replaceAtIndex(indexOfUmbralIce, new Effect(umbralIce));
  } else {
    // Reduce all effect timers
    observers.effectObserver.tick(castTime);

    umbralIce = new blm.traits.UmbralIce();
    umbralIce.maxStack();

    effect = new Effect(umbralIce);
    observers.effectObserver.add(effect);
  }

  // Apply cast time
  observers.encounterObserver.extend(castTime);

  this.viewer = new Viewer({
    name: action.name,
    potency: potency,
    castTime: castTime,
    potencyPerSecond: (potency / castTime),
    multiplier: multiplier,
    activeEffects: effects,
    encounterTime: observers.encounterObserver.timeAt()
  });
}
