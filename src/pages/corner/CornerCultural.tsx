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

const Cultural: React.FC = () => {

  const [memo, setMemo] = useState<Array<String>>([]);
  const [showToast1, setShowToast1] = useState(false)
  const [showToast2, setShowToast2] = useState(false)
  const [data, setData] = useState(false);

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
  const handleClick = () => {
    window.open("http://twitter.com/saigowthamr");
  };


  useEffect(() => {
    setTimeout(() => {
      setData(true);
    }, 3000);
  }, [])

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
            <IonBackButton color='light' />
          </IonButtons>
          <div className='home-div-logo '>
       
       <h4 className='home-text-logo padding-menu-others'><img className='home-logo' src="../assets/flor.png" alt="" /> Cultural festivals in Quebec </h4>
       {/* <IonButtons className="menu"  slot="right">
       <NavButtons />
     </IonButtons> */}
     </div>

        </IonToolbar>
      </IonHeader>
      <IonContent>
        <IonList className="music-list">
         <br />
          {cultura.map((entry) =>
       
             
 
  <IonCard className='div-cultural' >
    <img src={entry.img}/>
    <IonLabel ><p className='label-cultural' >{entry.ref}</p></IonLabel>
 
    
  
    <h1 className='text-cultural '>{entry.name}</h1>

    <p className='text-cultural '>{entry.description}</p>
    <br />
    <IonLabel>Check their webcite <IonIcon icon={arrowDownSharp}/></IonLabel>
    <IonButton color='light' onClick={() => {
    window.open(`${entry.src}`)
  }}>
    <IonLabel color='danger'>&nbsp;{entry.src} &nbsp;</IonLabel>    
             </IonButton>

  </IonCard>
         
          

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

export default Cultural;
