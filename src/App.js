import styles from "./util/styles"
import Nav from "./components/navigation/nav"
import Home from "./components/home"
import Info from "./components/info"
import Contact from "./components/contact/contact"
import Footer from "./components/footer"
function App(){
return(
  <div className="bg-primary w-full overflow-hidden">
 <div className={`${styles.paddingX} ${styles.flexCenter}`}>
<div className={`${styles.container}`}>
<Nav/>
<Home/>
<Info/>
<Contact/>
<Footer/>
</div>
 </div>
</div>

)
}

export default App