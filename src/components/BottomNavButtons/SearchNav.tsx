import { useContext } from "react";
import { BottamNav, Context } from "../reducer";
import { Search } from "@mui/icons-material";
import { Chip } from "@mui/material";

export const SearchNavBtn = ()=>{
    const { state } = useContext(Context);
    const { activePage } = state;
    return (
        <div>
            {activePage === BottamNav.SEARCH &&
                <Chip icon={<Search style={{ color: "#8C684D" }} />} label="Search" style={{ background: "#FBF0E9" }} />
            }
            {activePage !== BottamNav.SEARCH &&
            <Search></Search>}
        </div>
    )
}