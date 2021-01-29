export const distNameToUrlConverter = name => {
  switch (name) {
    case 'Steam':
      return 'steam';
    case 'Origin':
      return 'origin';
    case 'Battle.net':
      return 'battle_net';
    case 'Uplay':
      return 'uplay';
    case 'Epic Games Store':
      return 'epic_games_store';
    case 'Rockstar Social Club':
      return 'rockstar_social_club';
    case 'Windows Store':
      return 'windows_store';
    case 'GOG.com':
      return 'gog_com';
    case 'Bethesda.net':
      return 'bethesda_net';
    default:
      return;
  }
}
