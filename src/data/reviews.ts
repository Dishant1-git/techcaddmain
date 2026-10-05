/** Student reviews shown on /reviews. The first `reviewsInitial` are visible; "See more" reveals the rest. Sample text taken from public Google reviews. */
export type Review = { name: string; course: string; text: string; href: string };

export const reviewsInitial = 6;

export const reviewStats = { rating: "4.9", count: "750+", students: "10,000+" };

export const reviews: Review[] = [
  { name: "Vishu", course: "Data Analytics", href: "https://share.google/5qCrB0JyR1Gs0ktHi", text: "Had a great experience learning data analytics with the mentors. The trainers teach very well and I had a good time learning at techcadd Jalandhar." },
  { name: "Kamaldeep Kaur", course: "Cyber Security", href: "https://share.google/dzepPRvU2wm8cJGeQ", text: "I am doing 45 days training at techcadd. I gained much knowledge in a short time. The environment is friendly and comfortable for learning new skills, and the teachers explain clearly." },
  { name: "Anmol Hundal", course: "Digital Marketing", href: "https://share.google/RwzeqzeOwNmEh1ihN", text: "techcadd is the best institute for digital marketing in Jalandhar. The way of teaching is good and all the teachers are friendly. I recommend joining." },
  { name: "Nidhi", course: "Digital Marketing", href: "https://share.google/p3SUSZPcS6ixAQM3y", text: "I am doing the 6-month Digital Marketing course and the training is really good. The faculty explains everything clearly and I am learning useful skills for my career." },
  { name: "Robin Mahay", course: "Data Analytics", href: "https://share.google/vx32GiMqg7isvrQw4", text: "The trainers explained concepts clearly and gave hands-on practice with real tools. The environment was supportive and the course boosted my confidence for job opportunities." },
  { name: "Tarun Yadav", course: "Artificial Intelligence", href: "https://share.google/Nmihhe85wE8oQiK50", text: "I am pursuing an Artificial Intelligence course as part of my industrial training. The experience has been excellent, with supportive trainers, practical training and a hands-on project." },
  { name: "Janvi Kumari", course: "Digital Marketing", href: "https://share.google/z82fc1xQ6YZUbHe0M", text: "I learnt SEO, SMM, WordPress and content writing in the 6-month course. Teachers are friendly and polite, and I gained practical knowledge of digital marketing." },
  { name: "Manish Kumar", course: "Data Analytics", href: "https://share.google/yMuWkuBwgEJvLn5Gv", text: "In my 4-month data analytics course I gained practical knowledge and worked on live projects. Teachers explain every topic in detail." },
  { name: "Inder Preet", course: "Cyber Security", href: "https://share.google/jrgUkeQm0DtzTL6FP", text: "The trainers were highly knowledgeable and explained every concept with practical examples. The course content was industry-oriented and improved my technical skills." },
  { name: "Anosh Dadra", course: "Full Stack Development", href: "https://share.google/SgWmjkQj9hfSwIVdn", text: "I joined for a 45-day Full Stack Python training. The trainers are patient and always ready to clear doubts, and the teaching is practical and industry-focused." },
  { name: "Rudransh Vasishat", course: "Python", href: "https://share.google/ArmsKdXixdbOChMwg", text: "The trainer explained every topic in a simple way and we practised after each session. The course is beginner-friendly with real-life examples and mini projects." },
  { name: "Rimple", course: "Data Science", href: "https://share.google/Lr1eR2aZVuh3c3zDB", text: "I am doing the 45-day Data Science training. Trainers explain concepts clearly and run hands-on sessions with Python and essential libraries." },
];
