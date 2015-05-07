angular.module('starter.controllers', ['ionic'])
 
.controller('DashCtrl', ['$http', '$scope', '$rootScope', '$state', function($http, $scope, $rootScope, $state) { 
	      
}])

.controller('MenuCtrl', function($scope, $ionicSideMenuDelegate, $ionicModal) {
    
 })

.controller('ChatsCtrl', function($scope, $http) {

   
})

.controller('ChatDetailCtrl', function($scope, $stateParams, Chats) {
  //$scope.chat = Chats.get($stateParams.chatId);
   
    $scope.groups = [
    {
      name: 'ARICANDUVA',
      items: [{
      	endereco: 'Rua Atucuri, 699 , Aricanduva, CEP 03411-000',
      	servicos: 'Intermediação de Mão de Obra, Emissão de Carteira de Trabalho, Habilitação de Seguro Desemprego, Curso de Qualificação Profissional e Social, PACET, MEI',
      	horarios: 'das 8h00 às 17h00 de segunda a sexta.'
      }]
    },
    {
      name: 'Brasilândia',
      items: [{
      	endereco: 'Av. João Marcelino Branco, 95 , Brasilândia, CEP 02610-000',
      	servicos: 'Intermediação de Mão de Obra, Emissão de Carteira de Trabalho, Habilitação de Seguro Desemprego, Curso de Qualificação Profissional e Social, PACET, MEI',
      	horarios: 'das 8h00 às 17h00 de segunda a sexta.'
      }]
    },
    {
      name: 'Butantã',
      items: [{
      	endereco: 'Rua Doutor Ulpiano Da Costa Manso, 201, Butantã, CEP 05538-000',
      	servicos: 'Intermediação de Mão de Obra, Emissão de Carteira de Trabalho, Habilitação de Seguro Desemprego, Curso de Qualificação Profissional e Social, PACET, MEI',
      	horarios: 'das 8h00 às 17h00 de segunda a sexta.'
      }]
    },
    {
      name: 'Campo Limpo',
      items: [{
      	endereco: 'Rua Nossa Senhora Do Bom Conselho, 59, Campo Limpo, CEP 05763-470',
      	servicos: 'Intermediação de Mão de Obra, Emissão de Carteira de Trabalho, Habilitação de Seguro Desemprego, Curso de Qualificação Profissional e Social, PACET, MEI',
      	horarios: 'das 8h00 às 17h00 de segunda a sexta.'
      }]
    },
    {
      name: 'Capela do Socorro',
      items: [{
      	endereco: 'Rua Cassiano Dos Santos, 499, Capela do Socorro, CEP 04827-110',
      	servicos: 'Intermediação de Mão de Obra, Emissão de Carteira de Trabalho, Habilitação de Seguro Desemprego, Curso de Qualificação Profissional e Social, PACET, MEI',
      	horarios: 'das 8h00 às 17h00 de segunda a sexta.'
      }]
    },
    {
      name: 'Casa Verde',
      items: [{
      	endereco: 'Av. Ordem E Progresso, 1001, Casa Verde, CEP 02518-130',
      	servicos: 'Intermediação de Mão de Obra, Emissão de Carteira de Trabalho, Habilitação de Seguro Desemprego, Curso de Qualificação Profissional e Social, PACET, MEI',
      	horarios: 'das 8h00 às 17h00 de segunda a sexta.'
      }]
    },
    {
      name: 'Cidade Ademar',
      items: [{
      	endereco: 'Av. Yervant Kissajikian, 416, Cidade Ademar, CEP 04657-000',
      	servicos: 'Intermediação de Mão de Obra, Emissão de Carteira de Trabalho, Habilitação de Seguro Desemprego, Curso de Qualificação Profissional e Social, PACET, MEI',
      	horarios: 'das 8h00 às 17h00 de segunda a sexta.'
      }]
    },
    {
      name: 'Cidade Tiradentes',
      items: [{
      	endereco: 'Rua Milagre Dos Peixes, 357, Cidade Tiradentes, CEP 08474-120',
      	servicos: 'Intermediação de Mão de Obra, Emissão de Carteira de Trabalho, Habilitação de Seguro Desemprego, Curso de Qualificação Profissional e Social, PACET, MEI',
      	horarios: 'das 8h00 às 17h00 de segunda a sexta.'
      }]
    },
    {
      name: 'Ermelino Matarazzo',
      items: [{
      	endereco: 'Av. São Miguel, 5550 , Ermelino Matarazzo, CEP 03871-100',
      	servicos: 'Intermediação de Mão de Obra, Emissão de Carteira de Trabalho, Habilitação de Seguro Desemprego, Curso de Qualificação Profissional e Social, PACET, MEI',
      	horarios: 'das 8h00 às 17h00 de segunda a sexta.'
      }]
    },
     {
      name: 'Interlagos',
      items: [{
      	endereco: 'Av. Interlagos, 6122, Interlagos, CEP 04777-000',
      	servicos: 'Intermediação de Mão de Obra, Emissão de Carteira de Trabalho, Habilitação de Seguro Desemprego, Curso de Qualificação Profissional e Social, PACET, MEI e Orientação para o Trabalho e Seleção.',
      	horarios: 'das 8h00 às 17h00 de segunda a sexta.'
      }]
    },
     {
      name: 'Ipiranga',
      items: [{
      	endereco: 'Rua Lino Coutinho, 444, Ipiranga, CEP 04207-000',
      	servicos: 'Intermediação de Mão de Obra, Emissão de Carteira de Trabalho, Habilitação de Seguro Desemprego, Curso de Qualificação Profissional e Social, PACET, MEI',
      	horarios: 'das 8h00 às 17h00 de segunda a sexta.'
      }]
    },
    {
      name: 'Itaim Paulista',
      items: [{
      	endereco: 'Av. Marechal Tito, 3012, Itaim Paulista, CEP 08115-000',
      	servicos: 'Intermediação de Mão de Obra, Emissão de Carteira de Trabalho, Habilitação de Seguro Desemprego, Curso de Qualificação Profissional e Social, PACET, MEI e Orientação para o Trabalho e Seleção.',
      	horarios: 'das 8h00 às 17h00 de segunda a sexta.'
      }]
    },
    {
      name: 'Itaquera',
      items: [{
      	endereco: 'Rua Augusto Carlos Bauman, 851, Itaquera, CEP 08210-590',
      	servicos: 'Intermediação de Mão de Obra, Emissão de Carteira de Trabalho, Habilitação de Seguro Desemprego, Curso de Qualificação Profissional e Social, PACET, MEI e Orientação para o Trabalho e Seleção.',
      	horarios: 'das 8h00 às 17h00 de segunda a sexta.'
      }]
    },
    {
      name: 'Jabaquara',
      items: [{
      	endereco: 'Av. Eng. Armando De Arruda Pereira, 2314, Jabaquara, CEP 04309-011',
      	servicos: 'Intermediação de Mão de Obra, Emissão de Carteira de Trabalho, Habilitação de Seguro Desemprego, Curso de Qualificação Profissional e Social, PACET, MEI e Orientação para o Trabalho e Seleção.',
      	horarios: 'das 8h00 às 17h00 de segunda a sexta.'
      }]
    },
    {
      name: 'Jaçanã',
      items: [{
      	endereco: 'Av. Luís Stamatis, 300, Jaçanã, CEP 02260-000',
      	servicos: 'Intermediação de Mão de Obra, Emissão de Carteira de Trabalho, Habilitação de Seguro Desemprego, Curso de Qualificação Profissional e Social, PACET, MEI',
      	horarios: 'das 8h00 às 17h00 de segunda a sexta.'
      }]
    },
        {
      name: 'Lapa II',
      items: [{
      	endereco: 'Rua Afonso Sardinha, 201, Lapa, CEP 05076-000',
      	servicos: 'Intermediação de Mão de Obra, Emissão de Carteira de Trabalho, Habilitação de Seguro Desemprego, Curso de Qualificação Profissional e Social, PACET, MEI.',
      	horarios: 'das 8h00 às 17h00 de segunda a sexta.'
      }]
    },
    {
      name: 'Lapa III',
      items: [{
      	endereco: 'Rua Guaicurus, 1000, Lapa, CEP 05033-001',
      	servicos: 'Intermediação de Mão de Obra, Emissão de Carteira de Trabalho, Habilitação de Seguro Desemprego, Curso de Qualificação Profissional e Social, PACET, MEI.',
      	horarios: 'das 8h00 às 17h00 de segunda a sexta.'
      }]
    },
    {
      name: 'Luz',
      items: [{
      	endereco: 'Av. Prestes Maia. 913/919, Luz, CEP 01031-001',
      	servicos: 'Intermediação de Mão de Obra, Emissão de Carteira de Trabalho, Habilitação de Seguro Desemprego, Curso de Qualificação Profissional e Social, PACET, MEI',
      	horarios: 'das 8h00 às 17h00 de segunda a sexta.'
      }]
    },
    {
         name: 'M Boi Mirim',
      items: [{
      	endereco: 'Av. Guarapiranga, 1265, M Boi Mirim, CEP 04902-015',
      	servicos: 'Intermediação de Mão de Obra, Emissão de Carteira de Trabalho, Habilitação de Seguro Desemprego, Curso de Qualificação Profissional e Social, PACET, MEI.',
      	horarios: 'das 8h00 às 17h00 de segunda a sexta.'
      }]
    },
    {
      name: 'Moóca',
      items: [{
      	endereco: ': Rua Taquari, 549, Moóca, CEP 03166-000',
      	servicos: 'Intermediação de Mão de Obra, Emissão de Carteira de Trabalho, Habilitação de Seguro Desemprego, Curso de Qualificação Profissional e Social, PACET, MEI.',
      	horarios: 'das 8h00 às 17h00 de segunda a sexta.'
      }]
    },
    {
      name: 'Parelheiros',
      items: [{
      	endereco: 'Av. Sadamu Inoue, 522, Parelheiros, CEP 04883-025',
      	servicos: 'Intermediação de Mão de Obra, Emissão de Carteira de Trabalho, Habilitação de Seguro Desemprego, Curso de Qualificação Profissional e Social, PACET, MEI',
      	horarios: 'das 8h00 às 17h00 de segunda a sexta.'
      }]
    },
    {
         name: 'Penha',
      items: [{
      	endereco: 'Rua Candapuí, 492, Penha, CEP 03621-000',
      	servicos: 'Intermediação de Mão de Obra, Emissão de Carteira de Trabalho, Habilitação de Seguro Desemprego, Curso de Qualificação Profissional e Social, PACET, MEI e Orientação para o Trabalho e Seleção..',
      	horarios: 'das 8h00 às 17h00 de segunda a sexta.'
      }]
    },
    {
      name: 'Perus',
      items: [{
      	endereco: 'R Ylídio Figueiredo, 349, Perus, CEP 05204-020',
      	servicos: 'Intermediação de Mão de Obra, Emissão de Carteira de Trabalho, Habilitação de Seguro Desemprego, Curso de Qualificação Profissional e Social, PACET, MEI e Orientação para o Trabalho e Seleção.',
      	horarios: 'das 8h00 às 17h00 de segunda a sexta.'
      }]
    },
    {
      name: 'Pinheiros',
      items: [{
      	endereco: 'Av. Das Nações Unidas,  7123, Pinheiros, CEP 05425-070',
      	servicos: 'Intermediação de Mão de Obra, Emissão de Carteira de Trabalho, Habilitação de Seguro Desemprego, Curso de Qualificação Profissional e Social, PACET, MEI',
      	horarios: 'das 8h00 às 17h00 de segunda a sexta.'
      }]
    },

        {
         name: 'Pirituba',
      items: [{
      	endereco: 'Av.  Dr. Felipe Pinel, 12, Pirituba, CEP 02939-000',
      	servicos: 'Intermediação de Mão de Obra, Emissão de Carteira de Trabalho, Habilitação de Seguro Desemprego, Curso de Qualificação Profissional e Social, PACET, MEI e Orientação para o Trabalho e Seleção..',
      	horarios: 'das 8h00 às 17h00 de segunda a sexta.'
      }]
    },
    {
      name: 'Santana I',
      items: [{
      	endereco: 'Rua Voluntários Da Pátria, 1553, Santana, CEP 02011-300',
      	servicos: 'Intermediação de Mão de Obra, Emissão de Carteira de Trabalho, Habilitação de Seguro Desemprego, Curso de Qualificação Profissional e Social, PACET, MEI e Orientação para o Trabalho e Seleção.',
      	horarios: 'das 8h00 às 17h00 de segunda a sexta.'
      }]
    },
    {
      name: 'Santana II',
      items: [{
      	endereco: 'Av. Tucuruvi, 808,  Tucuruvi, CEP 02304-002',
      	servicos: 'Intermediação de Mão de Obra, Emissão de Carteira de Trabalho, Habilitação de Seguro Desemprego, Curso de Qualificação Profissional e Social, PACET, MEI',
      	horarios: 'das 8h00 às 17h00 de segunda a sexta.'
      }]
    },
     {
         name: 'Santo Amaro',
      items: [{
      	endereco: 'Praça. Floriano Peixoto, 54, Santo Amaro, CEP 04751-030',
      	servicos: 'Intermediação de Mão de Obra, Emissão de Carteira de Trabalho, Habilitação de Seguro Desemprego, Curso de Qualificação Profissional e Social, PACET, MEI.',
      	horarios: 'das 8h00 às 17h00 de segunda a sexta.'
      }]
    },
    {
      name: 'São Mateus I',
      items: [{
      	endereco: 'Av. Mateo Bei, 1641, São Mateus, CEP 03949-011',
      	servicos: 'Intermediação de Mão de Obra, Emissão de Carteira de Trabalho, Habilitação de Seguro Desemprego, Curso de Qualificação Profissional e Social, PACET, MEI e Orientação para o Trabalho e Seleção.',
      	horarios: 'das 8h00 às 17h00 de segunda a sexta.'
      }]
    },
    {
      name: 'São Mateus II',
      items: [{
      	endereco: 'Av. Ragueb Chohfi, 1400, São Mateus, CEP 08375-000',
      	servicos: 'Intermediação de Mão de Obra, Emissão de Carteira de Trabalho, Habilitação de Seguro Desemprego, Curso de Qualificação Profissional e Social, PACET, MEI',
      	horarios: 'das 8h00 às 17h00 de segunda a sexta.'
      }]
    },

     {
         name: 'São Miguel Paulista I',
      items: [{
      	endereco: 'Av. Imperador, 1900, São Miguel Paulista, CEP 08050-000 ',
      	servicos: 'Intermediação de Mão de Obra, Emissão de Carteira de Trabalho, Habilitação de Seguro Desemprego, Curso de Qualificação Profissional e Social, PACET, MEI e Orientação para o Trabalho e Seleção.',
      	horarios: 'das 8h00 às 17h00 de segunda a sexta.'
      }]
    },
    {
      name: 'São Miguel Paulista II',
      items: [{
      	endereco: 'Av. Mateo Bei, 1641, São Mateus, CEP 03949-011',
      	servicos: 'Intermediação de Mão de Obra, Emissão de Carteira de Trabalho, Habilitação de Seguro Desemprego, Curso de Qualificação Profissional e Social, PACET, MEI',
      	horarios: 'das 8h00 às 17h00 de segunda a sexta.'
      }]
    },
    {
      name: 'Sapopemba',
      items: [{
      	endereco: 'Av. Sapopemba, 9064, Sapopemba, CEP 03988-000',
      	servicos: 'Intermediação de Mão de Obra, Emissão de Carteira de Trabalho, Habilitação de Seguro Desemprego, Curso de Qualificação Profissional e Social, PACET, MEI',
      	horarios: 'das 8h00 às 17h00 de segunda a sexta.'
      }]
    },

         {
         name: 'Sé',
      items: [{
      	endereco: ': Rua Álvares Penteado, 49, Sé, CEP 01012-001',
      	servicos: 'Intermediação de Mão de Obra, Emissão de Carteira de Trabalho, Habilitação de Seguro Desemprego, Curso de Qualificação Profissional e Social, PACET, MEI e Orientação para o Trabalho e Seleção.',
      	horarios: 'das 8h00 às 17h00 de segunda a sexta.'
      }]
    },
    {
      name: 'Tatuapé',
      items: [{
      	endereco: 'R. Padre Estevão Pernet, 615, Tatuapé, CEP 03315-000',
      	servicos: 'Intermediação de Mão de Obra, Emissão de Carteira de Trabalho, Habilitação de Seguro Desemprego, Curso de Qualificação Profissional e Social, PACET, MEI',
      	horarios: 'das 8h00 às 17h00 de segunda a sexta.'
      }]
    },
    {
      name: 'Vila Maria',
      items: [{
      	endereco: 'Rua General Mendes, 111, Vila Maria, CEP 02127-020',
      	servicos: 'Intermediação de Mão de Obra, Emissão de Carteira de Trabalho, Habilitação de Seguro Desemprego, Curso de Qualificação Profissional e Social, PACET, MEI',
      	horarios: 'das 8h00 às 17h00 de segunda a sexta.'
      }]
    },
    {
      name: 'Vila Mariana',
      items: [{
      	endereco: 'Rua José De Magalhães, 500, Vila Mariana, CEP 04026-090',
      	servicos: 'Intermediação de Mão de Obra, Emissão de Carteira de Trabalho, Habilitação de Seguro Desemprego, Curso de Qualificação Profissional e Social, PACET, MEI',
      	horarios: 'das 8h00 às 17h00 de segunda a sexta.'
      }]
    },
    {
      name: 'Vila Prudente',
      items: [{
      	endereco: ' Av. Do Oratório, 172, Vila Prudente, CEP 03220-000',
      	servicos: 'Intermediação de Mão de Obra, Emissão de Carteira de Trabalho, Habilitação de Seguro Desemprego, Curso de Qualificação Profissional e Social, PACET, MEI',
      	horarios: 'das 8h00 às 17h00 de segunda a sexta.'
      }]
    },
    ];

    
  $scope.toggleGroup = function(group) {
    if ($scope.isGroupShown(group)) {
      $scope.shownGroup = null;
    } else {
      $scope.shownGroup = group;
    }
  };
  $scope.isGroupShown = function(group) {
    return $scope.shownGroup === group;
  };
})

