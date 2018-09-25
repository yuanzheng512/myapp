let url = "";
if (process.env.NODE_ENV == "development") {
    url = "http://www.baidu.com";
} else {
    url = "http://sina.com";
}


const host = url;
export default host;