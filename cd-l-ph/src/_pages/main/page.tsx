import { TestForm } from "@/features/index";
import { FAQ, Services } from "@/widgets/index";
import {PopupLanguage} from "@/widgets/index";
import {PopupBurger} from "@/widgets/index";

const Main = () => {
    return (
      <div className="">
        <PopupBurger></PopupBurger>
        <PopupLanguage></PopupLanguage>
        <Services></Services>
        <FAQ></FAQ>
        <TestForm></TestForm>
      </div>
    );
  }

  export default Main;