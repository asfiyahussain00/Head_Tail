function tossCoin() {
    const coin = document.getElementById('coin');
    const result = Math.random() < 0.5 ? 'Heads' : 'Tails';
    coin.textContent = result;
}

