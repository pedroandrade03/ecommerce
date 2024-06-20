### 1. Criar e Ativar um Ambiente Virtual

Crie um ambiente virtual para isolar as dependências do projeto:

python -m venv venv

Ative o ambiente virtual:

- **Windows:**
    .\venv\Scripts\activate
- **macOS/Linux:**
    source venv/bin/activate

### 2. Instalar as Dependências

Com o ambiente virtual ativado, instale as dependências necessárias:

pip install -r requirements.txt

### 3. Configurar o Banco de Dados

Execute as migrações para configurar o banco de dados:

python manage.py migrate

### 4. Criar um Superusuário

Crie um superusuário para acessar a interface administrativa do Django:

python manage.py createsuperuser

### 5. Executar o Servidor de Desenvolvimento

Inicie o servidor de desenvolvimento:

python manage.py runserver

