//class based cop, 

import React, { Component } from 'react'
import { connect } from 'react-redux';
import { createTravel } from '../../store/actions/travelActions';
import {  Redirect } from 'react-router-dom';
import { Link } from 'react-router-dom';


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
    this.props.createTravel(this.state);
    //use history to redirect to home page
    this.props.history.push('/');

  }
  render() {
    const { auth } = this.props;
    if(! auth.uid) return <Redirect to='/signin' />
    return (
      <div>
        <div className="container">
            <form onSubmit={this.handleSubmit} className="white">  
            <span>
              <a className="btn-floating btn-medium cyan-text text-darken-3 pulse right"><i className="material-icons">edit</i></a>
    </span>        
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
                    <button className="btn cyan z-depth-0">Create</button>
                </div>
                <div className="center">
                  <Link to='/' className="cyan-text text-darken-3">Back to Homepage</Link>
                </div>
              
            </form>
            
        </div>
      </div>
    )
  }
}
const mapStateToProps = (state) => {
  return {
    auth: state.firebase.auth 
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    createTravel: (travel) => dispatch(createTravel(travel))
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(CreateTravel);

