import { createCardUser } from "./createCardUser"
import { createTaskFromUser } from "./createTaskFromUser"

const sendData = async (values : {name: string, email: string, phone: string}) => {
    let userID = createCardUser(values)
    createTaskFromUser(userID)
}

export {sendData}