import { ToastContainer } from "react-toastify";

const NotificationBlock = () => {
    return(
        <ToastContainer
        position="bottom-center"
        className="top-10 mt-4 ml-4 mr-4"
        closeOnClick
        />
    )
}

export default NotificationBlock;