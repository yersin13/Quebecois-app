import { IonAvatar, IonBackButton, IonButton, IonButtons, IonCard, IonCardContent, IonCardHeader, IonCardTitle, IonChip, IonContent, IonFab, IonFabButton, IonFabList, IonFooter, IonHeader, IonIcon, IonImg, IonItem, IonLabel, IonList, IonPage, IonSearchbar, IonTabBar, IonTabButton, IonText, IonThumbnail, IonTitle, IonToast, IonToolbar } from '@ionic/react';
import ExploreContainer from '../components/ExploreContainer';
import { entriesWords } from '../data-words';
import { add, addCircle, arrowDown, arrowDownCircle, arrowDownCircleOutline, bookmarkOutline, chatbubblesOutline, chevronDownCircleOutline, closeCircle, downloadOutline, headsetSharp, heart, heartDislike, heartOutline, share, shareSocial, star, starHalfSharp, starOutline, starSharp, trash } from 'ionicons/icons'
import { home as homeIcon, settings as settingsIcon, planetOutline as planetIcon } from 'ionicons/icons'
import './Words.css';
import { useCallback, useEffect, useRef, useState } from 'react';
import { useParams } from 'react-router';
// import * as htmlToImage from 'html-to-image';


interface RouteParams {
  id: string;

}

const Words: React.FC = () => {
  const { id } = useParams<RouteParams>();

  const [memo, setMemo] = useState<Array<String>>([]);
  const [showToast1, setShowToast1] = useState(false)
  const [showToastErase, setShowToastErase] = useState(false)
  const [showToastDow, setShowToastDown] = useState(false)



  const [eraseBottom, setEraseBottom] = useState(false)

  const localStorageContent = localStorage.getItem('favWords')
  const ref = useRef<HTMLDivElement>(null)

  // const onButtonClick = useCallback(() => {
  //   if (ref.current === null) {
  //     return
  //   }

  //   htmlToImage.toPng(ref.current, { cacheBust: true, })
  //     .then((dataUrl) => {
  //       const link = document.createElement('a')
  //       link.download = 'learnquebecois.png'
  //       link.href = dataUrl
  //       link.click()
  //       setShowToastDown(true)
      
     
  //     })
  //     .catch((err) => {
  //       console.log(err)
  //     })
  // }, [ref])

const im = "./assets/usa.png"
const tex ="hello"



  const click = (user: {
    id: string;
  }) => {


    if (localStorageContent?.match(user.id)) {
      console.log('found')

      setEraseBottom(true)
    } else {

      setShowToast1(true)

      memo.push(user.id)
      localStorage.setItem('favWords', JSON.stringify(memo))
      setEraseBottom(true)
    }

  }




  useEffect(() => {


    if (localStorageContent === null) {

      setEraseBottom(false)

    } else if (localStorageContent) {

      setMemo(JSON.parse(localStorageContent))
      // console.log(memo)
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
      localStorage.setItem('favWords', JSON.stringify(arr))
      setEraseBottom(false)
      // console.log(memo)
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

          {entriesWords.filter((entry) => {
            if (entry.id === id)
              return entry
          }).map((entry) =>

            <div className='shared-div' ref={ref}>
              <IonCard className="card-item white ">

                <IonCardContent>

                  <div className='position-item' >



                  </div>

                  <br />

                  <img className="expression-img" src={entry.src ? entry.src : "./assets/qcflag.png"} alt="" />

                    <div className='item-save'  >
                      <div className='chip-logo '>
                        <h4 className='word-logo'><img className='home-logo' src="../assets/flor.png" alt="" />  Learn Québécois App  </h4>
                      </div>
                    </div>

                  <br />
                  <div className="expression-list-item ">
                    <img className="expression-icon" src="./assets/qcflag.png" alt="" />

                    <h1 className="expression-header text bold">{entry.quebec}</h1>
                  </div>
                  <br />



                  <div className="expression-list-item">
                    <img className="expression-icon" src="./assets/usa.png" alt="" />
                    <h2 className="text">English:  <h3 className="expression-header text bold">- {entry.english}</h3></h2>
                  </div>


                  <br />

                  <div className="expression-list-item">
                    <img className="expression-icon" src="./assets/france.png" alt="" />
                    <h2 className="text">French:  <h3 className="expression-header text bold">- {entry.french}</h3></h2>
                  </div>


                  <br />

                </IonCardContent>

              </IonCard>


            </div>
           
          )}



              {entriesWords.filter((entry) => {
                if (entry.id === id)
                  return entry
              }).map((entry) =>
                <>
                  {eraseBottom ?
                    <IonFab horizontal="end" vertical="top" >
                    <IonFabButton color="light" key={entry.id} className="" onClick={() => { eraser(entry) }} >
                   <IonIcon color="danger" icon={heart} />
                      {/* <IonIcon className="fav-chip2" icon={trash} /> */}

                    </IonFabButton>
                    </IonFab>
                    :
                    <IonFab horizontal="end" vertical="top" >
                    <IonFabButton key={entry.id} onClick={() => { click(entry) }} >

                      <IonIcon color="light" className="fav-chip" icon={heart} />
                      <IonIcon  color='light' className="fav-chip2" icon={addCircle} />
                    </IonFabButton>
                    </IonFab>
                  }


                </>

              )}


              {/* <IonFabButton color="light">
              <IonIcon icon={star}></IonIcon>
            </IonFabButton> */}
              {/* <IonFabButton onClick={onButtonClick}>
                <IonIcon color="primary" className="fav-chip" icon={downloadOutline} />
              </IonFabButton> */}
           
          <IonToast

            isOpen={showToast1}
            onDidDismiss={() => { setShowToast1(false) }}
            message="Word has been saved in Fav"
            duration={500}
            color="warning "

          />
         


          <IonToast

            isOpen={showToastErase}
            onDidDismiss={() => { setShowToastErase(false) }}
            message="Word has been removed from fav"
            duration={500}
            color="danger "

          />
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

export default Words;
