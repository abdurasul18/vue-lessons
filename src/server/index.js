export function loginRequest(data) {
    return new Promise((resolve, reject) => {
        if (data.login == 'john') {
            setTimeout(() => {
                resolve({
                    username: "john",
                    token: "!ajsdja!@NAJSJDASDas"
                })
            }, 1000);
        }
        else {
            setTimeout(() => {
                reject("user topilmadi")
            }, 500);
        }
    })
}