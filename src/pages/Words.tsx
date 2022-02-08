import { IonAvatar, IonBackButton, IonButton, IonButtons, IonCard, IonCardContent, IonCardHeader, IonCardTitle, IonContent, IonFabButton, IonFooter, IonHeader, IonIcon, IonImg, IonItem, IonLabel, IonList, IonPage, IonSearchbar, IonTabBar, IonTabButton, IonText, IonThumbnail, IonTitle, IonToast, IonToolbar } from '@ionic/react';
import ExploreContainer from '../components/ExploreContainer';
import { entriesWords } from '../data-words';
import { addCircle, bookmarkOutline, chatbubblesOutline, closeCircle } from 'ionicons/icons'
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
  const [showToast2, setShowToast2] = useState(false)


  const click = (user: {
    id: string;
  }) => {
    const localStorageContent = localStorage.getItem('favWords')

    if (localStorageContent?.match(user.id)) {
      console.log('found')
      setShowToast2(true)
    } else {
    
      setShowToast1(true)

      memo.push(user.id)
      localStorage.setItem('favWords', JSON.stringify(memo))
    }


  }
  useEffect(() => {
  
    const localStorageContent = localStorage.getItem('favWords')
    if (localStorageContent === null) {



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
                  <IonFabButton key={entry.id} className="fav-word-item" onClick={() => { click(entry) }} >

                    <IonIcon className="fav-chip" icon={bookmarkOutline} />
                    <IonIcon className="fav-chip2" icon={addCircle} />
                  </IonFabButton>
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
            message="Word has been saved."
            duration={400}
            color="dark "

          />
          <IonToast

            isOpen={showToast2}
            onDidDismiss={() => { setShowToast2(false) }}
            message="Already saved"
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
