// Single source of truth for Idea Dental's real business content.
// Every string here was sourced from the live site at ideadentistry.com — nothing invented.

export const business = {
  name: "Idea Dental",
  phone: "(832) 664-8640",
  phoneHref: "tel:+18326648640",
  addressLine1: "216 W Little York Road, Suite B",
  addressLine2: "Houston, TX 77076",
  mapsHref: "https://goo.gl/maps/PBzLzgfFhGXrSZxf9",
  facebookHref:
    "https://www.facebook.com/Idea-Dental-at-West-Little-York-PLLC-137635463309853",
  yelpHref: "https://www.yelp.com/biz/idea-dental-houston",
} as const;

export const businessHours = [
  { day: "Monday", time: "10:00 AM – 4:00 PM", note: "For Surgeries Only" },
  { day: "Tuesday", time: "10:00 AM – 6:00 PM", note: "General Dentistry and Walk-Ins" },
  { day: "Wednesday", time: "10:00 AM – 6:00 PM", note: "General Dentistry and Walk-Ins" },
  { day: "Thursday", time: "11:00 AM – 4:00 PM", note: "Braces Adjustments and Surgery" },
  { day: "Friday", time: "Closed", note: null },
  { day: "Saturday", time: "By Appointment Only", note: null },
  { day: "Sunday", time: "Closed", note: null },
] as const;

export type NavItem = {
  label: string;
  href: string;
  children?: { label: string; href: string; description: string }[];
};

export const nav: NavItem[] = [
  { label: "Home", href: "/" },
  { label: "About", href: "/about" },
  { label: "New Patients", href: "/new-patients" },
  { label: "Before & After Gallery", href: "/before-after-gallery" },
  {
    label: "Services",
    href: "/services",
    children: [
      {
        label: "General Dentistry",
        href: "/services/general-dentistry",
        description: "Preventive, minor care to keep your mouth healthy long-term.",
      },
      {
        label: "Restorative Dentistry",
        href: "/services/restorative-dentistry",
        description: "Repairs and replacements, including dental implants.",
      },
      {
        label: "Cosmetic Dentistry",
        href: "/services/cosmetic-dentistry",
        description: "Veneers, dentures, and Invisalign for a smile you love.",
      },
      {
        label: "Orthodontic Services",
        href: "/services/orthodontic-services",
        description: "Braces, Invisalign, retention, and early treatment.",
      },
    ],
  },
  { label: "Specials", href: "/specials" },
  { label: "Contact", href: "/contact" },
];

export const hero = {
  eyebrow: "Dentist in Houston, TX",
  headline: "Smile brighter. Live better.",
  headlineLead: "Smile brighter",
  headlineBrand: "Live better",
  subtext:
    "Provide gentle, reliable dental care focused on prevention, comfort, and long-term oral health so every visit feels clear, calm, and reassuring.",
  ctaPrimary: { label: "Request Appointment", href: "/appointments" },
  ctaSecondary: { label: business.phone, href: business.phoneHref },
  backgroundImage: "/images/hero-background.jpg",
};

export const heroHighlights = [
  { icon: "/images/tooth.png", label: "Gentle & Pain-Free Care" },
  { icon: "/images/shield.png", label: "Modern Dental Technology" },
  { icon: "/images/nurse.png", label: "Experienced Dental Professionals" },
] as const;

export const introduction = {
  body:
    "Idea Dental is a leading provider of exceptional and dental and orthodontic services with a state-of-the-art clinic conveniently located in Houston, Texas. The team provides general, cosmetic, preventative, and emergency dental care to patients of all ages. Idea Dental offers services like braces, dental implants, dentures, root canals, teeth whitening, veneers, and extensive orthodontic treatments.",
  cta: { label: "Learn More", href: "/about" },
};

export const trustPoints = [
  {
    title: "General Dentistry",
    description: "Preventive care to keep your whole family's smiles healthy.",
  },
  {
    title: "Cosmetic Dentistry",
    description: "Veneers, whitening, and smile makeovers.",
  },
  {
    title: "Orthodontics",
    description: "Braces, Invisalign, and treatment for kids and adults.",
  },
  {
    title: "Hablamos Español",
    description: "Our team speaks Spanish for your comfort.",
  },
  {
    title: "50% Less on Average",
    description: "Quality dental care at a more affordable price.",
  },
] as const;

