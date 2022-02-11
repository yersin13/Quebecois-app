import { IonAvatar, IonBackButton, IonButton, IonButtons, IonCard, IonCardContent, IonCardHeader, IonCardTitle, IonCol, IonContent, IonFabButton, IonGrid, IonHeader, IonIcon, IonImg, IonItem, IonLabel, IonList, IonPage, IonRow, IonTabBar, IonTabButton, IonText, IonThumbnail, IonTitle, IonToast, IonToolbar } from '@ionic/react';
import ExploreContainer from '../../components/ExploreContainer';
import { entriesHome } from '../../data-home';
import { addCircle, addCircleOutline, addCircleSharp, addOutline, bookmarkOutline, closeCircle, heart } from 'ionicons/icons'
import { home as homeIcon, settings as settingsIcon, planetOutline as planetIcon } from 'ionicons/icons'
import './Corner.css';
import { music } from '../../data-music'
import { useEffect, useState } from 'react';

const CornerMusic: React.FC = () => {

  const [memo, setMemo] = useState<Array<String>>([]);
  const [showToast1, setShowToast1] = useState(false)
  const [showToast2, setShowToast2] = useState(false)


  const localStorageContent = localStorage.getItem('favCorner')

  const click = (user: { id: string; src: string; }) => {
    

    if (localStorageContent?.match(user.id)) {
      console.log('found')
      setShowToast2(true)
    } else {
      // setMyArray( (arr: any) => [...arr, user.id]);
      setShowToast1(true)
      //  console.log (myArray)
      memo.push(user.id)
      localStorage.setItem('favCorner', JSON.stringify(memo))

    }

  }


  useEffect(() => {
    // console.log(myArray)
    
    if (localStorageContent === null) {



    } else if (localStorageContent) {

      setMemo(JSON.parse(localStorageContent))
      console.log(memo)
    }

    // if(localStorageContent){
    //   localStorage.setItem('favMemes', JSON.stringify(myArray)) 
    // }

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
        <IonList className="music-list">
          <div className='div-text-music'>
            <h3 className='text-music'>Music quebecois</h3>
            <p className='text-music'>Being a modern cosmopolitan society, today, all types of music can be found in Quebec. From folk music to hip hop, music has always played an important role in Quebercers culture. From La Bolduc in the 1920s–1930s to the contemporary artists, the music in Quebec has produced multiple songwriters, pop singers, crooners and music groups.</p>
          </div>
          {music.map((entry) =>
            <div className="div-music div-header-meme">
              <iframe className='iframe-music' src={entry.src} width="100%" height="80" frameBorder="0" allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture" ></iframe>
              {localStorageContent?.match(entry.id)? 
                  
                 
                  <IonIcon color="danger" className="fav-chip" icon={heart} />
                

                :
                <IonFabButton key={entry.id} className="fav-meme-item" onClick={()=>{click(entry)} } >

                <IonIcon color="danger"  className="fav-chip" icon={heart} />
                  <IonIcon  className="fav-chip2" icon={addCircle} />

                </IonFabButton>}
            </div>

          )}

          <IonToast

            isOpen={showToast1}
            onDidDismiss={() => { setShowToast1(false) }}
            message="Song has been saved."
            duration={400}
            color="warning "

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
      <IonTabBar slot="bottom">
        <IonTabButton tab="profile" href="/home" >
          <IonIcon className="icons" icon={homeIcon} />
          <IonLabel className="label">Home</IonLabel>
        </IonTabButton>


      </IonTabBar>
    </IonPage>
  );
};

export default CornerMusic;
