const createTaskFromUser = (userID: any) => {
    fetch(`https://cdfinance.planfix.com/rest/task/`, {
        method: 'POST',
        headers: {
            'accept': 'application/json',
            'Authorization': 'Bearer 69cafc8953c4713243179582f20d13e0',
            'Content-Type': 'application/json',
        },
        body: JSON.stringify(
          {
            "name": `automaticly generated task by client id: ${userID}`,
            "description": `Task description client`,
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