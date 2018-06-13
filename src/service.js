import  'fetch';

export default class Service{
    constructor(){
        this.API_BASE_URL = 'https://hacker-news.firebaseio.com/v0/';
    }
    
    async GetTopStories(page, pagesize){
        var result = [];
        var response = await fetch(this.API_BASE_URL+'topstories.json')
        var topstories = await response.json();
        var topindex = topstories.length < page*pagesize?topstories.length:page*pagesize;
        for(var i=0;i<page*pagesize;i++){
            response = await fetch(this.API_BASE_URL + 'item/'+ topstories[i] + '.json');
            var storyDetails = await response.json();
            result.push(storyDetails);
        };
        return result;
    }

    async SetComments(storyid,comments){
        var response = await fetch(this.API_BASE_URL + 'item/'+ storyid + '.json');
        var story = await response.json();
        if(story !== null && typeof story.kids !== 'undefined' ){
            for(var i=0;i<story.kids.length;i++){
                response = await fetch(this.API_BASE_URL + 'item/'+ story.kids[i] + '.json');
                var comment = await response.json();
                comments.push(comment);
                comment.comments=[];
                 var x= this.SetComments(story.kids[i],comment.comments);
            }
        }
    }

}