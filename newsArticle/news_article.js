var xhr = new XMLHttpRequest();

var url = './news_article.json';
//Prepare a GET request to specified URL
//GET: specifies the HTTP method used for the request (in this case, a GET request)
//URL: represents the URL from where you will fetch the data
//True: indicates if the request is asynchronous (true) or synchronous (false).
xhr.open('GET', url, true);
//inform the XMLHTTPRequest object that the expected response from the server should be in JSON format
xhr.responseType = 'json';
//define what should happen when the data is successfully loaded using xhr.onload = function() {...}
xhr.onload = function() {
    //var articles = xhr.respone.articles; to retrieve the articles array from the JSON response
    var articles = xhr.response.articles;
    //var articleDiv = document.getElementById('articles'); to retrieve the HTML element with the ID 'articles' where the fetchec content will be displayed.
    var articlesDiv = document.getElementById('articles');

    //Now let's iterate news data to fetch on the front page using loops. In this case forEach loop

    articles.forEach(function(article) {
        var articleDiv = document.createElement('div');
        articleDiv.classList.add('article');

        var author = document.createElement('h2');
        author.textContent = article.author;

        var title = document.createElement('h2');
        title.textContent = article.title;

        var description = document.createElement('p');
        description.textContent = article.description;

        var urls = document.createElement('h3');
        urls.textContent = 'URLS:';

        console.log(urls.textContent);
       var urlList = document.createElement('ul');
        article.urls_list.forEach(function(url) {
            var listItem = document.createElement('li');
            listItem.textContent = url;
            urlList.appendChild(listItem);
        });

        var publishedHeader = document.createElement('h3');
        publishedHeader.textContent = 'Published Date & Content:';

        var publishList = document.createElement('ul');
        article.published_content.forEach(function(publish) {
          var listItem = document.createElement('li');
          listItem.textContent = publish;
          publishList.appendChild(listItem);
        });

        articleDiv.appendChild(author);
        articleDiv.appendChild(title);
        articleDiv.appendChild(description);
        articleDiv.appendChild(urls);
        articleDiv.appendChild(urlList);
        articleDiv.appendChild(publishedHeader);
        articleDiv.appendChild(publishList);

        articleDiv.appendChild(articleDiv);
    });

    xhr.send();
}
