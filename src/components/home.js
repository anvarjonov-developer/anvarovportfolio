import styles from "../util/styles";
import logo from '../../src/assets/logo.png'

function Home() {
  return (
    <section id="home" className={`${styles.container} items-center ${styles.flexBetween} flex md:flex-row flex-col ${styles.paddingY}`}>
      <div className="flex flex-col xl:px-0 sm:px-16 px-6">
        <div className="flex flex-row items-center justify-center py-[6px] px-4 rounded-[10px] mb-2 bg-slate-600">
          <p className={`text-[25px]  ${styles.paragraph}`}>Anvarjonov Nurbek</p>
        </div>

        <p className={`${styles.paragraph} sm:w-[400px] w-full mt-5`}>
          Hello, I'm 15 years old, I'm a web and mobile developer, I've been programming for 1 year, I code in the frontend javascript framework react, I code in the backend node js, I code in mobile react native or dart framework flutter
        </p>
      </div>

      <div>
        <img src={logo} alt="Logo" className="w-[400px] h-[100] mr-10" />
      </div>
    </section>
  );
}

export default Home;