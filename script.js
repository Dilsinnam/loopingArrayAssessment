for(let i = 1000; i >= 0; i--) {
    if (i % 2 === 0)
    console.log (i);
} //Logging every number from 1000 to 0

for(let i = 0; i <= 10000; i++) {
    if (i === 2500) {
        alert("A quarter of the way there!");
    } else if (i === 5000) {
        alert("Halfway there!");
    } else if (i === 10000) {
        alert("The loop is done!")
    }
} //Alerting the status of the count up

const shows = [" Titans", " Moon Knight", " Suits", " The Flash", " Haikyuu!"]
const num = [" #1", " #2", " #3", " #4", " #5"]

for (let i = 0; i < shows.length; i++) {
    console.log("My" + num[i] + " favorite show is" + shows[i])
} //Favourite shows