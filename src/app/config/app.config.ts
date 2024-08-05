import { environment } from "../../environments/environment.development";

export class Config {
    static hostUrl = environment.host;
    private static baseUrl = Config.hostUrl + '/api/TCApp';
    
    // All API response will be transformed. Please checkout HttpClientConfig.transformResponseBody()
    static api = {
        Login: `${Config.baseUrl}/User/Login`,
        Logout: `${Config.baseUrl}/User/Logout`
    };    
}


