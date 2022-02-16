import { IonAvatar, IonButton, IonButtons, IonCard, IonCardContent, IonCardHeader, IonCardSubtitle, IonCardTitle, IonCol, IonContent, IonFab, IonFabButton, IonFabList, IonGrid, IonHeader, IonIcon, IonImg, IonItem, IonLabel, IonList, IonMenu, IonPage, IonRow, IonSearchbar, IonTabBar, IonTabButton, IonText, IonThumbnail, IonTitle, IonToolbar, useIonLoading } from '@ionic/react';
import ExploreContainer from '../components/ExploreContainer';
import { entriesHome } from '../data-home';
import { closeCircle, logoFacebook, logoInstagram, logoTwitter, logoVimeo, share } from 'ionicons/icons'
import './Home.css';
import { home as homeIcon, settings as settingsIcon, planetOutline as planetIcon } from 'ionicons/icons'
import { useEffect, useState } from 'react';
import { entriesExpressions } from '../data-expressions';
import { NavButtons } from './NavButtons';



const Home: React.FC = () => {
  const [present, dismiss] = useIonLoading();
  const [searchText, setSearchText] = useState('');
  const [index, setIndex] = useState(0)
  const [dayPhrase, setDatePhrase] = useState("")


  const random = Math.floor(Math.random() * (entriesExpressions.length))


  return (
    <IonPage>


      <IonHeader className="home-header ion-no-border">

        <IonToolbar className="toolbar-home">

          <div className='home-div-logo '>


            <h4 className='home-text-logo padding-menu-home '><img className='home-logo' src="../assets/flor.png" alt="" /> Learn Québécois  </h4>
            <IonButtons className="menu" slot="right">
              <NavButtons />
            </IonButtons>
          </div>


        </IonToolbar>


      </IonHeader>
      <IonContent className="ion-padding  background-image">

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
                  <img className='sub-logo-expression' src="../assets/qcflag.png" alt="" />
                  {entriesExpressions[random].quebec}
                </p>
                <p className='home-random-text font-family'>
                  <img className='sub-logo-expression' src="../assets/usa.png" alt="" />
                  {entriesExpressions[random].english}
                </p>
              </IonCardTitle>
            </IonCardHeader>

          </IonCard>

          <IonGrid>
            <IonRow>
              <IonCol size="6">

                <IonCard button
                onClick={() => {
                  present({
                    message: 'Loading...',
                    duration: 300
                  })
                }}
                routerLink="/words-list" className="card home-card" >

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
                <IonCard button
                onClick={() => {
                  present({
                    message: 'Loading...',
                    duration: 300
                  })
                }}
                routerLink="/expressions-list" className="card home-card">

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
              <IonCol size="6">

                <IonCard button
                onClick={() => {
                  present({
                    message: 'Loading...',
                    duration: 300
                  })
                }}
                routerLink="/game-home" className="card home-card" >

                  <IonCardHeader>
                    <img className="image-home" src="/assets/4.png" alt="" />
                    <IonCardTitle>

                      <h4 className='home-title font'>
                        Québécois Trivia
                      </h4>
                    </IonCardTitle>
                  </IonCardHeader>



                </IonCard>

              </IonCol>
              <IonCol size="6">
                <IonCard button routerLink="/corner" className="card home-card "
                  onClick={() => {
                    present({
                      message: 'Loading...',
                      duration: 300
                    })
                  }}
                >

                 
                  <IonCardHeader>
                  <img src="/assets/5.png" alt="" />
                    <IonCardTitle>

                      <h4 className='home-title font'>
                        Québécois Corner
                      </h4>
                    </IonCardTitle>
                  </IonCardHeader>

                </IonCard>
              </IonCol>

            </IonRow>
          </IonGrid>
          <IonCard button routerLink="/corner" className="card  "
                  onClick={() => {
                    present({
                      message: 'Loading...',
                      duration: 300
                    })
                  }}
                >

                 
                  <IonCardHeader>
                  <img src="/assets/1.png" alt="" />
                    <IonCardTitle>

                      <h4 className='home-title font'>
                      Québécois Lessons
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
