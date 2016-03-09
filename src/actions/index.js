import alt from '../alt'

export class Actions {
  switchTab(tab) {
    return tab;
  }
  switchPageControl(id, page) {
    return {id, page};
  }
  exploreSchoolsIndicator() {
  }
}

export default alt.createActions(Actions);
