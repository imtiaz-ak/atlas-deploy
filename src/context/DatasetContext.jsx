import { createContext, useState } from "react";

const DatasetContext = createContext();

export function DatasetProvider({ children }) {
    const [datasetName, setDatasetName] = useState('Average Daily Max');

    return (
        <DatasetContext.Provider
            value={{ datasetName, setDatasetName }}>
            {children}
        </DatasetContext.Provider>
    );
}

export default DatasetContext;
