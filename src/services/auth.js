import Request from './baseRequest';
import {LOGIN} from "../constants/serviceAPI";

export default {
    login: (body) => Request.post(LOGIN, body, null, false)
}