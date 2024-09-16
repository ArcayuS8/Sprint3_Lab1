# Ecommerce App

¡Bienvenido/a a mi proyecto de ecommerce!

Este proyecto es una aplicación web de ecommerce desarrollada utilizando React.js. A continuación, te explico cómo puedes visualizar y ejecutar esta aplicación en tu propio entorno.

## Pasos para visualizar la aplicación:

1. **Clona el repositorio**
   Primero, clona este repositorio en tu máquina local. Puedes hacerlo ejecutando el siguiente comando en tu terminal:

   ```bash
   git clone https://github.com/ArcayuS8/Ecommerce.git

2. **Instala las dependencias**
   Una vez clonado el repositorio, navega hasta el directorio de la aplicación y ejecuta el siguiente comando para instalar todas las dependencias necesarias:
   ```bash
   cd Ecommerce
   npm install

3. **Preparamos la fakeApi**
   Para preparar la Api de la que vamos a servir los datos primero "navegamos" hasta la carpeta donde tenemos los datos con el siguiente comando:
   ```
   cd src/assets
   ```
   Luego, introducimos el siguiente comando para "conectarnos" a la API:
   ```
   json-server --watch db.json
   ```
   Si hubo algún problema, ejecute primero el siguiente comando y luego vuelva a ejecutar el anterior:
   ```
   Set-ExecutionPolicy -Scope Process -ExecutionPolicy Bypass
   ```

5. **Inicia la aplicación**
   Una vez que todas las dependencias estén instaladas y nos hemos "conectado" a nuestra fakeApi, podemos iniciar la aplicación ejecutando el siguiente comando:
   ```
   npm run dev
   ```
   Esto iniciará el servidor de desarrollo y abrirá la aplicación en tu navegador predeterminado.

¡Y eso es todo! Ahora deberías poder explorar y disfrutar de la aplicación de ecommerce en tu propio entorno local.
