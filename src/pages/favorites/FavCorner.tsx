import { IonAvatar, IonBackButton, IonButton, IonButtons, IonCard, IonCardContent, IonCardHeader, IonCardTitle, IonContent, IonFabButton, IonFooter, IonHeader, IonIcon, IonImg, IonInfiniteScroll, IonInfiniteScrollContent, IonItem, IonLabel, IonList, IonPage, IonSearchbar, IonTabBar, IonTabButton, IonText, IonThumbnail, IonTitle, IonToolbar, useIonLoading, useIonViewWillEnter } from '@ionic/react';

import { addCircle, bookmarkOutline, closeCircle, heart, trash } from 'ionicons/icons'
import { home as homeIcon, settings as settingsIcon, planetOutline as planetIcon } from 'ionicons/icons'


import { useEffect, useState } from 'react';
import { entriesExpressions } from '../../data-expressions';
import { films } from '../../data-films';
import { food } from '../../data-food';
import { memes } from '../../data-memes';
import { music } from '../../data-music';
import ExpressionsList from '../ExpressionsList';

const FavCorner: React.FC = () => {
  const [present, dismiss] = useIonLoading();

  const [searchText, setSearchText] = useState('');

  const [data, setData] = useState<string[]>([]);
  const [isInfiniteDisabled, setInfiniteDisabled] = useState(false);

  const [memo, setMemo] = useState<Array<String>>([]);

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
      // console.log('Loaded data');
      ev.target.complete();
      if (data.length == 1000) {
        setInfiniteDisabled(true);
      }
    }, 500);
  }

  useIonViewWillEnter(() => {
    pushData();
  });


  const localStorageContent = localStorage.getItem('favCorner')

  useEffect(() => {
    // console.log(myArray)

    if (localStorageContent === null) {


      //  console.log(localStorageContent)

    } else if (localStorageContent) {
      // setMemo(localStorageContent)
      setMemo(JSON.parse(localStorageContent))
      console.log(memo)


    }

  }, [localStorageContent]);


  // let res = entriesExpressions.map(x => ({...x,is:memo.includes(x.id)}))

  // console.log(res)


  const click = (user: { id: string; src: string; }) => {
    if (localStorageContent === null) {

    } else if (localStorageContent) {
      let arr = JSON.parse(localStorageContent).filter((e: string) => e !== user.id); // will return ['A', 'C']) 
      localStorage.setItem('favCorner', JSON.stringify(arr))
      window.location.reload()
      console.log(memo)
    }


  }



  return (
    <IonPage>
      <IonHeader>

        <IonToolbar className="toolbar">
          <IonButtons slot="start">
            <IonBackButton />
          </IonButtons>
          <div className='home-div-logo '>
            <h4 className='home-text-logo padding-menu-others '><img className='home-logo' src="../assets/flor.png" alt="" /> Favorite Corner </h4>
          </div>

        </IonToolbar>
      </IonHeader>
      <IonContent>
        <IonSearchbar className="expressions-search" value={searchText} onIonChange={e => setSearchText(e.detail.value!)}></IonSearchbar>
        <IonList>

          <div className='div-text-music'>
            <h3 className='text-music'>Food Québécois</h3>
          </div>

          {food.filter(item => memo.includes(item.id)).map((entry) =>

            <IonItem button routerLink={`/corner-food/${entry.id}`} lines="none" className="item-food-corner">
              <h3 className='text-food-corner'>{entry.name}</h3>

              <IonThumbnail slot='end'>
                <img src={entry.src} alt="" />
              </IonThumbnail>
            </IonItem>

          )}
<br />
          <div className='div-text-music'>
            <h3 className='text-music'>Films Québécois</h3>
          </div>
          {films.filter(item => memo.includes(item.id)).map((entry) =>

            <IonItem button routerLink={`/corner-films/${entry.id}`} lines="none" className="item-food-corner">
              <h3 className='text-food-corner'>{entry.name}</h3>

              <IonThumbnail slot='end'>
                <img src={entry.img} alt="" />
              </IonThumbnail>
            </IonItem>

          )}

<br />
          <div className='div-text-music'>
            <h3 className='text-music'>Music Québécois</h3>
          </div>
          {music.filter(item => memo.includes(item.id)).map((entry) =>
            <div className="div-music div-header-meme">
              <iframe className='iframe-music' src={entry.src} width="100%" height="80" frameBorder="0" allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture" ></iframe>
              <IonFabButton color="light" key={entry.id} className="fav-meme-item" onClick={() => { click(entry) }} >
              <IonIcon color="danger" className="fav-chip" icon={heart} />
              </IonFabButton>
            </div>
          )}

<br />
          <div className='div-text-music'>
            <h3 className='text-music'>Memes Québécois</h3>
          </div>
          {memes.filter(item => memo.includes(item.id)).map((entry) =>
            <IonCard className="item-memes-corner">
              <IonCardHeader >
                <div className="div-header-meme">
                  <img src={entry.src} alt="" />

                  <IonFabButton color="light" key={entry.id} className="fav-meme-item" onClick={() => { click(entry) }} >
                  <IonIcon color="danger" className="fav-chip" icon={heart} />
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
        <IonTabButton tab="profile" href="/home" >
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
