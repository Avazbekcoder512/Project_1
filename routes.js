const { getAllUser, getAdminPage, deleteUser } = require("./controller/admin")
const { addNews, updatedNews, deletedNews, getAllNews, addNewsPage, LatestNews, ErrorPage, getOneNews, localNews, globalNews, sportNews, texnologiyaNews, getUpdatedNews, getAuthorNews, BadRequest, ServerError } = require("./controller/news")
const { register, login, getOneUser, registerPage, loginPage, Contact, logOut, userProfile, updateProfilePage, updateProfile } = require("./controller/user")
const { jwtAccessMiddlewarre } = require("./middleware/jwt-access.middleware")
const { roleAccessMiddleware } = require("./middleware/role-access.midlleware")

const router = require("express").Router()

// Get request
router
.get("/", getAllNews)
.get("/news/:id", getOneNews)
.get("/register", registerPage)
.get("/login", loginPage)
.get("/logout", logOut)
.get("/add", addNewsPage)
.get("/users", jwtAccessMiddlewarre, roleAccessMiddleware(["ADMIN"]), getAllUser)
.get("/oneuser/:id", jwtAccessMiddlewarre, getOneUser)
.get("/profile/:id", userProfile)
.get("/updateprofile/:id", updateProfilePage)
.get("/contact", Contact)
.get("/latestnews", LatestNews)
.get("/local", localNews)
.get("/global", globalNews)
.get("/sport", sportNews)
.get("/texnologiya", texnologiyaNews)
.get("/updatenews/:id", getUpdatedNews)
.get("/authornews/:id", getAuthorNews)
.get("/400", BadRequest)
.get("/404", ErrorPage)
.get("/500", ServerError)

// Post request
router
.post("/register", register)
.post("/add", addNews)
.post("/login", login)
.post("/updatenews/:id", jwtAccessMiddlewarre, updatedNews)
.post("/deletenews/:id", jwtAccessMiddlewarre, deletedNews)
.post("/updateprofile/:id", jwtAccessMiddlewarre, updateProfile)
.post("/deleteuser/:id", jwtAccessMiddlewarre, roleAccessMiddleware(["ADMIN"]), deleteUser)

.use((req, res, next) => {
    res.status(400).render("404 page")
  });
module.exports = router;