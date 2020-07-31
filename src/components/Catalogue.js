import React, {
    Component
} from 'react'

import {Link} from 'react-router-dom';

export default class Catalogue extends Component {

    state = {
        items: []
    }
    render() {
        return (

            <div className="row">
                {this.state.items.map((item) =>(
                    <div className="card">
                        <div className="card-header">
                            <h5>{item.title}</h5>
                        </div>
                        <div className="card-body">
                            <img src={item.img} alt={item.img} />
                        </div>
                        <div className="card-footer">
                            <Link 
                                className="btn btn-secondary"
                                to={"/item/" + item._id}
                                >
                                    Show more    
                                </Link>
                        </div>
                    </div>
                ))}
            </div>
        )
    }
}