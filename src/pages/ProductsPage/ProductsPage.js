import React, { Component } from 'react';
import BannerPage from '../../components/Banner/BannerPage';
import HomeProducts from '../../components/Products/HomeProducts';
import SideBar from '../../components/SideBar/SideBar';

const styleSection = {
    marginTop: "30px"
}

class ProductsPage extends Component {
    render() {
        var { match } = this.props;
        var textFilter = match.params.category;
        return (
            <>
                <BannerPage textHeading={textFilter} />
                <section className="main__content" style={styleSection}>
                    <div className="container">
                        <div className="row">
                            <SideBar />
                            <div className="col-lg-9 col-md-12 col-sm-12 col-xs-12">
                                <div className="row mt-3">
                                    <HomeProducts match={match} textFilter={textFilter} />
                                </div>
                            </div>
                        </div>
                    </div>
                </section>
            </>
        );
    }
}

export default ProductsPage;
