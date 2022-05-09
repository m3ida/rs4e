const surveyJSON = {
    description: [
        'Uma equipa de docentes da Universidade da Madeira (UMa), coordenada pela Professora Doutora Carmen Freitas, ' +
            'pretende realizar um trabalho de investigação com o objetivo de avaliar a intenção empreendedora dos alunos ' +
            'graduados pela UMa. ',
        'Para tal, solicitamos a sua participação neste estudo, através do preenchimento deste questionário, onde terá de ' +
            'dar a sua opinião sobre a atividade empreendedora, que corresponde à atividade desenvolvida por um empreendedor ' +
            'aquando da criação da sua empresa. As perguntas marcadas com asterisco (*) são obrigatórias.',
        'O questionário levará entre 5 e 10 minutos a ser preenchido, sendo as respostas anónimas e confidenciais.',
        'Os dados obtidos serão utilizados na elaboração de artigos científicos que serão divulgados e disseminados em ' +
            'conferências e jornais científicos. ',
        'Agradecemos a sua disponibilidade, estando convencidos que a sua opinião é fundamental. ',
        'Se você tiver alguma dúvida sobre o questionário, envie-nos um email para: carmenf@staff.uma.pt.',
    ],
    img: 'uma',
    name:'questumaemp',
    elements: [
        {
            name: 'Idade',
            type: 'radiogroup',
            description: 'Escolha uma e uma só das seguintes opções:',
            isRequired: true,
            choices: ['Menos de 22', '22 - 25', '26-30', '31-35', 'mais de 35'],
        },
        {
            name: 'Género',
            type: 'radiogroup',
            description: 'Escolha uma e uma só das seguintes opções:',
            isRequired: true,
            choices: ['Feminino', 'Masculino', 'Outro'],
        },
        {
            name: 'Estado civil',
            type: 'radiogroup',
            description: 'Escolha uma e uma só das seguintes opções:',
            isRequired: true,
            choices: ['Solteiro(a)', 'Casado(a)/União de facto', 'Divorciado(a)', 'Outro'],
        },
        {
            name: 'Situação laboral',
            type: 'radiogroup',
            description: 'Escolha uma e uma só das seguintes opções:',
            isRequired: true,
            choices: [
                'Trabalhador por conta de outrém',
                'Trabalhador independente',
                'Empreendedor/Dono de empresa',
                'Desempregado',
                'Reformado',
                'Estudante',
                'Outra',
            ],
        },
        // {
        //     name: 'Teste - empreendedor',
        //     type: 'radiogroup',
        //     depends: {
        //         question: 'Situação laboral',
        //         equals: true,
        //         value: 'Empreendedor/Dono de empresa',
        //     },
        //     description: 'Escolha uma e uma só das seguintes opções:',
        //     isRequired: true,
        //     choices: ['Solteiro(a)', 'Casado(a)/União de facto', 'Divorciado(a)', 'Outro'],
        // },
        // {
        //     name: 'Teste - não empreendedor',
        //     type: 'radiogroup',
        //     depends: {
        //         question: 'Situação laboral',
        //         equals: false,
        //         value: 'Empreendedor/Dono de empresa',
        //     },
        //     description: 'Escolha uma e uma só das seguintes opções:',
        //     isRequired: true,
        //     choices: ['Solteiro(a)', 'Casado(a)/União de facto', 'Divorciado(a)', 'Outro'],
        // },
        {
            name: 'Há quantos anos criou a empresa?',
            type: 'radiogroup',
            description: 'Escolha uma e uma só das seguintes opções:',
            depends: {
                question: 'Situação laboral',
                value: 'Empreendedor/Dono de empresa',
            },
            isRequired: true,
            choices: ['Menos de 1 ano', '1 a 2 anos', '3 a 5 anos', '5 a 10 anos', 'mais de 10 anos'],
        },
        {
            name: 'Qual o setor de atividade da sua empresa?',
            type: 'radiogroup',
            description: 'Escolha uma e uma só das seguintes opções:',
            depends: {
                question: 'Situação laboral',
                value: 'Empreendedor/Dono de empresa',
            },
            isRequired: true,
            choices: [
                'Agricultura',
                'Indústria e Energia',
                'Comércio',
                'Transporte e armazenagem',
                'Alojamento e restauração',
                'Informação e comunicação',
                'Outros serviços',
            ],
        },
        {
            name: 'Quantos anos de experiência laboral tem?',
            type: 'radiogroup',
            description: 'Escolha uma e uma só das seguintes opções:',
            isRequired: true,
            choices: ['Menos de 1 ano', '1 a 2 anos', '3 a 5 anos', '5 a 10 anos', 'mais de 10 anos'],
        },
        {
            name: 'Habilitação',
            type: 'radiogroup',
            description: 'Escolha uma e uma só das seguintes opções:',
            isRequired: true,
            choices: ['Secundário', 'Licenciatura', 'Mestrado', 'Doutoramento', 'Pós-doutoramento', 'Outra'],
        },
        {
            name: 'Obteve a sua formação superior na Universidade da Madeira?',
            type: 'radiogroup',
            description: 'Escolha uma e uma só das seguintes opções:',
            isRequired: true,
            choices: ['Sim', 'Não'],
        },
        {
            name: 'Qual o domínio científico/tecnológico da sua formação?',
            type: 'radiogroup',
            description: 'Escolha uma e uma só das seguintes opções:',
            isRequired: true,
            choices: [
                'Ciências Exatas e Naturais',
                'Ciências da Engenharia e Tecnologia',
                'Ciências Médicas e da Saúde',
                'Ciências Agrárias',
                'Ciências Sociais',
                'Humanidades',
                'Outra',
            ],
        },
        {
            name: 'Avalie a importância das seguintes razões para a escolha desse domínio científico/tecnológico para a sua formação:',
            type: 'matrix',
            description: 'Avalie de 1 (nenhuma importância) a 7 (muito importante)',
            isRequired: true,
            elements: [
                {
                    value: 'Vocação',
                },
                {
                    value: 'Oportunidade de carreira',
                },
                {
                    value: 'Conselho de família/amigos',
                },
            ],
        },
        {
            name: 'Em que ano concluiu o seu curso (último grau obtido)?',
            type: 'radiogroup',
            description: 'Escolha uma e uma só das seguintes opções:',
            isRequired: true,
            choices: [
                'Depois de 2019',
                '2019',
                '2018',
                '2017',
                '2016',
                '2015',
                '2014',
                '2013',
                '2012',
                '2011',
                '2010',
                'Antes de 2010',
                'ainda não terminou',
            ],
        },
        {
            name: 'Qual a habilitação académica da sua mãe?',
            type: 'radiogroup',
            description: 'Escolha uma e uma só das seguintes opções:',
            isRequired: true,
            choices: [
                'Ensino básico',
                'Ensino do 2º ou 3º ciclo',
                'Ensino secundário',
                'Ensino técnico-profissional',
                'Ensino universitário',
            ],
        },
        {
            name: 'Qual a habilitação académica do seu pai?',
            type: 'radiogroup',
            description: 'Escolha uma e uma só das seguintes opções:',
            isRequired: true,
            choices: [
                'Ensino básico',
                'Ensino do 2º ou 3º ciclo',
                'Ensino secundário',
                'Ensino técnico-profissional',
                'Ensino universitário',
            ],
        },
        {
            name: 'Situação laboral da sua mãe?',
            type: 'radiogroup',
            description: 'Escolha uma e uma só das seguintes opções:',
            isRequired: true,
            choices: [
                'Trabalhadora por conta de outrém',
                'Trabalhadora independente',
                'Empreendedora/Dona de empresa',
                'Desempregada',
                'Reformada',
                'Estudante',
                'Outra',
            ],
        },
        {
            name: 'Situação laboral do seu pai?',
            type: 'radiogroup',
            description: 'Escolha uma e uma só das seguintes opções:',
            isRequired: true,
            choices: [
                'Trabalhador por conta de outrém',
                'Trabalhador independente',
                'Empreendedor/Dono de empresa',
                'Desempregado',
                'Reformado',
                'Estudante',
                'Outra',
            ],
        },
        {
            name: 'Onde reside atualmente?',
            type: 'radiogroup',
            description: 'Escolha uma e uma só das seguintes opções:',
            isRequired: true,
            choices: [
                'Região Autónoma da Madeira (RAM)',
                'Fora da RAM mas em Portugal',
                'Fora de Portugal mas na Europa',
                'Fora da Europa',
            ],
        },
        {
            name: 'De uma forma geral (em grosso modo/por alto), qual é o rendimento líquido total mensal do seu agregado familiar? (somando o rendimento de todas as pessoas que vivem no seu agregado familiar)',
            type: 'radiogroup',
            description: 'Escolha uma e uma só das seguintes opções:',
            isRequired: true,
            choices: [
                'Menos de €500',
                'Entre €500 a €999',
                'De €1.000 a €1.999',
                'De €2.000 a €3.999',
                'De €4.000 a €6.999',
                'De €7.000 a €9.999',
                'Mais de €9.999',
            ],
        },
        {
            name: 'Conhece pessoalmente algum empreendedor?',
            type: 'radiogroup',
            description: 'Escolha uma e uma só das seguintes opções:',
            isRequired: true,
            choices: ['Sim', 'Não'],
        },
        {
            name: 'Qual a relação que tem com esse empreendor(a)?',
            type: 'conhecer-empreendedor',
            description: 'Avalie as seguintes questões de 1 (em nenhuma medida) a 7 (completamente).',
            depends: {
                question: 'Conhece pessoalmente algum empreendedor?',
                value: 'Sim',
            },
            isRequired: true,
            choices: ['Família', 'Amigos', 'Patrão', 'Outro'],
        },
        {
            name: 'Indique o seu nível de conhecimento sobre as associações empresariais e institutos de apoio à atividade empreendedora na RAM',
            description: 'Avalie de 1 (desconhece completamente) a 7 (conhecimento total)',
            type: 'matrix',
            isRequired: true,
            hasOther: true,
            elements: [
                {
                    value: 'StartUp Madeira',
                },
                {
                    value: 'Instituto de Desenvolvimento Empresarial da RAM (IDE, IP-RAM)',
                },
                {
                    value: 'Associação de Jovens Empresários Madeirenses (AJEM)',
                },
                {
                    value: 'Associação do Comércio e Indústria do Funchal (ACIF)',
                },
                {
                    value: 'Instituto de Emprego da Madeira, IP-RAM',
                },
                {
                    value: 'Outra',
                    other: true,
                },
            ],
        },
        {
            name: 'Para cada uma das seguintes medidas de apoio à criação de empresas na RAM, indique o seu nível de conhecimento',
            type: 'matrix',
            description: 'Avalie de 1 (desconhece completamente) a 7 (conhece completamente)',
            isRequired: true,
            hasOther: true,
            elements: [
                {
                    value: 'Treino específico para jovens empreendedores',
                },
                {
                    value: 'Empréstimos em condições favoráveis',
                },
                {
                    value: 'Apoios financeiros não reembolsáveis',
                },
                {
                    value: 'Apoio técnico na criação da empresa',
                },
                {
                    value: 'Centro de empresas/incubadora',
                },
                {
                    value: 'Serviços de consultoria em condições favoráveis',
                },
                {
                    value: 'Outra',
                    other: true,
                },
            ],
        },
        {
            name: 'O que gostaria de fazer logo que acabe(ou) o seu curso?',
            description: 'Avalie as seguintes de 1 (preferência mínima) a 7 (preferência máxima)',
            type: 'matrix',
            isRequired: true,
            elements: [
                {
                    value: 'Trabalhar por conta de outrém/assalariado/dependente',
                },
                {
                    value: 'Profissão liberal (trabalhador independente)',
                },
                {
                    value: 'Criar uma empresa',
                },
                {
                    value: 'Continuar a estudar',
                },
            ],
        },
        {
            name:
                'No médio e longo prazo, considerando todas as vantagens ' +
                'e desvantagens (económicas, pessoais, reconhecimento social, estabilidade laboral, entre outros)' +
                ', indique o seu nível de atração em relação a cada uma das seguintes opções profissionais',
            description: 'Avalie de 1 (atração mínima) a 7 (atração máxima)',
            type: 'matrix',
            isRequired: true,
            hasOther: true,
            elements: [
                {
                    value: 'Trabalho assalariado/dependente/assalariado',
                },
                {
                    value: 'Profissão liberal (trabalhador independente)',
                },
                {
                    value: 'Empreendedor (ter a sua própria empresa)',
                },
                {
                    value: 'Outra',
                    other: true,
                },
            ],
        },
        {
            title: 'Indique o seu nível de concordância com as seguintes afirmações',
            name: 'Indique o seu nível de concordância com as seguintes afirmações 1',
            description: 'Avalie de 1 (discordo completamente) a 7 (concordo totalmente)',
            type: 'matrix',
            isRequired: true,
            elements: [
                {
                    value: 'Para mim, ser empreendedor traz mais vantagens do que desvantagens',
                },
                {
                    value: 'Para mim, uma carreira como empreendedor é atrativa',
                },
                {
                    value: 'Se eu tiver a oportunidade e os recursos, gostaria de criar uma empresa',
                },
                {
                    value: 'Ser um empresário trará grande satisfação para mim',
                },
                {
                    value: 'Entre as várias opções, eu preferia ser um empreendedor',
                },
            ],
        },
        {
            name:
                'Nos seus relacionamentos próximos, considera que a atividade empreendedora ' +
                'é mais valorizada ou menos valorizada quando comparada com outras atividades ou carreiras?',
            description: 'Indique de 1 (pouco valorizada) a 7 (muito valorizada)',
            type: 'matrix',
            isRequired: true,
            elements: [
                {
                    value: 'Pela sua família próxima',
                },
                {
                    value: 'Entre os seus amigos',
                },
                {
                    value: 'Entre os seus colegas e companheiros',
                },
            ],
        },
        {
            name: 'Quando decidiu criar a sua empresa, as pessoas próximas de si aprovaram essa decisão?',
            description: 'Indique de 1 (desaprovação total) a 7 (aprovação total)',
            type: 'matrix',
            isRequired: true,
            depends: {
                question: 'Situação laboral',
                equals: true,
                value: 'Empreendedor/Dono de empresa',
            },
            elements: [
                {
                    value: 'A sua família próxima',
                },
                {
                    value: 'Os seus amigos',
                },
                {
                    value: 'Os seus colegas e companheiros',
                },
            ],
        },
        {
            name: 'Se decidir criar uma empresa, as pessoas próximas de si aprovariam dessa decisão?',
            description: 'Indique de 1 (desaprovação total) a 7 (aprovação total)',
            type: 'matrix',
            isRequired: true,
            depends: {
                question: 'Situação laboral',
                equals: false,
                value: 'Empreendedor/Dono de empresa',
            },
            elements: [
                {
                    value: 'A sua família próxima',
                },
                {
                    value: 'Os seus amigos',
                },
                {
                    value: 'Os seus colegas e companheiros',
                },
            ],
        },
        {
            title: 'Indique o seu nível de concordância com as seguintes afirmações',
            name: 'Indique o seu nível de concordância com as seguintes afirmações 2',
            description: 'Avalie de 1 (discordo totalmente) a 7 (concordo)',
            type: 'matrix',
            isRequired: true,
            elements: [
                {
                    value: 'A atividade empreendedora entra em choque com a cultura do meu país',
                },
                {
                    value: 'O papel do empreendedor na economia não é suficientemente valorizado',
                },
                {
                    value: 'Muitas pessoas consideram pouco aceitável ser empreendedor',
                },
                {
                    value: 'A atividade empreendedora é considerada muito arriscada',
                },
                {
                    value: 'É comum pensar que os empreendedores aproveitam-se das outras pessoas',
                },
            ],
        },
        {
            name: 'Em que medida concorda com as seguintes afirmações sobre a sua capacidade empreendedora?',
            description: 'Avalie de 1 (discordo totalmente) a 7 (concordo totalmente)',
            type: 'matrix',
            isRequired: true,
            depends: {
                question: 'Situação laboral',
                equals: true,
                value: 'Empreendedor/Dono de empresa',
            },
            elements: [
                {
                    value: 'Criar uma empresa e mantê-la em funcionamento é uma tarefa fácil para mim',
                },
                {
                    value: 'Estava preparado para começar a minha empresa',
                },
                {
                    value: 'Consegui controlar o processo de criação de uma empresa',
                },
                {
                    value: 'Conhecia os detalhes práticos necessários para começar uma empresa',
                },
                {
                    value: 'Consegui desenvolver o meu projeto empreendedor',
                },
                {
                    value: 'Estou a ter sucesso com a minha empresa',
                },
            ],
        },
        {
            name: 'Em que medida concorda com as seguintes afirmações sobre a sua capacidade empreendedora?',
            description: 'Avalie de 1 (discordo totalmente) a 7 (concordo totalmente)',
            type: 'matrix',
            isRequired: true,
            depends: {
                question: 'Situação laboral',
                equals: false,
                value: 'Empreendedor/Dono de empresa',
            },
            elements: [
                {
                    value: 'Criar uma empresa e mantê-la em funcionamento seria uma tarefa fácil para mim',
                },
                {
                    value: 'Estou preparado para começar uma empresa viável',
                },
                {
                    value: 'Consigo controlar o processo de criação de uma empresa',
                },
                {
                    value: 'Conheço os detalhes práticos necessários para começar uma empresa',
                },
                {
                    value: 'Sei como desenvolver um projeto empreendedor',
                },
                {
                    value: 'Se tentasse criar uma empresa, teria uma elevada probabilidade de fazê-lo com sucesso',
                },
            ],
        },
        {
            name: 'Analisando as capacidades necessárias para se ser empreendedor, você considera que:',
            description: 'Avalie as seguintes afirmações utilizando 1 (discordo completamente) a 7 (concordo totalmente)',
            type: 'matrix',
            isRequired: true,
            elements: [
                {
                    value: 'Consegue reconhecer uma oportunidade empreendedora',
                },
                {
                    value: 'É uma pessoa criativa',
                },
                {
                    value: 'Consegue resolver problemas',
                },
                {
                    value: 'Tem capacidade de liderança e capacidade de comunicação',
                },
                {
                    value: 'Consegue conceber/desenvolver novos produtos e serviços',
                },
                {
                    value: 'Tem capacidade de networking e para realizar contactos profissionais',
                },
            ],
        },
        {
            name: 'Já pensou seriamente em se tornar empreendedor e criar uma empresa?',
            description: 'Escolha uma opção:',
            type: 'radiogroup',
            isRequired: true,
            depends: {
                question: 'Situação laboral',
                equals: false,
                value: 'Empreendedor/Dono de empresa',
            },
            choices: ['Sim', 'Não'],
        },
        //-----------------------------------------------------------Se nao empreendedor
        {
            name: 'Se criar uma empresa, qual a dimensão, em número de empregados, que gostaria de atingir?',
            description: 'Escolha uma opção:',
            type: 'radiogroup',
            isRequired: true,
            depends: {
                question: 'Já pensou seriamente em se tornar empreendedor e criar uma empresa?',
                value: 'Sim',
            },
            choices: [
                'Trabalhador por conta própria (nenhum empregado)',
                'Microempresa  (até 9 empregados)',
                'Pequena empresa (de 10 a 49 empregados)',
                'Média empresa (de 50 a 249 empregados)',
                'Grande empresa ( mais de 249 empregados)',
            ],
        },
        {
            name: 'Em que medida considera os seguintes resultados como reflexo de sucesso na atividade empreendedora?',
            description: 'Assinale de 1 (em nenhuma medida) a 7 (completamente)',
            type: 'matrix',
            isRequired: true,
            depends: {
                question: 'Já pensou seriamente em se tornar empreendedor e criar uma empresa?',
                value: 'Sim',
            },
            elements: [
                {
                    value: 'Ser competitivo em mercados internacionais',
                },
                {
                    value: 'Alcançar níveis altos de rendimentos',
                },
                {
                    value: 'Desenvolver o tipo de atividade que realmente gosta/aprecia',
                },
                {
                    value: 'Alcançar grande reconhecimento na sociedade',
                },
                {
                    value: 'Ajudar a resolver problemas na minha comunidade',
                },
                {
                    value: 'Manter o negócio/empresa a funcionar',
                },
                {
                    value: 'Manter a empresa numa trajetória de crescimento',
                },
            ],
        },
        {
            name: 'O quanto importante será para si o contínuo desenvolvimento da empresa?',
            description: 'Assinale de 1 (em nenhuma medida) a 7 (completamente)',
            type: 'rating',
            depends: {
                question: 'Já pensou seriamente em se tornar empreendedor e criar uma empresa?',
                value: 'Sim',
            },
            minRateDescription: 'Em nenhuma medida',
            maxRateDescription: 'Completamente',
            isRequired: true,
        },
        {
            name: 'Em que medida realizaria os seguintes comportamentos/ações para poder desenvolver a sua empresa?',
            description: 'Assinale de 1 (em nenhuma medida) a 7 (completamente)',
            type: 'matrix',
            isRequired: true,
            depends: {
                question: 'Já pensou seriamente em se tornar empreendedor e criar uma empresa?',
                value: 'Sim',
            },
            elements: [
                {
                    value: 'Exportar uma parte significativa da produção',
                },
                {
                    value: 'Apresentar, com regularidade, novos produtos e/ou serviços aos seus clientes',
                },
                {
                    value: 'Introduzir, com regularidade, novos processos ou sistemas de produção',
                },
                {
                    value: 'Desenvolver projectos de Pesquisa & Desenvolvimento',
                },
                {
                    value: 'Planear detalhadamente as diferentes áreas de atuação da empresa',
                },
                {
                    value: 'Estabelecer acordos de cooperação e parcerias com outras empresas',
                },
                {
                    value: 'Oferecer formação especializada aos funcionários',
                },
                {
                    value: 'Aumentar a dimensao da empresa (funcionários, instalações, …)',
                },
            ],
        },
        //-----------------------------------------------------------Se empreendedor:
        {
            name: 'Qual a dimensão, em número de empregados, que gostaria de atingir com a sua empresa?',
            description: 'Escolha uma opção:',
            type: 'radiogroup',
            isRequired: true,
            depends: {
                question: 'Situação laboral',
                equals: true,
                value: 'Empreendedor/Dono de empresa',
            },
            choices: [
                'Trabalhador por conta própria (nenhum empregado)',
                'Microempresa  (até 9 empregados)',
                'Pequena empresa (de 10 a 49 empregados)',
                'Média empresa (de 50 a 249 empregados)',
                'Grande empresa ( mais de 249 empregados)',
            ],
        },
        {
            name: 'Em que medida considera os seguintes resultados como reflexo do seu sucesso na atividade empreendedora?',
            description: 'Assinale de 1 (em nenhuma medida) a 7 (completamente)',
            type: 'matrix',
            isRequired: true,
            depends: {
                question: 'Situação laboral',
                equals: true,
                value: 'Empreendedor/Dono de empresa',
            },
            elements: [
                {
                    value: 'Ser competitivo em mercados internacionais',
                },
                {
                    value: 'Alcançar níveis altos de rendimentos',
                },
                {
                    value: 'Desenvolver o tipo de atividade que realmente gosta/aprecia',
                },
                {
                    value: 'Alcançar grande reconhecimento na sociedade',
                },
                {
                    value: 'Ajudar a resolver problemas na minha comunidade',
                },
                {
                    value: 'Manter o negócio/empresa a funcionar',
                },
                {
                    value: 'Manter a empresa numa trajetória de crescimento',
                },
            ],
        },
        {
            name: 'O quanto importante é para si o contínuo desenvolvimento da empresa?',
            description: 'Assinale de 1 (em nenhuma medida) a 7 (completamente)',
            type: 'rating',
            depends: {
                question: 'Situação laboral',
                equals: true,
                value: 'Empreendedor/Dono de empresa',
            },
            minRateDescription: 'Em nenhuma medida',
            maxRateDescription: 'Completamente',
            isRequired: true,
        },
        {
            name: 'Em que medida realizaria os seguintes comportamentos/ações para fazer crescer a sua empresa?',
            description: 'Assinale de 1 (em nenhuma medida) a 7 (completamente)',
            type: 'matrix',
            isRequired: true,
            depends: {
                question: 'Situação laboral',
                equals: true,
                value: 'Empreendedor/Dono de empresa',
            },
            elements: [
                {
                    value: 'Exportar uma parte significativa da produção',
                },
                {
                    value: 'Apresentar, com regularidade, novos produtos e/ou serviços aos seus clientes',
                },
                {
                    value: 'Introduzir, com regularidade, novos processos ou sistemas de produção',
                },
                {
                    value: 'Desenvolver projectos de Pesquisa & Desenvolvimento',
                },
                {
                    value: 'Planear detalhadamente as diferentes áreas de atuação da empresa',
                },
                {
                    value: 'Estabelecer acordos de cooperação e parcerias com outras empresas',
                },
                {
                    value: 'Oferecer formação especializada aos funcionários',
                },
                {
                    value: 'Aumentar a dimensao da empresa (funcionários, instalações, etc, …)',
                },
            ],
        },
        //-------------------------------------------------------
        {
            name: 'Indique o seu nível de concordância com as seguintes afirmações:',
            description: 'Utilizando de 1 (discordo totalmente) a 7 (concordo completamente)',
            type: 'matrix',
            isRequired: true,
            depends: {
                question: 'Situação laboral',
                equals: false,
                value: 'Empreendedor/Dono de empresa',
            },
            elements: [
                {
                    value: 'Estou pronto para fazer qualquer coisa para me tornar empreendedor',
                },
                {
                    value: 'O meu objetivo profissional é tornar-me um empreendedor',
                },
                {
                    value: 'Vou fazer todo o esforço para criar e gerir a minha própria empresa',
                },
                {
                    value: 'Estou determinado em criar uma empresa no futuro',
                },
                {
                    value: 'Já pensei seriamente em criar uma empresa',
                },
                {
                    value: 'Tenho a firme intenção de criar uma empresa algum dia',
                },
            ],
        },
        {
            name:
                'Em que medida considera que é possível oferecer cursos de educação para o' +
                ' empreendedorismo que consigam desenvolver os seguintes aspetos?',
            description: 'Assinale de 1 (não é possível de todo) a 7 (totalmente possível)',
            type: 'matrix',
            isRequired: true,
            elements: [
                {
                    value: 'Conhecimento sobre o ambiente empreendedor',
                },
                {
                    value: 'Grande reconhecimento/apreço da figura do empreendedor',
                },
                {
                    value: 'A preferência por ser empreendedor',
                },
                {
                    value: 'As habilidades/capacidades necessárias para se ser empreendedor',
                },
                {
                    value: 'A intenção de ser empreendedor',
                },
            ],
        },
        {
            name: 'Participou em algum curso/módulo que possa ser considerado educação para o empreendedorismo?',
            type: 'sim_qual',
            isRequired: true,
        },
        {
            name: 'Se sim, em que medida ajudou-o(a) a desenvolver os seguintes aspetos?',
            type: 'matrix',
            description: 'Escolha uma e uma só das seguintes opções:',
            depends: {
                question: 'Participou em algum curso/módulo que possa ser considerado educação para o empreendedorismo?',
                equals: false,
                value: 'Não'
            },
            isRequired: true,
            elements: [
                {
                    value: 'Conhecimento sobre o ambiente empreendedor',
                },
                {
                    value: 'Grande reconhecimento/apreço da figura do empreendedor',
                },
                {
                    value: 'A preferência por ser empreendedor',
                },
                {
                    value: 'As habilidades/capacidades necessárias para se ser empreendedor',
                },
                {
                    value: 'A intenção de ser empreendedor',
                },
            ],
        },
        {
            name: 'Numa fase posterior serão selecionados alguns inqueridos para um estudo mais aprofundado. Pretende participar nesse estudo?',
            description: 'Escolha apenas uma:',
            type: 'email',
            isRequired: true,
        },
    ],
};

module.exports = surveyJSON;
