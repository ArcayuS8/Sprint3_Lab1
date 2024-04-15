const productValidations = {
    title: {
      required: "El título es obligatorio",
      minLength: {
        value: 3,
        message: "El título debe tener al menos 3 caracteres.",
      },
      maxLength: {
        value: 50,
        message: "El título no puede tener más de 50 caracteres.",
      },
    },
    price: {
      required: "El precio es obligatorio",
      min: { value: 0, message: "El precio debe ser mayor que 0." },
    },
    description: {
      required: "La descripción es obligatoria",
      minLength: {
        value: 10,
        message: "La descripción debe tener al menos 10 caracteres.",
      },
      maxLength: {
        value: 500,
        message: "La descripción no puede tener más de 500 caracteres.",
      },
    },
    image: {
      required: "La URL de la imagen es obligatoria",
      pattern: {
        value: /^(ftp|http|https):\/\/[^ "]+$/,
        message: "Formato de URL no válido",
      },
    },
  };
  
  export { productValidations };
  