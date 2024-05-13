export const getAllCategories = () => {
    return [{value: "AYUD", label: "Ayuda/Orientación"},
            {value: "ACAD", label: "Académico"},
            {value: "CONV", label: "Convivencia"},
            {value: "EMPL", label: "Empleos"},
            {value: "OTRO", label: "Otro"}];
    }

export const getCategoria = (etiqueta) => {
    switch (etiqueta) {
      case "AYUD":
        return "Ayuda/Orientación";
      case "ACAD":
        return "Académico";
      case "CONV":
        return "Convivencia";
      case "EMPL":
        return "Empleos";
      default:
        return "Varias";
    }
  };

  export const getPrivacidad = (privacidad) => {
    switch (privacidad) {
      case "PUB":
        return "Público";
      case "CON":
        return "Solo contactos";
      default:
        return "Desconocido";
    }
  };