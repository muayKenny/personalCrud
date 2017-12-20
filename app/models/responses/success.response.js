const BaseResponse = require('./base.response')

class SuccessResponse extends BaseResponse {

    constructor(err) {
        super()
        this.isSuccessful = true
        this.alert.type = 'success'
    }
}

module.exports = SuccessResponse