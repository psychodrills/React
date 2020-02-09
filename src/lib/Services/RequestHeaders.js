// this class will create request headers
// just call "get_header" function to get the header with authentication token

class RequestHeaders {
    constructor(){
        this.hostname = localStorage.getItem('hostname')
        this.auth_token = localStorage.getItem('accToken')
        this.defaultOptions = {
            headers: {Authorization: this.auth_token ? this.auth_token.toString() : '',
            hostname: this.hostname ? this.hostname : ''}
        };
        this.options = {
            ...this.defaultOptions,
        }
    }

    // this will return the header with auth token
    get_header(){
        return this.options
    }
}

export default RequestHeaders
