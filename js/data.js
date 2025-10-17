import {getRandomInteger} from './util.js';
import {getUniqueRandomSequence} from './util.js';


function generateComment() {
  const sentences = [
    'Всё отлично!',
    'В целом всё неплохо.',
    'Но не всё.',
    'Когда вы делаете фотографию, хорошо бы убирать палец из кадра.',
    'В конце концов это просто непрофессионально.',
    'Моя бабушка случайно чихнула с фотоаппаратом в руках и у неё получилась фотография лучше.',
    'Я поскользнулся на банановой кожуре и уронил фотоаппарат на кота и у меня получилась фотография лучше.',
    'Лица у людей на фотке перекошены, как будто их избивают.',
    'Как можно было поймать такой неудачный момент?!'
  ];

  const numSentences = Math.floor(Math.random() * 2) + 1;

  const selectedSentences = [];
  const usedIndexes = new Set();

  while (selectedSentences.length < numSentences && usedIndexes.size < sentences.length) {
    const randomIndex = Math.floor(Math.random() * sentences.length);

    if (!usedIndexes.has(randomIndex)) {
      selectedSentences.push(sentences[randomIndex]);
      usedIndexes.add(randomIndex);
    }
  }
  return selectedSentences.join(' ');
}


function generateRandomName() {
  const names = [
    'Иван',
    'Мария',
    'Алексей',
    'Анна'
  ];

  // Выбираем случайное имя из массива
  const randomIndex = Math.floor(Math.random() * names.length);
  return names[randomIndex];
}


/*
// eslint-disable-next-line no-unused-vars
const getRandomArrayElement = (elements) => elements[getRandomInteger(0, elements.length - 1)];
*/


const SIMILAR_DESCRIPTIONS_COUNT = 25;

const SIMILAR_COMMENTS_COUNT = getRandomInteger(0, 30);

const createPhotoDescriptions = () => ({
  id: getUniqueRandomSequence(1, 25),
  url: `photos/${  getUniqueRandomSequence(1, 25)  }.jpg`,
  description: 'Очень прикольная фотография',
  likes: getRandomInteger(15, 200),
  // eslint-disable-next-line no-use-before-define
  comments: getSimilarComments()
});

const createComments = () => ({
  comments: {
    id: getUniqueRandomSequence(0, 30),
    avatar: `img/avatar-${  getUniqueRandomSequence(1, 6)  }.svg`,
    message: generateComment(),
    name: generateRandomName()
  }
});

const getSimilarPhotoDescriptions = () => Array.from({length: SIMILAR_DESCRIPTIONS_COUNT}, createPhotoDescriptions);

const getSimilarComments = Array.from({length: SIMILAR_COMMENTS_COUNT}, createComments);


export {getSimilarPhotoDescriptions};
