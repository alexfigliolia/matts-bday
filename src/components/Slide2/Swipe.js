import React, { Component } from 'react';
import Finger from './tap.svg';

export default class Swipe extends Component {

  shouldComponentUpdate() {
    return false;
  }

  render() {
    return (
      <div
        className='swipe'
        id='swipe'>
        <img src={Finger} alt='swipe left' />
      </div>
    );
  }
}