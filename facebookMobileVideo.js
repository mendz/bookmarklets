javascript: (function () {
   const facebookVideoUrl = document.location.href;
   const fixedUrl = facebookVideoUrl.replace('www', 'mbasic');
   window.open(fixedUrl, '_self');
})();