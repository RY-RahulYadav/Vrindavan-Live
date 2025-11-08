// Simple in-memory data store for demo purposes
// In production, this would be replaced with a real database

export interface CarouselSlide {
  id: number
  image: string
  title: string
  subtitle: string
  description: string
}

export interface Temple {
  id: number
  name: string
  image: string
  description: string
  year: string
  timings: string
}

export interface Saint {
  id: number
  name: string
  image: string
  title: string
  period: string
  bio: string
  contribution: string
}

export interface HolyPlace {
  id: number
  name: string
  image: string
  description: string
  significance: string
}

export interface Service {
  id: number
  icon: string
  title: string
  description: string
}

export interface Testimonial {
  id: number
  name: string
  location: string
  image: string
  rating: number
  text: string
}

export interface GalleryImage {
  id: number
  url: string
  title: string
  category: string
}

// Initial data with authentic Vrindavan content
export const dataStore = {
  // carouselSlides: [

  //   {
  //     id: 2,
  //     image: "/rn1.jpg",
  //     title: "Sacred Nidhivan Grove",
  //     subtitle: "Mystical Forest of Divine Love",
  //     description: "Where Lord Krishna dances with Radha under the moonlight — a place of eternal mystery"
  //   },
  //   {
  //     id: 31,
  //     image: "/rn2.jpeg",
  //     title: "Sacred Nidhivan Grove",
  //     subtitle: "Mystical Forest of Divine Love",
  //     description: "Where Lord Krishna dances with Radha under the moonlight — a place of eternal mystery"
  //   },
  //   {
  //     id: 32,
  //     image: "/rk1.jpg",
  //     title: "Sacred Nidhivan Grove",
  //     subtitle: "Mystical Forest of Divine Love",
  //     description: "Where Lord Krishna dances with Radha under the moonlight — a place of eternal mystery"
  //   },
  //   {
  //     id: 31,
  //     image: "/rk0.jpg",
  //     title: "Sacred Nidhivan Grove",
  //     subtitle: "Mystical Forest of Divine Love",
  //     description: "Where Lord Krishna dances with Radha under the moonlight — a place of eternal mystery"
  //   },
  //   {
  //     id: 4,
  //     image: "/rk.jpg",
  //     title: "Sacred Nidhivan Grove",
  //     subtitle: "Mystical Forest of Divine Love",
  //     description: "Where Lord Krishna dances with Radha under the moonlight — a place of eternal mystery"
  //   },
  //   {
  //     id: 1,
  //     image: "/hero3.jpg",
  //     title: "Welcome to Vrindavan Live",
  //     subtitle: "The Divine City of Lord Krishna",
  //     description: "Experience the eternal bliss and divine love where Krishna performed His sacred pastimes"
  //   },
  //   {
  //     id: 5,
  //     image: "/rk2.jpg",
  //     title: "Sacred Nidhivan Grove",
  //     subtitle: "Mystical Forest of Divine Love",
  //     description: "Where Lord Krishna dances with Radha under the moonlight — a place of eternal mystery"
  //   },
  //   {
  //     id: 6,
  //     image: "/rk3.jpg",
  //     title: "Sacred Nidhivan Grove",
  //     subtitle: "Mystical Forest of Divine Love",
  //     description: "Where Lord Krishna dances with Radha under the moonlight — a place of eternal mystery"
  //   },
  //   {
  //     id: 7,
  //     image: "/radhkrishan2.jpg",
  //     title: "Sacred Temples of Vrindavan",
  //     subtitle: "Divine Architecture & Devotion",
  //     description: "Discover magnificent temples where millions of devotees find peace and spiritual awakening"
  //   },
  //   {
  //     id: 8,
  //     image: "/ab3.webp",
  //     title: "Journey to Enlightenment",
  //     subtitle: "Path of Pure Devotion",
  //     description: "Walk the sacred ghats and forests where every moment is a prayer to the divine"
  //   },
  //   {
  //     id: 9,
  //     image: "/radhakrishan5.jpg",
  //     title: "Journey to Enlightenment",
  //     subtitle: "Path of Pure Devotion",
  //     description: "Walk the sacred ghats and forests where every moment is a prayer to the divine"
  //   },
  //   {
  //     id: 10,
  //     image: "/radhakrishan1.jpg",
  //     title: "Journey to Enlightenment",
  //     subtitle: "Path of Pure Devotion",
  //     description: "Walk the sacred ghats and forests where every moment is a prayer to the divine"
  //   },
  //   {
  //     id: 11,
  //     image: "/hero4.jpg",
  //     title: "Sacred Nidhivan Grove",
  //     subtitle: "Mystical Forest of Divine Love",
  //     description: "Where Lord Krishna dances with Radha under the moonlight — a place of eternal mystery"
  //   }


  // ],
  carouselSlides: [

    {
      id: 1,
      image: "/hero/h1.jpeg",
      title: "Sacred Nidhivan Grove",
      subtitle: "Mystical Forest of Divine Love",
      description: "Where Lord Krishna dances with Radha under the moonlight — a place of eternal mystery"
    },
    {
      id: 2,
      image: "/hero/h2.jpeg",
      title: "Sacred Nidhivan Grove",
      subtitle: "Mystical Forest of Divine Love",
      description: "Where Lord Krishna dances with Radha under the moonlight — a place of eternal mystery"
    },
    {
      id: 3,
      image: "/hero/h3.jpeg",
      title: "Sacred Nidhivan Grove",
      subtitle: "Mystical Forest of Divine Love",
      description: "Where Lord Krishna dances with Radha under the moonlight — a place of eternal mystery"
    },
    {
      id: 4,
      image: "/hero/h4.jpeg",
      title: "Sacred Nidhivan Grove",
      subtitle: "Mystical Forest of Divine Love",
      description: "Where Lord Krishna dances with Radha under the moonlight — a place of eternal mystery"
    },
    {
      id: 4,
      image: "/hero/h5.jpeg",
      title: "Sacred Nidhivan Grove",
      subtitle: "Mystical Forest of Divine Love",
      description: "Where Lord Krishna dances with Radha under the moonlight — a place of eternal mystery"
    },
    {
      id: 4,
      image: "/hero/h6.jpg",
      title: "Sacred Nidhivan Grove",
      subtitle: "Mystical Forest of Divine Love",
      description: "Where Lord Krishna dances with Radha under the moonlight — a place of eternal mystery"
    },
    {
      id: 4,
      image: "/hero/h8.jpg",
      title: "Sacred Nidhivan Grove",
      subtitle: "Mystical Forest of Divine Love",
      description: "Where Lord Krishna dances with Radha under the moonlight — a place of eternal mystery"
    },
    {
      id: 1,
      image: "/hero3.jpg",
      title: "Welcome to Vrindavan Live",
      subtitle: "The Divine City of Lord Krishna",
      description: "Experience the eternal bliss and divine love where Krishna performed His sacred pastimes"
    },
   
    {
      id: 9,
      image: "/radhakrishan5.jpg",
      title: "Journey to Enlightenment",
      subtitle: "Path of Pure Devotion",
      description: "Walk the sacred ghats and forests where every moment is a prayer to the divine"
    },
    {
      id: 10,
      image: "/radhakrishan1.jpg",
      title: "Journey to Enlightenment",
      subtitle: "Path of Pure Devotion",
      description: "Walk the sacred ghats and forests where every moment is a prayer to the divine"
    }


  ],
  temples: [
    {
      id: 1,
      name: "Banke Bihari Temple",
      image: "/banke-bihari-temple-in-vrindavan-morning-9b65e674-20251106081940.jpg",
      description: "The most revered temple in Vrindavan, dedicated to Lord Krishna in His playful childhood form. Known for the deity's mesmerizing eyes that captivate millions of devotees.",
      year: "1864",
      timings: "7:45 AM - 12:00 PM, 5:30 PM - 9:30 PM"
    },
    {
      id: 2,
      name: "ISKCON Temple",
      image: "/temple1.png",
      description: "Krishna Balaram Mandir, a magnificent white marble temple complex with beautiful gardens. International headquarters of the Hare Krishna movement, attracting devotees worldwide.",
      year: "1975",
      timings: "4:30 AM - 1:00 PM, 4:00 PM - 9:00 PM"
    },
    {
      id: 3,
      name: "Prem Mandir",
      image: "/ab3.webp",
      description: "A temple of divine love with stunning white marble architecture and breathtaking LED illumination. Features intricate carvings depicting Krishna's pastimes.",
      year: "2012",
      timings: "5:30 AM - 12:00 PM, 4:30 PM - 9:00 PM"
    },
    {
      id: 4,
      name: "Radha Raman Temple",
      image: "/radha-raman.jpg",
      description: "Ancient temple housing the self-manifested deity of Lord Krishna. One of the most sacred shrines with rich historical significance and traditional worship practices.",
      year: "1542",
      timings: "7:30 AM - 12:30 PM, 5:30 PM - 9:30 PM"
    },
    {
      id: 5,
      name: "Rangaji Temple",
      image: "/shri-rangnath-ji-temple.webp",
      description: "Magnificent South Indian style Dravidian architecture with a towering gopuram. Largest temple in Vrindavan, showcasing the fusion of North and South Indian devotional traditions.",
      year: "1851",
      timings: "6:00 AM - 12:00 PM, 4:00 PM - 9:00 PM"
    },
    {
      id: 6,
      name: "Govind Dev Ji Temple",
      image: "/govind-dev-ji-temple-in-vrindavan-red-sa-89d6889c-20251106081940.jpg",
      description: "Historic red sandstone temple with Mughal architectural influences. Originally built as a seven-story structure, it houses one of Vrindavan's most venerated deities.",
      year: "1590",
      timings: "8:00 AM - 12:00 PM, 5:00 PM - 8:30 PM"
    }
  ],
  saints: [
    {
      id: 1,
      name: "Premanand Maharaj",
      image: "/s0.jpg",
      title: "Contemporary Saint & Spiritual Guide",
      period: "1969–Present",
      bio: "Premanand Maharaj Ji is a revered modern-day saint from Vrindavan, renowned for his divine discourses and deep bhakti toward Lord Krishna. His teachings inspire millions to embrace devotion, humility, and surrender.",
      contribution: "Founder of ashrams and spiritual centres across India; continues to guide devotees through katha, bhajan, and seva promoting pure Krishna bhakti."
    },
    {
      id: 2,
      name: "Radhanath Swami",
      image: "/s1.jpg",
      title: "ISKCON Spiritual Leader & Author",
      period: "1950–Present",
      bio: "Radhanath Swami is a world-renowned ISKCON leader, author, and teacher who inspires spiritual seekers through compassion, humility, and universal devotion.",
      contribution: "Author of 'The Journey Home'; established charitable projects, temples, and eco-villages; promotes global peace through bhakti-yoga."
    },
    {
      id: 3,
      name: "A.C. Bhaktivedanta Swami Prabhupada",
      image: "/srila-prabhupada.jpg",
      title: "Founder-Acharya of ISKCON",
      period: "1896–1977",
      bio: "Srila Prabhupada, a global spiritual icon, spread Krishna consciousness across continents. He translated sacred scriptures and founded ISKCON, igniting a worldwide devotional movement.",
      contribution: "Established over 100 ISKCON temples worldwide; translated the Bhagavad-gita and Srimad-Bhagavatam into English; inspired millions to follow the path of bhakti-yoga."
    },
    {
      id: 4,
      name: "Chaitanya Mahaprabhu",
      image: "/sri-chaitanya-mahaprabhu.jpg",
      title: "Golden Avatar of Kali Yuga",
      period: "1486–1534",
      bio: "Chaitanya Mahaprabhu is revered as the combined form of Radha and Krishna. He revitalised the bhakti movement through sankirtana — the joyful congregational chanting of the holy names.",
      contribution: "Spread the Hare Krishna maha-mantra; established Gaudiya Vaishnavism; inspired devotees to experience Krishna through love and song."
    },
    // {
    //   id: 5,
    //   name: "Vallabhacharya",
    //   image: "/vallabhacharya-jayanti.webp",
    //   title: "Founder of Pushti Marga",
    //   period: "1479–1531",
    //   bio: "Vallabhacharya was a great Vaishnava acharya and founder of the Pushti Marga (Path of Grace). He emphasised that Krishna's grace alone leads to salvation.",
    //   contribution: "Established 84 baithaks (sacred seats); wrote commentaries on Vedanta; initiated the worship of Shrinathji; promoted seva and divine grace."
    // },
    {
      "id": 5,
      "name": "Aniruddhacharya Ji Maharaj",
      "image": "/s5.jpg",
      "title": "Young Spiritual Orator of Vrindavan",
      "period": "1989–Present",
      "bio": "Shri Aniruddhacharya Ji Maharaj is a young saint residing in Vrindavan, known for his joyful Radha-Krishna kathas that blend devotion, wisdom, and humor. He inspires millions to embrace bhakti in daily life.",
      "contribution": "Leads large-scale kathas in Vrindavan and across India; promotes Radha-Krishna bhakti and seva through his organization Radharani Dham."
    }
    ,    
    {
      id: 6,
      name: "Jayadayal Goyandka",
      image: "/jaydayalji.jpg",
      title: "Founder of Gita Press, Gorakhpur",
      period: "1885–1965",
      bio: "Jayadayal Goyandka was a saintly businessman and visionary who founded Gita Press to make sacred scriptures accessible to all at minimal cost.",
      contribution: "Founded Gita Press; published millions of copies of Bhagavad Gita and Ramayana; made spiritual wisdom available to common people."
    }
  ],
  holyPlaces: [
    {
      id: 1,
      name: "Kusum Sarovar",
      image: "/kusum-sarovar.jpg",
      description: "A stunning ancient reservoir surrounded by red sandstone architecture with intricate Mughal carvings. Built in memory of Suraj Mal, this sacred water body is where Radha would come to collect lotus flowers.",
      significance: "According to the scriptures, Srimati Radharani used to come here with Her sakhis (companions) to collect flowers—“Kusum” means flower, hence the name Kusum Sarovar."
    },
    {
      id: 2,
      name: "Seva Kunj",
      image: "/seva-kunj.webp",
      description: "Sacred garden where Lord Krishna and Radha performed their divine Rasa Lila. Lush with ancient trees and serene atmosphere, this mystical grove is closed after sunset as devotees believe the divine couple visits nightly.",
      significance: "Site of eternal divine pastimes, forbidden to enter after dark, and considered one of the most sacred spots in Vrindavan where divine love manifests."
    },
    {
      id: 3,
      name: "Barsana",
      image: "/hero1.jpeg",
      description: "Birthplace of Radha Rani located on a hill with colorful temples and vibrant atmosphere. Famous for the Lathmar Holi festival where women playfully beat men with sticks in commemoration of Krishna's visit.",
      significance: "Radha's birthplace, home to Radha Rani Temple on hilltop, and hosts the unique Lathmar Holi celebration attracting thousands of devotees annually."
    },
    {
      id: 4,
      name: "Govardhan Hill",
      image: "/govardhan-hill.jpg",
      description: "Sacred hill that Krishna lifted on His little finger for seven days to protect villagers from torrential rains sent by Indra. Devotees perform parikrama (circumambulation) of this 21km sacred pathway.",
      significance: "Site of Krishna's divine pastime, worshipped as a manifestation of Krishna himself, and walking parikrama is considered highly auspicious earning immense spiritual merit."
    }
  ],
  testimonials: [
    {
      id: 1,
      name: "Priya Sharma",
      location: "Mumbai, India",
      image: "/unsplash-1494790108377-be9c29b29330.jpg",
      rating: 5,
      text: "Visiting Vrindavan was a life-changing experience. The peace and devotion I felt at Banke Bihari temple cannot be expressed in words. Every corner radiates divine energy."
    },
    {
      id: 2,
      name: "Rajesh Kumar",
      location: "Delhi, India",
      image: "/unsplash-1500648767791-00dcc994a43e.jpg",
      rating: 5,
      text: "The spiritual atmosphere of Vrindavan is unmatched. Walking through the streets and hearing devotional songs everywhere transported me to a different world. Truly Krishna's divine abode."
    },
    {
      id: 3,
      name: "Anita Desai",
      location: "Bangalore, India",
      image: "/unsplash-1438761681033-6461ffad8d80.jpg",
      rating: 5,
      text: "Prem Mandir at night is absolutely breathtaking! The illuminated marble carvings and the evening aarti create an atmosphere of pure devotion. I felt connected to the divine."
    },
    {
      id: 4,
      name: "David Thompson",
      location: "California, USA",
      image: "/unsplash-1507003211169-0a1dd7228f2d.jpg",
      rating: 5,
      text: "As a westerner visiting ISKCON Vrindavan, I was welcomed with such warmth. The teachings, the kirtan, and the prasadam were all wonderful. Vrindavan is truly a place where spirituality comes alive."
    }
  ],
  galleryImages: [
    // Radha Krishna (6 images)
    { "id": 1, "url": "/hero/h2.jpeg", "title": "Radha & Krishna Together 1", "category": "Radha Krishna" },
    { "id": 2, "url": "/hero/h1.jpeg", "title": "Radha & Krishna Together 2", "category": "Radha Krishna" },
    { "id": 3, "url": "/hero/h9.jpg", "title": "Radha & Krishna Together 1", "category": "Radha Krishna" },
    { "id": 4, "url": "/hero/h10.jpg", "title": "Radha & Krishna Together 2", "category": "Radha Krishna" },
    { "id": 5, "url": "/hero/h11.jpg", "title": "Radha & Krishna Together 5", "category": "Radha Krishna" },
    { "id": 6, "url": "/hero/h3.jpeg", "title": "Radha & Krishna Together 6", "category": "Radha Krishna" },
    { "id": 7, "url": "/hero/h4.jpeg", "title": "Radha & Krishna Together 6", "category": "Radha Krishna" },
    { "id": 8, "url": "/hero/h14.jpg", "title": "Radha & Krishna Together 6", "category": "Radha Krishna" },
    { "id": 9, "url": "/hero/h15.jpg", "title": "Radha & Krishna Together 6", "category": "Radha Krishna" },


    // Temples (6 images)

    { "id": 10, "url": "/gallery/t1.jpg", "title": "Radha & Krishna Together 3", "category": "Temples" },
    
    { "id": 11, "url": "/hero/h3.jpg", "title": "Radha & Krishna Together 4", "category": "Temples" },
    { "id": 12, "url": "/gallery/t3.jpg", "title": "Prem Mandir Night View", "category": "Temples" },
    { "id": 13, "url": "/gallery/t4.jpg", "title": "Banke Bihari Temple Morning", "category": "Temples" },
    { "id": 14, "url": "/gallery/t5.jpg", "title": "ISKCON Temple Exterior", "category": "Temples" },
    { "id": 15, "url": "/gallery/t6.jpg", "title": "Radha Raman Temple Vrindavan", "category": "Temples" },
    // { "id": 11, "url": "URL-to-Temple5.jpg",        "title": "Madan Mohan Temple Vrindavan",     "category": "Temples" },
    // { "id": 12, "url": "URL-to-Temple6.jpg",        "title": "Govind Dev ji Temple Mathura",      "category": "Temples" },

    // Holy Places (6 images)
    // { "id": 13, "url": "URL-to-HolyPlace1.jpg",     "title": "Yamuna River Ghat at Sunrise",     "category": "Holy Places" },
    // { "id": 14, "url": "URL-to-HolyPlace2.jpg",     "title": "Kusum Sarovar Sacred Waterbody",   "category": "Holy Places" },
    // { "id": 15, "url": "URL-to-HolyPlace3.jpg",     "title": "Seva Kunj Garden Vrindavan",        "category": "Holy Places" },
    // { "id": 16, "url": "URL-to-HolyPlace4.jpg",     "title": "Radha Kund Brij Region",            "category": "Holy Places" },
    // { "id": 17, "url": "URL-to-HolyPlace5.jpg",     "title": "Nidhivan Forest Vrindavan",         "category": "Holy Places" },
    // { "id": 18, "url": "URL-to-HolyPlace6.jpg",     "title": "Keshi Ghat Yamuna Vrindavan",       "category": "Holy Places" },

    // Festivals (6 images)
    // { "id": 19, "url": "URL-to-Festival1.jpg",      "title": "Holi at Banke Bihari Temple",       "category": "Festivals" },
    // { "id": 20, "url": "URL-to-Festival2.jpg",      "title": "Flower Holi (Phoolon Wali Holi) Vrindavan", "category": "Festivals" },
    // { "id": 21, "url": "URL-to-Festival3.jpg",      "title": "Janmashtami Celebration Vrindavan", "category": "Festivals" },
    // { "id": 22, "url": "URL-to-Festival4.jpg",      "title": "Radhashtami Procession Braj",       "category": "Festivals" },
    // { "id": 23, "url": "URL-to-Festival5.jpg",      "title": "Lathmar Holi Barsana",              "category": "Festivals" },
    // { "id": 24, "url": "URL-to-Festival6.jpg",      "title": "Raas Leela Night Vrindavan",        "category": "Festivals" }
  ]

}

// Simple authentication
export const AUTH_CREDENTIALS = {
  username: "admin",
  password: "vrindavan123"
}