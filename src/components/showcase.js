import React from 'react';
import { useHistory } from "react-router-dom";
import { motion } from "framer-motion"

function Showcase() {
    const history = useHistory();

    function onSubmitHandler(e) {
        if(e.keyCode === 13){
            e.preventDefault(); 
            console.log("enter pressed");
            history.push('/near-me');
        }
    }

    return (
        <div className="showcase">
            <div className="photo-container">
                {/* <div className="image-cropper">
                    <img src="images/showcase-photo.jpeg" alt="" />
                </div> */}
                {/* <div className="white-circle"></div> */}
                {/* <div className="circle"></div> */}

                <div className="image-text">
                    <h1>You Donate, We Deliver.</h1>
                    <h4>A courier service made to make charity easier for you.</h4>
                </div>

            </div>
            <div className="welcome-container">
                <div className="welcome-text">
                    <div className="home-title">
                        <i className="fas fa-heart"></i>
                        <motion.h1 
                        initial={{fontSize: 33}}
                        animate={{color: '#333', fontSize: 33}}>
                        Welcome
                        </motion.h1>
                    </div>
                    
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Eos laudantium perferendis quisquam iure odit reiciendis ea dolores dicta voluptates dolorum labore tempora consequuntur, sed alias totam deleniti earum libero inventore.</p>
                    <h4>Enter your address to find local charity shops</h4>
                </div>
                <div className="search-bar">
                    <input onKeyDown={onSubmitHandler} type="text" placeholder="Enter Postcode"/>
                    <i className="fas fa-search"></i>
                </div>
            </div>
        </div>
    );
}


export default Showcase;