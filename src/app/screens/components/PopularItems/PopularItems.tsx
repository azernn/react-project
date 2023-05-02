/* eslint-disable react/style-prop-object */
/* eslint-disable jsx-a11y/alt-text */
import './Popularitems.scss';
export const Popularitems = () => {
    return (
        <div className="popularitems">
            <div className="sliderbutton">
                <button className="arrowleft">
                    <div className="icon1"><img src="Arrow Left.png" /></div>
                </button>
                <button className="arrowright">
                    <div className="icon1"><img src="Arrow Right.png" /> </div>
                </button>
            </div>
            <div className="title-cards">
                <div className="title1">Popular items</div>
                <div className="cards">
                    <div className="c1">
                        <div className="image-title">
                            <div className="image"><img src="Frame 40.png" //style="width: 284px;"
                            /></div>
                            <div className="title">
                                <div className="Name-Location-Price">
                                    <div className="Name-Locatin">
                                        <div className="Name">Cheese Burger</div>
                                        <div className="Location"> <img src="Location.png" /></div>
                                    </div>
                                    <div className="Price">$3.88</div>
                                </div>
                            </div>
                        </div>
                        <button className="button">Order Now</button>
                    </div>
                    <div className="c1">
                        <div className="image-title">
                            <div className="image"><img src="Frame 40 (1).png " //style="width: 284px;"
                            /></div>
                            <div className="title">
                                <div className="Name-Location-Price">
                                    <div className="Name-Locatin">
                                        <div className="Name">Toffe’s Cake</div>
                                        <div className="Location"> <img src="Location (1).png" /></div>
                                    </div>
                                    <div className="Price">$4.00</div>
                                </div>
                            </div>
                        </div>
                        <button className="button">Order Now</button>
                    </div>
                    <div className="c1">
                        <div className="image-title">
                            <div className="image"><img src="Frame 40 (2).png" //style="width: 284px;"
                            /></div>
                            <div className="title">
                                <div className="Name-Location-Price">
                                    <div className="Name-Locatin">
                                        <div className="Name">Dancake</div>
                                        <div className="Location"> <img src="Location (2).png" /></div>
                                    </div>
                                    <div className="Price">$1.99</div>
                                </div>
                            </div>
                        </div>
                        <button className="button">Order Now</button>
                    </div>
                    <div className="c1">
                        <div className="image-title">
                            <div className="image"><img src="Frame 40 (3).png" //style="width: 284px;"
                            /></div>
                            <div className="title">
                                <div className="Name-Location-Price">
                                    <div className="Name-Locatin">
                                        <div className="Name">Crispy Sandwitch</div>
                                        <div className="Location"><img src="Location (3).png" /></div>
                                    </div>
                                    <div className="Price">$3.00</div>

                                </div>
                            </div>
                        </div>
                        <button className="button">Order Now</button>
                    </div>
                    <div className="c1">
                        <div className="image-title">
                            <div className="image"><img src="Frame 40 (5).png" //style="width: 284px;"
                            /></div>
                            <div className="title">
                                <div className="Name-Location-Price">
                                    <div className="Name-Locatin">
                                        <div className="Name">Thai Soup</div>
                                        <div className="Location"> <img src="Location (4).png" /></div>
                                    </div>
                                    <div className="Price">$2.79</div>
                                </div>
                            </div>
                        </div>
                        <button className="button">Order Now</button>
                    </div>
                </div>
            </div>
        </div>
    )
}
export default Popularitems;