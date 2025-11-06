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
  carouselSlides: [
    {
      id: 1,
      image: "/prem-mandir-temple-in-vrindavan-at-night-38e89639-20251106081940.jpg",
      title: "Welcome to Vrindavan Live",
      subtitle: "The Divine City of Lord Krishna",
      description: "Experience the eternal bliss and divine love where Krishna performed His sacred pastimes"
    },
    {
      id: 2,
      image: "/banke-bihari-temple-in-vrindavan-morning-9b65e674-20251106081940.jpg",
      title: "Sacred Temples of Vrindavan",
      subtitle: "Divine Architecture & Devotion",
      description: "Discover magnificent temples where millions of devotees find peace and spiritual awakening"
    },
    {
      id: 3,
      image: "/yamuna-river-ghat-in-vrindavan-at-sunris-e57a256d-20251106081939.jpg",
      title: "Journey to Enlightenment",
      subtitle: "Path of Pure Devotion",
      description: "Walk the sacred ghats and forests where every moment is a prayer to the divine"
    },
    {
      id: 4,
      image: "/nidhivan-forest-in-vrindavan-sacred-grov-9beec2bc-20251106081939.jpg",
      title: "Sacred Nidhivan Grove",
      subtitle: "Mystical Forest of Divine Love",
      description: "Where Lord Krishna dances with Radha under the moonlight — a place of eternal mystery"
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
      image: "/iskcon-temple-vrindavan-exterior-view-gr-d1e10225-20251106081940.jpg",
      description: "Krishna Balaram Mandir, a magnificent white marble temple complex with beautiful gardens. International headquarters of the Hare Krishna movement, attracting devotees worldwide.",
      year: "1975",
      timings: "4:30 AM - 1:00 PM, 4:00 PM - 9:00 PM"
    },
    {
      id: 3,
      name: "Prem Mandir",
      image: "/prem-mandir-temple-in-vrindavan-at-night-38e89639-20251106081940.jpg",
      description: "A temple of divine love with stunning white marble architecture and breathtaking LED illumination. Features intricate carvings depicting Krishna's pastimes.",
      year: "2012",
      timings: "5:30 AM - 12:00 PM, 4:30 PM - 9:00 PM"
    },
    {
      id: 4,
      name: "Radha Raman Temple",
      image: "/radha-raman-temple-in-vrindavan-traditio-43314cad-20251106081939.jpg",
      description: "Ancient temple housing the self-manifested deity of Lord Krishna. One of the most sacred shrines with rich historical significance and traditional worship practices.",
      year: "1542",
      timings: "7:30 AM - 12:30 PM, 5:30 PM - 9:30 PM"
    },
    {
      id: 5,
      name: "Rangaji Temple",
      image: "/rangaji-temple-in-vrindavan-south-indian-2b120d7c-20251106081939.jpg",
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
      name: "Chaitanya Mahaprabhu",
      image: "/unsplash-1507003211169-0a1dd7228f2d.jpg",
      title: "Divine Incarnation of Radha-Krishna",
      period: "1486-1534",
      bio: "Chaitanya Mahaprabhu was a 16th-century Indian saint and spiritual leader who is considered to be the combined avatar of Radha and Krishna by his devotees. He propagated the worship of Krishna through sankirtana (congregational chanting) and is the inspiration behind the ISKCON movement. His teachings emphasized bhakti yoga and pure devotional love.",
      contribution: "Revolutionized devotional practices through congregational chanting of the Hare Krishna mantra, established the philosophy of Achintya Bheda Abheda (inconceivable oneness and difference), and inspired millions to follow the path of pure love and devotion."
    },
    {
      id: 2,
      name: "Swami Haridas",
      image: "/unsplash-1609743522653-52354461eb27.jpg",
      title: "Master of Devotional Music",
      period: "1478-1573",
      bio: "Swami Haridas was a revered saint and classical musician who founded the Haridasi tradition of music. He is believed to have been the guru of the legendary musician Tansen. His devotional songs and compositions are still sung in temples across Vrindavan.",
      contribution: "Pioneered the Haridasi sampradaya of kirtan, composed numerous devotional songs that form the foundation of Indian classical music's spiritual dimension, and established Nidhivan as a sacred site of divine pastimes."
    },
    {
      id: 3,
      name: "Rupa Goswami",
      image: "/unsplash-1506794778202-cad84cf45f1d.jpg",
      title: "Pillar of Gaudiya Vaishnavism",
      period: "1489-1564",
      bio: "Rupa Goswami was one of the six Goswamis of Vrindavan, directly commissioned by Chaitanya Mahaprabhu to establish the theological foundation and temples of Vrindavan. He wrote numerous Sanskrit texts that form the philosophical backbone of Gaudiya Vaishnavism.",
      contribution: "Authored masterpieces like Bhakti-rasamrita-sindhu and Ujjvala-nilamani, systematized the theology of devotional love, and established several important temples and sacred sites in Vrindavan."
    },
    {
      id: 4,
      name: "Sanatana Goswami",
      image: "/unsplash-1500648767791-00dcc994a43e.jpg",
      title: "Elder Brother of Rupa Goswami",
      period: "1488-1558",
      bio: "Sanatana Goswami, elder brother of Rupa Goswami, was entrusted by Chaitanya Mahaprabhu with the task of uncovering the lost holy places of Vrindavan. He wrote essential texts on Vaishnava theology and practice.",
      contribution: "Rediscovered and established numerous lost tirthas (holy places) of Vrindavan, wrote Brihad-bhagavatamrita and Hari-bhakti-vilasa, and laid the foundation for systematic Vaishnava worship practices."
    },
    {
      id: 5,
      name: "Mirabai",
      image: "/unsplash-1438761681033-6461ffad8d80.jpg",
      title: "Princess Saint & Poet",
      period: "1498-1546",
      bio: "Mirabai was a 16th-century Hindu mystic poet and devotee of Lord Krishna. Born into royalty, she renounced her privileged life to dedicate herself completely to Krishna. Her bhajans (devotional songs) are sung throughout India even today.",
      contribution: "Composed hundreds of devotional poems and songs expressing intense love for Krishna, broke social barriers to pursue her devotion, and inspired countless women to embrace spiritual freedom and divine love."
    },
    {
      id: 6,
      name: "Vallabhacharya",
      image: "/unsplash-1507003211169-0a1dd7228f2d.jpg",
      title: "Founder of Pushti Marga",
      period: "1479-1531",
      bio: "Vallabhacharya was a Telugu philosopher who founded the Pushti Marga sect of Vaishnavism. He established the path of grace and emphasized serving Krishna with pure love and devotion. His teachings focus on surrendering to Krishna's grace.",
      contribution: "Established Pushti Marga (Path of Grace) philosophy, founded the Vallabha Sampradaya, wrote commentaries on the Brahma Sutras and Bhagavata Purana, and established several Krishna temples throughout India."
    }
  ],
  holyPlaces: [
    {
      id: 1,
      name: "Kusum Sarovar",
      image: "/kusum-sarovar-in-vrindavan-ancient-red-s-8508097d-20251106081941.jpg",
      description: "A stunning ancient reservoir surrounded by red sandstone architecture with intricate Mughal carvings. Built in memory of Suraj Mal, this sacred water body is where Radha would come to collect lotus flowers.",
      significance: "Sacred bathing spot associated with Radha's pastimes, offers panoramic views of Govardhan Hill, and is especially revered during Kartik month."
    },
    {
      id: 2,
      name: "Seva Kunj",
      image: "/seva-kunj-garden-in-vrindavan-lush-green-5c5d6e0c-20251106081939.jpg",
      description: "Sacred garden where Lord Krishna and Radha performed their divine Rasa Lila. Lush with ancient trees and serene atmosphere, this mystical grove is closed after sunset as devotees believe the divine couple visits nightly.",
      significance: "Site of eternal divine pastimes, forbidden to enter after dark, and considered one of the most sacred spots in Vrindavan where divine love manifests."
    },
    {
      id: 3,
      name: "Barsana",
      image: "/barsana-hill-town-near-vrindavan-colorfu-1a4b5740-20251106081940.jpg",
      description: "Birthplace of Radha Rani located on a hill with colorful temples and vibrant atmosphere. Famous for the Lathmar Holi festival where women playfully beat men with sticks in commemoration of Krishna's visit.",
      significance: "Radha's birthplace, home to Radha Rani Temple on hilltop, and hosts the unique Lathmar Holi celebration attracting thousands of devotees annually."
    },
    {
      id: 4,
      name: "Govardhan Hill",
      image: "/govardhan-hill-sacred-site-near-vrindava-66fa2612-20251106081939.jpg",
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
    {
      id: 1,
      url: "/prem-mandir-temple-in-vrindavan-at-night-38e89639-20251106081940.jpg",
      title: "Prem Mandir Night View",
      category: "Temples"
    },
    {
      id: 2,
      url: "/banke-bihari-temple-in-vrindavan-morning-9b65e674-20251106081940.jpg",
      title: "Banke Bihari Temple Morning",
      category: "Temples"
    },
    {
      id: 3,
      url: "/yamuna-river-ghat-in-vrindavan-at-sunris-e57a256d-20251106081939.jpg",
      title: "Yamuna Ghat Sunrise",
      category: "Holy Places"
    },
    {
      id: 4,
      url: "/iskcon-temple-vrindavan-exterior-view-gr-d1e10225-20251106081940.jpg",
      title: "ISKCON Temple Exterior",
      category: "Temples"
    },
    {
      id: 5,
      url: "/kusum-sarovar-in-vrindavan-ancient-red-s-8508097d-20251106081941.jpg",
      title: "Kusum Sarovar",
      category: "Holy Places"
    },
    {
      id: 6,
      url: "/seva-kunj-garden-in-vrindavan-lush-green-5c5d6e0c-20251106081939.jpg",
      title: "Seva Kunj Sacred Garden",
      category: "Holy Places"
    }
  ]
}

// Simple authentication
export const AUTH_CREDENTIALS = {
  username: "admin",
  password: "vrindavan123"
}