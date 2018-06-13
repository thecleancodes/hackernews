// template.js

const html = (literal, ...cooked) => {
  let result = '';
  cooked.forEach((cook, i) => {
    let lit = literal[i];
    if (Array.isArray(cook)) {
      cook = cook.join('');
    }
    result += lit;
    result += cook;
  });
  result += literal[literal.length - 1];
  return result;
};

const storyControls = (results) => {
    var page = results.page;
    var pagesize = results.pageSize;
    var displayResults = '';
    var lastindex = results.topStories.length > page*pagesize ? page*pagesize : results.topStories.length ;
    for(var i=(page-1)* pagesize;i<lastindex;i++){
        displayResults += displayControl(results.topStories[i]);
    }
    var wrapper = `
    <div>
        <div class='hackernews'>Hacker News</div>
        <ol start=${(page-1)*pagesize+1}>
            ${displayResults}
        </ol>
        <a href='#page=${page+1}/'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;More</a>
    </div>
    `;
    return wrapper;
};

const displayControl = (result) => {
    return `
        <li>
            <a href="#/comments/${result.id}/">${result.title}</a>
        </li>`;
};


let commentHtml ='';
const commentControls = (results,level) => {
    if(results!=null && results.comments!=null){
        var comments =  results.comments;
        for(var i=0;i<comments.length;i++){
            if(comments[i]!=null && typeof comments[i] != 'undefined'){
                commentHtml += displayComment(comments[i],level);
                if(comments[i].comments!=null){
                    commentControls(comments[i], level+1);
                }
            }
        }
    }
};
const displayComment = (result,level) => {
    if(result == null || typeof result == 'undefined' || result.by ==null || result.text ==null) return;
    var pl = 20 + level*50;
    return html`
    <div class='comment' style = "padding-left : ${pl}px">
        <div class='comhead'>${result.by}</div>
        ${result.text}
    </div>`;
};
export { storyControls, commentControls, commentHtml};