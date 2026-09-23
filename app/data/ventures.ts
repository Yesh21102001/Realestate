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
  gallery?: string[];
  overview?: string;
  tagline?: string;
  siteArea?: string;
  projectArea?: string;
  projectHighlights?: string[];
  clubFacilities?: string[];
  lakesideFacilities?: string[];
  wellnessFacilities?: string[];
  developerInfo?: string;
  developerStats?: { label: string; value: string }[];
  locationBenefits?: string;
  keyHighlights?: string[];
  distancesFromSite?: { location: string; distance: string }[];
  educational?: { category: string; items: string[] }[];
  itCompanies?: string[];
  shopping?: string[];
  contact?: {
    address: string;
    email: string;
    website: string;
  };
}

export const ventures: Venture[] = [
  {
    id: '1',
    tag: 'NEW',
    tagBg: 'bg-green-500',
    name: 'Nexus Valley',
    loc: 'Vizag, India',
    beds: 3,
    baths: 2,
    sqft: '1,200',
    price: '₹45 Lakh',
    image: '/images/nexus/GANDIGUNDAM 19-1-2026.pdf',
    description: 'Premium residential community at Nexus Valley featuring modern architecture and amenities designed for contemporary living.',
    features: [
      'Modern architectural design',
      'Gated community',
      'Landscaped gardens',
      'Modern amenities',
      'Strategic location',
      'Quality construction',
      'Developer track record',
      'Investment potential'
    ],
    amenities: ['Security', 'Gardens', 'Roads', 'Parking', 'Power Backup', 'Water Supply']
  },
  {
    id: '2',
    tag: 'HOT DEAL',
    tagBg: 'bg-red-500',
    name: 'Radian Silicon Park',
    loc: 'Bhogapuram, Vizag',
    beds: 3,
    baths: 2,
    sqft: '1,300',
    price: '₹50 Lakh',
    image: '/images/radian/IMG-20260912-WA0016.jpg',
    gallery: [
      '/images/radian/IMG-20260912-WA0016.jpg',
      '/images/radian/IMG-20260912-WA0017.jpg',
      '/images/radian/IMG-20260912-WA0018.jpg',
      '/images/radian/IMG-20260912-WA0019.jpg',
      '/images/radian/IMG-20260912-WA0020.jpg',
      '/images/radian/IMG-20260912-WA0021.jpg',
      '/images/radian/IMG-20260912-WA0022.jpg',
      '/images/radian/IMG-20260912-WA0025.jpg'
    ],
    tagline: 'Land Today. Landmark Tomorrow.',
    overview: 'Radian Silicon Park is a promise of future and appreciation. Enjoy premium residential plots in a first class layout for tomorrow\'s lifestyle, connectivity and value. It is a well-planned address where connectivity, infrastructure and lasting value come together.',
    siteArea: '35 Acres of Premium Plotting',
    projectArea: '100 Acres Premium Project',
    description: 'Lakeside Living at Bhogapuram. As Alluri Sitamaraju Greenfield International Airport heralds a new dawn for the Global Coastal Metropolis, an unparalleled opportunity emerges. Radian Silicon Park is a promise of future and appreciation.',
    features: [
      'VMRDA-approved luxury layout',
      'Vastu compliant',
      'Grand entrance gate',
      'Controlled entry & exit',
      '24-hr Security',
      '33, 40 & 60 ft Wide BT Roads',
      'Underground Cabling & Drainage',
      'All round Compound Wall',
      'Jogging Track',
      'Ornamental street lighting',
      'Pavements',
      'Bank loans for the Eligible'
    ],
    amenities: ['24/7 Security', 'Parking', 'Green Spaces', 'Power Backup', 'Water Facility', 'Community Center'],
    clubFacilities: [
      '3-Level Exclusive Clubhouse with 15,000 Sft Area',
      'Grand reception area with lounge',
      'Outdoor swimming pool with kids\' pool & deck area',
      'Gymnasium',
      'Indoor Games Enclave',
      'Multi-purpose Hall with Dining',
      'Yoga/Meditation Studio',
      'Home theatre',
      'Amphi-theatre',
      'Destination Wedding Venue'
    ],
    lakesideFacilities: [
      'Waterfront & Signature Experiences',
      '>30 Acre Scenic Pond',
      'Kayaking & Boating Facilities',
      'Outdoor bar house',
      'Lakefront Promenade',
      'Sunset Deck / Viewing Point',
      'Nature & Resort Living',
      'Botanical Garden',
      'Coco Garden',
      'Mango Garden',
      'Resort-Style Landscaping',
      'Palm Tree Entrance Boulevard'
    ],
    wellnessFacilities: [
      'Yoga Deck (Lake-Facing)',
      'Meditation Garden'
    ],
    developerInfo: 'Prakruti Avenues is a trusted name who brought value to investment for over 35 years. With a legacy of quality developments in their portfolio, Prakruti Avenues continue to create strategic destinations built for long-term value. Thoughtful planning and a commitment to excellence make every project exceptional. To inspire confidence and stand as landmarks in urban growth.',
    developerStats: [
      { label: 'Years Experience', value: '35' },
      { label: 'Branches', value: '15' },
      { label: 'Projects Delivered', value: '85' },
      { label: 'Ongoing Projects', value: '15' },
      { label: 'Acres Transformed', value: '1000+' },
      { label: 'Happy Families', value: '2000' },
      { label: 'Staff', value: '250' },
      { label: 'Marketing Staff', value: '2000' }
    ],
    locationBenefits: 'Radian Silicon Park is located near Bhogapuram International Airport and central to emerging Visakhapatnam-Vizianagaram-Srikakulam growth corridor. Rest assured if you are here, you are everywhere in coastal corridor. Education, healthcare, commerce, leisure and the sea shore are all within easy reach, combining the essentials of life with the promise of future opportunities.',
    keyHighlights: [
      'Rs. 1,08,010 crore investment',
      'Over 1000 hitech jobs',
      'Renewable energy integration',
      '3 kms from Radian Silicon Park',
      'Gigascale AI Data Centre + Cable Landing Station',
      'US$ 17 Billion AI Data Centre'
    ],
    distancesFromSite: [
      { location: 'Seashore', distance: '4 Kms' },
      { location: 'Alluri Sitarama Raju Airport', distance: '6 Kms' },
      { location: 'Vizianagaram Town', distance: '16 Kms' },
      { location: 'IIM, Anandapuram', distance: '20 Kms' },
      { location: 'Dwaraka Bus Stand', distance: '45 Kms' }
    ],
    educational: [
      {
        category: 'Educational Institutions',
        items: [
          'Ameya World School – 25 Kms',
          'Oakridge International School – 20 Kms',
          'Fort City School – 19 Kms',
          'Kendiya Vidyalaya – 10 Kms'
        ]
      },
      {
        category: 'Healthcare',
        items: [
          'Gayatri Hospital – 25 Kms',
          'IIM City (APIIC) – 40 Kms'
        ]
      }
    ],
    itCompanies: [
      'Reliance AI Data Centre – 3 Kms',
      'Google AI Data Centre – 25 Kms',
      'Cognizant – 42 Kms',
      'Infosys – 41 Kms'
    ],
    shopping: [
      'South India Shopping Mall – 21 Kms',
      'Metro Cash & Carry – 36 Kms',
      'West Side Mall – 39 Kms'
    ],
    contact: {
      address: 'Door No: 47-10-25/1, Sai Trade Centre, 2nd Floor, 2nd Lane, Dwaraka Nagar, Visakhapatnam, A.P - 530 016',
      email: 'pavaniprakruti12@gmail.com',
      website: 'www.vizagyards.com'
    }
  }
];

export function getVentureById(id: string): Venture | undefined {
  return ventures.find(v => v.id === id);
}
