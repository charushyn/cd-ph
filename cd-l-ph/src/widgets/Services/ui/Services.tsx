import { Service } from "@/features";

import services from "../api/data";
import { Title } from "@/shared/ui/index";

const Services = () => {
    return(
        <div>
            <div className="h-[70px] flex items-center px-4">
                <Title text="Наші послуги" className=""></Title>
            </div>
            {
                services.map((service) => {
                    return(
                        <Service photoUrl={service.photoUrl} title={service.title} key={service.title} description={service.description}></Service>
                    )
                })
            }
        </div>
    )
}

export default Services;