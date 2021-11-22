import { IonAvatar, IonButton, IonCard, IonCardContent, IonCardTitle, IonContent, IonHeader, IonIcon, IonImg, IonItem, IonLabel, IonList, IonPage, IonTabBar, IonTabButton, IonText, IonThumbnail, IonTitle, IonToolbar } from '@ionic/react';
import ExploreContainer from '../components/ExploreContainer';
import { entriesHome } from '../data-home';
import { closeCircle } from 'ionicons/icons'
import './Home.css';
import { home as homeIcon, settings as settingsIcon, planetOutline as planetIcon } from 'ionicons/icons'
const Home: React.FC = () => {
  return (
    <IonPage>
      <IonHeader>
        <IonToolbar className="toolbar">
          <div className="toolbar-div">
          <h2>Learn Quebecois   </h2>
          <div className="logo" >
          <img src="../assets/QC1.png" alt="" />
          </div>
      
          </div>
         
        </IonToolbar>
      </IonHeader>
      <IonContent className="ion-padding home-content">
       
        <IonList className="home-list">
          {entriesHome.map((entry)=>
            <IonCard className="home-card">
<IonItem button routerLink={entry.route} className="home-item" lines="none">

            <IonThumbnail className="home-thumbnail" slot="end">
              <IonImg className="home-item-img" src={entry.src}  />
            </IonThumbnail>
            <div className="home-item-div">
              <h4>{entry.title}</h4>
              <IonText className="home-text">{entry.description}</IonText>
            </div>
            
          </IonItem>
          </IonCard>
          )}
          
        
        </IonList>
       
      </IonContent>
      <IonTabBar slot="bottom">
<IonTabButton tab="profile"  href="/home" >
    <IonIcon className="icons" icon={homeIcon} />
    <IonLabel className="label">Home</IonLabel>
  </IonTabButton>
  
  <IonTabButton tab="settings" href="/test" >
  <IonIcon className="icons" icon={settingsIcon} />
    <IonLabel className="label">Settings</IonLabel>
  </IonTabButton>
</IonTabBar>
    </IonPage>
  );
};

export default Home;