.controller('UnidadesMoveis', function($scope, $http) {
   $scope.groups = [
    {
      name: 'MÓVEL 01',
      items: [{
      	local: 'OPERAÇÃO BRAÇOS ABERTOS',
      	endereco: 'RUA HELVÉTIA, 54 - CAMPOSELISEOS / CENTRO'
      }]
    },
    {
      name: 'MÓVEL 02',
      items: [{
      	local: 'TERMINAL SPATRANS VARGINHA',
      	endereco: 'AV. PAULO GUILGER REIMBERG X PRAÇA DO TRABALHADOR / SUL'
      }]
    },
    {
      name: 'MÓVEL 03',
      items: [{
      	local: 'PRAÇA DA REPÚBLICA',
      	endereco: 'PRAÇA DA REPÚBLICA, S/N / CENTRO'
      }]
    },
    {
      name: 'MÓVEL 04',
      items: [{
      	local: 'TERMINAL SPATRANS A. E. CARVALHO',
      	endereco: 'AV IMPERADOR, 1401 - CIDADE A. E. CARVALHO'
      }]
    },
    {
      name: 'MÓVEL 05',
      items: [{
      	local: 'TERMINAL SPATRANS VILA NOVA CACHOEIRINHA',
      	endereco: 'AV. INAJAR DE SOUZA, S/N - VILA NOVA CAHOEIRINHA'
      }]
    },
    {
      name: 'MÓVEL 06',
      items: [{
      	local: 'PRAÇA DA RÉPÚBLICA - DE 23 A 27/02/2015',
      	endereco: 'PRAÇA DA REPÚBLICA, S/N / CENTRO'
      }]
    },
    {
      name: 'MÓVEL 07',
      items: [{
      	local: 'TERMINAL SPATRANS SAPOPEMBA',
      	endereco: 'AV. ARQUITETO VILANOVA ARTIGAS, S/N'
      }]
    }
    ];

$scope.eventos = [
    {
      name: 'EVENTO 01 E 02/12/2014 MÓVEL04',
      items: [{
      	local: '6ª FASE DE AÇÃO INTEGRADA DO GOVERNO LOCAL',
      	horario: 'DAS 08:00 ÁS 17:00HS',
      	endereco: 'RUA SETE ESTRELAS X RUA CARROSSEL - TAIM PAULISTA / LESTE'
      }]
    } 
    ];

$scope.unidades = [
    {
      name: 'ARICANDUVA',
      items: [{
      	endereco: 'Rua Atucuri, 699 , Aricanduva, CEP 03411-000',
      	servicos: 'Intermediação de Mão de Obra, Emissão de Carteira de Trabalho, Habilitação de Seguro Desemprego, Curso de Qualificação Profissional e Social, PACET, MEI',
      	horarios: 'das 8h00 às 17h00 de segunda a sexta.'
      }]
    },
    {
      name: 'Brasilândia',
      items: [{
      	endereco: 'Av. João Marcelino Branco, 95 , Brasilândia, CEP 02610-000',
      	servicos: 'Intermediação de Mão de Obra, Emissão de Carteira de Trabalho, Habilitação de Seguro Desemprego, Curso de Qualificação Profissional e Social, PACET, MEI',
      	horarios: 'das 8h00 às 17h00 de segunda a sexta.'
      }]
    },
    {
      name: 'Butantã',
      items: [{
      	endereco: 'Rua Doutor Ulpiano Da Costa Manso, 201, Butantã, CEP 05538-000',
      	servicos: 'Intermediação de Mão de Obra, Emissão de Carteira de Trabalho, Habilitação de Seguro Desemprego, Curso de Qualificação Profissional e Social, PACET, MEI',
      	horarios: 'das 8h00 às 17h00 de segunda a sexta.'
      }]
    },
    {
      name: 'Campo Limpo',
      items: [{
      	endereco: 'Rua Nossa Senhora Do Bom Conselho, 59, Campo Limpo, CEP 05763-470',
      	servicos: 'Intermediação de Mão de Obra, Emissão de Carteira de Trabalho, Habilitação de Seguro Desemprego, Curso de Qualificação Profissional e Social, PACET, MEI',
      	horarios: 'das 8h00 às 17h00 de segunda a sexta.'
      }]
    },
    {
      name: 'Capela do Socorro',
      items: [{
      	endereco: 'Rua Cassiano Dos Santos, 499, Capela do Socorro, CEP 04827-110',
      	servicos: 'Intermediação de Mão de Obra, Emissão de Carteira de Trabalho, Habilitação de Seguro Desemprego, Curso de Qualificação Profissional e Social, PACET, MEI',
      	horarios: 'das 8h00 às 17h00 de segunda a sexta.'
      }]
    },
    {
      name: 'Casa Verde',
      items: [{
      	endereco: 'Av. Ordem E Progresso, 1001, Casa Verde, CEP 02518-130',
      	servicos: 'Intermediação de Mão de Obra, Emissão de Carteira de Trabalho, Habilitação de Seguro Desemprego, Curso de Qualificação Profissional e Social, PACET, MEI',
      	horarios: 'das 8h00 às 17h00 de segunda a sexta.'
      }]
    },
    {
      name: 'Cidade Ademar',
      items: [{
      	endereco: 'Av. Yervant Kissajikian, 416, Cidade Ademar, CEP 04657-000',
      	servicos: 'Intermediação de Mão de Obra, Emissão de Carteira de Trabalho, Habilitação de Seguro Desemprego, Curso de Qualificação Profissional e Social, PACET, MEI',
      	horarios: 'das 8h00 às 17h00 de segunda a sexta.'
      }]
    },
    {
      name: 'Cidade Tiradentes',
      items: [{
      	endereco: 'Rua Milagre Dos Peixes, 357, Cidade Tiradentes, CEP 08474-120',
      	servicos: 'Intermediação de Mão de Obra, Emissão de Carteira de Trabalho, Habilitação de Seguro Desemprego, Curso de Qualificação Profissional e Social, PACET, MEI',
      	horarios: 'das 8h00 às 17h00 de segunda a sexta.'
      }]
    },
    {
      name: 'Ermelino Matarazzo',
      items: [{
      	endereco: 'Av. São Miguel, 5550 , Ermelino Matarazzo, CEP 03871-100',
      	servicos: 'Intermediação de Mão de Obra, Emissão de Carteira de Trabalho, Habilitação de Seguro Desemprego, Curso de Qualificação Profissional e Social, PACET, MEI',
      	horarios: 'das 8h00 às 17h00 de segunda a sexta.'
      }]
    },
     {
      name: 'Interlagos',
      items: [{
      	endereco: 'Av. Interlagos, 6122, Interlagos, CEP 04777-000',
      	servicos: 'Intermediação de Mão de Obra, Emissão de Carteira de Trabalho, Habilitação de Seguro Desemprego, Curso de Qualificação Profissional e Social, PACET, MEI e Orientação para o Trabalho e Seleção.',
      	horarios: 'das 8h00 às 17h00 de segunda a sexta.'
      }]
    }];

     $scope.toggleGroup = function(group) {
    if ($scope.isGroupShown(group)) {
      $scope.shownGroup = null;
    } else {
      $scope.shownGroup = group;
    }
  };
  $scope.isGroupShown = function(group) {
    return $scope.shownGroup === group;
  };	
})

.controller('AccountCtrl', function($scope, $http) {
   
})

.controller('TrabalhadorVagas', function($scope, $http, $ionicLoading, $stateParams, $ionicPopup) {
     $scope.toggleGroup = function(group) {
    if ($scope.isGroupShown(group)) {
      $scope.shownGroup = null;
    } else {
      $scope.shownGroup = group;
    }
  };
  $scope.isGroupShown = function(group) {
    return $scope.shownGroup === group;
  };  
    $ionicLoading.show({
    content: 'Carregando Vagas',
    animation: 'fade-in',
    showBackdrop: true,
    maxWidth: 200,
    showDelay: 0
  });
  $scope.iconetopo =  $stateParams.tipoVaga;
  $http.get('http://www.renies.com.br/ddd37/gerenciador/cate/vagas', {params: {tipo: $stateParams.tipoVaga}})
               .success(function(data) {
                      $ionicLoading.hide(); 
                }) 
               .error(function(data) {
                $ionicLoading.hide();
                  return $ionicPopup.alert({
                       title: 'ATENÇÃO.',
                       template: 'Seu dispositivo não esta conectado na internet.'
                     });
               })
               .then(        
                function(res){ 
                  $scope.vagas  = res.data;              
                });   
   
});
