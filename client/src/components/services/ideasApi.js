import axios from 'axios';

class IdeasApi {
    constructor () {
        this._apiUrl = 'http://localhost:5001/api/ideas'
    }

    getIdeas() {
        return axios.get(this._apiUrl);
    }
}

export default new IdeasApi();
// I can initialize it here while exporting, not just export and then
// initialize in other file