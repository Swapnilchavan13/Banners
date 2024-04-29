import React from 'react';
import "../Styles/one.css";

export const Three = () => {
  return (
    <div id='maindiv'>
        <div className='banner'>
            <img src="https://img.freepik.com/free-psd/gym-fitness-web-banner-template_106176-670.jpg" alt="" />
        </div>
        <div className='offer'>
            <img src="https://d1csarkz8obe9u.cloudfront.net/posterpreviews/fitness-gym-banner-%282ft-x-6ft%29-%281%29-design-template-c3368df79c2dd9058d46f25a5ba18445_screen.jpg?ts=1665126812" alt="" />
        </div>

        <div className='contentandphoto'>
            <div className='content'>
           
            <ul>
    <strong>Gym Services:</strong>
    
    <li>Personalized Fitness Plans: Tailored workout plans designed to help you achieve your fitness goals effectively.</li>
    <li>Professional Training: Certified trainers providing expert guidance and support to maximize your workout results.</li>
   </ul>

            </div>
            <div className='photo'>
                <img src="https://us.123rf.com/450wm/tankist276/tankist2761804/tankist276180400260/100206226-very-power-guy-bodybuilder-execute-exercise-with-dumbbells-inside-gym-vertical-photo.jpg?ver=6" alt="" />
            </div>
        </div>

        <iframe title='gym' width="385" height="220" src="https://www.youtube.com/embed/tUykoP30Gb0?si=8jVnDWaBNr7etKla" allowfullscreen></iframe>
     
        <div className='info'>
            <h3>Fill The Details</h3>
            <label htmlFor="">Name</label>
            <input placeholder='Enter Your Name' type="text" />
            <label htmlFor="">Age</label>
            <input placeholder='Enter Your Age' type="number" />
            <label htmlFor="">Mobile</label>
            <input placeholder='Enter Your Mobile Number' type="number" />
            <label htmlFor="">Address</label>
            <input placeholder='Enter Your Address' type="text" />

            <button>Submit</button>
        </div>

    </div>
  )
}
