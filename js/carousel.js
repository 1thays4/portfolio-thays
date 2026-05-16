// Carrossel/Slider para os cards de projetos
// Suporta navegação manual (botões/dots) e autoplay

document.addEventListener('DOMContentLoaded', function() {
    const carousels = document.querySelectorAll('.carousel');

    carousels.forEach(function(carousel) {
        const slides = carousel.querySelectorAll('.carousel-slide');
        const prevBtn = carousel.querySelector('.carousel-prev');
        const nextBtn = carousel.querySelector('.carousel-next');
        const dotsContainer = carousel.querySelector('.carousel-dots');
        const interval = parseInt(carousel.getAttribute('data-interval')) || 4000;

        // Só inicializa se houver mais de 1 slide
        if (slides.length <= 1) {
            // Esconde botões e dots quando há apenas 1 imagem
            if (prevBtn) prevBtn.style.display = 'none';
            if (nextBtn) nextBtn.style.display = 'none';
            if (dotsContainer) dotsContainer.style.display = 'none';
            return;
        }

        let currentIndex = 0;
        let autoPlayTimer = null;

        // Cria os dots indicadores
        function createDots() {
            if (!dotsContainer) return;
            dotsContainer.innerHTML = '';
            slides.forEach(function(_, index) {
                const dot = document.createElement('button');
                dot.classList.add('dot');
                dot.setAttribute('aria-label', 'Ir para imagem ' + (index + 1));
                if (index === 0) dot.classList.add('active');
                dot.addEventListener('click', function() {
                    goToSlide(index);
                    resetAutoPlay();
                });
                dotsContainer.appendChild(dot);
            });
        }

        // Vai para um slide específico
        function goToSlide(index) {
            slides.forEach(function(slide, i) {
                slide.classList.toggle('active', i === index);
            });

            // Atualiza dots
            if (dotsContainer) {
                const dots = dotsContainer.querySelectorAll('.dot');
                dots.forEach(function(dot, i) {
                    dot.classList.toggle('active', i === index);
                });
            }

            currentIndex = index;
        }

        // Próximo slide
        function nextSlide() {
            const next = (currentIndex + 1) % slides.length;
            goToSlide(next);
        }

        // Slide anterior
        function prevSlide() {
            const prev = (currentIndex - 1 + slides.length) % slides.length;
            goToSlide(prev);
        }

        // Inicia autoplay
        function startAutoPlay() {
            stopAutoPlay();
            autoPlayTimer = setInterval(nextSlide, interval);
        }

        // Para autoplay
        function stopAutoPlay() {
            if (autoPlayTimer) {
                clearInterval(autoPlayTimer);
                autoPlayTimer = null;
            }
        }

        // Reinicia autoplay (usado após interação manual)
        function resetAutoPlay() {
            startAutoPlay();
        }

        // Eventos dos botões
        if (prevBtn) {
            prevBtn.addEventListener('click', function(e) {
                e.stopPropagation();
                prevSlide();
                resetAutoPlay();
            });
        }

        if (nextBtn) {
            nextBtn.addEventListener('click', function(e) {
                e.stopPropagation();
                nextSlide();
                resetAutoPlay();
            });
        }

        // Pausa autoplay ao passar o mouse
        carousel.addEventListener('mouseenter', stopAutoPlay);
        carousel.addEventListener('mouseleave', startAutoPlay);

        // Inicializa
        createDots();
        startAutoPlay();

        // Suporte a toque (swipe) em dispositivos móveis
        let touchStartX = 0;
        let touchEndX = 0;

        carousel.addEventListener('touchstart', function(e) {
            touchStartX = e.changedTouches[0].screenX;
        }, { passive: true });

        carousel.addEventListener('touchend', function(e) {
            touchEndX = e.changedTouches[0].screenX;
            handleSwipe();
        }, { passive: true });

        function handleSwipe() {
            const swipeThreshold = 50;
            const diff = touchStartX - touchEndX;

            if (Math.abs(diff) > swipeThreshold) {
                if (diff > 0) {
                    // Swipe para esquerda → próximo
                    nextSlide();
                } else {
                    // Swipe para direita → anterior
                    prevSlide();
                }
                resetAutoPlay();
            }
        }
    });
});