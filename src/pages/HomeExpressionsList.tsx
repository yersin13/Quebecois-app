import { IonAccordion, IonAccordionGroup, IonAvatar, IonBackButton, IonButton, IonButtons, IonCard, IonCardContent, IonCardHeader, IonCardTitle, IonCol, IonContent, IonFab, IonFabButton, IonFooter, IonGrid, IonHeader, IonIcon, IonImg, IonInfiniteScroll, IonInfiniteScrollContent, IonItem, IonLabel, IonList, IonPage, IonRow, IonSearchbar, IonTabBar, IonTabButton, IonText, IonThumbnail, IonTitle, IonToolbar, useIonLoading, useIonViewWillEnter } from '@ionic/react';
import ExploreContainer from '../components/ExploreContainer';
import { CategoriesExpresions, entriesExpressions } from '../data-expressions';
import { arrowUp, chevronForward, closeCircle, gameController } from 'ionicons/icons'
import { home as homeIcon, settings as settingsIcon, planetOutline as planetIcon } from 'ionicons/icons'
import './WordsList.css';

import { useEffect, useRef, useState } from 'react';

const HomeExpressionsList: React.FC = () => {
  const [colorMain, setColorMain] = useState(false)
  const [colorDrop, setColorDrop] = useState(false)
  const localStorageContent = localStorage.getItem('theme')

  useEffect(() => {
    if (localStorageContent?.match("dark")) {

      setColorMain(true)
      setColorDrop(true)

    } else if (localStorageContent?.match("light")) {
      setColorMain(false)
      setColorDrop(false)


    }
  })

  const contentRef = useRef<HTMLIonContentElement | null>(null);
  const scrollToTop = () => {
    contentRef.current && contentRef.current.scrollToTop();
  };

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


  const sortedArray = CategoriesExpresions.sort(function (a, b) {
    return a.id.toLowerCase().localeCompare(b.id.toLowerCase());
  });

  return (
    <IonPage>
      <IonHeader>

        <IonToolbar className="toolbar">
          <IonButtons slot="start">
            <IonBackButton color='light' />
          </IonButtons>
          <div className='home-div-logo '>
            <h4 className='home-text-logo padding-menu-others '><img className='home-logo' src="../assets/flor.png" alt="" /> Québécois Phrases </h4>
          </div>

        </IonToolbar>
      </IonHeader>
      <IonContent ref={contentRef} scrollEvents={true}>

        <IonGrid className='home-expressions-grid'>
          <IonRow>
            {CategoriesExpresions.map((entry) =>
              <IonCol size="6" className="home-expressions-col">
                <IonCard button
                  onClick={() => {
                    present({
                      message: 'Loading...',
                      duration: 300
                    })
                  }}
                  routerLink={`/home-expressions-list/${entry.id}`} className="card home-card">
                 <img className="image-home-expressions" src={`/assets/images-main/${entry.img}`} alt="" />
                  <IonCardHeader>
                   
                    <IonCardTitle>
                      <h4 className='home-title font'>
                        {entry.title}
                      </h4>
                    </IonCardTitle>
                  </IonCardHeader>
                </IonCard>
              </IonCol>
            )}

        
          </IonRow>
        </IonGrid>

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
        <IonFab horizontal="end" vertical="bottom" slot="fixed">
          <IonFabButton onClick={() => scrollToTop()}>
            <IonIcon icon={arrowUp} />
          </IonFabButton>
        </IonFab>

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

export default HomeExpressionsList;
