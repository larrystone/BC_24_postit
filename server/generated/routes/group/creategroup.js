"use strict";

module.exports = function (req, res) {
  // fetch the user id
  var groupName = req.body.groupname;

  res.status(200).json({ message: "Creating group " + groupName });
};
//# sourceMappingURL=creategroup.js.map