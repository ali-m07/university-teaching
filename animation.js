// Register ScrollTrigger plugin
if (window.gsap && window.ScrollTrigger) {
    gsap.registerPlugin(ScrollTrigger);
    
    // Page load animations (Hero section)
    window.addEventListener('load', () => {
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
        
        // Scroll navigation indicators highlight
        const sections = document.querySelectorAll('section');
        const navLinks = document.querySelectorAll('.nav-links a');
        
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
        
        // Staggered reveal for Examples cards
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
        
        // Scale reveal for Formula Letters
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
        
        // Technology radar scale in
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
        
        // Assessment card fade-in
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
        
        // CLA 3D Pyramid Layer-by-layer rise animation
        gsap.from('.pyramid-layer', {
            scrollTrigger: {
                trigger: '.pyramid-container',
                start: 'top 75%'
            },
            opacity: 0,
            y: 80,
            rotationX: 0,
            stagger: 0.15,
            duration: 1,
            ease: 'power3.out'
        });

        gsap.from('.cla-info-card', {
            scrollTrigger: {
                trigger: '.cla-grid',
                start: 'top 75%'
            },
            opacity: 0,
            x: 50,
            duration: 0.9,
            ease: 'power2.out'
        });

        // Case studies tabs entry
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

        // Workspace elements entrance
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

        // ==================================================================
        // NEW FUTURES WHEEL ANIMATIONS
        // ==================================================================
        
        // Pop center hub, then pop radial nodes
        const wheelTl = gsap.timeline({
            scrollTrigger: {
                trigger: '#futures-wheel',
                start: 'top 75%'
            }
        });
        
        wheelTl.from('.wheel-center-hub', {
            scale: 0,
            opacity: 0,
            duration: 0.8,
            ease: 'back.out(1.5)'
        })
        .from('.wheel-node', {
            scale: 0,
            opacity: 0,
            duration: 0.6,
            stagger: 0.15,
            ease: 'back.out(1.7)'
        }, '-=0.3')
        .from('.wheel-sidebar', {
            x: -40,
            opacity: 0,
            duration: 0.8,
            ease: 'power2.out'
        }, '-=0.5');
        
        // Accordion stagger
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
    });
}
