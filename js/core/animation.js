// Register ScrollTrigger plugin
if (window.gsap && window.ScrollTrigger) {
    gsap.registerPlugin(ScrollTrigger);
    
    // Page load animations (Hero section)
    window.addEventListener('load', () => {
        // Personal homepage: presence + hierarchy (not decorative noise)
        if (document.querySelector('.home-hero')) {
            const reduce = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
            if (!reduce) {
                const homeTl = gsap.timeline({ defaults: { ease: 'power3.out' } });
                homeTl
                    .from('.home-hero-img', { scale: 1.08, opacity: 0.55, duration: 1.35 }, 0)
                    .from('.home-hero-brand', { y: 28, opacity: 0, duration: 0.75 }, 0.2)
                    .from('.home-hero-headline', { y: 36, opacity: 0, duration: 0.9 }, 0.35)
                    .from('.home-hero-support', { y: 22, opacity: 0, duration: 0.7 }, 0.5)
                    .from('.home-hero-actions', { y: 18, opacity: 0, duration: 0.65 }, 0.62);

                if (document.querySelector('.home-hub-inner')) {
                    gsap.from('.home-hub-inner > *', {
                        scrollTrigger: { trigger: '.home-hub', start: 'top 82%' },
                        y: 28,
                        opacity: 0,
                        duration: 0.75,
                        stagger: 0.12,
                        ease: 'power2.out'
                    });
                }
                if (document.querySelector('.home-find-list')) {
                    gsap.from('.home-find-row', {
                        scrollTrigger: { trigger: '.home-find', start: 'top 85%' },
                        y: 24,
                        opacity: 0,
                        duration: 0.55,
                        stagger: 0.1,
                        ease: 'power2.out'
                    });
                }
            }
        }

        if (document.body.classList.contains('sfh-platform') && !document.querySelector('.home-hero')) return;
        // Safe check for Hero Section elements
        if (document.querySelector('.hero-section')) {
            const tl = gsap.timeline();
            
            tl.from('.main-header', {
                y: -100,
                opacity: 0,
                duration: 1,
                ease: 'power3.out'
            })
            .from('.badge-container', {
                opacity: 0,
                y: 20,
                duration: 0.6,
                ease: 'power2.out'
            }, '-=0.5')
            .from('.hero-title', {
                opacity: 0,
                y: 40,
                duration: 0.8,
                ease: 'power3.out'
            }, '-=0.4')
            .from('.hero-subtitle', {
                opacity: 0,
                y: 20,
                duration: 0.6,
                ease: 'power2.out'
            }, '-=0.5')
            .from('.hero-meta', {
                opacity: 0,
                y: 20,
                duration: 0.6,
                ease: 'power2.out'
            }, '-=0.4')
            .from('.hero-buttons', {
                opacity: 0,
                y: 20,
                duration: 0.6,
                ease: 'power2.out'
            }, '-=0.4')
            .from('.hero-visual', {
                scale: 0.8,
                opacity: 0,
                duration: 1.2,
                ease: 'elastic.out(1, 0.75)'
            }, '-=1');
        }
        
        // Homepage Hub Cards Reveal (Homepage specific)
        if (document.querySelector('.hub-cards-grid')) {
            gsap.from('.hub-card', {
                scrollTrigger: {
                    trigger: '.hub-cards-grid',
                    start: 'top 85%'
                },
                opacity: 0,
                y: 50,
                scale: 0.95,
                duration: 0.8,
                stagger: 0.15,
                ease: 'power2.out'
            });
        }
        
        // Scroll navigation indicators highlight
        const sections = document.querySelectorAll('section');
        const navLinks = document.querySelectorAll('.nav-links a');
        
        if (sections.length > 0 && navLinks.length > 0) {
            sections.forEach(section => {
                ScrollTrigger.create({
                    trigger: section,
                    start: 'top 40%',
                    end: 'bottom 40%',
                    onEnter: () => {
                        const id = section.getAttribute('id');
                        navLinks.forEach(link => {
                            if (link.getAttribute('href') === `#${id}`) {
                                link.classList.add('active');
                            } else {
                                link.classList.remove('active');
                            }
                        });
                    },
                    onEnterBack: () => {
                        const id = section.getAttribute('id');
                        navLinks.forEach(link => {
                            if (link.getAttribute('href') === `#${id}`) {
                                link.classList.add('active');
                            } else {
                                link.classList.remove('active');
                            }
                        });
                    }
                });
            });
        }
        
        // General Section Header reveals
        document.querySelectorAll('.section-header').forEach(header => {
            gsap.from(header, {
                scrollTrigger: {
                    trigger: header,
                    start: 'top 85%'
                },
                opacity: 0,
                y: 30,
                duration: 0.8,
                ease: 'power2.out'
            });
        });
        
        // Staggered reveal for Comparison cards
        if (document.querySelector('.comp-card')) {
            gsap.from('.comp-card', {
                scrollTrigger: {
                    trigger: '#comparison',
                    start: 'top 75%'
                },
                opacity: 0,
                y: 45,
                duration: 0.8,
                stagger: 0.12,
                ease: 'power2.out'
            });
        }
        
        // Staggered reveal for Examples cards
        if (document.querySelector('.example-card')) {
            gsap.from('.example-card', {
                scrollTrigger: {
                    trigger: '#examples',
                    start: 'top 75%'
                },
                opacity: 0,
                y: 40,
                duration: 0.8,
                stagger: 0.12,
                ease: 'power2.out'
            });
        }
        
        // Scale reveal for Formula Letters
        if (document.querySelector('.formula-letter-box')) {
            gsap.from('.formula-letter-box', {
                scrollTrigger: {
                    trigger: '#fitness-formula',
                    start: 'top 75%'
                },
                opacity: 0,
                scale: 0.7,
                duration: 0.8,
                stagger: 0.15,
                ease: 'back.out(1.7)'
            });
        }
        
        // Technology radar scale in
        if (document.querySelector('.radar-plot-wrapper')) {
            gsap.from('.radar-plot-wrapper', {
                scrollTrigger: {
                    trigger: '#tech-radar',
                    start: 'top 70%'
                },
                opacity: 0,
                scale: 0.8,
                rotation: -45,
                duration: 1.2,
                ease: 'power3.out'
            });
            
            gsap.from('.radar-info-sidebar', {
                scrollTrigger: {
                    trigger: '#tech-radar',
                    start: 'top 70%'
                },
                opacity: 0,
                x: -50,
                duration: 1,
                ease: 'power2.out'
            });
        }
        
        // Assessment card fade-in
        if (document.querySelector('.assessment-container')) {
            gsap.from('.assessment-container', {
                scrollTrigger: {
                    trigger: '#assessment',
                    start: 'top 75%'
                },
                opacity: 0,
                y: 40,
                duration: 1,
                ease: 'power3.out'
            });
        }
        
        // CLA pyramid — slide-in only (never hide layers; opacity:0 broke click targets)
        if (document.querySelector('.pyramid-container')) {
            gsap.set('.pyramid-layer', { opacity: 1, y: 0 });

            gsap.from('.pyramid-layer', {
                scrollTrigger: {
                    trigger: '.pyramid-container',
                    start: 'top 85%',
                    once: true
                },
                y: 36,
                stagger: 0.12,
                duration: 0.7,
                ease: 'power2.out',
                immediateRender: false
            });

            gsap.from('.cla-info-card', {
                scrollTrigger: {
                    trigger: '.cla-grid',
                    start: 'top 85%',
                    once: true
                },
                opacity: 0,
                x: 50,
                duration: 0.9,
                ease: 'power2.out',
                immediateRender: false
            });
        }
        
        // Case studies tabs entry
        if (document.querySelector('.cases-tabs-container')) {
            gsap.from('.cases-tabs-container', {
                scrollTrigger: {
                    trigger: '#cla-cases',
                    start: 'top 80%'
                },
                opacity: 0,
                y: 20,
                duration: 0.6,
                ease: 'power2.out'
            });
        }
        
        // Workspace elements entrance
        if (document.querySelector('.workspace-controls')) {
            gsap.from('.workspace-controls', {
                scrollTrigger: {
                    trigger: '#cla-workspace',
                    start: 'top 75%'
                },
                opacity: 0,
                x: -40,
                duration: 0.8,
                ease: 'power2.out'
            });
            
            gsap.from('.workspace-preview', {
                scrollTrigger: {
                    trigger: '#cla-workspace',
                    start: 'top 75%'
                },
                opacity: 0,
                x: 40,
                duration: 0.8,
                ease: 'power2.out'
            });
        }
        
        // Futures Wheel Entrance Animations
        if (document.querySelector('.wheel-cascade')) {
            const wheelTl = gsap.timeline({
                scrollTrigger: {
                    trigger: '#futures-wheel',
                    start: 'top 75%'
                }
            });
            
            wheelTl.from('.cascade-hub-card', {
                scale: 0.9,
                opacity: 0,
                duration: 0.8,
                ease: 'back.out(1.5)'
            })
            .from('.cascade-lane', {
                opacity: 0,
                x: 30,
                duration: 0.5,
                stagger: 0.1,
                ease: 'power2.out'
            }, '-=0.3')
            .from('.wheel-sidebar', {
                x: -40,
                opacity: 0,
                duration: 0.8,
                ease: 'power2.out'
            }, '-=0.5');
        }
        
        // Types of Models Tabs reveal
        if (document.querySelector('.models-tabs-container')) {
            gsap.from('.models-tabs-container', {
                scrollTrigger: {
                    trigger: '#wheel-models',
                    start: 'top 80%'
                },
                opacity: 0,
                y: 20,
                duration: 0.6,
                ease: 'power2.out'
            });
        }
        
        // Accordion stagger
        if (document.querySelector('.accordion-item')) {
            gsap.from('.accordion-item', {
                scrollTrigger: {
                    trigger: '#challenges',
                    start: 'top 80%'
                },
                opacity: 0,
                y: 20,
                duration: 0.6,
                stagger: 0.15,
                ease: 'power2.out'
            });
        }
    });
}
