javascript: (function() {
  const googleTimerContainer = document.querySelectorAll('.act-tim-txt-cnt')[1];
  const mutationObserver = new MutationObserver(mutations => {
    const title = Array.from(googleTimerContainer.querySelectorAll('span'))
      .map(span => span.textContent)
      .join('')
      .replace(/([a-z])/g, '$1 ');
    document.title = title;
  });
  mutationObserver.observe(googleTimerContainer, { childList: true, attributes: true });
})();
