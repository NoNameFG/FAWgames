import Steam from './../Components/svgDist/steam.jsx';
import Origin from './../Components/svgDist/origin.jsx';
import BattleNet from './../Components/svgDist/battleNet.jsx';
import Uplay from './../Components/svgDist/uplay.jsx';
import BethesdaNet from './../Components/svgDist/BethesdaNet.jsx';
import EpicGamesStore from './../Components/svgDist/epicGamesStore.jsx';
import GOGcom from './../Components/svgDist/gogCom.jsx';
import RockstarSocialClub from './../Components/svgDist/rockstarSocialClub.jsx';
import WindowsStore from './../Components/svgDist/windowsStore.jsx';
import React from 'react';


export const distConverter = data => {
  switch (data) {
    case 'Steam':
      return (<Steam key={data}/>);
    case 'Origin':
      return (<Origin key={data}/>);
    case 'Battle.net':
      return (<BattleNet key={data}/>);
    case 'Uplay':
      return (<Uplay key={data}/>);
    case 'Epic Games Store':
      return (<EpicGamesStore key={data}/>);
    case 'Rockstar Social Club':
      return (<RockstarSocialClub key={data}/>);
    case 'Windows Store':
      return (<WindowsStore key={data}/>);
    case 'GOG.com':
      return (<GOGcom key={data}/>);
    case 'Bethesda.net':
      return (<BethesdaNet key={data}/>);
    default:
      return;
  }
}
