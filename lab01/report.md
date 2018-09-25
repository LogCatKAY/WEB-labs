Request		| Type	|	Status
----------------|-------|--------------------------------
|OPTIONS|
http://mail.ru	|	|	400
http://ya.ru	|	|	403
www.rambler.ru	|	|	403
https://www.google.ru	|	|	405
https://github.com/	|	|	404
www.apple.com/	|	|	200
|HEAD|
vk.com	|	|	501
www.apple.com	|	|	200
www.msn.com	|	|	200
|GET|
yandex.ru	|	|	200
google.com	|	|	200
apple.com	|	|	200
|POST|
yandex.ru	|	|	403
google.com	|	|	405
apple.com	|	|	200
----------------------------------------------

---------------------
Work with vk.com APIs
---------------------
Find univer first:
https://api.vk.com/method/database.getUniversities?country_id=1&city_id=1&count=800&access_token=TOKEN&v=5.85

1) GET https://api.vk.com/method/database.getFaculties?university_id=250&access_token=TOKEN&v=5.85
Response: 200 OK
Content-Encoding: gzip
Content-Type: application/json; charset=utf-8
Server: Internet Information Services (nginx)
X-Powered-By: PHP/3.16762
{
    "response": {
        "count": 20,
        "items": [
            {
                "id": 1031,
                "title": "Аэрокосмический факультет"
            },
            {
                "id": 1032,
                "title": "Факультет инженерного бизнеса и менеджмента"
            },
            {
                "id": 103
                "title": "Факультет информатики и систем управления"
            },
            {
                "id": 1034,
                "title": "Факультет машиностроительных технологий"
            },
            {
                "id": 1035,
                "title": "Факультет оптико-электронного приборостроения"
            },
            {
                "id": 1036,
                "title": "Приборостроительный факультет"
            },
            {
                "id": 1037,
                "title": "Радиотехнический факультет"
            },
            {
                "id": 1038,
                "title": "Факультет радиоэлектроники и лазерной техники"
            },
            {
                "id": 1039,
                "title": "Факультет ракетно-космической техники"
            },
            {
                "id": 1040,
                "title": "Факультет робототехники и комплексной автоматизации"
            },
            {
                "id": 1041,
                "title": "Факультет специального машиностроения"
            },
            {
                "id": 1042,
                "title": "Факультет фундаментальных наук"
            },
            {
                "id": 1043,
                "title": "Факультет энергомашиностроения"
            },
            {
                "id": 1044,
                "title": "Кафедра юриспруденции, интеллектуальной собственности и судебной экспертизы"
            },
            {
                "id": 1803,
                "title": "Факультет биомедицинской техники"
            },
            {
                "id": 1804,
                "title": "Факультет социально-гуманитарных наук"
            },
            {
                "id": 56430,
                "title": "Факультет лингвистики"
            },
            {
                "id": 56431,
                "title": "Физкультурно-оздоровительный факультет"
            },
            {
                "id": 2071503,
                "title": "Головной учебно-исследовательский и методический центр (ГУИМЦ)"
            },
            {
                "id": 2183736,
                "title": "Факультет военного обучения (Военный институт)"
            }
        ]
    }
}

2) Аватарка может быть получена следующим способом:
GET https://api.vk.com/method/users.get?fields=photo&access_token=TOKEN&v=5.85
В response будет поле вида:
"photo": "https://pp.userapi.com/QT4Yj0RZwIZ_********5CTTAA9msa7HqmkWlw/********.jpg?ava=1"
Можно выполнить GET запрос по этому полю.
