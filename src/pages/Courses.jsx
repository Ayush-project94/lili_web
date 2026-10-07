import {
  CalendarDays,
  IndianRupee,
  GraduationCap,
  Award,
  Check,
  ArrowRight,
  Laptop,
} from "lucide-react";

const courses = [
  {
    title: "DCA",
    subtitle: "Diploma in Computer Applications",
    description:
      "Learn computer applications, MS Office, internet, accounting and practical computer skills.",
    duration: "12 Months",
    fee: "₹8,000",
    eligibility: "10th / 12th Pass",
    learn: [
      "Computer Fundamentals",
      "MS Office",
      "Internet & Digital Skills",
      "Advanced MS Office",
      "Tally Prime & GST",
      "Data Entry & Typing",
      "Practical Computer Applications",
    ],
  },
  {
    title: "ADCA",
    subtitle: "Advanced Diploma in Computer Applications",
    description:
      "Advanced computer course covering office applications, accounting, designing and internet technologies.",
    duration: "12 Months",
    fee: "₹10,000",
    eligibility: "10th / 12th Pass",
    learn: [
      "Advanced MS Office",
      "Tally Prime & GST",
      "Graphic Design",
      "Internet & Digital Skills",
      "Data Entry",
      "Computer Hardware Basics",
      "Practical Projects",
    ],
  },
  {
    title: "PGDCA",
    subtitle: "Post Graduate Diploma in Computer Applications",
    description:
      "Professional computer application course designed for graduates who want advanced IT skills.",
    duration: "12 Months",
    fee: "₹10,000",
    eligibility: "Graduation",
    learn: [
      "Computer Fundamentals",
      "Programming Fundamentals",
      "Database Management",
      "Web Technology",
      "Software Engineering",
      "Data Management",
      "Practical Projects",
    ],
  },
  {
    title: "BCC",
    subtitle: "Basic Computer Course",
    description:
      "A beginner-friendly course to learn essential computer and digital skills.",
    duration: "3 Months",
    fee: "₹2,500",
    eligibility: "8th / 10th Pass",
    learn: [
      "Computer Fundamentals",
      "MS Word",
      "MS Excel",
      "MS PowerPoint",
      "Internet Basics",
      "Email & Digital Skills",
      "Practical Computer Applications",
    ],
  },
  {
    title: "DEO",
    subtitle: "Data Entry Operator",
    description:
      "Build professional data entry, typing and office documentation skills.",
    duration: "3 Months",
    fee: "₹3,500",
    eligibility: "10th Pass",
    learn: [
      "English & Hindi Typing",
      "MS Word",
      "MS Excel",
      "Data Entry",
      "Internet & Email",
      "Office Documentation",
      "Practical Data Entry",
    ],
  },
  {
    title: "Tally Prime",
    subtitle: "Accounting & GST Course",
    description:
      "Learn accounting, Tally Prime, GST, billing and inventory management.",
    duration: "3 Months",
    fee: "₹4,000",
    eligibility: "10th / 12th Pass",
    learn: [
      "Accounting Fundamentals",
      "Tally Prime",
      "GST",
      "Invoice & Billing",
      "Inventory Management",
      "Banking Transactions",
      "Practical Accounting",
    ],
  },
  {
    title: "CCC",
    subtitle: "Course on Computer Concepts",
    description:
      "Learn basic computer knowledge, MS Office, internet and digital literacy.",
    duration: "3 Months",
    fee: "₹2,500",
    eligibility: "10th Pass",
    learn: [
      "Computer Fundamentals",
      "MS Office",
      "Internet & Digital Skills",
      "Email",
      "Digital Payments",
      "Online Services",
      "Practical Computer Applications",
    ],
  },
  {
    title: "Web Development",
    subtitle: "Frontend Web Development",
    description:
      "Learn modern web development and create responsive professional websites.",
    duration: "6 Months",
    fee: "₹10,000",
    eligibility: "10th / 12th Pass",
    learn: [
      "HTML",
      "CSS & Tailwind CSS",
      "JavaScript",
      "React",
      "Responsive Design",
      "Git & GitHub",
      "Live Website Projects",
    ],
  },
  {
    title: "Graphic Design",
    subtitle: "Graphic Design Course",
    description:
      "Learn graphic design fundamentals and create professional digital designs.",
    duration: "6 Months",
    fee: "₹7,000",
    eligibility: "10th Pass",
    learn: [
      "Design Fundamentals",
      "Photoshop",
      "CorelDRAW",
      "Canva",
      "Logo Design",
      "Poster & Banner Design",
      "Practical Design Projects",
    ],
  },
  {
    title: "Digital Marketing",
    subtitle: "Digital Marketing Course",
    description:
      "Learn digital marketing strategies and promote businesses online.",
    duration: "6 Months",
    fee: "₹8,000",
    eligibility: "10th / 12th Pass",
    learn: [
      "Digital Marketing Basics",
      "Social Media Marketing",
      "SEO",
      "Content Marketing",
      "Google Ads Basics",
      "Email Marketing",
      "Practical Campaigns",
    ],
  },
];

