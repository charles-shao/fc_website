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

  self.addSpellToQueue = function() {
    $.each(self.spells(), function(indexInArray, spell){
       if (spell.id.toString() === self.selectedSpell()) {
         self.timeline.addToActionQueue(spell);
       }
     });
  }

  self.addDamageMultiplierToQueue = function() {
    $.each(self.damageMultiplierAbilities(), function(indexInArray, ability){
       if (ability.id.toString() === self.selectedDamageMultiplierAbility()) {
         self.timeline.addToActionQueue(ability);
       }
     });
  }

  // TODO: read from database
  var spellObjects = [
    { id: "1", name: "Fire", potency: 180, castTime: 2.5 },
    { id: "2", name: "Blizzard", potency: 180, castTime: 2.5 },
    { id: "3", name: "Fire III", potency: 240, castTime: 3.5 },
    { id: "4", name: "Blizzard III", potency: 240, castTime: 3.5 }
  ];

  var damageMultiplierAbilities = [
    { id: "10", name: "Raging Strikes", multiplier: 1.2, duration: 20, cooldown: 180, animationLock: 1 },
    { id: "11", name: "Internal Release", multiplier: (1.5 * 1.1), duration: 15, cooldown: 60, animationLock: 1 }
  ]

  for (let spellObject of spellObjects) {
    self.spells.push(new Spell(spellObject));
  }

  for (let damageMultiplierAbility of damageMultiplierAbilities) {
    self.damageMultiplierAbilities.push(new DamageMultiplierAbility(damageMultiplierAbility));
  }
}
