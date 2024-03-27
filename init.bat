@echo off
start cmd /k "cd backend & python manage.py runserver 0.0.0.0:8080"
start cmd /k "cd frontend & npm run dev"