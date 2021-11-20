registration info goes into dbjson
npm install -g json-server
json-server --watch db.json

with registration users are added, all has different token,
after login token is sent to application and we get access to home/teams etc tab.
without login and token u cant access that tabs, we also have logout which deletes the token from application
and access to certain tabs 

about rest of the information there are displayed all the information as it was requested plus i added some additional
tabs

example:
{
  "users": [
    {
      "reg_info": {
        "email": "user@gmail.com",
        "password": "user",
        "confirm_password": "user"
      },
      "token": "fa1hfiawfaf1",
      "id": 1
    }
  ]
}