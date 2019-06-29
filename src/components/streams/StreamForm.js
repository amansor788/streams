import React from 'react';
import {Field, reduxForm} from 'redux-form';

class StreamForm extends React.Component {
  renderInput (formProps){
    return (
      <div className={`field ${formProps.meta.touched && formProps.meta.error ? 'error' : ''}`}>
        <label>{formProps.label}</label>
        <input {...formProps.input} autoComplete="off" />
        <div className="ui error message">{formProps.meta.touched && formProps.meta.error ? formProps.meta.error : ''}</div>
      </div>
    )
  }
  
  onSubmit = (formValues) => {
    this.props.onSubmit(formValues);
  }

  render() { 
    return (
      <form className="ui form error" onSubmit={this.props.handleSubmit(this.onSubmit)}>
        <Field name="title" label="Enter title" component={this.renderInput}/>
        <Field name="description" label="Enter description" component={this.renderInput} />
        <button className="ui button primary">Submit</button>
      </form> 
    );
    
  }
}

const validate = (formValues) => {
  const errors = {};

  if (!formValues.title){
    errors.title = 'You must enter a title';
  } 
  
  if (!formValues.description){
    errors.description = 'You must enter a description';
  }
  
  return errors;
}

export default reduxForm({
  form: 'streamForm',
  validate
}) (StreamForm);

