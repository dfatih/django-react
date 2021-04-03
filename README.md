# django-react
Full Stack Web Application with Django and ReactJs


# SETUP

### (optional) setup and activate Virtual Enviroment

`python3 -m venv venv`

`source venv/bin/activate`

### install requirements

`pip install -r requirements.txt`

### Create Database

`python manage.py migrate`

`python manage.py loaddata orders.json`

`python manage.py loaddata pizzas.json`

`python manage.py loaddata orderitems.json`


### Verify Tests are all working

`python manage.py test`

### Start Backend

`python manage.py runserver`

### Endpoint Documentation:

http://localhost:8000/swagger/
