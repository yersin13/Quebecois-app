import { IonAvatar, IonBackButton, IonButton, IonButtons, IonCard, IonCardContent, IonCardHeader, IonCardTitle, IonCol, IonContent, IonGrid, IonHeader, IonIcon, IonImg, IonItem, IonLabel, IonList, IonPage, IonRow, IonTabBar, IonTabButton, IonText, IonThumbnail, IonTitle, IonToolbar, useIonLoading } from '@ionic/react';
import ExploreContainer from '../../components/ExploreContainer';
import { entriesHome } from '../../data-home';
import { closeCircle } from 'ionicons/icons'

import { home as homeIcon, settings as settingsIcon, planetOutline as planetIcon } from 'ionicons/icons'

import './Game.css';
import { NavButtons } from '../NavButtons';

const GameHome: React.FC = () => {
  const [present, dismiss] = useIonLoading();
  return (
    <IonPage>
      <IonHeader>
      <IonToolbar className="toolbar-home">
      <IonButtons slot="start">
            <IonBackButton/>
          </IonButtons>
         <div className='home-div-logo '>
       
              <h4 className='home-text-logo padding-menu-others'><img className='home-logo' src="../assets/flor.png" alt="" /> Québécois Trivia </h4>
              {/* <IonButtons className="menu"  slot="right">
              <NavButtons />
            </IonButtons> */}
            </div>
   
          </IonToolbar>
      </IonHeader>
      <IonContent className="ion-padding home-content">
      
        <IonList className="home-list">
        {/* <IonGrid>
            <IonRow>
              <IonCol size="6"> */}

                <IonCard button routerLink="/game-french" className="card home-card" >
                  <img src="/assets/Q-F.png" alt="" />
                  <IonCardHeader>
                    <IonCardTitle>
                      
                      <h5 className='home-title'>
                      Quebecois - French
                      </h5>
                    </IonCardTitle>
                  </IonCardHeader>

              

                </IonCard>
              {/* </IonCol> */}
              {/* <IonCol size="6"> */}
              <br />
                <IonCard button routerLink="/game-english" className="card home-card">
                  <img src="/assets/Q-E.png" alt="" />
                  <IonCardHeader>

                    <IonCardTitle>
                      <h5  className='home-title'>
                      Quebecois - English
                      </h5>
                    </IonCardTitle>
                  </IonCardHeader>
                 
                </IonCard>
              {/* </IonCol>
            </IonRow>
          </IonGrid> */}
        </IonList>

      </IonContent>
      <IonTabBar slot="bottom">
<IonTabButton tab="profile"  href="/home" >
    <IonIcon className="icons" icon={homeIcon} />
    <IonLabel className="label">Home</IonLabel>
  </IonTabButton>
  
      {/* <IonTabButton tab="settings" href="/test" >
  <IonIcon className="icons" icon={settingsIcon} />
    <IonLabel className="label">Settings</IonLabel>
  </IonTabButton> */}
      </IonTabBar>
    </IonPage>
  );
};

export default GameHome;
