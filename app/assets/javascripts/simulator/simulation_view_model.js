// SimulationViewModel
//
//
function SimulationViewModel() {
  var self = this;
  // Spells
  self.spells = ko.observableArray([]);
  // Buffs
  self.damageMultiplierAbilities = ko.observableArray([]);

  self.timeline = new Timeline();

  self.addSpellToQueue = function(spell) {
    id = self.timeline.sequenceActionId();
    action = new Action(id, spell);
    self.timeline.addToActionQueue(action);
  };

  self.addDamageMultiplierToQueue = function(ability) {
    id = self.timeline.sequenceActionId();
    action = new Action(id, ability);
    self.timeline.addToActionQueue(action);
  };

  self.removeActionFromQueue = function(action) {
    self.timeline.removeFromActionQueue(action);
  };

  // TODO: read from database
  var spellObjects = [
    { id: "1", name: "Fire", potency: 180, castTime: 2.5, image: "fire.png" },
    { id: "3", name: "Fire III", potency: 240, castTime: 3.5, image: "fire_iii.png" },
    { id: "2", name: "Blizzard", potency: 180, castTime: 2.5, image: "blizzard.png" },
    { id: "4", name: "Blizzard III", potency: 240, castTime: 3.5, image: "blizzard_iii.png" }
  ];

  var damageMultiplierAbilities = [
    { id: "10", name: "Raging Strikes", multiplier: 1.2, duration: 20, cooldown: 180, animationLock: 1, image: "raging_strikes.png" },
    { id: "11", name: "Internal Release", multiplier: (1.5 * 1.1), duration: 15, cooldown: 60, animationLock: 1, image: "internal_release.png" }
  ];

  $.each(spellObjects, function(indexInArray, obj) {
    self.spells.push(new Spell(obj));
  });

  $.each(damageMultiplierAbilities, function(indexInArray, obj) {
    self.damageMultiplierAbilities.push(new DamageMultiplierAbility(obj));
  });

}
