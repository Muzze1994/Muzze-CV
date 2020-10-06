async function fetchGitApi() {
    const response = await fetch("https://api.github.com/users/Muzze1994/repos");
    const json = await response.json();
    // waits until the request completes...
    return json;
  }

  fetchGitApi().then(json => {
      json;
      console.log(json)

    let githubrepos = document.getElementById('githubrepos');

    for(i=0; i < json.length; i++){
      githubrepos.insertAdjacentHTML("beforeend", "<a href=' " + json[i].html_url + "' target='_blank'><div id='githubrepos'>" + json[i].name )
    }

  })
  