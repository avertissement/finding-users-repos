    
function render() {
    $('form').on('submit', function(e) {
        e.preventDefault();
        $('.results').empty();
        const username = $('.input').find('input').val();
        fetch(`https://api.github.com/users/${username}/repos?accept=application/vnd.github.v3+json`)
        .then(response => response.json())
        .then(responseJson => displayResult(responseJson));
    })

    function displayResult(thisResult) {
      for(let i=0; i<thisResult.length; i++) {
              $('.results').append(`
              <h4>${thisResult[i].name}</h4>
              <div class="a">
                <a href="${thisResult[i].html_url}">${thisResult[i].html_url}</a>
              </div>
              `);
      }
      finish()
    }

    function finish() {
        $('input').val('');
    }

}


render()