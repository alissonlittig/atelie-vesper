(function () {
  'use strict';
  var b = document.querySelector('.burger'), nav = document.getElementById('menu');
  if (b && nav) {
    b.addEventListener('click', function () {
      var o = b.getAttribute('aria-expanded') === 'true';
      b.setAttribute('aria-expanded', String(!o));
      nav.classList.toggle('open', !o);
    });
    nav.addEventListener('click', function (e) {
      if (e.target.tagName === 'A') { b.setAttribute('aria-expanded', 'false'); nav.classList.remove('open'); }
    });
    document.addEventListener('keydown', function (e) {
      if (e.key === 'Escape' && nav.classList.contains('open')) { b.setAttribute('aria-expanded', 'false'); nav.classList.remove('open'); b.focus(); }
    });
  }

  var items = document.querySelectorAll('.sec h2,.idx li,.pact li,.paper,.rev li,.score,.hrs,.map,.sec-faq details,.final-t');
  items.forEach(function (el) { el.classList.add('rv'); });
  if ('IntersectionObserver' in window) {
    var io = new IntersectionObserver(function (es) {
      es.forEach(function (e) { if (e.isIntersecting) { e.target.classList.add('in'); io.unobserve(e.target); } });
    }, { rootMargin: '0px 0px -10% 0px', threshold: 0.05 });
    items.forEach(function (el) { io.observe(el); });
  } else { items.forEach(function (el) { el.classList.add('in'); }); }
  var rm = document.querySelector('.rm'), de = document.documentElement;
  function setRm(on) { de.toggleAttribute('data-rm', on); if (rm) { rm.setAttribute('aria-pressed', String(on)); rm.textContent = on ? 'Movimento reduzido (ligado)' : 'Reduzir movimento'; } try { localStorage.setItem('rm', on ? '1' : '0'); } catch (e) {} }
  try { if (localStorage.getItem('rm') === '1') setRm(true); } catch (e) {}
  if (rm) rm.addEventListener('click', function () { setRm(rm.getAttribute('aria-pressed') !== 'true'); });
})();
