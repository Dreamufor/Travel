//class based cop, 

import React, { Component } from 'react'
import { connect } from 'react-redux';
import {createTravel} from '../../store/actions/travelActions';

export class CreateTravel extends Component {
  state = {
      title : '',
      content : ''

  }

  handleChange = (e) => {
    //console.log(e);
    this.setState({
        //updata the state with the value of the target element
        [e.target.id] : e.target.value
    })
  }

  handleSubmit = (e) => {
    //console.log(e);
    e.preventDefault();
    //console.log(this.state);
    this.props.createTravel(this.state)
  }
  render() {
    return (
      <div>
        <div className="container">
            <form onSubmit={this.handleSubmit} className="white">
                <h5 className="grey-text text-darken-3 center">
                    Create a new Travel
                </h5>
                <div className="input-field">
                    <label htmlFor="title">Title</label>
                    <input type="text" id="title" onChange={this.handleChange}/>
                </div>

                <div className="input-field">
                    <label htmlFor="content">Content</label>
                    <textarea type="text" id="content" className="materialize-textarea" onChange={this.handleChange}/>
                </div>
                <div className="input-field center">
                    <button className="btn blue lighten-1 z-depth-0">Create</button>
                </div>
            </form>
            
        </div>
      </div>
    )
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    createTravel: (travel) => dispatch(createTravel(travel))
  }
}

export default connect(null, mapDispatchToProps)(CreateTravel);

