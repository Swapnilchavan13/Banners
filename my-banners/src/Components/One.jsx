import React from 'react';
import "../Styles/one.css";

export const One = () => {
  return (
    <div id='maindiv'>
        <div className='banner'>
            <img src="https://www.mbmmakeupstudio.com/wp-content/uploads/2021/04/Natural-Makeup-Look-1.jpg" alt="" />
        </div>
        <div className='offer'>
            <img src="https://img.freepik.com/free-psd/makeup-special-offer-banner-template_23-2148741880.jpg" alt="" />
        </div>

        <div className='contentandphoto'>
            <div className='content'>
           
        <ul>
            <strong>Bridal Makeup Services:</strong>
            <br />
                    <li>Emphasizes the significance of bridal makeup on the wedding day.</li>
                    <li>Highlights the commitment to helping clients look and feel their best.</li>
        </ul>
            </div>
            <div className='photo'>
                <img src="https://cdn-fpjnk.nitrocdn.com/vVKtIfSlUsfxaPluxGDJIBsqXIZVzyZJ/assets/images/optimized/rev-b8e55b4/www.makeuupsalon.in/wp-content/uploads/2023/01/makeup-artist-in-Delhi-Connaught.jpg" alt="" />
            </div>
        </div>

       
        <iframe width="385" height="220" src="https://www.youtube.com/embed/lXu8bZn24Qs" allowfullscreen></iframe>
     

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
