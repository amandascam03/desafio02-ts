const conta = {
    email: 'amanda@dio.bank',
    password: '123456',
    name: 'Amanda Araujo',
    balance: 2000.00,
    id: "3"
}

export const api = new Promise((resolve) => {
    setTimeout(() => {
        resolve(conta)
    }, 3000)
})