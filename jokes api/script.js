/* <div id="joke" class="joke">Awsome joke is loading  ....</div>
     <button id="jokebtn" class="btn">Next  joke</button> */
//  GET https://icanhazdadjoke.com/

const jokes = document.querySelector("#joke");
const jokeBtn = document.querySelector("#jokebtn");

// const generatjokes = () => {
//   const setheader = {
//     headers: {
//       Accept: "application/json",
//     },
//   };

//   fetch("https://icanhazdadjoke.com/", setheader)
//     .then((res) => res.json())
//     .then((data) => {
//       jokes.innerHTML = data.joke;
//     })
//     .catch((error) => {
//       console.log(error);
//     });
// }

const generatjokes = async () => {
  try {
    const setheader = {
      headers: {
        Accept: "application/json",
      },
    };

    const res = await fetch("https://icanhazdadjoke.com/", setheader);
    const data = await res.json();
    jokes.innerHTML = data.joke;
  } catch (error) {
    console.log(`the error is ${error}`);
  }
};

jokeBtn.addEventListener("click",generatjokes);
generatjokes()  
