import { IonAccordion, IonAccordionGroup, IonAvatar, IonBackButton, IonButton, IonButtons, IonCard, IonCardContent, IonCardHeader, IonCardTitle, IonContent, IonFab, IonFabButton, IonFooter, IonHeader, IonIcon, IonImg, IonInfiniteScroll, IonInfiniteScrollContent, IonItem, IonLabel, IonList, IonPage, IonSearchbar, IonTabBar, IonTabButton, IonText, IonThumbnail, IonTitle, IonToolbar, useIonLoading, useIonViewWillEnter } from '@ionic/react';
import ExploreContainer from '../components/ExploreContainer';
import { CategoriesExpresions, entriesExpressions } from '../data-expressions';
import { arrowUp, chevronForward, closeCircle, gameController } from 'ionicons/icons'
import { home as homeIcon, settings as settingsIcon, planetOutline as planetIcon } from 'ionicons/icons'
import './WordsList.css';

import { useEffect, useRef, useState } from 'react';
import { useParams } from 'react-router';

interface RouteParams {
  id: string;
}

const ExpressionsList: React.FC = () => {

   
  const { id } = useParams<RouteParams>();
  const [colorMain, setColorMain] = useState(false)
  const [colorDrop, setColorDrop] = useState(false)
  const localStorageContent = localStorage.getItem('theme')
  
  useEffect(()=>{
    if (localStorageContent?.match("dark")) {
     
      setColorMain(true)
      setColorDrop(true)
  
    } else if (localStorageContent?.match("light")) {
      setColorMain(false)
      setColorDrop(false)
   
      
    }
  })  

  const contentRef = useRef<HTMLIonContentElement | null>(null);
  const scrollToTop= () => {
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


  const sortedArray = entriesExpressions.sort(function (a, b) {
    return a.number.toLowerCase().localeCompare(b.number.toLowerCase());
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
             
            <IonList className={colorMain? 'drop-main-item-dark ': "drop-main-item-light"} >
          
            {CategoriesExpresions.filter((entry) => {
            if (entry.id === id)
              return entry
          }).map((entry) =>
            
                <IonCard>
                   <h2 className="expressions-text"> {entry.title}</h2>
                     <img className="image-home-expressions-single" src={`/assets/images-main/${entry.img}`} alt="" />
                    
                </IonCard>
              

          
            )}
            {sortedArray.sort(function (a, b) {
                  
                  return a.english.toLowerCase().localeCompare(b.english.toLowerCase());
                }).filter((entry) => {
            if (entry.category === id)
              return entry
          }).map((entry) =>
           
 <IonItem button lines='none'
              onClick={() => {
                present({
                  message: 'Loading...',
                  duration: 300
                })
              }} routerLink={`/expressions-list/${entry.id}`} className="expressions-item">
               
               
 
        <IonLabel><h2 className="expressions-text">
                {/* <img className='sub-logo-expression' src="../assets/usa.png" alt="" /> */}
                 {entry.english}</h2><p className="expressions-text">
                {/* <img className='sub-logo-expression' src="../assets/qcflag.png" alt="" /> */}
                 {entry.quebec}</p></IonLabel>
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
        <IonFab horizontal="end" vertical="bottom" slot="fixed">
          <IonFabButton onClick={()=>scrollToTop()}>
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

export default ExpressionsList;



// {sortedArray.sort(function (a, b) {
                  
//   return a.english.toLowerCase().localeCompare(b.english.toLowerCase());
// }).filter((entry) => {
// if (entry.category === "clothes")
// return entry
// }).map((entry) =>
// <div>
// <IonItem button lines='none'
// onClick={() => {
// present({
//   message: 'Loading...',
//   duration: 300
// })
// }} routerLink={`/expressions-list/${entry.id}`} className="expressions-item">
//   <div>

// <IonLabel ><h2 className="expressions-text">

//  {entry.english}</h2><p className="expressions-text">

//  {entry.quebec}</p></IonLabel>
// </div>

// </IonItem>
// </div>

// )}