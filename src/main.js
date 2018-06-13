import { $on } from './util';
import TopStoriesView from './views/topstoriesview';
import TopStoriesModel from './models/topstoriesmodel';
import BaseController from './controllers/basecontroller';
import CommentsModel from './models/commentsmodel';
import CommentsView from './views/commentsview';

class App {
  constructor() {
  };
  setView(hash){
    var commentsUrl = /^#\/comments\/[\d]{8}/.test(hash);
    if(commentsUrl){
      var matches = hash.match(/^#\/comments\/([\d]{8})/);
      var storyid= parseInt(matches[1],10);
      this.model = new CommentsModel(storyid);
      this.view = new CommentsView();
      this.controller = new BaseController(this.model, this.view);
    }
    else{
      
      this.model = new TopStoriesModel();
      if(hash!=null && hash.length>0){
        var matches = hash.match(/page=(\d){0,3}/);
        this.model.currentPage = parseInt(matches[1],10);
      }
      this.view = new TopStoriesView();
      this.controller = new BaseController(this.model, this.view);
    }
    this.controller.setView();
  }
}

const app = new App();

const setView = () => {
  app.setView(document.location.hash);
}

$on(window, 'load', setView);
$on(window, 'hashchange', setView);