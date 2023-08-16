import postImage from '../../assets/images/postImage.jpg';

export const posts = [
  {
    id: 1,
    image: postImage,
    title: 'Ліс',
    comments: 0,
    likes: 0,
    location: "Ivano-Frankivs'k Region, Ukraine",
  },
  {
    id: 2,
    image: postImage,
    title: 'Замок у Карпатах',
    comments: 2,
    likes: 60,
    location: 'Zakarpattia Region, Ukraine',
  },
  {
    id: 3,
    image: postImage,
    title: 'Природа Карпат',
    comments: 5,
    likes: 3,
    isLiked: true,
    location: 'Lviv Region, Ukraine',
  },
  {
    id: 4,
    image: postImage,
    title: 'Гірське озеро',
    comments: 1,
    likes: 2,
    location: 'Chernivtsi Region, Ukraine',
  },
  {
    id: 5,
    image: postImage,
    title: 'Карпатський пейзаж',
    comments: 3,
    likes: 15,
    location: 'Ternopil Region, Ukraine',
  },
];
