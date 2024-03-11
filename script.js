let one = document.getElementById("one");
let quote = document.getElementById("quote");
let para = null; 
let two = document.getElementById("two");// Initialize para outside the function

one.addEventListener("click", fun);

async function fun() {
    try {
        // If para exists, remove it
        if (para) {
            quote.removeChild(para);
        }

        para = document.createElement("p");
        
        let res = await fetch('https://api.quotable.io/random');
        let data = await res.json();

        para.textContent = `"${data.content}" - ${data.author}`;
        quote.appendChild(para);
    } catch (error) {
        console.error('Error fetching quote:', error);
    }
}
