//= require simulator/actions/ability.js
//= require simulator/actions/damage_multiplier_ability.js
//= require simulator/actions/spell.js

//= require simulator/observers/spell_observer.js
//= require simulator/observers/effect_observer.js

//= require simulator/action.js

//= require simulator/timeline.js
//= require simulator/simulation_view_model.js

$(document).ready(function() {
  simulationViewModel = new SimulationViewModel();
  ko.applyBindings(simulationViewModel);
});
