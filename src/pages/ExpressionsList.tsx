import { IonAccordion, IonAccordionGroup, IonAvatar, IonBackButton, IonButton, IonButtons, IonCard, IonCardContent, IonCardHeader, IonCardTitle, IonContent, IonFab, IonFabButton, IonFooter, IonHeader, IonIcon, IonImg, IonInfiniteScroll, IonInfiniteScrollContent, IonItem, IonLabel, IonList, IonPage, IonSearchbar, IonTabBar, IonTabButton, IonText, IonThumbnail, IonTitle, IonToolbar, useIonLoading, useIonViewWillEnter } from '@ionic/react';
import ExploreContainer from '../components/ExploreContainer';
import { entriesExpressions } from '../data-expressions';
import { arrowUp, chevronForward, closeCircle, gameController } from 'ionicons/icons'
import { home as homeIcon, settings as settingsIcon, planetOutline as planetIcon } from 'ionicons/icons'
import './WordsList.css';

import { useEffect, useRef, useState } from 'react';

const ExpressionsList: React.FC = () => {
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


  let categories = [
    {categorie:"food"},
    {categorie:"house"}
  ]
 
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
       
        <IonList>
        
    
          <IonAccordionGroup>
          
          <IonAccordion value="colors">
            <IonItem className={colorMain? 'drop-main-item-dark ': "drop-main-item-light"} slot="header">
              <IonLabel>Food & Kitchen</IonLabel>
             
                <IonThumbnail>
                <img className='' src="../assets/images-main/food.png" alt="" />
                </IonThumbnail>
              
            </IonItem>
      
            <IonList className={colorDrop? 'drop-item-dark': "drop-item-light"}  slot="content">
            {entriesExpressions.filter((entry) => {
            if (entry.category === "food")
              return entry
          }).map((entry) =>
            <IonItem button
              onClick={() => {
                present({
                  message: 'Loading...',
                  duration: 300
                })
              }} routerLink={`/expressions-list/${entry.id}`} className="expressions-item">
              <div>
              
                <IonLabel ><h2 className="expressions-text">
                  {/* <img className='sub-logo-expression' src="../assets/usa.png" alt="" /> */}
                   {entry.english}</h2><p className="expressions-text">
                  {/* <img className='sub-logo-expression' src="../assets/qcflag.png" alt="" /> */}
                   {entry.quebec}</p></IonLabel>
              </div>
          
            </IonItem>
            
          )}
            </IonList>
          </IonAccordion>
          <IonAccordion value="house">
            <IonItem className={colorMain? 'drop-main-item-dark ': "drop-main-item-light"} slot="header">
              <IonLabel>House & Family</IonLabel>
              <IonThumbnail>
                <img className='' src="../assets/images-main/house.png" alt="" />
                </IonThumbnail>
            </IonItem>
      
            <IonList className={colorDrop? 'drop-item-dark': "drop-item-light"}  slot="content">
            {entriesExpressions.filter((entry) => {
            if (entry.category === "house")
              return entry
          }).map((entry) =>
            <IonItem button
              onClick={() => {
                present({
                  message: 'Loading...',
                  duration: 300
                })
              }} routerLink={`/expressions-list/${entry.id}`} className="expressions-item">
                  <div>
              
              <IonLabel ><h2 className="expressions-text">
                {/* <img className='sub-logo-expression' src="../assets/usa.png" alt="" /> */}
                 {entry.english}</h2><p className="expressions-text">
                {/* <img className='sub-logo-expression' src="../assets/qcflag.png" alt="" /> */}
                 {entry.quebec}</p></IonLabel>
            </div>

            </IonItem>
          )}
            </IonList>
          </IonAccordion>
          <IonAccordion value="feelings">
            <IonItem className={colorMain? 'drop-main-item-dark ': "drop-main-item-light"} slot="header">
              <IonLabel>Feelings & Emotions</IonLabel>
              <IonThumbnail>
                <img className='' src="../assets/images-main/feelings.png" alt="" />
                </IonThumbnail>
            </IonItem>
      
            <IonList className={colorDrop? 'drop-item-dark': "drop-item-light"}  slot="content">
            {entriesExpressions.filter((entry) => {
            if (entry.category === "feelings")
              return entry
          }).map((entry) =>
            <IonItem button
              onClick={() => {
                present({
                  message: 'Loading...',
                  duration: 300
                })
              }} routerLink={`/expressions-list/${entry.id}`} className="expressions-item">
                  <div>
              
              <IonLabel ><h2 className="expressions-text">
                {/* <img className='sub-logo-expression' src="../assets/usa.png" alt="" /> */}
                 {entry.english}</h2><p className="expressions-text">
                {/* <img className='sub-logo-expression' src="../assets/qcflag.png" alt="" /> */}
                 {entry.quebec}</p></IonLabel>
            </div>

            </IonItem>
          )}
            </IonList>
          </IonAccordion>

          <IonAccordion value="daily">
            <IonItem className={colorMain? 'drop-main-item-dark ': "drop-main-item-light"} slot="header">
              <IonLabel>Daily Basics</IonLabel>
              <IonThumbnail>
                <img className='' src="../assets/images-main/daily.png" alt="" />
                </IonThumbnail>
            </IonItem>
      
            <IonList className={colorDrop? 'drop-item-dark': "drop-item-light"}  slot="content">
            {entriesExpressions.filter((entry) => {
            if (entry.category === "daily")
              return entry
          }).map((entry) =>
            <IonItem button
              onClick={() => {
                present({
                  message: 'Loading...',
                  duration: 300
                })
              }} routerLink={`/expressions-list/${entry.id}`} className="expressions-item">
                  <div>
              
              <IonLabel ><h2 className="expressions-text">
                {/* <img className='sub-logo-expression' src="../assets/usa.png" alt="" /> */}
                 {entry.english}</h2><p className="expressions-text">
                {/* <img className='sub-logo-expression' src="../assets/qcflag.png" alt="" /> */}
                 {entry.quebec}</p></IonLabel>
            </div>

            </IonItem>
          )}
            </IonList>
          </IonAccordion>
          <IonAccordion value="work">
            <IonItem className={colorMain? 'drop-main-item-dark ': "drop-main-item-light"} slot="header">
              <IonLabel>Work & School</IonLabel>
              <IonThumbnail>
                <img className='' src="../assets/images-main/work.png" alt="" />
                </IonThumbnail>
            </IonItem>
      
            <IonList className={colorDrop? 'drop-item-dark': "drop-item-light"}  slot="content">
            {entriesExpressions.filter((entry) => {
            if (entry.category === "work")
              return entry
          }).map((entry) =>
            <IonItem button
              onClick={() => {
                present({
                  message: 'Loading...',
                  duration: 300
                })
              }} routerLink={`/expressions-list/${entry.id}`} className="expressions-item">
                  <div>
              
              <IonLabel ><h2 className="expressions-text">
                {/* <img className='sub-logo-expression' src="../assets/usa.png" alt="" /> */}
                 {entry.english}</h2><p className="expressions-text">
                {/* <img className='sub-logo-expression' src="../assets/qcflag.png" alt="" /> */}
                 {entry.quebec}</p></IonLabel>
            </div>

            </IonItem>
          )}
            </IonList>
          </IonAccordion>

          <IonAccordion value="curse">
            <IonItem className={colorMain? 'drop-main-item-dark ': "drop-main-item-light"} slot="header">
              <IonLabel>Bad Words</IonLabel>
              <IonThumbnail>
                <img className='' src="../assets/images-main/curse.png" alt="" />
                </IonThumbnail>
            </IonItem>
      
            <IonList className={colorDrop? 'drop-item-dark': "drop-item-light"}  slot="content">
            {entriesExpressions.filter((entry) => {
            if (entry.category === "curse")
              return entry
          }).map((entry) =>
            <IonItem button
              onClick={() => {
                present({
                  message: 'Loading...',
                  duration: 300
                })
              }} routerLink={`/expressions-list/${entry.id}`} className="expressions-item">
                   <div>
              
              <IonLabel ><h2 className="expressions-text">
                {/* <img className='sub-logo-expression' src="../assets/usa.png" alt="" /> */}
                 {entry.english}</h2><p className="expressions-text">
                {/* <img className='sub-logo-expression' src="../assets/qcflag.png" alt="" /> */}
                 {entry.quebec}</p></IonLabel>
            </div>

            </IonItem>
          )}
            </IonList>
          </IonAccordion>
          <IonAccordion value="sex">
            <IonItem className={colorMain? 'drop-main-item-dark ': "drop-main-item-light"} slot="header">
              <IonLabel>Love & Sex</IonLabel>
              <IonThumbnail>
                <img className='' src="../assets/images-main/sex.png" alt="" />
                </IonThumbnail>
            </IonItem>
      
            <IonList className={colorDrop? 'drop-item-dark': "drop-item-light"}  slot="content">
            {entriesExpressions.filter((entry) => {
            if (entry.category === "sex")
              return entry
          }).map((entry) =>
            <IonItem button
              onClick={() => {
                present({
                  message: 'Loading...',
                  duration: 300
                })
              }} routerLink={`/expressions-list/${entry.id}`} className="expressions-item">
                  <div>
              
              <IonLabel ><h2 className="expressions-text">
                {/* <img className='sub-logo-expression' src="../assets/usa.png" alt="" /> */}
                 {entry.english}</h2><p className="expressions-text">
                {/* <img className='sub-logo-expression' src="../assets/qcflag.png" alt="" /> */}
                 {entry.quebec}</p></IonLabel>
            </div>

            </IonItem>
          )}
            </IonList>
          </IonAccordion>
          <IonAccordion value="weather">
            <IonItem className={colorMain? 'drop-main-item-dark ': "drop-main-item-light"} slot="header">
              <IonLabel>Weather</IonLabel>
              <IonThumbnail>
                <img className='' src="../assets/images-main/weather.png" alt="" />
                </IonThumbnail>
            </IonItem>
      
            <IonList className={colorDrop? 'drop-item-dark': "drop-item-light"}  slot="content">
            {entriesExpressions.filter((entry) => {
            if (entry.category === "weather")
              return entry
          }).map((entry) =>
            <IonItem button
              onClick={() => {
                present({
                  message: 'Loading...',
                  duration: 300
                })
              }} routerLink={`/expressions-list/${entry.id}`} className="expressions-item">
                  <div>
              
              <IonLabel ><h2 className="expressions-text">
                {/* <img className='sub-logo-expression' src="../assets/usa.png" alt="" /> */}
                 {entry.english}</h2><p className="expressions-text">
                {/* <img className='sub-logo-expression' src="../assets/qcflag.png" alt="" /> */}
                 {entry.quebec}</p></IonLabel>
            </div>

            </IonItem>
          )}
            </IonList>
          </IonAccordion>

          <IonAccordion value="clothes">
            <IonItem className={colorMain? 'drop-main-item-dark ': "drop-main-item-light"} slot="header">
              <IonLabel>Clothes & Appearance</IonLabel>
              <IonThumbnail>
                <img className='' src="../assets/images-main/clothes.png" alt="" />
                </IonThumbnail>
            </IonItem>
      
            <IonList className={colorDrop? 'drop-item-dark': "drop-item-light"}  slot="content">
            {entriesExpressions.filter((entry) => {
            if (entry.category === "clothes")
              return entry
          }).map((entry) =>
            <IonItem button
              onClick={() => {
                present({
                  message: 'Loading...',
                  duration: 300
                })
              }} routerLink={`/expressions-list/${entry.id}`} className="expressions-item">
                  <div>
              
              <IonLabel ><h2 className="expressions-text">
                {/* <img className='sub-logo-expression' src="../assets/usa.png" alt="" /> */}
                 {entry.english}</h2><p className="expressions-text">
                {/* <img className='sub-logo-expression' src="../assets/qcflag.png" alt="" /> */}
                 {entry.quebec}</p></IonLabel>
            </div>

            </IonItem>
          )}
            </IonList>
          </IonAccordion>
          </IonAccordionGroup>
           
   
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
