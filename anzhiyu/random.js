var posts=["2024/11/09/Coding/","2024/11/09/Coding2/","2024/11/09/Coding3/","2024/11/09/Hello-Hexo/","2024/11/14/MarkDown语法/","2024/11/09/hello-world/","2024/11/14/htmlNote/"];function toRandomPost(){
    pjax.loadUrl('/'+posts[Math.floor(Math.random() * posts.length)]);
  };