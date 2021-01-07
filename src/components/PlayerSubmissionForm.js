import React, { useState } from 'react';
import PropTypes from 'prop-types';

import './PlayerSubmissionForm.css';

const PlayerSubmissionForm = (props) => {

  const [formFields, setFormFields] = useState(props.fields)

  const onFormFieldChange = (i, event) => {
    const newFormFields = [
      ...formFields,
    ]

    newFormFields[i] = {
      ...newFormFields[i],
      userInput: event.target.value
    };

    setFormFields(newFormFields);
  }

  const onFormSubmit = (event) => {
    event.preventDefault();

    props.sendSubmission(formFields);
    setFormFields(props.fields);
  };

  const playerComponents = formFields.map((field, i) => {
    if(typeof(field) === 'object') {
      return (
        <input
        key={field.key}
        placeholder={field.placeholder}
        value={field.userInput}
        name={field.key}
        onChange={(event)=>{onFormFieldChange(i, event)}}
        type="text" />
      )
    } else {
      // this catches the "The" and "." etc.
      return (field)
    }
  });

  if(!props.isSubmitted) {
    return (
      <div className="PlayerSubmissionForm">
        <h3>Player Submission Form for Player #{props.index}</h3>

        <form className="PlayerSubmissionForm__form" 
          onSubmit={onFormSubmit}
        >
          <div className="PlayerSubmissionForm__poem-inputs">
            {playerComponents}
          </div>

          <div className="PlayerSubmissionForm__submit">
            <input type="submit" value="Submit Line" className="PlayerSubmissionForm__submit-btn" />
          </div>
        </form>
      </div>
    );
  } else {
    return null
  }
}

PlayerSubmissionForm.propTypes = {
  index: PropTypes.number.isRequired,
  sendSubmission: PropTypes.func.isRequired,
  fields: PropTypes.arrayOf(PropTypes.oneOfType([
    PropTypes.string,
    PropTypes.shape({
      key: PropTypes.string.isRequired,
      placeholder: PropTypes.string.isRequired,
    }),
  ])).isRequired,
}

export default PlayerSubmissionForm;
