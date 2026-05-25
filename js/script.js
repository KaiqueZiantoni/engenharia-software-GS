document.addEventListener("DOMContentLoaded", () => {
    const cards = document.querySelectorAll('.glass-card');
    
    cards.forEach((card, index) => {
        setTimeout(() => {
            card.style.transition = 'all 0.5s cubic-bezier(0.4, 0, 0.2, 1)';
            card.style.opacity = '1';
            card.style.transform = 'translateY(0)';
        }, index * 100); 
    });
});

function highlightBox(clickedElement) {
    const allCards = document.querySelectorAll('.glass-card');
    const isActive = clickedElement.classList.contains('active');


    allCards.forEach(card => {
        card.classList.remove('active', 'dimmed');
    });

    if (!isActive) {
        clickedElement.classList.add('active');
        
        allCards.forEach(card => {
            if (card !== clickedElement) {
                card.classList.add('dimmed');
            }
        });
    }
}