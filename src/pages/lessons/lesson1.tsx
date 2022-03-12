import { IonAvatar, IonBackButton, IonButton, IonButtons, IonCard, IonCardContent, IonCardHeader, IonCardTitle, IonChip, IonContent, IonFab, IonFabButton, IonFabList, IonFooter, IonHeader, IonIcon, IonImg, IonItem, IonLabel, IonList, IonPage, IonSearchbar, IonSlide, IonSlides, IonTabBar, IonTabButton, IonText, IonThumbnail, IonTitle, IonToast, IonToolbar } from '@ionic/react';

import { add, addCircle, arrowDown, arrowDownCircle, arrowDownCircleOutline, arrowForwardOutline, arrowUp, bookmarkOutline, chatbubblesOutline, chevronDownCircleOutline, closeCircle, downloadOutline, headsetSharp, heart, heartDislike, heartOutline, play, share, shareSocial, star, starHalfSharp, starOutline, starSharp, trash } from 'ionicons/icons'
import { home as homeIcon, settings as settingsIcon, planetOutline as planetIcon } from 'ionicons/icons'
import './Lessons.css';
import { useCallback, useEffect, useRef, useState } from 'react';
import { useParams } from 'react-router';
import { facts, lesson1 } from '../../data-lessons';
// import * as htmlToImage from 'html-to-image';


interface RouteParams {
  id: string;

}



const Lesson1: React.FC = () => {


  const slideOpts = {
    initialSlide: 1,
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
            <IonSlides pager={true} options={slideOpts}>
              {lesson1.map((entry) =>
                <IonSlide className='lesson-slide'>
                  <div>




                    <IonItem >
                      <div className='container-fab'>
                        <img src={entry.img} alt="" />
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
                        {/* <h1 className={color ? 'text-dark ' : "text-white "}>{entry.name}</h1> */}

                        <br />
                        <p className={color ? 'text-dark ' : "text-white "}>{entry.p1}</p>


                        {entry.quebec1 ? <>  <IonItem className='card' onClick={() => playAudio(new Audio(entry.src1).play())}>
                          <p className={color ? 'text-dark ' : "text-white "}><b>{entry.quebec1}</b></p>
                        </IonItem>
                          <IonItem>
                            <p className={color ? 'text-dark ' : "text-white "}><b>{entry.english1}</b></p>
                          </IonItem></> : <></>}
                        {entry.quebec2 ? <br /> : <></>}
{/*  */}
                        {entry.quebec2 ? <>  <IonItem className='card' onClick={() => playAudio(new Audio(entry.src2).play())}>
                          <p className={color ? 'text-dark ' : "text-white "}><b>{entry.quebec2}</b></p>
                        </IonItem>
                          <IonItem>
                            <p className={color ? 'text-dark ' : "text-white "}><b>{entry.english2}</b></p>
                          </IonItem></> : <></>}
                        {entry.quebec3 ? <br /> : <></>}

                        {entry.quebec3 ? <>  <IonItem className='card'>
                          <p className={color ? 'text-dark ' : "text-white "}><b>{entry.quebec3}</b></p>
                        </IonItem>
                          <IonItem>
                            <p className={color ? 'text-dark ' : "text-white "}><b>{entry.english3}</b></p>
                          </IonItem></> : <></>}
                        {entry.quebec3 ? <br /> : <></>}

                        {entry.quebec4 ? <>  <IonItem className='card'>
                          <p className={color ? 'text-dark ' : "text-white "}><b>{entry.quebec4}</b></p>
                        </IonItem>
                          <IonItem>
                            <p className={color ? 'text-dark ' : "text-white "}><b>{entry.english4}</b></p>
                          </IonItem></> : <></>}
                       
                      </div>

                    </IonItem>
     
                  </div>

                </IonSlide>


              )}

            </IonSlides>
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
