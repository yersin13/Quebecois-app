import { IonAvatar, IonBackButton, IonButton, IonButtons, IonCard, IonCardContent, IonCardHeader, IonCardTitle, IonChip, IonCol, IonContent, IonFab, IonFabButton, IonFabList, IonFooter, IonGrid, IonHeader, IonIcon, IonImg, IonItem, IonLabel, IonList, IonPage, IonRow, IonSearchbar, IonTabBar, IonTabButton, IonText, IonThumbnail, IonTitle, IonToast, IonToolbar, useIonLoading } from '@ionic/react';
import { add, addCircle, arrowDown, arrowDownCircle, arrowDownCircleOutline, bookmarkOutline, chatbubblesOutline, chevronDownCircleOutline, closeCircle, downloadOutline, headsetSharp, heart, heartDislike, heartOutline, share, shareSocial, star, starHalfSharp, starOutline, starSharp, trash } from 'ionicons/icons'
import { home as homeIcon, settings as settingsIcon, planetOutline as planetIcon } from 'ionicons/icons'
import './Lessons.css';
import { useCallback, useEffect, useRef, useState } from 'react';
import { useParams } from 'react-router';
import { facts } from '../../data-lessons';
// import * as htmlToImage from 'html-to-image';


interface RouteParams {
  id: string;

}



const FactsQ: React.FC = () => {

  const [color, setColor] = useState(false)
  const theme = localStorage.getItem('theme')

  useEffect(() => {
    if (theme?.match("dark")) {

      setColor(true)

    } else if (theme?.match("light")) {

      setColor(false)


    }
  })
  const { id } = useParams<RouteParams>();

  const [memo, setMemo] = useState<Array<String>>([]);
  const [showToast1, setShowToast1] = useState(false)
  const [showToastErase, setShowToastErase] = useState(false)
  const [showToastDow, setShowToastDown] = useState(false)



  const [eraseBottom, setEraseBottom] = useState(false)

  const [present, dismiss] = useIonLoading();


  const localStorageContent = localStorage.getItem('favWords')
  const ref = useRef<HTMLDivElement>(null)





  return (
    <IonPage>
      <IonHeader>

        <IonToolbar className="toolbar">
          <IonButtons slot="start">
            <IonBackButton color='light' />
          </IonButtons>
          <div className='home-div-logo '>
            <h4 className='home-text-logo padding-menu-others '><img className='home-logo' src="../assets/flor.png" alt="" /> Facts Québécois</h4>
          </div>

        </IonToolbar>
      </IonHeader>
      <IonContent>

        <IonList>
          <br />
          <IonGrid className='home-grid'>
            <IonRow>
            {facts.map((entry) =>
          
<IonCol size="6" className="home-col">

<IonCard button
onClick={() => {
  present({
    message: 'Loading...',
    duration: 300
  })
}}
routerLink={`/facts/${entry.id}`} className="card home-card " >

  <IonCardHeader>
  <img src={entry.img} alt="" className='fact-img' />
  <h4 className='home-title font fact-text'>
      {entry.name}
      
      </h4>
    <IonCardTitle>

    
    </IonCardTitle>
  </IonCardHeader>



</IonCard>
</IonCol>


          )}
              
             
            </IonRow>
          </IonGrid>

          {/* {facts.map((entry) =>
            <IonItem button
              onClick={() => {
                present({
                  message: 'Loading...',
                  duration: 300
                })
              }} routerLink={`/facts/${entry.id}`} className="expressions-item card fact-card">
              <h1 className='font  fact-title'>{entry.name}</h1>
              <IonThumbnail slot='end'>
                <img src={entry.img} alt="" />
              </IonThumbnail>
            </IonItem>



          )} */}

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

export default FactsQ;
