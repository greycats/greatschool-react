'use strict';

import alt from '../alt'
import Actions from '../actions'

class PageControlStore {
  constructor() {
    this.bindListeners({
      switchPageControl: Actions.switchPageControl,
    });
    this.state = {};
  }

  switchPageControl(object) {
    var hash = {};
    hash[object.id] = object.page;
    this.setState(hash);
  }
}

export default alt.createStore(PageControlStore, 'PageControlStore');
