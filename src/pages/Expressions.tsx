import { IonAvatar, IonBackButton, IonButton, IonButtons, IonCard, IonCardContent, IonCardHeader, IonCardTitle, IonContent, IonFab, IonFabButton, IonFooter, IonHeader, IonIcon, IonImg, IonItem, IonLabel, IonList, IonPage, IonSearchbar, IonTabBar, IonTabButton, IonText, IonThumbnail, IonTitle, IonToast, IonToolbar } from '@ionic/react';
import ExploreContainer from '../components/ExploreContainer';
import { entriesExpressions } from '../data-expressions';
import { addCircle, bookmarkOutline, closeCircle, heart, trash } from 'ionicons/icons'
import { home as homeIcon, settings as settingsIcon, planetOutline as planetIcon } from 'ionicons/icons'
import './Words.css';
import { NativeAudio } from "@ionic-native/native-audio/ngx";
import { useEffect, useRef, useState } from 'react';
import { useParams } from 'react-router';

interface RouteParams {
  id: string;
}



const Expressions: React.FC = () => {
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
      <IonContent >

        <IonList>
          {entriesExpressions.filter((entry) => {
            if (entry.id === id)
              return entry
          }).map((entry) =>
            <IonCard className={color? 'card-dark ': "card-white "}>

              <IonCardContent >
              
               
               
              

               

               
                <img className="expression-img" src={entry.img ? entry.img : "./assets/qcflag.png"} alt="" />
                <div className='item-save'  >
                    <div className='chip-logo '>
                      <h4 className='word-logo'><img className='home-logo' src="../assets/flor.png" alt="" />  Learn Québécois App  </h4>
                    </div>
                  </div>
                  <br />
               
                <div className="expression-list-item">
                  <img className="expression-icon" src="./assets/qcflag.png" alt="" />
                  <h1 className={color? "text-dark": "expression-header text bold"}>{entry.quebec}</h1>
                </div>
                <br />
                <audio controls >
                  {entry.src ? <source src={entry.src}></source> : "no"}
                </audio>
                <p className={color? "text-dark": "expression-header text bold example"} >{entry.example}</p>
                <br />


                <div className="expression-list-item">
                  <img className="expression-icon" src="./assets/usa.png" alt="" />
                  <h2 className={color? "text-dark": "expression-header text bold"}>English:</h2>
                </div>

                <p className={color? "text-dark": "expression-header text bold"}>{entry.english}</p>

                <br />

                <div className="expression-list-item">
                  <img className="expression-icon" src="./assets/france.png" alt="" />
                  <h2 className={color? "text-dark": "expression-header text bold"}>French:</h2>
                </div>

                <p className={color? "text-dark": "expression-header text bold"} >{entry.french}</p>

              
              </IonCardContent>
            </IonCard>
          )}
 {entriesExpressions.filter((entry) => {
            if (entry.id === id)
              return entry
          }).map((entry) =>
          <>
{eraseBottom ?
  <IonFab horizontal="end" vertical="top" >
<IonFabButton color="light"  key={entry.id} className="" onClick={() => { eraser(entry) }} >
  <IonIcon color="danger" className="fav-chip" icon={heart} />
  {/* <IonIcon className="fav-chip2" icon={trash} /> */}

</IonFabButton>
</IonFab>
:
<IonFab horizontal="end" vertical="top" >
<IonFabButton key={entry.id} className="" onClick={() => { click(entry) }} >

  <IonIcon className="fav-chip" icon={heart} />
  <IonIcon className="fav-chip2" icon={addCircle} />
</IonFabButton>
</IonFab>
}
</>)}
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

export default Expressions;
