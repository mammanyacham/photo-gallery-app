const photos = document.querySelectorAll('.js-photo');
const popup = document.querySelector('.js-popup');
const enlargedImage = document.querySelector('.js-enlarged-image');

const funFacts = {
    'photo1.jpg': 'Hey, welcome.This is me, Yacham (or maybe a younger version of me). This is a mini coding project i have been working on, but really it is a little corner of my life — a space filled with some of my fondest memories. What you’ll see here isn’t just pictures. It’s pieces of the people I love so dearly, moments that shaped me, and fragments of the joy we shared. This is very close to my heart. Thank you for being here to feel it with me.',
    
    'photo7.jpg': 'These are my parents on their wedding day, not knowing what the future held, only trusting the love they shared. I wonder what was going through their minds in that moment, They had no idea that love would one day become the foundation for three lives, including mine. It’s crazy to think that, on this day, they weren’t even imagining people like us — yet here we are, living proof of what they began.',
    
    'photo16.jpg': 'Aaron, my eldest brother, MOG of the family, former aspiring medical doctor turned web3 guy. One of the most tender hearted and understanding people i know, so tender yet so fierce(also annoying).  As kids we fought alot (i fought my eldest brother, i was badass like that), but looking back, those fights were part of the bond that shaped us. He has grown into a man of God, i see his heart for the Lord, when you have elders that love the Lord, you dont fall far off.   ',
    
    'photo17.jpg': 'Nashia, software engineer by day, pilot and startup founder in his dreams (a.k.a middle child or papu or simpleton, which ever one suits you). Passionate and obssesed, when he sets his mind on something, he goes all out to get it. I remember when he would trek from our house in shogunle to the international airport in Ikeja, just to see planes takeoff and land. His passion helped inspire my pilot dreams too. ',
    'photo11.jpg': 'This day was a hard one for me, we were leaving Lagos for Kaduna, after a months long holiday. We were leaving my dad(he was based thier at the time). so this was us taking goodbye pictures ',
    'photo5.jpg': 'I dont remember the events that happened on this day, but i am just glad and grateful that my parents documented all of this. P.S: that is definitely not me crying, i mean why would a kid be crying while every other person was having a good time.',
    'photo2.jpg': 'My father, a walking encyclopeadia, there is literally no question you will ask him and he is not well vased in (i mean literally). I used to think my dad was invincible, a lion, a fierce one at that, i thought nothing could ever faze  him, but as i have grown older i have found that he is just as human as the rest of us, so frail and prune to mistakes. I thought my dad was the coolest person on earth(and he was), i remeber the confidence and sense of security i felt whenever he was around. I hope i am able to give my children that feeling too, the feeling of security and warmth, lacking nothing. Thank you Dad for your selfless sacrifices. P.S: this picture was taken in Mozambique. ',
    'photo9.jpg': 'My dad was not always around, most times he would be traveling all week and then back home on the weekends. Those weekends holds some of the best memories. We had new wrist watches, shoes, toys, chocolates, from around the world. ',
    'photo19.jpg': 'My mother, the definition of motherhood, she is my comfort zone, just hearing her voice makes me feel at home. She taught us to pray, she taught us to love the Lord and to find safety in him, i remeber days during school breaks when we would spend all morning praying. She did not only teach us we saw her live the life. She is the voice of my conscience. I saw her lead my family in the days my dad was not around, i saw her lead siblings too. I love you mama, even though i dont say it enough.   ',
    'photo6.jpg': 'I love to think that i could pass for a model, see that pose mhen!. Also that was my favorite T-shirt at the time.',
    'photo4.jpg': 'This was my fifth birthday, one of my most memorable birthday parties because it was a suprise, i did not expect it at all, they were toys for all the kids, dolls for the girls and RC cars for the boys. P.S: i did not enjoy the cake because it had butter icing and so it was not as sweet as normal icings',
    'photo14.jpg': 'i had some of the best memories with these guys and i am looking to connect with them again. funfact: The lady in the blue beads right behind me is Noor Buhari(President Buharis daughter).',
    'photo15.jpg': 'These were my guys, Tumi, Nazim, David, Daniel, Adnan, Khalil, Abubakar. i miss these people.',
    'photo18.jpg': 'funfact: Every single person in this picture currently lives outside Nigeria except me.',
    'photo8.jpg': '',
    'photo3.jpg': '',
    'photo20.jpg': 'Spot me! (if you can a $100 for you)'
}

photos.forEach((photo) => {
    const bigImage = photo.style.backgroundImage;
    const url = bigImage.slice(5, -2);
    const fileName = url.split('/').pop();
    const funFact = funFacts[fileName] || 'No fun fact yet!';
    photo.addEventListener('click', () => {
        console.log('good');

        enlargedImage.innerHTML = `
        <div style="background-image: url('${url}');" class="image"></div>
        <div class="fun-fact">${funFact}</div>
        `
        showPopup();         
});

   
});

function showPopup() {
    
    popup.style.display = "flex";
    popup.classList.add('active');
};

function closePopup() {
    popup.addEventListener('click', () => {
       setTimeout(() => {
        popup.style.display = "none"
       }, 400) 
    })
    
};

closePopup();

