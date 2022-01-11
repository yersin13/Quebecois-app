import { IonAvatar, IonBackButton, IonButton, IonButtons, IonCard, IonCardContent, IonCardHeader, IonCardTitle, IonCol, IonContent, IonGrid, IonHeader, IonIcon, IonImg, IonItem, IonLabel, IonList, IonPage, IonRow, IonSlide, IonSlides, IonTabBar, IonTabButton, IonText, IonThumbnail, IonTitle, IonToolbar } from '@ionic/react';
import ExploreContainer from '../components/ExploreContainer';
import { entriesHome } from '../data-home';
import { closeCircle } from 'ionicons/icons'
import { home as homeIcon, settings as settingsIcon, planetOutline as planetIcon } from 'ionicons/icons'
import './Corner.css';

import { food } from '../data-food';
import { memes } from '../data-memes';


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
        <IonList className="music-list">\
<div className='div-films'>
  <h3 className='text-film '>Memes Quebecois</h3>
</div>
   {memes.map((entry)=>
<IonCard className="item-films-corner">
<IonCardHeader>
<img   src={entry.src} alt="" />
{/* <h3 className='text-films-corner'>{entry.name}</h3> */}
</IonCardHeader>




</IonCard>
   )}
   



        
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
