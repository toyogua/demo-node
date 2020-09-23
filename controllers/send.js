let counter = 0;
function send( req, res ){
    var params = req.body;
    if(params != null ){
        counter =  counter + 1;
         return res.status(200).send({
            params: params,
             message: 'Respuesta desde Node',
             status: 200,
             id: counter
        });
    }else{
         return res.status(404).send({
            message: 'Data not found',
             status: 404
        });
    }

}

module.exports = {
    send
}
