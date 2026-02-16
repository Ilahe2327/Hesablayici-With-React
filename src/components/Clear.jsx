import React from 'react'

function Clear({onClearAll , onClearOne}) {
    return (
            <div className="clear">
                <button className="clearAll" onClick={onClearAll}>CA</button>
                <button className="clearAvalue" onClick={onClearOne}>X</button>
            </div>
    )
}

export default Clear