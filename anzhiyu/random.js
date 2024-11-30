var posts=["11/09/93e553a599a1/","11/09/51e8ef0867d0/","11/09/6e2c5839bc02/","11/09/ebdfca3e3520/","11/09/4984c732e544/","11/14/d86bfd4a2197/","11/14/1e31d8e29434/","11/27/17ab213a0fb5/","11/27/162764bc221d/","11/27/b09837e61875/"];function toRandomPost(){
    pjax.loadUrl('/'+posts[Math.floor(Math.random() * posts.length)]);
  };