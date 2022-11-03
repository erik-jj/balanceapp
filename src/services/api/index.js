const API = process.env.REACT_APP_PUBLIC_API_URL;
const VERSION = process.env.REACT_APP_PUBLIC_API_VERSION;

const endPoints = {
  users: {
    createUser: `${API}/api/${VERSION}/users`,
    confirmEmail: `${API}/api/${VERSION}/users/confirm-email`,
  },
  auth: {
    login: `${API}/api/${VERSION}/auth/login`,
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
