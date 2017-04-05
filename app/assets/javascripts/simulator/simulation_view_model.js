// SimulationViewModel
//
//
function SimulationViewModel() {
  var self = this;

  // Populate jobs via gon
  jobs = [];
  $.each(simulation.jobs, function(index, job) {
    jobs.push(new Job(job));
  });
  self.jobs = ko.observableArray(jobs);
  self.selectedJob = ko.observable();



  self.spells = ko.observableArray([]);
  self.damageMultiplierAbilities = ko.observableArray([]);
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
    { id: "100", name: "Astral Fire", multiplier: 1.4, duration: 12 },
    { id: "101", name: "Astral Fire II", multiplier: 1.6, duration: 12 },
    { id: "102", name: "Astral Fire III", multiplier: 1.8, duration: 12 }
  ];

  var spellObjects = [
    {
      id: "1",
      name: "Fire",
      potency: 180,
      castTime: 2.5,
      cooldown: 2.5,
      image: '<%= image_path "actions/fire.png" %>',
      additionalEffects: [
        {
          id: "100",
          name: "Astral Fire",
          stacks: 3,
          multipliers: [1.4, 1.6, 1.8],
          mpCostMultiplier: [2, 2, 2],
          iceSpellMpReduction: [0.5, 0.25, 0.25],
          iceSpellDmgReduction: [0.9, 0.8, 0.7],
          iceSpellCastReduction: [1, 1, 0.5],
          duration: 12
        },
        {
          id: "101",
          name: "Firestarter",
          freeSpell: "Fire III",
          chance: 0.4
        }
      ]
    },
    { id: "3", name: "Fire III", potency: 240, castTime: 3.5, cooldown: 2.5, image: '<%= image_path "actions/fire_iii.png" %>' },
    { id: "2", name: "Blizzard", potency: 180, castTime: 2.5, cooldown: 2.5, image: '<%= image_path "actions/blizzard.png" %>' },
    { id: "4", name: "Blizzard III", potency: 240, castTime: 3.5, cooldown: 2.5, image: '<%= image_path "actions/blizzard_iii.png" %>' }
  ];

  var damageMultiplierAbilities = [
    { id: "10", name: "Raging Strikes", multiplier: 1.2, duration: 20, cooldown: 180, animationLock: 0.75, image: '<%= image_path "actions/raging_strikes.png" %>' }
  ];

  var criticalMultiplierAbilities = [
    { id: "11", name: "Internal Release", percentageGain: 10, varianceGain: 0, duration: 15, cooldown: 60, animationLock: 0.75, image: '<%= image_path "actions/internal_release.png" %>' }
    // { id: "12", name: "Battle Litany", percentageGain: 0.15, duration: 20, cooldown: 180, animationLock: 1, image: "battle_litany.png" }
  ];

  // action
  // ['id', 'name', 'potency', 'cost', 'resource', 'cast_time', 'animation_lock', 'duration', 'cooldown', 'category', 'modifier', 'image_path']
}
