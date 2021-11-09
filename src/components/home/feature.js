import React from "react";
import { Row, Col } from 'antd';

import image1 from '../../assets/images/docker.jpg';
import image2 from '../../assets/images/dart.jpg';
import image3 from '../../assets/images/nodejs.jpg';
import image4 from '../../assets/images/php.jpg';
import image5 from '../../assets/images/laravel.jpg';
import image6 from '../../assets/images/graphql.jpg';


import { Card } from 'antd';
const { Meta } = Card;

function AppFeature(){
    return(
       <div id="feature" className="block featureBlock bgGray">
           <div className="container-fluid">
           <div className="titleHolder">
               <h2>Learn Tutorials</h2>
               <p>There are tutorials you can learn here</p>
           </div>    
           <Row gutter={[16, 16]}>
                <Col span={8} >
                    <Card
                        hoverable
                        cover={<img alt="Docker" src={image1} />}
                    >
                        <Meta title="Docker"  />
                    </Card>
                </Col>
                <Col span={8} >
                    <Card
                        hoverable
                        cover={<img alt="Dart and Flutter" src={image2} />}
                    >
                        <Meta title="Dart and Flutter"  />
                    </Card>
                </Col>
                <Col span={8} >
                    <Card
                        hoverable
                        cover={<img alt="NodeJs" src={image3} />}
                    >
                        <Meta title="NodeJs"  />
                    </Card>
                </Col>
                <Col span={8} >
                    <Card
                        hoverable
                        cover={<img alt="php" src={image4} />}
                    >
                        <Meta title="php"  />
                    </Card>
                </Col>
                <Col span={8} >
                    <Card
                        hoverable
                        cover={<img alt="Laravel" src={image5} />}
                    >
                        <Meta title="Laravvel"  />
                    </Card>
                </Col>
                <Col span={8} >
                    <Card
                        hoverable
                        cover={<img alt="GraphQL" src={image6} />}
                    >
                        <Meta title="GraphQL"  />
                    </Card>
                </Col>
            </Row>
           </div>
       </div>
    );
}

export default AppFeature;