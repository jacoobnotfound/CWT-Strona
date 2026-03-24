        // Marquee
        const items = ['SPARINGI','PVP','EARTHSMP','TURNIEJE','DISCORD','SOJUSZE','EVENTY','REKRUTACJA'];
        const track = document.getElementById('marquee');
        [1,2].forEach(() => items.forEach(item => {
            const el = document.createElement('div');
            el.className = 'marquee-item';
            el.innerHTML = `<span class="dot">★</span>${item}`;
            track.appendChild(el);
        }));
 
        // Scroll reveal
        const observer = new IntersectionObserver(entries => {
            entries.forEach(e => { if(e.isIntersecting){ e.target.classList.add('visible'); observer.unobserve(e.target); } });
        }, { threshold: 0.12 });
        document.querySelectorAll('.reveal').forEach(el => observer.observe(el));
 
        // Staggered cards
        const cardObs = new IntersectionObserver(entries => {
            entries.forEach(e => {
                if(e.isIntersecting){
                    e.target.querySelectorAll('.oferta-card').forEach((c,i) => setTimeout(() => c.classList.add('visible'), i * 90));
                    cardObs.unobserve(e.target);
                }
            });
        }, { threshold: 0.05 });
        const grid = document.querySelector('.oferta-grid');
        if(grid) cardObs.observe(grid);