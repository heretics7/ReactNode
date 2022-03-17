import React, {useEffect, useState} from 'react'
import axios from 'axios';

export default function Get() {
    const [origintext, originUpdate] = useState(' 이미 있는 값 ');

    useEffect( async () => {
        const getData = await axios.get('/getrouter')
        originUpdate(getData)

    },
    [] );

    return (
        <div>{origintext}</div>
    )
}
