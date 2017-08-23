// Contains logic to render a single label and text input
import React from 'react';

// propos being passed from reduxForm
// es6 layered destructuring to get error and touched properties
export default ({ input, label, meta: { error, touched} }) => {
    return (
      <div>
          <label>{label}</label>
          <input {...input} style={{ marginBottom: '5px' }}/>
          <div className="red-text" style={{ marginBottom: '20px' }}>
              {touched && error}
          </div>
      </div>
    );
}