import react from "react";
import reactDOM from "react-dom";

const HeaderComponent = () => {
  return (
    <div className="header">
      <div className="logo">
        <img
          id="logo"
          src="https://logo.com/image-cdn/images/kts928pd/production/7ab5def0ab1dad26a90bc35cb7eed9e628f7f201-430x430.png?w=1080&q=72"
        />
      </div>
      <div className="navbar">
        <div className="navbar-items">
          <ul>
            <li>Home</li>
            <li>About us</li>
            <li>Name</li>
            <li>Cart</li>
          </ul>
        </div>
      </div>
    </div>
  );
};

const restaurantList = [
  {
    info: {
      id: "78057",
      name: "Chilli'Z Restro",
      cloudinaryImageId: "gkeymduioynruheoqhlq",
      locality: "Ring Road",
      areaName: "Dharampur",
      costForTwo: "₹400 for two",
      cuisines: ["Indian", "Chinese", "Snacks"],
      avgRating: 4.2,
      parentId: "13645",
      avgRatingString: "4.2",
      totalRatingsString: "10K+",
      sla: {
        deliveryTime: 44,
        lastMileTravel: 8.1,
        serviceability: "SERVICEABLE",
        slaString: "40-45 mins",
        lastMileTravelString: "8.1 km",
        iconType: "ICON_TYPE_EMPTY",
      },
      availability: {
        nextCloseTime: "2024-01-28 00:00:00",
        opened: true,
      },
      badges: {},
      isOpen: true,
      type: "F",
      badgesV2: {
        entityBadges: {
          imageBased: {},
          textBased: {},
          textExtendedBadges: {},
        },
      },
      aggregatedDiscountInfoV3: {
        header: "₹125 OFF",
        subHeader: "ABOVE ₹199",
        discountTag: "FLAT DEAL",
      },
      loyaltyDiscoverPresentationInfo: {
        logoCtx: {
          logo: "Swiggy%20One%20Lite/One_lite_vertical_logo.png",
        },
        freedelMessage: "FREE DELIVERY",
        badgeType: "BADGE_TYPE_ONE_LITE",
      },
      differentiatedUi: {
        displayType: "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
        differentiatedUiMediaDetails: {
          mediaType: "ADS_MEDIA_ENUM_IMAGE",
          lottie: {},
          video: {},
        },
      },
      reviewsSummary: {},
      displayType: "RESTAURANT_DISPLAY_TYPE_DEFAULT",
      restaurantOfferPresentationInfo: {},
    },
    analytics: {},
    cta: {
      link: "https://www.swiggy.com/restaurants/chilliz-restro-ring-road-dharampur-dehradun-78057",
      type: "WEBLINK",
    },
  },
  {
    info: {
      id: "653445",
      name: "Domino's Pizza",
      cloudinaryImageId: "0e7bc46a0e74d28b0d88e1fad2830dbc",
      locality: "Haridwar Dehradun Road",
      areaName: "Harrawala",
      costForTwo: "₹400 for two",
      cuisines: ["Pizzas", "Italian", "Pastas", "Desserts"],
      avgRating: 4.3,
      parentId: "2456",
      avgRatingString: "4.3",
      totalRatingsString: "100+",
      sla: {
        deliveryTime: 25,
        serviceability: "SERVICEABLE",
        slaString: "25 mins",
        iconType: "ICON_TYPE_EMPTY",
      },
      availability: {
        nextCloseTime: "2024-01-27 23:59:00",
        opened: true,
      },
      badges: {},
      isOpen: true,
      type: "F",
      badgesV2: {
        entityBadges: {
          imageBased: {},
          textBased: {},
          textExtendedBadges: {},
        },
      },
      aggregatedDiscountInfoV3: {
        header: "₹125 OFF",
        subHeader: "ABOVE ₹199",
        discountTag: "FLAT DEAL",
      },
      differentiatedUi: {
        displayType: "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
        differentiatedUiMediaDetails: {
          mediaType: "ADS_MEDIA_ENUM_IMAGE",
          lottie: {},
          video: {},
        },
      },
      reviewsSummary: {},
      displayType: "RESTAURANT_DISPLAY_TYPE_DEFAULT",
      restaurantOfferPresentationInfo: {},
    },
    analytics: {},
    cta: {
      link: "https://www.swiggy.com/restaurants/dominos-pizza-haridwar-road-harrawala-dehradun-653445",
      type: "WEBLINK",
    },
  },
  {
    info: {
      id: "691779",
      name: "KFC",
      cloudinaryImageId: "f01666ac73626461d7455d9c24005cd4",
      locality: "Jogiwala Chowk",
      areaName: "Oasis Mall",
      costForTwo: "₹400 for two",
      cuisines: ["Burgers", "Biryani", "American", "Snacks", "Fast Food"],
      avgRating: 4.3,
      parentId: "547",
      avgRatingString: "4.3",
      totalRatingsString: "1K+",
      sla: {
        deliveryTime: 34,
        lastMileTravel: 5,
        serviceability: "SERVICEABLE",
        slaString: "30-35 mins",
        lastMileTravelString: "5.0 km",
        iconType: "ICON_TYPE_EMPTY",
      },
      availability: {
        nextCloseTime: "2024-01-28 00:00:00",
        opened: true,
      },
      badges: {},
      isOpen: true,
      type: "F",
      badgesV2: {
        entityBadges: {
          imageBased: {},
          textBased: {},
          textExtendedBadges: {},
        },
      },
      aggregatedDiscountInfoV3: {
        header: "₹125 OFF",
        subHeader: "ABOVE ₹199",
        discountTag: "FLAT DEAL",
      },
      loyaltyDiscoverPresentationInfo: {
        logoCtx: {
          logo: "Swiggy%20One%20Lite/One_lite_vertical_logo.png",
        },
        freedelMessage: "FREE DELIVERY",
        badgeType: "BADGE_TYPE_ONE_LITE",
      },
      differentiatedUi: {
        displayType: "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
        differentiatedUiMediaDetails: {
          mediaType: "ADS_MEDIA_ENUM_IMAGE",
          lottie: {},
          video: {},
        },
      },
      reviewsSummary: {},
      displayType: "RESTAURANT_DISPLAY_TYPE_DEFAULT",
      restaurantOfferPresentationInfo: {},
    },
    analytics: {},
    cta: {
      link: "https://www.swiggy.com/restaurants/kfc-jogiwala-chowk-oasis-mall-dehradun-691779",
      type: "WEBLINK",
    },
  },
  {
    info: {
      id: "697181",
      name: "Burger King",
      cloudinaryImageId: "e33e1d3ba7d6b2bb0d45e1001b731fcf",
      locality: "Oasis",
      areaName: "Dehradun",
      costForTwo: "₹350 for two",
      cuisines: ["Burgers", "American"],
      avgRating: 4.4,
      parentId: "166",
      avgRatingString: "4.4",
      totalRatingsString: "1K+",
      sla: {
        deliveryTime: 37,
        lastMileTravel: 5.6,
        serviceability: "SERVICEABLE",
        slaString: "35-40 mins",
        lastMileTravelString: "5.6 km",
        iconType: "ICON_TYPE_EMPTY",
      },
      availability: {
        nextCloseTime: "2024-01-28 00:00:00",
        opened: true,
      },
      badges: {},
      isOpen: true,
      type: "F",
      badgesV2: {
        entityBadges: {
          imageBased: {},
          textBased: {},
          textExtendedBadges: {},
        },
      },
      aggregatedDiscountInfoV3: {
        header: "₹125 OFF",
        subHeader: "ABOVE ₹199",
        discountTag: "FLAT DEAL",
      },
      loyaltyDiscoverPresentationInfo: {
        logoCtx: {
          logo: "Swiggy%20One%20Lite/One_lite_vertical_logo.png",
        },
        freedelMessage: "FREE DELIVERY",
        badgeType: "BADGE_TYPE_ONE_LITE",
      },
      differentiatedUi: {
        displayType: "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
        differentiatedUiMediaDetails: {
          mediaType: "ADS_MEDIA_ENUM_IMAGE",
          lottie: {},
          video: {},
        },
      },
      reviewsSummary: {},
      displayType: "RESTAURANT_DISPLAY_TYPE_DEFAULT",
      restaurantOfferPresentationInfo: {},
    },
    analytics: {},
    cta: {
      link: "https://www.swiggy.com/restaurants/burger-king-oasis-dehradun-dehradun-697181",
      type: "WEBLINK",
    },
  },
  {
    info: {
      id: "253768",
      name: "McDonald's",
      cloudinaryImageId: "ecd32b841549ce6bfd993260a2086c1f",
      locality: "Rajpur Road",
      areaName: "Karanpur",
      costForTwo: "₹400 for two",
      cuisines: ["American"],
      avgRating: 4.4,
      parentId: "630",
      avgRatingString: "4.4",
      totalRatingsString: "10K+",
      sla: {
        deliveryTime: 49,
        lastMileTravel: 10.5,
        serviceability: "SERVICEABLE",
        slaString: "45-50 mins",
        lastMileTravelString: "10.5 km",
        iconType: "ICON_TYPE_EMPTY",
      },
      availability: {
        nextCloseTime: "2024-01-27 23:45:00",
        opened: true,
      },
      badges: {},
      isOpen: true,
      type: "F",
      badgesV2: {
        entityBadges: {
          imageBased: {},
          textBased: {},
          textExtendedBadges: {},
        },
      },
      aggregatedDiscountInfoV3: {
        header: "50% OFF",
        subHeader: "UPTO ₹80",
        discountCalloutInfo: {
          message: "Free Delivery",
          logoCtx: {
            logo: "v1655895371/free_delivery_logo_hqipbo.png",
          },
        },
      },
      differentiatedUi: {
        displayType: "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
        differentiatedUiMediaDetails: {
          mediaType: "ADS_MEDIA_ENUM_IMAGE",
          lottie: {},
          video: {},
        },
      },
      reviewsSummary: {},
      displayType: "RESTAURANT_DISPLAY_TYPE_DEFAULT",
      restaurantOfferPresentationInfo: {},
    },
    analytics: {},
    cta: {
      link: "https://www.swiggy.com/restaurants/mcdonalds-rajpur-road-karanpur-dehradun-253768",
      type: "WEBLINK",
    },
  },
  {
    info: {
      id: "365575",
      name: "The Good Bowl",
      cloudinaryImageId: "6e04be27387483a7c00444f8e8241108",
      locality: "Rajpur Road",
      areaName: "Rajpur",
      costForTwo: "₹400 for two",
      cuisines: [
        "Biryani",
        "North Indian",
        "Pastas",
        "Punjabi",
        "Desserts",
        "Beverages",
      ],
      avgRating: 4.3,
      parentId: "7918",
      avgRatingString: "4.3",
      totalRatingsString: "1K+",
      sla: {
        deliveryTime: 50,
        lastMileTravel: 11,
        serviceability: "SERVICEABLE",
        slaString: "45-50 mins",
        lastMileTravelString: "11.0 km",
        iconType: "ICON_TYPE_EMPTY",
      },
      availability: {
        nextCloseTime: "2024-01-27 23:59:00",
        opened: true,
      },
      badges: {},
      isOpen: true,
      type: "F",
      badgesV2: {
        entityBadges: {
          imageBased: {},
          textBased: {},
          textExtendedBadges: {},
        },
      },
      aggregatedDiscountInfoV3: {
        header: "₹125 OFF",
        subHeader: "ABOVE ₹199",
        discountTag: "FLAT DEAL",
        discountCalloutInfo: {
          message: "Free Delivery",
          logoCtx: {
            logo: "v1655895371/free_delivery_logo_hqipbo.png",
          },
        },
      },
      differentiatedUi: {
        displayType: "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
        differentiatedUiMediaDetails: {
          mediaType: "ADS_MEDIA_ENUM_IMAGE",
          lottie: {},
          video: {},
        },
      },
      reviewsSummary: {},
      displayType: "RESTAURANT_DISPLAY_TYPE_DEFAULT",
      restaurantOfferPresentationInfo: {},
    },
    analytics: {},
    cta: {
      link: "https://www.swiggy.com/restaurants/the-good-bowl-road-rajpur-dehradun-365575",
      type: "WEBLINK",
    },
  },
  {
    info: {
      id: "750786",
      name: "Pizza Hut",
      cloudinaryImageId: "490629b70f89da8a5b93fc199ece335e",
      locality: "Haridwar Road",
      areaName: "Oasis Commercial Complex",
      costForTwo: "₹350 for two",
      cuisines: ["Pizzas"],
      avgRating: 4.1,
      parentId: "721",
      avgRatingString: "4.1",
      totalRatingsString: "100+",
      sla: {
        deliveryTime: 42,
        lastMileTravel: 5.6,
        serviceability: "SERVICEABLE",
        slaString: "40-45 mins",
        lastMileTravelString: "5.6 km",
        iconType: "ICON_TYPE_EMPTY",
      },
      availability: {
        nextCloseTime: "2024-01-28 00:00:00",
        opened: true,
      },
      badges: {},
      isOpen: true,
      type: "F",
      badgesV2: {
        entityBadges: {
          imageBased: {},
          textBased: {},
          textExtendedBadges: {},
        },
      },
      aggregatedDiscountInfoV3: {
        header: "₹125 OFF",
        subHeader: "ABOVE ₹199",
        discountTag: "FLAT DEAL",
      },
      loyaltyDiscoverPresentationInfo: {
        logoCtx: {
          logo: "Swiggy%20One%20Lite/One_lite_vertical_logo.png",
        },
        freedelMessage: "FREE DELIVERY",
        badgeType: "BADGE_TYPE_ONE_LITE",
      },
      differentiatedUi: {
        displayType: "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
        differentiatedUiMediaDetails: {
          mediaType: "ADS_MEDIA_ENUM_IMAGE",
          lottie: {},
          video: {},
        },
      },
      reviewsSummary: {},
      displayType: "RESTAURANT_DISPLAY_TYPE_DEFAULT",
      isNewlyOnboarded: true,
      restaurantOfferPresentationInfo: {},
    },
    analytics: {},
    cta: {
      link: "https://www.swiggy.com/restaurants/pizza-hut-haridwar-road-oasis-commercial-complex-dehradun-750786",
      type: "WEBLINK",
    },
  },
  {
    info: {
      id: "69061",
      name: "Subway",
      cloudinaryImageId: "63178e3e64d503a479f2a2048a474552",
      locality: "Rajpur Road",
      areaName: "Race Course",
      costForTwo: "₹350 for two",
      cuisines: ["Healthy Food", "Salads", "Snacks", "Desserts", "Beverages"],
      avgRating: 4.3,
      parentId: "2",
      avgRatingString: "4.3",
      totalRatingsString: "10K+",
      sla: {
        deliveryTime: 47,
        lastMileTravel: 10.7,
        serviceability: "SERVICEABLE",
        slaString: "45-50 mins",
        lastMileTravelString: "10.7 km",
        iconType: "ICON_TYPE_EMPTY",
      },
      availability: {
        nextCloseTime: "2024-01-28 00:00:00",
        opened: true,
      },
      badges: {},
      isOpen: true,
      type: "F",
      badgesV2: {
        entityBadges: {
          imageBased: {},
          textBased: {},
          textExtendedBadges: {},
        },
      },
      aggregatedDiscountInfoV3: {
        discountCalloutInfo: {
          message: "Free Delivery",
          logoCtx: {
            logo: "v1655895371/free_delivery_logo_hqipbo.png",
          },
        },
      },
      differentiatedUi: {
        displayType: "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
        differentiatedUiMediaDetails: {
          mediaType: "ADS_MEDIA_ENUM_IMAGE",
          lottie: {},
          video: {},
        },
      },
      reviewsSummary: {},
      displayType: "RESTAURANT_DISPLAY_TYPE_DEFAULT",
      restaurantOfferPresentationInfo: {},
    },
    analytics: {},
    cta: {
      link: "https://www.swiggy.com/restaurants/subway-rajpur-road-race-course-dehradun-69061",
      type: "WEBLINK",
    },
  },
  {
    info: {
      id: "365569",
      name: "Faasos - Wraps, Rolls & Shawarma",
      cloudinaryImageId: "af33b81798b11deba338e94b7585d348",
      locality: "Rajpur Road",
      areaName: "Rajpur",
      costForTwo: "₹200 for two",
      cuisines: [
        "Kebabs",
        "Fast Food",
        "Snacks",
        "American",
        "Healthy Food",
        "Desserts",
        "Beverages",
      ],
      avgRating: 4.3,
      parentId: "21809",
      avgRatingString: "4.3",
      totalRatingsString: "1K+",
      sla: {
        deliveryTime: 54,
        lastMileTravel: 11,
        serviceability: "SERVICEABLE",
        slaString: "50-55 mins",
        lastMileTravelString: "11.0 km",
        iconType: "ICON_TYPE_EMPTY",
      },
      availability: {
        nextCloseTime: "2024-01-27 23:59:00",
        opened: true,
      },
      badges: {},
      isOpen: true,
      type: "F",
      badgesV2: {
        entityBadges: {
          imageBased: {},
          textBased: {},
          textExtendedBadges: {},
        },
      },
      aggregatedDiscountInfoV3: {
        header: "₹125 OFF",
        subHeader: "ABOVE ₹199",
        discountTag: "FLAT DEAL",
        discountCalloutInfo: {
          message: "Free Delivery",
          logoCtx: {
            logo: "v1655895371/free_delivery_logo_hqipbo.png",
          },
        },
      },
      differentiatedUi: {
        displayType: "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
        differentiatedUiMediaDetails: {
          mediaType: "ADS_MEDIA_ENUM_IMAGE",
          lottie: {},
          video: {},
        },
      },
      reviewsSummary: {},
      displayType: "RESTAURANT_DISPLAY_TYPE_DEFAULT",
      restaurantOfferPresentationInfo: {},
    },
    analytics: {},
    cta: {
      link: "https://www.swiggy.com/restaurants/faasos-wraps-rolls-and-shawarma-road-rajpur-dehradun-365569",
      type: "WEBLINK",
    },
  },
  {
    info: {
      id: "365574",
      name: "LunchBox - Meals and Thalis",
      cloudinaryImageId: "zpfjhtdmeedg8tkkcg9n",
      locality: "Rajpur Road",
      areaName: "Rajpur",
      costForTwo: "₹200 for two",
      cuisines: [
        "Biryani",
        "North Indian",
        "Punjabi",
        "Healthy Food",
        "Desserts",
        "Beverages",
      ],
      avgRating: 4.4,
      parentId: "4925",
      avgRatingString: "4.4",
      totalRatingsString: "1K+",
      sla: {
        deliveryTime: 54,
        lastMileTravel: 11,
        serviceability: "SERVICEABLE",
        slaString: "50-55 mins",
        lastMileTravelString: "11.0 km",
        iconType: "ICON_TYPE_EMPTY",
      },
      availability: {
        nextCloseTime: "2024-01-27 23:59:00",
        opened: true,
      },
      badges: {},
      isOpen: true,
      type: "F",
      badgesV2: {
        entityBadges: {
          imageBased: {},
          textBased: {},
          textExtendedBadges: {},
        },
      },
      aggregatedDiscountInfoV3: {
        header: "ITEMS",
        subHeader: "AT ₹159",
        discountCalloutInfo: {
          message: "Free Delivery",
          logoCtx: {
            logo: "v1655895371/free_delivery_logo_hqipbo.png",
          },
        },
      },
      differentiatedUi: {
        displayType: "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
        differentiatedUiMediaDetails: {
          mediaType: "ADS_MEDIA_ENUM_IMAGE",
          lottie: {},
          video: {},
        },
      },
      reviewsSummary: {},
      displayType: "RESTAURANT_DISPLAY_TYPE_DEFAULT",
      restaurantOfferPresentationInfo: {},
    },
    analytics: {},
    cta: {
      link: "https://www.swiggy.com/restaurants/lunchbox-meals-and-thalis-road-rajpur-dehradun-365574",
      type: "WEBLINK",
    },
  },
  {
    info: {
      id: "628872",
      name: "Starbucks Coffee",
      cloudinaryImageId: "182191ab163770437b62861a6f987709",
      locality: "Unison Mall",
      areaName: "Hathibarkala",
      costForTwo: "₹400 for two",
      cuisines: [
        "Beverages",
        "Cafe",
        "Snacks",
        "Desserts",
        "Bakery",
        "Ice Cream",
      ],
      avgRating: 4.3,
      parentId: "195515",
      avgRatingString: "4.3",
      totalRatingsString: "100+",
      sla: {
        deliveryTime: 54,
        lastMileTravel: 11.2,
        serviceability: "SERVICEABLE",
        slaString: "50-55 mins",
        lastMileTravelString: "11.2 km",
        iconType: "ICON_TYPE_EMPTY",
      },
      availability: {
        nextCloseTime: "2024-01-27 23:00:00",
        opened: true,
      },
      badges: {},
      isOpen: true,
      type: "F",
      badgesV2: {
        entityBadges: {
          imageBased: {},
          textBased: {},
          textExtendedBadges: {},
        },
      },
      aggregatedDiscountInfoV3: {
        header: "₹125 OFF",
        subHeader: "ABOVE ₹199",
        discountTag: "FLAT DEAL",
        discountCalloutInfo: {
          message: "Free Delivery",
          logoCtx: {
            logo: "v1655895371/free_delivery_logo_hqipbo.png",
          },
        },
      },
      differentiatedUi: {
        displayType: "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
        differentiatedUiMediaDetails: {
          mediaType: "ADS_MEDIA_ENUM_IMAGE",
          lottie: {},
          video: {},
        },
      },
      reviewsSummary: {},
      displayType: "RESTAURANT_DISPLAY_TYPE_DEFAULT",
      restaurantOfferPresentationInfo: {},
    },
    analytics: {},
    cta: {
      link: "https://www.swiggy.com/restaurants/starbucks-coffee-unison-mall-hathibarkala-dehradun-628872",
      type: "WEBLINK",
    },
  },
  {
    info: {
      id: "744780",
      name: "Haldiram's",
      cloudinaryImageId: "bcbaf973d85efe50d93ede92b5ce1500",
      locality: "Nari Shilp Mandir",
      areaName: "Chukkuwala",
      costForTwo: "₹500 for two",
      cuisines: ["Sweets", "North Indian"],
      avgRating: 4.2,
      veg: true,
      parentId: "377669",
      avgRatingString: "4.2",
      totalRatingsString: "100+",
      sla: {
        deliveryTime: 52,
        lastMileTravel: 11.2,
        serviceability: "SERVICEABLE",
        slaString: "50-55 mins",
        lastMileTravelString: "11.2 km",
        iconType: "ICON_TYPE_EMPTY",
      },
      availability: {
        nextCloseTime: "2024-01-27 23:00:00",
        opened: true,
      },
      badges: {},
      isOpen: true,
      type: "F",
      badgesV2: {
        entityBadges: {
          imageBased: {},
          textBased: {},
          textExtendedBadges: {},
        },
      },
      aggregatedDiscountInfoV3: {
        discountCalloutInfo: {
          message: "Free Delivery",
          logoCtx: {
            logo: "v1655895371/free_delivery_logo_hqipbo.png",
          },
        },
      },
      differentiatedUi: {
        displayType: "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
        differentiatedUiMediaDetails: {
          mediaType: "ADS_MEDIA_ENUM_IMAGE",
          lottie: {},
          video: {},
        },
      },
      reviewsSummary: {},
      displayType: "RESTAURANT_DISPLAY_TYPE_DEFAULT",
      restaurantOfferPresentationInfo: {},
    },
    analytics: {},
    cta: {
      link: "https://www.swiggy.com/restaurants/haldirams-nari-shilp-mandir-chukkuwala-dehradun-744780",
      type: "WEBLINK",
    },
  },
  {
    info: {
      id: "68781",
      name: "Bikanervala",
      cloudinaryImageId: "vmhyp6xup1nifix6v17e",
      locality: "Chakrata Road",
      areaName: "Chukkuwala",
      costForTwo: "₹150 for two",
      cuisines: ["Sweets", "North Indian", "South Indian", "Chinese"],
      avgRating: 4.3,
      veg: true,
      parentId: "45936",
      avgRatingString: "4.3",
      totalRatingsString: "1K+",
      sla: {
        deliveryTime: 49,
        lastMileTravel: 10.3,
        serviceability: "SERVICEABLE",
        slaString: "45-50 mins",
        lastMileTravelString: "10.3 km",
        iconType: "ICON_TYPE_EMPTY",
      },
      availability: {
        nextCloseTime: "2024-01-27 22:00:00",
        opened: true,
      },
      badges: {
        imageBadges: [
          {
            imageId: "v1695133679/badges/Pure_Veg111.png",
            description: "pureveg",
          },
        ],
      },
      isOpen: true,
      type: "F",
      badgesV2: {
        entityBadges: {
          imageBased: {
            badgeObject: [
              {
                attributes: {
                  description: "pureveg",
                  imageId: "v1695133679/badges/Pure_Veg111.png",
                },
              },
            ],
          },
          textBased: {},
          textExtendedBadges: {},
        },
      },
      aggregatedDiscountInfoV3: {
        header: "₹125 OFF",
        subHeader: "ABOVE ₹199",
        discountTag: "FLAT DEAL",
        discountCalloutInfo: {
          message: "Free Delivery",
          logoCtx: {
            logo: "v1655895371/free_delivery_logo_hqipbo.png",
          },
        },
      },
      differentiatedUi: {
        displayType: "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
        differentiatedUiMediaDetails: {
          mediaType: "ADS_MEDIA_ENUM_IMAGE",
          lottie: {},
          video: {},
        },
      },
      reviewsSummary: {},
      displayType: "RESTAURANT_DISPLAY_TYPE_DEFAULT",
      restaurantOfferPresentationInfo: {},
    },
    analytics: {},
    cta: {
      link: "https://www.swiggy.com/restaurants/bikanervala-chakrata-road-chukkuwala-dehradun-68781",
      type: "WEBLINK",
    },
  },
  {
    info: {
      id: "281404",
      name: "Kwality Walls Frozen Dessert and Ice Cream Shop",
      cloudinaryImageId: "yfylnzwg8rcnk8alvitm",
      locality: "Gandhi Road",
      areaName: "Paltan Bazaar",
      costForTwo: "₹100 for two",
      cuisines: ["Desserts", "Ice Cream", "Ice Cream Cakes"],
      avgRating: 4.8,
      veg: true,
      parentId: "582",
      avgRatingString: "4.8",
      totalRatingsString: "1K+",
      sla: {
        deliveryTime: 50,
        lastMileTravel: 10.9,
        serviceability: "SERVICEABLE",
        slaString: "50-55 mins",
        lastMileTravelString: "10.9 km",
        iconType: "ICON_TYPE_EMPTY",
      },
      availability: {
        nextCloseTime: "2024-01-27 22:00:00",
        opened: true,
      },
      badges: {},
      isOpen: true,
      type: "F",
      badgesV2: {
        entityBadges: {
          imageBased: {},
          textBased: {},
          textExtendedBadges: {},
        },
      },
      aggregatedDiscountInfoV3: {
        header: "₹125 OFF",
        subHeader: "ABOVE ₹199",
        discountTag: "FLAT DEAL",
        discountCalloutInfo: {
          message: "Free Delivery",
          logoCtx: {
            logo: "v1655895371/free_delivery_logo_hqipbo.png",
          },
        },
      },
      differentiatedUi: {
        displayType: "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
        differentiatedUiMediaDetails: {
          mediaType: "ADS_MEDIA_ENUM_IMAGE",
          lottie: {},
          video: {},
        },
      },
      reviewsSummary: {},
      displayType: "RESTAURANT_DISPLAY_TYPE_DEFAULT",
      restaurantOfferPresentationInfo: {},
    },
    analytics: {},
    cta: {
      link: "https://www.swiggy.com/restaurants/kwality-walls-frozen-dessert-and-ice-cream-shop-gandhi-road-paltan-bazaar-dehradun-281404",
      type: "WEBLINK",
    },
  },
  {
    info: {
      id: "69772",
      name: "Baskin Robbins - Ice Cream Desserts",
      cloudinaryImageId: "85ccae4e3576f9330af102c46ca85395",
      locality: "Rajpur Road",
      areaName: "Karanpur",
      costForTwo: "₹200 for two",
      cuisines: ["Ice Cream", "Bakery", "Beverages"],
      avgRating: 4.3,
      veg: true,
      parentId: "5588",
      avgRatingString: "4.3",
      totalRatingsString: "1K+",
      sla: {
        deliveryTime: 47,
        lastMileTravel: 10.5,
        serviceability: "SERVICEABLE",
        slaString: "45-50 mins",
        lastMileTravelString: "10.5 km",
        iconType: "ICON_TYPE_EMPTY",
      },
      availability: {
        nextCloseTime: "2024-01-28 02:00:00",
        opened: true,
      },
      badges: {},
      isOpen: true,
      type: "F",
      badgesV2: {
        entityBadges: {
          imageBased: {},
          textBased: {},
          textExtendedBadges: {},
        },
      },
      aggregatedDiscountInfoV3: {
        header: "₹125 OFF",
        subHeader: "ABOVE ₹199",
        discountTag: "FLAT DEAL",
        discountCalloutInfo: {
          message: "Free Delivery",
          logoCtx: {
            logo: "v1655895371/free_delivery_logo_hqipbo.png",
          },
        },
      },
      differentiatedUi: {
        displayType: "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
        differentiatedUiMediaDetails: {
          mediaType: "ADS_MEDIA_ENUM_IMAGE",
          lottie: {},
          video: {},
        },
      },
      reviewsSummary: {},
      displayType: "RESTAURANT_DISPLAY_TYPE_DEFAULT",
      restaurantOfferPresentationInfo: {},
    },
    analytics: {},
    cta: {
      link: "https://www.swiggy.com/restaurants/baskin-robbins-ice-cream-desserts-rajpur-road-karanpur-dehradun-69772",
      type: "WEBLINK",
    },
  },
  {
    info: {
      id: "594270",
      name: "Taco Bell",
      cloudinaryImageId: "d3b3db238b6448c3f297c851e9d0b96b",
      locality: "Rajpur",
      areaName: "Rajpur",
      costForTwo: "₹300 for two",
      cuisines: ["Mexican"],
      avgRating: 4.2,
      parentId: "1557",
      avgRatingString: "4.2",
      totalRatingsString: "1K+",
      sla: {
        deliveryTime: 54,
        lastMileTravel: 11,
        serviceability: "SERVICEABLE",
        slaString: "50-55 mins",
        lastMileTravelString: "11.0 km",
        iconType: "ICON_TYPE_EMPTY",
      },
      availability: {
        nextCloseTime: "2024-01-28 01:00:00",
        opened: true,
      },
      badges: {},
      isOpen: true,
      type: "F",
      badgesV2: {
        entityBadges: {
          imageBased: {},
          textBased: {},
          textExtendedBadges: {},
        },
      },
      aggregatedDiscountInfoV3: {
        header: "₹125 OFF",
        subHeader: "ABOVE ₹199",
        discountTag: "FLAT DEAL",
        discountCalloutInfo: {
          message: "Free Delivery",
          logoCtx: {
            logo: "v1655895371/free_delivery_logo_hqipbo.png",
          },
        },
      },
      differentiatedUi: {
        displayType: "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
        differentiatedUiMediaDetails: {
          mediaType: "ADS_MEDIA_ENUM_IMAGE",
          lottie: {},
          video: {},
        },
      },
      reviewsSummary: {},
      displayType: "RESTAURANT_DISPLAY_TYPE_DEFAULT",
      restaurantOfferPresentationInfo: {},
    },
    analytics: {},
    cta: {
      link: "https://www.swiggy.com/restaurants/taco-bell-rajpur-dehradun-594270",
      type: "WEBLINK",
    },
  },
  {
    info: {
      id: "508894",
      name: "NIC Ice Creams",
      cloudinaryImageId: "85825a6d74b1059a63a9b688de9f67ce",
      locality: "Omkar Road",
      areaName: "Chukkuwala",
      costForTwo: "₹120 for two",
      cuisines: ["Ice Cream", "Desserts"],
      avgRating: 4.7,
      veg: true,
      parentId: "6249",
      avgRatingString: "4.7",
      totalRatingsString: "1K+",
      sla: {
        deliveryTime: 44,
        lastMileTravel: 11.3,
        serviceability: "SERVICEABLE",
        slaString: "40-45 mins",
        lastMileTravelString: "11.3 km",
        iconType: "ICON_TYPE_EMPTY",
      },
      availability: {
        nextCloseTime: "2024-01-27 23:00:00",
        opened: true,
      },
      badges: {},
      isOpen: true,
      type: "F",
      badgesV2: {
        entityBadges: {
          imageBased: {},
          textBased: {},
          textExtendedBadges: {},
        },
      },
      aggregatedDiscountInfoV3: {
        header: "ITEMS",
        subHeader: "AT ₹169",
        discountCalloutInfo: {
          message: "Free Delivery",
          logoCtx: {
            logo: "v1655895371/free_delivery_logo_hqipbo.png",
          },
        },
      },
      differentiatedUi: {
        displayType: "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
        differentiatedUiMediaDetails: {
          mediaType: "ADS_MEDIA_ENUM_IMAGE",
          lottie: {},
          video: {},
        },
      },
      reviewsSummary: {},
      displayType: "RESTAURANT_DISPLAY_TYPE_DEFAULT",
      restaurantOfferPresentationInfo: {},
    },
    analytics: {},
    cta: {
      link: "https://www.swiggy.com/restaurants/nic-ice-creams-omkar-road-chukkuwala-dehradun-508894",
      type: "WEBLINK",
    },
  },
  {
    info: {
      id: "365570",
      name: "Behrouz Biryani",
      cloudinaryImageId: "89fccaa76f2f760e2742b9e53d32bb69",
      locality: "Rajpur Road",
      areaName: "Rajpur",
      costForTwo: "₹500 for two",
      cuisines: [
        "Biryani",
        "North Indian",
        "Kebabs",
        "Mughlai",
        "Lucknowi",
        "Hyderabadi",
        "Desserts",
        "Beverages",
      ],
      avgRating: 4.4,
      parentId: "1803",
      avgRatingString: "4.4",
      totalRatingsString: "1K+",
      sla: {
        deliveryTime: 52,
        lastMileTravel: 11,
        serviceability: "SERVICEABLE",
        slaString: "50-55 mins",
        lastMileTravelString: "11.0 km",
        iconType: "ICON_TYPE_EMPTY",
      },
      availability: {
        nextCloseTime: "2024-01-27 23:59:00",
        opened: true,
      },
      badges: {
        imageBadges: [
          {
            imageId: "newg.png",
            description: "Gourmet",
          },
        ],
      },
      isOpen: true,
      type: "F",
      badgesV2: {
        entityBadges: {
          imageBased: {
            badgeObject: [
              {
                attributes: {
                  description: "Gourmet",
                  imageId: "newg.png",
                },
              },
            ],
          },
          textBased: {},
          textExtendedBadges: {},
        },
      },
      aggregatedDiscountInfoV3: {
        header: "₹125 OFF",
        subHeader: "ABOVE ₹199",
        discountTag: "FLAT DEAL",
        discountCalloutInfo: {
          message: "Free Delivery",
          logoCtx: {
            logo: "v1655895371/free_delivery_logo_hqipbo.png",
          },
        },
      },
      differentiatedUi: {
        displayType: "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
        differentiatedUiMediaDetails: {
          mediaType: "ADS_MEDIA_ENUM_IMAGE",
          lottie: {},
          video: {},
        },
      },
      reviewsSummary: {},
      displayType: "RESTAURANT_DISPLAY_TYPE_DEFAULT",
      restaurantOfferPresentationInfo: {},
    },
    analytics: {},
    cta: {
      link: "https://www.swiggy.com/restaurants/behrouz-biryani-road-rajpur-dehradun-365570",
      type: "WEBLINK",
    },
  },
  {
    info: {
      id: "608327",
      name: "The Belgian Waffle Co.",
      cloudinaryImageId: "5116a385bac0548e06c33c08350fbf11",
      locality: "Rajpur Road",
      areaName: "Chukkuwala",
      costForTwo: "₹200 for two",
      cuisines: ["Waffle", "Desserts", "Ice Cream", "Beverages"],
      avgRating: 4.6,
      veg: true,
      parentId: "2233",
      avgRatingString: "4.6",
      totalRatingsString: "500+",
      sla: {
        deliveryTime: 54,
        lastMileTravel: 10.7,
        serviceability: "SERVICEABLE",
        slaString: "50-55 mins",
        lastMileTravelString: "10.7 km",
        iconType: "ICON_TYPE_EMPTY",
      },
      availability: {
        nextCloseTime: "2024-01-28 02:00:00",
        opened: true,
      },
      badges: {},
      isOpen: true,
      type: "F",
      badgesV2: {
        entityBadges: {
          imageBased: {},
          textBased: {},
          textExtendedBadges: {},
        },
      },
      aggregatedDiscountInfoV3: {
        header: "₹125 OFF",
        subHeader: "ABOVE ₹199",
        discountTag: "FLAT DEAL",
        discountCalloutInfo: {
          message: "Free Delivery",
          logoCtx: {
            logo: "v1655895371/free_delivery_logo_hqipbo.png",
          },
        },
      },
      differentiatedUi: {
        displayType: "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
        differentiatedUiMediaDetails: {
          mediaType: "ADS_MEDIA_ENUM_IMAGE",
          lottie: {},
          video: {},
        },
      },
      reviewsSummary: {},
      displayType: "RESTAURANT_DISPLAY_TYPE_DEFAULT",
      restaurantOfferPresentationInfo: {},
    },
    analytics: {},
    cta: {
      link: "https://www.swiggy.com/restaurants/the-belgian-waffle-co-rajpur-road-chukkuwala-dehradun-608327",
      type: "WEBLINK",
    },
  },
  {
    info: {
      id: "671902",
      name: "Wow! Momo",
      cloudinaryImageId: "5a148e63e9c54942e37627da1aa156be",
      locality: "Rabindra Nath Tagore Marg",
      areaName: "Centrio Mall",
      costForTwo: "₹300 for two",
      cuisines: [
        "Tibetan",
        "Healthy Food",
        "Asian",
        "Chinese",
        "Snacks",
        "Continental",
        "Desserts",
        "Beverages",
      ],
      avgRating: 3.9,
      parentId: "1776",
      avgRatingString: "3.9",
      totalRatingsString: "100+",
      sla: {
        deliveryTime: 62,
        lastMileTravel: 11.1,
        serviceability: "SERVICEABLE",
        slaString: "60-65 mins",
        lastMileTravelString: "11.1 km",
        iconType: "ICON_TYPE_EMPTY",
      },
      availability: {
        nextCloseTime: "2024-01-27 23:00:00",
        opened: true,
      },
      badges: {},
      isOpen: true,
      type: "F",
      badgesV2: {
        entityBadges: {
          imageBased: {},
          textBased: {},
          textExtendedBadges: {},
        },
      },
      aggregatedDiscountInfoV3: {
        header: "ITEMS",
        subHeader: "AT ₹99",
        discountCalloutInfo: {
          message: "Free Delivery",
          logoCtx: {
            logo: "v1655895371/free_delivery_logo_hqipbo.png",
          },
        },
      },
      differentiatedUi: {
        displayType: "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
        differentiatedUiMediaDetails: {
          mediaType: "ADS_MEDIA_ENUM_IMAGE",
          lottie: {},
          video: {},
        },
      },
      reviewsSummary: {},
      displayType: "RESTAURANT_DISPLAY_TYPE_DEFAULT",
      restaurantOfferPresentationInfo: {},
    },
    analytics: {},
    cta: {
      link: "https://www.swiggy.com/restaurants/the-belgian-waffle-co-rajpur-road-chukkuwala-dehradun-608327",
      type: "WEBLINK",
    },
  },
];

const CardComponent = (props) => {
  //let us first destructure the object
  const { restaurantObj } = props;
  const { cloudinaryImageId, name, avgRating, cuisines, sla, areaName } =
    restaurantObj.info;

  return (
    <div className="restaurant-card">
      <img
        className="restaurant-img"
        src={
          "https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_660/" +
          cloudinaryImageId
        }
        alt="image"
      ></img>
      <h3>{name}</h3>
      <h4>
        {avgRating} Stars | {sla.deliveryTime} mins
      </h4>
      <h4>
        {cuisines.join(", ")} | {areaName}
      </h4>
    </div>
  );
};

const BodyComponent = () => {
  return (
    <div className="body-container">
      <div className="search-box">
        <input
          className="search-bar"
          type="text"
          placeholder="Type to search restaurants at your location"
        />
      </div>
      <div className="restaurant-container">
        {restaurantList.map((restaurant) => (
          <CardComponent restaurantObj={restaurant} />
        ))}
      </div>
    </div>
  );
};

const AppComponent = () => {
  return (
    <div>
      <HeaderComponent />
      <BodyComponent />
    </div>
  );
};

const root = reactDOM.createRoot(document.getElementById("root"));
root.render(<AppComponent />);
