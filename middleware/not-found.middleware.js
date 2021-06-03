module.exports = function(request, response, next){
    return response.status(400).send({message: 'Page not found!'});
}

