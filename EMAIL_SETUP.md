# 📧 Configuração do Sistema de Email

O formulário de contato está configurado para enviar emails usando **EmailJS**.

## 🚀 Como Configurar

### Passo 1: Criar Conta no EmailJS

1. Acesse [https://www.emailjs.com/](https://www.emailjs.com/)
2. Clique em **Sign Up** e crie uma conta gratuita
3. Faça login na sua conta

### Passo 2: Configurar o Email Service

1. No dashboard do EmailJS, clique em **Email Services**
2. Clique em **Add New Service**
3. Escolha seu provedor de email (Gmail, Outlook, etc.)
4. Siga as instruções para conectar sua conta de email
5. Anote o **Service ID** que será criado

### Passo 3: Criar um Template

1. No dashboard, clique em **Email Templates**
2. Clique em **Create New Template**
3. Use este template de exemplo:

```
Assunto: Nova Mensagem do Site NIMU Studio - {{from_name}}

Olá {{to_name}},

Você recebeu uma nova mensagem através do formulário de contato do site:

Nome: {{from_name}}
Email: {{from_email}}
Telefone: {{phone}}

Mensagem:
{{message}}

---
Esta mensagem foi enviada automaticamente pelo site NIMU Studio.
```

4. Salve o template e anote o **Template ID**

### Passo 4: Obter a Public Key

1. No dashboard, clique em **Account** (ou no seu nome no canto superior direito)
2. Vá para a aba **General**
3. Copie a **Public Key** (também chamada de User ID)

### Passo 5: Configurar as Variáveis de Ambiente

1. Crie um arquivo `.env` na raiz do projeto (copie do `.env.example`):

```bash
cp .env.example .env
```

2. Edite o arquivo `.env` e adicione suas credenciais:

```env
VITE_EMAILJS_SERVICE_ID=service_xxxxxxx
VITE_EMAILJS_TEMPLATE_ID=template_xxxxxxx
VITE_EMAILJS_PUBLIC_KEY=xxxxxxxxxxxxx
```

3. **IMPORTANTE**: Adicione `.env` ao `.gitignore` para não commitar as credenciais:

```
# Environment variables
.env
.env.local
```

### Passo 6: Testar

1. Reinicie o servidor de desenvolvimento:

```bash
npm run dev
```

2. Acesse o site e teste o formulário de contato
3. Verifique se o email foi recebido

## 🎯 Limites do Plano Gratuito

- **200 emails por mês** (EmailJS Free)
- Se precisar de mais, pode fazer upgrade para o plano pago

## 🔒 Segurança

As credenciais do EmailJS ficam no arquivo `.env` que **NÃO** é commitado no Git. No Hostinger, você precisará adicionar essas variáveis de ambiente nas configurações do site ou criar o arquivo `.env` manualmente no servidor.

## 🛠️ Alternativas

Se preferir outra solução, aqui estão alternativas:

### Opção 2: Web3Forms (Mais Simples)
- Gratuito até 250 emails/mês
- Não precisa de biblioteca JavaScript
- Basta adicionar uma chave de API no formulário

### Opção 3: FormSubmit
- Totalmente gratuito
- Sem limite de emails
- Não precisa de JavaScript
- Apenas adiciona o email no action do form

### Opção 4: Backend Próprio
- Total controle
- Criar API em Node.js + Nodemailer
- Requer servidor backend

## 📞 Suporte

Se tiver problemas, verifique:
1. As credenciais no arquivo `.env` estão corretas
2. O serviço de email está conectado no EmailJS
3. O console do navegador para ver erros
4. Sua conta EmailJS não atingiu o limite mensal
