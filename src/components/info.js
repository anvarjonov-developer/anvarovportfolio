import styles from "../../src/util/styles"
import '../../src/App.css'

function Info(){
    return(
<div className={`${styles.flexStart} flex-col ${styles.flexBetween} mt-[-50px] w-full flex-wrap sm:mb-10 mb-6 `}>

    
<h3 className={`${styles.header} text-center`}>My Skills</h3>

    
    <div className="flex md:flex-row flex-col items-start gap-20 justify-between mt-20">

                <div class="pie">
                    <div class="slice-right"></div>
                    <div class="slice-left"></div>
                    <div class="percent">
                    </div>
                    <div class="number">75%</div>
            </div>
                            <div class="pie">
                    </div>
                    <div class="slice-right"></div>
                    <div class="slice-left"></div>
                    <div class="percent">
                    <div class="number">75%</div>
            </div>
                            <div class="pie">
                    </div>
                    <div class="slice-right"></div>
                    <div class="slice-left"></div>
                    <div class="percent">
                    <div class="number">75%</div>
            </div>



       </div>

        </div>
        
    
    )
    }

    export default Info