import axios from 'axios';

import { youtubeKey } from '../config/keys';

const KEY = youtubeKey;

export default axios.create({
    baseURL: 'http://www.googleapis.com/youtube/v3', 
    params: {
        part: 'snippets', 
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

