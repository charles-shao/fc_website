function EncounterObserver(startTime) {
  var time = startTime || 0;

  this.extend = function(seconds) {
    time += seconds;
  }

  this.timeAt = function() {
    return time;
  }

}
