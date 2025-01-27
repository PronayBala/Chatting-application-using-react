import React from "react";
import SearchIcon from "@mui/icons-material/Search";

export default function Search(props) {
    return (
        <div className="search-bar">
            <SearchIcon
                fontSize="medium"
                style={{ color: "rgb(18, 207, 135)" }}
            />
            <input type="text" placeholder="Search by name or create new chat!" 
            onChange={(e)=>{
                props.setText(e.target.value);
            }}
            />

        </div>
    );
}
