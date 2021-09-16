class UserStorage {
  loginUser(id, password, onSuccess, onError) {
    setTimeout(()=> {
      if(
        (id == 'cho' && password=='1234') || 
        (id == 'kim' && password=='2580')
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
        onSuccess({name:'cho', role: 'admin'})
      } else {
        onError(new Error('no access'))
      }
    },1000)
  }
}

const userStorage = new UserStorage()
const id = prompt('아이디를 입력하세요')
const password = prompt('비밀번호를 입력하세요')
userStorage.loginUser(
  id, 
  password, 
  (user)=> {
    console.log('로그인에 성공했습니다.')
    userStorage.getRoles(
      user,
      (userWithRole)=> {
        alert(`${userWithRole.name}의 role은 ${userWithRole.role}`)
      },
      error => {
        console.log(error)
      }
      )
  }, 
  (error)=> {
    console.log(error)
  }
)

// 1. 사용자에게 id와 password를 입력받음
// 2. login
// 3. 역할을 다시받아오기 => 출력