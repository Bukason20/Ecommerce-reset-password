import styles from "./resetPasswordModal.module.css"
import Check from "../images/check.png"


function ResetPasswordModal() {
    return (
        <div className = {styles.container}>
            <img src= {Check} alt=""/>
        </div>
    )
}

export default ResetPasswordModal
