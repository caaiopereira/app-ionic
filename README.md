# Resolução das atividades
	    Passo 01 - Criar a pagina sobre - (ionic generate page sobre) 
	    Passo 02 - Cirar uma pasta page - Por questões de organização
	    Passo 03 - Arrastar a pagina contato, home e sobre para dentro da pasta page	
	    Passo 04 - Dentro do projeto instalar o json-server (npm install -g json-server)
	    Passo 05 - Criar dentro da pasta assets o arquivo db.json e configurar com os dados em formato json
	    Passo 06 - Iniciar a Web Api - (comando json-server --watch src/assets/db.json)
	    Passo 07 - Importar o modulo HttpClientModule no arquivo app.module.ts
	    Passo 08 - Utilizar o HttpCliente no  arquivo home.page.ts para pegar os dados da Web API
	    Passo 09 - Utilizar a diretiva *ngFor para criar a lista de compras de forma dinâmica
	    
	    Aula 04
	    1 - Desenvolver um serviço de banco de dados
		Esse serviço deverá permitir que o APP possa consultar, cadastrar e excluir produtos.
		
	    2 - Configurar o botão excluir utilizando o serviço que foi criado para deletar dados na Web API
	    
	    3 - Configurar o formulário (Alert) utilizado pelo fab-button (Botão de Cadastrar) para cadastrar
		dados na Web API.
      
# Comandos
      Ambiente de desenvolvimento: 
			-> Vscode
			-> NodeJs

		Instalação do Ionic: 
			-> npm install -g @ionic/cli

		Criação do projeto Ionic: 
			-> ionic start nom_projeto modelo

		Modelos básico do Ionic: 
			-> Blank
			-> Tabs
			-> Sidemenu
		
		Iniciar o projeto do Ionic
			-> Entrar na pasta do projeto:  cd pasta_projeto
			-> Executar o comando:  ionic serve 
    
    	Comando para criar pagina
			-> ionic generate page sobre
      
    	Comando para gerar serviço 
      		-> ionic generate service nome_servico
