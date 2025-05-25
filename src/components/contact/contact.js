import styles from "../../util/styles"
import '../../App.css'


function Contact(){
    return(
          <div className={`${styles.flexStart} flex-col ${styles.flexBetween} mt-[120px] w-full flex-wrap sm:mb-10 mb-6`}>
      <h3 className={`${styles.header} text-center`}>Contact Me</h3>
      <div className="flex md:flex-row flex-col items-start gap-20 justify-between mt-20">
        
        <div className="card reveal active">
          <div className="contact-icon">
            <i className="fab fa-telegram"></i>
          </div>
          <div className="info">
            <h3>Telegram</h3>
            <a href="https://t.me/aanvrvvv">@aanvrvvv</a>
          </div>
        </div>

        <div className="card reveal active">
          <div className="contact-icon">
            <i className="fas fa-phone"></i>
          </div>
          <div className="info">
            <h3>Phone</h3>
            <span>+998 (77) 317 02 01</span>
          </div>
        </div>
        <div className="card reveal active">
          <div className="contact-icon">
            <i className="fab fa-instagram"></i>
          </div>
          <div className="info">
            <h3>Instagram</h3>
            <a href="https://instagram.com/cn.nvrv">cn.cnrv</a>
          </div>
        </div>
        <div className="card reveal active">
          <div className="contact-icon">
            <i className="fab fa-github"></i>
          </div>
          <div className="info">
            <h3>Github</h3>
            <a href="https://github.com/anvarjonov-developer">anvarov</a>
          </div>
        </div>

      </div>
    </div>
    )
}


export default Contact