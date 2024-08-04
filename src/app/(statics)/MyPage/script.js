// const Carousel = () => {
//   const [currentIndex, setCurrentIndex] = useState(0);
//   const carousel = document.querySelector('.carousel');
//   const prevBtn = document.querySelector('.carouselprev');
//   const nextBtn = document.querySelector('.carouselnext');

//   const showSlide = (index) => {
//     carousel.style.transform = `translateX(-${index * 100}%)`;
//   };

//   const handlePrevClick = () => {
//     setCurrentIndex((currentIndex - 1 + carousel.children.length) % carousel.children.length);
//     showSlide(currentIndex);
//   };

//   const handleNextClick = () => {
//     setCurrentIndex((currentIndex + 1) % carousel.children.length);
//     showSlide(currentIndex);
//   };}