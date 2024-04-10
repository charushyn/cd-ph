const getInfoUser = async (values : {userID: string | number}) => {
    console.log(values.userID)
    let response = await fetch(`https://cdfinance.planfix.com/rest/contact/contact%3A${values.userID}?fields=name`, {
    method: 'GET',
    headers: {
        'accept': 'application/json',
        'Authorization': 'Bearer 69cafc8953c4713243179582f20d13e0',
        'Content-Type': 'application/json',
    },
    mode: 'cors',
    cache: "default",
  }).then((res) => {
    if(res.ok){
      return res.json()
    }
    console.log(res)
    throw new Error('not got info about user')
  }).then((res) => {
    return res
  }).catch((error) => {
    throw error
  })
  return response
}

export {getInfoUser}