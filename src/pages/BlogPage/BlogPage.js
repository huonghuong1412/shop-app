import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import BannerPage from '../../components/Banner/BannerPage';
import Blogs from '../../components/Blog/Blogs';
import SideBar from '../../components/SideBar/SideBar'
class BlogPage extends Component {
    render() {
        return (
            <>
                <BannerPage textBlog="Blog - Tin tức" />
                <div className="blog__page pt-5 pb-5">
                    <div className="container">
                        <div className="row">
                            <SideBar />
                            <div className="col-lg-9 col-md-12 col-sm-12">
                                <div className="row">
                                    <div className="col-12">
                                        <div className="main__content--heading">
                                            <h3 className="main__content--heading-title">
                                                Blog
                                            </h3>
                                            <Link to="/blogs/news/create" className="btn-rb">
                                                Tạo Blog
                                            </Link>
                                        </div>
                                    </div>
                                    <Blogs />
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </>
        );
    }
}

export default BlogPage;
