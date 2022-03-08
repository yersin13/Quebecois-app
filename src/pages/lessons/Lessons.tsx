import { IonAvatar, IonBackButton, IonButton, IonButtons, IonCard, IonCardContent, IonCardHeader, IonCardTitle, IonChip, IonContent, IonFab, IonFabButton, IonFabList, IonFooter, IonHeader, IonIcon, IonImg, IonItem, IonLabel, IonList, IonPage, IonSearchbar, IonTabBar, IonTabButton, IonText, IonThumbnail, IonTitle, IonToast, IonToolbar, useIonLoading } from '@ionic/react';
import { add, addCircle, arrowDown, arrowDownCircle, arrowDownCircleOutline, bookmarkOutline, chatbubblesOutline, chevronDownCircleOutline, closeCircle, downloadOutline, headsetSharp, heart, heartDislike, heartOutline, share, shareSocial, star, starHalfSharp, starOutline, starSharp, trash } from 'ionicons/icons'
import { home as homeIcon, settings as settingsIcon, planetOutline as planetIcon, walkOutline } from 'ionicons/icons'
import './Lessons.css';
import { useCallback, useEffect, useRef, useState } from 'react';
import { useParams } from 'react-router';
import { facts } from '../../data-lessons';
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
<br />
        <IonList>
<IonItem  button
       onClick={() => {
         present({
           message: 'Loading...',
           duration: 300
         })
       }} routerLink="/facts/" className="expressions-item card fact-card">
  <h1 className='fact-title font'>Facts Québécois</h1>
  <IonThumbnail slot='end'>
  <img src="/assets/images-main/facts/facts.jpg" alt="" />
  </IonThumbnail>
</IonItem>

<br />
<IonItem>
  <div>
  <h1>Lessons</h1>
<p>(This part is still in progress)... <IonIcon icon={walkOutline} /></p>
  </div>

</IonItem>

{/* {facts.map((entry) =>
<IonCard className="card">
<img src="/assets/1.png" alt="" />
<IonCardTitle>

<h4 className='home-title font'>
{entry.name}
</h4>
</IonCardTitle>


</IonCard>
)} */}
<IonCard className="card">
<img src="/assets/1.png" alt="" />
<IonCardTitle>

<h4 className='home-title font'>
Lesson 1: At the restaurant
</h4>
<br />
</IonCardTitle>


</IonCard>

<IonCard className="card">
<img src="/assets/1.png" alt="" />
<IonCardTitle>

<h4 className='home-title font'>
Lesson 2: Shopping
</h4>
<br />
</IonCardTitle>

</IonCard>
<IonCard className="card">
<img src="/assets/1.png" alt="" />
<IonCardTitle>

<h4 className='home-title font'>
Lesson 3: Car Vocabulary
</h4>
<br />
</IonCardTitle>

</IonCard>
<IonCard className="card">
<img src="/assets/1.png" alt="" />
<IonCardTitle>

<h4 className='home-title font'>
Lesson 4: 
</h4>
<br />
</IonCardTitle>

</IonCard>

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
