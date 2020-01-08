class ErrorMapping {

    // mapping route to root for not authorized action
    route_to_root(error){
        if (error.response.data.error == "Not Authorized"){
            localStorage.removeItem('accToken')
            window.location.href = '/login';
        }
    }

    // check session status
    session_status(){
      if (localStorage.getItem('accToken')){
        return true
      } else {
        window.location = '/login'
        return false
      }
    }
}

export default ErrorMapping;
