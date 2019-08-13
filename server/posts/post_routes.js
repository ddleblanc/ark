const express = require("express");
const passport = require("passport");
const asyncHandler = require("express-async-handler");
const userCtrl = require("../users/user_controller");
const postCtrl = require("./post_controller");

const router = express.Router();

// ROUTES

router.route("/")
  .get(asyncHandler(getAllPosts))
router.route("/:_id")
  .get(asyncHandler(getPostById))
  .delete(asyncHandler(deletePostById))

router.route("/:_id/comments").put(asyncHandler(addComment))

router
  .route("/:_id/likes")
  .post(asyncHandler(addLike))
  .put(asyncHandler(removeLike))


// FUNCTIONS

const upload = require("../config/multer").upload;

// Add Post to user
router.post("", (request, response, next) => {

  upload(request, response, function (error) {
    console.log(JSON.parse(request.body.meta));
    if (error) {
      console.log(error);
      return response.redirect("/error");
    }

    response.redirect("/success");
  });
});

async function getPostById(req, res) {
  console.log(req.params._id);
  const _id = req.params._id;
  let post = await postCtrl.getPostById(_id);
  if (post == null) {
    console.log("no post found");
    res.json({ success: false, msg: "No such post" });
  } else {
    console.log("user found");
    res.json({ success: true, msg: "Post found", post: post });
  }
}

async function getAllPosts(req, res) {

  var fileName = "pexels-photo-2076596.jpeg";
  var directory = "https://arkfile.sfo2.cdn.digitaloceanspaces.com/" + fileName;
  res.json({ dir: directory });

  // let posts = await postCtrl.getAllPosts();
  // res.json(posts);
}

async function addComment(req, res) {
  let _id = req.params._id;
  let commentData = req.body.commentData;
  console.log(commentData)
  let comment = await postCtrl.addComment(_id, commentData)
  // .catch(function (err) {
  //   if (err.name == "ValidationError") {
  //     res.status(422).json(err);
  //   } else if (err) {
  //     res.status(500).json(err);
  //   }
  // });
  res.json({ success: true, msg: "Comment added", comment });
}


async function addLike(req, res) {
  console.log("yooo" + req.params._id)
  let _id = req.params._id;
  let userId = req.body.userId;
  let like = await postCtrl.addLike(_id, userId)
  // .catch(function (err) {
  //     if (err.name == "ValidationError") {
  //         res.status(422).json(err);
  //     } else {
  //         res.status(500).json(err);
  //     }
  // });
  res.json({ success: true, msg: "Like added", like });
}

async function removeLike(req, res) {
  let _id = req.params._id;
  let userId = req.body.userId;
  let like = await postCtrl.removeLike(_id, userId)
  // .catch(function (err) {
  //     if (err.name == "ValidationError") {
  //         res.status(422).json(err);
  //     } else {
  //         res.status(500).json(err);
  //     }
  // });
  res.json({ success: true, msg: "Like removed", like });
}

async function deletePostById(req, res) {
  let _id = req.params._id
  await postCtrl.deletePost(_id)
  res.json({ success: true, msg: "Comment deleted" });
}

module.exports = router;
