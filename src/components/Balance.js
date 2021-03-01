import React, {useEffect} from 'react'

function Balance({balance}) {

    return (
        <div className="col-2 card mb-3">
            <h3 className="card-body p-1">
                {balance < 0 ? `-$${-balance}` : `$${balance}`}
            </h3>
        </div>
    )
}

export default Balance
