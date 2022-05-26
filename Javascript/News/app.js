const display = document.getElementById('display')
const dropDown = document.getElementById('newsSources')

let sourceNames = sources.sources.map(function(source){
    return source.name
})

function displayArticles(newsArticles) {

    let articles = newsArticles.map(function(article) {


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

function addSourceToDropDown(sources) {

    let sourceItems = sources.map(function(source){
        return `<option>${source}</option>`
    })

    dropDown.innerHTML = sourceItems.join('')
}

addSourceToDropDown(sourceNames)
displayArticles(news.articles)