var sqlMap = {
  getUserInfo: "SELECT * FROM UserInfo WHERE u_id = ?",
  getArticleList: "SELECT * FROM article WHERE b_user = ?",
  getArticle: "SELECT * FROM article WHERE a_id = ?",
  getPassword: "SELECT password,role FROM User WHERE u_id = ?",
  createArticle: "INSERT INTO article (b_user,title,theme,content,state) VALUES (?,?,?,?,'1')",
  getTag: "SELECT c_id,title,count(a_id) as count FROM arti_cate NATURAL JOIN category WHERE b_user = ? GROUP BY c_id",
  getTagArti: "SELECT * FROM arti_cate NATURAL JOIN article WHERE c_id = ?",
  getFile: "SELECT *, year(createDate) as year,month(createDate) as month FROM article WHERE b_user = ? ORDER BY year desc ,month desc",
  test: "SELECT * FROM linuxtest"
}

module.exports = sqlMap
