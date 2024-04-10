const createTaskFromUser = async (userID: any, description: string, service: string, name: string) => {
    let response = await fetch(`https://cdfinance.planfix.com/rest/task/`, {
        method: 'POST',
        headers: {
            'accept': 'application/json',
            'Authorization': 'Bearer 69cafc8953c4713243179582f20d13e0',
            'Content-Type': 'application/json',
        },
        body: JSON.stringify(
          {
            "name": `${name}, ${service} (site, https://TEST/TEST)`,
            "description": `${description}`,
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
        ),
        mode: 'cors',
        cache: "default",
      }).then((res) => {
        if(res.ok){
          return res.json()
        }
        throw new Error('task not created from user')
      }).then((res) => {
        return res
      }).catch((error) => {
        throw error
      })
      return response
}

export {createTaskFromUser}