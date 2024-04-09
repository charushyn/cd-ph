import { createCardUser } from "./createCardUser"
import { createTaskFromUser } from "./createTaskFromUser"

const sendData = async (values : {name: string, email: string, phone: string, service: string, textarea: string}) => {
    let userID = await createCardUser(values)
    createTaskFromUser(userID, values.textarea, values.service)
    console.log(userID)
}

export {sendData}