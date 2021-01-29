export const genresConverter = str => {
  switch (str) {
    case 'arcade':
      return 'Аркада';
    case 'strategy':
      return 'Стратегия';
    case 'shooter':
      return 'Шутер';
    case 'RPG':
      return 'RPG';
    case 'racing':
      return 'Гонки';
    case 'casual':
      return 'Казуальные';
    case 'horror':
      return 'Хоррор';
    case 'survival':
      return 'Выживание';
    case 'action':
      return 'Экшен';
    case 'fighting':
      return 'Файтинг';
    case 'adventure':
      return 'Приключение';
    case 'roguelike':
      return 'Рогалик';
    case 'steampunk':
      return 'Стимпанк';
    case 'sport':
      return 'Спорт';
    case 'simulator':
      return 'Симулятор';
    case 'coop':
      return 'Кооператив';
    case 'battleroyale':
      return 'Королевская битва';
    case 'post-apocalyptic':
      return 'Пост-апокалипсис';
    default:
      return;
  }
}
