import React from 'react'

function Balance({balance}) {

    return (
        <div className="col-2 card">
            <h3 className="card-body p-1">
                {balance < 0 ? `-$${-balance}` : `$${balance}`}
            </h3>
        </div>
    )
}

export default Balance
