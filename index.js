const {post} = require('axios');

exports.CryptoApi = class {
    constructor({token} = {}) {
        this.token = token;
    }
    callApi({data, token = this.token, method} = {}) {
        if(!token) throw new Error("You didn't pass the required <token> parameter")
        return post("https://vk-crypto.space/api/" + method, {token, ...data}).then(({data}) => data)
    }

    getUserCoins({ user_id, method = 'getUserCoins'} = {}) {
        if(!user_id) throw new Error("You didn't pass the required <user_id> parameter")
        return this.callApi({ data: {user_id}, method });
    }

    getTransfers({ user_id, method = 'getTransfers' } = {}) {
        if(!user_id) throw new Error("You didn't pass the required <user_id> parameter")
        return this.callApi({ data: {user_id}, method })
    }

    transfer({ recipient_id, sender_id, amount, method = 'transfer' } = {}) {
        if(!recipient_id) {
            throw new Error("You didn't pass the required <recipient_id> parameter")
        } else if(!sender_id) {
            throw new Error("You didn't pass the required <sender_id> parameter")
        } else if(!amount) {
            throw new Error("You didn't pass the required <amount> parameter")
        }
        return this.callApi({ data: {recipient_id, sender_id, amount}, method })
    }

    connectServer({ url, user_id, method = 'connectServer'} = {}) {
        if(!url) {
            throw new Error("You didn't pass the required <url> parameter")
        } else if(!user_id) {
            throw new Error("You didn't pass the required <user_id> parameter")
        }
        return this.callApi({ data: {url, user_id}, method })
    }
}