//= require simulator/actions/critical_mutliplier_ability.js
//= require simulator/actions/damage_multiplier_ability.js
//= require simulator/actions/spell.js

//= require simulator/observers/spell_observer.js
//= require simulator/observers/critical_effect_observer.js
//= require simulator/observers/damage_effect_observer.js
//= require simulator/observers/action_observer.js

//= require simulator/job.js
//= require simulator/action.js

//= require simulator/timeline.js
//= require simulator/simulation_view_model.js
//= require simulator/charter.js

$(document).ready(function() {
  simulationViewModel = new SimulationViewModel();
  ko.applyBindings(simulationViewModel);
});
