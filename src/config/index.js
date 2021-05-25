module.exports = {
    // Config
    get Settings() {
      return require('./settings').default;
    },
    get Colors() {
      return require('./styles').colors;
    },
    get AxiosConfig() {
      return require('./axios').default;
    },
  };