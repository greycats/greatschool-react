import alt from '../alt'

export class Actions {
  switchTab(tab) {
    return tab;
  }
  switchPageControl(page) {
    return page;
  }
  exploreSchoolsIndicator() {
  }
}

export default alt.createActions(Actions);
