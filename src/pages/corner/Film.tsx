import { IonAvatar, IonBackButton, IonButton, IonButtons, IonCard, IonCardContent, IonCardHeader, IonCardTitle, IonCol, IonContent, IonFabButton, IonGrid, IonHeader, IonIcon, IonImg, IonItem, IonLabel, IonList, IonPage, IonRow, IonSlide, IonSlides, IonTabBar, IonTabButton, IonText, IonThumbnail, IonTitle, IonToast, IonToolbar } from '@ionic/react';
import ExploreContainer from '../../components/ExploreContainer';
import { entriesHome } from '../../data-home';
import { addCircle, bookmarkOutline, closeCircle } from 'ionicons/icons'
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

  const [myArray, setMyArray] = useState<Array<string>>([]);
  const [memo, setMemo] = useState<Array<String>>([]);
  const [showToast1, setShowToast1] = useState(false)
  const [showToast2, setShowToast2] = useState(false)


  const click = (user: { id: string; src: string; }) => {
    const localStorageContent = localStorage.getItem('favCorner')
    //      if(localStorageContent===null){
    //       setMyArray( (arr: any) => [...arr, user.id]);
    //       localStorage.setItem('favMemes', JSON.stringify(myArray)) 
    // console.log('vacio')
    //      }else
    if (localStorageContent?.match(user.id)) {
      console.log('found')
      setShowToast2(true)
    } else {
      // setMyArray( (arr: any) => [...arr, user.id]);
      setShowToast1(true)
      console.log(myArray)
      memo.push(user.id)
      localStorage.setItem('favCorner', JSON.stringify(memo))
      
    }




  }


  useEffect(() => {
    // console.log(myArray)
    const localStorageContent = localStorage.getItem('favCorner')
    if (localStorageContent === null) {



    } else if (localStorageContent) {

      setMemo(JSON.parse(localStorageContent))
      console.log(memo)
    }


  }, []);


  const { id } = useParams<RouteParams>();
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
        <IonList className="music-list">
          {films.filter((entry) => {
            if (entry.id === id)
              return entry
          }).map((entry) =>

            <div className='div-films'>

<div className='position-item'>
                <IonFabButton key={entry.id} className="fav-film-item" onClick={() => { click(entry) }} >

                  <IonIcon className="fav-chip-film" icon={bookmarkOutline} />
                  <IonIcon className="fav-chip-film2" icon={addCircle} />
                </IonFabButton>
              </div>

              <br />
              <h3 className='text-film'>{entry.name}</h3>


              <p className='text-film '>{entry.sinopsys} </p>

              <iframe className='film-video' width="100%" height="300px" src={entry.src} title="YouTube video player" frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowFullScreen></iframe>
             
            </div>
          )}





        </IonList>
        <IonToast

          isOpen={showToast1}
          onDidDismiss={() => { setShowToast1(false) }}
          message="Film has been saved."
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
