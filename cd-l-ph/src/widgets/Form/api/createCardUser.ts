const createCardUser = async (values : {name: string, email: string, phone: string, service: string, textarea: string}) => {
  // const createCardUser = async (values : {name: string}) => {
        
          let response = await fetch('https://cdfinance.planfix.com/rest/contact/', {
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
          "email": values.email,
          "group": {
            "id": 1
          },
          "isCompany": false,
          "isDeleted": false,
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
      }).then((res) => {
        if(res.ok){
          return res.json()
        }
        console.log(res)
        throw new Error('user not created')
      })
      .then((res) => {
        return res
      }).catch((error) => {
        throw error
      })
      return response
    }

    export {createCardUser}