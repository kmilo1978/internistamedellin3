export const PHONE_NUMBERS = [
  {
    number: "+57 300 989 5852",
    numberClean: "+573009895852",
    display: "+57 300 989 5852"
  }
];

export const getRandomPhoneIndex = (): number => {
  return 0;
};

export const getPhoneByIndex = (index?: number) => {
  return PHONE_NUMBERS[0];
};

export const getPhoneNumber = (index?: number) => {
  return getPhoneByIndex(index).numberClean;
};

export const getPhoneDisplay = (index?: number) => {
  return getPhoneByIndex(index).display;
};

export const WHATSAPP_PREFIX = "https://wa.me";

const DEFAULT_WHATSAPP_MESSAGE = "¡Hola! Gracias por escribirnos desde la web de Internista Medellín. El Dr. Willmer Obregón y su equipo están listos para ayudarte. ¿En qué podemos apoyarte hoy?";

export const getWhatsAppLink = (index?: number, message?: string) => {
  const phone = getPhoneByIndex(index);
  const text = encodeURIComponent(message || DEFAULT_WHATSAPP_MESSAGE);
  return `${WHATSAPP_PREFIX}/${phone.numberClean.replace(/\D/g, '')}?text=${text}`;
};

export const getPhoneLink = (index?: number) => {
  return `tel:${getPhoneByIndex(index).numberClean}`;
};

export const LOCATION = {
  mapsLink: "https://maps.app.goo.gl/ATcuaGZM9YdvY7kFA",
  address: "Biencrecer Cra 81 #27-17 Consultorio 1, Belén La Palma, Medellín, Antioquia"
};
