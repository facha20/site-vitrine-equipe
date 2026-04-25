document.querySelectorAll('a[href^="#"]').forEach(anchor => {
            anchor.addEventListener('click', function (e) {
                e.preventDefault();
                const target = document.querySelector(this.getAttribute('href'));
                if (target) {
                    target.scrollIntoView({
                        behavior: 'smooth',
                        block: 'start'
                    });
                }
            });
        });

        // Alerte lors de l'envoi du formulaire (démonstration)
        const contactForm = document.querySelector('#contact form');
        if (contactForm) {
            contactForm.addEventListener('submit', function(e) {
                e.preventDefault();
                alert('Merci pour votre message ! L\'équipe EduFlow AI vous répondra dans les plus brefs délais.');
                this.reset();
            });
        }

        // Ajout d'un console.log pour confirmer le chargement
        console.log('EduFlow AI - Site vitrine chargé avec succès');