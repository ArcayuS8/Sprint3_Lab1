const userValidations = {
    nombre: {
      required: "Ingresa un nombre",
      minLength: {
        value: 3,
        message: "El nombre debe tener al menos 3 caracteres.",
      },
      maxLength: {
        value: 50,
        message: "El nombre no puede tener más de 50 caracteres.",
      },
    },
    email: {
      required: "Ingrese un email.",
      pattern: {
        value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i,
        message: "Debe introducir un email válido.",
      },
    },
    password: {
      required: "Ingrese una contraseña.",
      minLength: {
        value: 6,
        message: "La contraseña debe tener al menos 6 caracteres.",
      },
    },
  };
  
  export { userValidations };
  