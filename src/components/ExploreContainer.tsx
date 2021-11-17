import { IonButton, IonCard, IonCardContent, IonCardTitle, IonIcon, IonItem, IonLabel } from '@ionic/react';
import './ExploreContainer.css';
import { pin, wifi, wine, warning, walk } from 'ionicons/icons';
import {entriesHome} from '../data-home'
interface ContainerProps { }

const ExploreContainer: React.FC<ContainerProps> = () => {
  return (
    <IonCard>
      <IonCardTitle>
        hello world
      </IonCardTitle>
    <IonItem>
      <img src="./assets/overview.jpg" alt="" />
      
    </IonItem>

    <IonCardContent>
      This is content, without any paragraph or header tags,
      within an ion-cardContent element.
</IonCardContent>
  </IonCard>
  );
};

export default ExploreContainer;
