import React from 'react'

const ThirdBanner = (props) => {
    return (
        <div className="container my-5" >
            <div className="row shadow">
                <div className="col-4">
                    <img className="img-fluid " src={props.src} alt={props.alt} />
                </div>
                <div className="col-8">
                    <img className="img-fluid " src={props.src1} alt={props.alt1} />
                </div>
            </div>
        </div>
    )
}

export default ThirdBanner
