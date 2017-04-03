// SimulationViewModel
//
//
function SimulationViewModel() {
  var self = this;
  // Spells
  self.spells = ko.observableArray([]);
  // dmg+%
  self.damageMultiplierAbilities = ko.observableArray([]);
  // crit+%
  self.criticalMultiplierAbilities = ko.observableArray([]);

  self.timeline = new Timeline();

  self.addActionToQueue = function(type) {
    id = self.timeline.sequenceActionId();
    action = new Action(id, type);
    self.timeline.addToActionQueue(action);
  }

  self.removeActionFromQueue = function(action) {
    self.timeline.removeFromActionQueue(action);
  };

  // TODO: read from database
  spellEffects = [
    { id: "100", name: "Astral Fire", multiplier: 1.2, duration: 12 },
    { id: "101", name: "Astral Fire II", multiplier: 1.4, duration: 12 },
    { id: "102", name: "Astral Fire III", multiplier: 1.8, duration: 12 }
  ];

  var spellObjects = [
    { id: "1", name: "Fire", potency: 180, castTime: 2.5, image: "fire.png" },
    { id: "3", name: "Fire III", potency: 240, castTime: 3.5, image: "fire_iii.png" },
    { id: "2", name: "Blizzard", potency: 180, castTime: 2.5, image: "blizzard.png" },
    { id: "4", name: "Blizzard III", potency: 240, castTime: 3.5, image: "blizzard_iii.png" }
  ];

  var damageMultiplierAbilities = [
    { id: "10", name: "Raging Strikes", multiplier: 1.2, duration: 20, cooldown: 180, animationLock: 1, image: "raging_strikes.png" }
  ];

  var criticalMultiplierAbilities = [
    { id: "11", name: "Internal Release", additiveBonus: 0.1, duration: 15, cooldown: 60, animationLock: 1, image: "internal_release.png" }
  ];

  $.each(spellObjects, function(indexInArray, obj) {
    self.spells.push(new Spell(obj));
  });

  $.each(damageMultiplierAbilities, function(indexInArray, obj) {
    self.damageMultiplierAbilities.push(new DamageMultiplierAbility(obj));
  });

  $.each(criticalMultiplierAbilities, function(indexInArray, obj) {
    self.criticalMultiplierAbilities.push(new DamageMultiplierAbility(obj));
  });
}