export const specials = {
  heading: "Specials",
  message:
    "We don't have any current promotions to share right now — check back soon, or contact us to ask about ways to save on your treatment.",
};

export const affordability = {
  heading: "We offer treatment for 50% less than other dentists",
  body:
    "Idea Dental is a leading provider of exceptional and dental and orthodontic services with a state-of-the-art clinic conveniently located in Houston, Texas. The team provides general, cosmetic, preventative, and emergency dental care to patients of all ages. Idea Dental offers services like braces, dental implants, dentures, root canals, teeth whitening, veneers, and extensive orthodontic treatments.",
  services: [
    "General dental care",
    "Cosmetic dental care",
    "Preventative dental care",
    "Emergency dental care",
    "Braces",
    "Dental implants",
    "Dentures",
    "Root canals",
    "Teeth whitening",
    "Veneers",
    "Orthodontic treatments",
  ],
  cta: { label: "Learn More", href: "/about" },
};

export const pricing = {
  heading: "Save Money. Compare Our Prices",
  columns: { ours: "Our Price", other: "Other Dentist" },
  rows: [
    { service: "Adult Cleaning", ours: "$75", other: "$98" },
    { service: "Simple Extraction", ours: "$250", other: "$350" },
    { service: "2-Surface White Filling", ours: "$180", other: "$224" },
    { service: "Porcelain Crown", ours: "$900", other: "$1,136" },
    { service: "Child or Adult Braces", ours: "Starting at $3,200", other: "$5,755" },
    { service: "Invisalign", ours: "$3,800", other: "$5,978" },
    { service: "Single Implant with Crown", ours: "$3,500", other: "$5,462" },
  ],
  categories: [
    "Teeth Whitening",
    "Root Canals",
    "Cosmetic Dentistry",
    "Veneers",
    "Braces",
    "Dental Implants",
    "Dentures",
    "General Dentistry",
    "Orthodontics",
  ],
};

export const technology = [
  {
    name: "iTero Element Scanner",
    description:
      "A comfortable 3D scanner that captures digital images of your smile without messy impressions — also used to preview Invisalign results.",
    videoId: "cby3c8VHLgM",
    videoUrl: "https://www.youtube.com/watch?v=cby3c8VHLgM&t=11s",
  },
  {
    name: "Piezotome Cube Extraction",
    description: "Modern extraction technology for a more precise, comfortable procedure.",
    videoId: "dyivqeElRVg",
    videoUrl: "https://www.youtube.com/watch?v=dyivqeElRVg",
  },
] as const;

export const doctors = [
  {
    name: "Stephanie Vu, DDS",
    photo: "/images/dr-stephanie-vu.png",
    role: "General Dentist",
    highlight: "Dedicated, personalized care for every patient.",
    excerpt:
      "Stephanie Vu, DDS, is a dedicated and caring dentist who provides exceptional care to her patients at Idea Dental, conveniently located in Houston, Texas.",
    bio: [
      "Stephanie Vu, DDS, is a dedicated and caring dentist who provides exceptional care to her patients at Idea Dental, conveniently located in Houston, Texas.",
      "Dr. Vu graduated with a bachelor's degree in biology from the University of Texas at Austin. She discovered her passion for dentistry during her undergraduate years while volunteering at the San Jose Clinic in Houston, and decided to pursue her dental degree.",
      "Dr. Vu earned her Doctor of Dental Surgery from the University of Texas School of Dentistry at Houston. She graduated from her dental program with honors and won the prestigious Student Achievement Award of Endodontics.",
      "At Idea Dental, Dr. Vu enjoys forming connections with her patients. Getting to know her clients on a personal level enables her to provide truly exceptional and individualized care.",
      "When she's not making beautiful and healthy smiles, Dr. Vu likes to stay fit and active and spend time with her family.",
    ],
  },
  {
    name: "Dr. Nukul Rathi",
    photo: "/images/dr-nukul-rathi.jpg",
    role: "Implant & Prosthodontics Specialist",
    highlight: "Dental implants and full mouth rehabilitation.",
    excerpt:
      "Idea Dental is proud to have Dr. Nakul Rathi visiting as a provider. Dr. Rathi has specialized in implants and full mouth rehabilitation.",
    bio: [
      "Idea Dental is proud to have Dr. Nakul Rathi visiting as a provider. Dr. Rathi has specialized in implants and full mouth rehabilitation. He pursued his interest in dental implants at New York University, College of Dentistry. He did his Masters of Science and Advanced Prosthodontics Clinical Residency Program from The Ohio State University (OSU), Columbus. His experience at the Implant Clinic at OSU, which is amongst the oldest implant programs in the USA, gave him a chance to work with different implant systems, in a clinic which has done over 25,000 implants.",
      "Dr. Rathi has been selected as the 'New and Emerging Speaker' by the American Dental Association at Washington DC in 2015. He conducts Continuing Education Sessions for dentists in the US and internationally. He has lectured on implant dentistry and CAD-CAM in Dentistry at multiple dental organizations.",
      "Away from dentistry, he is still a tech geek and is studying more about 3-D printing and Stereolithography. He is a keen traveler and loves to travel with friends and family. He likes outdoor sports and played basketball at the national level.",
    ],
  },
] as const;

