import { IonAccordion, IonAccordionGroup, IonAvatar, IonBackButton, IonButton, IonButtons, IonCard, IonCardContent, IonCardHeader, IonCardTitle, IonContent, IonFooter, IonHeader, IonIcon, IonImg, IonInfiniteScroll, IonInfiniteScrollContent, IonItem, IonLabel, IonList, IonPage, IonSearchbar, IonTabBar, IonTabButton, IonText, IonThumbnail, IonTitle, IonToolbar, useIonLoading, useIonViewWillEnter } from '@ionic/react';
import ExploreContainer from '../components/ExploreContainer';
import { entriesExpressions } from '../data-expressions';
import { chevronForward, closeCircle, gameController } from 'ionicons/icons'
import { home as homeIcon, settings as settingsIcon, planetOutline as planetIcon } from 'ionicons/icons'
import './WordsList.css';

import { useEffect, useState } from 'react';

const ExpressionsList: React.FC = () => {
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
      <IonContent>
         {/* <IonSearchbar className="expressions-search" value={searchText} onIonChange={e => setSearchText(e.detail.value!)}></IonSearchbar> */}
        <IonList>
        
          {/* {entriesExpressions.filter((entry) => {
            if (searchText == "") {
              return entry
            } else if (entry.quebec.toLocaleLowerCase().includes(searchText.toLocaleLowerCase()))
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
                  <img className='sub-logo-expression' src="../assets/qcflag.png" alt="" />
                  {entry.number}.- {entry.quebec}</h2></IonLabel>
              </div>

            </IonItem>
          )} */}
          
          <IonAccordionGroup>
          <IonAccordion value="colors">
            <IonItem slot="header">
              <IonLabel>food</IonLabel>
            </IonItem>
      
            <IonList slot="content">
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
            <IonItem slot="header">
              <IonLabel>house</IonLabel>
            </IonItem>
      
            <IonList slot="content">
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
            <IonItem slot="header">
              <IonLabel>feelings</IonLabel>
            </IonItem>
      
            <IonList slot="content">
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
            <IonItem slot="header">
              <IonLabel>Daily</IonLabel>
            </IonItem>
      
            <IonList slot="content">
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
            <IonItem slot="header">
              <IonLabel>Work</IonLabel>
            </IonItem>
      
            <IonList slot="content">
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
            <IonItem slot="header">
              <IonLabel>Curse</IonLabel>
            </IonItem>
      
            <IonList slot="content">
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
            <IonItem slot="header">
              <IonLabel>Sex</IonLabel>
            </IonItem>
      
            <IonList slot="content">
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
            <IonItem slot="header">
              <IonLabel>Weather</IonLabel>
            </IonItem>
      
            <IonList slot="content">
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
            <IonItem slot="header">
              <IonLabel>Clothes</IonLabel>
            </IonItem>
      
            <IonList slot="content">
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