function CourseCard({ course }) {
  return (
    <div className="group overflow-hidden rounded-[24px] border border-gray-200 bg-white shadow-sm transition-all duration-300 hover:-translate-y-1 hover:shadow-xl">
      <div className="relative overflow-hidden bg-gradient-to-br from-[#5038f5] via-[#4130d5] to-[#070b3d] px-6 pb-7 pt-6">
        <div className="absolute -right-8 -top-10 h-32 w-32 rounded-full bg-white/10" />
        <div className="absolute -bottom-14 -left-10 h-32 w-32 rounded-full bg-white/10" />

        <div className="relative z-10 flex items-start justify-between">
          <span className="rounded-full bg-yellow-400 px-4 py-1 text-xs font-extrabold uppercase text-black">
            Course
          </span>

          <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-white/10 text-yellow-300 backdrop-blur-sm">
            <Laptop size={22} />
          </div>
        </div>

        <div className="relative z-10 mt-5">
          <h2 className="text-3xl font-black tracking-tight text-white">
            {course.title}
          </h2>

          <p className="mt-1 text-sm font-medium text-white/90">
            {course.subtitle}
          </p>
        </div>
      </div>

      <div className="p-6">
        <p className="min-h-[72px] text-[15px] leading-7 text-gray-500">
          {course.description}
        </p>

        <div className="mt-5 grid grid-cols-2 gap-3">
          <div className="rounded-2xl bg-gray-50 p-4">
            <CalendarDays className="text-[#5139ee]" size={21} />

            <p className="mt-3 text-xs font-semibold text-gray-400">Duration</p>

            <p className="mt-1 font-extrabold text-gray-900">
              {course.duration}
            </p>
          </div>

          <div className="rounded-2xl bg-gray-50 p-4">
            <IndianRupee className="text-[#5139ee]" size={21} />

            <p className="mt-3 text-xs font-semibold text-gray-400">Fee</p>

            <p className="mt-1 font-extrabold text-gray-900">{course.fee}</p>
          </div>

          <div className="col-span-2 rounded-2xl bg-gray-50 p-4">
            <GraduationCap className="text-[#5139ee]" size={21} />

            <p className="mt-3 text-xs font-semibold text-gray-400">
              Eligibility
            </p>

            <p className="mt-1 font-extrabold text-gray-900">
              {course.eligibility}
            </p>
          </div>
        </div>

        <div className="mt-7">
          <div className="flex items-center gap-2">
            <Award className="text-yellow-400" size={21} />

            <h3 className="text-lg font-black text-gray-900">
              What You'll Learn
            </h3>
          </div>

          <div className="mt-4 space-y-2.5">
            {course.learn.map((item) => (
              <div
                key={item}
                className="flex items-center gap-2.5 text-[15px] text-gray-600"
              >
                <Check
                  size={17}
                  strokeWidth={3}
                  className="shrink-0 text-emerald-500"
                />

                <span>{item}</span>
              </div>
            ))}
          </div>
        </div>

        <button
          type="button"
          className="mt-7 flex w-full items-center justify-center gap-2 rounded-xl bg-[#5038f5] px-5 py-4 font-bold text-white transition-all duration-300 hover:bg-[#3f2bd8]"
        >
          View Course
          <ArrowRight size={19} />
        </button>
      </div>
    </div>
  );
}

export default function Courses() {
  return (
    <section className="bg-[#f8f9fc] px-5 py-16">
      <div className="mx-auto max-w-7xl">
        <div className="mx-auto mb-12 max-w-2xl text-center">
          <span className="text-sm font-extrabold uppercase tracking-wider text-[#5038f5]">
            Our Courses
          </span>

          <h1 className="mt-2 text-4xl font-black text-gray-900 md:text-5xl">
            Choose Your Course
          </h1>

          <p className="mt-4 text-gray-500">
            Learn practical computer skills with industry-focused courses
            designed for students and professionals.
          </p>
        </div>

        <div className="grid grid-cols-1 gap-7 md:grid-cols-2 xl:grid-cols-3">
          {courses.map((course) => (
            <CourseCard key={course.title} course={course} />
          ))}
        </div>
      </div>
    </section>
  );
}
