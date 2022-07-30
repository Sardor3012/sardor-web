// get запрос
axios.get('https://jsonplaceholder.typicode.com/photos')
    .then(res => {
        if (res.status === 200 || res.status === 201) {
            reload(res.data)
        }
    })
    .catch(err => console.log(err))

    let wrapper = document.querySelector('.wrapper')

function reload(arr) {
    for (let item of arr) {
        let img = document.createElement('img')
        img.src = item.url
            
        img.style.width = '600px'
        img.style.height = '600px'

        wrapper.append(img)
    }
}




