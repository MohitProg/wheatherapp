const inputbox = document.querySelector(".search-box");
const seachbtn = document.querySelector(".search-btn");
const detailbox = document.querySelector(".details-box");
const imagebox = document.querySelector(".imagebox");

//  function which will run on searching

seachbtn.addEventListener("click", async function () {
  const value = inputbox.value;
  console.log(value.length);
  if (value?.length > 0) {
    const res = await fetch(
      `http://api.weatherapi.com/v1/current.json?q=${value}&key=aa791f1472f94fbc9aa101356241910`
    );
    const data = await res.json();

    if (data.error) {
      alert(data.error.message);
    } else {
      let temp = data.current.temp_c;
      let imageurl;
      if (temp < 15) {
        imagebox.src = "./images/pngwing.com (12).png";
      } else if ((temp > 15) & (temp < 40)) {
        imagebox.src = "./images/pngwing.com (11).png";
      } else if (temp > 40) {
        imagebox.src = "./images/pngwing.com (8).png";
      }

      console.log(imagebox.src);
      detailbox.innerHTML = `
      <div class="wheather-meter">
   
   <div>Country:<span>${data.location.country}</span></div>
   <div>City:<span>${data.location.name}</span></div>
           <div>Temp in Celsious: <span>${data.current.temp_c} C</span></div>
           <div>Temp in fahrenheit:<span>${data.current.temp_f} F</span></div>
                </div>
             <div class="wheather-image">
         <img class="imagebox" src=${imagebox.src}  alt="Weather Icon">
       </div>
           `;
    }
  } else {
    alert("please Enter City Name");
  }
});
