import React, { Component } from 'react';

class Banner extends Component {
    render() {
        return (
            <div className="row mt-5">
                <div className="col-lg-12 col-md-12 col-sm-12">
                    <div className="banner__content">
                        <div className="banner__content--text">
                            <span className="banner__content--text-title">
                                MIỄN PHÍ SHIP TOÀN QUỐC và
                                            <strong>
                                    GIẢM 5% nếu nhập mã UD5 khi đặt hàng
                                            </strong>
                            </span>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

export default Banner;
