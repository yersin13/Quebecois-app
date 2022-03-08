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
            <IonBackButton color='light'/>
          </IonButtons>
      
         
        </IonToolbar>
      </IonHeader>
      <IonContent>
      <IonList className="overview-list">
          
            <IonCard className="card-item white">

              
      
         <IonCardHeader>
           <IonCardTitle>
             <h3  className="overview-title ">   Québécois Overview</h3>
             <img className="overview-img" src="./assets/overview.jpg"  />
             
           </IonCardTitle>
         </IonCardHeader>
            <IonCardContent >
            <p className="overview-content-text">
            Quebec French (French: français québécois also known as Québécois French or Québécois) is the predominant variety of French spoken in Canada, in its formal and informal registers. It is the dominant language of the province of Quebec, used in everyday communication, in education, the media, and government.
            </p>
            <br />
            <p className="overview-content-text">
            Canadian French is a common umbrella term to describe all varieties of French used in Canada, including Quebec French. Formerly it was used to refer solely to Quebec French and the closely related dialects spoken in Ontario and Western Canada, in contrast with Acadian French, which is spoken in some areas of eastern Quebec (Gaspé Peninsula), New Brunswick, and in other parts of Atlantic Canada.
            </p>
            <br />
            <p className="overview-content-text">
            The term "joual" is commonly used to refer to Quebec French (when considered a basilect) associated with the working class, characterized by certain features often perceived as incorrect or bad. Its equivalent in Acadian French is called Chiac.
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
  
  
</IonTabBar>
    </IonPage>
  );
};

export default Overview;
