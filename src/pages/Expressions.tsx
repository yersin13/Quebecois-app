import { IonAvatar, IonBackButton, IonButton, IonButtons, IonCard, IonCardContent, IonCardHeader, IonCardTitle, IonContent, IonFabButton, IonFooter, IonHeader, IonIcon, IonImg, IonItem, IonLabel, IonList, IonPage, IonSearchbar, IonTabBar, IonTabButton, IonText, IonThumbnail, IonTitle, IonToast, IonToolbar } from '@ionic/react';
import ExploreContainer from '../components/ExploreContainer';
import { entriesExpressions } from '../data-expressions';
import { addCircle, bookmarkOutline, closeCircle } from 'ionicons/icons'
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
  const [showToast2, setShowToast2] = useState(false)


  const click = (user: {
    id: string;
  }) => {
    const localStorageContent = localStorage.getItem('favExpressions')

    if (localStorageContent?.match(user.id)) {
      console.log('found')
      setShowToast2(true)
    } else {
    
      setShowToast1(true)

      memo.push(user.id)
      localStorage.setItem('favExpressions', JSON.stringify(memo))
    }


  }
  useEffect(() => {
  
    const localStorageContent = localStorage.getItem('favExpressions')
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
          {entriesExpressions.filter((entry) => {
            if (entry.id === id)
              return entry
          }).map((entry) =>
            <IonCard className=" card-item">

              <IonCardContent>
              <div className='position-item'>
                  <IonFabButton key={entry.id} className="fav-word-item" onClick={() => { click(entry) }} >

                    <IonIcon className="fav-chip" icon={bookmarkOutline} />
                    <IonIcon className="fav-chip2" icon={addCircle} />
                  </IonFabButton>
                </div>
                <br />
                <br />
                <div className="expression-list-item">
                  <img className="expression-icon" src="./assets/qcflag.png" alt="" />
                  <h1 className="expression-header text bold">{entry.quebec}</h1>
                </div>
                <br />
                
                <audio controls >
                 {entry.src? <source src={entry.src}></source>:"no"} 
                </audio>

                <br />
                <br />
                <img src={entry.img? entry.img:"./assets/qcflag.png" } alt="" />

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
message="Meme has been saved."
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
