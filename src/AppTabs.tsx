import {
  IonApp, IonIcon, IonLabel, IonLoading, IonRouterOutlet, IonTabBar, IonTabButton, IonTabs
} from '@ionic/react';
import { IonReactRouter } from '@ionic/react-router';
import React from 'react';
import { Redirect, Route, Switch} from 'react-router-dom';
import { home as homeIcon, settings as settingsIcon, planetOutline as planetIcon } from 'ionicons/icons'
import AppTabs from './AppTabs';
import Home from './pages/Home';

const App: React.FC = () => (
  <IonTabs>
  <IonRouterOutlet>


<Route exact path="/home">
  <Home/>
</Route>

</IonRouterOutlet>
<IonTabBar slot="bottom">
<IonTabButton tab="profile"  href="/home" >
    <IonIcon className="icons" icon={homeIcon} />
    <IonLabel className="label">Home</IonLabel>
  </IonTabButton>
  
  <IonTabButton tab="settings" href="/my/settings" >
  <IonIcon className="icons" icon={settingsIcon} />
    <IonLabel className="label">Settings</IonLabel>
  </IonTabButton>
</IonTabBar>
</IonTabs>
);

export default App;
