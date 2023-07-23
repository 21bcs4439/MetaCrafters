/* 
// Metacrafters - Beginning Javascript
//
// This is a javascript playground for testing your javascript code!
// When you are ready to test, simply right click and select "Run Code"
// to see the result print below. If you have more then one snippet of code,
// you can highlight the code you want to test, and then right click and select "Run Code"
*/

let nftArray = [];

function mintNFT(name, eyeColor, gender, country, phoneNumber, uid) {
  let nftObject = {
    name: name,
    eyeColor: eyeColor,
    gender: gender,
    country: country,
    phoneNumber: phoneNumber,
    uid: uid
  };

  nftArray.push(nftObject);
}

function listNFTs() {
  nftArray.forEach((nft) => {
    console.log("Name: " + nft.name);
    console.log("Eye Color: " + nft.eyeColor);
    console.log("Gender: " + nft.gender);
    console.log("Country: " + nft.country);
    console.log("Phone Number: " + nft.phoneNumber);
    console.log("Unique Identification Number: " + nft.uid);
    console.log("-------------------------");
  });
}

function getTotalSupply() {
  return nftArray.length;
}

mintNFT("Jack", "Blue", "Male", "USA", "+123456789", "UID12345");
mintNFT("Amara", "Brown", "Female", "Canada", "+987654321", "UID67890");
mintNFT("Reggie", "Green", "Male", "UK", "+444333222", "UID55555");
mintNFT("Johnny", "Hazel", "Male", "Australia", "+111222333", "UID11111");
mintNFT("Tracy", "Amber", "Female", "Germany", "+999000111", "UID99999");

console.log("Listing all NFTs metadata:");
listNFTs();

console.log("Total NFTs minted: " + getTotalSupply());
