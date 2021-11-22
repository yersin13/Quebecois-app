import { IonAvatar, IonBackButton, IonButton, IonButtons, IonCard, IonCardContent, IonCardHeader, IonCardTitle, IonContent, IonFooter, IonHeader, IonIcon, IonImg, IonItem, IonLabel, IonList, IonPage, IonSearchbar, IonTabBar, IonTabButton, IonText, IonThumbnail, IonTitle, IonToolbar } from '@ionic/react';
import ExploreContainer from '../components/ExploreContainer';
import { entriesExpressions } from '../data-expressions';
import { closeCircle } from 'ionicons/icons'
import { home as homeIcon, settings as settingsIcon, planetOutline as planetIcon } from 'ionicons/icons'
import './ExpressionsList.css';
import { useState } from 'react';

const ExpressionsList: React.FC = () => {
  const [searchText, setSearchText] = useState('');

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
      <IonSearchbar className="expressions-search" value={searchText} onIonChange={e => setSearchText(e.detail.value!)}></IonSearchbar>
      <IonList>
      {entriesExpressions.filter((entry)=>{
if (searchText == ""){
  return entry
} else if (entry.quebec.toLocaleLowerCase().includes(searchText.toLocaleLowerCase()))
    return entry  }).map((entry)=>
       <IonItem button routerLink={`/expressions-list/${entry.id}`} className="expressions-item">
       <IonLabel ><h1 className="expressions-text">{entry.quebec}</h1></IonLabel>
       <IonThumbnail>
      <img className="expressions-img" src={entry.src} alt="" />
      </IonThumbnail>
     
     </IonItem>
          )}
      
      </IonList>
          
        
   
      </IonContent>
      <IonTabBar slot="bottom">
<IonTabButton tab="profile"  href="/home" >
    <IonIcon className="icons" icon={homeIcon} />
    <IonLabel className="label">Home</IonLabel>
  </IonTabButton>
  
  <IonTabButton tab="settings" href="/settings" >
  <IonIcon className="icons" icon={settingsIcon} />
    <IonLabel className="label">Settings</IonLabel>
  </IonTabButton>
</IonTabBar>

    </IonPage>
  );
};

export default ExpressionsList;
