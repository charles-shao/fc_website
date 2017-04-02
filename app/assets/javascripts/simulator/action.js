// Action
//
//
function Action(identifier, type) {
  var self = this;

  self.id = identifier;
  self.type = type;
  self.category = determineCategory();

  function determineCategory() {
    if (self.type instanceof Spell) {
      return "Spell";
    } else if (self.type instanceof DamageMultiplierAbility) {
      return "DamageMultiplierAbility"
    } else {
      return null;
    }
  }

}
