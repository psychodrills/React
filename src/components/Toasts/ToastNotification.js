// toast.POSITION.TOP_LEFT, toast.POSITION.TOP_RIGHT, toast.POSITION.TOP_CENTER
// toast.POSITION.BOTTOM_LEFT,toast.POSITION.BOTTOM_RIGHT, toast.POSITION.BOTTOM_CENTER

import toast from 'toasted-notes'
import 'toasted-notes/src/styles.css';

class ToastNotification {

    simple_toast(message){
        toast.notify(message,{

        })
    }
}

export default ToastNotification;
