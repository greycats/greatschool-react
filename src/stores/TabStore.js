'use strict';

import alt from '../alt'
import TabAction from '../actions/TabActions'

class TabStore {
  constructor() {
    this.bindListeners({
      switchTab: TabAction.switchTab
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
