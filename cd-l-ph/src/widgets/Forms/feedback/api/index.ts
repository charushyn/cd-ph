import { createCardUser } from "./createCardUser"
import { createTaskFromUser } from "./createTaskFromUser"
import { findUserByEmail } from "./findUserByEmail"

const sendData = async (values: {name: string, email: string, phone: string, service: string, textarea: string, surname: string}) => {
            // try{
            //     let user = await createCardUser(values)
            //     let task = await createTaskFromUser(user.id, values.textarea, values.service, values.name)
            //     return task
            // }
            // catch(error: any | unknown) {
            //     switch(error.message){
            //         case 'user already exist': {
            //             try{
            //             let user = await findUserByEmail(values)
            //             if(user.contacts.length != 0){
            //                 let task = await createTaskFromUser(user.contacts[0].id, values.textarea, values.service, user.contacts[0].name)
            //                 return task
            //             }
            //             }
            //             catch (errorS: any | unknown) {
            //                 throw new Error(errorS.message)
            //             }
            //         }
            //         case 'not allowed': {
            //             throw new Error('Limited access rights, please contact by phone: +48 000 000 000')
            //         }
            //         case 'server error': {
            //             throw new Error('Server Error, please contact by phone: +48 000 000 000')
            //         }
            //         case 'task not created': {
            //             throw new Error('Your data is saved, but we dont get task from you, please contact by phone: +48 000 000 000')
            //         }
            //         case 'unexpected error': {
            //             throw new Error('Unexpected error, please contact by phone: +48 000 000 000')
            //         }
            //     }
            // }
    
}

export {sendData}