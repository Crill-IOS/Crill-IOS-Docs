document.addEventListener('DOMContentLoaded', function () {
  var palette = document.querySelector('div.md-header__source');
  if (!palette || !palette.parentElement) return;

  // VS Code Marketplace
  var marketplace = document.createElement('a');
  marketplace.className = 'md-header__button md-icon';
  marketplace.href = 'https://marketplace.visualstudio.com/items?itemName=Crill.crill-ios-scripting';
  marketplace.title = 'VS Code Marketplace';
  marketplace.innerHTML = '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 21 21" width="24" height="24" aria-hidden="true"><path fill="currentColor" d="M12 18H6v-4h6m9 0v-2l-1-5H4l-1 5v2h1v6h10v-6h4v6h2v-6m0-10H4v2h16z"/></svg>';

  // Homepage
  var home = document.createElement('a');
  home.className = 'md-header__button md-icon';
  home.href = 'https://crillios.com';
  home.title = 'Homepage';
  home.innerHTML = '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 576 512" width="24" height="24" aria-hidden="true"><!--! Font Awesome Free 7.1.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license/free (Icons: CC BY 4.0, Fonts: SIL OFL 1.1, Code: MIT License) Copyright 2025 Fonticons, Inc. --><path fill="currentColor" d="M575.8 255.5c0 18-15 32.1-32 32.1l-32 0 .7 160.2c0 2.7-.2 5.4-.5 8.1l0 16.2c0 22.1-17.9 40-40 40l-16 0c-1.1 0-2.2 0-3.3-.1c-1.4 .1-2.8 .1-4.2 .1L416 512l-24 0c-22.1 0-40-17.9-40-40l0-24 0-64c0-17.7-14.3-32-32-32l-64 0c-17.7 0-32 14.3-32 32l0 64 0 24c0 22.1-17.9 40-40 40l-24 0-31.9 0c-1.5 0-3-.1-4.5-.2c-1.2 .1-2.4 .2-3.6 .2l-16 0c-22.1 0-40-17.9-40-40l0-112c0-.9 0-1.9 .1-2.8l0-69.7-32 0c-18 0-32-14-32-32.1c0-9 3-17 10-24L266.4 8c7-7 15-8 22-8s15 2 21 7L564.8 231.5c8 7 12 15 11 24z"/></svg>';

  palette.parentElement.insertBefore(home, marketplace.nextSibling);
  palette.parentElement.insertBefore(marketplace, palette.nextSibling);
});
