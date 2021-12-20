
  
  var getUserRepos = function (user) {
    var apiUrl = 'https://api.github.com/users/humesandrew/repos';
  
    fetch(apiUrl)
      .then(function (response) {
        if (response.ok) {
          response.json().then(function (data) {
            console.log(response);
            displayRepos(data, user);
          });
        } else {
          alert('Error: ' + response.statusText);
        }
      })
      .catch(function (error) {
        alert('Unable to connect to GitHub');
      });
  };
  
 
  
  var displayRepos = function (repos, searchTerm) {
    if (repos.length === 0) {
      repoContainerEl.textContent = 'No repositories found.';
      return;
    };
  
getUserRepos();

    
  
  //   for (var i = 0; i < repos.length; i++) {
  //     var repoName = repos[i].owner.login + '/' + repos[i].name;
  
  //     var repoEl = document.createElement('div');
  //     repoEl.classList = 'list-item flex-row justify-space-between align-center';
  
  //     var titleEl = document.createElement('span');
  //     titleEl.textContent = repoName;
  
  //     repoEl.appendChild(titleEl);
  
  //     var statusEl = document.createElement('span');
  //     statusEl.classList = 'flex-row align-center';
  
  //     if (repos[i].open_issues_count > 0) {
  //       statusEl.innerHTML =
  //         "<i class='fas fa-times status-icon icon-danger'></i>" + repos[i].open_issues_count + ' issue(s)';
  //     } else {
  //       statusEl.innerHTML = "<i class='fas fa-check-square status-icon icon-success'></i>";
  //     }
  
  //     repoEl.appendChild(statusEl);
  
  //     repoContainerEl.appendChild(repoEl);
  //  //
  
  };