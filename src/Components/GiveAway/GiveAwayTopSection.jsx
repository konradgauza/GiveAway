import Decoration from "../../assets/Decoration.svg";

const GiveAwayTopSection = () => {


    return (
        <div className="giveaway-welcome-section">
            <div className="giveaway-content-container">
                <p className="welcome-content-text">Oddaj rzeczy, ktorych już nie chcesz</p>
                <p className="welcome-content-text">POTRZEBUJĄCYM</p>
                <img src={Decoration} alt="" className="welcome-content-decoration"/>
                <p className="welcome-content-instruction-text"> Wystarczą 4 proste kroki: </p>

                <div className="welcome-content-steps">
                    <div className="rhombus">
                        <div className="rhombus-content">
                            <p className="rhombus-number">1</p>
                            <p className="rhombus-text">Wybierz <br /> rzeczy</p>
                        </div>
                    </div>
                    <div className="rhombus">
                        <div className="rhombus-content">
                            <p className="rhombus-number">2</p>
                            <p className="rhombus-text"> Spakuj je<br /> w worki</p>
                        </div>
                    </div>
                    <div className="rhombus">
                        <div className="rhombus-content">
                            <p className="rhombus-number">3</p>
                            <p className="rhombus-text">wybiersz<br /> fundację</p>
                        </div>
                    </div>
                    <div className="rhombus">
                        <div className="rhombus-content">
                            <p className="rhombus-number">4</p>
                            <p className="rhombus-text">Zamów<br /> kuriera</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
};

export default GiveAwayTopSection;