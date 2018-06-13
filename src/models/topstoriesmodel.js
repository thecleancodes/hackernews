
import Service from  './../service';

export default class TopStoriesModel {
    constructor() {
      this.service = new Service();
      this.currentPage =1;
      this.pageSize=30;
    };

    async toJSON(){
        var topStories = await this.service.GetTopStories(this.currentPage,this.pageSize);
        var page = this.currentPage;
        var pageSize = this.pageSize;
        return {topStories,page,pageSize };
    }
}