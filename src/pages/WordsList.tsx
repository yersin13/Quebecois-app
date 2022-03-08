import { IonAccordion, IonAccordionGroup, IonAvatar, IonBackButton, IonButton, IonButtons, IonCard, IonCardContent, IonCardHeader, IonCardTitle, IonContent, IonFab, IonFabButton, IonFooter, IonHeader, IonIcon, IonImg, IonInfiniteScroll, IonInfiniteScrollContent, IonItem, IonLabel, IonList, IonPage, IonSearchbar, IonTabBar, IonTabButton, IonText, IonThumbnail, IonTitle, IonToolbar, useIonLoading, useIonViewWillEnter } from '@ionic/react';
import ExploreContainer from '../components/ExploreContainer';
import { entriesWords } from '../data-words';
import { arrowForward, arrowUp, closeCircle } from 'ionicons/icons'
import { home as homeIcon, settings as settingsIcon, planetOutline as planetIcon } from 'ionicons/icons'
import './WordsList.css';

import { useEffect, useRef, useState } from 'react';


const WordsList: React.FC = () => {



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

  // let objArray= [
  //   {v1:"Bee", v2: 2}, 
  //   {v1:"Apple", v2: 8}, 
  //   {v1:"bat", v2: 4},
  // ];
  const sortedArray = entriesWords.sort(function (a, b) {
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


            <h4 className='home-text-logo padding-menu-others '><img className='home-logo' src="../assets/flor.png" alt="" /> Québécois Words  </h4>

          </div>

        </IonToolbar>
      </IonHeader>
      <IonContent ref={contentRef} scrollEvents={true}>
        {/* <IonSearchbar className="expressions-search" value={searchText} onIonChange={e => setSearchText(e.detail.value!)}></IonSearchbar> */}
        <IonList>

          {/* {entriesWords.filter((entry)=>{
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
        
          <p></p>
       <IonLabel ><h1 className="expressions-text">
       <img className='sub-logo-expression'  src="../assets/qcflag.png" alt="" />
       {entry.number}.- {entry.quebec}</h1></IonLabel>

     </IonItem>
          )} */}

          <br />

          <IonAccordionGroup>


          
       
            <IonAccordion value="clothes">
              <IonItem className={colorMain ? 'drop-main-item-dark ' : "drop-main-item-light"} slot="header">
                <IonLabel>Clothes & Appearance</IonLabel>
                <IonThumbnail>
                  <img className='' src="../assets/images-main/clothes.png" alt="" />
                </IonThumbnail>
              </IonItem>

              <IonList className={colorDrop ? 'drop-item-dark' : "drop-item-light"} slot="content">
                {sortedArray.sort(function (a, b) {
                  
                  return a.english.toLowerCase().localeCompare(b.english.toLowerCase());
                }).filter((entry) => {
                  if (entry.category === "clothes")
                    return entry
                }).map((entry) =>
                  <IonItem button
                    onClick={() => {
                      present({
                        message: 'Loading...',
                        duration: 300
                      })
                    }} routerLink={`/words-list/${entry.id}`} className="expressions-item">
                    <div>

                      <IonLabel ><h2 className="expressions-text">
                        {/* <img className='sub-logo-expression' src="../assets/usa.png" alt="" /> */}
                        {entry.english}</h2><p className="expressions-text">
                          {/* <img className='sub-logo-expression' src="../assets/qcflag.png" alt="" /> */}
                          {entry.quebec}</p></IonLabel>
                    </div>
                    <IonThumbnail slot='end'>
                      <IonIcon icon={arrowForward} />
                    </IonThumbnail>
                  </IonItem>
                )}
              </IonList>
            </IonAccordion>

            <IonAccordion value="food">
              <IonItem className={colorMain ? 'drop-main-item-dark ' : "drop-main-item-light"} slot="header">
                <IonLabel>Food & Kitchen</IonLabel>
                <IonThumbnail>
                  <img className='' src="../assets/images-main/food.png" alt="" />
                </IonThumbnail>
              </IonItem>

              <IonList className={colorDrop ? 'drop-item-dark' : "drop-item-light"} slot="content">
                {sortedArray.sort(function (a, b) {
                  
                  return a.english.toLowerCase().localeCompare(b.english.toLowerCase());
                }).filter((entry) => {
                  if (entry.category === "food")
                    return entry
                }).map((entry) =>
                  <IonItem button
                    onClick={() => {
                      present({
                        message: 'Loading...',
                        duration: 300
                      })
                    }} routerLink={`/words-list/${entry.id}`} className="expressions-item">
                    <div>

                      <IonLabel ><h2 className="expressions-text">
                        {/* <img className='sub-logo-expression' src="../assets/usa.png" alt="" /> */}
                        {entry.english}</h2><p className="expressions-text">
                          {/* <img className='sub-logo-expression' src="../assets/qcflag.png" alt="" /> */}
                          {entry.quebec}</p></IonLabel>
                    </div>
                    <IonThumbnail slot='end'>
                      <IonIcon icon={arrowForward} />
                    </IonThumbnail>
                  </IonItem>

                )}
              </IonList>
            </IonAccordion>

            <IonAccordion value="feelings">
              <IonItem className={colorMain ? 'drop-main-item-dark ' : "drop-main-item-light"} slot="header">
                <IonLabel>Feelings & Emotions</IonLabel>
                <IonThumbnail>
                  <img className='' src="../assets/images-main/feelings.png" alt="" />
                </IonThumbnail>
              </IonItem>

              <IonList className={colorDrop ? 'drop-item-dark' : "drop-item-light"} slot="content">
                {sortedArray.sort(function (a, b) {
                  
                  return a.english.toLowerCase().localeCompare(b.english.toLowerCase());
                }).filter((entry) => {
                  if (entry.category === "feelings")
                    return entry
                }).map((entry) =>
                  <IonItem button
                    onClick={() => {
                      present({
                        message: 'Loading...',
                        duration: 300
                      })
                    }} routerLink={`/words-list/${entry.id}`} className="expressions-item">
                    <div>

                      <IonLabel ><h2 className="expressions-text">
                        {/* <img className='sub-logo-expression' src="../assets/usa.png" alt="" /> */}
                        {entry.english}</h2><p className="expressions-text">
                          {/* <img className='sub-logo-expression' src="../assets/qcflag.png" alt="" /> */}
                          {entry.quebec}</p></IonLabel>
                    </div>
                    <IonThumbnail slot='end'>
                      <IonIcon icon={arrowForward} />
                    </IonThumbnail>
                  </IonItem>
                )}
              </IonList>
            </IonAccordion>

            <IonAccordion value="daily">
              <IonItem className={colorMain ? 'drop-main-item-dark ' : "drop-main-item-light"} slot="header">
                <IonLabel>Daily Basics</IonLabel>
                <IonThumbnail>
                  <img className='' src="../assets/images-main/daily.png" alt="" />
                </IonThumbnail>
              </IonItem>

              <IonList className={colorDrop ? 'drop-item-dark' : "drop-item-light"} slot="content">
                {sortedArray.sort(function (a, b) {
                  
                  return a.english.toLowerCase().localeCompare(b.english.toLowerCase());
                }).filter((entry) => {
                  if (entry.category === "daily")
                    return entry
                }).map((entry) =>
                  <IonItem button
                    onClick={() => {
                      present({
                        message: 'Loading...',
                        duration: 300
                      })
                    }} routerLink={`/words-list/${entry.id}`} className="expressions-item">
                    <div>

                      <IonLabel ><h2 className="expressions-text">
                        {/* <img className='sub-logo-expression' src="../assets/usa.png" alt="" /> */}
                        {entry.english}</h2><p className="expressions-text">
                          {/* <img className='sub-logo-expression' src="../assets/qcflag.png" alt="" /> */}
                          {entry.quebec}</p></IonLabel>
                    </div>
                    <IonThumbnail slot='end'>
                      <IonIcon icon={arrowForward} />
                    </IonThumbnail>
                  </IonItem>
                )}
              </IonList>
            </IonAccordion>

            <IonAccordion value="house">
              <IonItem className={colorMain ? 'drop-main-item-dark ' : "drop-main-item-light"} slot="header">
                <IonLabel>House & Family</IonLabel>
                <IonThumbnail>
                  <img className='' src="../assets/images-main/house.png" alt="" />
                </IonThumbnail>
              </IonItem>

              <IonList className={colorDrop ? 'drop-item-dark' : "drop-item-light"} slot="content">
                {sortedArray.sort(function (a, b) {
                  
                  return a.english.toLowerCase().localeCompare(b.english.toLowerCase());
                }).filter((entry) => {
                  if (entry.category === "house")
                    return entry
                }).map((entry) =>
                  <IonItem button
                    onClick={() => {
                      present({
                        message: 'Loading...',
                        duration: 300
                      })
                    }} routerLink={`/words-list/${entry.id}`} className="expressions-item">
                    <div>

                      <IonLabel ><h2 className="expressions-text">
                        {/* <img className='sub-logo-expression' src="../assets/usa.png" alt="" /> */}
                        {entry.english}</h2><p className="expressions-text">
                          {/* <img className='sub-logo-expression' src="../assets/qcflag.png" alt="" /> */}
                          {entry.quebec}</p></IonLabel>
                    </div>
                    <IonThumbnail slot='end'>
                      <IonIcon icon={arrowForward} />
                    </IonThumbnail>
                  </IonItem>
                )}
              </IonList>
            </IonAccordion>

            <IonAccordion value="sex">
              <IonItem className={colorMain ? 'drop-main-item-dark ' : "drop-main-item-light"} slot="header">
                <IonLabel>Love & Sex</IonLabel>
                <IonThumbnail>
                  <img className='' src="../assets/images-main/sex.png" alt="" />
                </IonThumbnail>
              </IonItem>

              <IonList className={colorDrop ? 'drop-item-dark' : "drop-item-light"} slot="content">
                {sortedArray.sort(function (a, b) {
                  
                  return a.english.toLowerCase().localeCompare(b.english.toLowerCase());
                }).filter((entry) => {
                  if (entry.category === "sex")
                    return entry
                }).map((entry) =>
                  <IonItem button
                    onClick={() => {
                      present({
                        message: 'Loading...',
                        duration: 300
                      })
                    }} routerLink={`/words-list/${entry.id}`} className="expressions-item">
                    <div>

                      <IonLabel ><h2 className="expressions-text">
                        {/* <img className='sub-logo-expression' src="../assets/usa.png" alt="" /> */}
                        {entry.english}</h2><p className="expressions-text">
                          {/* <img className='sub-logo-expression' src="../assets/qcflag.png" alt="" /> */}
                          {entry.quebec}</p></IonLabel>
                    </div>
                    <IonThumbnail slot='end'>
                      <IonIcon icon={arrowForward} />
                    </IonThumbnail>
                  </IonItem>
                )}
              </IonList>
            </IonAccordion>

            <IonAccordion value="curse">
              <IonItem className={colorMain ? 'drop-main-item-dark ' : "drop-main-item-light"} slot="header">
                <IonLabel>Sacres</IonLabel>
                <IonThumbnail>
                  <img className='' src="../assets/images-main/curse.png" alt="" />
                </IonThumbnail>
              </IonItem>

              <IonList className={colorDrop ? 'drop-item-dark' : "drop-item-light"} slot="content">
                {sortedArray.sort(function (a, b) {
                  
                  return a.english.toLowerCase().localeCompare(b.english.toLowerCase());
                }).filter((entry) => {
                  if (entry.category === "curse")
                    return entry
                }).map((entry) =>
                  <IonItem button
                    onClick={() => {
                      present({
                        message: 'Loading...',
                        duration: 300
                      })
                    }} routerLink={`/words-list/${entry.id}`} className="expressions-item">
                    <div>

                      <IonLabel ><h2 className="expressions-text">
                        {/* <img className='sub-logo-expression' src="../assets/usa.png" alt="" /> */}
                        {entry.english}</h2><p className="expressions-text">
                          {/* <img className='sub-logo-expression' src="../assets/qcflag.png" alt="" /> */}
                          {entry.quebec}</p></IonLabel>
                    </div>
                    <IonThumbnail slot='end'>
                      <IonIcon icon={arrowForward} />
                    </IonThumbnail>
                  </IonItem>
                )}
              </IonList>
            </IonAccordion>

            <IonAccordion value="weather">
              <IonItem className={colorMain ? 'drop-main-item-dark ' : "drop-main-item-light"} slot="header">
                <IonLabel>Weather</IonLabel>
                <IonThumbnail>
                  <img className='' src="../assets/images-main/weather.png" alt="" />
                </IonThumbnail>
              </IonItem>

              <IonList className={colorDrop ? 'drop-item-dark' : "drop-item-light"} slot="content">
                {sortedArray.sort(function (a, b) {
                  
                  return a.english.toLowerCase().localeCompare(b.english.toLowerCase());
                }).filter((entry) => {
                  if (entry.category === "weather")
                    return entry
                }).map((entry) =>
                  <IonItem button
                    onClick={() => {
                      present({
                        message: 'Loading...',
                        duration: 300
                      })
                    }} routerLink={`/words-list/${entry.id}`} className="expressions-item">
                    <div>

                      <IonLabel ><h2 className="expressions-text">
                        {/* <img className='sub-logo-expression' src="../assets/usa.png" alt="" /> */}
                        {entry.english}</h2><p className="expressions-text">
                          {/* <img className='sub-logo-expression' src="../assets/qcflag.png" alt="" /> */}
                          {entry.quebec}</p></IonLabel>
                    </div>
                    <IonThumbnail slot='end'>
                      <IonIcon icon={arrowForward} />
                    </IonThumbnail>
                  </IonItem>

                )}
              </IonList>
            </IonAccordion>

            <IonAccordion value="work">
              <IonItem className={colorMain ? 'drop-main-item-dark ' : "drop-main-item-light"} slot="header">
                <IonLabel>Work & School</IonLabel>
                <IonThumbnail>
                  <img className='' src="../assets/images-main/work.png" alt="" />
                </IonThumbnail>
              </IonItem>

              <IonList className={colorDrop ? 'drop-item-dark' : "drop-item-light"} slot="content">
                {sortedArray.sort(function (a, b) {
                  
                  return a.english.toLowerCase().localeCompare(b.english.toLowerCase());
                }).filter((entry) => {
                  if (entry.category === "work")
                    return entry
                }).map((entry) =>
                  <IonItem button
                    onClick={() => {
                      present({
                        message: 'Loading...',
                        duration: 300
                      })
                    }} routerLink={`/words-list/${entry.id}`} className="expressions-item">
                    <div>

                      <IonLabel ><h2 className="expressions-text">
                        {/* <img className='sub-logo-expression' src="../assets/usa.png" alt="" /> */}
                        {entry.english}</h2><p className="expressions-text">
                          {/* <img className='sub-logo-expression' src="../assets/qcflag.png" alt="" /> */}
                          {entry.quebec}</p></IonLabel>
                    </div>
                    <IonThumbnail slot='end'>
                      <IonIcon icon={arrowForward} />
                    </IonThumbnail>
                  </IonItem>
                )}
              </IonList>
            </IonAccordion>

            <IonAccordion value="greetings">
              <IonItem className={colorMain ? 'drop-main-item-dark ' : "drop-main-item-light"} slot="header">
                <IonLabel>Greetings</IonLabel>
                <IonThumbnail>
                  <img className='' src="../assets/images-main/greetings.png" alt="" />
                </IonThumbnail>
              </IonItem>


              <IonList className={colorDrop ? 'drop-item-dark' : "drop-item-light"} slot="content">

                {sortedArray.sort(function (a, b) {
                  
                  return a.english.toLowerCase().localeCompare(b.english.toLowerCase());
                }).filter((entry) => {
                  if (entry.category === "greetings")
                    return entry
                }).map((entry) =>
                  <IonItem button
                    onClick={() => {
                      present({
                        message: 'Loading...',
                        duration: 300
                      })
                    }} routerLink={`/words-list/${entry.id}`} className="expressions-item">
                    <div>

                      <IonLabel ><h2 className="expressions-text">
                        {/* <img className='sub-logo-expression' src="../assets/usa.png" alt="" /> */}
                        {entry.english}</h2><p className="expressions-text">
                          {/* <img className='sub-logo-expression' src="../assets/qcflag.png" alt="" /> */}
                          {entry.quebec}</p></IonLabel>
                    </div>
                    <IonThumbnail slot='end'>
                      <IonIcon icon={arrowForward} />
                    </IonThumbnail>
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

export default WordsList;
