import { FAQ, Services } from "@/widgets/index";
import {PopupLanguage} from "@/widgets/index";
import {PopupBurger} from "@/widgets/index";
import {FeedbackForm} from "@/widgets/Forms/index"
import {Greeting} from "@/widgets/index"
import {WhyWe} from '@/widgets/index'
import {Opinions} from "@/widgets/index"


const Main = () => {
        return (
          <div className="">
            <PopupBurger></PopupBurger>
            <PopupLanguage></PopupLanguage>
            <Greeting></Greeting>
            <Services></Services>
            <WhyWe></WhyWe>
            <FAQ></FAQ>
            <Opinions></Opinions>
            <FeedbackForm></FeedbackForm>
          </div>
        );
      }

  export default Main;