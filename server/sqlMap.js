var sqlMap = {
  getUserInfo: "SELECT * FROM userInfo WHERE u_id = ?",
  getArticleList: "SELECT * FROM article WHERE b_user = ? ORDER BY createDate desc",
  getArticle: "SELECT * FROM article WHERE a_id = ?",
  getArticleTag: "SELECT c_id,title from arti_cate NATURAL JOIN category where a_id = ?",
  addArticleTag: "INSERT INTO arti_cate(a_id,c_id) values (?,?)",
  delArticleTag: "DELETE FROM arti_cate WHERE a_id= ?",
  getPassword: "SELECT password FROM user WHERE u_id = ?",
  addArticle: "INSERT INTO article (b_user,title,theme,html,markdown,state) VALUES (?,?,?,?,?,'1')",
  updateArticle: "UPDATE article SET title = ?,markdown=?,html=?,theme=? WHERE a_id = ?",
  addTag: "INSERT INTO category (b_user,title) VALUES (?,?)",
  delTag: "DELETE FROM category WHERE title= ? and b_user=?",
  getTag: "SELECT category.c_id as c_id,title,COUNT(a_id) as count FROM category LEFT JOIN arti_cate ON b_user = '000' and category.c_id=arti_cate.c_id GROUP BY c_id",
  getTagArti: "SELECT * FROM arti_cate NATURAL JOIN article WHERE c_id = ? ORDER BY createDate desc",
  getFile: "SELECT *, year(createDate) as year,month(createDate) as month FROM article WHERE b_user = ? ORDER BY createDate desc",
  test: "SELECT * FROM linuxtest"
}

module.exports = sqlMap
