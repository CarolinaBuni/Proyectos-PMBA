const puppeteer = require("puppeteer");
const fs = require("fs");

const moviesArray = [];

const scrapper = async ( url ) => {
     const browser = await puppeteer.launch( {headless: false} );
     const page = await browser.newPage();
     await page.goto( url );
     await page.setViewport( { width: 1080, height: 1024 } );

     // Esperar a que el botón de denegación de cookies esté presente en la página
     await page.waitForSelector(".fc-button.fc-cta-do-not-consent.fc-secondary-button");

     await page.$eval(".fc-button.fc-cta-do-not-consent.fc-secondary-button", (el) => {
          el.click();
     });

     repeat(page, browser)
};

const repeat = async (page, browser) => {
     const arrayDivs = await page.$$(".row.margin-bottom-20.fondo_medio.borde_caja_busqueda.con_padding10, .row.margin-bottom-20.fondo_claro.borde_caja_busqueda.con_padding10");

     for (const movieDiv of arrayDivs) {
          console.log(movieDiv);
          let img = await movieDiv.$eval("img.img-responsive.min-60", (el) => el.src);
          let title = await movieDiv.$eval(".h5 > a > b", (el) => el.textContent);
          let director = await movieDiv.$eval(".col-md-10.col-sm-10.col-xs-9 > small", (el) => el.textContent.match(/de\t \n(.+)/)[1].replace(/\t+$/, ''))

          const movie = {
               img,
               title,
               director
          }

          moviesArray.push(movie);
          console.log(moviesArray);

     }

     try {
          await page.$eval("li.next > a", (el) => el.click());
          await page.waitForNavigation();
          repeat( page, browser );
     } catch (error) {
          write(moviesArray);
          await browser.close();
     }
};

const write = (moviesArray) => {
     fs.writeFile("movies.json", JSON.stringify(moviesArray), () => {
          console.log("Archivos escrito");
     });
};

module.exports = { scrapper };

