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
    login:"Daxil ol",
    terms: "Şərtlər",
    register: "Qeydiyyat",
    "already-have-account": "Artıq hesabınız var?",
    "dont-have-account": "Hesabınız yoxdur?",
        passwordMismatch: "Şifrələr uyğun gəlmir!",
    registrationSuccess: "Qeydiyyat uğurlu oldu!",
    loginError: "Yanlış e-poçt və ya şifrə!",
    loginSuccess: "Daxil oldunuz!",

    profil: "Profil",
    logout: "Çıxış",
    confirmPassword: "Şifrəni təsdiqlə",
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
    comment: "Şərh",
    comments: "Şərhlər",
    startDiscussion: "Müzakirəyə başlayın...",
    bold: "Qalın",
    italic: "İtalik",
    underline: "Altı xətli",
    link: "Link",
    gif: "GIF",
    loginWith: "DAXİL OLUN",
    name: "Ad",
    email: "E-poçt",
    password: "Şifrə",
    alreadyHaveAccount: "Artıq hesabınız var?",
      dontHaveAccount : "Hesabınız yoxdur?",
    disqusNote:
      "Bu şərh platforması Disqus, Inc tərəfindən yerləşdirilir. Mən Disqus və tərəfdaşlarına icazə verirəm ki...",
    acknowledge18: "18 yaşdan yuxarı olduğumu təsdiqləyirəm",
    postAsGuest: "Qonaq kimi paylaşmaq istəyirəm",
    share: "Paylaş",
    best: "Ən yaxşı",
    newest: "Ən yeni",
    oldest: "Ən köhnə",
    footer_rights: "Bütün hüquqlar qorunur.",
    subscribe_now: "İndi abunə ol",
    authors: "Müəlliflər",
    time: "dəqiqə",
    trend: "Trend Mövzu",
    featured_video: "Öne çıxan Post",
    see_more: "Daha çoxunu gör",
      newPassword: "Yeni şifrə",
      forgotPassword: "Şifrəni unutdum" ,
    by: "Tərəfindən",
    no_posts_for: "Bu kateqoriya üçün heç bir paylaşım yoxdur",
    privacy_policy: "Məxfilik siyasəti",
    who_we_are: "Biz kimik?",
    website_address: "Veb sayt ünvanımız: http://hashthemes.com",
    loading_sections: "Əlavə bölmələr yüklənir…",
    dynamic_content_note:
      "Bu məzmun dinamikdir: <code>endpoint</code> prop-u vasitəsilə backend-dən JSON qaytarın.",

    embedded_title: "Başqa vebsaytlardan daxil edilmiş məzmun",
    embedded_body:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Embedded content (məsələn videolar, xəritələr) başqa vebsaytlardan davranır ki, ziyarətçi həmin vebsayta daxil olubmuş kimi.",

    retention_title: "Məlumatlarınızı nə qədər saxlayırıq",
    retention_body:
      "Şəxsi məlumatları yalnız xidmət göstərmək, hüquqi öhdəlikləri yerinə yetirmək, mübahisələri həll etmək və razılaşmaları tətbiq etmək üçün lazım olduğu müddətcə saxlayırıq.",

    rights_title: "Məlumatlarınız üzərində hansı hüquqlarınız var",
    rights_body:
      "Məlumatlarınıza daxil olmaq, düzəliş etmək, ixrac etmək və silmək hüququnuz var. Müəyyən hallarda emalın qarşısını almaq və ya məhdudlaşdırmaq hüququna sahibsiniz.",

    transfers_title: "Məlumatlarınızı haraya göndəririk",
    transfers_body:
      "Məlumatlarınız ölkənizdən kənarda bir serverə göndərilə və saxlanıla bilər. Biz lazımi qoruyucu tədbirləri təmin edirik.",

    terms_conditions: "Şərtlər və qaydalar",
    terms_intro:
      "Bu səhifədə “siz” dedikdə, alıcı nəzərdə tutulur. “Biz” dedikdə isə Bunzo komandası nəzərdə tutulur.",

    terms_list: [
      "# Əgər 13 yaşdan kiçiksinizsə, saytımıza daxil olmayın və istifadə etməyin.",
      "# Saytın üzvü olmaq üçün 18 yaş və ya daha yuxarı olmalısınız.",
      "# Düzgün və doğru məlumat verməlisiniz.",
      "# Məhsul aldıqda, şərtlər və qaydalarla razı olduğunuzu təsdiqləyin.",
      "# Ödənişiniz PayPal və ya digər üçüncü tərəf saytları vasitəsilə işlənəcək.",
      "# Preview-də göstərilən şəkillər demo məqsədlidir, müəllif hüququ təmin olunmur. Demo şəkilləri dəyişdirməlisiniz.",
      "# Məhsulu satın aldıqdan sonra yükləmə problemi yaşasanız, bizim əlaqə səhifəsindən email göndərə bilərsiniz.",
      "# Yalnız məhsul zədələnmişsə geri ödəniş ediləcək. Məhsulun zədələnib-zədələnmədiyini öyrənmək üçün bizimlə əlaqə saxlayın.",
      "# Saytın siyasəti, şərtləri, paketləri, qiymətləri, xüsusiyyətləri və digər məlumatları dəyişdirmək hüququmuz var.",
      "# Saytın istifadəçisi olaraq, şərtlər və qaydalarla razılaşmalısınız.",
      "# Şərtlərdə hər hansı dəyişiklik etsək, burada yerləşdirəcəyik.",
    ],

    section1: `Lorem Ipsum mətinin bir çox variasiyaları mövcuddur, lakin əksəriyyəti dəyişdirilmişdir, gülməli əlavələr və ya təsadüfi sözlər əlavə edilmişdir ki, bu da inandırıcı görünmür. Əgər Lorem Ipsum istifadə edəcəksinizsə, mətnin ortasında xoşagəlməz heç nə olmadığından əmin olmalısınız. İnternetdəki bütün Lorem Ipsum generatorları lazım olduqda əvvəlcədən müəyyən edilmiş parçaları təkrar edir, bu da onu ilk həqiqi generator edir.`,

    title: `Gözəl dizaynlar yaradın və daha çox müştəri qazanın`,

    section2: `Lorem Ipsum mətnlərinin bir çoxu mövcuddur, lakin əksəriyyəti dəyişdirilmişdir, gülməli əlavələr və ya təsadüfi sözlər əlavə edilmişdir ki, bu da inandırıcı görünmür. Əgər Lorem Ipsum istifadə edəcəksinizsə, mətnin ortasında xoşagəlməz heç nə olmadığından əmin olun.`,

    list: [
      `mətnin ortasında xoşagəlməz heç nə olmadığından əmin olun. İnternetdəki bütün Lorem Ipsum generatorları əvvəlcədən müəyyən edilmiş parçaları təkrar edir`,
      `mətnin ortasında xoşagəlməz heç nə olmadığından əmin olun. Bütün Lorem Ipsum`,
      `mətnin ortasında xoşagəlməz heç nə. Bütün Lorem Ipsum generatorları əvvəlcədən müəyyən edilmiş parçaları təkrar edir`,
      `mətnin ortasında xoşagəlməz heç nə olmadığından əmin olun. İnternetdəki bütün Lorem Ipsum generatorları əvvəlcədən müəyyən edilmiş parçaları təkrar edir`,
    ],
    // Contact.vue
    fullName: "Ad Soyad",
    email: "E-poçt",
    phone: "Telefon",
    message: "Mesaj",
    writeMessage: "Mesajınızı yazın",
    sendMessage: "Mesajı göndər",

    // About.vue
    openPlatform: "Açıq Platforma",
    digitalPublishing: "Rəqəmsal Yayım",
    share: "Paylaş",
    youCan: "Siz oxuya bilərsiniz",
    read: "oxumaq",
    and: "və",
    write: "yazmaq",
    with: "ilə",

    // BlogCard tagları
    tags: {
      javascript: "Javascript",
      drupal: "Drupal",
      design: "Dizayn",
      joomla: "Joomla",
      magento: "Magento",
      wordpress: "WordPress",
    },

    // FAQ
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
    allpost: "All Posts",
    login: "Login",
    logout: "Logout",
    terms: "Terms",
    profil: "Profile",
    register: "Register",
    "already-have-account": "Already have an account?",
    "dont-have-account": "Don't have an account?",
  confirmPassword: "Confirm Password",
      passwordMismatch: "Passwords do not match!",
    registrationSuccess: "Registration successful!",
    loginError: "Incorrect email or password!",
    loginSuccess: "Logged in successfully!",
  newPassword: "New Password",
     forgotPassword: "Forgot Password",
         alreadyHaveAccount: "Already have an account?",
         dontHaveAccount : "Don't have an account?",
    company: "Company",
    faq: "FAQ",
    careers: "Careers",
    about_us: "About Us",
    comment: "Comment",
    comments: "Comments",
    startDiscussion: "Start the discussion...",
    bold: "Bold",
    italic: "Italic",
    underline: "Underline",
    link: "Link",
    gif: "GIF",
    loginWith: "LOG IN WITH",
    name: "Name",
    email: "Email",
    password: "Password",
    disqusNote:
      "This comment platform is hosted by Disqus, Inc. I authorize Disqus and its affiliates to...",
    acknowledge18: "Acknowledge I am 18 or older",
    postAsGuest: "I'd rather post as a guest",
    share: "Share",
    best: "Best",
    newest: "Newest",
    oldest: "Oldest",
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
    no_posts_for: "No posts found for",
    privacy_policy: "Privacy Policy",
    who_we_are: "Who we are?",
    website_address: "Our website address is: http://hashthemes.com",
    loading_sections: "Loading additional sections…",
    dynamic_content_note:
      "This content is dynamic: pass a backend endpoint via the <code>endpoint</code> prop that returns JSON.",

    embedded_title: "Embedded content from other websites",
    embedded_body:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Embedded content (e.g. videos, maps) from other websites behaves as if the visitor has visited the other website.",

    retention_title: "How long we retain your data",
    retention_body:
      "We retain personal data only for as long as necessary to provide services, comply with legal obligations, resolve disputes and enforce agreements.",

    rights_title: "What rights you have over your data",
    rights_body:
      "You have the right to access, correct, export, and delete your personal data. You can object to or restrict processing in certain circumstances.",

    transfers_title: "Where we send your data",
    transfers_body:
      "Your data may be transferred to and stored at a destination outside your country. We take appropriate safeguards.",
    terms_intro:
      "When we’re saying “you” in this page, we’re referring to a buyer. When we’re saying “we” in this page, we’re referring to the Bunzo authority.",

    terms_list: [
      "# If you’re under 13 years, then do not visit/use our website.",
      "# To be a member/user of our website, you need to be 18 years old or more.",
      "# You need to provide true and correct information.",
      "# When you purchase an item, confirm that you agree to our terms & conditions.",
      "# Your payment will be processed through PayPal or other third-party websites.",
      "# Images shown in the preview are for demo purposes only. We don’t provide image copyright. You need to replace the demo images.",
      "# If you face any problem downloading your item after purchase, you can send an email from our contact page.",
      "# We will refund only if the product is broken. To verify this, contact us.",
      "# We have the right to change policy, terms & conditions, packages, prices, features, or any other content on this website.",
      "# As a customer/user, you must agree with the terms & conditions.",
      "# If we make any change in terms & conditions, we will post here.",
    ],
    section1: `There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour, or randomised words which don’t look even slightly believable. If you are going to use a passage of Lorem Ipsum, you need to be sure there isn’t anything embarrassing hidden in the middle of text. All the Lorem Ipsum generators on the Internet tend to repeat predefined chunks as necessary, making this the first true generator on the Internet.`,

    title: `Create beautiful designs that will help convert more customers`,

    section2: `passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour, or randomised words which don’t look even slightly believable. If you are going to use a passage of Lorem Ipsum, you need to be sure there isn’t anything embarrassing hidden in the middle of text.`,

    list: [
      `you need to be sure there isn’t anything embarrassing hidden in the middle of text. All the Lorem Ipsum generators on the Internet tend to repeat predefined chunks as necessary`,
      `you need to be sure there isn’t anything embarrassing hidden in the middle of text. All the Lorem Ipsum`,
      `embarrassing hidden in the middle of text. All the Lorem Ipsum generators on the Internet tend to repeat predefined`,
      `you need to be sure there isn’t anything embarrassing hidden in the middle of text. All the Lorem Ipsum generators on the Internet tend to repeat predefined chunks as necessary`,
    ],
    // Contact.vue
    fullName: "Full Name",
    email: "Email",
    phone: "Phone",
    message: "Message",
    writeMessage: "Write your message",
    sendMessage: "Send Message",

    // About.vue
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
      wordpress: "WordPress",
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

    // Dates
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
