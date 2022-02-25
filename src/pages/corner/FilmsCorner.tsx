import { IonAvatar, IonBackButton, IonButton, IonButtons, IonCard, IonCardContent, IonCardHeader, IonCardTitle, IonCol, IonContent, IonFabButton, IonGrid, IonHeader, IonIcon, IonImg, IonItem, IonLabel, IonList, IonPage, IonRow, IonSlide, IonSlides, IonTabBar, IonTabButton, IonText, IonThumbnail, IonTitle, IonToast, IonToolbar } from '@ionic/react';
import ExploreContainer from '../../components/ExploreContainer';
import { entriesHome } from '../../data-home';
import { addCircle, arrowDownSharp, bookmarkOutline, closeCircle, logoYoutube } from 'ionicons/icons'
import { home as homeIcon, settings as settingsIcon, planetOutline as planetIcon } from 'ionicons/icons'
import './Corner.css';

import { films } from '../../data-films';
import { useEffect, useState } from 'react';


const slideOpts = {
  initialSlide: 1,
  speed: 400
};





const FilmsCorner: React.FC = () => {


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
        <div className='div-films-corner'>
  <h3 className='text-film-corner '>Cinema of Quebec</h3>
  <p className='text-film-corner '>The history of cinema in Quebec started on June 27, 1896 when the Frenchman Louis Minier inaugurated the first movie projection in North America in a Montreal theatre room. However, it would have to wait until the 1960s before a genuine Quebec cinema industry would emerge. Approximately 620 feature-length films have been produced, or partially produced by the Quebec film industry since 1943.</p>
</div>
   {films.map((entry)=>
  
 
//     <IonCard button routerLink={`/corner-films/${entry.id}`}  className='card-films-corner'>
//   <IonCardHeader className="card-header-films">
 
  
//   <h3 className='text-films-corner'>{entry.name}</h3>
//   </IonCardHeader>
  
//   <img className='film-image' src={entry.img} alt="" />
  
// </IonCard>

<IonItem  >
  <IonLabel>
  <h2 className=''>{entry.name}</h2>
  <p>{entry.genre}</p>
  </IonLabel>

  <IonThumbnail slot='start'>
  <img className='film-image' src={entry.img} alt="" />
  </IonThumbnail>
  <IonThumbnail slot='end'>
                <IonLabel color='danger'>Go <IonIcon icon={arrowDownSharp}/> </IonLabel>
                <IonButton  color='light'
                 onClick={() => {
    window.open(`${entry.src}`)
  }}
  >
             
                
              <IonIcon  color='danger'  icon={logoYoutube}/>
                </IonButton>
              </IonThumbnail>
</IonItem>





  
 


 


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

export default FilmsCorner;
