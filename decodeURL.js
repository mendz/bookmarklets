javascript: (function() {
  let URL = decodeURI(location.href);
  const promptURL = prompt('Please enter a url to decode:');
  if (promptURL) {
    URL = decodeURI(promptURL);
  }
  navigator.clipboard
    .writeText(URL)
    .then(() => {})
    .catch(err => console.error(`Failed to copy - '${URL}' to the clipboard!\n${err}`));
})();
