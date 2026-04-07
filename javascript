function pickBox(btnElement) {
  if (lives > 1) {
    // 1. Показываем сообщение "Тут пусто"
    const msg = document.getElementById('gameMsg');
    msg.style.display = 'block';
    
    // 2. Делаем коробку немного "дергающейся" (эффект промаха)
    btnElement.style.transform = 'translateX(10px)';
    setTimeout(() => btnElement.style.transform = 'translateX(-10px)', 100);
    setTimeout(() => btnElement.style.transform = 'translateX(0)', 200);

    // 3. Отнимаем жизнь
    document.getElementById('h' + lives).classList.add('lost');
    lives--;

    // 4. Скрываем сообщение через 1.5 секунды
    setTimeout(() => {
      msg.style.display = 'none';
    }, 1500);

  } else {
    // Последняя жизнь — всегда победа
    goTo(6);
    fireConfetti();
  }
}
