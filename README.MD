![Django](https://img.shields.io/static/v1?label=Django&message=4.2.3&color=092E20&labelColor=white&logo=django&logoColor=092E20)
![SQLite](https://img.shields.io/static/v1?label=SQLite&message=3.41.2&color=white&labelColor=black&logo=sqlite&logoColor=white)
![Jupyter](https://img.shields.io/static/v1?label=Jupyter&message=1.0.0&color=orange&labelColor=white&logo=jupyter)
![PIP](https://img.shields.io/static/v1?label=PIP&message=23.1.2&color=yellow&labelColor=3775A9&logo=pypi&logoColor=white)

# Django URL Shortener


## Table of Contents

- [🌟 Introduction](#introduction)
- [⚙️ Installation](#installation)
- [🚀 Usage](#usage)
- [📦 Dependencies](#dependencies)
- [🔧 Configuration](#configuration)
- [📚 Documentation](#documentation)
- [❗️ Troubleshooting](#troubleshooting)



<h2 id="introduction">🌟 Introduction</h2>

Django app to shorten URLs.

<h2 id="installation">⚙️ Installation</h2>

To get the project up and running locally on your machine, follow these steps:

1. **Clone the repository:**
    ```sh
    git clone https://github.com/mmedoo/django-url-shortener.git
    cd django-url-shortener
    ```

2. **Set up a virtual environment:**
    ```sh
    python3 -m venv venv
    source venv/bin/activate
    ```

3. **Install dependencies:**
    ```sh
    pip install -r requirements.txt
    ```

4. **Run migrations:**
    ```sh
    python manage.py migrate
    ```

5. **Start the development server:**
    ```sh
    python manage.py runserver
    ```

	
	
<h2 id="usage">🚀 Usage</h2>

### Shorten a URL
1. Navigate to the home page.
2. Enter the URL you want to shorten in the provided form.
3. Click the "Shorten URL" button.
4. The shortened URL will be displayed on the screen.

### Retrieve a URL
1. Enter the shortened key in the URL path (e.g., `http://localhost:8000/<shortened-key>`).
2. You will be redirected to the original URL.


<h2 id="dependencies">📦 Dependencies</h2>

- Django
- Python 3.x
- Other dependencies listed in `requirements.txt`

<h2 id="configuration">🔧 Configuration</h2>

### Database
By default, this project uses SQLite. You can configure other databases (e.g., PostgreSQL, MySQL) by updating the `DATABASES` setting in `settings.py`.

<h2 id="documentation">📚 Documentation</h2>

### Views
- **getURL(request, key)**: Retrieves the original URL using the shortened key and renders a template for redirection.
- **createLink(request)**: Creates a shortened URL key if the URL is valid and stores it in the database if it doesn't already exists, otherwise, it returns the existing URL.

### API Endpoints
#### GET `/`
Home page to shorten URLs.

#### GET `/create/`
Endpoint to handle URL shortening.

#### GET `/{key}`
Endpoint to handle redirection to the original URL.

### Jupyter Notebook
You can use this Jupyter Notebook to interact with the database using Django. For more info click [HERE](https://github.com/mmedoo/django-in-jupyter)


<h2 id="troubleshooting">❗️ Troubleshooting</h2>

### Common Issues
- **Server not starting**: Ensure all dependencies are installed and the database migrations have been applied.
- **Invalid URL**: Make sure the URL entered is valid and follows the correct format.