export const testimonials = [
  {
    quote:
      "Had a problem come up in between appointments, and they said come on in and took care of it. Exceptional customer service!",
    name: "Dawn W.",
    rating: 5,
  },
  {
    quote:
      "I got my braces and implant done here. The doctors and staff were really very nice and the price was half of what other dentists quoted me. I recommend this dental office!!!",
    name: "Tommy H.",
    rating: 5,
  },
  {
    quote:
      "Great experience!!!! Staffs are extremely friendly and professional. I would highly recommend this dental office.",
    name: "Thuy B.",
    rating: 5,
  },
  {
    quote:
      "The absolute best. The staff was warm and caring, the facility was perfect and the accommodations were nice.",
    name: "Jahoward H.",
    rating: 5,
  },
] as const;

export const insurance = {
  heading: "We Accept All Insurance Plans!",
  body:
    "The team at Idea Dental strives to meet the needs of all our patients by offering quality service at an affordable price with flexible payment options.",
  spanish: "Hablamos Español",
};

export const about = {
  intro:
    "Here at Idea Dental, we believe that a smile tells a thousand words, and we are dedicated to giving our patients high-quality dental care. We offer a full range of dental services, so all of your family's needs are met under one roof.",
  body:
    "Our goal is for you to leave our office with a memorable and enjoyable dental experience, which is why our welcoming and compassionate staff will do everything they can to make you feel right at home.",
  closing: `If you are looking to brighten and enhance your smile, please don't hesitate to contact us today at ${business.phone}!`,
  patientFirst:
    "The team at Idea Dental approaches dentistry with a patient-first philosophy. The friendly staff creates a warm and welcoming environment that puts patients at ease from the moment they call to book their appointment until they leave the practice's spa-like offices. Even offering 75″ TV's in every Patient room! The team believes that everybody deserves a beautiful and healthy smile, and they strive to keep their services affordable and accessible to deliver on that belief.",
  features: [
    "Patient-first philosophy",
    "Warm, welcoming, spa-like offices",
    "75″ TVs in every patient room",
    "Affordable, accessible care for the whole family",
  ],
};

export const newPatients = {
  body: [
    "Here at Idea Dental, we love meeting new patients. Part of easing your concerns is explaining what you can expect from our practice. When you are new to our office, we put in the effort to provide you with a positive and comforting experience. Once you have been with us for a while, you can continue to expect the highest level of service. We focus on providing quality dental care, excellent customer service, and a relaxing environment to maintain a lasting patient relationship. We consider your first visit the start of a long-term relationship with you.",
    "During your initial appointment, we will perform various tests to assess the condition of your oral health and to create a dental plan based on your unique, individual needs. We look forward to meeting you!",
    `For more information on your initial visit or to request an appointment, please don't hesitate to contact us today at ${business.phone}!`,
  ],
};

export type ServiceDetail = {
  slug: string;
  title: string;
  summary: string;
  image: string;
  body: string;
  requestCta?: boolean;
};

export type ServiceCategory = {
  slug: string;
  title: string;
  summary: string;
  image: string;
  details: ServiceDetail[];
};

