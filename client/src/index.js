import '@fortawesome/fontawesome-free/css/all.css';
import Modal from './components/Modal';
import IdeaForm from './components/IdeaForm';
import IdeaList from './components/IdeaList';
import './css/style.css';

const modal = new Modal();
const ideaForm = new IdeaForm();
ideaForm.render();
//I have to call on ideaForm.render() to render the modal intake form function
const ideaList = new IdeaList();
ideaList.render()