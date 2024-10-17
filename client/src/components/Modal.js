class Modal {
    constructor () {
        this._modal = document.querySelector('#modal')
        this._modalBtn = document.querySelector('#modal-btn')
/*Now this addEventListeners arent being called anywhere, so we are gonna call them right in 
the constructor
*/
        this.addEventListeners();
    }

    addEventListeners(){
        this._modalBtn.addEventListener('click', this.open.bind(this));
        window.addEventListener('click', this.outsideClick.bind(this));
        document.addEventListener('closemodal', ()=> this.close())
    }
/* Remember, when you use the .this keyword inside of a class method, and its on an 
event listener .this (.this._modal.style.display) is going to pertain to the element that 
the event was called on. What we need to do is use .bind(this). Which says:
To open() this now pertains to the class rather than the element */
    open () {
    this._modal.style.display = 'block';
    }

    close() {
    this._modal.style.display = 'none';
    }
    outsideClick(e) {
    if(e.target === this._modal) {
        this.close();
    }
    }
}

export default Modal;