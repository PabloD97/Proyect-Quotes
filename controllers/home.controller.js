class HomeController {
    // Los parametros se los va psar express
    async index(request, response){
        return response.send({message: 'Hello world!'});
    }
}

module.exports = new HomeController();