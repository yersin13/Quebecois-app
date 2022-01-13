import { IonAvatar, IonBackButton, IonButton, IonButtons, IonCard, IonCardContent, IonCardHeader, IonCardTitle, IonCol, IonContent, IonGrid, IonHeader, IonIcon, IonImg, IonItem, IonLabel, IonList, IonPage, IonRow, IonTabBar, IonTabButton, IonText, IonThumbnail, IonTitle, IonToolbar } from '@ionic/react';
import ExploreContainer from '../components/ExploreContainer';
import { entriesHome } from '../data-home';
import { closeCircle } from 'ionicons/icons'
import { home as homeIcon, settings as settingsIcon, planetOutline as planetIcon } from 'ionicons/icons'
import './Corner.css';
import {music} from '../data-music'

const CornerMusic: React.FC = () => {
  return (
    <IonPage>
     <IonHeader>
     
        <IonToolbar className="toolbar">
        <IonButtons slot="start">
            <IonBackButton/>
          </IonButtons>
      
         
        </IonToolbar>
      </IonHeader>
      <IonContent>
      <IonList className="music-list">
<div className='div-text-music'>
  <h3 className='text-music-item'>Music quebecois</h3>
<p className='text-music'>Being a modern cosmopolitan society, today, all types of music can be found in Quebec. From folk music to hip hop, music has always played an important role in Quebercers culture. From La Bolduc in the 1920s–1930s to the contemporary artists, the music in Quebec has produced multiple songwriters, pop singers, crooners and music groups.</p>
</div>
        {music.map((entry)=>
        <div>
          <h3 className='text-music-item'>{entry.name}</h3>
        <p className='text-music-item'>{entry.genre}</p>
           {/* <h5 className='music-genre'>{entry.name}</h5>
            <p className='music-genre '>Genre: {entry.genre}</p> */}
          {/* <IonCard className="card-music" > */}
        {/* <IonCardHeader>
        <h5 className='music-genre'>{entry.name}</h5>
            <p className='music-genre '>Genre: {entry.genre}</p>
        </IonCardHeader> */}
      
      <iframe className='iframe-music' src={entry.src} width="100%" height="80" frameBorder="0"  allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture" ></iframe>
      {/* <img className="image-corner" src="/assets/10.png" alt="" /> */}
           
          {/* </IonCard> */}
        </div>
      
        )}
        </IonList>
        
      </IonContent>
      <IonTabBar slot="bottom">
<IonTabButton tab="profile"  href="/home" >
    <IonIcon className="icons" icon={homeIcon} />
    <IonLabel className="label">Home</IonLabel>
  </IonTabButton>
  

</IonTabBar>
    </IonPage>
  );
};

export default CornerMusic;
