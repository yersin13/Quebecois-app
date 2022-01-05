import { BrowserRouter, Redirect, Route } from 'react-router-dom';
import { IonApp, IonIcon, IonLabel, IonRouterOutlet, IonTabBar, IonTabButton } from '@ionic/react';
import { IonReactRouter } from '@ionic/react-router';
import { home as homeIcon, settings as settingsIcon, planetOutline as planetIcon } from 'ionicons/icons'

import Home from './pages/Home';
import Overview from './pages/Overview';

import WordsList from './pages/WordsList';
import Words from './pages/Words';
import ExpressionsList from './pages/ExpressionsList';
import Expressions from './pages/Expressions';
import { SlidesIntro } from './pages/SlidesIntro';
import GameHome from './pages/Game/GameHome';
import EnglishGame from './pages/Game/EnglishGame';
import FrenchGame from './pages/Game/FrenchGame';
import Corner from './corner/Corner';
import CornerMusic from './corner/CornerMusic';
import FilmsCorner from './corner/FilmsCorner';




const App: React.FC = () => (
  <IonApp>
    <IonReactRouter>
      <IonRouterOutlet>
        <Route exact path="/home">
        <Home />
        </Route>
        <Route exact path="/words-list">
        <WordsList />
        </Route>
        <Route exact path="/words-list/:id">
        <Words />
        </Route>
        <Route exact path="/corner">
        <Corner />
        </Route>
        <Route exact path="/corner-music">
        <CornerMusic />
        </Route>
        <Route exact path="/corner-films">
        <FilmsCorner />
        </Route>

        <Route exact path="/expressions-list">
        <ExpressionsList />
        </Route>
        <Route exact path="/expressions-list/:id">
        <Expressions />
        </Route>
        <Route exact path="/game-home">
        <GameHome />
        </Route>
        <Route exact path="/game-english">
        <EnglishGame />
        </Route>
        <Route exact path="/game-french">
        <FrenchGame />
        </Route>
        
        <Route exact path="/overview">
        <Overview />
        </Route>
        <Route exact path="/intro">
          <SlidesIntro />
      </Route>
        
        <Route exact path="/">
          <Redirect to="/home" />
        </Route>
  
        </IonRouterOutlet>

       
    </IonReactRouter>
   
  </IonApp>
);

export default App;
