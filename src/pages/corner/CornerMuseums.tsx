import { IonAvatar, IonBackButton, IonButton, IonButtons, IonCard, IonCardContent, IonCardHeader, IonCardTitle, IonCol, IonContent, IonFab, IonFabButton, IonGrid, IonHeader, IonIcon, IonImg, IonItem, IonLabel, IonList, IonPage, IonRow, IonSpinner, IonTabBar, IonTabButton, IonText, IonThumbnail, IonTitle, IonToast, IonToolbar } from '@ionic/react';
import ExploreContainer from '../../components/ExploreContainer';
import { entriesHome } from '../../data-home';
import { addCircle, addCircleOutline, addCircleSharp, addOutline, arrowDownSharp, bookmarkOutline, closeCircle, heart, logoYoutube } from 'ionicons/icons'
import { home as homeIcon, settings as settingsIcon, planetOutline as planetIcon } from 'ionicons/icons'
import './Corner.css';
import { music } from '../../data-music'
import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { cultura } from '../../data-cultural';
import { museums } from '../../data-museums';

const CornerMuseums: React.FC = () => {



  return (
    <IonPage>
      <IonHeader>

        <IonToolbar className="toolbar">
          <IonButtons slot="start">
            <IonBackButton color='light' />
          </IonButtons>
          <div className='home-div-logo '>
       
       <h4 className='home-text-logo padding-menu-others'><img className='home-logo' src="../assets/flor.png" alt="" /> Museums in Quebec </h4>
       {/* <IonButtons className="menu"  slot="right">
       <NavButtons />
     </IonButtons> */}
     </div>

        </IonToolbar>
      </IonHeader>
      <IonContent>
        <IonList className="music-list">
         <br />
          {museums.map((entry) =>
       
             
 
  <IonCard className='div-cultural' >

   
    
  
    <h1 className='text-cultural '>{entry.name}</h1>

    <p className='text-cultural '>{entry.description}</p>
    <br />
    <IonLabel>Check their webcite <IonIcon icon={arrowDownSharp}/></IonLabel>
    <IonButton color='light' onClick={() => {
    window.open(`${entry.src}`)
  }}>
    <IonLabel color='danger'>{entry.src} </IonLabel>    
             </IonButton>

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
    </IonPage>
  );
};

export default CornerMuseums;
