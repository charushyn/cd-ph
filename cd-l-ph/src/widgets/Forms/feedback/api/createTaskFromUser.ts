const createTaskFromUser = async (userID: any, description: string, service: string, name: string) => {
    const body = JSON.stringify(
      {
        "name": `${name}, ${service} (site, https://TEST/TEST)`,
        "description": description ? description : `Автоматически создано описание: Здравствуйте, меня зовут ${name}, заполнил форму на сайте, интересует услуга ${service}`,
        "assigner": {
          "id": `contact:${+userID}`
        },
        "assignees": {
          "users": [
            {
              "id": "user: 5"
            }
          ],
          "groups": []
        },
        "counterparty": {
          "id": `contact:${+userID}`
        }
      }
    )
    let response = await fetch(`https://cdfinance.planfix.com/rest/task/`, {
        method: 'POST',
        headers: {
            'accept': 'application/json',
            'Authorization': 'Bearer 7698b7bb3c7b00a1155abac76318121e',
            'Content-Type': 'application/json',
        },
        body: body,
        mode: 'cors',
        cache: "default",
      }).then((res) => {
        if(res.ok){
          return res.json()
        }
        if(res.status == 400){
          throw new Error('task not created')
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

export {createTaskFromUser}