import React from 'react'

const Title = (props) => {
    return (
        <div className="container">
            <div className="row">
                <div className="col-12 my-5 my-md-0">
                    <div className="h1">
                        {props.title}
                    </div>
                        <div className="row">
                        <div className="col-2"></div>
                        <div className="col-8">
                        <div className="h6 mx-auto px-auto">
                        {props.subTitle}
                        </div>
                        </div>
                    <div className="col-2"></div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Title
