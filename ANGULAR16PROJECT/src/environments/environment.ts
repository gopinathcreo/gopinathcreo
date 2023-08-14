var is_localhost = false;
// var newURL =  window.location.host.split(":")[0];
// if (newURL == 'localhost' || newURL == '127.0.0.1') {
//   is_localhost = true;
// }


export const environment = {
  production: false,
  baseURL: '',
  is_localhost:is_localhost,
  login: "/api/v1/user/login/",
  scanList: "/api/v1/scan/",
  scanGet: "/api/v1/scan/{id}/",
  scanEdit: "/api/v1/scan/{id}/", 
  userList: "/api/v1/user/",
  user: "/api/v1/user/",
  userGet: "/api/v1/user/{id}/",
  userEdit: "/api/v1/user/{id}/",
  scanlatlng: "/api/v1/scan/latlng/",
  scanFromIdsList: "/api/v1/scan/from/ids/",
  scanEvents: '/api/v1/scan/events/',
  scandetail: '/api/v1/scan/{id}/',
  patientList: "/api/v1/user/patient/",
  patientGet: "/api/v1/user/patient/{id}/",
};
