document.addEventListener('DOMContentLoaded', function () {
  var palette = document.querySelector('form.md-header__option[data-md-component="palette"]');
  if (!palette || !palette.parentElement) return;

  var a = document.createElement('a');
  a.className = 'md-header__button md-icon';
  a.href = 'https://crillios.com';
  a.title = 'Homepage';
  a.innerHTML = '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="24" height="24" aria-hidden="true"><path fill="currentColor" d="M10 20v-6h4v6h5v-8h3L12 3 2 12h3v8z"/></svg>';

  palette.parentElement.insertBefore(a, palette);
});
