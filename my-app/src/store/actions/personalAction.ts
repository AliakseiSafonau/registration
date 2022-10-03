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

type PersonalData = {
    firstName : string,
    lastName : string,
    sex : string,
    day: string,
    month: string,
    year: string,
    select : string,
    hobby : {[index : string] : boolean}
}

export const personvalid = (data: PersonalData) => {
    const hobbylist = [];
    const obj = data.hobby;
    for (let anotherhobby in obj) {
        if (obj[anotherhobby]) {
            hobbylist.push(anotherhobby)
        }
    }

    return  `
        ${data.firstName} ${data.lastName} 
        sex : ${data.sex}
        birthday : ${data.day}.${data.month}.${data.year}
        ${(data.select) ? "Your Favorite Ocean : " + data.select : ""}
        ${(hobbylist.length) ? `Your hobby: ${ hobbylist.map(element => element).join(", ")}` : ""}
    `
}