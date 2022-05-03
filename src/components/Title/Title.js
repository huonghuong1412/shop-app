import React, { Component } from 'react';

class Title extends Component {
    render() {
        var { title, img } = this.props;
        return (
            <div className="row">
                <div className="col-lg-12 col-md-12 col-sm-12">
                    <div className="products__main--title">
                        <h3 className="products__main--title-small">
                            {title}
                        </h3>
                        <h2 className="products__main--title-big">
                            {title}
                        </h2>
                        <p className="products__main--title-icon">
                            <img src={img} alt="" />
                        </p>
                    </div>
                </div>
            </div>
        );
    }
}

export default Title;
