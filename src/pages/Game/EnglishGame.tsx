import { IonAlert, IonAvatar, IonBackButton, IonButton, IonButtons, IonCard, IonCardContent, IonCardHeader, IonCardTitle, IonChip, IonContent, IonFooter, IonHeader, IonIcon, IonImg, IonItem, IonLabel, IonList, IonPage, IonSearchbar, IonTabBar, IonTabButton, IonText, IonThumbnail, IonTitle, IonToast, IonToolbar, useIonLoading } from '@ionic/react';
import ExploreContainer from '../../components/ExploreContainer';
import { home as homeIcon, settings as settingsIcon, planetOutline as planetIcon, checkboxOutline, closeCircleOutline, trophyOutline, skullOutline, checkmarkCircleOutline } from 'ionicons/icons'
import './Game.css';
import { questions } from '../../data-english-game';

import { useEffect, useState } from 'react';
import { useParams } from 'react-router';
import { entriesExpressions } from '../../data-expressions';

interface RouteParams {
  id: string;
}

// What does it mean?

const EnglishGame: React.FC = () => {

  const [present, dismiss] = useIonLoading();

  const [currentQuestion, setCurrentQuestion] = useState(Math.floor(Math.random() * questions.length));

  const [correct, setCorrect] = useState(false);

  const [counter, setCounter] = useState(1);

  const [color1, setColor1] = useState(false);
  const [color2, setColor2] = useState(false);
  const [color3, setColor3] = useState(false);
  const [color4, setColor4] = useState(false);

  const [haveAnswered1, setHaveAnswered1] = useState(false);
  const [haveAnswered2, setHaveAnswered2] = useState(false);
  const [haveAnswered3, setHaveAnswered3] = useState(false);
  const [haveAnswered4, setHaveAnswered4] = useState(false);
  const [finish, setFinish] = useState(false);

  // score
  const [keepScore, setKeepScore] = useState(0);
  const [finalScore, setFinalScore] = useState(0)
  const [haveAnswered, setHaveAnswered] = useState(true);
  const [light1, setLight1] = useState(false);
  const [light2, setLight2] = useState(false);
  const [light3, setLight3] = useState(false);
  const [light4, setLight4] = useState(false);
  const [light5, setLight5] = useState(false);

  const [icon1, setIcon1] = useState(false);
  const [icon2, setIcon2] = useState(false);
  const [icon3, setIcon3] = useState(false);
  const [icon4, setIcon4] = useState(false);
  const [icon5, setIcon5] = useState(false);
  // questions.length

  const[image, setImage]= useState(false)

  const [percentages, setPercentages] = useState(0);
  const handleAnswerOptionClick1 = (isCorrect: boolean, answer1: any) => {

    setHaveAnswered1(true)
   

    if (isCorrect) {
      renderChecksWin()
      setCorrect(true)
      setKeepScore(1)
      setColor1(true)
      
         
    }

    else {
      setColor1(false)
      renderChecksFail()
    }
  };
  const handleAnswerOptionClick2 = (isCorrect: boolean, answer2: any) => {

    setHaveAnswered2(true)
    
    
    if (isCorrect) {
      renderChecksWin()
      setCorrect(true)
      setKeepScore(1)
      setColor2(true)
      

    }

    else {
      setColor2(false)
      renderChecksFail()
    }
  };
  const handleAnswerOptionClick3 = (isCorrect: boolean, answer3: any) => {

    setHaveAnswered3(true)
    
    if (isCorrect) {
      renderChecksWin()
      setCorrect(true)
      setKeepScore(1)
      setColor3(true)

     
    }

    else {
      setColor3(false)
      renderChecksFail()
    }
  };
  const handleAnswerOptionClick4 = (isCorrect: boolean, answer4: any) => {

    setHaveAnswered4(true)
  
   
    if (isCorrect) {
      renderChecksWin()
      setCorrect(true)
      setKeepScore(1)
      setColor4(true)
     
      
    }

    else {
      setColor4(false)
      renderChecksFail()
    }
  };



  const handleNextQuestion = () => {
    setCounter(counter + 1)
    if (counter < 5) {
      const nextQuestion = Math.floor(Math.random() * questions.length)
  
      setCurrentQuestion(nextQuestion);
      setHaveAnswered1(false)
      setHaveAnswered2(false)
      setHaveAnswered3(false)
      setHaveAnswered4(false)

      setCorrect(false)
      setColor1(false)
      setColor2(false)
      setColor3(false)
      setColor4(false)


      setKeepScore(0)
      setHaveAnswered(true)
     
      
    } else {
      setFinish(true)
     
      percentage()
    
    }


  }


  const keepPlaying = () => {

    
    // console.log(nextQuestion)

    setHaveAnswered1(false)
    setHaveAnswered2(false)
    setHaveAnswered3(false)
    setHaveAnswered4(false)

    setIcon1(false)
    setIcon2(false)
    setIcon3(false)
    setIcon4(false)
    setIcon5(false)

    setLight1(false)
    setLight2(false)
    setLight3(false)
    setLight4(false)
    setLight5(false)

    setCorrect(false)
    setColor1(false)
    setColor2(false)
    setColor3(false)
    setColor4(false)
    
    setFinish(false)
    setCounter(1);
   
    setHaveAnswered(true)
setKeepScore(0)
    setFinalScore(0)
    setImage(false)
   
    const nextQuestion = Math.floor(Math.random() * questions.length)
    setCurrentQuestion(nextQuestion);
  }



  // const divRef = useRef(null);
  useEffect(() => {
    if (haveAnswered1 && haveAnswered) {
      setFinalScore(finalScore + keepScore)
       renderChecksWin()
       renderChecksFail()
      setHaveAnswered(false)
    } if (haveAnswered2 && haveAnswered) {
      setFinalScore(finalScore + keepScore)
      renderChecksWin()
      renderChecksFail()
      setHaveAnswered(false)
    } if (haveAnswered3 && haveAnswered) {
      setFinalScore(finalScore + keepScore)
      renderChecksWin()
      renderChecksFail()
      setHaveAnswered(false)
    } if (haveAnswered4 && haveAnswered) {
      setFinalScore(finalScore + keepScore)
      renderChecksWin()
      renderChecksFail()
      setHaveAnswered(false)
    }
  });

 const renderChecksFail = ()=>{
   if (counter==1 && keepScore===0){
 setLight1(true)
 setIcon1(true)
   }if (counter==2 && keepScore===0){
    setLight2(true)
    setIcon2(true)
   }if (counter==3 && keepScore===0){
    setLight3(true)
    setIcon3(true)
  }if (counter==4 && keepScore===0){
    setLight4(true)
    setIcon4(true)
  }if (counter==5 && keepScore===0){
    setLight5(true)
    setIcon5(true)
  }
 }

 const renderChecksWin = ()=>{
  if (counter==1 && keepScore===1){
    setLight1(false)
setIcon1(true)
  }if (counter==2 && keepScore===1){
    setLight2(false)
   setIcon2(true)
  }if (counter==3 && keepScore===1){
    setLight3(false)
   setIcon3(true)
 }if (counter==4 && keepScore===1){
  setLight4(false)
   setIcon4(true)
 }if (counter==5 && keepScore===1){
  setLight5(false)
   setIcon5(true)
 }
}


  const percentage = () => {

    const total = 5
    const divide = finalScore
    setPercentages((100 * divide) / total)

    if(finalScore==5){
      setImage(true)

    }

  }




  const answer1 = questions[currentQuestion].answerOptions[0].answerText1
  const answer2 = questions[currentQuestion].answerOptions[1].answerText2
  const answer3 = questions[currentQuestion].answerOptions[2].answerText3
  const answer4 = questions[currentQuestion].answerOptions[3].answerText4






  //  Qu’est que ça veut dire ?

  return (
    <IonPage>
      <IonHeader className="ion-no-border">

        <IonToolbar className="toolbar">
          <IonButtons slot="start">
            <IonBackButton color='light' />
          </IonButtons>


        </IonToolbar>
      </IonHeader>
      <IonContent>

        <IonList>
          <div className='app'>



            {finish ? (
              <div className='score-section'>
                <>
                  <IonCard className="card-item">


                    <div className='question-section'>


                 
                   
                      {image? <img className='' src="../assets/win.png" alt="" />:  <img className='' src="../assets/fail.png" alt="" /> }
                
                      <h3 className='final-text' >{finalScore}/5</h3>
                      <h3 className='final-text' >{percentages}%</h3>

                    </div>

                    <br />

                    <IonButton expand="full" shape='round' onClick={keepPlaying} >
                      Play Again!
                    </IonButton>



                  </IonCard>
                </>
              </div>
            ) : (
              <>
              
                <IonCard className="card-item white">

              
                  <div className='question-section'>

<IonItem lines="none">
  
                  {icon1 ? (light1 ? <IonIcon className="icons-answers-fail" icon={skullOutline} /> : <IonIcon className="icons-answers-win" icon={checkmarkCircleOutline} />) : ""}
                   {icon2 ? (light2 ? <IonIcon className="icons-answers-fail" icon={skullOutline} /> : <IonIcon className="icons-answers-win" icon={checkmarkCircleOutline} />) : ""}
                   {icon3 ? (light3 ? <IonIcon className="icons-answers-fail" icon={skullOutline} /> : <IonIcon className="icons-answers-win" icon={checkmarkCircleOutline} />) : ""}
                   {icon4 ? (light4 ? <IonIcon className="icons-answers-fail" icon={skullOutline} /> : <IonIcon className="icons-answers-win" icon={checkmarkCircleOutline} />) : ""}
                   {icon5 ? (light5 ? <IonIcon className="icons-answers-fail" icon={skullOutline} /> : <IonIcon className="icons-answers-win" icon={checkmarkCircleOutline} />) : ""}
</IonItem>

                    <IonItem lines="none" > 
                      <h6 className='question-text question-title'>What does it mean?</h6> 

                    </IonItem>

                    <IonItem lines="none">
                      <h3 className='question-title'>{questions[currentQuestion].questionText}</h3>
                    </IonItem>
                    <IonItem lines="none">
                      <div>
                        <p className="example">Example:</p>
                        <p className="example">{questions[currentQuestion].example}</p>
                      </div>
                    </IonItem>


                  </div>
                  <div className='answer-section'>

                    <IonCard className="card">
                      <IonItem lines='none' button className="item-answer"
                        onClick={(e) => handleAnswerOptionClick1(questions[currentQuestion].answerOptions[0].isCorrect, answer1)}
                        style={{ backgroundColor: haveAnswered1 ? (color1 ? "#32CD30" : "#DC143C") : "#001f97" }} >
                        {haveAnswered1 ? <IonThumbnail slot='start' className="answer-thumbnail">
                          {haveAnswered1 ? (color1 ? <IonIcon className="icons-answers" icon={checkboxOutline} /> : <IonIcon className="icons-answers" icon={closeCircleOutline} />) : ""}
                        </IonThumbnail> :
                          <> </>}

                        <p className="answer-text">{answer1}</p>
                      </IonItem>
                    </IonCard>

                    <IonCard className="card">
                      <IonItem lines='none' button className="item-answer"
                        onClick={(e) => handleAnswerOptionClick2(questions[currentQuestion].answerOptions[1].isCorrect, answer2)}
                        style={{ backgroundColor: haveAnswered2 ? (color2 ? "#32CD30" : "#DC143C") : "#001f97" }}>
                        {haveAnswered2 ? <IonThumbnail slot='start' className="answer-thumbnail">
                          {haveAnswered2 ? (color2 ? <IonIcon className="icons-answers" icon={checkboxOutline} /> : <IonIcon className="icons-answers" icon={closeCircleOutline} />) : ""}
                        </IonThumbnail>
                          :
                          <> </>}

                        <p className="answer-text">{answer2}</p>
                      </IonItem>
                    </IonCard>

                    <IonCard className="card">
                      <IonItem lines='none' button className="item-answer"
                        onClick={(e) => handleAnswerOptionClick3(questions[currentQuestion].answerOptions[2].isCorrect, answer3)}
                        style={{ backgroundColor: haveAnswered3 ? (color3 ? "#32CD30" : "#DC143C") : "#001f97" }}>

                        {haveAnswered3 ? <IonThumbnail slot='start' className="answer-thumbnail">
                          {haveAnswered3 ? (color3 ? <IonIcon className="icons-answers" icon={checkboxOutline} /> : <IonIcon className="icons-answers" icon={closeCircleOutline} />) : ""}
                        </IonThumbnail> :
                          <> </>}


                        <p className="answer-text">{answer3} </p>
                      </IonItem>

                    </IonCard>
                    <IonCard className="card">
                      <IonItem lines='none' button className="item-answer"
                        onClick={(e) => handleAnswerOptionClick4(questions[currentQuestion].answerOptions[3].isCorrect, answer4)}
                        style={{ backgroundColor: haveAnswered4 ? (color4 ? "#32CD30" : "#DC143C") : "#001f97" }} >

                        {haveAnswered4 ? <IonThumbnail slot='start' className="answer-thumbnail">
                          {haveAnswered4 ? (color4 ? <IonIcon className="icons-answers" icon={checkboxOutline} /> : <IonIcon className="icons-answers" icon={closeCircleOutline} />) : ""}
                        </IonThumbnail> :
                          <> </>}

                        <p className="answer-text">{answer4}</p>
                      </IonItem>
                    </IonCard>


                  </div>
                  <br />
                  {correct ?
                    <IonButton expand="full" shape='round' onClick={handleNextQuestion} >
                      Next Question
                    </IonButton>
                    : <p></p>}
                  <IonThumbnail >
                    <IonChip >
                      <IonLabel color="primary">{counter}/5</IonLabel>
                    </IonChip>
                  </IonThumbnail>
                </IonCard>
              </>
            )}
          </div>
        </IonList>



      </IonContent>

    </IonPage>
  );
};

export default EnglishGame;
