import React, { Component } from 'react';
import { connect } from 'react-redux';
import * as actions from '../../actions/BlogActions'
import BannerPage from '../../components/Banner/BannerPage';
import SideBar from '../../components/SideBar/SideBar';
import './index.css'

class BlogDetail extends Component {

    componentDidMount() {
        var { match } = this.props;
        var id = match.params.id;
        this.props.getDetailBlog(id)
    }

    showBlogText = (desc) => {
        if (desc) {
            return desc.map((item, index) => {
                return (
                    <p className="blog__page--detail-text" key={index}>
                        {item}
                    </p>
                )
            })
        }
    }

    render() {
        var { blogItem } = this.props;
        var desc = blogItem ? blogItem.description : [];
        return (
            <>
                <BannerPage textBlog={blogItem.title} />
                <div className="blog__page--detail pt-5 pb-5">
                    <div className="container">
                        <div className="row">
                            <SideBar />
                            <div className="col-lg-9 col-sm-12 col-md-12">
                                <h3 className="blog__page--detail-title">
                                    {blogItem.title}
                                </h3>
                                <div className="news__content--heading">
                                    <p className="news__content--date">
                                        <i className="far fa-calendar"></i>
                                        <span>
                                            {blogItem.createDate}
                                        </span>
                                    </p>
                                    <p className="news__content--author">
                                        <i className="fas fa-at"></i>
                                        <span>
                                            {blogItem.author}
                                        </span>
                                    </p>
                                </div>
                                <div className="blog__page--detail-main">
                                    <p className="blog__page--detail-text">
                                        {desc ? desc[0] : ''}
                                    </p>
                                    <div className="blog__page--detail-img">
                                        <img src={blogItem.img} alt="" />
                                    </div>
                                    {this.showBlogText(desc)}
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </>
        );
    }
}

const mapStateToProps = (state) => {
    return {
        blogItem: state.blogs.blogItem
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        getDetailBlog: (id) => {
            dispatch(actions.fetchBlogDetail(id))
        }
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(BlogDetail);
