# Getting Filey on your local machine

## Clone repository and install dependencies

```
git clone https://github.com/this-is-you/filey.git
```

```
cd filey
```

```
npm install
```

## Connecting Firebase
Create a new project at [firebase](https://firebase.google.com/) and get your api keys.

Create a dev.js file in ```filey/src/config```

![image](https://user-images.githubusercontent.com/36117697/114625813-a6447180-9c67-11eb-90ad-9ddd6786eb64.png)

Copy the following code into your ```dev.js``` file and replace the 'key' string with the corresponding key.

```
module.exports = {
    apiKey: 'key',
    authDomain: 'key',
    projectId: 'key',
    storageBucket: 'key',
    messagingSenderId: 'key',
    appId: 'key',
};
```
