javascript: (function () {
  document.querySelectorAll('img').forEach(img => {
    const naturalWidth = img.naturalWidth;
    const naturalHeight = img.naturalHeight;
    const width = img.width;
    const height = img.height;
    const src = img.src;
    const newLine = '\n~~\n';
    img.title = `${src} ${newLine} width: ${width}, height: ${height} ${newLine} naturalWidth: ${naturalWidth}, naturalHeight: ${naturalHeight}`;
  });
})();