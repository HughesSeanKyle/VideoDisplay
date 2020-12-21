import { useState, useEffect } from 'react';
import youtube from '../apis/youtube';

const useVideos = (defaultSearchTerm) => {
    const [videos, setVideos] = useState([]);

    useEffect(() => {               
        search(defaultSearchTerm)
    }, [defaultSearchTerm]);

    // Func will be called when search term submitted      
    const search = async term => {
        
        const response = await youtube.get('/search', {
            params: {
                q: term
            }
        });

        setVideos(response.data.items);
    };

    return [videos, search]; // 1 
};

export default useVideos;

/*
//1 - This Hook will always return a list of videos and a function we can use to update those videos. 
*/
