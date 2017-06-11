//= require stormblood/classes/action.js
//= require stormblood/classes/job.js

//= require stormblood/simulation_view_model.js

$(document).ready(function() {
  simulationViewModel = new SimulationViewModel();
  ko.applyBindings(simulationViewModel);
});
