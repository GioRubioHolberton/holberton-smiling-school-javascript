$(document).ready(() => {
    $.get("https://smileschool-api.hbtn.info/quotes", (data) => {
        const newLocal = "#slide-load";
      $(newLocal).hide();
      data.forEach((com, aux) => $("#info-slide").append(createComment(com, aux)));
    })
    
    const createComment = (com, aux) => {
      return `
          <div class="carousel-item ${aux == 0 ? 'active' : ''}">
              <div class="row flex-wrap justify-content-center mb-5">
                  <div class="col col-sm-4 col-md-2 mt-5 d-flex justify-content-center justify-content-xs-end">
                  <img class="img rounded-circle" src="${com.pic_url}" height="140">
                  </div>
                  <div class="col-11 col-md-6 col-lg-8 item-content mt-5 text-white">
                  <h5 class="pb-3 mr-sm-2">${com.text}</h5>
                  <p class="font-weight-bold m-0">${com.name}</p>
                  <p class="font-italic m-0">${com.title}</p>
                  </div>
              </div>
          </div>
      `
    }
  })

  