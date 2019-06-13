const express = require("express");
const router = express.Router();

//@route    GET api/contacts
//@desc     get all user's contacts
//@access   private
router.get("/", (req, res) => {
  res.send("get all contacts");
});

//@route    POST api/contacts
//@desc     add new contacts
//@access   private
router.post("/", (req, res) => {
  res.send("Add contact");
});

//@route    PUT api/contacts/:id
//@desc     update contact
//@access   private
router.put("/:id", (req, res) => {
  res.send("Update contact");
});

//@route    DELETE api/contacts/:id
//@desc     delete conatct
//@access   private
router.delete("/:id", (req, res) => {
  res.send("Delete conatct");
});

module.exports = router;
