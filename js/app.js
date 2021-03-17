'use strict';

alert('There are several questions. You must answer (y) yes or (n) no to the following questions.');

let start = prompt('Do you expect that I love animals?');

while (start.toLowerCase() !== 'y' && start.toLowerCase() !== 'n')
{
  alert('This wrong value: ' + start + ', Please enter (y) yes or (n) no to the following questions.');
  start = prompt('Do you think I like animals?');
}

if (start.toUpperCase() === 'Y')
{
  console.log('Interesting Chose.');

  alert('There are several questions. You must answer (c) cat or (d) dog to the following questions.');

  let animal = prompt('Do you think I prefer a cat or a dog?');

  while (animal.toLowerCase() !== 'c' && animal.toLowerCase() !== 'd')
  {
    alert('This wrong value: ' + animal + ', Please enter (c) cat or (d) dog to the following questions.');
    animal = prompt('Do you think I prefer a cat or a dog?');
  }

  if(animal.toUpperCase() === 'C')
  {
    console.log('You\'re cat lovers.');
    alert('You\'re cat lovers.');
  }
  else
  {
    console.log('You\'re dog lovers.');
    alert('You\'re dog lovers.');
  }

}
else
{
  console.log('You don\'t like animals.');
  alert('You don\'t like animals.');
}

let music = prompt('Do you expect that I love music?');

while (music.toLocaleLowerCase() !== 'y' && music.toLocaleLowerCase() !== 'n')
{
  alert('This wrong value: ' + music + ', Please enter (y) yes or (n) no to the following questions.');
  music = prompt('Do you expect that I love music?');
}

switch(music.toUpperCase())
{
case 'Y':
  console.log('Nice 😎');
  alert('Nice 😎');
  break;
case 'N':
  console.log('Are you sure 😱');
  alert('Are you sure 😱');
  break;
default:
  console.log('default');
  alert('default');
}

let cinema = prompt('Do you like the cinema?');

while (cinema.toLocaleLowerCase() !== 'y' && cinema.toLocaleLowerCase() !== 'n')
{
  alert('This wrong value: ' + cinema + ', Please enter (y) yes or (n) no to the following questions.');
  cinema = prompt('Do you expect that I love music?');
}

switch(cinema.toUpperCase())
{
case 'Y':
  console.log('I also love cinema great, my favorite movie the joker.');
  alert('I also love cinema great, my favorite movie the joker.');
  break;
case 'N':
  console.log('😱');
  alert('😱');
  break;
default:
  console.log('default');
  alert('default');
}

let running = prompt('Are you faster than me in running?');

while (running.toLocaleLowerCase() !== 'y' && running.toLocaleLowerCase() !== 'n')
{
  alert('This wrong value: ' + running + ', Please enter (y) yes or (n) no to the following questions.');
  running = prompt('Do you expect that I love music?');
}

switch(running.toUpperCase())
{
case 'Y':
  console.log('don\'t try you too slow');
  alert('don\'t try you too slow');
  break;
case 'N':
  console.log('I\'m sure you\'re too slow');
  alert('I\'m sure you\'re too slow');
  break;
default:
  console.log('default');
  alert('default');
}

let age = prompt('Can you think I\'ll be over 30 years old?');

while (age.toLocaleLowerCase() !== 'y' && age.toLocaleLowerCase() !== 'n')
{
  alert('This wrong value: ' + age + ', Please enter (y) yes or (n) no to the following questions.');
  age = prompt('Can you think I\'ll be over 30 years old?');
}

switch(age.toUpperCase())
{
case 'Y':
  console.log('Why am I so young? I\'m not even that old -_-');
  alert('Why am I so young? I\'m not even that old -_-');
  break;
case 'N':
  console.log('Good guess.');
  alert('Good guess.');
  break;
default:
  console.log('default');
  alert('default');
}

alert('Now you in the second stage, of the guessing game, you ready?');

let point = 0;
let tryCount = 0;

let text = 'Three of this list are my favorites movies, can u guess it?';

let wList = ['1. The Pianist', '2. Inception', '3. Nightcrawler', '4. Parasite', '5. Taxi Driver', '6. Fight Club', '7. Joker', '8. Green Book'];

for(let i = 0; i < wList.length; i++)
{
  text += '\n' + wList[i];
}

