import exterior from "../assets/hotelexterior.jpg";
import room from "../assets/room1.jpg";
import bathroom from "../assets/bathroom.jpg";
import balcony from "../assets/balconyview.jpg";
import parking from "../assets/room5.jpg";
import hall from "../assets/banquethall.jpg";

import room2 from "../assets/room2.jpg";
import room3 from "../assets/room3.jpg";

import restaurant from "../assets/dininghall.jpg";
import restaurant2 from "../assets/room4.jpg";

import lobby from "../assets/room6.jpg";
import pool from "../assets/swimmingpool.jpg";
import gym from "../assets/room7.jpg";
import garden from "../assets/room1.jpg";

import gallery1 from "../assets/bathroom2.jpg";
import gallery2 from "../assets/room2.jpg";
import gallery3 from "../assets/room3.jpg";
import gallery4 from "../assets/room4.jpg";

export const hotel = {
  name: "The Grand Haven",
  tagline: "Stay in comfort. Experience the extraordinary.",
  description:
    "A refined stay combining contemporary comfort, warm hospitality and an unforgettable experience.",
  address: "MG Road, City Centre, India",
  phone: "+91 98765 43210",
  whatsapp: "919876543210",
  email: "reservations@grandhaven.com",

  checkIn: "2:00 PM",
  checkOut: "11:00 AM",

  heroImage: exterior,
  aboutImage: lobby,

  rooms: [
    {
      id: 1,
      name: "Deluxe Room",
      price: 3999,
      image: room,
      size: "320 sq.ft",
      guests: "2 Guests",
      bed: "King Bed",
      description:
        "A spacious and elegant room designed for a relaxing and comfortable stay.",
      amenities: ["Free Wi-Fi", "Air Conditioning", "Smart TV", "Room Service"],
    },
    {
      id: 2,
      name: "Premium Suite",
      price: 6499,
      image: room2,
      size: "520 sq.ft",
      guests: "3 Guests",
      bed: "King Bed",
      description:
        "A sophisticated suite featuring generous living space and premium amenities.",
      amenities: ["Free Wi-Fi", "Smart TV", "Mini Bar", "Room Service", "City View"],
    },
    {
      id: 3,
      name: "Luxury Balcony Suite",
      price: 7999,
      image: room3,
      size: "650 sq.ft",
      guests: "4 Guests",
      bed: "King Bed",
      description:
        "Our signature suite with a private balcony and beautifully designed interiors.",
      amenities: ["Private Balcony", "Free Wi-Fi", "Mini Bar", "Bathtub", "Room Service"],
    },
  ],

  facilities: [
    {
      title: "Free Parking",
      icon: "Car",
      description: "Secure parking for hotel guests.",
      image: parking,
    },
    {
      title: "Swimming Pool",
      icon: "Waves",
      description: "Relax and unwind in our swimming pool.",
      image: pool,
    },
    {
      title: "Fitness Center",
      icon: "Dumbbell",
      description: "Stay active during your stay.",
      image: gym,
    },
    {
      title: "Fine Dining",
      icon: "Utensils",
      description: "Enjoy delicious meals prepared by our chefs.",
      image: restaurant,
    },
  ],

  gallery: [
    exterior,
    room,
    bathroom,
    balcony,
    parking,
    hall,
    room2,
    room3,
    restaurant,
    restaurant2,
    lobby,
    pool,
    gym,
    garden,
    gallery1,
    gallery2,
    gallery3,
    gallery4,
  ],

  testimonials: [
    {
      name: "Rahul Sharma",
      rating: 5,
      review: "Beautiful property, comfortable rooms and excellent hospitality.",
    },
    {
      name: "Priya Singh",
      rating: 5,
      review: "The rooms were clean, spacious and beautifully designed. Highly recommended.",
    },
    {
      name: "Arjun Mehta",
      rating: 5,
      review: "Great location and very comfortable stay. The staff was extremely helpful.",
    },
  ],

  offers: [
    {
      title: "Weekend Escape",
      discount: "15% OFF",
      description: "Enjoy a relaxing weekend with complimentary breakfast.",
    },
    {
      title: "Family Stay",
      discount: "20% OFF",
      description: "Special rates for families staying two nights or more.",
    },
  ],

  faqs: [
    {
      question: "What time is check-in?",
      answer: "Check-in starts at 2:00 PM.",
    },
    {
      question: "What time is check-out?",
      answer: "Check-out is until 11:00 AM.",
    },
    {
      question: "Is parking available?",
      answer: "Yes, complimentary parking is available for hotel guests.",
    },
    {
      question: "Does the hotel provide Wi-Fi?",
      answer: "Yes, complimentary Wi-Fi is available throughout the property.",
    },
  ],
};
