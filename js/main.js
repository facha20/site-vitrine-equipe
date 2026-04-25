/* Interactions JS pour EduFlow AI
   Mission : Moulaye Idrisse Haidara
*/

document.addEventListener('DOMContentLoaded', () => {
    console.log("EduFlow AI Engine : Actif");

    // Simulation de calcul de priorité au survol
    const tableRows = document.querySelectorAll('tbody tr');
    
    tableRows.forEach(row => {
        row.addEventListener('mouseenter', () => {
            row.style.cursor = 'pointer';
            row.classList.add('shadow-sm');
        });
        
        row.addEventListener('mouseleave', () => {
            row.classList.remove('shadow-sm');
        });

        // Alerte contextuelle pour le mode "Urgent"
        if (row.classList.contains('table-danger')) {
            row.addEventListener('click', () => {
                alert("ANALYSE IA : Coefficient élevé détecté. Priorité de révision maximale recommandée pour cette UE.");
            });
        }
    });

    // Animation des barres de progression
    const progressBars = document.querySelectorAll('.progress-bar');
    setTimeout(() => {
        progressBars.forEach(bar => {
            bar.style.transition = "width 2s ease-in-out";
            // On déclenche l'animation de remplissage
            let targetWidth = bar.getAttribute('aria-valuenow');
            bar.style.width = (targetWidth / 30 * 100) + "%";
        });
    }, 500);
});