class IdeaForm {
    constructor ( ) {
        this._formModal = document.querySelector('#form-modal');

    }

    addEventListeners(){
        this._form.addEventListener('submit', this.handleSubmit.bind(this))
    }

    handleSubmit(e) {
        e.preventDefault();
        
        const idea = {
            text: this._form.elements.text.value, // type="text" thats how I can capture all text from modal form
            tag: this._form.elements.tag.value,
            username: this._form.elements.username.value,
        };
        console.log(idea)

        // Clear Fields
        this._form.elements.text.value = '';
        this._form.elements.tag.value = '';
        this._form.elements.username.value = '';

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
            <input type="text" name="username" id="username" />
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