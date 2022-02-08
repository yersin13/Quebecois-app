import { IonAvatar, IonBackButton, IonButton, IonButtons, IonCard, IonCardContent, IonCardHeader, IonCardTitle, IonContent, IonFabButton, IonFooter, IonHeader, IonIcon, IonImg, IonInfiniteScroll, IonInfiniteScrollContent, IonItem, IonLabel, IonList, IonPage, IonSearchbar, IonTabBar, IonTabButton, IonText, IonThumbnail, IonTitle, IonToolbar, useIonLoading, useIonViewWillEnter } from '@ionic/react';

import { addCircle, bookmarkOutline, closeCircle } from 'ionicons/icons'
import { home as homeIcon, settings as settingsIcon, planetOutline as planetIcon } from 'ionicons/icons'


import { useEffect, useState } from 'react';
import { entriesExpressions } from '../../data-expressions';
import { memes } from '../../data-memes';
import ExpressionsList from '../ExpressionsList';

const FavCorner: React.FC = () => {
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

  useEffect(() => {
    // console.log(myArray)
    const localStorageContent = localStorage.getItem('favCorner')
    if(localStorageContent=== null){
   
    
    //  console.log(localStorageContent)
    
    }else if(localStorageContent){
      // setMemo(localStorageContent)
    setMemo(JSON.parse(localStorageContent))
      // console.log(memo)
    
   
    }
 
  },[]);
  

// let res = entriesExpressions.map(x => ({...x,is:memo.includes(x.id)}))

// console.log(res)


const click= (user: { id: string; src: string; })=>{

}

const res = memes.filter(item => memo.includes(item.id));

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
     
      {memes.filter(item => memo.includes(item.id)).map((entry)=>
      <IonCard className="item-memes-corner">
      <IonCardHeader >
        <div className="div-header-meme">
          <img src={entry.src} alt="" />

          <IonFabButton key={entry.id} className="fav-meme-item" onClick={()=>{click(entry)} } >

          <IonIcon  className="fav-chip" icon={bookmarkOutline} />
        <IonIcon  className="fav-chip2" icon={addCircle} />

          </IonFabButton>

        </div>


      </IonCardHeader>




    </IonCard>
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

export default FavCorner;
