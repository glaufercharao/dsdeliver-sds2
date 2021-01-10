import './styles.css'
import { ReactComponent as Instagram} from '../assets/images/Instagram.svg';
import { ReactComponent as Linkedin} from '../assets/images/Linkedin.svg';
import { ReactComponent as Youtube} from '../assets/images/Youtube.svg';

const Footer = () =>{
    return(
        <footer className="main-footer">
            App desenvolvido durante a 2ª ed. do evento Semana DevSuperior
            <div className="footer-icons">
                <a href="http://youtube.com" target="_new"><Youtube /></a>
                <a href="https://linkedin.com" target="_new"><Linkedin /></a>
                <a href="https://instagram.com" target="_new"><Instagram /></a>
            </div>
        </footer>
    )
}

export default Footer