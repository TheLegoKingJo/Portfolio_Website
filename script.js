PortfolioText = document.getElementById('PortfolioText');
burjkhalifa = document.getElementById('burjkhalifa');
stars = document.getElementById('stars');

window.addEventListener('scroll', () => {
    value = window.scrollY;

    PortfolioText.style.left = value * -2 + 'px';
}); 