export const services: ServiceCategory[] = [
  {
    slug: "general-dentistry",
    title: "General Dentistry",
    summary:
      "Helping our patients maintain a healthy mouth and smile is the main goal of general dentistry. We prefer to provide more minor, preventive care than to see patients suffer with more intensive treatments from a problem that was not managed in time. We want to ensure that your oral health is in its optimal state and positively contributing to the health of your entire body. We are here to brighten your smile and pave the way for a brighter life.",
    image: "/images/dental05.jpg",
    details: [
      {
        slug: "teeth-whitening",
        title: "Teeth Whitening",
        summary: "A quick, periodic treatment to lighten the shade of your teeth.",
        image: "/images/service-teeth-whitening.jpg",
        body: "A common request we receive is how to make a smile whiter and brighter. This is a relatively simple and quick treatment option that can be performed periodically. Certain foods and beverages, such as wine and coffee, stain the teeth and contribute to discoloration. The teeth whitening process provides a solution that lightens the shade of the teeth. Additionally, the process actually rids the teeth of plaque and tartar that tend to lead to dental problems.",
        requestCta: true,
      },
      {
        slug: "root-canals",
        title: "Root Canals",
        summary: "Treating decay and infection that has reached the tooth's pulp.",
        image: "/images/brush-floss.jpg",
        body: "Root canals are needed when decay and bacteria spread for too long without treatment. At a certain point, this decay makes it to the pulp inside the tooth. This pulp includes nerves, therefore infection generally causes a lot of pain. Since this is happening on the inside of the tooth, you won't necessarily see the damage. Instead, you could feel it through pain and notice other signs that include bleeding, swelling and bad breath.",
        requestCta: true,
      },
    ],
  },
  {
    slug: "restorative-dentistry",
    title: "Restorative Dentistry",
    summary:
      "Idea Dental is committed to offering a full range of dentistry services. Whether you've had repairs or need a complete replacement, we recommend continual check-ups to assess your gums and bone density to assess the surrounding areas associated with your implant.",
    image: "/images/service-dental-implants.jpg",
    details: [
      {
        slug: "dental-implants",
        title: "Dental Implants",
        summary: "A permanent solution to missing teeth.",
        image: "/images/service-dental-implants.jpg",
        body: "When you have missing teeth, an alternative solution to dentures is dental implants. While dentures are removable, dental implants provide permanent new teeth to restore your mouth's function and appearance. Dental implants tend to offer a successful and lasting solution to the loss of some or all of your teeth.",
        requestCta: true,
      },
    ],
  },
  {
    slug: "cosmetic-dentistry",
    title: "Cosmetic Dentistry",
    summary:
      "A beautiful smile is one of the most sought after cosmetic features in the world. People from all backgrounds and professions want a bright, straight smile, and we are here to help turn that desire into reality. Whether through minor adjustments or major treatment plans, our cosmetic dentistry practice aims to improve your smile and help you build confidence in the way your teeth look.",
    image: "/images/service-smile-makeover.jpg",
    details: [
      {
        slug: "veneers",
        title: "Veneers",
        summary: "Custom shells that transform the front surface of your teeth.",
        image: "/images/service-veneers.jpg",
        body: "Porcelain Veneers are wafer-thin, custom-made shells of tooth-colored materials designed to cover the front surface of teeth to improve appearance. These shells are bonded to the front of the teeth changing their color, shape, size, or length. We recommend this treatment to anyone experiencing discoloration that cannot be fixed with whitening or if your teeth are damaged. Porcelain veneers are also an option if you're unhappy with the shape or look of your natural teeth.",
        requestCta: true,
      },
      {
        slug: "dentures",
        title: "Dentures",
        summary: "A comfortable, custom-fit solution for missing teeth.",
        image: "/images/service-dentures.jpg",
        body: "If you are missing teeth, dentures can provide a positive solution to improving your oral health. We are proud to provide dentures that are designed to fit your mouth for proper function and unique comfort. Following your appointment, we will provide you with information on at-home care for your dentures. We strongly recommend scheduling follow up appointments for periodic denture cleanings.",
        requestCta: true,
      },
      {
        slug: "invisalign",
        title: "Invisalign",
        summary: "Straighten your teeth without wires or metal.",
        image: "/images/service-orthodontics.jpg",
        body: "Invisalign® is a modern alternative to straighten your teeth without wires or metal. Invisalign® involves a series of custom trays designed specifically for you and the plan your dentist or orthodontist creates to move your teeth. The trays are made from a smooth plastic that covers your teeth and gradually moves them into place.",
        requestCta: true,
      },
    ],
  },
  {
    slug: "orthodontic-services",
    title: "Orthodontic Services",
    summary:
      "Idea Dental is excited to serve our patients. Our ultimate goal is to craft you a perfect smile that you are proud to show off. After your first examination and completion of X-rays, we will be happy to discuss all of your options. We are proud to offer several different treatment options for straighter teeth and a beautiful smile. We understand the importance of showing you all of our options and discussing them thoroughly with you. We want you to find the best treatment option for you, no matter what you choose.",
    image: "/images/service-orthodontic-services.jpg",
    details: [
      {
        slug: "traditional-braces",
        title: "Traditional Braces",
        summary: "The most popular, tried-and-true option.",
        image: "/images/service-orthodontic-services.jpg",
        body: "Even though there are many types of braces, traditional braces are still the most popular option. Great strides in technology have been made since they were first used, so they are becoming more comfortable and effective. Traditional braces use stainless steel brackets and archwires to move your teeth into their proper position. Many teenagers like to decorate their braces with different colored rubber bands to give them a colorful and unique smile. You can choose a new color (or colors) during every adjustment!",
        requestCta: true,
      },
      {
        slug: "clear-braces",
        title: "Clear Braces",
        summary: "A much less noticeable alternative to metal braces.",
        image: "/images/service-orthodontics.jpg",
        body: "Most teens and adults are reluctant to get the orthodontic care they need due to the appearance of orthodontic appliances. That's why we offer clear braces, which are much less noticeable than metal braces, but still give patients a smile they deserve. Clear aligners are not the same as clear braces. Clear aligners are plastic trays that you wear over your teeth, like a shell. Clear braces are just like metal braces, but they are almost invisible. Despite all of the advantages, there are some disadvantages to consider, too. They are typically more costly than traditional metal braces, though we offer payment plans for all patients. They can also become discolored by tea, coffee, wine, and other foods. Smoking can also cause discoloration.",
        requestCta: true,
      },
      {
        slug: "invisalign",
        title: "Invisalign",
        summary: "A wonderful, modern alternative treatment to braces.",
        image: "/images/service-smile-makeover.jpg",
        body: "Invisalign® is a wonderful, modern alternative treatment to braces. You can straighten your teeth without installing metal in your mouth. Instead, we use plastic trays (also known as aligners) to move your teeth back into place. Each aligner is custom made to fit your mouth so you don't have to worry about mouth irritation or anything else that traditional braces can cause. Since the aligners are removable, they are easier to keep clean. You can also continue to brush and floss your teeth without trying to avoid harming your braces. Invisalign® is also popular because the aligners are clear, so most people don't even know you are wearing anything unless you tell them.",
        requestCta: true,
      },
      {
        slug: "invisalign-for-teens",
        title: "Invisalign for Teens",
        summary: "A discreet option for teenagers who need correction.",
        image: "/images/service-orthodontics.jpg",
        body: "Many teenagers are affected by malocclusions that need to be corrected. However, the thought of going through high school with braces may be your teen's worst nightmare. Luckily, Invisalign Teen® can be very helpful. Your teenager can get the smile that he or she deserves without bulky wires and brackets. Invisalign Teen® uses clear aligners, so nobody will even know they are wearing them. As long as your teenager wears them for at least twenty-two hours a day, they will get proper treatment without the embarrassment of wires and braces. Even better, your teenager will be able to remove the aligners when it is time to eat, allowing them unlimited food choices. Once they are finished eating, however, it is essential to brush their teeth AND the aligners to ensure fresh breath and a healthy mouth.",
        requestCta: true,
      },
      {
        slug: "retention",
        title: "Retention",
        summary: "Keeping your teeth in place after braces come off.",
        image: "/images/service-orthodontic-services.jpg",
        body: "After you have worn your braces for the appropriate amount of time, we move into the retention stage of your treatment. It is VERY important not to skip this step, or all of your hard work will not pay off as you had hoped. Your teeth may shift around or move back to where they were instead of staying in place. During retention, you will have to wear retainers as your teeth adjust to staying in their new place without braces. You should wear your retainers as recommended by your dentist. Some should be worn only at night, while others need to be worn almost all of the time. Brushing your teeth is easier in this phase, since the retainers are removable.",
        requestCta: true,
      },
      {
        slug: "itero-intraoral-scanner",
        title: "iTero®️ Intraoral Scanner",
        summary: "Comfortable, mess-free digital impressions.",
        image: "/images/service-dental-implants.jpg",
        body: "We take pride in providing modern, high quality care so you can have the smile you deserve. We are constantly updating our equipment in order to provide patients with state-of-the-art dental care. One of our newest pieces of equipment is our iTero 3D scanner. It allows us to take images of your smile. We can also use it to show you the results you can get with Invisalign®. The largest benefit of producing images with our scanner is that you won't have to get impressions made, which can be quite unpleasant. Instead, the scanning process is quite comfortable, and you can breathe normally during the procedure.",
        requestCta: true,
      },
      {
        slug: "early-treatment",
        title: "Early Treatment",
        summary: "Catching bite problems while they're simple to fix.",
        image: "/images/service-orthodontics.jpg",
        body: "The earlier we catch problems with your child's bite, the simpler they are to fix. The results are often better than if we wait and will require significantly less work. We may not need to keep braces on your child for as long when they are younger, which means less expense for you. The American Association of Orthodontics (AAO) recommends that children visit an orthodontist as soon as their dentist notices that there might be a problem, or before they are seven years old. Early intervention can be beneficial — we will watch how your child's mouth and teeth grow and develop, so if we see something that needs to be done, we can do it as soon as possible.",
        requestCta: true,
      },
      {
        slug: "adult-treatment",
        title: "Adult Treatment",
        summary: "It's never too late for the smile you deserve.",
        image: "/images/service-smile-makeover.jpg",
        body: "No matter your age, you deserve a smile that gives you confidence. Braces are not just for children anymore. With the latest advancements in technologies, we can get you the smile you deserve! Here at Idea Dental, we work hard to give you the smile you've always wanted. We offer several different treatments that can be effective no matter how old you are. Orthodontic treatments are not just for your smile — fixing your teeth can also dramatically change your oral health. When you have crooked teeth or a malocclusion (uneven bite), you may be prone to oral health problems such as gum disease and tartar buildup.",
        requestCta: true,
      },
      {
        slug: "braces-for-teens",
        title: "Braces For Teens",
        summary: "Faster, more comfortable treatment for teenagers.",
        image: "/images/service-orthodontic-services.jpg",
        body: "Braces are not as scary as most teens think. Technology has advanced a lot in recent years, providing us with newer styles of braces. The result is a faster, more comfortable, and more effective treatment. Braces come in different colors, styles, and materials, so your teen can customize their look and express their personality. It is typically recommended that children begin seeing an orthodontist at the age of seven — the earlier you catch a problem, the easier the problem can be to treat.",
        requestCta: true,
      },
    ],
  },
];

