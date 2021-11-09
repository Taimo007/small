import React from "react";
import { Form, Input, Button} from 'antd';

const { TextArea } = Input;

function AppContact(){
    return(
       <div id="contact" className="block contact Block">
           <div className="container-fluid">
               <div className="titleHolder">
                   <h2>Contact US</h2>
                   <p></p>
               </div>
               <Form
                    name="contact"
                    className="login-form"
                    initialValues={{ remember: true }}
                   
                >
                    <Form.Item
                        name="username"
                        rules={[{ required: true, message: 'Please input your Username!' }]}
                    >
                        <Input
                       
                       type="text"
                       placeholder="Username"
                       />

                    </Form.Item>

                    <Form.Item
                        name="email"
                        rules={[{ required: true, message: 'Please input your Email' }]}
                    >
                        <Input
                       
                        type="email"
                        placeholder="Email"
                        />
                    </Form.Item>
                    
                    <Form.Item
                        name="phone-number"
                        rules={[{ required: true, message: 'Please input your Phone Number' }]}
                    >
                        <Input
                       
                        type="text"
                        placeholder="Phone Bumber"
                        />
                    </Form.Item>

                    <Form.Item
                        name="subject"
                        rules={[{ required: true, message: 'Please input your Subject' }]}
                    >
                        <Input
                       
                        type="text"
                        placeholder="Subject"
                        />
                    </Form.Item>

                    <Form.Item
                        name="message"
                        rules={[{ required: true, message: 'Please input your Subject' }]}
                    >
                        <TextArea 
                       
                        type="text"
                        placeholder="Message"
                        />
                    </Form.Item>

                    <Form.Item>
                        <Button type="primary" htmlType="submit" className="login-form-button">
                        Submit
                        </Button>
                        
                    </Form.Item>
                </Form>
           </div>
       </div>
    );
}

export default AppContact;