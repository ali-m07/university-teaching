/**
 * Full-screen-style presentation deck (gametheory-presentation pattern)
 */
(function () {
    function bindPresentation(pres) {
        if (pres.dataset.presBound) return;
        pres.dataset.presBound = '1';

        const slides = [...pres.querySelectorAll('.fitness-pres-slide')];
        const prevBtn = pres.querySelector('.fitness-pres-prev');
        const nextBtn = pres.querySelector('.fitness-pres-next');
        const dots = [...pres.querySelectorAll('.fitness-pres-dot')];
        const progress = pres.querySelector('.fitness-pres-progress');
        const fsBtn = pres.querySelector('.fitness-pres-fs-btn');
        let idx = 0;
        let animating = false;

        function updateNav() {
            if (prevBtn) prevBtn.disabled = idx <= 0;
            if (nextBtn) nextBtn.disabled = idx >= slides.length - 1;
            dots.forEach((d, j) => d.classList.toggle('is-active', j === idx));
            if (progress) progress.textContent = `${idx + 1} / ${slides.length}`;
        }

        function goTo(nextIdx) {
            if (!slides.length || animating) return;
            const target = Math.max(0, Math.min(slides.length - 1, nextIdx));
            if (target === idx) return;

            animating = true;
            const current = slides[idx];
            const next = slides[target];

            current.classList.remove('is-active');
            current.classList.add('is-exiting');
            next.classList.add('is-active');
            next.setAttribute('aria-hidden', 'false');
            current.setAttribute('aria-hidden', 'true');

            idx = target;
            updateNav();

            window.setTimeout(() => {
                current.classList.remove('is-exiting');
                animating = false;
            }, 560);
        }

        prevBtn?.addEventListener('click', () => goTo(idx - 1));
        nextBtn?.addEventListener('click', () => goTo(idx + 1));
        dots.forEach(d => {
            d.addEventListener('click', () => goTo(Number(d.getAttribute('data-pres-go'))));
        });

        pres.addEventListener('keydown', (e) => {
            const rtl = pres.getAttribute('dir') === 'rtl';
            const nextKeys = rtl
                ? ['ArrowLeft', 'ArrowDown', 'PageDown']
                : ['ArrowRight', 'ArrowDown', 'PageDown'];
            const prevKeys = rtl
                ? ['ArrowRight', 'ArrowUp', 'PageUp']
                : ['ArrowLeft', 'ArrowUp', 'PageUp'];

            if (nextKeys.includes(e.key)) {
                e.preventDefault();
                goTo(idx + 1);
            }
            if (prevKeys.includes(e.key)) {
                e.preventDefault();
                goTo(idx - 1);
            }
            if (e.key === 'Home') { e.preventDefault(); goTo(0); }
            if (e.key === 'End') { e.preventDefault(); goTo(slides.length - 1); }
            if (e.key === 'f' || e.key === 'F') {
                if (e.target.tagName === 'INPUT' || e.target.tagName === 'TEXTAREA') return;
                e.preventDefault();
                toggleFullscreen(pres, fsBtn);
            }
        });

        fsBtn?.addEventListener('click', () => toggleFullscreen(pres, fsBtn));

        document.addEventListener('fullscreenchange', () => {
            const on = document.fullscreenElement === pres;
            pres.classList.toggle('is-fs-active', on);
            document.body.classList.toggle('fitness-pres-fs-open', on);
            if (fsBtn && window.lucide) {
                fsBtn.innerHTML = on
                    ? '<i data-lucide="minimize"></i>'
                    : '<i data-lucide="maximize"></i>';
                window.lucide.createIcons();
            }
        });

        pres.resetPresentation = () => {
            slides.forEach((s, j) => {
                s.classList.toggle('is-active', j === 0);
                s.classList.remove('is-exiting');
                s.setAttribute('aria-hidden', j === 0 ? 'false' : 'true');
            });
            idx = 0;
            updateNav();
        };

        pres.resetPresentation();
    }

    function toggleFullscreen(pres, fsBtn) {
        if (!document.fullscreenEnabled) {
            pres.classList.toggle('is-fs-active');
            const on = pres.classList.contains('is-fs-active');
            document.body.classList.toggle('fitness-pres-fs-open', on);
            document.body.style.overflow = on ? 'hidden' : '';
            if (fsBtn && window.lucide) {
                fsBtn.innerHTML = on
                    ? '<i data-lucide="minimize"></i>'
                    : '<i data-lucide="maximize"></i>';
                window.lucide.createIcons();
            }
            return;
        }
        if (document.fullscreenElement === pres) {
            document.exitFullscreen?.();
        } else {
            pres.requestFullscreen?.().catch(() => {
                pres.classList.add('is-fs-active');
                document.body.classList.add('fitness-pres-fs-open');
                document.body.style.overflow = 'hidden';
            });
        }
    }

    window.initFitnessPresentations = function initFitnessPresentations(scope) {
        const root = scope || document;
        root.querySelectorAll('[data-fitness-pres]').forEach(bindPresentation);
        if (window.lucide) window.lucide.createIcons();
    };
})();
