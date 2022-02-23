import { IonAvatar, IonBackButton, IonButton, IonButtons, IonCard, IonCardContent, IonCardHeader, IonCardTitle, IonCol, IonContent, IonFabButton, IonGrid, IonHeader, IonIcon, IonImg, IonItem, IonLabel, IonList, IonPage, IonRow, IonSkeletonText, IonSlide, IonSlides, IonSpinner, IonTabBar, IonTabButton, IonText, IonThumbnail, IonTitle, IonToast, IonToolbar } from '@ionic/react';

import { addCircle, bookmarkOutline, closeCircle, heart, remove, removeCircle, removeCircleOutline, trashOutline } from 'ionicons/icons'
import { home as homeIcon, settings as settingsIcon, planetOutline as planetIcon } from 'ionicons/icons'
import './Corner.css';
import { useParams } from 'react-router';
import { films } from '../../data-films';
import { useEffect, useState } from 'react';


const slideOpts = {
  initialSlide: 1,
  speed: 400
};

interface RouteParams {
  id: string;
}


const Film: React.FC = () => {
  const { id } = useParams<RouteParams>();

  const [memo, setMemo] = useState<Array<String>>([]);
  const [showToast1, setShowToast1] = useState(false)
  const [showToastErase, setShowToastErase] = useState(false)
  const [data, setData]= useState(false);


  const [eraseBottom, setEraseBottom] = useState(false)

  const localStorageContent = localStorage.getItem('favCorner')

  const click = (user: {
    id: string;
  }) => {


    if (localStorageContent?.match(user.id)) {
      console.log('found')

      setEraseBottom(true)
    } else {

      setShowToast1(true)

      memo.push(user.id)
      localStorage.setItem('favCorner', JSON.stringify(memo))
      setEraseBottom(true)
    }

  }

  useEffect(()=>{
    setTimeout(() => {
      setData(true);
    }, 4000);
  },[])

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
      localStorage.setItem('favCorner', JSON.stringify(arr))
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
        <IonList className="music-list">
    


          {films.filter((entry) => {
            if (entry.id === id)
              return entry
          }).map((entry) =>

            <div className='div-films'>

              <div className='position-item'>
                {eraseBottom ?

                  <IonFabButton color="light" key={entry.id} className="fav-word-item" onClick={() => { eraser(entry) }} >
                    <IonIcon color="danger" className="fav-chip" icon={heart} />
                    {/* <IonIcon   className="fav-chip2" icon={trashOutline} /> */}

                  </IonFabButton>
                  :
                  <IonFabButton key={entry.id} className="fav-word-item" onClick={() => { click(entry) }} >

                    <IonIcon color="light"  className="fav-chip" icon={heart} />
                    <IonIcon className="fav-chip2" icon={addCircle} />
                  </IonFabButton>
                }

              </div>

              <br />
              <h3 className='text-film'>{entry.name}</h3>


              <p className='text-film '>{entry.sinopsys} </p>
              {
                data? 
                <iframe className='film-video' width="100%" height="300px" src={entry.src} title="YouTube video player" frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowFullScreen></iframe>
              :
              <IonItem className="loading-spinner-item" lines='none'>
               <IonSpinner color="light"  className="spinner" name="lines" />
            </IonItem>
              
              }

             

            </div>
          )}





        </IonList>
        <IonToast

          isOpen={showToast1}
          onDidDismiss={() => { setShowToast1(false) }}
          message="Film has been saved."
          duration={400}
          color="warning "

        />
        <IonToast

          isOpen={showToastErase}
          onDidDismiss={() => { setShowToastErase(false) }}
          message="Film has been removed from fav"
          duration={400}
          color="danger "

        />
      </IonContent>
      <IonTabBar slot="bottom">
        <IonTabButton tab="profile" href="/home" >
          <IonIcon className="icons" icon={homeIcon} />
          <IonLabel className="label">Home</IonLabel>
        </IonTabButton>


      </IonTabBar>
    </IonPage >
  );
};

export default Film;
