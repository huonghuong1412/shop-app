import React, { Component } from 'react';
import { connect } from 'react-redux';
import BannerPage from '../../components/Banner/BannerPage';
import * as actions from '../../actions/BlogActions'
import './index.css'
class BlogCreate extends Component {

    constructor(props) {
        super(props);
        this.state = {
            title: '',
            urlimg: '',
            content: [''],
            author: ''
        }
    }

    handleChange = (e) => {
        var target = e.target;
        var name = target.name;
        var value = target.value;
        this.setState({
            [name]: value
        })
    }

    handleChangeDesc = (e, index) => {
        // eslint-disable-next-line react/no-direct-mutation-state
        this.state.content[index] = e.target.value;
        this.setState({
            content: this.state.content
        })
    }

    handleClearFrom = () => {
        this.setState({
            title: '',
            urlimg: '',
            content: ''
        })
    }

    handleRemoveClick = (index) => {
        this.state.content.splice(index, 1);
        this.setState({
            content: this.state.content
        })
    }

    handleAddClick = () => {
        this.setState({
            content: [...this.state.content, ""]
        })
    }


    handleSubmit = (e) => {
        e.preventDefault();
        var { title, content, urlimg, author } = this.state;
        var today = new Date();
        var dd = String(today.getDate()).padStart(2, '0');
        var mm = String(today.getMonth() + 1).padStart(2, '0');
        var yyyy = today.getFullYear();
        var date = dd + "/" + mm + "/" + yyyy;
        if (author === "") {
            alert("Mời nhập họ tên")
        } else if (title === "") {
            alert("Mời nhập tiêu đề blog")
        } else if (urlimg === "") {
            alert("Mời nhập đường dẫn ảnh")
        } else if (content === "") {
            alert("Mời nhập nội dung blog")
        } else {
            this.props.addBlog({
                title: title,
                description: content,
                img: urlimg,
                createDate: date,
                author: author
            });
            alert("Thêm blog thành công !")
            this.handleClearFrom();
            this.props.history.push("/blogs/news")
        }
    }


    render() {
        return (
            <>
                <BannerPage textBlog="Tạo mới blog" />
                <div className="blog__page--create pt-2 pb-5">
                    <div className="container">
                        <div className="row">
                            <div className="col-12">
                                <h3 className="account__page--title">Tạo mới blog</h3>
                            </div>
                            <div className="col-12">
                                <h3>Blog</h3>
                                <hr className="line-left" />
                                <div className="contact-form">
                                    <input name="form_type" type="hidden" defaultValue="contact" />
                                    <input name="utf8" type="hidden" defaultValue="✓" />
                                    <div className="form-group">
                                        <label htmlFor="contactFormAuthor" className="sr-only">Họ tên</label>
                                        <input
                                            required
                                            type="text"
                                            id="contactFormAuthor"
                                            className="form-control input-lg"
                                            name="author"
                                            placeholder="Author"
                                            autoCapitalize="words"
                                            value={this.state.author}
                                            onChange={this.handleChange}
                                        />
                                    </div>
                                    <div className="form-group">
                                        <label htmlFor="contactFormName" className="sr-only">Tiêu đề</label>
                                        <input
                                            required
                                            type="text"
                                            id="contactFormName"
                                            className="form-control input-lg"
                                            name="title"
                                            placeholder="Title"
                                            autoCapitalize="words"
                                            value={this.state.name}
                                            onChange={this.handleChange}
                                        />
                                    </div>
                                    <div className="form-group">
                                        <label htmlFor="contactFormEmail" className="sr-only">Hình ảnh</label>
                                        <input
                                            required
                                            type="text"
                                            name="urlimg"
                                            placeholder="Url image (hơi cùi ạ :v)"
                                            id="contactFormEmail"
                                            className="form-control input-lg"
                                            autoCorrect="off" autoCapitalize="off"
                                            value={this.state.email}
                                            onChange={this.handleChange}
                                        />
                                    </div>
                                    {
                                        this.state.content ? this.state.content.map((item, index) => {
                                            return (
                                                <div className="form-group form-content" key={index}>
                                                    <label htmlFor="contactFormMessage" className="sr-only">Nội dung {index + 1}</label>
                                                    <textarea
                                                        required
                                                        rows={3}
                                                        name="content"
                                                        className="form-control"
                                                        placeholder="Content"
                                                        id="contactFormMessage"
                                                        value={item}
                                                        onChange={(e) => this.handleChangeDesc(e, index)}
                                                    />
                                                    <button
                                                        className="btn btn-warning btn-remove"
                                                        onClick={() => this.handleRemoveClick(index)}
                                                    >Xoá</button>
                                                </div>
                                            )
                                        }) : ['']
                                    }<button
                                        className="btn btn-info mt-2 mb-3 btn-add-blog"
                                        onClick={() => this.handleAddClick()}
                                    >Thêm nội dung</button>
                                    <button
                                        className="btn btn-primary btn-lg btn-rb"
                                        onClick={this.handleSubmit}
                                    >
                                        Thêm blog
                                </button>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </>
        );
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        addBlog: (blog) => {
            dispatch(actions.fetchCreateBlog(blog))
        }
    }
}

export default connect(null, mapDispatchToProps)(BlogCreate);
