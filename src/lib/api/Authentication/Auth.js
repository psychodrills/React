import Service from "../../Services/Service";
import ErrorMapping from "../../Services/ErrorMapping";
import ToastNotification from "../../../components/Toasts/ToastNotification";

var toast = new ToastNotification()
class UserAuthentication {
  constructor(){
    this.auth_token = localStorage.getItem('accToken')
    this.service = new Service()
    this.error = new ErrorMapping()

  }

  // login action
  login(credentials){
      return this.service.post("users/login", credentials, this.options)
          .then(function (response) {
              if (response.data.request_status){
                  localStorage.setItem('accToken', response.data.auth_token)
                  toast.simple_toast(response.data.request_message);
                  return response
              } else {
                  toast.simple_toast(response.data.request_message);
                  return response
              }
          })
  }

  // sign out the session(clear localstorage)
  signout(){
    localStorage.removeItem('accToken')
  }
}

export default UserAuthentication
