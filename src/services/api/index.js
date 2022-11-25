const API = process.env.REACT_APP_PUBLIC_API_URL;
const VERSION = process.env.REACT_APP_PUBLIC_API_VERSION;

const endPoints = {
  users: {
    createUser: `${API}/api/${VERSION}/users`,
    confirmEmail: `${API}/api/${VERSION}/users/confirm-email`,
  },
  auth: {
    login: `${API}/api/${VERSION}/auth/login`,
    refresh: `${API}/api/${VERSION}/auth/refresh`,
  },
  reasons: {
    getReasons: `${API}/api/${VERSION}/reasons/`,
    createReason: `${API}/api/${VERSION}/reasons/`,
    updateReason: (id) => `${API}/api/${VERSION}/reasons/${id}`,
    deleteReason: (id) => `${API}/api/${VERSION}/reasons/${id}`,
  },
  registers: {
    getRegisters: (month, year) =>
      `${API}/api/${VERSION}/registers/month=${month}&year=${year}`,
    getDashboardData: `${API}/api/${VERSION}/registers/dashboard`,
    createRegister: `${API}/api/${VERSION}/registers/`,
    updateRegister: (id) => `${API}/api/${VERSION}/registers/${id}`,
    deleteRegister: (id) => `${API}/api/${VERSION}/registers/${id}`,
  },

  //   auth: {
  //     login: `${API}/api/${VERSION}/auth/login`,
  //     profile: `${API}/api/${VERSION}/auth/profile`,
  //   },
  //   products: {
  //     getProduct: (id) => `${API}/api/${VERSION}/products/${id}/`,
  //     getProducts: (limit, offset) => `${API}/api/${VERSION}/products?limit=${limit}&offset=${offset}`,
  //     addProducts: `${API}/api/${VERSION}/products`,
  //     updateProducts: (id) => `${API}/api/${VERSION}/products/${id}/`,
  //     deleteProduct: (id) => `${API}/api/${VERSION}/products/${id}/`,
  //   },
  //   categories: {
  //     getCategoriesList: `${API}/api/${VERSION}/categories/`,
  //     addCategory: `${API}/api/${VERSION}/categories/`,
  //     getCategoryItems: (id) => `${API}/api/${VERSION}/categories/${id}/products/`,
  //     updateCategory: (id) => `${API}/api/${VERSION}/categories/${id}/`,
  //   },
  //   files: {
  //     addImage: `${API}/api/${VERSION}/files/upload/`,
  //   },
};

export default endPoints;
