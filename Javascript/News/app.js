const display = document.getElementById('display')
const dropDown = document.getElementById('newsSources')

let allArticles = news.articles

let sourceNames = sources.sources.map(function(source){
    return source.name
})

// Takes in a list of articles and displays them on the page
function displayArticles(articleList) {

    let articles = articleList.map(function(article) {


        return `
        <div class = "article">
        <h1>${article.title}</h2>
        <h3>${article.author ?? ""}</h3>
        <p>${article.description ?? ""}</p>
        <a href="${article.url}">Link to article</a>
        <div><img src = "${article.urlToImage ?? "download.png"}" onerror="this.src='download.png'"></div>
        <div>${article.publishedAt}</div>
        </div>
        `
    })
    display.innerHTML = articles.join('')
}

// Takes list of sources and adds each source name to the dropdown menu
function addSourceToDropDown(sourceList) {

    let sources = sourceList.map(function(source){
        return `<option>${source}</option>`
    })

    dropDown.insertAdjacentHTML('beforeend', sources)
}



addSourceToDropDown(sourceNames)

dropDown.addEventListener('change', function(){
    const selectedSource = this.value
    const filteredArticles = allArticles.filter(function(article){
        return article.source.name == selectedSource
    })
    // console.log(this.value)
    // console.log(this)

    displayArticles(filteredArticles)
})

displayArticles(allArticles)