let watchList;

tryCount = 5;

do
{
  watchList = prompt(text+ '\nYou have a '+ tryCount +' try');

  if(watchList.toLocaleLowerCase() === '1' || watchList.toLocaleLowerCase() === '3' || watchList.toLocaleLowerCase() === '5')
  {
    alert('guess good');
    point++;
    break;
  }
  else
  {
    alert('try again');
  }

  tryCount -= 1;
  alert('Please choose a number between 1 - ' + (wList.length +1));
} while(watchList.toLocaleLowerCase() && tryCount > 0);

console.log('Your points: '+ point);


text = 'Two of this list are my favorites color, can u guess it?';

let cList = ['1. Red', '2. Blue', '3. Black', '4. White', '5. Green'];

for(let i = 0; i < cList.length; i++)
{
  text += '\n' + cList[i];
}

let colorList;

tryCount = 5;

do
{
  colorList = prompt(text+ '\nYou have a '+ tryCount +' try');

  if(colorList.toLocaleLowerCase() === '1' || colorList.toLocaleLowerCase() === '3')
  {
    alert('guess good');
    point++;
    break;
  }
  else
  {
    alert('try again');
  }

  tryCount -= 1;
  alert('Please choose a number between 1 - ' + (colorList.length +1));
} while(colorList.toLocaleLowerCase() && tryCount > 0);

console.log('Your points: '+ point);

text = 'Two of this list are my favorites food, can u guess it?';

let fList = ['1. Mansaf', '2. Kabsa', '3. Muhashi', '4. Mujdara', '5. Waraq Eanab'];

for(let i = 0; i < fList.length; i++)
{
  text += '\n' + fList[i];
}

let foodList;

tryCount = 5;

do
{
  foodList = prompt(text+ '\nYou have a '+ tryCount +' try');

  if(foodList.toLocaleLowerCase() === '1' || foodList.toLocaleLowerCase() === '5')
  {
    alert('guess good');
    point++;
    break;
  }
  else
  {
    alert('try again');
  }

  tryCount -= 1;
  alert('Please choose a number between 1 - ' + (foodList.length +1));
} while(foodList.toLocaleLowerCase() && tryCount > 0);

console.log('Your points: '+ point);

text = 'Two of this list are my favorites sport, can u guess it?';

let sList = ['1. Handball', '2. Football', '3. Volleyball ', '4. Tennis', '5. Golf'];

for(let i = 0; i < sList.length; i++)
{
  text += '\n' + sList[i];
}

let sportList;

tryCount = 5;

do
{
  sportList = prompt(text+ '\nYou have a '+ tryCount +' try');

  if(sportList.toLocaleLowerCase() === '2' || sportList.toLocaleLowerCase() === '4')
  {
    alert('guess good');
    point++;
    break;
  }
  else
  {
    alert('try again');
  }

  tryCount -= 1;
  alert('Please choose a number between 1 - ' + (sportList.length +1));
} while(sportList.toLocaleLowerCase() && tryCount > 0);

console.log('Your points: '+ point);

text = 'Two of this list are my favorites fruits, can u guess it?';

let frList = ['1. Orange', '2. Pomegranate', '3. Banana ', '4. Cranberry', '5. Almond'];

for(let i = 0; i < frList.length; i++)
{
  text += '\n' + frList[i];
}

let fruitsList;

tryCount = 5;

do
{
  fruitsList = prompt(text+ '\nYou have a '+ tryCount +' try');

  if(fruitsList.toLocaleLowerCase() === '1' || fruitsList.toLocaleLowerCase() === '4')
  {
    alert('guess good');
    point++;
    break;
  }
  else
  {
    alert('try again');
  }

  tryCount -= 1;
  alert('Please choose a number between 1 - ' + (fruitsList.length +1));
} while(fruitsList.toLocaleLowerCase() && tryCount > 0);

console.log('Your points: '+ point);

text = 'Two of this list are my favorites pet, can u guess it?';

let pList = ['1. Dog', '2. cat', '3. whale ', '4. fish', '5. lion'];

for(let i = 0; i < pList.length; i++)
{
  text += '\n' + pList[i];
}

let petList;

tryCount = 5;

