// DamageMultiplierAbility
//
//
function DamageMultiplierAbility(obj) {
  var self = this;

  self.id = obj.id;
  self.name = obj.name;
  self.multiplier = obj.multiplier;
  self.animationLock = obj.animationLock;
  self.image = obj.image;

  self.optionText = ko.computed(function() {
    return `${self.name}: ${self.multiplier.toFixed(2)} multiplier`;
  });

  self.imagePath = `/assets/${self.image}`;
}
