import React from 'react';
import './Projects.css';

function Projects() {
    return (
        <div>
            <div className="projects"></div>
            <div className="project_description">
                <h3 className="color_coral">Ecommerce Website</h3>
                <p>
                A functional E-commerce website built using html, css, javascript, react.js, reducer and is hosted on firebase.
                Also, it has all the authentication for login as well as signup.
                </p>
                <h3 className="color_coral">Link - <a href="https://k-cart.web.app/" target="_blank" rel="noreferrer" className="color_coral">kcart.web.app</a></h3>
            </div>
            
        </div>
    )
}

export default Projects;
