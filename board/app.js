const express=require('express');
const handlebars=require('express-handlebars');
const app=express();

app.engine(
    "handlebars",handlebars.engine()
)
// =>템플릿 엔진으로 핸들바를 등록하는 명령식

app.set("view engine","handlebars");
// =>웹페이지 로드 시 사용할 템플릿 엔진 설정(명시 영역)

app.set("views",__dirname+"/views");
// =>브라우저에 보여지는 영역의 폴더(디렉토리)를 views로 설정함

app.get("/",(req,res)=>{
    res.render("home",{title:"테스트 게시판",massage:"만나서 반갑습니다"});
    // home이라는 handlebars템플릿의 파일명에 접속하면
    // =>views가 기본 경로
    // =>views/home.handlebars 파일에 데이터 랜더링함
    // =>title:"안녕하세요",massage:"만나서 반갑습니다" 객체 삽입됨
})
app.get("/write",(req,res)=>{
    res.render("write",{title:"테스트 게시판"})
})
app.get("/detail/:id",(req,res)=>{
    res.render("detail",{title:"테스트 게시판"})
})

app.listen(3000,(req,res)=>{
    console.log("3000번에 접속중임");
})