do
{
  petList = prompt(text+ '\nYou have a '+ tryCount +' try');

  if(petList.toLocaleLowerCase() === '1' || petList.toLocaleLowerCase() === '4')
  {
    alert('guess good');
    point++;
    break;
  }
  else
  {
    alert('try again');
  }

  tryCount -= 1;
  alert('Please choose a number between 1 - ' + (petList.length +1));
} while(petList.toLocaleLowerCase() && tryCount > 0);

console.log('Your points: '+ point);

text = 'Two of this list are my favorites singer, can u guess it?';

let siList = ['1. Kazem El Saher', '2. Fadl Shaker', '3. Adam', '4. Adham', '5. Eminem'];

for(let i = 0; i < siList.length; i++)
{
  text += '\n' + siList[i];
}

let singerList;

tryCount = 5;

do
{
  singerList = prompt(text+ '\nYou have a '+ tryCount +' try');

  if(singerList.toLocaleLowerCase() === '1' || singerList.toLocaleLowerCase() === '5')
  {
    alert('guess good');
    point++;
    break;
  }
  else
  {
    alert('try again');
  }

  tryCount -= 1;
  alert('Please choose a number between 1 - ' + (singerList.length +1));
} while(singerList.toLocaleLowerCase() && tryCount > 0);

console.log('Your points: '+ point);

text = 'Two of this list are my favorites type of music, can u guess it?';

let tfmList = ['1. Classic', '2. rap', '3. hip-hop', '4. rhythm', '5. k-pop'];

for(let i = 0; i < tfmList.length; i++)
{
  text += '\n' + tfmList[i];
}

let musicList;

tryCount = 5;

do
{
  musicList = prompt(text+ '\nYou have a '+ tryCount +' try');

  if(musicList.toLocaleLowerCase() === '1' || musicList.toLocaleLowerCase() === '2')
  {
    alert('guess good');
    point++;
    break;
  }
  else
  {
    alert('try again');
  }

  tryCount -= 1;
  alert('Please choose a number between 1 - ' + (musicList.length +1));
} while(musicList.toLocaleLowerCase() && tryCount > 0);

console.log('Your points: '+ point);

text = 'Two of this list are my favorites type of series, can u guess it?';

let seList = ['1. Ted Lasso', '2. dark', '3. Breaking Bad ', '4. Black Mirror', '5. Vikings'];

for(let i = 0; i < seList.length; i++)
{
  text += '\n' + seList[i];
}

let seriesList;

tryCount = 5;

do
{
  seriesList = prompt(text+ '\nYou have a '+ tryCount +' try');

  if(seriesList.toLocaleLowerCase() === '1' || seriesList.toLocaleLowerCase() === '3')
  {
    alert('guess good');
    point++;
    break;
  }
  else
  {
    alert('try again');
  }

  tryCount -= 1;
  alert('Please choose a number between 1 - ' + (seriesList.length +1));
} while(seriesList.toLocaleLowerCase() && tryCount > 0);

console.log('Your points: '+ point);

text = 'Two of this list are my favorites type of clothing style, can u guess it?';

let cseList = ['1. Sport', '2. formal', '3. beachwear', '4. semi-formal'];

for(let i = 0; i < cseList.length; i++)
{
  text += '\n' + cseList[i];
}

let styleList;

tryCount = 5;

do
{
  styleList = prompt(text+ '\nYou have a '+ tryCount +' try');

  if(styleList.toLocaleLowerCase() === '2' || styleList.toLocaleLowerCase() === '4')
  {
    alert('guess good');
    point++;
    break;
  }
  else
  {
    alert('try again');
  }

  tryCount -= 1;
  alert('Please choose a number between 1 - ' + (styleList.length));
} while(styleList.toLocaleLowerCase() && tryCount > 0);

console.log('Your points: '+ point);

alert('Your points: '+ point);


text = 'guess a number between 1-10?';

let numberList;

tryCount = 5;

do
{
  numberList = prompt(text+ '\nYou have a '+ tryCount +' try');

  if(Number(numberList) === 5)
  {
    alert('guess good');
    point++;
    break;
  }
  else if (Number(numberList) > 5)
  {
    alert('too high');
  }
  else if (Number(numberList) < 5)
  {
    alert('too low');
  }

  tryCount -= 1;
} while(tryCount > 0);
