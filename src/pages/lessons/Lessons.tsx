import { IonAvatar, IonBackButton, IonButton, IonButtons, IonCard, IonCardContent, IonCardHeader, IonCardTitle, IonChip, IonContent, IonFab, IonFabButton, IonFabList, IonFooter, IonHeader, IonIcon, IonImg, IonItem, IonLabel, IonList, IonPage, IonSearchbar, IonTabBar, IonTabButton, IonText, IonThumbnail, IonTitle, IonToast, IonToolbar, useIonLoading } from '@ionic/react';
import { add, addCircle, arrowDown, arrowDownCircle, arrowDownCircleOutline, bookmarkOutline, chatbubblesOutline, chevronDownCircleOutline, closeCircle, downloadOutline, headsetSharp, heart, heartDislike, heartOutline, share, shareSocial, star, starHalfSharp, starOutline, starSharp, trash } from 'ionicons/icons'
import { home as homeIcon, settings as settingsIcon, planetOutline as planetIcon } from 'ionicons/icons'
import './Lessons.css';
import { useCallback, useEffect, useRef, useState } from 'react';
import { useParams } from 'react-router';
// import * as htmlToImage from 'html-to-image';


interface RouteParams {
  id: string;

}



const Lessons: React.FC = () => {
  const [present, dismiss] = useIonLoading();
  const [color, setColor] = useState(false)
const theme = localStorage.getItem('theme')

useEffect(()=>{
  if (theme?.match("dark")) {
   
    setColor(true)

  } else if (theme?.match("light")) {
    
    setColor(false)
 
    
  }
})  
  const { id } = useParams<RouteParams>();



  return (
    <IonPage>
      <IonHeader>

        <IonToolbar className="toolbar">
          <IonButtons slot="start">
            <IonBackButton color='light' />
          </IonButtons>
          <div className='home-div-logo '>
            <h4 className='home-text-logo padding-menu-others '><img className='home-logo' src="../assets/flor.png" alt="" /> Lessons Québécois</h4>
          </div>

        </IonToolbar>
      </IonHeader>
      <IonContent>

        <IonList>
<IonItem  button
       onClick={() => {
         present({
           message: 'Loading...',
           duration: 300
         })
       }} routerLink="/facts/" className="expressions-item">
  <h1>Facts Quebecois</h1>
  <IonThumbnail slot='end'>
  <img src="/assets/images-main/facts.png" alt="" />
  </IonThumbnail>
</IonItem>
        </IonList>



      </IonContent>
      <IonTabBar slot="bottom">
        <IonTabButton tab="profile" href="/home" >
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

export default Lessons;
