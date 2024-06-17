# Ninjapay Plugins - #Build your own plugins!

This project serves as a base structure for building plugins for Ninjapay using Node.js and TypeScript. It provides a well-organized framework that developers can use to create, extend, and integrate their own plugins.

## Project Structure

![Ninjapay Project Structure](https://github.com/geekk99/plugins/assets/98507149/8859d9ba-7ba4-4302-a9e1-4976eeef34df)


- **src**: Contains the main application source code.
  - **api**: Define API endpoints.
  - **config**: Configuration files.
  - **helpers**: Utility functions.
  - **middleware**: Middleware functions.
  - **views**: View templates.
- **app.ts**: Entry point of the application.
- **db.ts**: Database connection and setup.
- **index.ts**: Main index file.
- **.babelrc.json**: Babel configuration.
- **.env**: Environment variables.
- **.gitignore**: Git ignore file.
- **buildspec.yml**: Build specifications for CI/CD.
- **db.sql**: Database schema.
- **package-lock.json**: Lock file for npm dependencies.
- **package.json**: Project metadata and dependencies.
- **tsconfig.json**: TypeScript configuration.

## Getting Started

Follow these instructions to set up the project locally.

### Prerequisites

- Node.js
- npm (Node Package Manager)
- A PostgreSQL database.

### Installation

1. **Clone the repository**:
    ```sh
    git clone https://github.com/ninjapay/plugins.git
    cd plugins
    ```

2. **Install dependencies**:
    ```sh
    npm install
    ```

3. **Set up the database** using the schema provided in `db.sql`:
    ```sql
    -- Example schema
    CREATE TABLE plugins (
        id SERIAL PRIMARY KEY,
        name VARCHAR(100) NOT NULL,
        description TEXT,
        version VARCHAR(10),
        created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
    );
    ```

4. **Create a `.env` file** and add your environment variables:
    ```plaintext
    DB_HOST=localhost
    DB_USER=user
    DB_PASS=password
    DB_NAME=Ninjapay
    ```

5. **Run the application**:
    ```sh
    npm start
    ```

## Usage

- **Adding API Endpoints**: Place your route handlers in `src/api/`.
- **Configuring Settings**: Add or modify configuration files in `src/config/`.
- **Creating Helpers**: Add utility functions in `src/helpers/`.
- **Middleware**: Add your custom middleware in `src/middleware/`.
- **Views**: Place your view templates in `src/views/`.
- **Reponse**: Follow response structure as mentioned in `src/helpers/response.ts`..
- **Apikey**: You need to create Apikey using Ninjapay.me https://ninjapay.me/pg section to use in your plugins

## Contributing

We welcome contributions to improve Ninjapay. Follow these steps to contribute:

1. **Fork the repository**.
2. **Create a new branch** (`git checkout -b feature-branch`).
3. **Make your changes and commit** (`git commit -am 'Add new feature'`).
4. **Push to the branch** (`git push origin feature-branch`).
5. **Create a new Pull Request**.

## License

This project is licensed under the MIT License.

## Contact

If you have any questions or feedback, please open an issue or contact https://t.me/iamNinjapay/275.

---

#Keep Building #BUIDL

Thank you for using Ninjapay Plugins! We hope it helps you build amazing plugins.



