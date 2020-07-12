$(document).ready(() => {
  $.get("https://smileschool-api.hbtn.info/quotes", (data) => {
    const slide1 = "#put-slide";
    $(slide1).hide();
    data.forEach((info, aux) => $("#info-slide").append(slideComent(info, aux)));
  })
  const slideComent = (info, aux) => {
    return `
    <div class="carousel-item ${aux == 0 ? 'active' : ''}">
      <div class="row flex-wrap justify-content-center mb-5">
        <div class="col col-sm-4 col-md-2 mt-5 d-flex justify-content-center justify-content-xs-end">
        <img class="img rounded-circle" src="${info.pic_url}" height="140">
      </div>
      <div class="col-11 col-md-6 col-lg-8 item-content mt-5 text-white">
        <h5 class="pb-3 mr-sm-2">${info.text}</h5>
        <p class="font-weight-bold m-0">${info.name}</p>
        <p class="font-italic m-0">${info.title}</p>
      </div>
    </div>`
  }
  
  
  $.get("https://smileschool-api.hbtn.info/popular-tutorials", (data) => {
    putCard(data, "#put-popular", "#put-carpopu", 'popular-videos');
  })
  $.get("https://smileschool-api.hbtn.info/latest-videos", (data) => {
    putCard(data, "#put-last", "#put-carlast", 'last-videos');
  })
  const putContent = (e) => {
    let stars = ""
    for (let i=0; i < e.star; i++) {
      stars += `<img src="images/star_on.png" class="stars" height="15">`
    }
    if (e.star < 5)
      for (let i = e.star; i < 5; i++)
        stars += `<img src="images/star_off.png" class="stars" height="15">`

    return `
    <div class="card-deck border-0 d-flex justify-content-center">
      <div class="card border-0 hidden-sm-down">
        <img src=${e.thumb_url} class="card-img-top d-block">
        <img src="images/play.png" class="position-absolute" width="60px">
        <div class="card-body mx-0 px-0">
            <div>
                <h5 class="font-weight-bold">${e.title}</h5>
                <p class="card-text">${e["sub-title"]}</p>
                <span class="d-flex flex-row">
                    <img src=${e.author_pic_url} class="rounded-circle" width="35" height="35">
                    <p class="font-weight-bold ml-2 mt-1">${e.author}</p>
                </span>
            </div>
            <span class="d-flex flex-row justify-content-between">
                <span>
                    ${stars}
                </span>
                <p class="profile-video p-0 m-0">${e.duration}</p>
            </span>
          </div>
      </div>
    </div>
    `
  }
  const putCard = (data, loader, carousel, id) => {
    $(loader).hide()
    for (let i = 0; i < data.length; i++) {
      $(carousel).append(
        `
        <div class="carousel-item ${i === 0 ? "active" : ""}">
          <div class="col-12 col-sm-12 col-md-6 col-lg-3 justify-content-center" id="${id}${i}">
          </div>
        </div>
        `
      )
      $(`#${id}${i}`).append(putContent(data[i]));
    }
    $(`${carousel} .carousel-item`).each(function () {
      var minVideos = 3;
      var sig = $(this).next();
      if (!sig.length) {
        sig = $(this).siblings(':first');
      }
      sig.children(':first-child').clone().appendTo($(this));
      for (var i = 0; i < minVideos; i++) {
        sig = sig.next();
        if (!sig.length) {
          sig = $(this).siblings(':first');
        }
        sig.children(':first-child').clone().appendTo($(this));
      }
    })
  }
})