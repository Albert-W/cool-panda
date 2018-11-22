---
layout: post
title: 如何使用jekyll搭建自己的个人博客
date: 2018-11-21

---

工欲善其事，必行利其器。

为充分利用github page 和 jekyll 的便利，建议先学习jekyll的使用。
推荐一个教学视频——[Jekyll - 静态网站生成器教程](https://www.bilibili.com/video/av25864819/)

然后

```bash
$ git clone https://github.com/Albert-W/cool-panda.git your_site
$ cd your_site
$ bundler update
$ bundler install
$ bundler exec jekyll serve
```
jekyll 启动网络服务器，点击 http://127.0.0.1:4000 就可查看网站。

项目全局配置文件是 _config.yml， 主入口文件是根目录下的index.html, 主页面布局文件是 _layouts/default.html。

整个项目结构如下：
![](/assets/images/jekyll-architecture.jpg)


