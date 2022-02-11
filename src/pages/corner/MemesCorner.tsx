import { IonAvatar, IonBackButton, IonButton, IonButtons, IonCard, IonCardContent, IonCardHeader, IonCardTitle, IonChip, IonCol, IonContent, IonFab, IonFabButton, IonGrid, IonHeader, IonIcon, IonImg, IonItem, IonLabel, IonList, IonPage, IonRow, IonSlide, IonSlides, IonTabBar, IonTabButton, IonText, IonThumbnail, IonTitle, IonToast, IonToolbar } from '@ionic/react';
import ExploreContainer from '../../components/ExploreContainer';
import { entriesHome } from '../../data-home';
import { addCircle, addCircleSharp, arrowForwardCircle, bookmarkOutline, closeCircle, headsetOutline, heart, heartCircle, heartSharp, informationCircle } from 'ionicons/icons'
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


const [memo, setMemo]=useState<Array<String>>([]);
const [showToast1, setShowToast1]= useState(false)
const [showToast2, setShowToast2]= useState(false)

const localStorageContent = localStorage.getItem('favCorner')
const click = (user: { id: string; src: string; })=>{
  

 if(localStorageContent?.match(user.id)){
  console.log('found')
  setShowToast2(true)
 } else{
  // setMyArray( (arr: any) => [...arr, user.id]);
  setShowToast1(true)

   memo.push(user.id)
   localStorage.setItem('favCorner', JSON.stringify(memo)) 
   
 }


  
}


useEffect(() => {
  // console.log(myArray)
 
  if(localStorageContent=== null){
   
   
  
  }else if(localStorageContent){
    
  setMemo(JSON.parse(localStorageContent))
    console.log(memo)
  }

  // if(localStorageContent){
  //   localStorage.setItem('favMemes', JSON.stringify(myArray)) 
  // }

},[localStorageContent]);

// memes.filter(item => memo.includes(item.id))





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
            <h3 className='text-film-corner '>Memes Quebecois</h3>

          </div>
          {memes.map((entry) =>
            <IonCard className="item-memes-corner">
              <IonCardHeader >
                <div className="div-header-meme">
                  <img src={entry.src} alt="" />


                  {localStorageContent?.match(entry.id)? 
                  
                 
                    <IonIcon color="danger" className="fav-chip" icon={heart} />
                  

                  :
                  <IonFabButton key={entry.id} className="fav-meme-item" onClick={()=>{click(entry)} } >

                  <IonIcon color="danger" className="fav-chip" icon={heart} />
                    <IonIcon className="fav-chip2" icon={addCircle} />

                  </IonFabButton>}


                  {/* <IonFabButton key={entry.id} className="fav-meme-item" onClick={()=>{click(entry)} } >

                  <IonIcon className="fav-chip" icon={heart} />
                    <IonIcon className="fav-chip2" icon={addCircle} />

                  </IonFabButton> */}

                </div>


              </IonCardHeader>




            </IonCard>

          )}
{/* 
          <IonFab className="fab-memes" vertical="bottom" horizontal="end" slot="fixed">

          </IonFab>


          */}

<IonToast
          
          isOpen={showToast1}
          onDidDismiss={() => {setShowToast1(false)}}
          message="Meme has been saved."
          duration={400}
          color="warning "
         
        />
        <IonToast
          
          isOpen={showToast2}
          onDidDismiss={() => {setShowToast2(false)}}
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
    </IonPage >
  );
};

export default MemesCorner;
