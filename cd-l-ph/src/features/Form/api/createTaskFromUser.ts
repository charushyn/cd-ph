const createTaskFromUser = (userID: any, description: string, service: string) => {
    fetch(`https://cdfinance.planfix.com/rest/task/`, {
        method: 'POST',
        headers: {
            'accept': 'application/json',
            'Authorization': 'Bearer 69cafc8953c4713243179582f20d13e0',
            'Content-Type': 'application/json',
        },
        body: JSON.stringify(
          {
            "name": `Task: ${service}`,
            "description": `${description}`,
            "assigner": {
              "id": `contact:${userID}`
            },
            "assignees": {
              "users": [
                {
                  "id": "user: 5"
                }
              ],
              "groups": []
            }
          }
        ),
        mode: 'cors',
        cache: "default",
      })
}

export {createTaskFromUser}