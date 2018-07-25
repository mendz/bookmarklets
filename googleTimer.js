javascript: (function () {
  let min = prompt('Please enter the amount of minutes you would like to set the timer (default is 30 minutes)');
  min = min || '30';
  window.open(`https://www.google.co.il/search?q=google+timer+${min}+minutes`, '_blank');
})();