export function findService(categorySlug: string) {
  return services.find((s) => s.slug === categorySlug);
}

export function findServiceDetail(categorySlug: string, detailSlug: string) {
  const category = findService(categorySlug);
  return category?.details.find((d) => d.slug === detailSlug);
}

export const galleryItems = [
  {
    id: "2085703",
    image: "/images/gallery-2085703.jpeg",
    category: "Traditional Braces",
    before: "Before",
    after: "9 months later",
  },
  {
    id: "2085704",
    image: "/images/gallery-2085704.jpeg",
    category: "Teeth Whitening",
    before: "Before",
    after: "1 week later",
  },
  {
    id: "2085705",
    image: "/images/gallery-2085705.jpeg",
    category: "Traditional Braces",
    before: "Before",
    after: "1 week later",
  },
  {
    id: "2085706",
    image: "/images/gallery-2085706.jpeg",
    category: "Teeth Cleaning",
    before: "Before",
    after: "After",
  },
  {
    id: "2085707",
    image: "/images/gallery-2085707.jpeg",
    category: "Cosmetic Bonding",
    before: "Before",
    after: "After",
  },
  {
    id: "2085708",
    image: "/images/gallery-2085708.jpeg",
    category: "Dentures",
    before: "Before",
    after: "After",
  },
  {
    id: "2085709",
    image: "/images/gallery-2085709.jpeg",
    category: "Traditional Braces",
    before: "Before",
    after: "4 months later",
  },
  {
    id: "2085710",
    image: "/images/gallery-2085710.jpeg",
    category: "Fillings",
    before: "Before",
    after: "After",
  },
  {
    id: "2085711",
    image: "/images/gallery-2085711.jpeg",
    category: "Implants",
    before: "Before",
    after: "After",
  },
] as const;

