import React from "react";


import { Anchor } from 'antd';
const { Link } = Anchor;

function AppHeader(){
    return(
        <div className="container-fluid">
            <div className="header">
              <div className="logo">
                  <i class="fas fa-bolt"></i>
                  <a href="https://www.koompi.com/">Small</a>
              </div>
                
                <Anchor targetOffset="65">
                    <Link href="#hero" title="Home" />
                    <Link href="#feature" title="Tutorial" />
                    <Link href="#about" title="About" />
                    <Link href="#contact" title="Countact" />
                    
                    
                </Anchor>
            </div>
        </div>
    );
}

export default AppHeader;