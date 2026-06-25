// import BMICalculator from "../../components/BMI/BMICalculator"
import BackToTop from "../../components/Reusable/BackToTop"
import FAQ from "../../components/Reusable/FAQ"
import Achievement from "../Achivement/Achievement"
import DevelopmentPathway from "../Development/DevelopmentPathway"
import Programs from "../Program/Programs"
import Events from "./Events"
import Heros from "./Heros"
import Testimonials from "./Testimonials"

const Home = () => {

  return (

    <>
    <div>
       <Heros />
        <DevelopmentPathway />
        <Achievement />
        <Events />     
        <Testimonials />        
        {/* <BMICalculator /> */}
        <FAQ />
    </div>
      <BackToTop threshold={300} position="bottom-8 right-8" />
    </>
  )
}

export default Home