


   const searchForm = document.querySelector('#github-form')
   searchForm.addEventListener('submit', searchApi)
  
    function searchApi(e){
        e.preventDefault()
    const searchTerm = document.getElementById('search').value
    // console.log(searchTerm)
        fetch(`https://api.github.com/search/users?q=${searchTerm}`)
    .then((res) => res.json())
    .then((data) => {   
        // console.log('Data:', data)

        data.items.forEach(userAppend)
    })
}

function userAppend(userObject){
    console.log('This is userAppend Data:', userObject)
const userListUl = document.getElementById('user-list')
const userList = document.createElement('li')
userList.className = 'users'
userList.innerText = `${userObject.login}`
userList.addEventListener('click', fetchUser)
userListUl.appendChild(userList)
const userAvatar = document.createElement('img')
userAvatar.setAttribute('src', `${userObject.avatar_url}`)
userList.appendChild(userAvatar)
}
    // const users = document.getElementsByClassName('users')
    // const userLists = document.getElementById('user-list')
    // let userClassName = document.querySelectorAll('.users')
    // console.log('This is Class Name:', userClassName)
    


    function fetchUser(e){
        // userName.preventDefault()

        console.log('This is userName data:', e)
    fetch(`https://api.github.com/users/${e.target.innerText}/repos`)

    .then((res) => res.json())
    .then((userRepo) => {
      console.log('This is fetchUser data:', userRepo)
        
    
        userRepo.forEach(repoName => userRepoSearch(repoName.name))
        



    } )
    }


function userRepoSearch(repoName){
    console.log('userRepoSearch data:', repoName)
    const reposList = document.querySelector('#repos-list')
    const repoChild = document.createElement('li')
    reposList.appendChild(repoChild)
    repoChild.innerText = repoName
}