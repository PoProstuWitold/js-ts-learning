// Run through Deno

interface User {
    name: string
    email: string
    password: string
}

const user1: User = {
    name: 'Witold',
    email: 'witold@email.com',
    password: 'keyboardcat'
}

console.log(`Hello, ${user1.name}! (TypeScript)`)