 export const firebaseConfig = {
  apiKey: "AIzaSyAKmXFysDatZbYPXaTUy9AiedtDCBq-IJ4",
  authDomain: "tienda-de-pizzas.firebaseapp.com",
  projectId: "tienda-de-pizzas",
  storageBucket: "tienda-de-pizzas.appspot.com",
  messagingSenderId: "254385766891",
  appId: "1:254385766891:web:eb110559d23c770b9219ae"
};
  
export const actionCodeSettingsVerification = {
  url:
    process.env.NODE_ENV === 'development'
      ? 'http://localhost:3000/'
      : 'linkDeProducción',
};

export const actionCodeSettingsForgotPassword = {
  url:
    process.env.NODE_ENV === 'development'
      ? 'http://localhost:3000/login'
      : 'linkDeProducción',
};