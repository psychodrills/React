class ErrorMapping {

    // mapping route to root for not authorized action
    route_to_root(error){
        if (error.response.data.error == "Not Authorized"){
            localStorage.removeItem('accToken')
            window.location.href = '/';
        }
    }
}

export default ErrorMapping;
