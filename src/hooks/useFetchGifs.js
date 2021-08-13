//los hooks no son mas que funciones

import { useEffect, useState } from "react"
import { getHttp } from '../helpers/getGifs';

export const useFetchGifs = ( categoria ) => {
    const [state, setState] = useState({
        data: [],
        loading: true
    });

    useEffect(() => {
        getHttp( categoria )
        .then( imgs => setState({
            data: imgs,
            loading: false
        }))
        .catch(console.warn);
    }, [ categoria ]);

    return state;
}