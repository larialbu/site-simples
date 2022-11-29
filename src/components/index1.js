import{Link} from 'react-router-dom'
import styles from './index1.module.css'
import { FaEnvelope, FaLock, FaFacebook, FaGoogle, FaGithub } from 'react-icons/fa' ;

function Login(){
    return(
        <div className={styles.container1}>
            <div className={styles.loginForm1}>
                <div className={styles.title1}>Login</div>
                <form action='#'>
                    <div className={styles.inputBox1}>
                       <FaEnvelope className={styles.icons1}/>
                       <input type="text" placeholder='Enter your email' required/>
                    </div>

                    <div className={styles.inputBox1}>
                        <FaLock className={styles.icons1}/>
                       <input type="password" placeholder='Enter your password' required/>
                    </div> 
                    <div className={styles.fotgot1}> <Link to='./RecuperarSenha'>Esqueceu a senha?</Link></div>
                    <div className={styles.inputBox1}>
                        <input type="submit" vaule="Entrar"/>
                    </div>
                    <div className={styles.divider1}>ou</div>
                    <div className={styles.medias1}>
                        <FaFacebook className={styles.icons1}/>
                        <FaGoogle className={styles.icons1}/>
                        <FaGithub className={styles.icons1}/>
                    </div>
                    <div className={styles.sigupText1}>
                        Não tenho uma conta? <Link to='./CadastroUsuario'>Crie uma agora</Link>
                    </div>
                </form>
            </div>

            <div className={styles.loginImg1}>
                <img src="./fav.jpeg" width="100%"/>
            </div>
        </div>
    );
}

export default Login;