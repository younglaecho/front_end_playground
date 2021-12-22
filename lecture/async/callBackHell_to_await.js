class UserStorage {
  loginUser(id, password) {
    return new Promise((resolve, reject) => {
      setTimeout(()=> {
        if (
          (id=='cho' && password=='1234') || 
          (id=='kim' && password=='2580')
        ) {
          resolve(id)
        } else {
          reject(new Error('not found'))
        }
      }, 2000)
    
    })
}

  getRoles(user) {
    return new Promise((resolve, reject)=> {
      setTimeout(()=> {
        if (user=='cho') {
          resolve({name:'cho', role:'admin'})
        } else if(user=='kim') {
          resolve({name:'kim', role:'normal'})
        } else {
          reject(new Error('no access'))
        }
      }, 1000)
    })
  }
}

const userStorage = new UserStorage()
const id = prompt('아이디를 입력하세요!')
const password = prompt('비밀번호를 입력하세요')

async function login_and_getRole(id, password) {
  const user_id = await userStorage.loginUser(id, password)
  console.log('로그인에 성공했습니다.')
  const userWithRoles = await userStorage.getRoles(user_id)
  alert(userWithRoles.name)
}

login_and_getRole(id, password)