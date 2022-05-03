import React, { Component } from 'react';
import { Link } from 'react-router-dom';

class LoadMore extends Component {
    render() {
        var { link } = this.props;
        return (
            <div className="row">
                <div className="col-12 text-center">
                    <Link to={link} className="btn btn-readmore">
                        Xem thêm
                    </Link>
                </div>
            </div>
        );
    }
}

export default LoadMore;
