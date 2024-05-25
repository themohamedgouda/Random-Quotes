var previousNumber = -1; // Declare previousNumber outside the function to maintain state
function generatoQoutes() {
    var qoutesContainer = [
        "Imagination is more important than knowledge.",
        "It does not do to dwell on dreams and forget to live.",
        "Happiness is not something ready made. It comes from your own actions.",
        "Success is not final, failure is not fatal: It is the courage to continue that counts.",
        "The journey of a thousand miles begins with one step.",
        "We are what we repeatedly do. Excellence, then, is not an act, but a habit.",
        "What lies behind us and what lies before us are tiny matters compared to what lies within us.",
        "The greatest glory in living lies not in never falling, but in rising every time we fall.",
        "The only way to make sense out of change is to plunge into it, move with it, and join the dance.",
        "Act as if what you do makes a difference. It does."
    ];
    var qoutesNames = [
        "--Albert Einstein",
        "--Dalai Lama",
        "--Winston",
        "--Theodore Roosevelt",
        "--William James",
        "--Aristotle",
        "--William Shakespeare",
        "--Nelson Mandela",
        "--Robert Frost",
        "--Franklin D. Roosevelt"
    ];
    function getRandomNumber() {
        var randomNumber;
        do {
            randomNumber = Math.floor(Math.random() * qoutesContainer.length);
        } while (randomNumber === previousNumber);

        previousNumber = randomNumber; // Update previousNumber with the new randomNumber
        return randomNumber;
    }
    var randomNumber = getRandomNumber();
    var cartona = "";
    cartona += ` <q class="h2 fw-bolder text-primary">${qoutesContainer[randomNumber]}</q>
                <p class="mt-3 h3 text-info fw-bolder">${qoutesNames[randomNumber]}</p>`;
    document.getElementById("newqoutes").innerHTML = cartona;
}
// Call the function to generate and display a quote
generatoQoutes();
