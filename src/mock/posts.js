import postImage from '../../assets/images/postImage.jpg';
import userProfilePicture from '../../assets/images/userProfile.jpg';

export const posts = [
  {
    id: 1,
    image: postImage,
    title: 'Ліс',
    comments: [
      {
        id: 101,
        userPicture: userProfilePicture,
        userId: 201,
        content: 'Чудове фото!',
        timestamp: '2023-08-24T10:30:00Z',
      },
    ],
    likes: 0,
    geolocation: {
      latitude: 48.9226,
      longitude: 24.7111,
    },
    location: "Ivano-Frankivs'k Region, Ukraine",
  },
  {
    id: 2,
    image: postImage,
    title: 'Замок у Карпатах',
    comments: [
      {
        id: 102,
        userPicture: userProfilePicture,
        userId: 202,
        content: 'Цей замок завжди вражає!',
        timestamp: '2023-08-23T15:45:00Z',
      },
      {
        id: 103,
        userPicture: userProfilePicture,
        userId: 203,
        content: "Якщо буде можливість, обов'язково відвідаю.",
        timestamp: '2023-08-24T08:20:00Z',
      },
    ],
    likes: 60,
    geolocation: {
      latitude: 48.6716,
      longitude: 23.2924,
    },
    location: 'Zakarpattia Region, Ukraine',
  },
  {
    id: 3,
    image: postImage,
    title: 'Природа Карпат',
    comments: [
      {
        id: 104,
        userPicture: userProfilePicture,
        userId: 204,
        content: 'Ці гори завжди мають особливу принаду.',
        timestamp: '2023-08-22T18:10:00Z',
      },
      {
        id: 105,
        userPicture: userProfilePicture,
        userId: 201,
        content: 'Погоджуюсь, природа тут дійсно вражаюча.',
        timestamp: '2023-08-23T09:05:00Z',
      },
      {
        id: 106,
        userPicture: userProfilePicture,
        userId: 205,
        content: 'Неймовірні краєвиди!',
        timestamp: '2023-08-24T11:50:00Z',
      },
      {
        id: 107,
        userPicture: userProfilePicture,
        userId: 206,
        content: 'Справжній рай для туристів.',
        timestamp: '2023-08-24T15:30:00Z',
      },
      {
        id: 108,
        userPicture: userProfilePicture,
        userId: 207,
        content: 'Обожнюю гори!',
        timestamp: '2023-08-24T16:40:00Z',
      },
    ],
    likes: 3,
    isLiked: true,
    geolocation: {
      latitude: 49.8397,
      longitude: 23.9714,
    },
    location: 'Lviv Region, Ukraine',
  },
  {
    id: 4,
    image: postImage,
    title: 'Гірське озеро',
    comments: [
      {
        id: 109,
        userPicture: userProfilePicture,
        userId: 208,
        content: 'Чудове місце для відпочинку.',
        timestamp: '2023-08-24T09:15:00Z',
      },
    ],
    likes: 2,
    geolocation: {
      latitude: 48.4312,
      longitude: 25.953,
    },
    location: 'Chernivtsi Region, Ukraine',
  },
  {
    id: 5,
    image: postImage,
    title: 'Карпатський пейзаж',
    comments: [
      {
        id: 110,
        userPicture: userProfilePicture,
        userId: 209,
        content: 'Карпати - моє улюблене місце.',
        timestamp: '2023-08-24T14:20:00Z',
      },
      {
        id: 111,
        userPicture: userProfilePicture,
        userId: 210,
        content: 'Тут завжди так гарно!',
        timestamp: '2023-08-24T17:10:00Z',
      },
      {
        id: 112,
        userPicture: userProfilePicture,
        userId: 211,
        content: 'Фото неймовірне!',
        timestamp: '2023-08-24T18:30:00Z',
      },
    ],
    likes: 15,
    geolocation: {
      latitude: 49.3558,
      longitude: 25.7036,
    },
    location: 'Ternopil Region, Ukraine',
  },
];
