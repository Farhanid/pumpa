import BMICalculator from "../../components/BMI/BMICalculator"
import BackToTop from "../../components/Reusable/BackToTop"
import FAQ from "../../components/Reusable/FAQ"
import DevelopmentPathway from "../Development/DevelopmentPathway"
import Programs from "../Program/Programs"
import Events from "./Events"
import Testimonials from "./Testimonials"



const Home = () => {

  return (

    <>

    <div>
        <BMICalculator />
        <DevelopmentPathway />
        <Events />
        <Testimonials />
        <FAQ />
    </div>
      <BackToTop threshold={300} position="bottom-8 right-8" />

    </>
  )
}

export default Home