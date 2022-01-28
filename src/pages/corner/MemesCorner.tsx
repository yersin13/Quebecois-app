import { IonAvatar, IonBackButton, IonButton, IonButtons, IonCard, IonCardContent, IonCardHeader, IonCardTitle, IonChip, IonCol, IonContent, IonFab, IonFabButton, IonGrid, IonHeader, IonIcon, IonImg, IonItem, IonLabel, IonList, IonPage, IonRow, IonSlide, IonSlides, IonTabBar, IonTabButton, IonText, IonThumbnail, IonTitle, IonToast, IonToolbar } from '@ionic/react';
import ExploreContainer from '../../components/ExploreContainer';
import { entriesHome } from '../../data-home';
import { arrowForwardCircle, bookmarkOutline, closeCircle, headsetOutline, heartCircle, heartSharp, informationCircle } from 'ionicons/icons'
import { home as homeIcon, settings as settingsIcon, planetOutline as planetIcon } from 'ionicons/icons'
import './Corner.css';

import { food } from '../../data-food';
import { memes } from '../../data-memes';
import { useEffect, useState } from 'react';
import { useParams } from 'react-router';
import { useLocalStorage } from '../../hook';
// import { favMeme } from '../data-favourite';


const slideOpts = {
  initialSlide: 1,
  speed: 400
};



const MemesCorner: React.FC = () => {


 


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
          <div className='div-films'>
            <h3 className='text-film '>Memes Quebecois</h3>

          </div>
          {memes.map((entry) =>
            <IonCard className="item-films-corner">
              <IonCardHeader >
                <div className="div-header-meme">
                  <img src={entry.src} alt="" />

                  {/* <IonFabButton key={entry.id}  className="fav-meme-item" onClick={()=>setFinalId(entry.id) } >

                    <IonIcon className="fav-meme-chip" icon={bookmarkOutline}  />

                  </IonFabButton> */}

                </div>


              </IonCardHeader>




            </IonCard>

          )}
{/* 
          <IonFab className="fab-memes" vertical="bottom" horizontal="end" slot="fixed">

          </IonFab>


          <IonToast
          
        isOpen={showToast1}
        onDidDismiss={() => {setShowToast1(false)}}
        message="Meme has been saved."
        duration={400}
        color="dark "
       
      /> */}


        </IonList>
        
     
      
      
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

export default MemesCorner;
