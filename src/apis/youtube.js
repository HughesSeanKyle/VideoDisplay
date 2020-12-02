import axios from 'axios';

const KEY = 'AIzaSyBEf9n2Cy6STGZV4N7-sVKcuva2GzAGA3o'

export default axios.create({
    baseURL: 'https://www.googleapis.com/youtube/v3', 
    params: {
        part: 'snippet', 
        type: 'video',
        maxResults: 5,
        key: KEY
    }
});

/*
Captital letters for variable is convention
    indicated that this is a constant value and it should not be changed. 

V121 - snippet - Indicates what type of information we want to retrieve from the call.
    max result - How much items we want to retrieve
    Q = query - search term we will make
*/

