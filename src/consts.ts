const enviroment: string = window.location.href

const services: any = {
  'http://localhost:4200/': {
    api: 'http://localhost:8080',
    auth: 'http://localhost:5001/api',
    signup: 'http://localhost:5002/api'
  },
  'http://localhost/': {
    api: 'http://localhost:8080',
    auth: 'http://localhost:5001/api',
    signup: 'http://localhost:5002/api'
  },
  'http://54.226.56.217/': { // [#IP_PUBLIC#]
    api: 'http://54.226.56.217:8080', // [#IP_PUBLIC#]
    auth: 'http://54.226.56.217:5001/api', // [#IP_PUBLIC#]
    signup: 'http://54.226.56.217:5002/api' // [#IP_PUBLIC#]
  }
}

export default {
  api: services[enviroment].api,
  auth: services[enviroment].auth,
  signup: services[enviroment].signup
}