export const accessibilityStatement = {
  intro:
    "We are continuously working to improve the accessibility of content on our website. Below, you'll find a few recommendations to help make your browsing experience more accessible:",
  ssaIntro:
    "If you have trouble seeing web pages, the US Social Security Administration offers these tips for optimizing your computer and browser to improve your online experience.",
  tips: [
    "Use your computer to read web pages out loud",
    "Use the keyboard to navigate screens",
    "Increase text size",
    "Magnify your screen",
    "Change background and text colors",
    "Make your mouse pointer more visible (Windows only)",
  ],
  speechNote:
    "If you are looking for mouse and keyboard alternatives, speech recognition software such as Dragon Naturally Speaking may help you navigate web pages and online services. This software allows the user to move focus around a web page or application screen through voice controls.",
  closing: "If the recommendations above do not meet your needs, we invite you to contact us for assistance.",
};

export const sitemapPages = [
  { label: "Home", href: "/" },
  { label: "About", href: "/about" },
  { label: "Meet Our Doctors", href: "/about/meet-our-doctors" },
  { label: "New Patients", href: "/new-patients" },
  { label: "Before & After Gallery", href: "/before-after-gallery" },
  { label: "Services", href: "/services" },
  { label: "General Dentistry", href: "/services/general-dentistry" },
  { label: "Restorative Dentistry", href: "/services/restorative-dentistry" },
  { label: "Cosmetic Dentistry", href: "/services/cosmetic-dentistry" },
  { label: "Orthodontic Services", href: "/services/orthodontic-services" },
  { label: "Specials", href: "/specials" },
  { label: "Appointments", href: "/appointments" },
  { label: "Contact", href: "/contact" },
  { label: "Accessibility", href: "/accessibility" },
] as const;

