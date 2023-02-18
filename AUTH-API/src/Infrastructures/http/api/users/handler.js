const AddUserCase = require("../../../../Applications/use_case/AddUserUseCase");

class UsersHandler {
   constructor(container) {
      this._container = container;

      this.postUserHandler = this.postUserHandler.bind(this);
   }

   async postUserHandler(request, h) {
      const addUserCase = this._container.getInstance(AddUserCase.name);
      const addUser = await addUserCase.execute(request.payload);

      const response = h.response({
         status: 'success',
         data: {
            addUser,
         },
      });
      response.code(201);
      return response;
   }
}

module.exports = UsersHandler;
