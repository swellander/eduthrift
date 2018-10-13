export function check(donations, requests) {

  for (var i = 0; i < donations.length; i++) {

    if (str.toLowerCase(donations[i].author) == str.toLowerCase(requests.author) && str.toLowerCase(donations[i].title) == str.toLowerCase(requests.title)) {

      // ALLERT USER OF MATCH

      i = requests.length

    }

    else {

      i++;

    }

  }

}