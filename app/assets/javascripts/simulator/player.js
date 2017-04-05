function Player(name, job) {
  var self = this;

  self.name = ko.observable(name);
  self.selectedJob = job;
}
