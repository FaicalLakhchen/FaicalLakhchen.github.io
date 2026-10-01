// Shared behaviour for every page of the site.
(function () {
    // Mobile navigation toggle
    var toggle = document.querySelector('.nav-toggle');
    var nav = document.querySelector('.site-nav');
    if (toggle && nav) {
        toggle.addEventListener('click', function () {
            var open = nav.classList.toggle('open');
            toggle.setAttribute('aria-expanded', open ? 'true' : 'false');
        });
        nav.addEventListener('click', function (e) {
            if (e.target.tagName === 'A') nav.classList.remove('open');
        });
    }

    // Back-to-top button
    var toTop = document.getElementById('toTop');
    if (toTop) {
        window.addEventListener('scroll', function () {
            toTop.classList.toggle('show', window.scrollY > 400);
        }, { passive: true });
        toTop.addEventListener('click', function () {
            window.scrollTo({ top: 0, behavior: 'smooth' });
        });
    }

    // Links not yet available: any link whose href is "#TODO" (or empty)
    // is greyed out and labelled "coming soon". Replace the href with the
    // real download link and the button becomes active automatically.
    var lang = document.documentElement.lang || 'en';
    var soon = lang.indexOf('fr') === 0 ? 'Bientôt disponible' : 'Coming soon';
    document.querySelectorAll('a.res, a.btn').forEach(function (a) {
        var href = a.getAttribute('href');
        if (href === null || href === '' || href === '#TODO') {
            a.classList.add('is-pending');
            a.setAttribute('aria-disabled', 'true');
            a.setAttribute('title', soon);
            a.addEventListener('click', function (e) { e.preventDefault(); });
        }
    });

    // External links open in a new tab
    document.querySelectorAll('a[href^="http"]').forEach(function (a) {
        a.setAttribute('target', '_blank');
        a.setAttribute('rel', 'noopener');
    });

    // Chapter filter on course pages
    var search = document.querySelector('[data-filter]');
    if (search) {
        var table = document.getElementById(search.getAttribute('data-filter'));
        var empty = document.querySelector('.no-results');
        var norm = function (s) {
            return s.toLowerCase().normalize('NFD').replace(/[̀-ͯ]/g, '');
        };
        search.addEventListener('input', function () {
            var q = norm(search.value.trim());
            var shown = 0;
            var rows = table.querySelectorAll('tbody tr');
            rows.forEach(function (tr) {
                if (tr.classList.contains('part-row')) return;
                var match = !q || norm(tr.textContent).indexOf(q) !== -1;
                tr.style.display = match ? '' : 'none';
                if (match) shown++;
            });
            // Hide part headers while searching
            rows.forEach(function (tr) {
                if (tr.classList.contains('part-row')) tr.style.display = q ? 'none' : '';
            });
            if (empty) empty.style.display = shown ? 'none' : 'block';
        });
    }

    // Current year in footer
    document.querySelectorAll('[data-year]').forEach(function (el) {
        el.textContent = new Date().getFullYear();
    });
})();
