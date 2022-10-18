import { IonAvatar, IonBackButton, IonButton, IonButtons, IonCard, IonCardContent, IonCardHeader, IonCardSubtitle, IonCardTitle, IonChip, IonCol, IonContent, IonFab, IonFabButton, IonFabList, IonFooter, IonGrid, IonHeader, IonIcon, IonImg, IonItem, IonLabel, IonList, IonPage, IonRow, IonSearchbar, IonSlide, IonSlides, IonTabBar, IonTabButton, IonText, IonThumbnail, IonTitle, IonToast, IonToolbar, useIonLoading } from '@ionic/react';
import { add, addCircle, arrowDown, arrowDownCircle, arrowDownCircleOutline, bookmarkOutline, chatbubblesOutline, chevronDownCircleOutline, closeCircle, downloadOutline, headsetSharp, heart, heartDislike, heartOutline, share, shareSocial, star, starHalfSharp, starOutline, starSharp, trash } from 'ionicons/icons'
import { home as homeIcon, settings as settingsIcon, planetOutline as planetIcon, walkOutline } from 'ionicons/icons'
import './Lessons.css';
import { useCallback, useEffect, useRef, useState } from 'react';
import { useParams } from 'react-router';
import { facts, lesson1, lessons } from '../../data-lessons';
// import * as htmlToImage from 'html-to-image';


interface RouteParams {
  id: string;

}



const Lessons: React.FC = () => {
  const [present, dismiss] = useIonLoading();
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

  const slideOpts = {
    initialSlide:1,
    slidesPerView: 3,
    // coverflowEffect: {
    //   rotate: 50,
    //   stretch: 0,
    //   depth: 100,
    //   modifier: 1,
    //   slideShadows: true,
    // },
    speed: 400
  };

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
          {/* <IonItem lines='none' button
            onClick={() => {
              present({
                message: 'Loading...',
                duration: 300
              })
            }} routerLink="/facts/" className=" card fact-card card-lesson">
            <h1 className='fact-title font '>Facts Québécois</h1>
            <IonThumbnail slot='end'>
              <img src="/assets/images-main/facts/facts.jpg" alt="" />
            </IonThumbnail>
          </IonItem> */}
<IonItem lines='none'>
  <h1>Facts Quebecois</h1>
</IonItem>
       
              <IonSlides pager={true} options={slideOpts}
                slot="">
               
                {facts.map((entry) =>


<IonSlide>
<IonCard button
    onClick={() => {
      present({
        message: 'Loading...',
        duration: 300
      })
    }}
    routerLink={`/facts/${entry.id}`} className=" card-fact " >

      <img src={entry.img} alt="" className='' />
  



  </IonCard>
  </IonSlide>




)}
             
              </IonSlides>
             


          <br />
          <IonItem lines='none'>
        
              <h1>Lessons</h1>
              {/* <p>(This part is still in progress)... <IonIcon icon={walkOutline} /></p> */}
            

          </IonItem>




          {lessons.map((entry) =>

            <IonCard className="card card-lesson " routerLink={`/lessons/${entry.link}`}>
              <img src={entry.img} alt="" className='' />
              <IonCardHeader>
                <IonCardSubtitle  className="text-dark">Lesson:</IonCardSubtitle>
                <IonCardTitle className="text-dark"> {entry.name}</IonCardTitle>
              </IonCardHeader>
              <IonCardContent  className="text-dark">
                {entry.description}
              </IonCardContent>
              <br />




            </IonCard>



          )}








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
