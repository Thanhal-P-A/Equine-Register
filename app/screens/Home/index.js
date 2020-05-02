import React, { Component } from 'react';
import HomeView from './homeView';
import { connect } from 'react-redux';

class HomeContainer extends Component {
  constructor (props) {
    super(props);
  }

  render () {
    return <HomeView { ...this.props } />;
  }
}

function mapStateToProps (state) {
  return {
  
  };
}

function mapDispatchToProps (dispatch) {
  return {
   
  };
}
export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(HomeContainer);
