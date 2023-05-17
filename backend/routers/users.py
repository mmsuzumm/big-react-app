from fastapi import APIRouter, Request
from pydantic import BaseModel

router = APIRouter()


class UserLogin(BaseModel):
    email: str
    password: str


class NewUserRegistration(BaseModel):
    username: str
    email: str
    password: str
    rePassword: str
    role: str


@router.post("/api/user/registration")
async def user_register(request: Request, data: NewUserRegistration):
    new_user_data = await request.json()
    print(new_user_data)
    return {"status": "ok", "message": "Регистрация прошла успешно"}


@router.post("/api/user/login")
async def user_login(request: Request, data: UserLogin):
    user_data = await request.json()
    print(user_data)
    return {"status": "ok", "message": "Вы залогинены"}
