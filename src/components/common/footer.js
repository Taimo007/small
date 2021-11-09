import React from "react";
import { BackTop } from 'antd';

function AppFooter(){
    return(
       <div id="footer" className="container-fluid">
           <div className="footer">
               <div className="logo">
                   <i class="fas fa-bolt">Small</i>
                </div>
                <ul className="socials">
                    <li><a href="https://facebook.com"><i class="fab fa-facebook-f" aria-hidden="true"></i></a></li>
                    <li><a href="https://youtube.com"><i class="fab fa-youtube"></i></a></li>
                    <li><a href="https://twitter.com"><i class="fab fa-twitter"></i></a></li>
                    <li><a href="https://instagram.com"><i class="fab fa-instagram"></i></a></li>
                </ul>
                <div className="copyright">Copyright 2021 Small</div>
                <BackTop>
                    <div className="goTop"><i class="fas fa-arrow-circle-up"></i></div>
                </BackTop>
           </div>
       </div>
    );
}
export default AppFooter;