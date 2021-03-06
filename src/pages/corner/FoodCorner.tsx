import { IonAvatar, IonBackButton, IonButton, IonButtons, IonCard, IonCardContent, IonCardHeader, IonCardTitle, IonCol, IonContent, IonGrid, IonHeader, IonIcon, IonImg, IonItem, IonLabel, IonList, IonPage, IonRow, IonSlide, IonSlides, IonTabBar, IonTabButton, IonText, IonThumbnail, IonTitle, IonToolbar } from '@ionic/react';
import ExploreContainer from '../../components/ExploreContainer';
import { entriesHome } from '../../data-home';
import { closeCircle } from 'ionicons/icons'
import { home as homeIcon, settings as settingsIcon, planetOutline as planetIcon } from 'ionicons/icons'
import './Corner.css';

import { food } from '../../data-food';


const slideOpts = {
  initialSlide: 1,
  speed: 400
};

const FoodCorner: React.FC = () => {
  return (
    <IonPage>
      <IonHeader>

        <IonToolbar className="toolbar">
        <IonButtons slot="start">
            <IonBackButton color='light' />
          </IonButtons>
          <div className='home-div-logo '>


            <h4 className='home-text-logo padding-menu-others '><img className='home-logo' src="../assets/flor.png" alt="" /> Cuisine Québécois</h4>

          </div>

        </IonToolbar>
      </IonHeader>
      <IonContent>
        <IonList className="music-list">
<div className='div-food-corner'>
  <h3 className='tex-food '>Cuisine Québécois</h3>
  <p className='text-food '>Québec's cuisine (or Québécois cuisine, or French Canadian cuisine) is a national cuisine in the Canadian province of Quebec descended from 16th-century French cuisine. Québec's cuisine began to develop in New France from the labour-intensive nature of colonial life, the seasonality of ingredients and the need to conserve resources. Québec's cuisine has been influenced by the province's history of fur trading and hunting, as well as Québec's winters, soil fertility, teachings from First Nations, British cuisine, American cuisine, historical trade relations and some immigrant cuisines.</p>
</div>
   {food.map((entry)=>
<IonCard button routerLink={`/corner-food/${entry.id}`}   className="item-food-corner">
  <IonCardTitle>
  <img className='food-img-corner'  src={entry.src} alt="" />
  </IonCardTitle>
  <h3 className='text-food-corner'>{entry.name}</h3>
</IonCard>




   )}

{/* <IonItem button routerLink={`/corner-food/${entry.id}`}  lines="none" className="item-food-corner">
<h3 className='text-food-corner'>{entry.name}</h3>
<IonThumbnail slot='end'>
<img   src={entry.src} alt="" />
</IonThumbnail>
</IonItem> */}


      {/* <div className='div-films'>
 
             
     
 <h3 className='text-film'>Louis Cyr: l’homme le plus fort du monde (Louis Cyr)</h3>
 
     <p className='text-film '>Genre: Comedy/Sports</p>
     
     <p className='text-film '>Region: Quebec.</p>
     
     <p className='text-film '>In the late 19th century, after years of delighting crowds with astounding feats of strength, Louis Cyr was considered the strongest man in the world. Based on his true story, this charming biopic recounts the many successes, heartbreaks and obstacles — both inside and out of the athletic arena — that Louis (Bertrand) faced on his climb from obscurity to international fame. Louis’ best friend recounts the story to the strongman’s estranged daughter — from Louis’ poverty-stricken childhood through the ups and downs of his circus career — and shares with us the fascinating life of this Quebec hero. </p>

<iframe className='film-video' width="100%" height="300px" src="https://www.youtube.com/embed/BXHkxpqMsHU" title="YouTube video player" frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowFullScreen></iframe>

</div>
  
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

export default FoodCorner;
