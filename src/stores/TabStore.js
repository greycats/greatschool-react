'use strict';

import alt from '../alt'
import Actions from '../actions/Actions'

class TabStore {
  constructor() {
    this.bindListeners({
      switchTab: Actions.switchTab,
    });
    this.state = {
      selectedTab: 0
    };
  }

  switchTab(tab) {
    this.setState({selectedTab: tab});
  }
}

export default alt.createStore(TabStore, 'TabStore');
