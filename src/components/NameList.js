import React from "react"

function NameList(){
    const names = [
        "joy",
        "Kajela",
        "muchoki",
        "tito"
    ]
    const nameElements = names.map((name) => {
        return <li style={{name: name}}>{name}</li>
    })
    return(
        <div>
            <h2>Latelty this are my favorite names</h2>
            {nameElements}
        </div>
    )
}
export default NameList;