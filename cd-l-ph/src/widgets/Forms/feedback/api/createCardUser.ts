const createCardUser = async (values : {name: string, surname: string, email: string, mobilecode: string, phone: string, service: string, textarea: string}) => {
          const phone = `${values.mobilecode}${values.phone}`
          // const body = JSON.stringify({
          //   "template": {
          //     "id": 1
          //   },
          //   "sourceObjectId": "0c091b1f-a735-44e9-a56c-43435e7a40b6",
          //   "sourceDataVersion": "AADJIgAAAAA=",
          //   "name": values.name,
          //   "surname": values.surname ? values.surname : 'Client',
          //   "email": values.email,
          //   "group": {
          //     "id": 1
          //   },
          //   "isCompany": false,
          //   "isDeleted": false,
          //   "phones": [
          //     {
          //       "number": `${values.mobilecode}${values.phone}`,
          //       "type": 1
          //     }
          //   ],
          //   "companies": [],
          //   "contacts": [],
          //   "customFieldData": []
          // })
          let response = await fetch('http://46.41.140.125/crm/proxy/rest/contact/', {
          method: 'POST',
          headers: {
            'accept': 'application/json',
            'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          "template": {
            "id": 1
          },
          "sourceObjectId": "0c091b1f-a735-44e9-a56c-43435e7a40b6",
          "sourceDataVersion": "AADJIgAAAAA=",
          "name": values.name,
          "lastname": values.surname ? values.surname : values.service,
          "description": values.service,
          "email": values.email,
          "group": {
            "id": 1
          },
          "isCompany": false,
          "isDeleted": false,
          "phones": [
            {
              "number": `${values.mobilecode}${values.phone}`,
              "type": 1
            }
          ],
          "companies": [],
          "contacts": [],
          "customFieldData": []
        }),
        mode: 'cors',
        cache: "default",
      }).then((res) => {
        if(res.ok){
          return res.json()
        }
        if(res.status == 400){
          throw new Error('user already exist')
        } else if (res.status == 500){
          throw new Error('server error')
        } else if (res.status == 401){
          throw new Error('not allowed')
        } else {
          throw new Error('unexpected error')
        }
      }).then((res) => {
        return res
      }).catch((error) => {
        throw error
      })
      return response
    }

    export {createCardUser}