const hpValue = document.querySelector('.header__hp-value');
const potion = document.querySelector('.potion__image');
const hpBar = {
  health: 100,
};

hpValue.textContent = hpBar.health;

let count = 0;

potion.addEventListener('click', function () {
  count += 50;
  hpValue.textContent = hpBar.health + count;
});