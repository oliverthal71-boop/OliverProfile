// Scroll Effekte: Info-Karten leicht einblenden
const cards = document.querySelectorAll('.info-card, .project-card, .contact-card');
const observer = new IntersectionObserver(entries => {
  entries.forEach(entry => {
    if(entry.isIntersecting){
      entry.target.style.transform = 'translateY(0)';
      entry.target.style.opacity = '1';
    } else {
      entry.target.style.transform = 'translateY(50px)';
      entry.target.style.opacity = '0';
    }
  });
}, { threshold: 0.1 });

cards.forEach(card => {
  card.style.transition = 'all 0.6s ease-out';
  card.style.opacity = '0';
  card.style.transform = 'translateY(50px)';
  observer.observe(card);
});

// Mouse Move Effekt für Profil Info-Karte
const infoCard = document.querySelector('.info-card');
infoCard.addEventListener('mousemove', e => {
  const x = (window.innerWidth/2 - e.pageX)/20;
  const y = (window.innerHeight/2 - e.pageY)/20;
  infoCard.style.transform = `translate(${x}px, ${y}px)`;
});
infoCard.addEventListener('mouseleave', () => {
  infoCard.style.transform = 'translate(0,0)';
});
