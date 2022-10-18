import { IonAvatar, IonBackButton, IonButton, IonButtons, IonCard, IonCardContent, IonCardHeader, IonCardTitle, IonChip, IonContent, IonFab, IonFabButton, IonFabList, IonFooter, IonHeader, IonIcon, IonImg, IonItem, IonLabel, IonList, IonPage, IonSearchbar, IonSlide, IonSlides, IonTabBar, IonTabButton, IonText, IonThumbnail, IonTitle, IonToast, IonToolbar } from '@ionic/react';

import { add, addCircle, arrowBackOutline, arrowDown, arrowDownCircle, arrowDownCircleOutline, arrowForwardOutline, arrowUp, bookmarkOutline, chatbubblesOutline, chevronDownCircleOutline, closeCircle, downloadOutline, headsetSharp, heart, heartDislike, heartOutline, play, share, shareSocial, star, starHalfSharp, starOutline, starSharp, trash } from 'ionicons/icons'
import { home as homeIcon, settings as settingsIcon, planetOutline as planetIcon } from 'ionicons/icons'
import './Lessons.css';
import { useCallback, useEffect, useRef, useState } from 'react';
import { useParams } from 'react-router';
import { facts, lesson1 } from '../../data-lessons';

// Styles must use direct files imports



interface RouteParams {
  id: string;

}



// Import Swiper styles
// import "swiper/css";
// import "swiper/css/pagination";
// import "swiper/css/navigation";


// import required modules

const Lesson1: React.FC = () => {


  const slideOpts = {
    initialSlide: 1,
    // autoplay:true,
    // pagination: {
    //   el: '.swiper-pagination',
    //   clickable: true,
    //   renderBullet: function (index: number, className: string) {
    //     return '<span class="' + className + '">' + (index + 1) + '</span>';
    //   },
    // },
    speed: 400
  };
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


  function playAudio(entry: any | undefined) {
    new Audio(entry.src).play();
  }



  return (
    <IonPage>
      <IonHeader>

        <IonToolbar className="toolbar">
          <IonButtons slot="start">
            <IonBackButton color='light' />
          </IonButtons>


        </IonToolbar>
      </IonHeader>
      <IonContent>

        <IonList>
      
 
        <div>
<div className=''>
 
  <h1  className={color? 'lesson-main-title text-dark ': 'lesson-main-title text-white '}>Restaurant Vocabulary</h1>

</div>
<br />


  {lesson1.map((entry) =>
  

      <div className='div-item-lesson-dark' >
  
       
   <h1 className='text-dark module-title'>{entry.module}</h1>
        <IonItem lines='none' >
          
          <div className='container-fab'>

       
            
            <img className='img-lesson' src={entry.img} alt="" />
            <IonFab className='fab-lesson1'  >
              <IonFabButton onClick={() => playAudio(new Audio(entry.src1).play())}><IonIcon icon={play} /></IonFabButton>
            </IonFab>
            <IonFab className='fab-lesson2'  >
              <IonFabButton onClick={() => playAudio(new Audio(entry.src2).play())}><IonIcon icon={play} /></IonFabButton>
            </IonFab>
          </div>

        </IonItem>
        <IonItem >
          <div>
  

            <br />
            <p className='text-dark '>{entry.p1}</p>


            {entry.quebec1 ? <>  <IonItem className='card' onClick={() => playAudio(new Audio(entry.src1).play())}>
              <p className='text-dark '><b>{entry.quebec1}</b></p>
            </IonItem>
              <IonItem>
                <p className='text-dark '><b>{entry.english1}</b></p>
              </IonItem></> : <></>}
            {entry.quebec2 ? <br /> : <></>}
            {/*  */}
            {entry.quebec2 ? <>  <IonItem className='card' onClick={() => playAudio(new Audio(entry.src2).play())}>
              <p className='text-dark '><b>{entry.quebec2}</b></p>
            </IonItem>
              <IonItem>
                <p className='text-dark '><b>{entry.english2}</b></p>
              </IonItem></> : <></>}
            {entry.quebec3 ? <br /> : <></>}

            {entry.quebec3 ? <>  <IonItem className='card'>
              <p className='text-dark '><b>{entry.quebec3}</b></p>
            </IonItem>
              <IonItem>
                <p className='text-dark '><b>{entry.english3}</b></p>
              </IonItem></> : <></>}
            {entry.quebec3 ? <br /> : <></>}

            {entry.quebec4 ? <>  <IonItem className='card'>
              <p className= 'text-dark ' ><b>{entry.quebec4}</b></p>
            </IonItem>
              <IonItem>
                <p className='text-dark '><b>{entry.english4}</b></p>
              </IonItem></> : <></>}
       
          </div>

        </IonItem>
       
      </div>




  )}


</div>


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

export default Lesson1;
