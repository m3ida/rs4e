const surveyJSON = {
  elements: [
    {
      name: 'Idade',
      type: 'radiogroup',
      description: 'Escolha uma e uma só das seguintes opções:',
      isRequired: true,
      choices: ['18 - 21', '22 - 25', '26-30', '31-35', 'mais de 35'],
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
      choices: [
        'Solteiro(a)',
        'Casado(a)/União de facto',
        'Divorciado(a)',
        'Outra',
      ],
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
    {
      name: 'Há quantos anos criou a empresa?',
      type: 'radiogroup',
      description: 'Escolha uma e uma só das seguintes opções:',
      isRequired: true,
      visibleIf: "{Situação laboral}='Empreendedor/Dono de empresa'",
      choices: [
        'menos de 1 ano',
        '1 a 2 anos',
        '3 a 5 anos',
        '5 a 10 anos',
        'mais de 10 anos',
      ],
    },
    {
      name: 'Quantos anos de experiência laboral tem?',
      type: 'radiogroup',
      description: 'Escolha uma e uma só das seguintes opções:',
      isRequired: true,
      choices: [
        'menos de 1 ano',
        '1 a 2 anos',
        '3 a 5 anos',
        '5 a 10 anos',
        'mais de 10 anos',
      ],
    },
    {
      name: 'Habilitação',
      type: 'radiogroup',
      description: 'Escolha uma e uma só das seguintes opções:',
      isRequired: true,
      choices: [
        'Secundário',
        'Licenciatura',
        'Mestrado',
        'Doutoramento',
        'Pós-doutoramento',
        'Outra',
      ],
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
      name: 'Avalie a importância das seguintes razões para a escolha domínio desse científico/tecnológico para a sua formação:',
      type: 'matrix',
      description: 'Avalie de 1 (nenhuma importância) a 7 (muito importante)',
      isRequired: true,
      columns: [
        {
          value: 1,
        },
        {
          value: 2,
        },
        {
          value: 3,
        },
        {
          value: 4,
        },
        {
          value: 5,
        },
        {
          value: 6,
        },
        {
          value: 7,
        },
      ],
      rows: [
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
      name: 'Em que ano concluiu o seu curso (útlimos grau obtido)?',
      type: 'radiogroup',
      description: 'Escolha uma e uma só das seguintes opções:',
      isRequired: true,
      choices: [
        '2020',
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
        'Outra',
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
        'Outra',
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
      name: 'De uma forma geral (em grosso modo/ por alto), qual é o rendimento líquido total mensal do seu agregado familiar? (somando os rendimentos de qualquer pessoa que viva no seu agregado familiar)',
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
      name: 'Indique qual a relação que tem com esse empreendor(a)',
      type: 'radiogroup',
      description: 'Escolha uma e uma só das seguintes opções:',
      visibleIf: "{Conhece pessoalmente algum empreendedor?} = 'Sim'",
      hasOther: true,
      isRequired: true,
      choices: ['Família', 'Amigos', 'Patrão'],
    },
    {
      name: 'Avalie as seguintes questões de 1 (em nenhuma medida) a 7 (completamente)',
      type: 'matrix',
      visibleIf:
        '{Indique qual a relação que tem com esse empreendor(a)} notempty &&' +
        " {Conhece pessoalmente algum empreendedor?} = 'Sim'",
      isRequired: true,
      columns: [
        {
          value: 1,
        },
        {
          value: 2,
        },
        {
          value: 3,
        },
        {
          value: 4,
        },
        {
          value: 5,
        },
        {
          value: 6,
        },
        {
          value: 7,
        },
      ],
      rows: [
        {
          value:
            'Em que medida você conhece a atividade dele(a) como empreendedor(a)?',
        },
        {
          value:
            'Em que medida ele/ela pode ser considerado(a) um bom empreendedor(a)?',
        },
      ],
    },
    {
      name: 'Indique o seu nível de conhecimento sobre as associações empresariais e institutos de apoio à atividade empreendedora na Região Autónoma da Madeira (RAM)',
      description:
        'Avalie de 1 (desconhece completamente) a 7 (conhecimento total)',
      type: 'matrix',
      // isRequired: true,
      columns: [
        {
          value: 1,
        },
        {
          value: 2,
        },
        {
          value: 3,
        },
        {
          value: 4,
        },
        {
          value: 5,
        },
        {
          value: 6,
        },
        {
          value: 7,
        },
      ],
      rows: [
        {
          value: 'StartUpMadeira',
        },
        {
          value:
            'Instituto de Desenvolvimento Empresarial da RAM (IDE, IP-RAM)',
        },
        {
          value: 'Associação de Jovens Empresários Madeirenses (AJEM)',
        },
        {
          value: 'Associação do Comércio e Indústria do Funchal (ACIF)',
        },
        {
          value:
            'Direção Regional da Inovação, Valorização e Empreendedorismo (DRIVE)',
        },
        {
          value: 'Instituto de Emprego da Madeira, IP-RAM',
        },
        {
          value: 'Outra',
        },
      ],
    },
    {
      name: 'Qual o nome da associação empresarial que conhece?',
      type: 'value',
      visibleIf:
        '{Indique o seu nível de conhecimento sobre as associações empresariais e institutos de apoio à atividade empreendedora na Região Autónoma da Madeira (RAM).outra} notempty',
      placeHolder: 'Escreva aqui',
      isRequired: true,
    },
    {
      name: 'Para cada uma das seguintes medidas de apoio à criação de empresas na RAM, indique o seu nível de conhecimento',
      type: 'matrix',
      description:
        'Avalie de 1 (desconhece completamente) a 7 (conhecimento total)',
      isRequired: true,
      columns: [
        {
          value: 1,
        },
        {
          value: 2,
        },
        {
          value: 3,
        },
        {
          value: 4,
        },
        {
          value: 5,
        },
        {
          value: 6,
        },
        {
          value: 7,
        },
      ],
      rows: [
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
      ],
    },
    {
      name: 'O que gostaria de fazer logo que acabe(ou) o seu curso?',
      description:
        'Avalie as seguintes de 1 (preferência mínima) a 7 (preferência máxima)',
      type: 'matrix',
      visibleIf:
        "{Em que ano concluiu o seu curso (útlimos grau obtido)?} != 'Antes de 2010'",
      isRequired: true,
      columns: [
        {
          value: 1,
        },
        {
          value: 2,
        },
        {
          value: 3,
        },
        {
          value: 4,
        },
        {
          value: 5,
        },
        {
          value: 6,
        },
        {
          value: 7,
        },
      ],
      rows: [
        {
          value: 'Trabalhar por conta de outrém/assalariado',
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
      name: 'O que fez logo que acabou o seu curso?',
      description:
        'Avalie as seguintes de 1 (preferência mínima) a 7 (preferência máxima)',
      type: 'matrix',
      visibleIf:
        "{Em que ano concluiu o seu curso (útlimos grau obtido)?} = 'Antes de 2010'",
      isRequired: true,
      columns: [
        {
          value: 1,
        },
        {
          value: 2,
        },
        {
          value: 3,
        },
        {
          value: 4,
        },
        {
          value: 5,
        },
        {
          value: 6,
        },
        {
          value: 7,
        },
      ],
      rows: [
        {
          value: 'Trabalhar por conta de outrém/assalariado',
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
      columns: [
        {
          value: 1,
        },
        {
          value: 2,
        },
        {
          value: 3,
        },
        {
          value: 4,
        },
        {
          value: 5,
        },
        {
          value: 6,
        },
        {
          value: 7,
        },
      ],
      rows: [
        {
          value: 'Trabalho assalariado',
        },
        {
          value: 'Profissão liberal (trabalhador independente)',
        },
        {
          value: 'Empreendedor (ter a sua própria empresa)',
        },
      ],
    },
    {
      title: 'Indique o seu nível de concordância com as seguintes afirmações',
      name: 'Indique o seu nível de concordância com as seguintes afirmações 1',
      description:
        'Avalie de 1 (discordo completamente) a 7 (concordo totalmente)',
      type: 'matrix',
      visibleIf: "{Situação laboral}!='Empreendedor/Dono de empresa'",
      isRequired: true,
      columns: [
        {
          value: 1,
        },
        {
          value: 2,
        },
        {
          value: 3,
        },
        {
          value: 4,
        },
        {
          value: 5,
        },
        {
          value: 6,
        },
        {
          value: 7,
        },
      ],
      rows: [
        {
          value:
            'Para mim, ser empreendedor traz mais vantagens do que desvantagens',
        },
        {
          value: 'Para mim, uma carreira como empreendedor é atrativa',
        },
        {
          value:
            'Se eu tiver a oportunidade e os recursos, gostaria de criar uma empresa',
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
      title: 'Indique o seu nível de concordância com as seguintes afirmações',
      name: 'Indique o seu nível de concordância com as seguintes afirmações 2',
      description: 'Avalie de 1 (discordo totalmente) a 7 (concordo)',
      type: 'matrix',
      visibleIf: "{Situação laboral}='Empreendedor/Dono de empresa'",
      isRequired: true,
      columns: [
        {
          value: 1,
        },
        {
          value: 2,
        },
        {
          value: 3,
        },
        {
          value: 4,
        },
        {
          value: 5,
        },
        {
          value: 6,
        },
        {
          value: 7,
        },
      ],
      rows: [
        {
          value:
            'Para mim, ser empreendedor traz mais vantagens do que desvantagens',
        },
        {
          value: 'Para mim, uma carreira como empreendedor é atrativa',
        },
        {
          value: 'Ser um empresário traz grande satisfação para mim',
        },
        {
          value: 'Entre as várias opções, eu preferi ser um empreendedor',
        },
      ],
    },
    {
      name:
        'Nos seus relacionamentos próximos, considera que a atividade empreendedora ' +
        'é valorizada melhor ou pior do que outras atividades e carreiras?',
      description: 'Indique de 1 (pouco valorizada) a 7 (muito valorizada)',
      type: 'matrix',
      isRequired: true,
      columns: [
        {
          value: 1,
        },
        {
          value: 2,
        },
        {
          value: 3,
        },
        {
          value: 4,
        },
        {
          value: 5,
        },
        {
          value: 6,
        },
        {
          value: 7,
        },
      ],
      rows: [
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
      name: 'Se você decidir criar uma empresa, as pessoas próximas de si aprovariam essa decisão?',
      description: 'Indique de 1 (desaprovação total) a 7 (aprovação total)',
      type: 'matrix',
      visibleIf: "{Situação laboral}!='Empreendedor/Dono de empresa'",
      isRequired: true,
      columns: [
        {
          value: 1,
        },
        {
          value: 2,
        },
        {
          value: 3,
        },
        {
          value: 4,
        },
        {
          value: 5,
        },
        {
          value: 6,
        },
        {
          value: 7,
        },
      ],
      rows: [
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
      name: 'Quando decidiu criar a sua empresa, as pessoas próximas de si aprovaram essa decisão?',
      description: 'Indique de 1 (desaprovação total) a 7 (aprovação total)',
      type: 'matrix',
      visibleIf: "{Situação laboral}='Empreendedor/Dono de empresa'",
      isRequired: true,
      columns: [
        {
          value: 1,
        },
        {
          value: 2,
        },
        {
          value: 3,
        },
        {
          value: 4,
        },
        {
          value: 5,
        },
        {
          value: 6,
        },
        {
          value: 7,
        },
      ],
      rows: [
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
      name: 'Indique o seu nível de concordância com as seguintes afirmações 3',
      description: 'Avalie de 1 (discordo totalmente) a 7 (concordo)',
      type: 'matrix',
      isRequired: true,
      columns: [
        {
          value: 1,
        },
        {
          value: 2,
        },
        {
          value: 3,
        },
        {
          value: 4,
        },
        {
          value: 5,
        },
        {
          value: 6,
        },
        {
          value: 7,
        },
      ],
      rows: [
        {
          value:
            'A atividade empreendedora entra em choque com a cultura do meu país',
        },
        {
          value:
            'O papel do empreendedor na economia não é suficientemente valorizado',
        },
        {
          value: 'Muitas pessoas consideram pouco aceitável ser empreendedor',
        },
        {
          value: 'A atividade empreendedora é considerada muito arriscada',
        },
        {
          value:
            'É comum pensar que os empreendedores aproveitam-se das outras pessoas',
        },
      ],
    },
    {
      title:
        'Em que medida concorda com as seguintes afirmações sobre a sua capacidade empreendedora?',
      name: 'Em que medida concorda com as seguintes afirmações sobre a sua capacidade empreendedora?1',
      description:
        'Avalie de 1 (discordo totalmente) a 7 (concordo totalmente)',
      type: 'matrix',
      visibleIf: "{Situação laboral}!='Empreendedor/Dono de empresa'",
      isRequired: true,
      columns: [
        {
          value: 1,
        },
        {
          value: 2,
        },
        {
          value: 3,
        },
        {
          value: 4,
        },
        {
          value: 5,
        },
        {
          value: 6,
        },
        {
          value: 7,
        },
      ],
      rows: [
        {
          value:
            'Criar uma empresa e mantê-la em funcionamento seria uma tarefa fácil para mim',
        },
        {
          value: 'Estou preparado para começar uma empresa viável',
        },
        {
          value: 'Consigo controlar o processo da criação de uma empresa',
        },
        {
          value:
            'Conheço os detalhes práticos necessários para começar uma empresa',
        },
        {
          value: 'Sei como desenvolver um projeto empreendedor',
        },
        {
          value:
            'Se eu tentar criar uma empresa, teria uma elevada probabilidade de fazê-lo com sucesso',
        },
      ],
    },
    {
      title:
        'Em que medida concorda com as seguintes afirmações sobre a sua capacidade empreendedora?',
      name: 'Em que medida concorda com as seguintes afirmações sobre a sua capacidade empreendedora?2',
      description:
        'Avalie de 1 (discordo totalmente) a 7 (concordo totalmente)',
      type: 'matrix',
      visibleIf: "{Situação laboral}='Empreendedor/Dono de empresa'",
      isRequired: true,
      columns: [
        {
          value: 1,
        },
        {
          value: 2,
        },
        {
          value: 3,
        },
        {
          value: 4,
        },
        {
          value: 5,
        },
        {
          value: 6,
        },
        {
          value: 7,
        },
      ],
      rows: [
        {
          value:
            'Criar uma empresa e mantê-la em funcionamento seria uma tarefa fácil para mim',
        },
        {
          value: 'Estou preparado para manter a minha empresa viável',
        },
        {
          value: 'Consegui controlar o processo da criação da minha empresa',
        },
        {
          value:
            'Conhecia os detalhes práticos necessários para começar a minha empresa',
        },
        {
          value: 'Sei como desenvolver um projeto empreendedor',
        },
        {
          value: 'Considero que criei uma empresa com sucesso',
        },
      ],
    },
    {
      name: 'Analisando as capacidades necessárias para se ser empreendedor',
      description:
        'Avalie as seguintes afirmações utilizando 1 (discordo completamente) a 7 (concordo totalmente)',
      type: 'matrix',
      isRequired: true,
      columns: [
        {
          value: 1,
        },
        {
          value: 2,
        },
        {
          value: 3,
        },
        {
          value: 4,
        },
        {
          value: 5,
        },
        {
          value: 6,
        },
        {
          value: 7,
        },
      ],
      rows: [
        {
          value: 'Consigo reconhecer uma oportunidade empreendedora',
        },
        {
          value: 'Sou uma pessoa criativa',
        },
        {
          value: 'Consigo resolver problemas',
        },
        {
          value: 'Tenho capacidade de liderança e capacidade de comunicação',
        },
        {
          value: 'Consigo conceber/desenvolver novos produtos e serviços',
        },
        {
          value:
            'Tenho capacidade de networking e para realizar contactos profissionais',
        },
      ],
    },
    {
      name: 'Já pensou seriamente em se tornar empreendedor?',
      description: 'Escolha uma opção:',
      type: 'radiogroup',
      visibleIf: "{Situação laboral}!='Empreendedor/Dono de empresa'",
      isRequired: true,
      choices: ['Sim', 'Não'],
    },
    {
      title: 'Indique o seu nível de concordância com as seguintes afirmações',
      name: 'Indique o seu nível de concordância com as seguintes afirmações 4',
      description:
        'Avalie de 1 (discordo totalmente) a 7 (concordo totalmente)',
      type: 'matrix',
      visibleIf: "{Situação laboral}!='Empreendedor/Dono de empresa'",
      isRequired: true,
      columns: [
        {
          value: 1,
        },
        {
          value: 2,
        },
        {
          value: 3,
        },
        {
          value: 4,
        },
        {
          value: 5,
        },
        {
          value: 6,
        },
        {
          value: 7,
        },
      ],
      rows: [
        {
          value:
            'Estou pronto para fazer qualquer coisa para me tornar empreendedor',
        },
        {
          value: 'O meu objetivo profissional é tornar-me um empreendedor',
        },
        {
          value:
            'Vou fazer todo o esforço para criar e gerir a minha própria empresa',
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
      name: 'Se criar uma empresa, qual a dimensão, em número de empregados, que gostaria de atingir?',
      description: 'Escolha uma opção:',
      type: 'radiogroup',
      visibleIf: "{Situação laboral}!='Empreendedor/Dono de empresa'",
      isRequired: true,
      choices: [
        'Trabalhador por conta própria (nenhum empregado)',
        'Microempresa  (até 9 empregados)',
        'Pequena empresa (de 10 a 49 empregados)',
        'Média empresa (de 50 a 249 empregados)',
        'Grande empresa ( mais de 249 empregados)',
      ],
    },
    {
      name: 'Qual a dimensão, em número de empregados, da sua empresa?',
      description: 'Escolha uma opção:',
      type: 'radiogroup',
      visibleIf: "{Situação laboral}='Empreendedor/Dono de empresa'",
      isRequired: true,
      choices: [
        'Trabalhador por conta própria (nenhum empregado)',
        'Microempresa  (até 9 empregados)',
        'Pequena empresa (de 10 a 49 empregados)',
        'Média empresa (de 50 a 249 empregados)',
        'Grande empresa ( mais de 249 empregados)',
      ],
    },
    {
      name: 'Em que medida considera os seguintes resultados como reflexo de sucesso da atividade empreendedora?',
      description: 'Assinale de 1 (em nenhuma medida) a 7 (completamente)',
      type: 'matrix',
      isRequired: true,
      columns: [
        {
          value: 1,
        },
        {
          value: 2,
        },
        {
          value: 3,
        },
        {
          value: 4,
        },
        {
          value: 5,
        },
        {
          value: 6,
        },
        {
          value: 7,
        },
      ],
      rows: [
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
      rateMin: 1,
      minRateDescription: 'Em nenhuma medida',
      rateMax: 7,
      maxRateDescription: 'Completamente',
      isRequired: true,
    },
    {
      name: 'Em que medida realizaria os seguintes comportamentos/ações para poder desenvolver a sua empresa?',
      description: 'Assinale de 1 (em nenhuma medida) a 7 (completamente)',
      type: 'matrix',
      visibleIf: "{Situação laboral}!='Empreendedor/Dono de empresa'",
      isRequired: true,
      columns: [
        {
          value: 1,
        },
        {
          value: 2,
        },
        {
          value: 3,
        },
        {
          value: 4,
        },
        {
          value: 5,
        },
        {
          value: 6,
        },
        {
          value: 7,
        },
      ],
      rows: [
        {
          value: 'Exportar uma parte significativa da produção',
        },
        {
          value:
            'Apresentar, com regularidade, novos produtos e/ou serviços aos seus clientes',
        },
        {
          value:
            'Introduzir, com regularidade, novos processos ou sistemas de produção',
        },
        {
          value: 'Desenvolver projectos de Pesquisa & Desenvolvimento',
        },
        {
          value:
            'Planear detalhadamente as diferentes áreas de atuação da empresa',
        },
        {
          value:
            'Estabelecer acordos de cooperação e parcerias com outras empresas',
        },
        {
          value: 'Oferecer formação especializada aos funcionários',
        },
        {
          value:
            'Aumentar a dimensao da empresa (funcionários, instalações, etc, …)',
        },
      ],
    },
    {
      name: 'Para poder desenvolver (fazer crescer) a sua empresa, em que medida teve de realizar as seguintes ações?',
      description: 'Assinale de 1 (em nenhuma medida) a 7 (totalmente)',
      type: 'matrix',
      visibleIf: "{Situação laboral}='Empreendedor/Dono de empresa'",
      isRequired: true,
      columns: [
        {
          value: 1,
        },
        {
          value: 2,
        },
        {
          value: 3,
        },
        {
          value: 4,
        },
        {
          value: 5,
        },
        {
          value: 6,
        },
        {
          value: 7,
        },
      ],
      rows: [
        {
          value: 'Exportar uma parte significativa da produção',
        },
        {
          value:
            'Apresentar, com regularidade, novos produtos e/ou serviços aos seus clientes',
        },
        {
          value:
            'Introduzir, com regularidade, novos processos ou sistemas de produção',
        },
        {
          value: 'Desenvolver projectos de Pesquisa & Desenvolvimento',
        },
        {
          value:
            'Planear detalhadamente as diferentes áreas de atuação da empresa',
        },
        {
          value:
            'Estabelecer acordos de cooperação e parcerias com outras empresas',
        },
        {
          value: 'Oferecer formação especializada aos funcionários',
        },
        {
          value:
            'Aumentar a dimensao da empresa (funcionários, instalações, etc, …)',
        },
      ],
    },
    {
      name:
        'Em que medida considera que é possível oferecer cursos de educação para o' +
        ' empreendedorismo que consigam desenvolver os seguintes aspetos?',
      description:
        'Assinale de 1 (não é possível de todo) a 7 (totalmente possível)',
      type: 'matrix',
      isRequired: true,
      columns: [
        {
          value: 1,
        },
        {
          value: 2,
        },
        {
          value: 3,
        },
        {
          value: 4,
        },
        {
          value: 5,
        },
        {
          value: 6,
        },
        {
          value: 7,
        },
      ],
      rows: [
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
          value:
            'As habilidades/capacidades necessárias para se ser empreendedor',
        },
        {
          value: 'A intenção de ser empreendedor',
        },
      ],
    },
    {
      name: 'Participou em algum curso/módulo que possa ser considerado educação para o empreendedorismo?',
      description: 'Escolha apenas uma:',
      type: 'radiogroup',
      simQual: true,
      isRequired: true,
      choices: ['Não'],
    },
    {
      name: 'Em que medida ajudou-o a desenvolver os seguintes aspecto?',
      description: 'Assinale de 1 (em nenhuma medida) a 7 (totalmente)',
      type: 'matrix',
      visibleIf:
        '{Participou em algum curso/módulo que possa ser considerado educação para o empreendedorismo?} notempty && ' +
        "{Participou em algum curso/módulo que possa ser considerado educação para o empreendedorismo?}!='Não'",
      columns: [
        {
          value: 1,
        },
        {
          value: 2,
        },
        {
          value: 3,
        },
        {
          value: 4,
        },
        {
          value: 5,
        },
        {
          value: 6,
        },
        {
          value: 7,
        },
      ],
      rows: [
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
          value:
            'As habilidades/capacidades necessárias para se ser empreendedor',
        },
        {
          value: 'A intenção de ser empreendedor',
        },
      ],
    },
    {
      name: 'Numa fase posterior serão selecionados alguns inqueridos para um estudo mais aprofundado. Pretende participar nesse estudo?',
      description: 'Escolha apenas uma:',
      type: 'radiogroup',
      isRequired: true,
      choices: ['Sim', 'Não'],
    },
    {
      title: 'Dados de Contacto',
      name: 'Dados de Contacto',
      type: 'panel',
      visibleIf:
        '{Numa fase posterior serão selecionados alguns inqueridos para um estudo mais aprofundado. Pretende participar nesse estudo?}="Sim"',
      description:
        ' O preenchimento dos seguintes dados permitirá o ' +
        'acompanhamento posterior da sua evolução. Qualquer informação fornecida ' +
        'será considerada estritamente confidencial, e só será  usada no âmbito deste projeto',
      elements: [
        {
          type: 'text',
          name: 'Nome',
          isRequired: true,
        },
        {
          type: 'text',
          name: 'Email',
          isRequired: true,
          validators: [
            {
              type: 'email',
            },
          ],
        },
        {
          type: 'text',
          name: 'Telemóvel',
        },
      ],
    },
  ],
};

export default surveyJSON;

