import React from "react";
import { Carousel, Button } from 'antd';
import Item from "antd/lib/list/Item";

const items = [
    {
        key: '1',
        title: 'Hello world',
        content: 'Welcome to small site.',
    },

    {
        key: '2',
        title: 'Here is have tutorial',
        content: 'What are tutorials that you want to learn.',
    },

    {
        key: '3',
        title: 'What is look like?',
        content: 'It juct a sample project. ',
    },
]

function AppHero(){
    return(
        <div id="hero" className="heroBlock">
             <Carousel >
                {items.map(item =>{
                    return(
                        <div className="container-fluid" key={item.key}>
                            <div className="content">
                                <h3 >{item.title}</h3>
                                <p>{item.content}</p>
                                <div className="btnHolder">
                                   <Button type="primary" size="large">More</Button>
                                   <Button  size="large"><i className="fas fa-desktop"></i> Watch</Button>
                                </div>
                            </div>
                        </div>
                    );
                })}
            </Carousel>
        </div>
    );
}

export default AppHero;