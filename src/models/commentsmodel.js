
import Service from  './../service';

export default class CommentsModel {
    constructor(storyid) {
      this.service = new Service();
      this.storyid=storyid;
    };

    async toJSON(){
        var comments =[];
        await this.service.SetComments(this.storyid,comments);
        return {comments };
    }
}