(function () {
  'use strict';

  // Mobile menu
  var toggle = document.querySelector('.nav-toggle');
  var nav = document.getElementById('nav');
  toggle.addEventListener('click', function () {
    var open = nav.classList.toggle('open');
    toggle.setAttribute('aria-expanded', open);
  });
  nav.addEventListener('click', function (e) {
    if (e.target.tagName === 'A') {
      nav.classList.remove('open');
      toggle.setAttribute('aria-expanded', 'false');
    }
  });

  document.getElementById('year').textContent = new Date().getFullYear();

  // Development news, loaded from data/news.json
  var box = document.getElementById('news');
  function el(tag, cls, text) {
    var n = document.createElement(tag);
    if (cls) n.className = cls;
    if (text) n.textContent = text;
    return n;
  }
  fetch('data/news.json')
    .then(function (r) { return r.json(); })
    .then(function (data) {
      box.textContent = '';
      var posts = (data.posts || []).slice().sort(function (a, b) {
        return b.date.localeCompare(a.date);
      });
      if (!posts.length) { box.appendChild(el('p', 'note', 'No updates yet.')); return; }
      posts.forEach(function (p) {
        var a = el('article', 'post');
        var t = el('time', '', new Date(p.date + 'T00:00:00').toLocaleDateString('en-GB', { day: 'numeric', month: 'short', year: 'numeric' }));
        t.setAttribute('datetime', p.date);
        var d = el('div');
        if (p.tag) d.appendChild(el('span', 'tag', p.tag));
        d.appendChild(el('h3', '', p.title));
        d.appendChild(el('p', '', p.body));
        a.appendChild(t); a.appendChild(d);
        box.appendChild(a);
      });
    })
    .catch(function () {
      box.textContent = '';
      box.appendChild(el('p', 'note', 'Updates could not be loaded right now.'));
    });
})();
