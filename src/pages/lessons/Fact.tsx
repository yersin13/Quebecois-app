import { IonAvatar, IonBackButton, IonButton, IonButtons, IonCard, IonCardContent, IonCardHeader, IonCardTitle, IonChip, IonContent, IonFab, IonFabButton, IonFabList, IonFooter, IonHeader, IonIcon, IonImg, IonItem, IonLabel, IonList, IonPage, IonSearchbar, IonTabBar, IonTabButton, IonText, IonThumbnail, IonTitle, IonToast, IonToolbar } from '@ionic/react';

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



const Fact: React.FC = () => {

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
          {facts.filter((entry) => {
            if (entry.id === id)
              return entry
          }).map((entry) =>

            <div className='shared-div' >
              <IonCard className={color ? 'card-dark ' : "card-white "} >

                <IonCardContent  >


                  <h1 className={color ? 'text-dark ' : "text-white "}>{entry.name}</h1>
                  <br />
                  <p className={color ? 'text-dark ' : "text-white "}>{entry.p1}</p>
                  <br />
                  <p className={color ? 'text-dark ' : "text-white "}>{entry?.p2}</p>
                  {entry.p2 ? <br /> : <></>}
                  <p className={color ? 'text-dark ' : "text-white "}>{entry?.p3}</p>
                  {/* {entry.p3 ? <br /> : <></>} */}
                  <ul>
                  {entry?.ex1 ? <li className={color ? 'text-dark ' : "text-white "}><b>{entry.ex1}</b></li> : <></>}
                  {entry?.ex2 ? <li className={color ? 'text-dark ' : "text-white "}><b>{entry.ex2}</b></li> : <></>}
                  </ul>

                  <img src={entry.img} alt="" />




                </IonCardContent>

              </IonCard>


            </div>

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

export default Fact;
