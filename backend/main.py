from fastapi import FastAPI, Request
from pydantic import BaseModel
from fastapi.middleware.cors import CORSMiddleware


app = FastAPI()

app.add_middleware(
    CORSMiddleware,
    # Разрешаем запросы со всех источников. Можно указать список допустимых источников.
    allow_origins=["http://localhost:3000"],
    # Разрешаем передавать куки и заголовки авторизации вместе с запросом.
    allow_credentials=True,
    allow_methods=["GET", "POST", "PUT", "DELETE"],
    # Разрешаем все заголовки в запросе.
    allow_headers=["*"],
)


class UserLogin(BaseModel):
    email: str
    password: str


class NewUserRegistration(BaseModel):
    username: str
    email: str
    password: str
    rePassword: str
    role: str


@app.post("/api/user/registration")
async def user_register(request: Request, data: NewUserRegistration):
    new_user_data = await request.json()
    print(new_user_data)
    return {"status": "ok", "message": "Регистрация прошла успешно"}


@app.post("/api/user/login")
async def user_login(request: Request, data: UserLogin):
    user_data = await request.json()
    print(user_data)
    return {"status": "ok", "message": "Регистрация прошла успешно"}
