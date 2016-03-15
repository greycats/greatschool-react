// @flow

import alt from '../alt'

export class Actions {
  switchTab(tab: number): number {
    return tab;
  }
  switchPageControl(id: number, page: number): any {
    return {id, page};
  }
  exploreSchoolsIndicator() {
  }
}

export default alt.createActions(Actions);
