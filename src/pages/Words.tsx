import { IonAvatar, IonBackButton, IonButton, IonButtons, IonCard, IonCardContent, IonCardHeader, IonCardTitle, IonContent, IonFabButton, IonFooter, IonHeader, IonIcon, IonImg, IonItem, IonLabel, IonList, IonPage, IonSearchbar, IonTabBar, IonTabButton, IonText, IonThumbnail, IonTitle, IonToast, IonToolbar } from '@ionic/react';
import ExploreContainer from '../components/ExploreContainer';
import { entriesWords } from '../data-words';
import { addCircle, bookmarkOutline, chatbubblesOutline, closeCircle, trash } from 'ionicons/icons'
import { home as homeIcon, settings as settingsIcon, planetOutline as planetIcon } from 'ionicons/icons'
import './Words.css';
import { useEffect, useState } from 'react';
import { useParams } from 'react-router';

interface RouteParams {
  id: string;
}

const Words: React.FC = () => {
  const { id } = useParams<RouteParams>();

  const [memo, setMemo] = useState<Array<String>>([]);
  const [showToast1, setShowToast1] = useState(false)
  const [showToastErase, setShowToastErase] = useState(false)


  const [eraseBottom, setEraseBottom] = useState(false)

  const localStorageContent = localStorage.getItem('favWords')

  const click = (user: {
    id: string;
  }) => {


    if (localStorageContent?.match(user.id)) {
      console.log('found')
     
      setEraseBottom(false)
    } else {

      setShowToast1(true)

      memo.push(user.id)
      localStorage.setItem('favWords', JSON.stringify(memo))
      setEraseBottom(false)
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
        // setEraseBottom(false)
      }
    }


  }, [localStorageContent]);

  const eraser = (user: {
    id: string;
  }) => {
    if (localStorageContent === null) {

    } else if (localStorageContent) {
      let arr = JSON.parse(localStorageContent).filter((e: string) => e !== user.id); // will return ['A', 'C']) 
      localStorage.setItem('favWords', JSON.stringify(arr))
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
            <IonBackButton />
          </IonButtons>


        </IonToolbar>
      </IonHeader>
      <IonContent>

        <IonList>
          {entriesWords.filter((entry) => {
            if (entry.id === id)
              return entry
          }).map((entry) =>
            <IonCard className="card-item ">

              <IonCardContent>
                <div className='position-item'>

                  {eraseBottom ?

                    <IonFabButton color="danger" key={entry.id} className="fav-word-item" onClick={() => { eraser(entry) }} >
                      <IonIcon className="fav-chip" icon={bookmarkOutline} />
                      <IonIcon className="fav-chip2" icon={trash} />

                    </IonFabButton>
                    :
                    <IonFabButton key={entry.id} className="fav-word-item" onClick={() => { click(entry) }} >

                      <IonIcon className="fav-chip" icon={bookmarkOutline} />
                      <IonIcon className="fav-chip2" icon={addCircle} />
                    </IonFabButton>
                  }

                </div>
                <div className="expression-list-item">
                  <img className="expression-icon" src="./assets/qcflag.png" alt="" />

                  <h1 className="expression-header text bold">{entry.quebec}</h1>
                </div>
                <br />
                <img className="expression-img" src={entry.src ? entry.src : "./assets/qcflag.png"} alt="" />
                <br />

                <br />



                <div className="expression-list-item">
                  <img className="expression-icon" src="./assets/usa.png" alt="" />
                  <h2 className="text">English:</h2>
                </div>

                <p className="text">{entry.englishMeaning}</p>
                <ul className="expression-list-item">
                  <h3 className="expression-header text bold">- {entry.english}</h3>
                </ul>

                <div className="expression-list-item">
                  <img className="expression-icon" src="./assets/france.png" alt="" />
                  <h2 className="text">French:</h2>
                </div>

                <p className="text" >{entry.frenchMeaning}</p>
                <ul className="expression-list-item">
                  <h3 className="expression-header text bold">- {entry.french}</h3>
                </ul>


              </IonCardContent>

            </IonCard>
          )}
          <IonToast

            isOpen={showToast1}
            onDidDismiss={() => { setShowToast1(false) }}
            message="Word has been saved in Fav"
            duration={400}
            color="dark "

          />
        
          <IonToast

            isOpen={showToastErase}
            onDidDismiss={() => { setShowToastErase(false) }}
            message="Word has been removed from fav"
            duration={400}
            color="danger "

          />
        </IonList>



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

export default Words;
