import  Axios  from 'axios';
import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom';
import '../css/libro.css'
import {FaFacebookF,FaInstagram,FaLinkedinIn,FaYoutube,FaTelegram} from 'react-icons/fa'
import {SiGmail} from 'react-icons/si'


const iconsize={fontSize:"18px"}
export default function Footer() {

    const [email, setEmail] = useState("");
    const [phone, setPhone] = useState("");
    const [author, setAuthor] = useState("");
    const [book, setBook] = useState("");
    const navigate = useNavigate();
    const sendForm = () => {
        // e.preventDefault();
        Axios.post('http://localhost:3001/api/offerinsert', {
            email: email,
            phone: phone,
            author: author,
            book: book 
        }).then(function (response) {
            navigate("./", { replace: true });
            console.log(response);
        })
            .catch(function (error) {
                console.log(error);
            });
    }

    return (
        <div id='footer'>
            <footer className="footer bg-danger" >
                <div className="container">
                    <div className="footer__content">
                        <div className="footer__nav">
                            <div className="footer__nav-top">
                                <ul className="footer__nav-list">
                                    <h3 className="footer__nav-title">Şirkət</h3>
                                    <li className="footer__nav-item">
                                        <a href="#" className="footer__nav-link">Haqqımızda</a>
                                    </li>
                                    <li className="footer__nav-item">
                                        <a href="#" className="footer__nav-link">Karyera</a>
                                    </li>
                                    <li className="footer__nav-item">
                                        <a href="#" className="footer__nav-link">Bloq</a>
                                    </li>
                                    <li className="footer__nav-item">
                                        <a href="#" className="footer__nav-link">"Əlaqə"</a>
                                    </li>
                                </ul>

                                <ul className="footer__nav-list">
                                    <h3 className="footer__nav-title">Kömək</h3>
                                    <li className="footer__nav-item">
                                        <a href="#" className="footer__nav-link">Ödəniş</a>
                                    </li>
                                    <li className="footer__nav-item">
                                        <a href="#" className="footer__nav-link">Çatdırılma</a>
                                    </li>
                                    <li className="footer__nav-item">
                                        <a href="#" className="footer__nav-link">Geri-qaytarma</a>
                                    </li>
                                    <li className="footer__nav-item">
                                        <a href="#" className="footer__nav-link">FAQ</a>
                                    </li>
                                </ul>
                                <ul className="footer__nav-list">
                                    <h3 className="footer__nav-title">Digər</h3>
                                    <li className="footer__nav-item">
                                        <a href="#" className="footer__nav-link">Tərəfdaş</a>
                                    </li>
                                    <li className="footer__nav-item">
                                        <a href="#" className="footer__nav-link">
                                            Saytın xəritəsi</a>
                                    </li>
                                </ul>
                            </div>
                            <div className="footer__nav-bottom">
                                <a href="#" className="footer__nav-social"><FaFacebookF style={iconsize}/></a>
                                <a href="#" className="footer__nav-social"><FaInstagram style={iconsize} /></a>
                                <a href="#" className="footer__nav-social"><FaLinkedinIn style={iconsize} /></a>
                                <a href="#" className="footer__nav-social"><SiGmail style={iconsize} /></a>
                                <a href="#" className="footer__nav-social"><FaYoutube style={iconsize} /></a>
                                <a href="#" className="footer__nav-social"><FaTelegram style={iconsize} /></a>
                            </div>
                        </div>
                        <div className="footer__request">
                            <h3 className="footer__nav-title">KİTAB TƏLƏB EDİN</h3>
                            <p className="footer__nav-text">Kitab tələb etmək üçün aşağıdakı Formanı doldurun. Kitab əlçatan olan
                                kimi sizə məlumat verəcəyik.</p>
                            <form  className="footer__request-form">
                                <div className="footer__request-left">
                                    <label htmlFor="" className="footer__request-label">
                                        Email: *
                                        <input
                                            onChange={(e) => {
                                                setEmail(e.target.value) }}
                                            type="email"
                                            className="footer__request-input" required />
                                    </label>

                                    <label htmlFor="" className="footer__request-label">
                                        Müəllif: *
                                        <input
                                         onChange={(e) => {
                                            setAuthor(e.target.value) }} 
                                        type="text" className="footer__request-input" required />
                                    </label>

                                </div>
                                <div className="footer__request-right">
                                    <label htmlFor="" className="footer__request-label">
                                        Telefon:
                                        <input
                                         onChange={(e) => {
                                            setPhone(e.target.value) }}
                                         type="tel" className="footer__request-input" />
                                    </label>
                                    <label htmlFor="" className="footer__request-label">
                                        Kitab adı: *
                                        <input
                                         onChange={(e) => {
                                            setBook(e.target.value) }}
                                         type="text" className="footer__request-input" required />
                                    </label>

                                </div>
                                <div className="footer__submit">
                                    <input 
                                    name=''
                                    onClick={sendForm}
                                    type="submit"
                                     className="footer__submit-btn"  value='Təsdiqlə' />
                                </div>
                            </form>

                        </div>
                    </div>
                    <div className="footer__copyright">
                        <p>Müəllif hüququ © 2022 . Keet.app. Bütün hüquqlar qorunur</p>
                    </div>
                </div>
            </footer>
        </div>
    )
}
