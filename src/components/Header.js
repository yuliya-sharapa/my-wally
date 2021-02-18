import React from 'react'

function Header() {
    return (
        <div className="row mt-3 align-items-center">
            <h2 className="col-10 text-success">My Wally</h2>
            <div className="col-2 card">
                <h3 className="card-body p-1">
                    Balance
                </h3>
            </div>
        </div>
    )
}

export default Header
