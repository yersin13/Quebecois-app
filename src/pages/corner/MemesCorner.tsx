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

const [finalId, setFinalId] = useState('')
const [myArray, setMyArray]= useState<Array<string>>([]);
const [memo, setMemo]=useState<Array<String>>([]);
const [showToast1, setShowToast1]= useState(false)
const [showToast2, setShowToast2]= useState(false)
// let myArray: any[] = []




// useEffect(() => {
//   const localStorageContent = localStorage.getItem('favMemes');
 



// favMemes.push(finalId)

// if(!finalId){
//   console.log( 'nothing')
// }else{

  // if (localStorageContent === null){
  //   let myArray: any[] = []
  // }else{
  //   let myArray = JSON.parse(localStorageContent);
  // }
  // myArray.push(finalId)
  // localStorage.setItem('favMemes', JSON.stringify(myArray))
//   setFinalId('')
// }
// console.log(myArray)
// });
// const [myArray, updateMyArray] = useState<Array<string>([]);

const click = (user: { id: string; src: string; })=>{
  const localStorageContent = localStorage.getItem('favMemes')
//      if(localStorageContent===null){
//       setMyArray( (arr: any) => [...arr, user.id]);
//       localStorage.setItem('favMemes', JSON.stringify(myArray)) 
// console.log('vacio')
//      }else
 if(localStorageContent?.match(user.id)){
  console.log('found')
  setShowToast2(true)
 } else{
  // setMyArray( (arr: any) => [...arr, user.id]);
  setShowToast1(true)
   console.log (myArray)
   memo.push(user.id)
   localStorage.setItem('favMemes', JSON.stringify(memo)) 
 }

// if(localStorageContent===null){
// console.log('vacio')
// setMyArray( (arr: any) => [...arr, user.id]);
// console.log(myArray)
// }else
//  if(localStorageContent.match(user.id)){
//   console.log('found')
//  } else{
//   setMyArray( (arr: any) => [...arr, user.id]);
//   localStorage.setItem('favMemes', JSON.stringify(myArray))
//    console.log (myArray)
//  }



// if(localStorageContent=== null){
//   setMyArray( (arr: any) => [...arr, user.id]);
//   localStorage.setItem('favMemes', JSON.stringify(user.id))
  
// }else if(localStorageContent.match(user.id)){
//  console.log('Already saved in storage')

// }else{
//   if(myArray.find(id => id === user.id)){
//     console.log('found')
//    } else{
  
//     setMyArray( (arr: any) => [...arr, user.id]);
//      console.log (myArray)
//      localStorage.setItem('favMemes', JSON.stringify(myArray))
//      console.log('saved')
//     }

  
//   console.log(myArray)

// }


  
  
}


useEffect(() => {
  // console.log(myArray)
  const localStorageContent = localStorage.getItem('favMemes')
  if(localStorageContent=== null){
   
   
  
  }else if(localStorageContent){
    
  setMemo(JSON.parse(localStorageContent))
    console.log(memo)
  }

  // if(localStorageContent){
  //   localStorage.setItem('favMemes', JSON.stringify(myArray)) 
  // }
  
},[]);



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

                  <IonFabButton key={entry.id} className="fav-meme-item" onClick={()=>{click(entry)} } >

                    <IonIcon className="fav-meme-chip" icon={bookmarkOutline}  />

                  </IonFabButton>

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
          color="dark "
         
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
