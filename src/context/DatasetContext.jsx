import { createContext, useState } from "react";

const DatasetContext = createContext();

export function DatasetProvider({ children }) {
    const [datasetConfig, setDatasetConfig] = useState({
        name: 'Cooling Degree Days',
        emission: 'ssp245',
        timeline: '1995-2014'
    });

    const changeDatasetName = (newName) => {
        setDatasetConfig({
            name: newName,
            emission: datasetConfig['emission'],
            timeline: datasetConfig['timeline']
        })
    }

    const changeDatasetEmission = (newEmission) => {
        setDatasetConfig({
            name: datasetConfig['name'],
            emission: newEmission,
            timeline: datasetConfig['timeline']
        })
    }

    const changeDatasetTimeline = (newTimeline) => {
        setDatasetConfig({
            name: datasetConfig['name'],
            emission: datasetConfig['emission'],
            timeline: newTimeline
        })
    }

    return (
        <DatasetContext.Provider
            value={{ datasetConfig, setDatasetConfig, changeDatasetName, changeDatasetEmission, changeDatasetTimeline }}>
            {children}
        </DatasetContext.Provider>
    );
}

export default DatasetContext;
