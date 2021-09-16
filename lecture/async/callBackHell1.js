class UserStorage {
  loginUser(id, password, onSuccess, onError) {
    setTimeout(()=> {
      if (
        (id=='cho' && password=='1234') || 
        (id=='kim' && password=='2580')
      ) {
        onSuccess(id)
      } else {
        onError(new Error('not found'))
      }
    }, 2000)
  }

  getRoles(user, onSuccess, onError) {
    setTimeout(()=> {
      if (user=='cho') {
        onSuccess({name:'cho', role:'admin'})
      } else if(user=='kim') {
        onSuccess({name:'kim', role:'normal'})
      } else {
        onError(new Error('no access'))
      }
    }, 1000)
  }
}

const userStorage = new UserStorage()
const id = prompt('아이디를 입력하세요!')
const password = prompt('비밀번호를 입력하세요')

userStorage.loginUser(
  id,
  password,
  (user) => {
    userStorage.getRoles(user,
      (userWithRoles) => {
        alert(`${userWithRoles.name}의 role은 ${userWithRoles.role}입니다.`)
      },
      (error) => {
        console.log(error)
      }
    )
  },
  (error) => {
    console.log(error)
  }
)