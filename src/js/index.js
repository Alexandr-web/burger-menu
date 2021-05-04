const burgerMenuLogic = () => {
  const menu = document.querySelector('.menu__list');
  const btn = document.querySelector('.burger-menu');
  const lines = btn.querySelectorAll('.burger-menu__line');

  btn.addEventListener('click', () => {
    lines.forEach(line => {
      if (line.classList.contains('burger-menu__line--top')) {
        line.classList.toggle('move-bottom');
      }

      if (line.classList.contains('burger-menu__line--center')) {
        line.classList.toggle('hide');
      }

      if (line.classList.contains('burger-menu__line--bottom')) {
        line.classList.toggle('move-top');
      }
    });

    menu.classList.toggle('flex');
  });
}

burgerMenuLogic();