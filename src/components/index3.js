import styles1 from './index3.module.css'
import{Link} from 'react-router-dom';
import { FaInstagram, FaFacebook, FaGoogle, FaGithub,FaWhatsapp,FaUserCircle,FaRegUserCircle } from 'react-icons/fa' ;

function Home(){
    return(
        <div className={styles1.container3}> 

        <nav>
            <div className={styles1.logo3}>
                <a href="index.html">CMTECH</a>
            </div>
            <ul>
                <li><a href="#">Home</a></li>
                <li><a href="#">Serviços</a></li>
                <li><a href="#">Team</a></li>
                <li><a href="#">Blog</a></li>
                <li><a href="#">nos contacte</a></li>
                <li><a href="#">Login</a></li>
                <a><FaUserCircle className={styles1.icons3}/></a>    
            </ul>
            <div className={styles1.menuIcon3}>
                <img src='/fav.jpeg'/>
            </div>
        </nav>

        <main>
            <div className={styles1.textBx3}>
                <h1> Preparados para o mundo digital? <b> Transforme seu negócio com a gente. </b> </h1>
                <p>
                Conte com a nossa inteligência humana em soluções digitais. A CMTECH se renova e inova. 
                        Evolui e está pronta para fazer sua empresa evoluir. Para isso, desenvolve soluções 
                        completas para transformar seu negócio, levá-lo numa viagem sem volta para o mundo digital. 
                        Prontos para o futuro agora? Vem com a CMTECH!
                </p>
                
                <div className={styles1.input3}>
                    <input type="email" placeholder="Endereço de email"/>
                    <button>Ver Mais</button>
                </div>

                <div className={styles1.t3}>
                        <a><FaFacebook className='icons1'/></a>
                        <a><FaGoogle className='icons1'/></a>
                        <a><FaGithub className='icons1'/></a>
                        <a><FaInstagram className='icons1'/></a>
                        <a><FaWhatsapp className='icons1'/></a>     

                </div>
            </div>


            <div className={styles1.imgBX3}>
                <img src='./fav.jpeg' />
            </div>
        </main>
    </div>
    );
    
} 

export default Home;