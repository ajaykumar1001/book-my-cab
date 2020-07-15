
import messages from '../utils/messages';
import privilegeModel from '../utils/privilege.model';

export const permission = isAllowed => async (req, res, next) => {
  await privilegeModel.find({
    roles: {$in : [req.user.role]}
  }, ).exec((err, result) => {
    if (result.length !== 0) {
      let flag = false;
      isAllowed.forEach(element => {
        result.some(item => {
          if (item.name == element)
            flag = true;
        });
      });
      if (flag) {
        return next();
      }
      return res.status(403).json({
        success: false,
        message: messages.NOT_HAVING_ACCESS,
        data: null
      });
    }
    return res.status(403).json({
      success: false,
      message: messages.NOT_HAVING_ACCESS,
      data: null
    });
  });
};
