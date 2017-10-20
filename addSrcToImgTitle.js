javascript: (function() {
  const imagesInPages = document.querySelectorAll('img');
  Object.keys(imagesInPages).forEach(key => {
    const title = imagesInPages[key].getAttribute('title') || '';
    const src = imagesInPages[key].getAttribute('src');
    imagesInPages[key].setAttribute('title', title + ' ' + src);
  });
})();
