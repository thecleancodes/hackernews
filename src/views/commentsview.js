import { commentControls,commentHtml } from './template';
import BaseView from './baseview';

export default class CommentsView extends BaseView {
  constructor() {
    super();
    this.el = document.getElementById('target');
    this.el.innerHTML = this.loader;
  }
  render(results) {
    commentControls(results,0);
    this.el.innerHTML = commentHtml;
  }
  
}