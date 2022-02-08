import { IonAvatar, IonBackButton, IonButton, IonButtons, IonCard, IonCardContent, IonCardHeader, IonCardTitle, IonContent, IonFooter, IonHeader, IonIcon, IonImg, IonInfiniteScroll, IonInfiniteScrollContent, IonItem, IonLabel, IonList, IonPage, IonSearchbar, IonTabBar, IonTabButton, IonText, IonThumbnail, IonTitle, IonToolbar, useIonLoading, useIonViewWillEnter } from '@ionic/react';

import { closeCircle } from 'ionicons/icons'
import { home as homeIcon, settings as settingsIcon, planetOutline as planetIcon } from 'ionicons/icons'


import { useEffect, useState } from 'react';
import { entriesExpressions } from '../../data-expressions';


const FavExpressionsList: React.FC = () => {
  const [present, dismiss] = useIonLoading();
  
  const [searchText, setSearchText] = useState('');

  const [data, setData] = useState<string[]>([]);
  const [isInfiniteDisabled, setInfiniteDisabled] = useState(false);
  const [none, setNone] = useState(false);
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

  useEffect(() => {
    // console.log(myArray)
    const localStorageContent = localStorage.getItem('favExpressions')
    if(localStorageContent=== null){
   setNone(true)
    
    //  console.log(localStorageContent)
    
    }else if(localStorageContent){
      // setMemo(localStorageContent)
    setMemo(JSON.parse(localStorageContent))
      // console.log(memo)
    
   
    }
 
  },[]);
  

// let res = entriesExpressions.map(x => ({...x,is:memo.includes(x.id)}))

// console.log(res)




const res = entriesExpressions.filter(item => memo.includes(item.id));

console.log(res);

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
     
      {none? <p>Nothing to see here</p>:
      
      entriesExpressions.filter(item => memo.includes(item.id)).map((entry)=>
      <IonItem button 
      onClick={() => {
        present({
          message: 'Loading...',
          duration: 300
        })
      }}  routerLink={`/expressions-list/${entry.id}`} className="expressions-item">
        <div>
        {/* <IonLabel ><h6 className="expressions-text">
          <img className='sub-logo-expression'  src="../assets/usa.png" alt="" />
          {entry.englishMeaning}</h6></IonLabel> */}
      <IonLabel ><h2 className="expressions-text">
         <img className='sub-logo-expression'  src="../assets/qcflag.png" alt="" />
         {entry.number}.- {entry.quebec}</h2></IonLabel>
        </div>
     
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

export default FavExpressionsList;
