const base = {
    get() {
        return {
            url : "http://localhost:8080/xueshengyongpincaigou/",
            name: "xueshengyongpincaigou",
            // 退出到首页链接
            indexUrl: 'http://localhost:8080/xueshengyongpincaigou/front/index.html'
        };
    },
    getProjectName(){
        return {
            projectName: "学生用品采购系统"
        } 
    }
}
export default base
