import { useEffect, useState } from 'react';
import db from '../../firebase';
import {
  onSnapshot,
  collection,
  serverTimestamp,
  addDoc,
  orderBy,
  query,
} from 'firebase/firestore';
import './HomeMainSection.css';

const HomeMainSection = () => {
  const [questions, setQuestions] = useState([]);
  const [questionInput, setQuestionInput] = useState('');
  const [answers, setAnswers] = useState([]);
  const [answerInput, setAnswerInput] = useState('');

  const questionInputHandler = event => {
    setQuestionInput(event.target.value);
  };

  const answerInputHandler = event => {
    setAnswerInput(event.target.value);
  };

  const questionClickHandler = e => {
    e.preventDefault();
    // setQuestions([input, ...questions]);
    addDoc(collection(db, 'questions'), {
      question: questionInput,
      timestamp: serverTimestamp(),
    });
    setQuestionInput('');
  };

  const answerClickHandler = e => {
    e.preventDefault();
    setAnswers([answerInput, ...answers]);
    // addDoc(collection(db, 'questions'), {
    //   question: questionInput,
    //   timestamp: serverTimestamp(),
    // });
    setAnswerInput('');
  };

  useEffect(() => {
    onSnapshot(
      query(collection(db, 'questions'), orderBy('timestamp', 'desc')),
      snapshot => {
        setQuestions(snapshot.docs.map(doc => doc.data().question));
      }
    );
  }, []);

  return (
    <div className="home_main_section">
      <div className="main_sub_section">
        <div className="main_answer_section">
          <h1>Answer Section</h1>
          {questions.map(question => (
            <div className="users_answers">
              <div>
                <h3 className="questions">{question}</h3>
              </div>
              {/* {answers.map(answer => ( */}
              <div>
                <p className="answers">{answers}</p>
                <div>
                  <form>
                    <div className="answer_comment">
                      <div>
                        <input
                          className="input_question__comment"
                          type="text"
                          value={answerInput}
                          onChange={answerInputHandler}
                        />
                      </div>
                      <div>
                        <button
                          className="input_question__btn"
                          type="submit"
                          onClick={answerClickHandler}
                        >
                          Enter
                        </button>
                      </div>
                    </div>
                  </form>
                </div>
              </div>
              {/* ))} */}
            </div>
          ))}
        </div>
        <div className="main_question_section">
          <div className="question_heading">
            <h1>Question Section</h1>
          </div>
          <div className="question_input">
            <form>
              <div className="input_question">
                <input
                  className="input_question__input"
                  type="text"
                  value={questionInput}
                  onChange={questionInputHandler}
                />
                <button
                  className="input_question__btn"
                  type="submit"
                  onClick={questionClickHandler}
                >
                  Submit
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HomeMainSection;
