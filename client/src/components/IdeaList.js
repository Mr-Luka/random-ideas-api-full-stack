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
    }
/* Render, ideaListEl innerHTML will loop through with map, and will say:
for each idea will return a card in a template string , and .join('') which will turn it
back into a string
*/
    render() {
        this._ideaListEl.innerHTML = this._ideas.map( idea => {
            return `
        <div class="card">
          <button class="delete"><i class="fas fa-times"></i></button>
          <h3>
            Positive NewsLetter, a newsletter that only shares positive,
            uplifting news
          </h3>
          <p class="tag tag-technology">TECHNOLOGY</p>
          <p>
            Posted on <span class="date">January 1, 2022</span> by
            <span class="author">Tony Stark</span>
          </p>
        </div>`
        }).join('')
   }
}

export default IdeaList;

