import React from 'react'
import { useState } from 'react'

export default function SingleDataSet({option, changeDataset}) {
  const [selected, setselected] = useState(false)
  return (
    <li className={selected? "dataset-column__list-item selected-dataset" : "dataset-column__list-item"} onClick={() => { changeDataset(option), setselected(!selected) }}>
        {option}
    </li>
  )
}
