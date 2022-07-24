export function getList() {
    return fetch('https://api.nasa.gov/planetary/apod?api_key=yQy4bwl2ax2WbpGJL113FBT96IJY6mzHMJfRvYVJ')
      .then(data => data.json())
  }