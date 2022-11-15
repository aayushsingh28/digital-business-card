import React from 'react'
import myImage from '../images/Aayush.png'

export default function About() {
    return (
        <div className='info-section'>
            <img src={myImage} alt="" className='profile-img' />
            <h2 className='name'>Aayush Singh</h2>
            <h5 className='role'>Frontend Developer</h5>
            <p className='email-id'>singhh.aayush28@gmail.com</p>
            <div className='links'>
                <a href='https://drive.google.com/file/d/1wWvOjhxRij64vQgvHZFS0xkKV7kbe86L/view?usp=share_link' className='resume-btn info-btn' target='_blank'>Resume</a>
                <a href='https://www.linkedin.com/in/aayush-singh-1a26a6200/' className='linkedin-btn info-btn' target='_blank'>Linkedin</a>
            </div>
        </div>
    )
}