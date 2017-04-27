const express = require('express')

module.exports = function(server) {

  // API Routes
  const router = express.Router()
  server.use('/api', router)

  // rotas da API
  /*
  router.route('/teste').get(function(req, res, next){
	res.send('Funcinou')
  }) */
  
  
  const cadastroClienteService = require('../api/cadastroCliente/cadastroClienteService')
  cadastroClienteService.register(router, '/cadastroClientes')

  
  const cadastroDocumentoService = require('../api/cadastroDocumento/cadastroDocumentoService')
  cadastroDocumentoService.register(router, '/cadastroDocumentos')
  
  const cadastroRequerimentoService = require('../api/cadastroRequerimento/cadastroRequerimentoService')
  cadastroRequerimentoService.register(router, '/cadastroRequerimentos')
  
  const cadastroServicoService = require('../api/cadastroServico/cadastroServicoService')
  cadastroServicoService.register(router, '/cadastroServicos')
/*
  const billingSummaryService = require('../api/billingSummary/billingSummaryService')
  router.route('/billingSummary').get(billingSummaryService.getSummary)*/
}
