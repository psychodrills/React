import Service from "../../Services/Service";
import ErrorMapping from "../../Services/ErrorMapping";
import RequestHeaders from "../../Services/RequestHeaders";
import ToastNotification from "../../../components/Toasts/ToastNotification";

var toast = new ToastNotification()
class School {
  constructor() {
    this.service = new Service()
    this.error = new ErrorMapping()
    this.header = new RequestHeaders()
  }


  create_school_group(data){
    var data_hash = {school_group: data}
    if (this.error.session_status()){
      return this.service.post("school_groups", data_hash, this.header.get_header()).then(function (response) {
        if (response.data.request_status){
          toast.simple_toast(response.data.request_message);
          return response
        } else {
          toast.simple_toast(response.data.request_message);
        }
      }).catch(error => {
        this.error.route_to_root(error)
      })
    }
  }

  fetch_school_groups(){
    if (this.error.session_status()){
      return this.service.get("school_groups", this.header.get_header()).then(function (response) {
        if (response.data.request_status){
          return response
        }
      }).catch(error => {
        this.error.route_to_root(error)
      })
    }
  }
}

export default School
