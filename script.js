let newPara = -1
function gen() {
    let jokes = [
          "Teacher: Tum itne din kyu nahi aaye school? Student: Bird flu ho gaya tha. Teacher: Wo to birds ko hota hai! Student: Haan to main bhi toh Twitter pe hota hoon!",
        "Pappu: Jab bhi main TV on karta hoon, bijli chali jaati hai! Electrician: Toh remote se TV on karo, transformer se nahi!",
        "Wife: Suno ji, mere liye kya laa rahe ho? Husband: Tension!",
        "Doctor: Tumhe kis cheez se allergy hai? Patient: Homework se.",
        "Ek machhar ne doosre se kaha: Aaj to badi party hai, banda full tight hai!",
        "Student: Sir aap class mein itna boring kyun padhate ho? Sir: Kyunki tum zyada hasoge toh fail ho jaoge.",
        "Ladka: Tumhara naam kya hai? Ladki: Google! Ladka: Kyun? Ladki: Kyunki main tumhare sare sawalon ka jawab hoon.",
        "Teacher: Mobile kyun use kar rahe ho? Student: Notes dekh raha hoon. Teacher: Toh mooh se kyun has raha hai? Student: Funny notes hain.",
        "Pappu: Bhai mujhe girlfriend mil gayi! Gappu: Kab? Pappu: Neend mein!",
        "Boy: Tumhare papa kya karte hain? Girl: Blocks kar dete hain.",
        "Biwi: Aaj mujhe shopping pe le chalo. Pati: Main paida hi bhatakne ke liye hua hoon.",
        "Ek aadmi ne toothpaste ki ad dekhi: ‘Isse dant chamakenge!’ Ab wo toothpaste aankhon mein daal raha hai.",
        "Dad: Result kaisa aaya? Beta: Paper toh bahut aasaan tha... bas school hi galat chuna tha.",
        "Ladki: Tum mujhe bhool to nahi jaoge? Ladka: Shakal aisi hai tumhari?",
        "Ek ladka exam hall mein likh raha tha: 'Mujhe maaf kar dena bhagwan, main dobara galti nahi karunga'... Answer sheet pe!",
        "Pappu: WiFi chala gaya... ab zindagi ka kya matlab bacha?",
        "Friend: Kal party hai, aayega? Me: Nahi bhai, neend ke saath commitment hai.",
        "Boy: Tum itni sundar kaise ho? Girl: Filter ka kamaal hai!",
        "Teacher: Jab current lagta hai toh kya feel hota hai? Student: Lagta hai abhi God se milne wale hain!",
        "Mom: Itne raat ko phone kis se kar rahe ho? Beta: Network se!",
        "Manager: Tum late kyun aaye? Employee: Sir neend bahut important hoti hai productivity ke liye!"
    ];
    

let newIndex;

do {
    newIndex = Math.floor(Math.random()* jokes.length)
} 
while (newIndex === newPara);

newPara = newIndex

document.getElementById("para").innerHTML = jokes[newIndex]
}
