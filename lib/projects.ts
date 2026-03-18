const img = (f: string) => `/works/${f}`

export interface ProjectSection {
  label: string
  heading: string
  text: string
  swatches?: string[]
}

export interface Project {
  num: string
  type: string
  year: string
  title: string
  heroImg: string
  thumbImg: string
  sections: ProjectSection[]
  gallery: string[]
}

export const projects: Record<number, Project> = {
  1: {
    num: '01', type: 'Website', year: '2023', title: 'Luxe Gold',
    heroImg: img('luxe1.57fbe7ae.png'), thumbImg: img('luxe1.57fbe7ae.png'),
    sections: [
      { label: 'Brief', heading: 'A luxury salon,\nreimagined online', text: 'Luxe Gold is a Hair and Nail Salon in Joo Chiat providing personalised hair, nail and beauty services. The salon wanted a new look and feel for their website with updated information and pictures.' },
      { label: 'Design Considerations', heading: 'Coherence between\ndigital and physical', text: 'The website design referenced the modern luxury furnishings of the salon to ensure a coherent feel for visitors. A video banner featured the dedication and skills of the stylists. Prices were shown upfront for transparency.' },
    ],
    gallery: [img('luxe1.57fbe7ae.png'), img('luxe2.9b327654.png')],
  },
  2: {
    num: '02', type: 'Website', year: '2023', title: 'Meta Living',
    heroImg: img('main.54affdf6.png'), thumbImg: img('main.54affdf6.png'),
    sections: [
      { label: 'Brief', heading: 'Urban co-living,\nmade clear', text: "Meta Living operates a co-living space in central downtown Singapore. The client wanted a website that effectively presents the space's lifestyle concept, rooms and facilities to potential customers." },
      { label: 'Design Considerations', heading: 'Practicality meets\nurban minimalism', text: 'The design steered towards portraying practicality and urban minimalism — focusing on showcasing rooms and common facilities. Efficient presentation allows users to quickly compare room offerings and make decisions.' },
    ],
    gallery: [img('main.54affdf6.png'), img('meta2.2064b69d.png')],
  },
  3: {
    num: '03', type: 'Website', year: '2023', title: 'ESW Manage',
    heroImg: img('main.35e970a1.png'), thumbImg: img('main.35e970a1.png'),
    sections: [
      { label: 'Brief', heading: 'Private equity,\npresented with clarity', text: "ESW Manage is a private equity firm headquartered in Singapore. The website was due for a refresh — the goal was to modernise the firm's digital presence while maintaining its authoritative tone." },
      { label: 'Design Considerations', heading: 'Portfolio clarity\nand Asia presence', text: "We redesigned the website to lend emphasis to their portfolio organisation, segregating by type: commercial and property. The contact page was redesigned to ensure their Asia presence was pronounced." },
    ],
    gallery: [img('main.35e970a1.png'), img('esw2.8e0f4e1f.png')],
  },
  4: {
    num: '04', type: 'Website', year: '2023', title: 'Rave Karaoke',
    heroImg: img('main.f6339d34.png'), thumbImg: img('main.f6339d34.png'),
    sections: [
      { label: 'Brief', heading: 'A party karaoke\nbrand with attitude', text: "#Rave is a Party Karaoke at Marina Square featuring large rooms and high-quality sound systems. The karaoke wanted an attractive website with a customised backend for administrators." },
      { label: 'Design Considerations', heading: 'Fun, vibrant, and\nbookable in seconds', text: "#RAVE's iridescent robot hand logo anchored the design. Room information — pictures, prices and packages — was intuitively organised with clear call-to-action buttons prompting visitors to book." },
    ],
    gallery: [img('main.f6339d34.png'), img('rave2.0e8ecad0.png')],
  },
  5: {
    num: '05', type: 'Digital / Branding', year: '2021', title: 'Eminent Gym SG',
    heroImg: img('main.d7d88188.webp'), thumbImg: img('main.d7d88188.webp'),
    sections: [
      { label: 'Brief', heading: 'A gym brand that\nearns its energy', text: "Eminent Gym Singapore wanted to develop its own members' portal and mobile application, along with a new fitness tracking wearable. We were tasked to revamp their brand experience by renewing their website." },
      { label: 'Strategy', heading: 'Research from\nthe inside out', text: "To understand the product, we trained at the gym. We conducted competitive research, worked closely with UI/UX designers to explore existing gym websites, and defined what would make EG stand out." },
      { label: 'Visual Branding', heading: 'Motion, dynamism\nand the iconic E', text: "Taking a class with Eminent Gym is all about the adrenaline rush. We went BIG with the showreel and featured the iconic 'E' prominently so gym-goers would immediately recognise it as Eminent.", swatches: ['rgb(191,29,74)', 'rgb(51,68,199)', 'rgb(255,173,31)', 'rgb(157,82,255)'] },
      { label: 'Creative Direction', heading: 'Dark theme,\nbold colour-coded features', text: "A dark theme with corporate colours made colour-coded features pop. A 3D gym layout showcased new facilities with exceptional clarity." },
    ],
    gallery: [img('main.d7d88188.webp'), img('eg-1.4b4a3327.webp'), img('eg-2.4d37744e.png')],
  },
  6: {
    num: '06', type: 'Digital', year: '2021', title: "Collector's Inc",
    heroImg: img('main.e5e0fd7e.png'), thumbImg: img('main.e5e0fd7e.png'),
    sections: [
      { label: 'Brief', heading: 'A platform built\nfor collectors', text: "Collector's Inc is a cloud-based social media platform for collectibles in Singapore. The platform needed a strategic IT partner across various stages of growth." },
      { label: 'Scope', heading: 'End-to-end\ndevelopment partnership', text: "Beta Werkz worked across the end-to-end development — architecture planning, UI/UX design, web development, deployment and operations support." },
    ],
    gallery: [img('main.e5e0fd7e.png'), img('ci-1.3851d121.png')],
  },
  7: {
    num: '07', type: 'Digital / Website', year: '2022', title: 'All Marketing',
    heroImg: img('main.35b20d6a.jpeg'), thumbImg: img('main.35b20d6a.jpeg'),
    sections: [
      { label: 'Brief', heading: 'Engineering materials,\nbrought online', text: 'All Marketing is an import, export and manufacturing company providing engineering materials and fabrication services. They commissioned a cloud inventory management system and website with CMS.' },
      { label: 'Deliverables', heading: 'Two systems,\none seamless experience', text: "The project encompassed a public-facing website with CMS, and a bespoke cloud inventory management system that digitised their stock and order workflows, improving operational efficiency." },
    ],
    gallery: [img('main.35b20d6a.jpeg')],
  },
  8: {
    num: '08', type: 'Digital / Branding', year: '2022', title: 'Vantage Shield',
    heroImg: img('main.baf412b6.png'), thumbImg: img('main.baf412b6.png'),
    sections: [
      { label: 'Brief', heading: 'Insurance, redefined\nfor a new brand era', text: 'Vantage Shield is a private insurance company with a rich portfolio of commercial and personal insurance plans. As part of rebranding, they adopted a new brand guideline and redid their website.' },
      { label: 'Design Considerations', heading: 'Sophistication,\nreliability, clarity', text: "Theme elements of the brand guideline were elegantly applied to portray sophistication and reliability. The design ensured a large number of policies were organised so relevant ones could be easily found." },
    ],
    gallery: [img('main.baf412b6.png'), img('vs-1.bd39d562.png')],
  },
}
