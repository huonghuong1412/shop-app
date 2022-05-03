import React, { Component } from 'react';
import { Carousel } from 'react-bootstrap'
import { Link } from 'react-router-dom';

class Slide extends Component {

    showSlideItem = (listSlide) => {
        return listSlide.map((item, index) => {
            return <Carousel.Item key={index}>
                <Link to={item.path}>
                    <img
                        className="d-block w-100"
                        src={item.img}
                        alt={item.img}
                    />
                </Link>
            </Carousel.Item>
        })
    }

    render() {
        var listSlide = [
            {
                path: '/collections/all',
                img: 'https://theme.hstatic.net/1000239816/1000467243/14/slideshow_1.jpg?v=186',
            },
            {
                path: '/collections/giay',
                img: 'https://theme.hstatic.net/1000239816/1000467243/14/slideshow_2.jpg?v=186',
            },
            {
                path: '/collections/ao-khoac',
                img: 'https://theme.hstatic.net/1000239816/1000467243/14/slideshow_3.jpg?v=186',
            },
            {
                path: '/collections/all',
                img: 'https://theme.hstatic.net/1000239816/1000467243/14/slideshow_4.jpg?v=186',
            }
        ]

        return (
            <Carousel>
                {this.showSlideItem(listSlide)}
            </Carousel>
        );
    }
}

export default Slide;
