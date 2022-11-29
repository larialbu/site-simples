import{Link} from 'react-router-dom'
import styles3 from './index4.module.css'
import { FaEnvelope, FaLock, FaUser} from 'react-icons/fa' ;

function CadastroUsuario(){{
    return(
        <div className={styles3.container4}>
        <div className={styles3.loginForm4}>
            <div className={styles3.title4}>Cadastre-se</div>
            <form action='#'>
                <div className={styles3.inputBox4}>
                   <FaUser className={styles3.icons4}/>
                   <input type="text" placeholder='Nome' required/>
                </div>
                <div className={styles3.inputBox4}>
                   <FaEnvelope className={styles3.icons4}/>
                   <input type="text" placeholder='Email' required/>
                </div>
 
                <div className={styles3.inputBox4}>
                    <FaLock className={styles3.icons4}/>
                   <input type="password" placeholder='Senha' required/>
                </div> 

                <div className={styles3.inputBox4}>
                    <input type="submit" vaule="Cadastrar"/>
                </div>
            </form>
        </div>

        <div className={styles3.loginImg4}>
            <img src="/fav.jpeg" width="100%"/>
        </div>
    </div>
    );
}}

export default CadastroUsuario;