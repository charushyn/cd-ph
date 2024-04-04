const createCardUser = async (values : {name: string, email: string, phone: string}) => {

    let answer;

        await fetch('https://cdfinance.planfix.com/rest/contact/', {
        method: 'POST',
        headers: {
            'accept': 'application/json',
            'Authorization': 'Bearer 69cafc8953c4713243179582f20d13e0',
            'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          "template": {
            "id": 1
          },
          "sourceObjectId": "0c091b1f-a735-44e9-a56c-43435e7a40b6",
          "sourceDataVersion": "AADJIgAAAAA=",
          "name": values.name,
          "midname": "-",
          "lastname": "-",
          "gender": "Male",
          "description": "-",
          "address": "-",
          "site": "",
          "email": values.email,
          "skype": "",
          "position": "",
          "group": {
            "id": 1
          },
          "isCompany": false,
          "isDeleted": false,
          "birthDate": {
            "date": "01-12-1990"
          },
          "phones": [
            {
              "number": values.phone,
              "type": 1
            }
          ],
          "companies": [],
          "contacts": [],
          "customFieldData": []
        })
        ,
        mode: 'cors',
        cache: "default",
      }).then(data => answer = data.json()).then(data => answer = data.id)
      return answer
    }

    export {createCardUser}