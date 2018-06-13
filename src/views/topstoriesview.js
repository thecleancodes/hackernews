import { storyControls } from './template';
import BaseView from './baseview';

export default class TopStoriesView extends BaseView {
  constructor() {
    super();
    this.el = document.getElementById('target');
    this.el.innerHTML = this.loader;
  }
  render(results) {
    this.el.innerHTML = storyControls(results);
  }
}