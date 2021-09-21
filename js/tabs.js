let tabs = document.querySelectorAll('.services__tab');
let cards = document.querySelectorAll('.services__tab-content');
for (let tab of tabs) {
    tab.addEventListener('click', () => {
        for (let card of cards) {
            card.setAttribute('hidden', '');
        }
        cards[tab.dataset.index].removeAttribute('hidden');
    })
}