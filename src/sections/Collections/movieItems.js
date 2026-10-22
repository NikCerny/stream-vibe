import {
  sliderParamsOneHalfFour,
  sliderParamsTwoFive,
} from "./sliderSpecificParams";
import categoryItems from "@/sections/Categories/categoryItems";

const movieItems = [
  {
    title: "Our genres",
    sliderParams: sliderParamsTwoFive,
    items: categoryItems,
  },
  {
    title: "Popular Top 10 In Genres",
    isPopular: true,
    sliderParams: sliderParamsOneHalfFour,
    items: [
      {
        title: "Action",
        badgeContent: "Top 10 In",
        images: [
          "/src/assets/images/categories/popular-top-10/10.png",
          "/src/assets/images/categories/popular-top-10/2.png",
          "/src/assets/images/categories/popular-top-10/3.png",
          "/src/assets/images/categories/popular-top-10/4.png",
        ],
      },
      {
        title: "Adventure",
        badgeContent: "Top 10 In",
        images: [
          "/src/assets/images/categories/adventure/1.jpg",
          "/src/assets/images/categories/adventure/2.jpg",
          "/src/assets/images/categories/adventure/3.jpg",
          "/src/assets/images/categories/adventure/4.jpg",
        ],
      },
      {
        title: "Comedy",
        badgeContent: "Top 10 In",
        images: [
          "/src/assets/images/categories/comedy/1.jpg",
          "/src/assets/images/categories/comedy/2.jpg",
          "/src/assets/images/categories/comedy/3.jpg",
          "/src/assets/images/categories/comedy/4.jpg",
        ],
      },
      {
        title: "Drama",
        badgeContent: "Top 10 In",
        images: [
          "/src/assets/images/categories/drama/1.jpg",
          "/src/assets/images/categories/drama/2.jpg",
          "/src/assets/images/categories/drama/3.jpg",
          "/src/assets/images/categories/drama/4.jpg",
        ],
      },
      {
        title: "Horror",
        badgeContent: "Top 10 In",
        images: [
          "/src/assets/images/categories/horror/1.jpg",
          "/src/assets/images/categories/horror/2.jpg",
          "/src/assets/images/categories/horror/3.jpg",
          "/src/assets/images/categories/horror/4.jpg",
        ],
      },
      {
        title: "Action 2",
        badgeContent: "Top 10 In",
        images: [
          "/src/assets/images/categories/popular-top-10/10.png",
          "/src/assets/images/categories/popular-top-10/2.png",
          "/src/assets/images/categories/popular-top-10/3.png",
          "/src/assets/images/categories/popular-top-10/4.png",
        ],
      },
      {
        title: "Adventure 2",
        badgeContent: "Top 10 In",
        images: [
          "/src/assets/images/categories/adventure/1.jpg",
          "/src/assets/images/categories/adventure/2.jpg",
          "/src/assets/images/categories/adventure/3.jpg",
          "/src/assets/images/categories/adventure/4.jpg",
        ],
      },
      {
        title: "Comedy 2",
        badgeContent: "Top 10 In",
        images: [
          "/src/assets/images/categories/comedy/1.jpg",
          "/src/assets/images/categories/comedy/2.jpg",
          "/src/assets/images/categories/comedy/3.jpg",
          "/src/assets/images/categories/comedy/4.jpg",
        ],
      },
      {
        title: "Drama 3",
        badgeContent: "Top 10 In",
        images: [
          "/src/assets/images/categories/drama/1.jpg",
          "/src/assets/images/categories/drama/2.jpg",
          "/src/assets/images/categories/drama/3.jpg",
          "/src/assets/images/categories/drama/4.jpg",
        ],
      },
      {
        title: "Action 3",
        badgeContent: "Top 10 In",
        images: [
          "/src/assets/images/categories/popular-top-10/10.png",
          "/src/assets/images/categories/popular-top-10/2.png",
          "/src/assets/images/categories/popular-top-10/3.png",
          "/src/assets/images/categories/popular-top-10/4.png",
        ],
      },
      {
        title: "Adventure 3",
        badgeContent: "Top 10 In",
        images: [
          "/src/assets/images/categories/adventure/1.jpg",
          "/src/assets/images/categories/adventure/2.jpg",
          "/src/assets/images/categories/adventure/3.jpg",
          "/src/assets/images/categories/adventure/4.jpg",
        ],
      },
      {
        title: "Comedy 3",
        badgeContent: "Top 10 In",
        images: [
          "/src/assets/images/categories/comedy/1.jpg",
          "/src/assets/images/categories/comedy/2.jpg",
          "/src/assets/images/categories/comedy/3.jpg",
          "/src/assets/images/categories/comedy/4.jpg",
        ],
      },
      {
        title: "Drama 4",
        badgeContent: "Top 10 In",
        images: [
          "/src/assets/images/categories/drama/1.jpg",
          "/src/assets/images/categories/drama/2.jpg",
          "/src/assets/images/categories/drama/3.jpg",
          "/src/assets/images/categories/drama/4.jpg",
        ],
      },
      {
        title: "Action 4",
        badgeContent: "Top 10 In",
        images: [
          "/src/assets/images/categories/popular-top-10/10.png",
          "/src/assets/images/categories/popular-top-10/2.png",
          "/src/assets/images/categories/popular-top-10/3.png",
          "/src/assets/images/categories/popular-top-10/4.png",
        ],
      },
      {
        title: "Adventure 4",
        badgeContent: "Top 10 In",
        images: [
          "/src/assets/images/categories/adventure/1.jpg",
          "/src/assets/images/categories/adventure/2.jpg",
          "/src/assets/images/categories/adventure/3.jpg",
          "/src/assets/images/categories/adventure/4.jpg",
        ],
      },
      {
        title: "Comedy 4",
        badgeContent: "Top 10 In",
        images: [
          "/src/assets/images/categories/comedy/1.jpg",
          "/src/assets/images/categories/comedy/2.jpg",
          "/src/assets/images/categories/comedy/3.jpg",
          "/src/assets/images/categories/comedy/4.jpg",
        ],
      },
    ],
  },
  {
    title: "Trending Now",
    isTrending: true,
    sliderParams: sliderParamsTwoFive,
    items: [
      {
        images: ["/src/assets/images/categories/trending-movie/1.jpg"],
        duration: 90,
        views: 2000,
      },
      {
        images: ["/src/assets/images/categories/trending-movie/2.jpg"],
        duration: 117,
        views: 1500,
      },
      {
        images: ["/src/assets/images/categories/trending-movie/3.jpg"],
        duration: 130,
        views: 1800,
      },
      {
        images: ["/src/assets/images/categories/trending-movie/4.jpg"],
        duration: 140,
        views: 3000,
      },
      {
        images: ["/src/assets/images/categories/trending-movie/5.jpg"],
        duration: 102,
        views: 5000,
      },
      {
        images: ["/src/assets/images/categories/trending-movie/1.jpg"],
        duration: 90,
        views: 2000,
      },
      {
        images: ["/src/assets/images/categories/trending-movie/2.jpg"],
        duration: 117,
        views: 1500,
      },
      {
        images: ["/src/assets/images/categories/trending-movie/3.jpg"],
        duration: 130,
        views: 1800,
      },
      {
        images: ["/src/assets/images/categories/trending-movie/4.jpg"],
        duration: 140,
        views: 3000,
      },
      {
        images: ["/src/assets/images/categories/trending-movie/1.jpg"],
        duration: 90,
        views: 2000,
      },
      {
        images: ["/src/assets/images/categories/trending-movie/2.jpg"],
        duration: 117,
        views: 1500,
      },
      {
        images: ["/src/assets/images/categories/trending-movie/3.jpg"],
        duration: 130,
        views: 1800,
      },
      {
        images: ["/src/assets/images/categories/trending-movie/4.jpg"],
        duration: 140,
        views: 3000,
      },
      {
        images: ["/src/assets/images/categories/trending-movie/1.jpg"],
        duration: 90,
        views: 2000,
      },
      {
        images: ["/src/assets/images/categories/trending-movie/2.jpg"],
        duration: 117,
        views: 1500,
      },
      {
        images: ["/src/assets/images/categories/trending-movie/3.jpg"],
        duration: 130,
        views: 1800,
      },
      {
        images: ["/src/assets/images/categories/trending-movie/4.jpg"],
        duration: 140,
        views: 3000,
      },
    ],
  },
  {
    title: "New Releases",
    isNewRelease: true,
    sliderParams: sliderParamsTwoFive,
    items: [
      {
        images: ["/src/assets/images/categories/new-releases/1.jpg"],
        releaseDate: "2023-04-14",
      },
      {
        images: ["/src/assets/images/categories/new-releases/2.jpg"],
        releaseDate: "2023-04-22",
      },
      {
        images: ["/src/assets/images/categories/new-releases/3.jpg"],
        releaseDate: "2023-04-13",
      },
      {
        images: ["/src/assets/images/categories/new-releases/4.jpg"],
        releaseDate: "2025-06-10",
      },
      {
        images: ["/src/assets/images/categories/new-releases/5.jpg"],
        releaseDate: "2023-03-14",
      },
      {
        images: ["/src/assets/images/categories/new-releases/1.jpg"],
        releaseDate: "2023-04-14",
      },
      {
        images: ["/src/assets/images/categories/new-releases/2.jpg"],
        releaseDate: "2023-04-22",
      },
      {
        images: ["/src/assets/images/categories/new-releases/3.jpg"],
        releaseDate: "2023-04-13",
      },
      {
        images: ["/src/assets/images/categories/new-releases/4.jpg"],
        releaseDate: "2025-06-10",
      },
      {
        images: ["/src/assets/images/categories/new-releases/5.jpg"],
        releaseDate: "2023-03-14",
      },
      {
        images: ["/src/assets/images/categories/new-releases/1.jpg"],
        releaseDate: "2023-04-14",
      },
      {
        images: ["/src/assets/images/categories/new-releases/2.jpg"],
        releaseDate: "2023-04-22",
      },
      {
        images: ["/src/assets/images/categories/new-releases/3.jpg"],
        releaseDate: "2023-04-13",
      },
      {
        images: ["/src/assets/images/categories/new-releases/4.jpg"],
        releaseDate: "2025-06-10",
      },
      {
        images: ["/src/assets/images/categories/new-releases/5.jpg"],
        releaseDate: "2023-03-14",
      },
      {
        images: ["/src/assets/images/categories/new-releases/1.jpg"],
        releaseDate: "2023-04-14",
      },
      {
        images: ["/src/assets/images/categories/new-releases/2.jpg"],
        releaseDate: "2023-04-22",
      },
      {
        images: ["/src/assets/images/categories/new-releases/3.jpg"],
        releaseDate: "2023-04-13",
      },
      {
        images: ["/src/assets/images/categories/new-releases/4.jpg"],
        releaseDate: "2025-06-10",
      },
      {
        images: ["/src/assets/images/categories/new-releases/5.jpg"],
        releaseDate: "2023-03-14",
      },
    ],
  },
  {
    title: "Must - Watch Movies",
    isMustWatch: true,
    sliderParams: sliderParamsOneHalfFour,
    items: [
      {
        images: ["/src/assets/images/categories/must-watch/1.jpg"],
        duration: 117,
        rating: 4.5,
        views: 20000,
      },
      {
        images: ["/src/assets/images/categories/must-watch/2.jpg"],
        duration: 90,
        rating: 4,
        views: 15000,
      },
      {
        images: ["/src/assets/images/categories/must-watch/3.jpg"],
        duration: 102,
        rating: 4.5,
        views: 10000,
      },
      {
        images: ["/src/assets/images/categories/must-watch/4.jpg"],
        duration: 130,
        rating: 4,
        views: 20000,
      },
      {
        images: ["/src/assets/images/categories/must-watch/1.jpg"],
        duration: 117,
        rating: 4.5,
        views: 20000,
      },
      {
        images: ["/src/assets/images/categories/must-watch/2.jpg"],
        duration: 90,
        rating: 4,
        views: 15000,
      },
      {
        images: ["/src/assets/images/categories/must-watch/3.jpg"],
        duration: 102,
        rating: 4.5,
        views: 10000,
      },
      {
        images: ["/src/assets/images/categories/must-watch/4.jpg"],
        duration: 130,
        rating: 4,
        views: 20000,
      },
      {
        images: ["/src/assets/images/categories/must-watch/1.jpg"],
        duration: 117,
        rating: 4.5,
        views: 20000,
      },
      {
        images: ["/src/assets/images/categories/must-watch/2.jpg"],
        duration: 90,
        rating: 4,
        views: 15000,
      },
      {
        images: ["/src/assets/images/categories/must-watch/3.jpg"],
        duration: 102,
        rating: 4.5,
        views: 10000,
      },
      {
        images: ["/src/assets/images/categories/must-watch/4.jpg"],
        duration: 130,
        rating: 4,
        views: 20000,
      },
      {
        images: ["/src/assets/images/categories/must-watch/1.jpg"],
        duration: 117,
        rating: 4.5,
        views: 20000,
      },
      {
        images: ["/src/assets/images/categories/must-watch/2.jpg"],
        duration: 90,
        rating: 4,
        views: 15000,
      },
      {
        images: ["/src/assets/images/categories/must-watch/3.jpg"],
        duration: 102,
        rating: 4.5,
        views: 10000,
      },
      {
        images: ["/src/assets/images/categories/must-watch/4.jpg"],
        duration: 130,
        rating: 4,
        views: 20000,
      },
    ],
  },
];

export default movieItems;
