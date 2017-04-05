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

  // Players
  self.playerName = ko.observable();
  self.players = ko.observableArray([])
  self.savePlayerScript = function() {
    player = new Player(self.playerName(), self.selectedJob());
    self.players.push(player)
  };

  self.timeline = new Timeline();

  // self.addActionToQueue = function(type) {
  //   id = self.timeline.sequenceActionId();
  //   action = new Action(id, type);
  //   self.timeline.addToActionQueue(action);
  // }
  //
  // self.removeActionFromQueue = function(action) {
  //   self.timeline.removeFromActionQueue(action);
  // };

  // TODO: read from database

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

  // action
  // ['id', 'name', 'potency', 'cost', 'resource', 'cast_time', 'animation_lock', 'duration', 'cooldown', 'category', 'modifier', 'image_path']
}
