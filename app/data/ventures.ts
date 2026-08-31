export interface Venture {
  id: string;
  tag: string;
  tagBg: string;
  name: string;
  loc: string;
  beds: number;
  baths: number;
  sqft: string;
  price: string;
  image: string;
  description: string;
  features: string[];
  amenities: string[];
}

export const ventures: Venture[] = [
  {
    id: '1',
    tag: 'PENDING',
    tagBg: 'bg-purple-600',
    name: 'Modern Ocean Villa',
    loc: 'Miami, USA',
    beds: 4,
    baths: 3,
    sqft: '3,500',
    price: '$4,800',
    image: 'https://images.unsplash.com/photo-1512917774080-9b274b3cecab?w=1200&h=800&fit=crop',
    description: 'A stunning modern villa with breathtaking ocean views. This luxurious property features state-of-the-art architecture, premium finishes, and direct beach access. Perfect for those seeking a sophisticated coastal lifestyle.',
    features: [
      'Ocean-front location with private beach access',
      'Open-concept living areas with floor-to-ceiling windows',
      'Infinity pool overlooking the ocean',
      'Smart home automation system',
      'Professional chef\'s kitchen',
      'Home theater room',
      'Wine cellar',
      'Two-car garage with EV charging'
    ],
    amenities: ['Swimming Pool', 'Beach Access', 'Home Theater', 'Wine Cellar', 'Smart Home', 'Gym', 'Sauna', 'Outdoor Kitchen']
  },
  {
    id: '2',
    tag: 'NEW',
    tagBg: 'bg-green-500',
    name: 'Sunset Luxury Apartment',
    loc: 'Los Angeles, USA',
    beds: 3,
    baths: 2,
    sqft: '2,500',
    price: '$2,800',
    image: 'https://images.unsplash.com/photo-1502672260266-1c1ef2d93688?w=1200&h=800&fit=crop',
    description: 'Exquisite luxury apartment in the heart of Los Angeles with stunning sunset views. This newly renovated space combines modern design with elegant aesthetics, offering the ultimate urban living experience.',
    features: [
      'Panoramic sunset views',
      'Floor-to-ceiling windows',
      'Marble finishes throughout',
      'Walk-in closets',
      'Spa-like bathroom',
      'In-unit laundry',
      'Central air conditioning',
      'Energy-efficient appliances'
    ],
    amenities: ['Rooftop Terrace', 'Concierge Service', 'Gym', 'Parking', 'Security System', 'Lounge', 'Business Center']
  },
  {
    id: '3',
    tag: 'HOT DEAL',
    tagBg: 'bg-red-500',
    name: 'Sunny Autumn House',
    loc: 'San Francisco, USA',
    beds: 5,
    baths: 4,
    sqft: '4,000',
    price: '$3,500',
    image: 'https://images.unsplash.com/photo-1570129477492-45ac003ce338?w=1200&h=800&fit=crop',
    description: 'A charming Victorian-style house with modern updates. This spacious property offers plenty of natural light, beautiful gardens, and is located in one of San Francisco\'s most desirable neighborhoods.',
    features: [
      'Original hardwood floors',
      'Fireplace in living room',
      'Large backyard with mature trees',
      'Separate guest house',
      'Modern kitchen with island',
      'Multiple deck areas',
      'Garden shed with storage',
      'Recently updated electrical and plumbing'
    ],
    amenities: ['Garden', 'Guest House', 'Deck', 'Garage', 'Storage', 'Security System', 'Updated HVAC']
  },
  {
    id: '4',
    tag: 'NEW',
    tagBg: 'bg-green-500',
    name: 'Contemporary Penthouse',
    loc: 'New York, USA',
    beds: 3,
    baths: 3,
    sqft: '2,800',
    price: '$5,200',
    image: 'https://images.unsplash.com/photo-1522708323590-d24dbb6b0267?w=1200&h=800&fit=crop',
    description: 'Ultra-modern penthouse with 360-degree city views from its rooftop terrace. This architectural masterpiece features contemporary design, premium materials, and the best amenities of high-rise living.',
    features: [
      '360-degree city views',
      'Private rooftop terrace',
      'Climate-controlled wine vault',
      'Spa with sauna and steam room',
      'Custom-built closets',
      'High-end appliances',
      'Sound system throughout',
      'Automated blinds and lighting'
    ],
    amenities: ['Rooftop Terrace', 'Spa', 'Wine Vault', 'Concierge', 'Elevator Access', 'Security', 'Valet Parking']
  },
  {
    id: '5',
    tag: 'PENDING',
    tagBg: 'bg-purple-600',
    name: 'Tropical Beach Resort',
    loc: 'Hawaii, USA',
    beds: 6,
    baths: 5,
    sqft: '5,500',
    price: '$8,500',
    image: 'https://images.unsplash.com/photo-1469022563428-aa34faf8e8a9?w=1200&h=800&fit=crop',
    description: 'An exclusive beachfront estate on a private stretch of Hawaii\'s most pristine beach. This resort-style home offers the ultimate tropical luxury experience with world-class amenities and unparalleled privacy.',
    features: [
      'Private beach access',
      'Resort-style pool with waterfall',
      'Oceanfront master suite',
      'Guest house with 2 bedrooms',
      'Indoor-outdoor kitchen',
      'Theater room',
      'Spa and massage room',
      'Helipad ready land'
    ],
    amenities: ['Private Beach', 'Resort Pool', 'Guest House', 'Spa', 'Theater', 'Water Sports Equipment', 'Outdoor Kitchen', 'Helipad']
  }
];

export function getVentureById(id: string): Venture | undefined {
  return ventures.find(v => v.id === id);
}
