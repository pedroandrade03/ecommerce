# Guia de Configuração do Projeto

Este guia descreve como configurar e executar o projeto, incluindo tanto o backend (Django) quanto o frontend (Next.js).

## Pré-requisitos

Certifique-se de ter o Python, Node.js e npm (ou yarn) instalados em seu sistema.

## Configuração do Backend

1. **Navegue até a pasta do backend:**

    ```sh
    cd backend
    ```

2. **Criar e Ativar um Ambiente Virtual**

    Crie um ambiente virtual para isolar as dependências do projeto:

    ```sh
    python -m venv venv
    ```

    Ative o ambiente virtual:

    - **Windows:**
        ```sh
        .\venv\Scripts\activate
        ```
    - **macOS/Linux:**
        ```sh
        source venv/bin/activate
        ```

3. **Instalar as Dependências**

    Com o ambiente virtual ativado, instale as dependências necessárias:

    ```sh
    pip install -r requirements.txt
    ```

4. **Configurar o Banco de Dados**

    Execute as migrações para configurar o banco de dados:

    ```sh
    python manage.py migrate
    ```

5. **Criar um Superusuário**

    Crie um superusuário para acessar a interface administrativa do Django:

    ```sh
    python manage.py createsuperuser
    ```

6. **Executar o Servidor de Desenvolvimento**

    Inicie o servidor de desenvolvimento:

    ```sh
    python manage.py runserver
    ```

## Configuração do Frontend

1. **Navegue até a pasta do frontend:**

    ```sh
    cd frontend
    ```

2. **Instalar as Dependências**

    Instale as dependências necessárias:

    ```sh
    npm install
    ```

    ou, se você estiver usando yarn:

    ```sh
    yarn install
    ```

3. **Executar o Servidor de Desenvolvimento**

    Inicie o servidor de desenvolvimento do Next.js:

    ```sh
    npm run dev
    ```

    ou, se você estiver usando yarn:

    ```sh
    yarn dev
    ```

## Executando o Projeto

Agora, com ambos os servidores de desenvolvimento em execução, você pode acessar o frontend através do endereço fornecido pelo Next.js (normalmente `http://localhost:3000`) e o backend através do endereço fornecido pelo Django (normalmente `http://localhost:8000`).

**Nota:** Certifique-se de que ambos os servidores estejam rodando simultaneamente para garantir a comunicação correta entre o frontend e o backend.