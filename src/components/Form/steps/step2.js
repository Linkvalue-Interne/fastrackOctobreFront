import React, { Component } from 'react';

class Step2 extends Component {

  continue = (e) => {
    e.preventDefault();
    this.props.next();
  }

  back = (e) => {
    e.preventDefault();
    this.props.prev();
  }

  render() {
    const { values } = this.props;
    return (
      <form>
        <button onClick={this.back}>Retour </button>
        <h1 className="ui centered">Informations utilisateurs</h1>
        <label>Métier</label>
        <input
          placeholder="Dev"
          onChange={this.props.handleChange('job')}
          value={values.job}
        />
        <label>Xp</label>
        <input
          placeholder="3"
          onChange={this.props.handleChange('lastName')}
          value={values.xp}
        />
        <label>Clients</label>
        <input
          placeholder="LinkValue"
          onChange={this.props.handleChange('customer')}
          value={values.customer}
        />
        <button onClick={this.continue}>Continuer </button>
      </form>
    )
  }
}

export default Step2;
