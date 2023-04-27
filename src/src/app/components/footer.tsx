import'./footer.scss';
export const Footer=() => {
    return(
        <footer>
        <div className="cta-footer">
            <div className="cta">
                <div className="text-button">
                    <div className="text">Are you ready to order with the best deals?</div>
                    <button> Proceed to order </button>
                </div>
            </div>
            <div className="footer">
                <div className="our-top-cities">
                    <p>Our top cities</p>
                    <div className="items">
                        <div className="first">
                            <ul>
                                <li>San Francisco</li>
                                <li>Miami</li>
                                <li>San Diego</li>
                                <li>East Bay</li>
                                <li>Long Beach</li>
                            </ul>
                        </div>
                        <div className="second">
                            <ul>
                                <li> Los Angeles</li>
                                <li>Washington DC</li>
                                <li>Seattle</li>
                                <li>Portland</li>
                                <li> Nashville</li>
                            </ul>
                        </div>
                        <div className="third">
                            <ul>
                                <li> New York City</li>
                                <li> Orange County</li>
                                <li> Atlanta</li>
                                <li> Charlotte</li>
                                <li> Denver</li>
                            </ul>
                        </div>
                        <div className="fourth">
                            <ul>
                                <li> Chicago</li>
                                <li> Phoenix</li>
                                <li> Las Vegas</li>
                                <li> Sacramento</li>
                                <li> Oklahoma City</li>
                            </ul>
                        </div>
                        <div className="fiveth">
                            <ul>
                                <li> Columbus</li>
                                <li> New Mexico</li>
                                <li> Albuquerque</li>
                                <li> Sacramento</li>
                                <li> New Orleans</li>
                            </ul>
                        </div>
                    </div>
                </div>
                <div className="menu-subs-rights">
                    <hr/>
                    <div className="menu-subs">
                        <div className="menu">
                            <div className="items">
                                <p>Company</p>
                                <ul>
                                    <li>About us</li>
                                    <li> Team</li>
                                    <li>Careers</li>
                                    <li>Blog</li>
                                </ul>
                            </div>
                            <div className="items">
                                <p>Contact</p>
                                <ul>
                                    <li>Help & Support</li>
                                    <li> Partner with us</li>
                                    <li> Ride with us</li>
                                    <li>Blog</li>
                                </ul>

                            </div>
                            <div className="items">
                                <p>Legal</p>
                                <ul>
                                    <li> Terms & Conditions</li>
                                    <li> Refund & Cancellation</li>
                                    <li> Privacy Policy</li>
                                    <li> Cookie Policy</li>
                                </ul>
                            </div>
                        </div>
                        <div className="follow-subs">
                            <div className="follow">
                                <p>Follow Us</p>
                                <div className="icon"><img src="Icons (6).png" width="101px"/></div>
                            </div>
                            <div className="subs">
                                <p>Receive exclusive offers in your mailbox</p>
                                <div className="input-button">
                                    <input type="email" placeholder="Enter Your email"/>
                                    <button>Subscribe</button>
                                </div>
                            </div>
                        </div>
                    </div>
                    <hr/>
                    <div className="rights">
                        <p>All rights Reserved &copy; Your Company, 2023</p>
                    </div>
                </div>
            </div>
            </div>
    </footer>
    )
    }
    export default Footer