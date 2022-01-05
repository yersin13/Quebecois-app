import { IonAvatar, IonBackButton, IonButton, IonButtons, IonCard, IonCardContent, IonCardHeader, IonCardTitle, IonContent, IonFooter, IonHeader, IonIcon, IonImg, IonItem, IonLabel, IonList, IonPage, IonSearchbar, IonTabBar, IonTabButton, IonText, IonThumbnail, IonTitle, IonToolbar } from '@ionic/react';
import ExploreContainer from '../components/ExploreContainer';
import { entriesWords } from '../data-words';
import { closeCircle } from 'ionicons/icons'
import { home as homeIcon, settings as settingsIcon, planetOutline as planetIcon } from 'ionicons/icons'
import './Words.css';
import { useState } from 'react';
import { useParams } from 'react-router';

interface RouteParams {
  id: string;
}

const Words: React.FC = () => {
  const { id } = useParams<RouteParams>();

  return (
    <IonPage>
      <IonHeader>

        <IonToolbar className="toolbar">
          <IonButtons slot="start">
            <IonBackButton />
          </IonButtons>


        </IonToolbar>
      </IonHeader>
      <IonContent>

        <IonList>
          {entriesWords.filter((entry) => {
            if (entry.id === id)
              return entry
          }).map((entry) =>
            <IonCard className="card-item">

              <IonCardContent>
              <div className="expression-list-item">
                  <img className="expression-icon" src="./assets/qcflag.png" alt="" />
                  <h1 className="expression-header text bold">{entry.quebec}</h1>
         </div>
         <br />
                <img className="expression-img" src={entry.src} alt="" />
                <br />
               
         <br />

            

                <div className="expression-list-item">
                  <img className="expression-icon" src="./assets/usa.png" alt="" />
                  <h2 className="text">English:</h2>
                </div>

                <p className="text">{entry.englishMeaning}</p>
                <ul className="expression-list-item">
                  <h3 className="expression-header text bold">- {entry.english}</h3>
                </ul>

                <div className="expression-list-item">
                  <img className="expression-icon" src="./assets/france.png" alt="" />
                  <h2 className="text">French:</h2>
                </div>

                <p className="text" >{entry.frenchMeaning}</p>
                <ul className="expression-list-item">
                  <h3 className="expression-header text bold">- {entry.french}</h3>
                </ul>

              </IonCardContent>
            </IonCard>
          )}

        </IonList>



      </IonContent>
      {/* <IonTabBar slot="bottom">
        <IonTabButton tab="profile" href="/home" >
          <IonIcon className="icons" icon={homeIcon} />
          <IonLabel className="label">Home</IonLabel>
        </IonTabButton> */}

        {/* <IonTabButton tab="settings" href="/settings" >
          <IonIcon className="icons" icon={settingsIcon} />
          <IonLabel className="label">Settings</IonLabel>
        </IonTabButton> */}
      {/* </IonTabBar> */}

    </IonPage>
  );
};

export default Words;
