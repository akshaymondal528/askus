import { useState } from 'react';
import './HomeMainSection.css';

const HomeMainSection = () => {
  const [questions, setQuestions] = useState([]);
  const [input, setInput] = useState('');

  const inputHandler = event => {
    setInput(event.target.value);
  };

  const clickHandler = e => {
    e.preventDefault();
    setQuestions([input, ...questions]);
    setInput('');
  };

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
              <div>
                <p className="answers">
                  Lorem ipsum dolor sit, amet consectetur adipisicing elit.
                  Quas, dolorem ipsa. Officia non error temporibus explicabo,
                  ducimus iste repudiandae eius cum a? Sed corporis fugiat
                  aliquam exercitationem ut perferendis deleniti in sequi cum
                  explicabo perspiciatis aspernatur eum porro odit doloribus
                  harum eos earum quibusdam totam fugit deserunt, distinctio
                  saepe voluptas.
                </p>
                <div>
                  <form>
                    <div className="answer_comment">
                      <div>
                        <input
                          className="input_question__comment"
                          type="text"
                        />
                      </div>
                      <div>
                        <button className="input_question__btn" type="submit">
                          Enter
                        </button>
                      </div>
                    </div>
                  </form>
                </div>
              </div>
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
                  value={input}
                  onChange={inputHandler}
                />
                <button
                  className="input_question__btn"
                  type="submit"
                  onClick={clickHandler}
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
