// подключение express
var express = require("express");
// создаем объект приложения
var app = express();

var bodyParser = require("body-parser");
var fs = require('fs');
var jsonParser = bodyParser.json();

app.use(express.static(__dirname + "/public"));

// определяем обработчик для маршрута "/"
app.get("/", function(request, response){
     
    // отправляем ответ в виде файла
    fs.readFile('./public/index.html', function(error, data){
                 
        if(error){
            response.statusCode = 404;
            response.end("Ресурс не найден!");
        }   
        else{
            response.statusCode = 200;
            response.end(data);
        }
        return;
    })
});

app.get("/post", function(request, response){
     
    // отправляем ответ в виде файла
    fs.readFile('./public/post.html', function(error, data){
                 
        if(error){
            response.statusCode = 404;
            response.end("Ресурс не найден!");
        }   
        else{
            response.statusCode = 200;
            response.end(data);
        }
        return;
    })
});

app.get("/patch", function(request, response){
     
    // отправляем ответ в виде файла
    fs.readFile('./public/patch.html', function(error, data){
                 
        if(error){
            response.statusCode = 404;
            response.end("Ресурс не найден!");
        }   
        else{
            response.statusCode = 200;
            response.end(data);
        }
        return;
    })
});

app.get("/crud/users", function(request, response){
    var content = fs.readFileSync("users.json", "utf8");
    var users = JSON.parse(content);
    response.send(users);
});

app.post("/crud/users", jsonParser, function (request, response) {
     
    if(!request.body) return response.sendStatus(400);
     
    var userName = request.body.name;
    var userAge = request.body.age;
    var user = {name: userName, age: userAge};
     
    var data = fs.readFileSync("users.json", "utf8");
    var users = JSON.parse(data);
     
    // находим максимальный id
    var id = Math.max.apply(Math,users.map(function(o){return o.id;}))
    // увеличиваем его на единицу
    if(!Number.isFinite(id)) {
        user.id = 1;            //если до этого пользователей не было
    }else {
        user.id = id+1;
    }
    // добавляем пользователя в массив
    users.push(user);
    var data = JSON.stringify(users);
    // перезаписываем файл с новыми данными
    fs.writeFileSync("users.json", data);
    response.send(user);
});

app.patch("/crud/users/:id", jsonParser, function(request, response){
      
    if(!request.body) return response.sendStatus(400);
     
    var userId = request.params.id;
    var userName = request.body.name;
    var userAge = request.body.age;
     
    var data = fs.readFileSync("users.json", "utf8");
    var users = JSON.parse(data);
    var user;
    for(var i=0; i<users.length; i++){
        if(users[i].id==userId){
            user = users[i];
            break;
        }
    }
    if(user){
        user.age = userAge;
        user.name = userName;
        var data = JSON.stringify(users);
        fs.writeFileSync("users.json", data);
        response.send(user);
    }
    else{
        response.status(404).send(user);
    }
});


app.delete("/crud/users/:id", function(requset, response){
      
    var id = requset.params.id;
    var data = fs.readFileSync("users.json", "utf8");
    var users = JSON.parse(data);
    var index = -1;
    // находим индекс пользователя в массиве
    for(var i=0; i<users.length; i++){
        if(users[i].id==id){
            index=i;
            break;
        }
    }
    if(index > -1){
        // удаляем пользователя из массива по индексу
        var user = users.splice(index, 1)[0];
        var data = JSON.stringify(users);
        fs.writeFileSync("users.json", data);
        response.send(user);
    }
    else{
        response.status(404).send();
    }
});


// начинаем прослушивать подключения на 8081 порту
var server = app.listen(8081, function() {
    var host = server.address().address;
    var port = server.address().port;
    console.log('Server starts at http://%s:%s', host, port);
});