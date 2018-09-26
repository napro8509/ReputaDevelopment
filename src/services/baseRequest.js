import superAgentPromise from 'superagent-promise';
import superAgent from 'superagent';

import {getToken} from '../utils/token';
import {TIMEOUT} from "../constants/request";

const agent = superAgentPromise(superAgent, global.Promise);

export default {
    get: (url, callback, requireToken = true) => {
        let request = agent.get(url)

        if (requireToken) {
            let token = getToken();

            request.set('Authorization', 'Bearer ' + token);
        }

        return request.timeout(TIMEOUT)
            .then(res => {
                return res.body;
            }, err => {
                return typeof callback === 'function' ? callback(err) : null
            })
    },
    post: (url, params, callback, requireToken = true) => {
        let request = agent.post(url).send(params)

        if (requireToken) {
            let token = getToken();

            request.set('Authorization', 'Bearer ' + token);
        }

        return request.timeout(TIMEOUT)
            .then(res => {
                return res.body;
            }, err => {
                return typeof callback === 'function' ? callback(err) : null
            })
    }
}