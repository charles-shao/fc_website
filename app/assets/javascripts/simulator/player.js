function Player(name, job, routine) {
  var self = this;

  self.name = ko.observable(name);
  self.selectedJob = job;
  self.routine = routine;
}
