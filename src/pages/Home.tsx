import { IonAvatar, IonButton, IonCard, IonCardContent, IonCardHeader, IonCardSubtitle, IonCardTitle, IonCol, IonContent, IonGrid, IonHeader, IonIcon, IonImg, IonItem, IonLabel, IonList, IonPage, IonRow, IonSearchbar, IonTabBar, IonTabButton, IonText, IonThumbnail, IonTitle, IonToolbar, useIonLoading } from '@ionic/react';
import ExploreContainer from '../components/ExploreContainer';
import { entriesHome } from '../data-home';
import { closeCircle } from 'ionicons/icons'
import './Home.css';
import { home as homeIcon, settings as settingsIcon, planetOutline as planetIcon } from 'ionicons/icons'
import { useEffect, useState } from 'react';
import { entriesExpressions } from '../data-expressions';



const Home: React.FC = () => {
  const [present, dismiss] = useIonLoading();
  const [searchText, setSearchText] = useState('');
  const [index, setIndex] = useState(0)
  const [dayPhrase, setDatePhrase] = useState("")


  const random = Math.floor(Math.random() * (entriesExpressions.length))





  return (
    <IonPage>

      <IonHeader className="home-header ion-no-border">

      </IonHeader>
      <IonContent className="ion-padding home-content background-image">
        {/* <h6>Search</h6> */}
        <div className='home-div-logo '>
          <h1 className='home-text-logo  '>Learn Québécois  </h1>
          <img className='home-logo' src="../assets/home-logo.png" alt="" />
        </div>
        {/* <IonSearchbar className="expressions-search" value={searchText} onIonChange={e => setSearchText(e.detail.value!)}></IonSearchbar> */}
        <IonList className="home-list">

       
          <IonCard button routerLink="/overview" className="card "
            onClick={() => {
              present({
                message: 'Loading...',
                duration: 300
              })
            }}
          >
            <IonCardHeader>
              <IonCardTitle>

                <h4 className='home-title font'>
                  Québécois Overview
                </h4>
              </IonCardTitle>
            </IonCardHeader>

          </IonCard>
          
          <IonCard button routerLink={`/expressions-list/${entriesExpressions[random].id}`} className="card-random "
            onClick={() => {
              present({
                message: 'Loading...',
                duration: 300
              })
            }}
          >
            <IonCardHeader>
              <IonCardTitle>

                <h5 className='home-random-title font-family'>
                  Random Québécois Phrase:
                </h5>
             
                <p className='home-random-text font-family'>
                <img className='sub-logo-expression'  src="../assets/qcflag.png" alt="" />
                 {entriesExpressions[random].quebec}
                </p>
                <p className='home-random-text font-family'>
                <img className='sub-logo-expression'  src="../assets/usa.png" alt="" />  
                 {entriesExpressions[random].englishMeaning}
                </p>
              </IonCardTitle>
            </IonCardHeader>

          </IonCard>

          <IonGrid>
            <IonRow>
              <IonCol size="6">

                <IonCard button routerLink="/words-list" className="card home-card" >

                  <IonCardHeader>
                    <img className="image-home" src="/assets/2.png" alt="" />
                    <IonCardTitle>

                      <h4 className='home-title font'>
                        Québécois Words
                      </h4>
                    </IonCardTitle>
                  </IonCardHeader>



                </IonCard>
              </IonCol>
              <IonCol size="6">
                <IonCard button routerLink="/expressions-list" className="card home-card">

                  <IonCardHeader>
                    <img className="image-home" src="/assets/3.png" alt="" />
                    <IonCardTitle>
                      <h4 className='home-title font'>
                        Québécois Phrases
                      </h4>
                    </IonCardTitle>
                  </IonCardHeader>

                </IonCard>
              </IonCol>
            </IonRow>
          </IonGrid>



          <IonGrid>
            <IonRow>
              <IonCol size="12">

                <IonCard button routerLink="/game-home" className="card home-card" >

                  <IonCardHeader>
                    <img className="image-home" src="/assets/4a.png" alt="" />
                    <IonCardTitle>

                      <h4 className='home-title font'>
                        Québécois Trivia
                      </h4>
                    </IonCardTitle>
                  </IonCardHeader>



                </IonCard>

              </IonCol>


            </IonRow>
          </IonGrid>

          <IonCard button routerLink="/corner" className="card "
            onClick={() => {
              present({
                message: 'Loading...',
                duration: 300
              })
            }}
          >

            <img src="/assets/5a.png" alt="" />
            <IonCardHeader>
              <IonCardTitle>

                <h4 className='home-title font'>
                  Québécois Corner
                </h4>
              </IonCardTitle>
            </IonCardHeader>

          </IonCard>
        </IonList>



      </IonContent>

      {/* <IonTabBar slot="bottom">
<IonTabButton tab="profile"  href="/home" >
    <IonIcon className="icons" icon={homeIcon} />
    <IonLabel className="label">Home</IonLabel>
  </IonTabButton>
   */}
      {/* <IonTabButton tab="settings" href="/test" >
  <IonIcon className="icons" icon={settingsIcon} />
    <IonLabel className="label">Settings</IonLabel>
  </IonTabButton> */}
      {/* </IonTabBar> */}
    </IonPage>
  );
};

export default Home;
