// SimulationViewModel
//
//
function SimulationViewModel() {
  var self = this;

  jobs = [];
  $.each(simulation.jobs, function(index, job) {
    jobs.push(new Job(job));
  });

  self.jobs = ko.observableArray(jobs);
  self.selectedJob = ko.observable();
}
