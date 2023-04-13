import React from "react";
// import 'SpaceContentJSHomepage.css'

import Module1 from "../Module1/Module1";
import Module2 from "../Module2/Module2";
import Module3 from "../Module3/Module3";



export default function SpaceContentJSHomepage(){

    return(

        <div className="ContentSpaceJSHomePage1">

            
            <div className="Row1">

                <div className="Module1">

                
                    {/* <h1 className="IntoductionHeading">
                        Hello Visitors
                    </h1>

                    <Paragraph className="p1">
                        Thank you for taking your time to visit. <br/>
                        This site is created by me to bring the smouldering 
                        creativity inside you to the world spot light. <br/>

                    </Paragraph>
                    

                    <Paragraph className="p11">
                        To Read More, click <br/>
                        
                        <ul><li><a href="#"> Read More</a></li></ul>

                    </Paragraph> */}

                </div>

                <div className="Module2" style={{backgroundImage:'url(${image id="Row1Image"})'}}>
                
                    
                    
                </div>

            </div>

            <div className="Row2">
                
                {/* <div className="Module2" style={{backgroundImage:'url(${image id="Row2Image"})'}}>

                </div>

                <div className="Module1">

                    <h1 className="IntoductionHeading">
                        Hello Visitors
                    </h1>

                    <Paragraph  className="p1">
                        Thank you for taking your time to visit. <br/>
                        This site is created by me to bring the smouldering 
                        creativity inside you to the world spot light. <br/>

                    </Paragraph>
                    

                    <Paragraph className="p11">
                        To Read More, click <br/>
                        
                        <ul><li><a href="#"> Read More</a></li></ul>

                    </Paragraph>
                
                </div> */}
            
            </div>

            <div className="Row3">
                
                <div className="Module3" >

                    
                </div>

                <div className="Module3">
                    
                </div>
                    
                <div className="Module3">
                    
                </div>
                
            </div>

        </div>
    )
}

