import { createI18n } from "vue-i18n";

const messages = {
  az: {
    home: "Ana səhifə",
    about: "Haqqımızda",
    blog: "Bloq",
    contact: "Əlaqə",
    categories: "Kateqoriyalar",
    pages: "Səhifələr",
    allpost: "Bütün paylaşımlar",
    login: "Login",
    register: "Qeydiyyat",
    "already-have-account": "Artıq hesabınız var?",
    "dont-have-account": "Hesabınız yoxdur?",
    Salam: "Salam",
    company: "Şirkət",
    faq: "Tez-tez verilən suallar",
    careers: "Karyera",
    about_us: "Haqqımızda",
    contact_us: "Bizimlə əlaqə",
    quick_links: "Tez keçidlər",
    discussion: "Müzakirə",
    support: "Dəstək",
    privacy_policy: "Məxfilik siyasəti",
    customer_support: "Müştəri dəstəyi",
    terms_conditions: "Şərtlər və qaydalar",
    footer_rights: "Bütün hüquqlar qorunur.",
    subscribe_now: "İndi abunə ol",
    authors: "Müəlliflər",
    time: "dəqiqə",
    trend: "Trend Mövzu",
    featured_video: "Öne çıxan Post",
    see_more: "Daha çoxunu gör",
    by: "Tərəfindən",

    // About.vue hissələri
    openPlatform: "Açıq Platforma",
    digitalPublishing: "Rəqəmsal Yayım",
    share: "Paylaş",
    youCan: "Siz oxuya bilərsiniz",
    read: "oxumaq",
    and: "və",
    write: "yazmaq",
    with: "ilə",

    // BlogCard üçün taglar
    tags: {
      javascript: "Javascript",
      drupal: "Drupal",
      design: "Dizayn",
      joomla: "Joomla",
      magento: "Magento",
      wordpress: "WordPress"
    },

    // FAQ üçün sual və cavablar
    faqTitle: "Bəzi Suallar və Cavablar,<br /><strong>Buraya baxın.</strong>",
    q1: "Fərqli çizim növləri necə işləyir?",
    a1: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla facilisi...",
    q2: "Çizimlər nə qədər müddət qalır?",
    a2: "Suspendisse potenti. Curabitur ultricies diam nec sapien iaculis...",
    q3: "Niyə ictimai çizimlərə diqqətli olmalıyam?",
    a3: "Integer consequat, leo in viverra bibendum, sem urna congue nunc...",
    q4: "Rəqəmlər Benford qanununu göstərir?",
    a4: "Sed a turpis nec urna hendrerit malesuada. Pellentesque habitant morbi...",
    q5: "Rəqəmlər təcrübələr üçün uyğundur?",
    a5: "Curabitur at fringilla justo. Donec eu varius sem, nec sagittis risus...",

    // Tarixlər
    dates: {
      apr12: "12 Aprel 2025",
      apr13: "13 Aprel 2025",
      apr14: "14 Aprel 2025",
      apr15: "15 Aprel 2025",
      apr16: "16 Aprel 2025",
      apr17: "17 Aprel 2025",
    },

    // Slider / post titles
    title1: "Gözəl dizaynlar yaratmaq",
    title2: "WooLentor güclü plugin",
    title3: "Dizaynın ən yaxşı praktikaları",
    title4: "Drupal modulları lazım olan",
    title5: "Next.js və Vue.js müqayisəsi",
    title6: "Müasir UI trendləri",
    title7: "Developerlər üçün SEO",
    title8: "Headless CMS izahı",
  },

  en: {
    home: "Home",
    about: "About",
    blog: "Blog",
    contact: "Contact",
    categories: "Categories",
    pages: "Pages",
    allpost: "All Post",
    login: "Login",
    register: "Register",
    "already-have-account": "Already have an account?",
    "dont-have-account": "Don't have an account?",
    Salam: "Hello",
    company: "Company",
    faq: "FAQ",
    careers: "Careers",
    about_us: "About Us",
    contact_us: "Contact Us",
    quick_links: "Quick Links",
    discussion: "Discussion",
    support: "Support",
    privacy_policy: "Privacy Policy",
    customer_support: "Customer Support",
    terms_conditions: "Terms & Conditions",
    footer_rights:
      "All rights reserved © 2023 Bunzo Made with ❤ by Codecarnival",
    subscribe_now: "Subscribe Now",
    authors: "From Author's",
    time: "min read",
    trend: "Trending Topic",
    featured_video: "Featured Post",
    see_more: "See more",
    by: "By",

    // About.vue hissələri
    openPlatform: "Open Platform",
    digitalPublishing: "Digital Publishing",
    share: "Share",
    youCan: "You can",
    read: "read",
    and: "and",
    write: "write",
    with: "with",

    // BlogCard tagları
    tags: {
      javascript: "Javascript",
      drupal: "Drupal",
      design: "Design",
      joomla: "Joomla",
      magento: "Magento",
    },

    // FAQ
    faqTitle: "Some Question And Answer,<br /><strong>Look’s here.</strong>",
    q1: "How do the different types of drawings work?",
    a1: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla facilisi...",
    q2: "How long do the drawings persist records?",
    a2: "Suspendisse potenti. Curabitur ultricies diam nec sapien iaculis...",
    q3: "Why do I need to be careful with public drawings?",
    a3: "Integer consequat, leo in viverra bibendum, sem urna congue nunc...",
    q4: "Do the numbers exhibit Benford’s Law?",
    a4: "Sed a turpis nec urna hendrerit malesuada. Pellentesque habitant morbi...",
    q5: "Are the numbers suitable for experiments?",
    a5: "Curabitur at fringilla justo. Donec eu varius sem, nec sagittis risus...",

    // Tarixlər
    dates: {
      apr12: "Apr 12, 2025",
      apr13: "Apr 13, 2025",
      apr14: "Apr 14, 2025",
      apr15: "Apr 15, 2025",
      apr16: "Apr 16, 2025",
      apr17: "Apr 17, 2025",
    },

    // Slider / post titles
    title1: "Create beautiful designs",
    title2: "WooLentor powerful plugin",
    title3: "Design best practices",
    title4: "Drupal modules you need",
    title5: "Next.js vs Vue.js",
    title6: "Modern UI trends",
    title7: "SEO for developers",
    title8: "Headless CMS explained",
  },
};

const i18n = createI18n({
  legacy: false,
  locale: "az",
  fallbackLocale: "en",
  messages,
});

export default i18n;
