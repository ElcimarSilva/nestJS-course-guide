npm init -y
npm install @nestjs/common@7.6.17 @nestjs/core@7.6.17 @nestjs/platform-express@7.6.17 reflect-metadata@0.1.13 typescript@4.3.2


Fluxo basico do back
- Request
    - Pipe (Validate data contained in the request)
    - Guard (Make sure the user is authenticated)
    - Controller (Route the request to a particular function)
    - Service (Run some business logic)
    - Repository (Access a database)