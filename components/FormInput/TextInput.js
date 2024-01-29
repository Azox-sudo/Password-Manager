import {useState} from "react";

const Username = ({fieldName}) => {
    const [value, setValue] = useState("");
    return(
        <div>
            <p>{fieldName}</p>
            <input className=" p-4 rounded-lg " type="text" value = {value} onChange={(e) => setValue(e.target.value)}/>

        </div>
    )
}