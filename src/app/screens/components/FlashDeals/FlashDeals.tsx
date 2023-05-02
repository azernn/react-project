import './FlashDeals.scss'
export const FlashDeals = () => {
    return (

        <div className="flash-deals">
            <div className="flashdeals-card">
                <div className="food-photo">
                    <div className="discount">
                        <div className="number">15</div>
                        <div className="percentage-symbol">
                            <div className="percent">%</div>
                            <div className="off">Off</div>
                        </div>
                    </div>
                    <div className="fp"> <img itemProp='image' src="food (1).png" alt='photo' /></div>
                </div>
                <div className="texts-badge">
                    <div className="greys-vage">Greys Vage</div>
                    <div className="frame">
                        <div className="remaining">6 Days Remaining</div>
                    </div>
                </div>
            </div>
            <div className="flashdeals-card">
                <div className="food-photo">
                    <div className="discount">
                        <div className="number">10</div>
                        <div className="percentage-symbol">
                            <div className="percent">%</div>
                            <div className="off">Off</div>
                        </div>
                    </div>
                    <div className="fp"> <img src="food (2).png" /></div>
                </div>
                <div className="texts-badge">
                    <div className="greys-vage">Greys Vage</div>
                    <div className="frame">
                        <div className="remaining">6 Days Remaining</div>
                    </div>
                </div>
            </div>
            <div className="flashdeals-card">
                <div className="food-photo">
                    <div className="discount">
                        <div className="number">25</div>
                        <div className="percentage-symbol">
                            <div className="percent">%</div>
                            <div className="off">Off</div>
                        </div>
                    </div>
                    <div className="fp"> <img src="food (3).png" /></div>

                </div>
                <div className="texts-badge">
                    <div className="greys-vage">Greys Vage</div>
                    <div className="frame">
                        <div className="remaining">7 Days Remaining</div>
                    </div>
                </div>
            </div>
            <div className="flashdeals-card">
                <div className="food-photo">
                    <div className="discount">
                        <div className="number">20</div>
                        <div className="percentage-symbol">
                            <div className="percent">%</div>
                            <div className="off">Off</div>
                        </div>
                    </div>

                    <div className="fp"> <img src="food (4).png" /></div>
                </div>
                <div className="texts-badge">
                    <div className="greys-vage">Greys Vage</div>
                    <div className="frame">
                        <div className="remaining">8 Days Remaining</div>
                    </div>
                </div>
            </div>
        </div>
    )
}
export default FlashDeals;