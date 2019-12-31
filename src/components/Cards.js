import React from 'react'

const Cards = (props) => {
    // console.log(props.list)
    return (
        <div className="container">
            <div className="row">
                <div className="col-12 col-md-4 m-md-0 my-3">
                    <div className="card" style={props.background} >
                        <div className="card-body" >
                            <div className="h3">{props.title} </div>
                            <div className="h2">${props.price} / <small className="h6">{props.days} </small> </div>
                            <ul className="list-group" >
                                <li className="list-group-item" style={props.background}>{props.list.map(item=>(
                                    <div className="text-left text-justify my-3 "  key={item}>
                                        {item}
                                    </div>
                                ))} </li>
                            </ul>
                        </div>
                    </div>
                </div>
                <div className="col-md-4 col-12 m-md-0 my-3">
                    <div className="card" style={props.background} >
                        <div className="card-body" >
                            <div className="h3">{props.title} </div>
                            <div className="h2">${props.price} / <small className="h6">{props.days} </small> </div>
                            <ul className="list-group" >
                                <li className="list-group-item" style={props.background}>{props.list.map(item=>(
                                    <div className="text-left text-justify my-3 "  key={item}>
                                        {item}
                                    </div>
                                ))} </li>
                            </ul>
                        </div>
                    </div>
                </div>
                <div className="col-md-4 col-12 m-md-0 my-3">
                    <div className="card" style={props.background} >
                        <div className="card-body" >
                            <div className="h3">{props.title} </div>
                            <div className="h2">${props.price} / <small className="h6">{props.days} </small> </div>
                            <ul className="list-group" >
                                <li className="list-group-item" style={props.background}>{props.list.map(item=>(
                                    <div className="text-left text-justify my-3 "  key={item}>
                                        {item}
                                    </div>
                                ))} </li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
            <div className="btn btn-default gradient rounded-0 my-5 mx-sm-0 ml-0 p-3">
                                    {props.btnName}
            </div>
        </div>
    )
}

export default Cards
