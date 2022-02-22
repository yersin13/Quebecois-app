import { IonAvatar, IonBackButton, IonButton, IonButtons, IonCard, IonCardContent, IonCardHeader, IonCardTitle, IonContent, IonFabButton, IonFooter, IonHeader, IonIcon, IonImg, IonItem, IonLabel, IonList, IonPage, IonSearchbar, IonTabBar, IonTabButton, IonText, IonThumbnail, IonTitle, IonToast, IonToolbar } from '@ionic/react';
import ExploreContainer from '../components/ExploreContainer';
import { entriesExpressions } from '../data-expressions';
import { addCircle, bookmarkOutline, closeCircle, heart, trash } from 'ionicons/icons'
import { home as homeIcon, settings as settingsIcon, planetOutline as planetIcon } from 'ionicons/icons'
import './Words.css';
import { NativeAudio } from "@ionic-native/native-audio/ngx";
import { useEffect, useState } from 'react';
import { useParams } from 'react-router';

interface RouteParams {
  id: string;
}



const Expressions: React.FC = () => {
  const { id } = useParams<RouteParams>();

  const [memo, setMemo] = useState<Array<String>>([]);
  const [showToast1, setShowToast1] = useState(false)
  const [showToastErase, setShowToastErase] = useState(false)


  const [eraseBottom, setEraseBottom] = useState(false)

  const localStorageContent = localStorage.getItem('favExpressions')

  const click = (user: {
    id: string;
  }) => {


    if (localStorageContent?.match(user.id)) {
      console.log('found')

      setEraseBottom(true)
    } else {

      setShowToast1(true)

      memo.push(user.id)
      localStorage.setItem('favExpressions', JSON.stringify(memo))
      setEraseBottom(true)
    }

  }


  useEffect(() => {


    if (localStorageContent === null) {



    } else if (localStorageContent) {

      setMemo(JSON.parse(localStorageContent))
      console.log(memo)
      if (localStorageContent?.match(id)) {
        setEraseBottom(true)
      } else {
        setEraseBottom(false)
      }
    }


  }, [localStorageContent]);

  const eraser = (user: {
    id: string;
  }) => {
    if (localStorageContent === null) {

    } else if (localStorageContent) {
      let arr = JSON.parse(localStorageContent).filter((e: string) => e !== user.id); // will return ['A', 'C']) 
      localStorage.setItem('favExpressions', JSON.stringify(arr))
      setEraseBottom(false)
      console.log(memo)
      setShowToastErase(true)
    }
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
          {entriesExpressions.filter((entry) => {
            if (entry.id === id)
              return entry
          }).map((entry) =>
            <IonCard className=" card-item white">

              <IonCardContent>
                <div className='position-item'>
                  {eraseBottom ?

                    <IonFabButton color="light"  key={entry.id} className="fav-word-item" onClick={() => { eraser(entry) }} >
                      <IonIcon color="danger" className="fav-chip" icon={heart} />
                      {/* <IonIcon className="fav-chip2" icon={trash} /> */}

                    </IonFabButton>
                    :
                    <IonFabButton key={entry.id} className="fav-word-item" onClick={() => { click(entry) }} >

                      <IonIcon className="fav-chip" icon={heart} />
                      <IonIcon className="fav-chip2" icon={addCircle} />
                    </IonFabButton>
                  }
                </div>
                <br />
                <br />
               
                <br />

                <audio controls >
                  {entry.src ? <source src={entry.src}></source> : "no"}
                </audio>

                <br />
                <br />
                <img src={entry.img ? entry.img : "./assets/qcflag.png"} alt="" />
                <div className="expression-list-item">
                  <img className="expression-icon" src="./assets/qcflag.png" alt="" />
                  <h1 className="expression-header text bold">{entry.quebec}</h1>
                </div>
                <p className="text example" >{entry.example}</p>
                <br />


                <div className="expression-list-item">
                  <img className="expression-icon" src="./assets/usa.png" alt="" />
                  <h2 className="text">English:</h2>
                </div>

                <p className="text">{entry.english}</p>

                <br />

                <div className="expression-list-item">
                  <img className="expression-icon" src="./assets/france.png" alt="" />
                  <h2 className="text">French:</h2>
                </div>

                <p className="text" >{entry.french}</p>


              </IonCardContent>
            </IonCard>
          )}

        </IonList>
        <IonToast

          isOpen={showToast1}
          onDidDismiss={() => { setShowToast1(false) }}
          message="Expression has been saved in Fav"
          duration={400}
          color="warning "

        />
        <IonToast

          isOpen={showToastErase}
          onDidDismiss={() => { setShowToastErase(false) }}
          message="Expression has been removed from fav"
          duration={400}
          color="danger "

        />


      </IonContent>

      {/* <IonTabBar slot="bottom">
        <IonTabButton tab="profile" href="/home" >
          <IonIcon className="icons" icon={homeIcon} />
          <IonLabel className="label">Home</IonLabel>
        </IonTabButton> */}

      {/* <IonTabButton tab="settings" href="/settings" >
          <IonIcon className="icons" icon={settingsIcon} />
          <IonLabel className="label">Settings</IonLabel>
        </IonTabButton> */}
      {/* </IonTabBar> */}

    </IonPage>
  );
};

export default Expressions;
