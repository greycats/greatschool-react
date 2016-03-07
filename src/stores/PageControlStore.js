'use strict';

import alt from '../alt'
import Actions from '../actions/Actions'

class PageControlStore {
  constructor() {
    this.bindListeners({
      switchPageControl: Actions.switchPageControl,
    });
    this.state = {
      currentPage: 0
    };
  }

  switchPageControl(page) {
    this.setState({currentPage: page});
  }
}

export default alt.createStore(PageControlStore, 'PageControlStore');
