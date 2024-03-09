import React from "react"

export default function DateSelection(props) {

   const handleChange = (e) => {
       props.dateState(e.target.value)
   }
      

    return (
        <div>
            <label>Choose Date : </label>
       
            <select name="dates" onChange={handleChange}>
                {props.dates.map((date, idx) => <option key={idx}>{date}</option>)}
            </select>
        </div>
    )
}