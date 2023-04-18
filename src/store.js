import { reactive } from "vue"
import axios from 'axios';

export const store = reactive({
    loading: '',
    API_URL: 'https://db.ygoprodeck.com/api/v7/cardinfo.php',
    numOffset: 'num=30&offset=0',
    cards: [],
    callApi(url) {
        url = url + '?' + this.numOffset
        axios
            .get(url)
            .then(response => {
                store.cards = response.data.data;
                console.log(response.data.data);
            }).catch(err => {
                console.log(err);
                console.error(err.message);
            })
    }
});