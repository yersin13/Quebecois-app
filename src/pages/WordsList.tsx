import { IonAvatar, IonBackButton, IonButton, IonButtons, IonCard, IonCardContent, IonCardHeader, IonCardTitle, IonContent, IonFooter, IonHeader, IonIcon, IonImg, IonInfiniteScroll, IonInfiniteScrollContent, IonItem, IonLabel, IonList, IonPage, IonSearchbar, IonTabBar, IonTabButton, IonText, IonThumbnail, IonTitle, IonToolbar, useIonLoading, useIonViewWillEnter } from '@ionic/react';
import ExploreContainer from '../components/ExploreContainer';
import { entriesWords } from '../data-words';
import { closeCircle } from 'ionicons/icons'
import { home as homeIcon, settings as settingsIcon, planetOutline as planetIcon } from 'ionicons/icons'
import './WordsList.css';

import { useEffect, useState } from 'react';

const WordsList: React.FC = () => {
  const [present, dismiss] = useIonLoading();
  
  const [searchText, setSearchText] = useState('');

  const [data, setData] = useState<string[]>([]);
  const [isInfiniteDisabled, setInfiniteDisabled] = useState(false);

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
      <IonSearchbar className="expressions-search" value={searchText} onIonChange={e => setSearchText(e.detail.value!)}></IonSearchbar>
      <IonList>
      {/* <div className='div-sub-logo'> 
      <img className='sub-logo'  src="../assets/usa.png" alt="" />
        <img className='sub-logo'  src="../assets/qcflag.png" alt="" />
        </div> */}
      {entriesWords.filter((entry)=>{
if (searchText == ""){
  return entry
} else if (entry.quebec.toLocaleLowerCase().includes(searchText.toLocaleLowerCase()))
    return entry  }).map((entry)=>
       <IonItem button 
       onClick={() => {
         present({
           message: 'Loading...',
           duration: 300
         })
       }}  routerLink={`/words-list/${entry.id}`} className="expressions-item">
          {/* <IonLabel ><h2 className="expressions-text">
          <img className='sub-logo-expression'  src="../assets/usa.png" alt="" />
            {entry.english}</h2></IonLabel> */}
          <p>-</p>
       <IonLabel ><h2 className="expressions-text">
       <img className='sub-logo-expression'  src="../assets/qcflag.png" alt="" />
       {entry.id}.- {entry.quebec}</h2></IonLabel>
       {/* <IonThumbnail>
      <img className="expressions-img" src={entry.src} alt="" />
      </IonThumbnail> */}
     
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

export default WordsList;
