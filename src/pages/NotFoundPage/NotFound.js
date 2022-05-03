import React, { Component } from 'react';

const h3Style = {
    fontWeight: "400",
    color: "#333333",
    fontSize: "28px"
}

const pStyle = {
    fontWeight: "400",
    color: "#333333",
    fontSize: "14px",
    marginTop: '20px'
}

class NotFound extends Component {
    render() {
        return (
            <div className="pb-5 pt-5">
                <div className="container text-center">
                    <div className="row">
                        <div className="col-12">
                            <h3 className="not_found-title" style={h3Style}>
                                Không tìm thấy trang
                            </h3>
                            <p className="not_found-subtitle" style={pStyle}>
                                Xin lỗi, chúng tôi không tìm thấy trang này
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

export default NotFound;
