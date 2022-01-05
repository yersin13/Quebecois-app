import { IonAvatar, IonBackButton, IonButton, IonButtons, IonCard, IonCardContent, IonCardHeader, IonCardTitle, IonContent, IonHeader, IonIcon, IonImg, IonItem, IonLabel, IonList, IonPage, IonTabBar, IonTabButton, IonText, IonThumbnail, IonTitle, IonToolbar } from '@ionic/react';
import ExploreContainer from '../components/ExploreContainer';
import { entriesHome } from '../data-home';
import { closeCircle } from 'ionicons/icons'
import { home as homeIcon, settings as settingsIcon, planetOutline as planetIcon } from 'ionicons/icons'
import './Overview.css';

const Overview: React.FC = () => {
  return (
    <IonPage>
     <IonHeader>
     
        <IonToolbar className="toolbar">
        <IonButtons slot="start">
            <IonBackButton/>
          </IonButtons>
      
         
        </IonToolbar>
      </IonHeader>
      <IonContent>
      <IonList className="overview-list">
          
            <IonCard className="card-item">

              
      
         <IonCardHeader>
           <IonCardTitle>
             <h3  className="overview-title ">   An Overview of Quebecois Slang </h3>
             <img className="overview-item-img" src="./assets/overview.jpg"  />
             
           </IonCardTitle>
         </IonCardHeader>
            <IonCardContent >
            <p className="overview-content-text">
            Although there are French speakers all over Canada, Quebec is the province with the largest number of French speakers, with more than 7.6 million people claiming to be fluent in French (94.5% of the total population).
            </p>
            <br />
            <p className="overview-content-text">
            A lot of Quebecois slang (and swear words) are rooted in Roman Catholic terminology. This is because of Quebec’s historical religious roots and the role that the Catholic Church played and continues to play in everyday life in the province.
            </p>
            <br />
            <p className="overview-content-text">
            Further, Quebecois slang incorporates a lot of English words due to Quebec’s proximity to English speakers in Canada and the United States.
            </p>
            <br />
            <p className="overview-content-text">
            As a general feature, frequently used phrases are shortened and blended together in Quebecois informal conversation. For example, t’sais (you know) comes from the phrase tu sais (you know), chuis (I am) comes from je suis (I am), and chez pas (I don’t know) comes from je ne suis pas (I don’t know).
            </p>
            </IonCardContent>
         
          </IonCard>
      
          
        
        </IonList>
        
      </IonContent>
      <IonTabBar slot="bottom">
<IonTabButton tab="profile"  href="/home" >
    <IonIcon className="icons" icon={homeIcon} />
    <IonLabel className="label">Home</IonLabel>
  </IonTabButton>
  
  {/* <IonTabButton tab="settings" href="/settings" >
  <IonIcon className="icons" icon={settingsIcon} />
    <IonLabel className="label">Settings</IonLabel>
  </IonTabButton> */}
</IonTabBar>
    </IonPage>
  );
};

export default Overview;
