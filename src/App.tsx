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
import Corner from './pages/corner/Corner';
import CornerMusic from './pages/corner/CornerMusic';
import FilmsCorner from './pages/corner/FilmsCorner';
import Film from './pages/corner/Film'
import FoodCorner from './pages/corner/FoodCorner';
import Food from './pages/corner/Food';
import MemesCorner from './pages/corner/MemesCorner';
import { Menu } from './pages/Menu';


import FavWords from './pages/favorites/FavWords';

import FavExpressions from './pages/favorites/FavExpressions';

import { setupIonicReact } from '@ionic/react';
import Cultural from './pages/corner/CornerCultural';
import CornerMuseum from './pages/corner/CornerMuseums';
import CornerMuseums from './pages/corner/CornerMuseums';
import Lessons from './pages/lessons/Lessons';
import FactsQ from './pages/lessons/FactsQ';
import Fact from './pages/lessons/Fact';



setupIonicReact({
  mode: 'md'
});


const App: React.FC = () => (
  <IonApp>
    <IonReactRouter>
    <Menu/>
      <IonRouterOutlet id="main">
      <Route exact path="/facts/:id">
        <Fact />
        </Route>
      <Route exact path="/facts/">
        <FactsQ />
        </Route>
      <Route exact path="/lessons/">
        <Lessons />
        </Route>
        <Route exact path="/home">
        <Home />
        </Route>


        <Route exact path="/favExpressions">
        <FavExpressions />
        </Route>
        <Route exact path="/favWords">
        <FavWords />
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

        <Route exact path="/corner-food">
        <FoodCorner />
        </Route>
        <Route exact path="/corner-food/:id">
        <Food />
        </Route>

        <Route exact path="/corner-films">
        <FilmsCorner />
        </Route>

        <Route exact path="/corner-cultural">
        <Cultural />
        </Route>

        <Route exact path="/corner-museums">
        <CornerMuseums />
        </Route>

        <Route exact path="/corner-memes">
        <MemesCorner />
        </Route>
        

    <Route exact path="/corner-films/:id">
        <Film />
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
