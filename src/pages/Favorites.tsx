import { IonAvatar, IonBackButton, IonButton, IonButtons, IonCard, IonCardContent, IonCardHeader, IonCardTitle, IonContent, IonHeader, IonIcon, IonImg, IonItem, IonLabel, IonList, IonPage, IonTabBar, IonTabButton, IonText, IonThumbnail, IonTitle, IonToolbar } from '@ionic/react';
import ExploreContainer from '../components/ExploreContainer';
import { entriesHome } from '../data-home';
import { closeCircle } from 'ionicons/icons'
import { home as homeIcon, settings as settingsIcon, planetOutline as planetIcon } from 'ionicons/icons'
import './Overview.css';
import { useEffect, useState } from 'react';


const Favorites: React.FC = () => {
  const [memo, setMemo] = useState<Array<String>>([]);
const [noItem, setNoItem] = useState(false)


  useEffect(() => {
  
    
    const localStorageContent = localStorage.getItem('favWord')
    if (localStorageContent === null) {
      setNoItem(true)

    } else if (localStorageContent) {

      setMemo(JSON.parse(localStorageContent))
      console.log(memo)
    }

 
  }, []);
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
      {noItem? 
      <IonList className="overview-list">
          
         <p>no items</p>
        
        </IonList>:
           <IonList className="overview-list">
          
         <p>Items many</p>
        
           </IonList>
}
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

export default Favorites;
