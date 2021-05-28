import React from 'react'

 const authProvider = () => {

     // authentication
     login = async ({username, password}) =>  {
        const request = new Request('http://localhost:3000', {
            method: 'POST',
            body: JSON.stringify({ username, password }),
            headers: new Headers({ 'Content-Type': 'application/json' }),
        });
        try {
             const res = await fetch(request);
             if (res.status < 200 || res.status >= 300) {
                 throw new Error(res.statusText);
             }
             const auth = await res.json();
             localStorage.setItem('auth', JSON.stringify(auth));
         } catch (e) {
             throw new Error('Network error');
         }
    },
    checkError= (err) => {
        const status = err.status;
        if (status === 401 || status === 403) {
            localStorage.removeItem('auth');
            return Promise.reject();
            //override ({ redirectTo: '/credentials-required' })
        }
        // other error code (404, 500, etc): no need to log out
        return Promise.resolve();
    }
    /*
    // ...
     login: params => Promise.resolve(),
     checkError: error => Promise.resolve(),
     checkAuth: params => Promise.resolve(),
     logout: () => Promise.resolve(),
     getIdentity: () => Promise.resolve(),
     // authorization
     getPermissions: params => Promise.resolve(),
    return (
        <div>
            
        </div>
    )*/
}
export default authProvider;

/*export default {
    login ,

} */