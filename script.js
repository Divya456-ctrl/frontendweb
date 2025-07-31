document.addEventListener('DOMContentLoaded', () => {
  // Toggle Menu Visibility
  const btn = document.getElementById('viewMenuBtn');
  const menu = document.getElementById('menu');

  if (btn && menu) {
    btn.addEventListener('click', () => {
      menu.classList.toggle('visible');
      menu.classList.toggle('hidden');
      menu.scrollIntoView({ behavior: 'smooth', block: 'start' });
    });
  }

  // Chef Details
  const chefData = {
    master1: {
      name: 'Chef Anirudh',
      bio: '18+ years of mastery in North Indian cuisine. Known for bold flavors and rich gravies.'
    },
    master2: {
      name: 'Chef Lakshmi',
      bio: 'Renowned South Indian chef with international accolades. Expert in crispy dosas and spicy sambars.'
    },
    master3: {
      name: 'Chef Rajeev',
      bio: 'Fusion genius who blends tradition with flair—his thalis are visual and culinary art.'
    }
  };

  const chefCards = document.querySelectorAll('.chef-card');
  const profileSection = document.getElementById('chefProfile');
  const chefNameEl = document.getElementById('chefName');
  const chefBioEl = document.getElementById('chefBio');

  if (chefCards && profileSection && chefNameEl && chefBioEl) {
    chefCards.forEach(card => {
      card.addEventListener('click', () => {
        const chefKey = card.getAttribute('data-chef');
        const chef = chefData[chefKey];

        if (chef) {
          chefNameEl.textContent = chef.name;
          chefBioEl.textContent = chef.bio;
          profileSection.classList.remove('hidden');
          profileSection.classList.add('visible');
          profileSection.scrollIntoView({ behavior: 'smooth', block: 'start' });
        }
      });
    });
  }
});