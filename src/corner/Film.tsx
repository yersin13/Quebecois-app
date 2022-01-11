import { IonAvatar, IonBackButton, IonButton, IonButtons, IonCard, IonCardContent, IonCardHeader, IonCardTitle, IonCol, IonContent, IonGrid, IonHeader, IonIcon, IonImg, IonItem, IonLabel, IonList, IonPage, IonRow, IonSlide, IonSlides, IonTabBar, IonTabButton, IonText, IonThumbnail, IonTitle, IonToolbar } from '@ionic/react';
import ExploreContainer from '../components/ExploreContainer';
import { entriesHome } from '../data-home';
import { closeCircle } from 'ionicons/icons'
import { home as homeIcon, settings as settingsIcon, planetOutline as planetIcon } from 'ionicons/icons'
import './Corner.css';
import { useParams } from 'react-router';
import { films } from '../data-films';


const slideOpts = {
  initialSlide: 1,
  speed: 400
};

interface RouteParams {
  id: string;
}


const Film: React.FC = () => {
  const { id } = useParams<RouteParams>();
  return (
    <IonPage>
      <IonHeader>

        <IonToolbar className="toolbar">
          <IonButtons slot="start">
            <IonBackButton />
          </IonButtons>


        </IonToolbar>
      </IonHeader>
      <IonContent>
        <IonList className="music-list">
{films.filter((entry) => {
            if (entry.id === id)
              return entry
          }).map((entry) =>
  
      <div className='div-films'>
 
             
     
 <h3 className='text-film'>{entry.name}</h3>
 
     <p className='text-film '>{entry.genre}</p>
     
     <p className='text-film '>{entry.region}</p>
     
     <p className='text-film '>{entry.sinopsys} </p>

<iframe className='film-video' width="100%" height="300px" src={entry.src} title="YouTube video player" frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowFullScreen></iframe>

</div>
          )}
{/*   
      <div className='div-films'>
 
             
     
 <h3 className='text-film'>Incendies</h3>
 
     <p className='text-film '>Genre: Thriller/Drama</p>
     
     <p className='text-film '>Region: Incendies is filmed and set in Quebec. Denis Villeneuve is from Quebec.</p>
     
     <p className='text-film '>A life in Canada, a secret past in Jordan. A dying mother (Azabal) in Montreal leaves separate letters to her twin children to be read once she passes away. Jeanne (Désormeaux-Poulin) is to deliver hers to the father the twins never knew, and Simon (Gaudette) is to give his to the brother they didn’t know they had. The siblings travel to the Middle East separately, where they uncover a startling and painful family history. </p>

<iframe className='film-video' width="100%" height="300px" src="https://www.youtube.com/embed/0nycksytL1A" title="YouTube video player" frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowFullScreen></iframe>

</div>
 
      <div className='div-films'>
 
             
     
 <h3 className='text-film'>Monsieur Lazhar</h3>
 
     <p className='text-film '>Genre: Drama</p>
     
     <p className='text-film '>Region: Monsieur Lazhar is filmed and set in Quebec.</p>
     
     <p className='text-film '>Bachir Lazhar (Fellag) is an Algerian immigrant who is hired at a Montreal elementary school to replace a teacher who has died unexpectedly and tragically.

Coming from a completely different culture, Monsieur Lazhar must go through a steep learning curve as he comes up against a stubborn class of quirky 11- and 12-year-olds and the school’s rigid administrative standards. And while the school goes through the long process of grieving and healing, it is gradually suspected that Monsieur Lazhar is not entirely who he has claimed to be. This is a touching story of loss and an emotionally powerful exploration of how adults help children cope with intractable issues of life and death for which none of us is truly equipped.

The film was short-listed for the Best Foreign Language Film Oscar. </p>

<iframe className='film-video' width="100%" height="300px" src="https://www.youtube.com/embed/-pBm9keEBAY" title="YouTube video player" frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowFullScreen></iframe>

</div> */}




        
        </IonList>

      </IonContent>
      <IonTabBar slot="bottom">
        <IonTabButton tab="profile" href="/home" >
          <IonIcon className="icons" icon={homeIcon} />
          <IonLabel className="label">Home</IonLabel>
        </IonTabButton>


      </IonTabBar>
    </IonPage >
  );
};

export default Film;
