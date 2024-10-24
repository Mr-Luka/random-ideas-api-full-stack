import IdeasApi from './services/ideasApi';
import IdeaList from './IdeaList';

class IdeaForm {
    constructor ( ) {
        this._formModal = document.querySelector('#form-modal');
        this._ideaList = new IdeaList();

    }

    addEventListeners(){
        this._form.addEventListener('submit', this.handleSubmit.bind(this))
    }

    async handleSubmit(e) {
        e.preventDefault();
        
        if(!this._form.elements.text.value || !this._form.elements.tag.value
          || !this._form.elements.username.value) {
            alert('Please enter all fields');
            return
          }

          // Save user to local storage
          localStorage.setItem('username', this._form.elements.username.value)

        const idea = {
            text: this._form.elements.text.value, // type="text" thats how I can capture all text from modal form
            tag: this._form.elements.tag.value,
            username: this._form.elements.username.value,
        };
        // Add idea to server
        const newIdea = await IdeasApi.createIdea(idea);

        // Add idea to list
        this._ideaList.addIdeaToList(newIdea.data.data);

        // Clear Fields
        this._form.elements.text.value = '';
        this._form.elements.tag.value = '';
        this._form.elements.username.value = '';

        this.render();

        document.dispatchEvent(new Event('closemodal'));
// .dispatchEvent(new Event('closemodal)) pretty much I can name it whatever I want,
// but it's good practice to use a standard event name like 'closemodal'.
// I pretty much made an custom event, now when I go to Modal.js, I will listen
// to that event
    }

    render() {
        this._formModal.innerHTML = `
        <form id="idea-form">
          <div class="form-control">
            <label for="idea-text">Enter a Username</label>
            <input type="text" name="username" id="username" 
            value="${localStorage.getItem('username') 
            ? localStorage.getItem('username') : ''}"/>
          </div>
          <div class="form-control">
            <label for="idea-text">What's Your Idea?</label>
            <textarea name="text" id="idea-text"></textarea>
          </div>
          <div class="form-control">
            <label for="tag">Tag</label>
            <input type="text" name="tag" id="tag" />
          </div>
          <button class="btn" type="submit" id="submit">Submit</button>
        </form>`;
        this._form = document.querySelector('#idea-form');
        this.addEventListeners();
    }
}

export default IdeaForm;