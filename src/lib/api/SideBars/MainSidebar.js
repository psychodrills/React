import Service from "../../Services/Service";
import RequestHeaders from "../../Services/RequestHeaders";
import ErrorMapping from "../../Services/ErrorMapping";

class MainSidebar {
  constructor() {
    this.service = new Service()
    this.header = new RequestHeaders()
    this.error = new ErrorMapping()
  }


  // fetch action tags and their children (main menu and sub actions)
  fetch_action_tags_with_submenus(){
    return this.service.get("action_tags", this.header.get_header()).then(function (response) {
      return response
    }).catch(error => {
      this.error.route_to_root(error)
    })
  }
}

export default MainSidebar
