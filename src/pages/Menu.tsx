import {
  IonMenu,
  IonHeader,
  IonToolbar,
  IonTitle,
  IonContent,
  IonList,
  IonMenuToggle,
  IonItem,
  IonLabel,
  IonIcon,
  IonFabButton,
} from "@ionic/react";
import { addCircle, bookmarkOutline, chatboxOutline, chatbubbleOutline, chatbubbles, chatbubblesOutline, rocket, rocketOutline } from "ionicons/icons";
import React from "react";

export const Menu = () => {
  return (
    <IonMenu side="start" contentId="main">
      <IonHeader>
        <IonToolbar color="primary">
        <div className='home-div-logo '>
            <img className='home-logo' src="../assets/icon/icon.png" alt="" />
            <h1 className='home-text-logo '>Learn Québécois  </h1>
           
          </div>

        </IonToolbar>
      </IonHeader>
      <IonContent>
        <IonList>
          <IonMenuToggle auto-hide="false">
            
          </IonMenuToggle>
          <IonMenuToggle auto-hide="false">
            <IonItem button className="menu-item-home" lines="none" routerLink={"/favWords"} routerDirection="none">
              <IonLabel>Favorite Words</IonLabel> 
              
              <IonFabButton>
                <IonIcon color="secondary" className="fav-meme-chip" icon={bookmarkOutline}  />
            
                </IonFabButton> 
                </IonItem>
            <IonItem button className="menu-item-home" lines="none" routerLink={"/favExpressions"} routerDirection="none">
              <IonLabel>Favorite Phrases</IonLabel> 
              
              <IonFabButton>
                <IonIcon color="success" className="fav-meme-chip" icon={bookmarkOutline}  />
            
                </IonFabButton> 
                </IonItem>
            <IonItem button className="menu-item-home" lines="none" routerLink={"/favCorner"} routerDirection="none">
              <IonLabel>Favorite Corner</IonLabel> 
              
              <IonFabButton>
                <IonIcon color="danger" className="fav-meme-chip" icon={bookmarkOutline}  />
            
                </IonFabButton> 
                </IonItem>
            <IonItem button className="menu-item-home" lines="none" routerLink={"/page-2"} routerDirection="none">
              <IonLabel>About Us</IonLabel> 
              
              <IonFabButton>
           
                <IonIcon color="warning" className="fav-meme-chip" icon={rocketOutline}  />
              
               
            
                </IonFabButton> 
                </IonItem>
          </IonMenuToggle>
        </IonList>
      </IonContent>
    </IonMenu>
  );
};