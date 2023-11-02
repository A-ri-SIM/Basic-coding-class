const express=require('express');
const app=express();
const MongoClient=require('mongodb').MongoClient;
const bodyParser=require('body-parser');
app.use(bodyParser.urlencoded({extended:true}))

// app.listen(8080,function(){
//     console.log('8080에 서버 접속중');
//     // =>기본틀 외우기
//     // =>express 라이브러리 사용 서버 띄우기 기본 셋팅
//     // listen(서버띄울 포트 번호,띄운 후 실행 할 코드)
//     // 실행할때
//     // 터미널에 node 파일명.js    
// });

// 누군가가 /폴더 로 방문을 하면 폴더와 관련된 내용을 띄우기
// app.get('경로');
// app.get('/폴더',function(요청,응답){
//     응답내용.send('안내문');
// });

// app.get('/602',function(요청,응답){
//     응답.send('그냥 이렇게 하는거지')
// })

// 만약에 ca-fe에 접속하면 카페에 접속하셨습니다라고 띄우기


// app.get('/',function(요청,응답){
//     응답.sendFile(__dirname+'/index.html')
// });
// __dirname:현재 파일의 경로
// sendFile():파일을 보낼때 사용하는 함수
// 모듈에서 body-parser설치 확인
// 미설치 시 npm install body-parser 설치
// app.get('/todo',function(요청,응답){
//     응답.sendFile(__dirname+'/todo.html')
// })

// app.post('경로',function(요청,응답){
//     응답내용
// })
// =>전송 후 완료하기
// app.post('/add',function(요청,응답){
//     console.log(요청.body);
//     응답.send('전송완료');
//     console.log(요청.body.title);
// })


MongoClient.connect('mongodb+srv://dkfl6695:dd12345600@cluster0.vgqm3vw.mongodb.net/?retryWrites=true&w=majority',function(에러,client){
    if (에러) return console.log(에러);
    db=client.db('todoapp');
    db.collection('post').insertOne({이름:'심아리',_id:100},function(에러,결과){
        console.log('저장완료')
    })

    app.listen('8080',function(){
        console.log('8080접속중')
    })
})

