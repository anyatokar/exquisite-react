import React, { useState } from 'react';
import './Game.css';
import PlayerSubmissionForm from './PlayerSubmissionForm';
import FinalPoem from './FinalPoem';
import RecentSubmission from './RecentSubmission';

const Game = () => {

  const [lines, setLines] = useState([])

  const addLine = (line) => {
 
    const newLines = [...lines]

    // lines.push(exampleFormat(newLine))


    // setLines(temp)






  //   const newFields = [...FIELDS];

  //   // Find the max id and add 1
  //   const nextId = newFields.reduce((accumulator, currentStudent) => {
  //     return Math.max(accumulator, currentStudent.id);
  //   }, 0) + 1;

  //   newFields.push({
  //     id: nextId,
  //     fullName: student.fullName,
  //     email: student.email,
  //     present: false,
  //   });

  //   setStudentList(newStudentList);
  }





  const exampleFormat = (fieldsVersion) => fieldsVersion.map((field) => {
    if (field.key) {
      return field.placeholder;
    } else {
      return field;
    }
  }).join(' ');

  return (
    <div className="Game">
      <h2>Game</h2>

      <p>Each player should take turns filling out and submitting the form below. Each turn should be done individually and <em>in secret!</em> Take inspiration from the revealed recent submission. When all players are finished, click the final button on the bottom to reveal the entire poem.</p>

      <p>Please follow the following format for your poetry submission:</p>

      <p className="Game__format-example">
        { exampleFormat(FIELDS) }
      </p>

      <RecentSubmission />

      <PlayerSubmissionForm fields={FIELDS} sendSubmission={addLine}/>

      <FinalPoem />

    </div>
  );
}


const FIELDS = [
  'The',
  {
    key: 'adj1',
    placeholder: 'adjective',
    userInput: '',
  },
  {
    key: 'noun1',
    placeholder: 'noun',
    userInput: '',
  },
  {
    key: 'adv',
    placeholder: 'adverb',
    userInput: '',
  },
  {
    key: 'verb',
    placeholder: 'verb',
    userInput: '',
  },
  'the',
  {
    key: 'adj2',
    placeholder: 'adjective',
    userInput: '',
  },
  {
    key: 'noun2',
    placeholder: 'noun',
    userInput: '',
  },
  '.',
];

export default Game;
