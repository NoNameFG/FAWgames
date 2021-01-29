import React from 'react';
import { NavLink, Switch, Route } from 'react-router-dom';
import Steam from './../../svgDist/steam.jsx';
import Origin from './../../svgDist/origin.jsx';
import BattleNet from './../../svgDist/battleNet.jsx';
import Uplay from './../../svgDist/uplay.jsx';
import BethesdaNet from './../../svgDist/BethesdaNet.jsx';
import EpicGamesStore from './../../svgDist/epicGamesStore.jsx';
import GOGcom from './../../svgDist/gogCom.jsx';
import RockstarSocialClub from './../../svgDist/rockstarSocialClub.jsx';
import WindowsStore from './../../svgDist/windowsStore.jsx';
import ActivationTemplateSteam from './ActivationTemplates/ActivationTemplateSteam.jsx';
import ActivationTemplateOrigin from './ActivationTemplates/ActivationTemplateOrigin.jsx';
import ActivationTemplateBattleNet from './ActivationTemplates/ActivationTemplateBattleNet.jsx';
import ActivationTemplateUplay from './ActivationTemplates/ActivationTemplateUplay.jsx';
import ActivationTemplateBethesdaNet from './ActivationTemplates/ActivationTemplateBethesdaNet.jsx';
import ActivationTemplateEpicGamesStore from './ActivationTemplates/ActivationTemplateEpicGamesStore.jsx';
import ActivationTemplateGOGcom from './ActivationTemplates/ActivationTemplateGOG.jsx';
import ActivationTemplateRockstarSocialClub from './ActivationTemplates/ActivationTemplateRockstarSocialClub.jsx';
import ActivationTemplateWindowsStore from './ActivationTemplates/ActivationTemplateWindowsStore.jsx';
import './ActivationPage.css';


class ActivationPage extends React.Component{
  componentDidMount(){
    document.title = 'Как активировать ключ?';
  }

  render(){
    return(
      <div className="activation_wrapper">
        <div className="activation_wrapper--template">
          <ul className="activation_distributor--list">
            <li className="activation_distributor--instance">
              <NavLink to='/activation/steam' className="activation_distributor--instance_link" activeClassName="active">
                <Steam/>
              </NavLink>
            </li>
            <li className="activation_distributor--instance">
              <NavLink to='/activation/origin' className="activation_distributor--instance_link" activeClassName="active">
                <Origin/>
              </NavLink>
            </li>
            <li className="activation_distributor--instance">
              <NavLink to='/activation/battle_net' className="activation_distributor--instance_link" activeClassName="active">
                <BattleNet/>
              </NavLink>
            </li>
            <li className="activation_distributor--instance">
              <NavLink to='/activation/uplay' className="activation_distributor--instance_link" activeClassName="active">
                <Uplay/>
              </NavLink>
            </li>
            <li className="activation_distributor--instance">
              <NavLink to='/activation/bethesda_net' className="activation_distributor--instance_link" activeClassName="active">
                <BethesdaNet/>
              </NavLink>
            </li>
            <li className="activation_distributor--instance">
              <NavLink to='/activation/epic_games_store' className="activation_distributor--instance_link" activeClassName="active">
                <EpicGamesStore/>
              </NavLink>
            </li>
            <li className="activation_distributor--instance">
              <NavLink to='/activation/gog_com' className="activation_distributor--instance_link" activeClassName="active">
                <GOGcom/>
              </NavLink>
            </li>
            <li className="activation_distributor--instance">
              <NavLink to='/activation/rockstar_social_club' className="activation_distributor--instance_link" activeClassName="active">
                <RockstarSocialClub/>
              </NavLink>
            </li>
            <li className="activation_distributor--instance">
              <NavLink to='/activation/windows_store' className="activation_distributor--instance_link" activeClassName="active">
                <WindowsStore/>
              </NavLink>
            </li>
          </ul>
          <div className="activation_wrapper--description">
            <Switch>
              <Route path="/activation/steam">
                <ActivationTemplateSteam/>
              </Route>

              <Route path="/activation/origin">
                <ActivationTemplateOrigin/>
              </Route>

              <Route path="/activation/battle_net">
                <ActivationTemplateBattleNet/>
              </Route>

              <Route path="/activation/uplay">
                <ActivationTemplateUplay/>
              </Route>

              <Route path="/activation/bethesda_net">
                <ActivationTemplateBethesdaNet/>
              </Route>

              <Route path="/activation/epic_games_store">
                <ActivationTemplateEpicGamesStore/>
              </Route>

              <Route path="/activation/GOG_com">
                <ActivationTemplateGOGcom/>
              </Route>

              <Route path="/activation/rockstar_social_club">
                <ActivationTemplateRockstarSocialClub/>
              </Route>

              <Route path="/activation/windows_store">
                <ActivationTemplateWindowsStore/>
              </Route>
            </Switch>
          </div>
        </div>
      </div>
    );
  }
}

export default ActivationPage;
