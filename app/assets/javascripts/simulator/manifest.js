//= require simulator/observers/encounter_observer.js
//= require simulator/observers/gcd_observer.js
//= require simulator/observers/effect_observer.js
//= require simulator/observers/action_observer.js

//= require simulator/job.js
//= require simulator/action_base.js
//= require simulator/action.js
//= require simulator/effect.js
//= require simulator/slot.js
//= require simulator/routine.js
//= require simulator/viewer.js

//= require simulator/actions/job_actions.js

//= require simulator/simulation_view_model.js
//= require simulator/charter.js

$(document).ready(function() {
  simulationViewModel = new SimulationViewModel();
  ko.applyBindings(simulationViewModel);
});
