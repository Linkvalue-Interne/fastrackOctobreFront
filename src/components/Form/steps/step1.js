import React, { Component } from 'react';

class Step1 extends Component {

  continue = (e) => {
    e.preventDefault();
    this.props.next();
  }

  render() {
    const { values } = this.props;
    return (
      <form>
        <h1 className="ui centered">Informations utilisateurs</h1>
        <label>Prénom</label>
        <input
          placeholder='Jean'
          onChange={this.props.handleChange('firstName')}
          value={values.firstName}
        />
        <label>Nom</label>
        <input
          placeholder='Dupuis'
          onChange={this.props.handleChange('lastName')}
          value={values.lastName}
        />
        <label>Email Address</label>
        <input
          type='email'
          placeholder='Email Address'
          onChange={this.props.handleChange('email')}
          value={values.email}
        />
        <button onClick={this.continue}>Continuer </button>
      </form>
    )
  }
}

export default Step1;
