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
