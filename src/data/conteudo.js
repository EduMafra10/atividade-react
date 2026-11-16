import {
  FiUserCheck, FiBookOpen, FiCheckSquare, FiMail, FiKey, FiBarChart2,
  FiStar, FiSettings, FiShield, FiLock, FiClock, FiAlertTriangle,
  FiDatabase, FiServer, FiCode, FiCloud, FiTerminal, FiSmartphone,
} from 'react-icons/fi'

export const SISTEMA_URL = 'https://safeclick-umc.vercel.app'
export const REPO_URL = 'https://github.com/EduMafra10/SafeClick'

export const numeros = [
  { valor: '4', rotulo: 'tipos de simulação de golpe' },
  { valor: '2FA', rotulo: 'login com dois fatores' },
  { valor: '15+', rotulo: 'caracteres mínimos de senha' },
  { valor: '30 min', rotulo: 'expiração por inatividade' },
]

export const funcionalidades = [
  {
    grupo: 'Conta e acesso',
    itens: [
      { icone: FiUserCheck, titulo: 'Cadastro seguro', texto: 'Confirmação de e-mail, senha de 15 a 128 caracteres e aceite dos Termos de Uso. Senhas armazenadas com hash scrypt.' },
      { icone: FiSmartphone, titulo: 'Login com 2FA', texto: 'E-mail e senha, depois o código do aplicativo autenticador validado pelo Twilio Verify.' },
      { icone: FiMail, titulo: 'Recuperação de senha', texto: 'Link de uso único enviado por e-mail, válido por 30 minutos.' },
      { icone: FiSettings, titulo: 'Minha conta', texto: 'Troca de nome, ícone e senha, além de exclusão de conta reversível em até 30 dias, com anonimização dos dados depois disso.' },
    ],
  },
  {
    grupo: 'Atividades educativas',
    itens: [
      { icone: FiBookOpen, titulo: 'Conteúdos', texto: 'Artigos sobre golpes e segurança digital, com registro de leitura concluída.' },
      { icone: FiCheckSquare, titulo: 'Quizzes e Oficina SafeClick', texto: 'Questões de múltipla escolha e oficinas com cartas, corrigidas no servidor e com explicação de cada resposta.' },
      { icone: FiAlertTriangle, titulo: 'Simulações de golpe', texto: 'E-mail, SMS, chat e loja falsos. Cada escolha mostra a consequência e as pistas numeradas do golpe.' },
      { icone: FiKey, titulo: 'Laboratório de senhas', texto: 'Analisador de força que roda no navegador, gerador de senhas e frases-senha e o desafio "Qual vazou mais?".' },
      { icone: FiBarChart2, titulo: 'Meu progresso', texto: 'Desempenho por período e conquistas desbloqueadas.' },
      { icone: FiStar, titulo: 'Avaliações', texto: 'Notas de 1 a 5 e comentários opcionais em conteúdos e quizzes.' },
    ],
  },
  {
    grupo: 'Área administrativa',
    itens: [
      { icone: FiBarChart2, titulo: 'Visão geral', texto: 'Indicadores de uso em 7, 30 ou 90 dias, questões mais erradas e exportação para Excel.' },
      { icone: FiUserCheck, titulo: 'Gestão de contas', texto: 'Busca, filtros, redefinição do autenticador e promoção a administrador.' },
      { icone: FiSettings, titulo: 'Editor de catálogo', texto: 'Cria e edita conteúdos, quizzes, oficinas, simulações e páginas, com pré-visualização e publicação de versões.' },
      { icone: FiShield, titulo: 'Auditoria', texto: 'Registro de cadastros, logins, acessos negados, atividades e ações administrativas.' },
    ],
  },
]

export const medidasSeguranca = [
  { icone: FiLock, titulo: 'Senhas com scrypt', texto: 'A senha nunca é guardada em texto puro, apenas o hash.' },
  { icone: FiSmartphone, titulo: 'Segundo fator', texto: 'Código do aplicativo autenticador validado pelo Twilio Verify. As credenciais do Twilio nunca chegam ao navegador.' },
  { icone: FiAlertTriangle, titulo: 'Limite de tentativas', texto: 'Tentativas de login e de código são limitadas para barrar ataques de força bruta.' },
  { icone: FiClock, titulo: 'Sessão com prazo', texto: 'A sessão expira após 30 minutos sem uso ou 8 horas no total.' },
  { icone: FiShield, titulo: 'Cookies e cabeçalhos', texto: 'Cookies HttpOnly e SameSite=Lax, cache no-store nas páginas autenticadas e cabeçalhos de segurança.' },
  { icone: FiCheckSquare, titulo: 'Validação no servidor', texto: 'Toda entrada é validada no back-end, com proteção CSRF e SQL parametrizado.' },
]

export const fluxoLogin = [
  { passo: '01', titulo: 'E-mail e senha', texto: 'O usuário informa as credenciais e o servidor confere o hash.' },
  { passo: '02', titulo: 'Autenticador', texto: 'No primeiro acesso, um QR Code gerado no servidor configura o aplicativo.' },
  { passo: '03', titulo: 'Código de 6 dígitos', texto: 'O código é validado pelo Twilio Verify.' },
  { passo: '04', titulo: 'Sessão criada', texto: 'Só então a sessão é aberta, com prazo de expiração.' },
]

export const tecnologias = [
  { categoria: 'Back-end', icone: FiServer, itens: ['Python', 'Flask', 'Flask-Login', 'Flask-WTF (CSRF)', 'Werkzeug'] },
  { categoria: 'Banco de dados', icone: FiDatabase, itens: ['PostgreSQL (Neon)', 'Psycopg 3', 'SQL parametrizado, sem ORM'] },
  { categoria: 'Front-end', icone: FiCode, itens: ['Jinja2', 'HTML e CSS', 'JavaScript', 'Chart.js', 'zxcvbn-ts'] },
  { categoria: 'Integrações', icone: FiMail, itens: ['Twilio Verify', 'Gmail SMTP', 'Pwned Passwords API', 'qrcode', 'openpyxl'] },
  { categoria: 'Qualidade', icone: FiTerminal, itens: ['Pytest com serviços simulados', 'Flake8'] },
  { categoria: 'Hospedagem', icone: FiCloud, itens: ['Vercel', 'Região gru1 (São Paulo)'] },
]

export const equipe = [
  { nome: 'Eduardo Mafra dos Santos', papel: 'Desenvolvedor', iniciais: 'EM' },
  { nome: 'Humberto Ribeiro Bezerra', papel: 'Desenvolvedor', iniciais: 'HR' },
  { nome: 'João Henrique Alves de Souza', papel: 'Desenvolvedor', iniciais: 'JH' },
]

export const orientacao = [
  { nome: 'Bruno Messias', papel: 'Orientador', iniciais: 'BM' },
  { nome: 'Alessandro Aparecido da Silva Horas', papel: 'Coorientador de PFC', iniciais: 'AH' },
]
