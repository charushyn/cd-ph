import { createCardUser } from "./createCardUser"
import { createTaskFromUser } from "./createTaskFromUser"
import { getInfoUser } from "./getInfoUser"

const sendData = async (values: {name: string, email: string, phone: string, service: string, textarea: string}) => {
    // const sendData = async (values: {name: string}) => {
            let responseCreateUser = await createCardUser(values)
            let infoAboutUser = await getInfoUser({userID: responseCreateUser.id})
            let responseCreateTask = await createTaskFromUser(infoAboutUser.contact.id, values.textarea, values.service, infoAboutUser.contact.name)

            return responseCreateTask
    
}

export {sendData}