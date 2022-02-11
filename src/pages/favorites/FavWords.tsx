import { IonAvatar, IonBackButton, IonButton, IonButtons, IonCard, IonCardContent, IonCardHeader, IonCardTitle, IonContent, IonFooter, IonHeader, IonIcon, IonImg, IonInfiniteScroll, IonInfiniteScrollContent, IonItem, IonLabel, IonList, IonPage, IonSearchbar, IonTabBar, IonTabButton, IonText, IonThumbnail, IonTitle, IonToolbar, useIonLoading, useIonViewWillEnter } from '@ionic/react';

import { closeCircle, heart } from 'ionicons/icons'
import { home as homeIcon, settings as settingsIcon, planetOutline as planetIcon } from 'ionicons/icons'


import { useEffect, useState } from 'react';
import { entriesExpressions } from '../../data-expressions';
import { memes } from '../../data-memes';
import { entriesWords } from '../../data-words';
import ExpressionsList from '../ExpressionsList';

const FavWords: React.FC = () => {
  const [present, dismiss] = useIonLoading();
  
  const [searchText, setSearchText] = useState('');

  const [data, setData] = useState<string[]>([]);
  const [isInfiniteDisabled, setInfiniteDisabled] = useState(false);
 
  const [memo, setMemo]=useState<Array<String>>([]);

  const pushData = () => {
    const max = data.length + 20;
    const min = max - 20;
    const newData = [];
    for (let i = min; i < max; i++) {
      newData.push('Item' + i);
    }

    setData([
      ...data,
      ...newData
    ]);
  }
  const loadData = (ev: any) => {
    setTimeout(() => {
      pushData();
      console.log('Loaded data');
      ev.target.complete();
      if (data.length == 1000) {
        setInfiniteDisabled(true);
      }
    }, 500);
  }  

  useIonViewWillEnter(() => {
    pushData();
  });

  const localStorageContent = localStorage.getItem('favWords')

  useEffect(() => {
    // console.log(myArray)
   const localStorageContent = localStorage.getItem('favWords')
    if(localStorageContent=== null){
  
    
    //  console.log(localStorageContent)
    
    }else if(localStorageContent){
      // setMemo(localStorageContent)
    setMemo(JSON.parse(localStorageContent))
      // console.log(memo)
    
   
    }
 
  },[localStorageContent]);
  




  return (
    <IonPage>
     <IonHeader>
     
        <IonToolbar className="toolbar">
        <IonButtons slot="start">
            <IonBackButton/>
          </IonButtons>
          <div className='home-div-logo '>
      
            
      <h4 className='home-text-logo padding-menu-others '><img className='home-logo' src="../assets/flor.png" alt="" /> Favorite Words  </h4>
 
    </div>
         
        </IonToolbar>
      </IonHeader>
      <IonContent>
        <br />
    
      <IonList>
     
      {  
      entriesWords.filter(item => memo.includes(item.id)).map((entry)=>
      <IonItem button 
      onClick={() => {
        present({
          message: 'Loading...',
          duration: 300
        })
      }}  routerLink={`/Words-list/${entry.id}`} className="expressions-item">
        <div>
        
      <IonLabel ><h2 className="expressions-text">
         <img className='sub-logo-expression'  src="../assets/qcflag.png" alt="" />
     
         {entry.number}.- {entry.quebec}    <IonIcon color="danger" className="fav" icon={heart} /></h2></IonLabel>
        </div>
     

    </IonItem>
          )}
      
      </IonList>
          
      <IonInfiniteScroll
          onIonInfinite={loadData}
          threshold="100px"
          disabled={isInfiniteDisabled}
        >
          <IonInfiniteScrollContent
            loadingSpinner="bubbles"
            loadingText="Loading more data..."
          ></IonInfiniteScrollContent>
        </IonInfiniteScroll>
   
      </IonContent>
      <IonTabBar slot="bottom">
<IonTabButton tab="profile"  href="/home" >
    <IonIcon className="icons" icon={homeIcon} />
    <IonLabel className="label">Home</IonLabel>
  </IonTabButton>
{/*   
  <IonTabButton tab="settings" href="/settings" >
  <IonIcon className="icons" icon={settingsIcon} />
    <IonLabel className="label">Settings</IonLabel>
  </IonTabButton> */}
</IonTabBar>

    </IonPage>
  );
};

export default FavWords;
