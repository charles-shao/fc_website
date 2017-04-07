// SimulationViewModel
//
//
function SimulationViewModel() {
  var self = this;

  // Setup charter
  var charter = new Charter();
  var chart = charter.init();

  // Populate jobs via gon
  jobs = [];
  $.each(simulation.jobs, function(index, job) {
    jobs.push(new Job(job));
  });
  self.jobs = ko.observableArray(jobs);
  self.selectedJob = ko.observable(jobs[6]);

  // Routines
  self.routine = new Routine(chart);
  self.addActionToRoutine = function() {
    self.routine.addAction(this);
  };
  self.removeSlotFromRoutine = function() {
    self.routine.removeSlot(this);
  }

  // Players
  self.playerName = ko.observable();
  self.players = ko.observableArray([])
  self.savePlayerScript = function() {
    // player = new Player(self.playerName(), self.selectedJob());
    // self.players.push(player)
    console.log("add routines to player")
  };
}
