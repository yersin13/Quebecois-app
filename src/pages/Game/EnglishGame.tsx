import { IonAlert, IonAvatar, IonBackButton, IonButton, IonButtons, IonCard, IonCardContent, IonCardHeader, IonCardTitle, IonChip, IonContent, IonFooter, IonHeader, IonIcon, IonImg, IonItem, IonLabel, IonList, IonPage, IonSearchbar, IonTabBar, IonTabButton, IonText, IonThumbnail, IonTitle, IonToast, IonToolbar, useIonLoading } from '@ionic/react';
import ExploreContainer from '../../components/ExploreContainer';
import { home as homeIcon, settings as settingsIcon, planetOutline as planetIcon, checkboxOutline, closeCircleOutline } from 'ionicons/icons'
import './Game.css';
import {questions } from '../../data-english-game';

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
const [keepScore, setKeepScore]= useState(0);
const [finalScore, setFinalScore] = useState(0)
const [haveAnswered, setHaveAnswered] = useState(true);
  // questions.length


  const [percentages, setPercentages] = useState(0);
  const handleAnswerOptionClick1 = (isCorrect: boolean, answer1: any) => {
 
    setHaveAnswered1(true)

    if (isCorrect) {
     
      setCorrect(true)
setKeepScore(1)   
      setColor1(true)
    }

    else {
      setColor1(false)
    }
  };
  const handleAnswerOptionClick2 = (isCorrect: boolean, answer2: any) => {

    setHaveAnswered2(true)

    if (isCorrect) {

      setCorrect(true)
setKeepScore(1)   
      setColor2(true)
    }

    else {
      setColor2(false)
    }
  };
  const handleAnswerOptionClick3 = (isCorrect: boolean, answer3: any) => {

    setHaveAnswered3(true)

    if (isCorrect) {

      setCorrect(true)
setKeepScore(1)   
      setColor3(true)
    }

    else {
      setColor3(false)
    }
  };
  const handleAnswerOptionClick4 = (isCorrect: boolean, answer4: any) => {

    setHaveAnswered4(true)

    if (isCorrect) {

      setCorrect(true)
setKeepScore(1)   
      setColor4(true)
    }

    else {
      setColor4(false)
    }
  };



  const handleNextQuestion = () => {
    setCounter(counter + 1)
    if (counter < 10) {
      const nextQuestion = Math.floor(Math.random() * questions.length)
      // console.log(nextQuestion)
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
      console.log(finalScore)
    } else {
      setFinish(true)
      console.log(finalScore)
      percentage()
    }


  }


  const keepPlaying = () => {

    const nextQuestion = Math.floor(Math.random() * questions.length)
    // console.log(nextQuestion)
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
    setCounter(0);
    setFinish(false)

    setFinalScore(0)
  }

  

    // const divRef = useRef(null);
    useEffect(() => {
    if(haveAnswered1 && haveAnswered){
      setFinalScore( finalScore + keepScore)
      
      setHaveAnswered(false)
    }if(haveAnswered2 && haveAnswered ){
      setFinalScore( finalScore + keepScore)
      
      setHaveAnswered(false)
    }if(haveAnswered3 && haveAnswered){
      setFinalScore( finalScore + keepScore)
      
      setHaveAnswered(false)
    }if(haveAnswered4 && haveAnswered){
      setFinalScore( finalScore + keepScore)
      
      setHaveAnswered(false)
    }
    });


 

  ;

const percentage = ()=>{
 
  const total = 10
  const divide= finalScore
  setPercentages((100 * divide) / total)

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
            <IonBackButton />
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


                      <IonItem lines="none" >
                        <h5 className='question-text'>Good work</h5>
                      </IonItem>

                      <h3>{finalScore}/10</h3>
                      <h3>{percentages}%</h3>

                    </div>

                    <br />

                    <IonButton expand="full" shape='round' onClick={keepPlaying} >
                      Keep Practicing
                    </IonButton>



                  </IonCard>
                </>
              </div>
            ) : (
              <>
                <IonCard className="card-item">


                  <div className='question-section'>



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
                      <IonLabel color="primary">{counter}/10</IonLabel>
                    </IonChip>
                  </IonThumbnail>
                </IonCard>
              </>
            )}
          </div>
        </IonList>



      </IonContent>
      {/* <IonTabBar slot="bottom">
      <IonTabButton tab="profile" href="/home" >
        <IonIcon className="icons" icon={homeIcon} />
        <IonLabel className="label">Home</IonLabel>
      </IonTabButton> */}

      {/* <IonTabButton tab="settings" href="/settings" >
        <IonIcon className="icons" icon={settingsIcon} />
        <IonLabel className="label">Settings</IonLabel>
      </IonTabButton> */}
      {/* </IonTabBar> */}

    </IonPage>
  );
};

export default EnglishGame;
