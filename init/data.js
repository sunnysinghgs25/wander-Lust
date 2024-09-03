const sampleListings = [
    {
      title: "Cozy Beachfront Cottage",
      description:
        "Escape to this charming beachfront cottage for a relaxing getaway. Enjoy stunning ocean views and easy access to the beach.",
      image: 
      
        "https://images.unsplash.com/photo-1552733407-5d5c46c3bb3b?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTB8fHRyYXZlbHxlbnwwfHwwfHx8MA%3D%3D&auto=format&fit=crop&w=800&q=60",
      
      price: 1500,
      location: "Malibu",
      country: "United States",
    },
    {
      title: "Modern Loft in Downtown",
      description:
        "Stay in the heart of the city in this stylish loft apartment. Perfect for urban explorers!",
      image: 
         "https://images.unsplash.com/photo-1501785888041-af3ef285b470?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTh8fHRyYXZlbHxlbnwwfHwwfHx8MA%3D%3D&auto=format&fit=crop&w=800&q=60",
      
      price: 1200,
      location: "New York City",
      country: "United States",
    },
    {
      title: "Mountain Retreat",
      description:
        "Unplug and unwind in this peaceful mountain cabin. Surrounded by nature, it's a perfect place to recharge.",
      image: 
       
        "https://images.unsplash.com/photo-1571896349842-33c89424de2d?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8N3x8aG90ZWxzfGVufDB8fDB8fHww&auto=format&fit=crop&w=800&q=60",
      
      price: 1000,
      location: "Aspen",
      country: "United States",
    },
    {
        title: "Secluded Mountain Cabin",
        description: "Experience tranquility in this cozy mountain cabin. Perfect for hiking and stargazing.",
        image: "https://images.unsplash.com/photo-1519681393784-d120267933ba?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NXx8Y2FiaW58ZW58MHx8MHx8fDA%3D&auto=format&fit=crop&w=800&q=60",
        price: 1200,
        location: "Aspen",
        country: "United States"
      },
      {
        title: "Urban Loft Apartment",
        description: "Stay in the heart of the city in this stylish loft. Close to all major attractions.",
        image: "https://images.unsplash.com/photo-1560448204-e02f11c3d0e2?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NXx8bG9mdHxlbnwwfHwwfHx8MA%3D%3D&auto=format&fit=crop&w=800&q=60",
        price: 1800,
        location: "New York City",
        country: "United States"
      },
      {
        title: "Riverside Cottage",
        description: "Relax in this charming riverside cottage, perfect for fishing and kayaking.",
        image: "https://images.unsplash.com/photo-1582711012124-bfc9cf53744a?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NXx8Y290dGFnZXxlbnwwfHwwfHx8MA%3D%3D&auto=format&fit=crop&w=800&q=60",
        price: 1400,
        location: "Portland",
        country: "United States"
      },
      {
        title: "Charming Country House",
        description: "Escape to the countryside in this lovely house with beautiful garden views.",
        image: "https://images.unsplash.com/photo-1592928307203-65e6f06e60b5?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NXx8Y291bnRyeSUyMGhvbWV8ZW58MHx8MHx8fDA%3D&auto=format&fit=crop&w=800&q=60",
        price: 1100,
        location: "Nashville",
        country: "United States"
      },
      {
        title: "Modern Beach House",
        description: "Enjoy luxury in this modern beach house with private pool and ocean views.",
        image: "https://images.unsplash.com/photo-1600585154074-9d55d2f2d3d8?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NXx8bW9kZXJuJTIwYmVhY2glMjBob3VzZXxlbnwwfHwwfHx8MA%3D%3D&auto=format&fit=crop&w=800&q=60",
        price: 2000,
        location: "Miami",
        country: "United States"
      },
      {
        title: "Historic Downtown Apartment",
        description: "Stay in a beautifully restored historic building with all modern amenities.",
        image: "https://images.unsplash.com/photo-1541872703-df4a18273a02?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NXx8aGlzdG9yaWMlMjBidWlsZGluZ3xlbnwwfHwwfHx8MA%3D%3D&auto=format&fit=crop&w=800&q=60",
        price: 1700,
        location: "Boston",
        country: "United States"
      },
      {
        title: "Lakeside Villa",
        description: "Spend your vacation in this luxurious villa with stunning lake views and private dock.",
        image: "https://images.unsplash.com/photo-1596224099306-79e6a4b27e52?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NXx8bGFrZXNpZGUlMjBob3VzZXxlbnwwfHwwfHx8MA%3D%3D&auto=format&fit=crop&w=800&q=60",
        price: 2500,
        location: "Lake Tahoe",
        country: "United States"
      },
      {
        title: "Desert Oasis Retreat",
        description: "Find peace in this desert oasis with a private pool and panoramic desert views.",
        image: "https://images.unsplash.com/photo-1558980394-0d1ba64d47d2?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NXx8b2FzaXN8ZW58MHx8MHx8fDA%3D&auto=format&fit=crop&w=800&q=60",
        price: 1300,
        location: "Phoenix",
        country: "United States"
      },
      {
        title: "Tropical Paradise Bungalow",
        description: "Unwind in this tropical bungalow with lush gardens and a short walk to the beach.",
        image: "https://images.unsplash.com/photo-1582719478186-6c6b8ba3db00?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NXx8YnVuZ2Fsb3d8ZW58MHx8MHx8fDA%3D&auto=format&fit=crop&w=800&q=60",
        price: 1600,
        location: "Hawaii",
        country: "United States"
      },
      {
        title: "Cozy Forest Cabin",
        description: "Enjoy a rustic retreat in this cozy cabin surrounded by towering trees.",
        image: "https://images.unsplash.com/photo-1558021212-51b6ecfa0db5?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NXx8Zm9yZXN0JTIwY2FiaW58ZW58MHx8MHx8fDA%3D&auto=format&fit=crop&w=800&q=60",
        price: 900,
        location: "Flagstaff",
        country: "United States"
      },
]
  
  module.exports = { data: sampleListings };