
// Função para abrir Instagram
function openInstagram() {
    window.open('https://www.instagram.com/vistaclinique/', '_blank');
}

// Animações suaves ao rolar a página
document.addEventListener('DOMContentLoaded', function() {
    // Smooth scrolling para links âncora
    const links = document.querySelectorAll('a[href^="#"]');
    
    links.forEach(link => {
        link.addEventListener('click', function(e) {
            e.preventDefault();
            
            const targetId = this.getAttribute('href');
            const targetSection = document.querySelector(targetId);
            
            if (targetSection) {
                targetSection.scrollIntoView({
                    behavior: 'smooth'
                });
            }
        });
    });
    
    // Animação de entrada para elementos quando aparecem na tela
    const observerOptions = {
        threshold: 0.1,
        rootMargin: '0px 0px -50px 0px'
    };
    
    const observer = new IntersectionObserver(function(entries) {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.style.opacity = '1';
                entry.target.style.transform = 'translateY(0)';
            }
        });
    }, observerOptions);
    
    // Observar elementos para animação
    const animatedElements = document.querySelectorAll('.doctor-card, .contact-card');
    animatedElements.forEach(el => {
        el.style.opacity = '0';
        el.style.transform = 'translateY(30px)';
        el.style.transition = 'opacity 0.6s ease-out, transform 0.6s ease-out';
        observer.observe(el);
    });
    
    // Efeito parallax suave no hero
    window.addEventListener('scroll', function() {
        const scrolled = window.pageYOffset;
        const hero = document.querySelector('.hero');
        
        if (hero) {
            const rate = scrolled * -0.5;
            hero.style.transform = `translateY(${rate}px)`;
        }
    });
    
    // Botões de ação
    const scheduleBtn = document.querySelector('.btn-primary');
    const contactBtn = document.querySelector('.btn-outline');
    
    if (scheduleBtn) {
        scheduleBtn.addEventListener('click', function() {
            alert('Funcionalidade de agendamento em desenvolvimento. Entre em contato pelo Instagram @vistaclinique');
        });
    }
    
    if (contactBtn) {
        contactBtn.addEventListener('click', function() {
            // Rolar para a seção de contato
            const contactSection = document.querySelector('.contact');
            if (contactSection) {
                contactSection.scrollIntoView({
                    behavior: 'smooth'
                });
            }
        });
    }
    
    // Efeito hover nos cards
    const cards = document.querySelectorAll('.doctor-card, .contact-card');
    
    cards.forEach(card => {
        card.addEventListener('mouseenter', function() {
            this.style.transform = 'translateY(-10px)';
        });
        
        card.addEventListener('mouseleave', function() {
            this.style.transform = 'translateY(0)';
        });
    });
    
    // Loading animation
    window.addEventListener('load', function() {
        document.body.style.opacity = '1';
        document.body.style.transform = 'translateY(0)';
    });
});

// Função para detectar dispositivo móvel
function isMobile() {
    return window.innerWidth <= 768;
}

// Ajustar comportamentos para mobile
window.addEventListener('resize', function() {
    if (isMobile()) {
        // Desabilitar efeito parallax no mobile para melhor performance
        const hero = document.querySelector('.hero');
        if (hero) {
            hero.style.transform = 'none';
        }
    }
});

// Inicializar comportamentos mobile
if (isMobile()) {
    document.addEventListener('DOMContentLoaded', function() {
        const hero = document.querySelector('.hero');
        if (hero) {
            hero.style.transform = 'none';
        }
    });
}
