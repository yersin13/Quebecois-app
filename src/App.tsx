import { BrowserRouter, Redirect, Route } from 'react-router-dom';
import { IonApp, IonIcon, IonLabel, IonRouterOutlet, IonTabBar, IonTabButton } from '@ionic/react';
import { IonReactRouter } from '@ionic/react-router';
import { home as homeIcon, settings as settingsIcon, planetOutline as planetIcon } from 'ionicons/icons'

import Home from './pages/Home';
import Overview from './pages/Overview';
import ExpressionsList from './pages/ExpressionsList';
import Expression from './pages/Expression';



const App: React.FC = () => (
  <IonApp>
    <IonReactRouter>
      <IonRouterOutlet>
        <Route exact path="/home">
        <Home />
        </Route>
        <Route exact path="/expressions-list">
        <ExpressionsList />
        </Route>
        <Route exact path="/expressions-list/:id">
        <Expression />
        </Route>
        <Route exact path="/overview">
        <Overview />
        </Route>
        
        <Route exact path="/">
          <Redirect to="/home" />
        </Route>
  
        </IonRouterOutlet>

       
    </IonReactRouter>
   
  </IonApp>
);

export default App;
