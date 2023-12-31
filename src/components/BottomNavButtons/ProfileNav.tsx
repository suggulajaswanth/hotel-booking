import { PersonOutlineOutlined } from "@mui/icons-material";
import { BottamNav, Context } from "../reducer";
import { Chip } from "@mui/material";
import { useContext } from "react";

export const ProfileNavBtn = ()=>{
    const { state } = useContext(Context);
    const { activePage } = state;
    return (
        <div>
            {activePage === BottamNav.PROFILE &&
                <Chip icon={<PersonOutlineOutlined style={{ color: "#8C684D" }} />} label="Profile" style={{ background: "#FBF0E9" }} />
            }
            {activePage !== BottamNav.PROFILE &&
            <PersonOutlineOutlined></PersonOutlineOutlined>}
        </div>
    )
}