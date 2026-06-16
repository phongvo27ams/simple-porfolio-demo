export const defaultLanguage = "vi";

export const siteData = {
  brand: "Viktorija",
  phone: "+84 3522 27111",
  email: "viktorija@example.com",
  navItems: [
    { href: "#home", label: { vi: "Trang chủ", en: "Home" } },
    { href: "#skills", label: { vi: "Kỹ năng", en: "My Skills" } },
    { href: "#experience", label: { vi: "Kinh nghiệm", en: "Experience" } },
    { href: "#works", label: { vi: "Dự án", en: "Works" } },
    { href: "#about-us", label: { vi: "Đánh giá", en: "About us" } },
    { href: "#contact", label: { vi: "Liên hệ", en: "Contact" } },
  ],
  ui: {
    menu: { vi: "Menu", en: "Menu" },
    openMenu: { vi: "Mở menu", en: "Open menu" },
    previousTestimonial: { vi: "Đánh giá trước", en: "Previous testimonial" },
    nextTestimonial: { vi: "Đánh giá tiếp theo", en: "Next testimonial" },
    mobilePrimary: { vi: "Điều hướng di động", en: "Mobile Primary" },
    primary: { vi: "Điều hướng chính", en: "Primary" },
    footer: { vi: "Điều hướng cuối trang", en: "Footer" },
    slide: { vi: "Trang", en: "Slide" },
    language: {
      vi: { short: "VI", flag: "./assets/images/vn-flag.png" },
      en: { short: "EN", flag: "./assets/images/us-flag.png" },
    },
  },
  hero: {
    title: { vi: "Xin chào,\nTôi là Viktorija", en: "Hey There,\nI am Viktorija" },
    yearsLabel: { vi: "Năm\nKinh nghiệm", en: "Years\nExperience" },
    intro: {
      vi: "Tôi thiết kế những trải nghiệm số đơn giản, tinh tế và giàu tính thẩm mỹ. Mỗi sản phẩm tôi tạo ra đều hướng đến sự cân bằng giữa công năng và vẻ đẹp, bởi tôi thực sự yêu những gì mình làm.",
      en: "I design digital experiences that are simple, elegant, and visually engaging. Every product I create strives to achieve the perfect balance between functionality and aesthetics, driven by a genuine passion for what I do.",
    },
    certificateLabel: {
      vi: "Chứng nhận \n Chuyên gia \n UI/UX Designer",
      en: "Certified Professional \n UI/UX Designer",
    },
  },
  servicesSection: {
    title: { vi: "Tôi giúp gì cho bạn?", en: "What do I help?" },
    description1: {
      vi: "Tôi mang đến những giải pháp thiết kế giúp sản phẩm của bạn trở nên trực quan, hiệu quả và hấp dẫn hơn. Từ nghiên cứu người dùng, thiết kế giao diện đến xây dựng trải nghiệm số, tôi tập trung vào việc tạo ra những sản phẩm vừa đẹp mắt vừa đáp ứng mục tiêu kinh doanh.",
      en: "I provide design solutions that make your products more intuitive, effective, and engaging. From user research and interface design to crafting seamless digital experiences, I focus on creating products that are both visually appealing and aligned with business goals.",
    },
    description2: {
      vi: "Tôi giúp biến ý tưởng thành những trải nghiệm số đơn giản, hiện đại và dễ sử dụng.",
      en: "I help turn ideas into simple, modern, and user-friendly digital experiences.",
    },
  },
  services: [
    {
      icon: "fa-solid fa-laptop-code",
      tone: "teal",
      title: { vi: "Thiết kế Website", en: "Website Design" },
      projects: { vi: "76 Dự án", en: "76 Projects" },
    },
    {
      icon: "fa-solid fa-mobile-screen-button",
      tone: "yellow",
      title: { vi: "Thiết kế App Mobile", en: "Mobile App Design" },
      projects: { vi: "63 Dự án", en: "63 Projects" },
    },
    {
      icon: "fa-solid fa-bezier-curve",
      tone: "orange",
      title: { vi: "Nhận diện thương hiệu", en: "Brand Identity" },
      projects: { vi: "47 Dự án", en: "47 Projects" },
    },
  ],
  stats: [
    { target: 285, label: { vi: "Dự án hoàn thành", en: "Project Completed" } },
    { target: 190, label: { vi: "Khách hàng hài lòng", en: "Happy Clients" } },
  ],
  experienceSection: {
    title: { vi: "Kinh nghiệm làm việc", en: "My Work Experience" },
  },
  experience: [
    {
      company: { vi: "Công ty Brisbane", en: "Brisbane Co.,Ltd." },
      period: { vi: "09/2016 - 12/2020", en: "Sep 2026 - Dec 2022" },
      role: { vi: "Nhà thiết kế hình ảnh", en: "Visual Designer" },
      tone: "teal",
      description: {
        vi: "Thiết kế các ý tưởng cho nhiều nền tảng khác nhau, bao gồm trang web, trò chơi, phim ảnh, ki-ốt và các sản phẩm đeo được.",
        en: "A visual designer creates concepts for a range of platforms, including websites, games, films, kiosks, and wearable products.",
      },
    },
    {
      company: { vi: "Công ty New Man Services", en: "New Man Services JSC" },
      period: { vi: "01/2021 - 03/2023", en: "Jan 2021 - Mar 2023" },
      role: { vi: "Nhà thiết kế UI/UX", en: "UI/UX Designer" },
      tone: "orange",
      description: {
        vi: "Thiết kế UI/UX tập trung vào việc xây dựng giao diện cho phần mềm và thiết bị sao cho rõ ràng, hiệu quả và dễ sử dụng.",
        en: "UI/UX design focuses on building interfaces for software and devices that are clear, efficient, and easy to use.",
      },
    },
    {
      company: { vi: "Tập đoàn Global Solutions", en: "Global Solutions Inc." },
      period: { vi: "04/2023 - 06/2026", en: "Apr 2019 - Jun 2026" },
      role: { vi: "Nhà thiết kế sản phẩm cấp cao", en: "Sr. Product Designer" },
      tone: "yellow",
      description: {
        vi: "Xây dựng trải nghiệm trực quan cho sản phẩm, tối ưu cách trình bày, khả năng sử dụng và hiệu quả chuyển đổi thông qua hình ảnh, nội dung và cấu trúc tương tác rõ ràng.",
        en: "Built product experiences with a focus on usability, visual clarity, and stronger conversion through thoughtful interaction design.",
      },
    },
  ],
  worksSection: {
    title: { vi: "Các dự án nổi bật", en: "My Latest Works" },
    subtitle: { vi: "Giải pháp hoàn hảo cho trải nghiệm số", en: "Perfect solution for digital experience" },
    cta: { vi: "Xem thêm dự án", en: "Explore More Works" },
  },
  works: [
    {
      tone: "mustard",
      title: { vi: "Thiết kế App", en: "App Design" },
      subtitle: { vi: "Ứng dụng giao đồ ăn", en: "Food Delivery App" },
      image: "./assets/images/app-design.png",
      alt: { vi: "Xem trước dự án thiết kế app", en: "App design project preview" },
    },
    {
      tone: "green",
      title: { vi: "Thiết kế Web", en: "Web Design" },
      subtitle: { vi: "Website Agency", en: "Agency Website" },
      image: "./assets/images/web-design.png",
      alt: { vi: "Xem trước dự án thiết kế web", en: "Web design project preview" },
    },
    {
      tone: "mint",
      title: { vi: "Thương hiệu", en: "Branding" },
      subtitle: { vi: "Nhận diện thương hiệu", en: "Brand Identity" },
      image: "./assets/images/branding.png",
      alt: { vi: "Xem trước dự án thương hiệu", en: "Branding project preview" },
    },
  ],
  testimonialsSection: {
    title: { vi: "Mọi người nói về tôi", en: "People talk about me" },
    subtitle: {
      vi: "Những chia sẻ từ khách hàng và đối tác phản ánh cách tôi làm việc: rõ ràng, chỉn chu và luôn tập trung vào kết quả thực tế.",
      en: "Feedback from clients and partners reflects how I work: clear communication, thoughtful execution, and a strong focus on real results.",
    },
  },
  testimonials: [
    {
      image: "https://placehold.co/70x70/f0c45d/17374b?text=A",
      quote: {
        vi: '"Một quá trình hợp tác rất chỉnh chu. Kết quả cuối cùng vượt kỳ vọng và mọi thứ được triển khai một cách mạch lạc."',
        en: '"A highly professional collaboration. The final result exceeded expectations and everything was delivered in a clear, structured way."',
      },
      name: "Anamika Sandula",
      role: { vi: "Quản lý sản phẩm", en: "Product Manager" },
    },
    {
      image: "https://placehold.co/78x78/f0c45d/17374b?text=J",
      quote: {
        vi: '"Cách làm việc rất hiệu quả, từ nghiên cứu đến bàn giao đều rõ ràng. Mỗi quyết định thiết kế đều có lý do thuyết phục."',
        en: '"The team worked very efficiently from discovery to delivery. Every design decision was clear and well justified."',
      },
      name: "John Allendone",
      role: { vi: "Quản lý sáng tạo", en: "Creative Manager" },
    },
    {
      image: "https://placehold.co/70x70/f08c73/17374b?text=S",
      quote: {
        vi: '"Giao diện được hoàn thiện tốt, dễ dùng và bám sát định hướng thương hiệu. Trải nghiệm hợp tác cũng rất thực tế."',
        en: '"The interface was polished, easy to use, and aligned well with the brand direction. The collaboration was practical and effective."',
      },
      name: "Souther Hackson",
      role: { vi: "Quản lý marketing", en: "Marketing Manager" },
    },
    {
      image: "https://placehold.co/70x70/7bc8a4/17374b?text=M",
      quote: {
        vi: '"Khả năng giao tiếp rõ ràng và tư duy hệ thống có chiều sâu giúp dự án diễn ra trơn tru. Kết quả cuối cùng vượt mong đợi."',
        en: '"Clear communication and strong systems thinking made the project smooth from start to finish. The final result felt very polished."',
      },
      name: "Martha Geller",
      role: { vi: "Trưởng dự án", en: "Project Lead" },
    },
    {
      image: "https://placehold.co/78x78/f0c45d/17374b?text=D",
      quote: {
        vi: '"Từ giai đoạn khám phá đến bàn giao đều hiệu quả. Tính thẩm mỹ và tính ứng dụng được cân bằng rất tốt."',
        en: '"From discovery to delivery, the process was efficient. Visual quality and usability were balanced extremely well."',
      },
      name: "Daniel Ronan",
      role: { vi: "Giám đốc nghệ thuật", en: "Art Director" },
    },
    {
      image: "https://placehold.co/70x70/f29b7d/17374b?text=K",
      quote: {
        vi: '"Thực hiện rất tốt việc chuyển hóa từ ý tưởng về sản phẩm thành một giao diện hoàn thiện, đẹp mắt và dễ sử dụng."',
        en: '"The team translated the product vision into an interface that feels polished, visually appealing, and easy to use."',
      },
      name: "Kelly Stone",
      role: { vi: "Trưởng marketing", en: "Marketing Lead" },
    },
  ],
  footer: {
    title: {
      vi: "Hãy cùng nhau tạo nên điều gì đó thật ấn tượng.",
      en: "Let’s make something amazing together.",
    },
    startBy: { vi: "Bắt đầu bằng cách", en: "Start by" },
    sayHi: { vi: "nói xin chào", en: "saying hi" },
    information: { vi: "Thông tin", en: "Information" },
    address: { vi: "237 Sunny Springs, Breezy Valley, NA", en: "237 Sunny Springs, Breezy Valley, NA" },
    rights: { vi: "©2026. Bảo lưu mọi quyền", en: "©2026. All Rights Reserved" },
    designBy: { vi: "Thiết kế bởi Võ Thị Mỹ Tiên", en: "Design by Võ Thị Mỹ Tiên" },
  },
};
