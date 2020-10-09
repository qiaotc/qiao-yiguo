const gulp = require("gulp");

const htmlmin = require("gulp-htmlmin");
//静态文件
gulp.task("copy-html", function(){
  return gulp.src("html/*.html")
  .pipe(
    htmlmin({
      removeEmptyAttibutes: true, // 移出所有空属性
      collapseWhitespace: true, // 压缩 html
    })
  )
  .pipe(gulp.dest("dist/html"))
  .pipe(connect.reload());
})

gulp.task("images", function(){
  return gulp.src("imges/*.{jpg,png}")
  .pipe(gulp.dest("dist/imges"))
  .pipe(connect.reload());
})

gulp.task("scripts", function(){
  return gulp.src(["JavaScript/*.js", "!gulpfile.js"])
  .pipe(gulp.dest("dist/js"))
  .pipe(connect.reload());
})

gulp.task("data", function(){
  return gulp.src(["json/*.json", "!package.json"])
  .pipe(gulp.dest("dist/json"))
  .pipe(connect.reload());
})


//静态资源，希望在运行之前，可以先去执行一次，生成到我们的目录文件夹里
gulp.task("build", ["copy-html", "images", "scripts", "data"], function(){
  console.log("项目建立成功");
})

const sass = require("gulp-sass");
const minifycss = require("gulp-minify-css");
const rename = require("gulp-rename");
//如果涉及到重命名，我们要一个任务一个文件

//主页index文件的复制
gulp.task("index-sass", function(){
  return gulp.src("css/index.scss")
  .pipe(sass())
  .pipe(gulp.dest("dist/css"))
  .pipe(minifycss())
  .pipe(rename("index.min.css"))
  .pipe(gulp.dest("dist/css"))
  .pipe(connect.reload());
})
gulp.task("registered-sass", function(){
  return gulp.src("css/registered.scss")
  .pipe(sass())
  .pipe(gulp.dest("dist/css"))
  .pipe(minifycss())
  .pipe(rename("registered.min.css"))
  .pipe(gulp.dest("dist/css"))
  .pipe(connect.reload());
})
gulp.task("login-sass", function(){
  return gulp.src("css/login.scss")
  .pipe(sass())
  .pipe(gulp.dest("dist/css"))
  .pipe(minifycss())
  .pipe(rename("login.min.css"))
  .pipe(gulp.dest("dist/css"))
  .pipe(connect.reload());
})
gulp.task("details-sass", function(){
  return gulp.src("css/details.scss")
  .pipe(sass())
  .pipe(gulp.dest("dist/css"))
  .pipe(minifycss())
  .pipe(rename("details.min.css"))
  .pipe(gulp.dest("dist/css"))
  .pipe(connect.reload());
})
gulp.task("shopping-sass", function(){
  return gulp.src("css/shopping.scss")
  .pipe(sass())
  .pipe(gulp.dest("dist/css"))
  .pipe(minifycss())
  .pipe(rename("shopping.min.css"))
  .pipe(gulp.dest("dist/css"))
  .pipe(connect.reload());
})



//监听
gulp.task("watch", function(){
  gulp.watch("html/*.html", ['copy-html']);
  gulp.watch("imges/*.{jpg,png}", ['images']);
  gulp.watch(["JavaScript/*.js", "!gulpfile.js"], ['scripts']);
  gulp.watch(["json/*.json", "!package.json"], ['data']);
  //多个scss逐个添加
  gulp.watch("css/index.scss", ['index-sass']);
  gulp.watch("css/login.scss", ['login-sass']);
   gulp.watch("css/registered.scss", ['registered-sass']);
   gulp.watch("css/shopping.scss", ['shopping-sass']);
   gulp.watch("css/details.scss", ['details-sass']);
})


//启动服务
const connect = require("gulp-connect");
gulp.task("server", function(){
  connect.server({
    root: "dist",
    port: 8888,
    livereload: true
  })
})


gulp.task("default", ["watch", "server"]);
