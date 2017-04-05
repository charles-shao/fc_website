//= require simulator/observers/gcd_observer.js
//= require simulator/observers/action_observer.js

//= require simulator/job.js
//= require simulator/action.js
//= require simulator/slot.js
//= require simulator/routine.js

//= require simulator/timeline.js
//= require simulator/simulation_view_model.js
//= require simulator/charter.js

$(document).ready(function() {
  simulationViewModel = new SimulationViewModel();
  ko.applyBindings(simulationViewModel);
});
