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


};

export default endPoints;
