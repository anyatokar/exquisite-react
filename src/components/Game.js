import React, { useState } from 'react';
import './Game.css';
import PlayerSubmissionForm from './PlayerSubmissionForm';
import FinalPoem from './FinalPoem';
import RecentSubmission from './RecentSubmission';

const Game = () => {

  const [lines, setLines] = useState([])
  const [isSubmitted, setIsSubmitted] = useState(false)

  const addLine = (line) => {
    const newLines = [
      ...lines,
    ];

    const newLine = [
      ...line,
    ];

    const newLineString = lineFormat(newLine)

    newLines.push(newLineString);

    setLines(newLines);
  }

  // can consolidate the two methods below as they are very similar
  const lineFormat = (fieldsVersion) => fieldsVersion.map((field) => {
      if (field.key) {
      return field.userInput;
    } else {
      return field;
    }
  }).join(' ');

  const exampleFormat = (fieldsVersion) => fieldsVersion.map((field) => {
    if (field.key) {
      return field.placeholder;
    } else {
      return field;
    }
  }).join(' ');


  

  const onSubmission = () => {
    setIsSubmitted(true)

    // for(const line of lines) {
    //   <div>
    //     <input line />
    //     <br></br>
    //   </div>
    // }



  };

  // const onSubmission = lines.map((line) => {
  //   setIsSubmitted(true)
  //   return (
  //     <input line />
  //     )
  // });

  // const playerComponents = formFields.map((field, i) => {
  //   if(typeof(field) === 'object') {
  //     return (
  //       <input
  //       key={field.key}
  //       placeholder={field.placeholder}
  //       value={field.userInput}
  //       name={field.key}
  //       onChange={(event)=>{onFormFieldChange(i, event)}}
  //       type="text" />
  //     )
  //   } else {
  //     // this catches the "The" and "." etc.
  //     return (field)
  //   }
  // });


  return (
    <div className="Game">
      <h2>Game</h2>

      <p>Each player should take turns filling out and submitting the form below. Each turn should be done individually and <em>in secret!</em> Take inspiration from the revealed recent submission. When all players are finished, click the final button on the bottom to reveal the entire poem.</p>

      <p>Please follow the following format for your poetry submission:</p>

      <p className="Game__format-example">
        { exampleFormat(FIELDS) }
      </p>

      <RecentSubmission submission={lines[lines.length - 1]} isSubmitted={isSubmitted}/>

      <PlayerSubmissionForm index={(lines.length + 1)} fields={FIELDS} sendSubmission={addLine} isSubmitted={isSubmitted}/>

      <FinalPoem isSubmitted={isSubmitted} submissions={lines} revealPoem={onSubmission}/>

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
