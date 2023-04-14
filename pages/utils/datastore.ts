import axios from 'axios';
import csvtojson from 'csvtojson';

export default class DataStore {

    private dataFromURL (url) {
        return axios.get(url)
    }

    private dataFromCSV (url) {
        this.dataFromURL(url)    
            .then(response => {
                csvtojson()
                    .fromString(response.data)
                    .then((json) => {
                })
            })       
    }
}