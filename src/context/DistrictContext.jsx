import { createContext, useMemo, useState } from "react";
import { districts } from "../data/generated_districts.json";

const DistrictContext = createContext();

export function DistrictProvider({ children }) {
    const [districtId, setDistrictId] = useState(null);
    const district = useMemo(
        () => districts.find((district) => district.id === districtId),
        [districtId]
    );

    return (
        <DistrictContext.Provider
            value={{ districtId, district, setDistrictId }}>
            {children}
        </DistrictContext.Provider>
    );
}

export default DistrictContext;
