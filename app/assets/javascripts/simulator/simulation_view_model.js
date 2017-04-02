// SimulationViewModel
//
//
function SimulationViewModel() {
  var self = this;
  // Spells
  self.spells = ko.observableArray([]);
  self.selectedSpell = ko.observable();
  // Buffs
  self.damageMultiplierAbilities = ko.observableArray([]);
  self.selectedDamageMultiplierAbility = ko.observable();

  self.timeline = new Timeline();

  self.addSpellToQueue = function(spell) {
    self.timeline.addToActionQueue(spell);
  }

  self.addDamageMultiplierToQueue = function(ability) {
   self.timeline.addToActionQueue(ability);
  }

  self.removeActionFromQueue = function(action) {
    console.log(action)

    self.timeline.removeFromActionQueue(action);
  }

  // TODO: read from database
  var spellObjects = [
    { id: "1", name: "Fire", potency: 180, castTime: 2.5, image: "fire.png" },
    { id: "3", name: "Fire III", potency: 240, castTime: 3.5, image: "fire_iii.png" },
    { id: "2", name: "Blizzard", potency: 180, castTime: 2.5, image: "blizzard.png" },
    { id: "4", name: "Blizzard III", potency: 240, castTime: 3.5, image: "blizzard_iii.png" }
  ];

  var damageMultiplierAbilities = [
    // { id: "100", name: "Astral Fire I", multiplier: 1.2, duration: 12, cooldown: 0, animationLock: 0 },
    // { id: "101", name: "Astral Fire II", multiplier: 1.4, duration: 12, cooldown: 0, animationLock: 0 },
    // { id: "102", name: "Astral Fire III", multiplier: 1.8, duration: 12, cooldown: 0, animationLock: 0 },
    { id: "10", name: "Raging Strikes", multiplier: 1.2, duration: 20, cooldown: 180, animationLock: 1, image: "raging_strikes.png" },
    { id: "11", name: "Internal Release", multiplier: (1.5 * 1.1), duration: 15, cooldown: 60, animationLock: 1, image: "internal_release.png" }
  ]

  for (let spellObject of spellObjects) {
    self.spells.push(new Spell(spellObject));
  }

  for (let damageMultiplierAbility of damageMultiplierAbilities) {
    self.damageMultiplierAbilities.push(new DamageMultiplierAbility(damageMultiplierAbility));
  }
}
