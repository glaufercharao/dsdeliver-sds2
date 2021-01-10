import './styles.css'
import { ReactComponent as HomeImage} from '../assets/images/home.svg';
import Footer from '../Footer';
const Home = () =>{
    return(
        <>
            <div className="home-container">
                <div className="home-content">
                    <div className="home-actions">
                        <h1 className="home-title">Faça seu pedido<br/> que entregamos<br/> para você!!!</h1>
                        <h3 className="home-sub-title">
                            Escolha o seu pedido que em poucos minutos<br /> 
                            levamos para você
                        </h3>
                        <a href="order" className="home-btn-order">FAZER PEDIDO</a>
                    </div>
                    <div className="home-image">
                        <HomeImage />
                    </div>
                </div>
            </div>
            <Footer />
        </>
    )
}

export default Home;