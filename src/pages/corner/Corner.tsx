import { IonAvatar, IonBackButton, IonButton, IonButtons, IonCard, IonCardContent, IonCardHeader, IonCardTitle, IonCol, IonContent, IonGrid, IonHeader, IonIcon, IonImg, IonItem, IonLabel, IonList, IonPage, IonRow, IonTabBar, IonTabButton, IonText, IonThumbnail, IonTitle, IonToolbar } from '@ionic/react';
import ExploreContainer from '../../components/ExploreContainer';
import { entriesHome } from '../../data-home';
import { closeCircle } from 'ionicons/icons'
import { home as homeIcon, settings as settingsIcon, planetOutline as planetIcon } from 'ionicons/icons'
import "./Corner.css"

const Corner: React.FC = () => {
  return (
    <IonPage>
      <IonHeader>

        <IonToolbar className="toolbar">
          <IonButtons slot="start">
            <IonBackButton />
          </IonButtons>
          <div className='home-div-logo '>


            <h4 className='home-text-logo padding-menu-others '><img className='home-logo' src="../assets/flor.png" alt="" /> Québécois Corner </h4>

          </div>

        </IonToolbar>
      </IonHeader>
      <IonContent>
        <IonList className="overview-list">

          <IonGrid>
            <IonRow>
              <IonCol size="6">

                <IonCard button routerLink="/corner-music" className="card corner-card " >


                  <img className="image-corner" src="/assets/9.png" alt="" />

                  <h4 className='corner-title font'>
                    Music Quebecois
                  </h4>

                </IonCard>
              </IonCol>
              <IonCol size="6">

                <IonCard button routerLink="/corner-films" className="card corner-card " >


                  <img className="image-corner" src="/assets/11.png" alt="" />

                  <h4 className='corner-title font'>
                    Films Quebecois
                  </h4>

                </IonCard>
              </IonCol>
            </IonRow>
            <IonRow>
              <IonCol size="6">

                <IonCard button routerLink="/corner-food" className="card corner-card " >


                  <img className="image-corner" src="/assets/13.png" alt="" />

                  <h4 className='corner-title font'>
                    Québécois cuisine
                  </h4>

                </IonCard>
              </IonCol>



              <IonCol size="6">

                <IonCard button routerLink="/corner-memes" className="card corner-card " >


                  <img className="image-corner" src="/assets/12.png" alt="" />

                  <h4 className='corner-title font'>
                    Memes Quebecois
                  </h4>

                </IonCard>
              </IonCol>
            </IonRow>
            {/* <IonRow>


              <IonCol size="6">

                <IonCard button routerLink="/words-list" className="card corner-card " >


                  <img className="image-corner" src="/assets/14.png" alt="" />

                  <h4 className='corner-title font'>
                    Places Quebecois
                  </h4>

                </IonCard>
              </IonCol>
            </IonRow> */}
            {/* <IonRow>
              <IonCol size="6">

                <IonCard button routerLink="/words-list" className="card corner-card " >


                  <img className="image-corner" src="/assets/10.png" alt="" />

                  <h4 className='corner-title font'>
                    Culture Quebecois
                  </h4>

                </IonCard>
              </IonCol>
              <IonCol size="6">

                <IonCard button routerLink="/words-list" className="card corner-card " >


                  <img className="image-corner" src="/assets/15.png" alt="" />

                  <h4 className='corner-title font'>
                    Random
                  </h4>

                </IonCard>
              </IonCol>


            </IonRow> */}
          </IonGrid>

        </IonList>

      </IonContent>
      <IonTabBar slot="bottom">
        <IonTabButton tab="profile" href="/home" >
          <IonIcon className="icons" icon={homeIcon} />
          <IonLabel className="label">Home</IonLabel>
        </IonTabButton>


      </IonTabBar>
    </IonPage>
  );
};

export default Corner;
