
import { useContext } from "react";
import { BottamNav, Context } from "../reducer";
import { BookmarkOutlined } from "@mui/icons-material";
import { Chip } from "@mui/material";

export const BookMarkNavBtn = ()=>{
    const { state } = useContext(Context);
    const { activePage } = state;
    return (
        <div>
            {activePage === BottamNav.BOOKMARK &&
                <Chip icon={<BookmarkOutlined style={{ color: "#8C684D" }} />} label="Book Mark" style={{ background: "#FBF0E9" }} />
            }
            {activePage !== BottamNav.BOOKMARK &&
            <BookmarkOutlined></BookmarkOutlined>}
        </div>
    )
}