import React from 'react';
import "../Styles/one.css";

export const Two = () => {
  return (
    <div id='maindiv'>
        <div className='banner'>
            <img src="https://media.istockphoto.com/id/1349128292/vector/dental-care-horizontal-banner-with-flat-icons-along-the-bottom-on-a-dark-background-healthy.jpg?s=170667a&w=0&k=20&c=OEu81P6p_D3he6wDU_UZmNck_TXq36L60OooL-yUcaU=" alt="" />
        </div>
        <div className='offer'>
            <img src="https://img.freepik.com/free-vector/flat-social-media-promo-template-dental-clinic-business_23-2149585882.jpg?size=626&ext=jpg&ga=GA1.1.553209589.1714262400&semt=ais" alt="" />
        </div>

        <div className='contentandphoto'>
            <div className='content'>
           
            <ul>
    <strong>Dental Services:</strong>
    <li>Comprehensive Dental Care: Offering a wide range of dental services to address all your oral health needs.</li>
    <li>Personalized Treatment Plans: Customized treatment plans tailored to your specific dental concerns and goals.</li>
   </ul>

            </div>
            <div className='photo'>
                <img src="https://st.depositphotos.com/62628780/56764/i/450/depositphotos_567641040-stock-photo-here-to-help-you-prevent.jpg" alt="" />
            </div>
        </div>

       
        <iframe width="385" height="220" src="https://www.youtube.com/embed/lw7xIB0kPCo?si=J8VTkU-Fakei5xwv" allowfullscreen></iframe>
     

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
