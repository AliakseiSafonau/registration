import React from "react"

const schema = {
    "firstName": {
      "required": true,
      "minLength": "2",
      "maxLength": "30"
    },
    "lastName": {
      "required": true,
      "minLength": "2",
      "maxLength": "30"
    },
    "mobilePhone": {
      "required": true,
      "regExp": "^\\+375\\d{9}$"
    },
    "password": {
      "required": true,
      "minLength": "8",
      "maxLength": "20"
    },
    "email": {
      "required": true,
      "regExp": "^[_A-Za-z0-9-\\+]+(\\.[_A-Za-z0-9-]+)*@[A-Za-z0-9-]+(\\.[A-Za-z0-9]+)*(\\.[A-Za-z]{2,})$"
    },
    "birthday": {
      "required": true,
      "minAge": "18",
      "maxAge": "90"
    },
    "ocean": {
      "required": true,
      "oneOf": [
        "Atlantic",
        "Pacific",
        "Indian",
        "Arctic"
      ]
    },
    "hobby": {
      "required": true,
      "anyOf": [
        "Sport",
        "Beauty",
        "IT",
        "Pets"
      ]
    },
    "sex": {
      "required": true
    }
}

type FormData = {
    mobilePhone : string,
    email : string,
    password : string,
    repeatPassword : string
}

export const validate = (data: FormData) => {
  let response: any[] = [];
  try {
    for (let key in schema) {
      if (key === 'mobilePhone') {
        if (data.mobilePhone) {
          if (data.mobilePhone.match(schema['mobilePhone']['regExp'])){response[0] = true} else {response[0] = {'mobilePhone':'Please enter a valid phone number'}}
        } else {response[0] = {'mobilePhone': 'This field cannot be empty'}}
      }
      if (key === 'email') {
        if (data.email) {
          if (data.email.match(schema['email']['regExp'])){response[1] = true} else {response[1] = {'email': 'Please enter a valid email address'}}
        } else {response[1] = {'email': 'This field cannot be empty'}}
      }
      if (key === 'password') {
        if (data.password) {
          if (data.password.length >= Number(schema['password']['minLength']) && data.password.length <= Number(schema['password']['maxLength'])) {response[2] = true} else {response[2] = {'password': 'Please enter correct password'}}
          if (data.repeatPassword) {
            if (data.password === data.repeatPassword) {response[3] = true} else {response[3] = {'repeatPassword':'Passwords do not match'}}
          } else {response[3] = {'repeatPassword': 'This field cannot be empty'}}
        } else {response[2] = {'password':'This field cannot be empty'}}
      }
    }
   
    return response.find((el) => typeof el !== 'boolean')
  }
  catch (e) {
    console.log ('error', e)
  }
}