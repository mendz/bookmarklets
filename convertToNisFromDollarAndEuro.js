javascript: (function() {
  const isNum = /^(\$|\£|EUR)?\s?\d+[\.]?\d*\s?(\$|\£|EUR)?$/;
  const isDollar = /(\$\s?\d+|\d+\s?\$)/;
  const isEuro = /((EUR|\£)\s?\d+|\d+\s?(EUR|\£))/;
  let dollarsSelectionText = window
    .getSelection()
    .toString()
    .replace(/\s+/g, '');
  let currency = 'dollar';
  if (!dollarsSelectionText || !isNum.test(dollarsSelectionText)) {
    dollarsSelectionText = prompt(
      'Please enter the amount of dollars that you want to convert to NIS'
    );
  } else if (isDollar.test(dollarsSelectionText)) {
    currency = 'dollar';
  } else if (isEuro.test(dollarsSelectionText)) {
    currency = 'euro';
  }
  if (dollarsSelectionText) {
    window.open(
      'https://www.google.com/search?q=' +
        dollarsSelectionText.replace(/([^0-9\.])/g, '') +
        ' ' +
        currency +
        ' to nis'
    );
  }
})();
