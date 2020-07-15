import cabService from "./cab.service";
import messages from "../../utils/messages";

export default {

    async getMyNearByCabs(req, res) {
        try {
            let nearByCabs = await cabService.getNearByCabs(req.user.x_Co_ordinate, req.user.y_Co_ordinate);
            return res.status(200).send({
                success: true,
                message: messages.GET_CABS,
                data: nearByCabs
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