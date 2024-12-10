var xhr = new XMLHttpRequest();

var url = './news_article.json';

xhr.open('GET', url, true);

xhr.responseType = 'json';

xhr.onload = function () {
    var articles = xhr.response.articles;
    var articlesDiv = document.getElementById('articles');

    articles.forEach(function(article) {
        var articleDiv = document.createElement('div');
        articleDiv.classList.add('article');

        var author = document.createElement('h2');
        author.textContent = article.author;

        var title = document.createElement('h2');
        title.textContent = article.title;
        
        var description = document.createElement('p');
        description.textContent = article.description;
        
        var urlsHeader = document.createElement('h3');
        urlsHeader.textContent = 'URLS:';
        
        var urlList = document.createElement('ul');
        article.urls.forEach(function(url) {
          var listItem = document.createElement('li');
          listItem.textContent = url;
          urlList.appendChild(listItem);
        });
        
        var publishHeader = document.createElement('h3');
        publishHeader.textContent = 'Published Date & Content:';
        
        var publishList = document.createElement('ul');
        article.published_content.forEach(function(publish) {
          var listItem = document.createElement('li');
          listItem.textContent = publish;
          publishList.appendChild(listItem);
        });
        
        articleDiv.appendChild(author);
        articleDiv.appendChild(title);
        articleDiv.appendChild(description);
        articleDiv.appendChild(urlsHeader);
        articleDiv.appendChild(urlList);
        articleDiv.appendChild(publishHeader);
        articleDiv.appendChild(publishList);
        articlesDiv.appendChild(articleDiv);
      });
}

xhr.send();