const devCreds = {
  apiKey: "AIzaSyBbXTqbKw0vk_nj6ILnki3dQYua9eKwuYE",
  authDomain: "muse-279420.firebaseapp.com",
  databaseURL: "https://muse-279420.firebaseio.com",
  projectId: "muse-279420",
  storageBucket: "muse-279420.appspot.com",
  messagingSenderId: "300631081298",
  appId: "1:300631081298:web:89aae76d61adba15f4ba8b",
  measurementId: "G-3JYD6B1TWK"
};

const stagingCreds = {
  apiKey: "AIzaSyBbXTqbKw0vk_nj6ILnki3dQYua9eKwuYE",
  authDomain: "muse-279420.firebaseapp.com",
  databaseURL: "https://muse-279420.firebaseio.com",
  projectId: "muse-279420",
  storageBucket: "muse-279420.appspot.com",
  messagingSenderId: "300631081298",
  appId: "1:300631081298:web:89aae76d61adba15f4ba8b",
  measurementId: "G-3JYD6B1TWK"
};

const prodCreds = {
  apiKey: "AIzaSyBbXTqbKw0vk_nj6ILnki3dQYua9eKwuYE",
  authDomain: "muse-279420.firebaseapp.com",
  databaseURL: "https://muse-279420.firebaseio.com",
  projectId: "muse-279420",
  storageBucket: "muse-279420.appspot.com",
  messagingSenderId: "300631081298",
  appId: "1:300631081298:web:89aae76d61adba15f4ba8b",
  measurementId: "G-3JYD6B1TWK"
};

if (typeof window === 'object') {
  const domain = window.location.hostname;
  if ((domain === 'localhost')
    || (domain === 'dev-simpleagent-client.herokuapp.com')) {
    module.exports = devCreds;
  } else if (domain === 'staging-simpleagent-client.herokuapp.com') {
    module.exports = stagingCreds;
  } else if ((domain === 'realtysimple-client.herokuapp.com')
    || (domain.endsWith('realtysimple.com'))) {
    module.exports = prodCreds;
  } else {
    module.exports = devCreds;
  }
}
