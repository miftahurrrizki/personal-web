document.addEventListener('DOMContentLoaded', function () {
    var nav = document.getElementById('nav');
    var navToggle = document.getElementById('navToggle');
    var navMenu = document.getElementById('navMenu');
    var navLinks = document.querySelectorAll('.nav__link');
    var sections = document.querySelectorAll('section[id]');

    var lastScroll = 0;
    window.addEventListener('scroll', function () {
        var scrollY = window.scrollY;
        if (scrollY > 40) {
            nav.classList.add('nav--scrolled');
        } else {
            nav.classList.remove('nav--scrolled');
        }
        lastScroll = scrollY;
    });

    navToggle.addEventListener('click', function () {
        var isOpen = navMenu.classList.toggle('nav__menu--open');
        navToggle.classList.toggle('nav__toggle--active');
        navToggle.setAttribute('aria-expanded', isOpen);
        document.body.classList.toggle('menu-open', isOpen);
    });

    navLinks.forEach(function (link) {
        link.addEventListener('click', function () {
            navMenu.classList.remove('nav__menu--open');
            navToggle.classList.remove('nav__toggle--active');
            navToggle.setAttribute('aria-expanded', 'false');
            document.body.classList.remove('menu-open');
        });
    });

    var scrollObserver = new IntersectionObserver(function (entries) {
        entries.forEach(function (entry) {
            if (entry.isIntersecting) {
                var id = entry.target.getAttribute('id');
                navLinks.forEach(function (link) {
                    if (link.getAttribute('href') === '#' + id) {
                        link.classList.add('nav__link--active');
                    } else {
                        link.classList.remove('nav__link--active');
                    }
                });
            }
        });
    }, { rootMargin: '-40% 0px -55% 0px' });

    sections.forEach(function (section) {
        scrollObserver.observe(section);
    });

    var prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;

    if (!prefersReducedMotion) {
        var revealObserver = new IntersectionObserver(function (entries) {
            entries.forEach(function (entry) {
                if (entry.isIntersecting) {
                    entry.target.setAttribute('data-visible', '');
                    revealObserver.unobserve(entry.target);
                }
            });
        }, { threshold: 0.12 });

        document.querySelectorAll('[data-reveal]').forEach(function (el) {
            revealObserver.observe(el);
        });
    } else {
        document.querySelectorAll('[data-reveal]').forEach(function (el) {
            el.setAttribute('data-visible', '');
        });
    }
});
