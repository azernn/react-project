import herobg from '../../../../assets/images/herobgmain.png'
import './heroContiner.scss'
export const HeroContiner = () => {
    return (
        <div className="heroContiner">
            <div className="heroTitle">Are you starving?</div>
            <div className="heroTitle2">Within a few clicks, find meals that are accessible near you</div>
            <div className="card">
                <div className="top">
                    <div className="tab1">
                        <div className="icon"> <img src="moto.png" /></div>
                        <div className="text">Delivery</div>
                    </div>
                    <div className="tab2">
                        <div className="icon"> <img src="Icon.png" /></div>
                        <div className="text">Pickup</div>
                    </div>
                </div>

                <div className="buttom">
                    <div className="textfield-button">
                        <div className="textfield">
                            <div className="icon"> <img src="Icon (1).png" /></div>
                            <div className="inputtext">Enter Your Address</div>
                        </div>
                        <button className="button">
                            <div className="icon"> <img src="Icon (7).png" alt="" /></div>
                            <div className="buttontext">Find Food</div>
                        </button>
                    </div>
                </div>
            </div>
        </div>
    )
}
export default HeroContiner;
