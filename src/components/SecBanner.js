import React from 'react'

const SecBanner = (props) => {
    return (
        <div className="container" >
            <div className="row jumbotron bg-transparent" style={{height:'80vh'}}>
                <div className="col-md-6 col-12 my-md-auto py-md-0 py-4"><img src={props.src} className="img-fluid shadow" alt={props.alt} /> </div>
                <div className="col-md-6 col-12 my-md-auto">
                    <div className="display-4 my-3">{props.title} </div>
                    <div className="display-5 my-3 h5">{props.subTitle} </div>
                    {props.btnName? 
                    <div className="btn btn-default gradient rounded-0 my-3 mx-sm-0 ml-0 float-sm-left p-3">
                        <span className="h5"> {props.btnName}</span> 
                    </div>: null}
                </div>
            </div>
        </div>
    )
}

export default SecBanner
