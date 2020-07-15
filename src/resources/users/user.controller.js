import userService from "./user.service";
import messages from "../../utils/messages";
import {
    encryptPassword,
    comparePassword
} from "../../utils/utility";
import jwt from "../../helpers/jwt";
import {
    devConfig
} from "../../config/env";

export default {

    async signup(req, res) {
        try {
            const encryptedPass = encryptPassword(req.body.password);
            req.body.password = encryptedPass;
            let user = await userService.createUser(req.body);
            return res.status(200).send({
                success: true,
                message: messages.USER_CREATED,
                data: user
            });
        } catch (err) {
            return res.status(500).send({
                success: false,
                message: messages.SERVER_ERROR,
                data: JSON.stringify(err)
            });
        }
    },

    async login(req, res) {
        try {
            let user = await userService.getUserDetailsByEmailId(req.body.emailId, {
                password: 1, firstName:1, lastName:1, emailId:1
            });
            const authenticted = comparePassword(req.body.password, user.password);
            if (!authenticted) {
                return res.status(403).json({
                    success: false,
                    message: messages.UNAUTHORIZED,
                    data: null
                });
            }
            const token = jwt.issue({
                id: user._id
            }, devConfig.SESSION_EXPIRY);

            const data = {
                user: {
                    _id: user._id,
                    emailId: user.emailId,
                    name: user.firstName + ' ' + user.lastName
                },
                token
            };

            return res.status(200).send({
                success: true,
                message: messages.LOGIN_SUCCESSFULLY,
                data
            });

        } catch (err) {
            console.log(err);
            return res.status(500).json({
                success: false,
                message: messages.SERVER_ERROR,
                data: null
            });
        }
    },

    async setCoordinates(req, res) {
        try {
            let user = await userService.setCoordinates(req.user._id,req.body,{x_Co_ordinate:1,y_Co_ordinate:1})
            return res.status(200).send({
                success: true,
                message: messages.SET_COORDINATES,
                data : user
            });

        } catch (err) {
            console.log(err);
            return res.status(500).json({
                success: false,
                message: messages.SERVER_ERROR,
                data: null
            });
        }
    },
}