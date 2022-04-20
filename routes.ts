import { UserUseCase } from "./useCase/UserUseCase";

export const AppRoutes = [
  {
    path: "/users",
    method: "post",
    action: UserUseCase.create,
  },
  {
    path: "/users/:id",
    method: "put",
    action: UserUseCase.update,
  },
  {
    path: "/users",
    method: "get",
    action: UserUseCase.findAll,
  },
  {
    path: "/users/:id",
    method: "get",
    action: UserUseCase.findOne,
  },
  {
    path: "/users/:id",
    method: "delete",
    action: UserUseCase.delete,
  }
];
