Om projektet: Det är en sida där man kan se information om filmer baserad på filtrering via olika knappar.

Man kan köra koden lokalt genom att klona github repot https://github.com/ZanaPK0/ZanaFrontend in via programmet VSCode och därifrån installera en extension som heter Liveserver, därefter högerklickar man index.html filen och trycker på open with live server.

https://www.figma.com/design/k1yf8rhz7bvys6EZyG68WQ/Exam1Project?node-id=0-1&t=8MWPw1WqwXuq9I2d-1 detta är länk till min figma-skiss.. hur jag planerade att det skulle se ut, på ett ungefär..

Jag har uppfylt kraven JSON- genom att fetcha API och sedan använda mig av const data = await response.json();

gällande HTTP/HTTPS så har jag använt mig av GET där jag hämtar data från API:et och sedan med menningen har på "Spiderman" kategorin anget fel api för att visa felmedellanden.

Jag hämtar API:et via olika sökparametrar. T.ex.

         "http://www.omdbapi.com/?apikey=51a96b3d&s=Batman&page=1" här så är det parameter Search = Batman och så hämtar den endast sidan ett av sökningen via Page=1.

         på samma sätt har jag använt de andra kategorina. t.ex. Avengers osv..

När man kommer in på hemsidan så hamnar man automatisk på Batman sökningen och därmed får se 10 posters om Batman.
Sedan finns det andra knappar där man kan trycka på t.ex. Avengers knappen, där så ersätts de 10 posters till 10 andra ifrån den nya kategorin.
