import react from "react";
import { Row, Col } from 'antd';

const items = [
    {
        key: '1',
        icon: <i className="fas fa-chart-pie"></i>,
        title: 'High Performance',
        content: 'AMD is a type of cpu that has many core  ',
    },

    {
        key: '2',
        icon: <i className="fas fa-desktop"></i>,
        title: 'MSI is the popular gaming ',
        content: 'MSI is True gaming that have superboost ',
    },

    {
        key: '3',
        icon: <i className="fas fa-database"></i>,
        title: 'MongoDB is databse',
        content: 'MongoDB is a no SQL and popular to use wiht fullstack javascript',
    }
]

function AppAbout(){
    return(
       <div id="about" className="block aboutBlock">
           <div className="container-fluid">
               <div className="titleHolder">
                   <h2>About Us</h2>
                   <p>Hello All of you to see my site</p>
               </div>
               <div className="contentHolder">
                   <p>It is a sample websit that we want to built to get more experience as web developer.</p>
               </div>
               <Row gutter={[16, 16]}>
                   {items.map(item =>{
                       return(
                        <Col span={8} key={item.key}> 
                            <div className="content">
                                <div className="icon">
                                    {item.icon}
                                </div>
                                <h3>{item.title}</h3>
                                <p>{item.content}</p>
                            </div>
                        </Col>
                        
                       );
                   })}
                    
                </Row>
           </div>
       </div>
    );
}

export default AppAbout;