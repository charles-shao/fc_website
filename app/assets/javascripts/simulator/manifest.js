//= require simulator/ability.js
//= require simulator/damage_multiplier_ability.js
//= require simulator/spell.js

//= require simulator/timeline_spell_observer.js
//= require simulator/timeline_effect_observer.js
//= require simulator/timeline.js
//= require simulator/simulation_view_model.js

$(document).ready(function() {
  simulationViewModel = new SimulationViewModel();
  ko.applyBindings(simulationViewModel);
});
