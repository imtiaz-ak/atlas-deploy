import React, {useState, useEffect} from 'react';
import {json} from 'd3';

const jsonUrl = '/public/data/generated_districts.json'

export const useData = () => {
    const [data, setData] = useState(null)

    useEffect(() => {
        json(jsonUrl).then(setData)
    }, [])

    return data
}