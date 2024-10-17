class IdeaList {
    constructor() {
        this._ideaListEl = document.querySelector('#idea-list');
        this._ideas = [
            {
                id: 1,
                text: 'Idea 1',
                tag: 'Business',
                username: 'John',
                date: '02/01/2023'
            },
            {
                id: 2,
                text: 'Idea 2',
                tag: 'Technology',
                username: 'Jill',
                date: '02/01/2023'
            },
        ];
            this._validTags = new Set();
            this._validTags.add('technology');
            this._validTags.add('software');
            this._validTags.add('business');
            this._validTags.add('education');
            this._validTags.add('health');
            this._validTags.add('inventions');
    };
// new Set() - is a data structure, it's basically a list of unique values

    getTagClass(tag) {
        tag = tag.toLowerCase();
        let tagClass = '';
        if ( this._validTags.has(tag)) {
            tagClass = `tag-${tag}`;
        } else {
            tagClass = '';
        }
        return tagClass;
    }
/* Render, ideaListEl innerHTML will loop through with map, and will say:
for each idea will return a card in a template string , and .join('') which will turn it
back into a string
*/
    render() {
        this._ideaListEl.innerHTML = this._ideas.map( idea => {
        const tagClass = this.getTagClass(idea.tag);
            return `
        <div class="card">
          <button class="delete"><i class="fas fa-times"></i></button>
          <h3>
            ${idea.text}
          </h3>
          <p class="tag ${tagClass}">${idea.tag.toUpperCase()}</p>
          <p>
            Posted on <span class="date">${idea.date}</span> by
            <span class="author">${idea.username}</span>
          </p>
        </div>`
        }).join('')
   }
}

export default IdeaList;
