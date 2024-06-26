export default async function Login(email: string, password: string){
     const body = JSON.stringify({
        login: email,
        password: password
     })
      const response = await fetch(`https://backend.cdfinance.pl/login`, {
          method: 'POST',
          mode: 'cors',
          credentials: 'include',
          headers: {
              'Content-Type': 'application/json'
          },
          body: body 
        }).then(data => {
            if(data.ok){
                return data.json()
            }
            if(data.status == 401){
                throw new Error('Unauthorized')
            }
        }).catch(err => {
            return err
        })
        return response
    }