export const contactForm = {
  disclaimer:
    "Please use this form for general information purposes only. DO NOT send personal health information through this form. Specific patient care must be addressed during your appointment.",
};

export const appointmentForm = {
  intro:
    "Please complete the following form to request an appointment. Please also note that availability will vary depending on your request. Your appointment will be confirmed by phone by a member of our staff. Thank you!",
  preferredTimes: ["Morning", "Afternoon", "Evening"],
};

export const chat = {
  heading: "Questions? Try our chat:",
  embed: {
    src: "https://cdn.customgpt.ai/js/embed.js",
    divId: "customgpt_chat",
    projectId: "8618",
    projectKey: "f283d26df2bbb2ebd89c714ef5a70579",
    width: "100%",
  },
};

export const footerLinks = {
  columns: [
    {
      title: "Idea Dental",
      links: [
        { label: "About", href: "/about" },
        { label: "New Patients", href: "/new-patients" },
        { label: "Meet Our Doctors", href: "/about/meet-our-doctors" },
        { label: "Contact", href: "/contact" },
      ],
    },
    {
      title: "Services",
      links: [
        { label: "General Dentistry", href: "/services/general-dentistry" },
        { label: "Restorative Dentistry", href: "/services/restorative-dentistry" },
        { label: "Cosmetic Dentistry", href: "/services/cosmetic-dentistry" },
        { label: "Orthodontic Services", href: "/services/orthodontic-services" },
      ],
    },
    {
      title: "More",
      links: [
        { label: "Specials", href: "/specials" },
        { label: "Before & After Gallery", href: "/before-after-gallery" },
        { label: "Request Appointment", href: "/appointments" },
      ],
    },
  ],
  legal: [
    { label: "Sitemap", href: "/sitemap" },
    { label: "Accessibility", href: "/accessibility" },
  ],
};
