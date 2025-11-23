const chapters = [
  {
    id: "awakening",
    title: "المدخل: يقظة القلب في زمن الغفلة",
    summary:
      "يبعث هذا الباب روح الوعي بالخطر المحيط، ويقدم خريطة طريق للانتقال من التشتت إلى اليقظة القلبية المتصلة بالله.",
    themes: [
      "تشخيص العلل الخفية التي تبعد القلب عن الله",
      "إحياء معاني مراقبة الله وتحكيمه في تفاصيل الحياة اليومية",
      "تحويل مشاعر الخوف والقلق إلى طاقة إيمانية إيجابية",
    ],
    steps: [
      "كتابة يومية مختصرة تلخص الانتصارات والهزائم الروحية للعبد.",
      "تجديد نية العبودية عند بداية كل مهمة دنيوية كوسيلة للهروب من الغفلة.",
      "إقامة صلاة الوتر كبوابة لاستدعاء الخشوع قبل النوم.",
    ],
  },
  {
    id: "purification",
    title: "الباب الأول: تطهير المسار وإعادة ترتيب الحياة",
    summary:
      "يركز هذا الباب على التخلص من شوائب النفس التي تعطل الإقبال على الله، مع خطوات عملية للتوبة والاستقامة.",
    themes: [
      "مراجعة مصادر التشتت الرقمية وإعادة ضبطها لتخدم المقصد الأعلى",
      "تجديد العهد مع القرآن والذكر كأدوات تنقية يومية",
      "إحياء فرضية المحاسبة الذاتية والوقوف مع النفس بصدق",
    ],
    steps: [
      "خطة «صمت الأجهزة» لمدة 40 دقيقة مرتين يوميًا لاسترداد صمت القلب.",
      "جدول متابعة لأسماء الله الحسنى؛ اسم واحد أسبوعيًا مع تطبيق عملي.",
      "مراقبة دائرة العلاقات واختيار من يعين على الطاعة ويُبعد عن المعصية.",
    ],
  },
  {
    id: "role-models",
    title: "الباب الثاني: القدوات الراسخة ومنارات الطريق",
    summary:
      "يقدم نماذجًا متوازنة من السيرة النبوية والسلف الصالح وآثار المعاصرين الذين ثبتوا في وجه التغريب.",
    themes: [
      "قراءة في مدرسة النبي صلى الله عليه وسلم في بناء الصحبة المؤمنة",
      "نماذج من ثبات الصحابة في الفتن الكبرى وكيف واجهوها بالبصيرة",
      "استخلاص قواعد القدوة: الوسطية، الرحمة، الحكمة، الاستمرارية",
    ],
    steps: [
      "حلقة أسبوعية للأسرة أو الأصدقاء مع سيرة شخصية مضيئة واستخراج دروس عملية.",
      "تطبيق قاعدة «قدوتان في كل مجال» لاختيار مرجعيات نقية في العلم والعمل.",
      "مذكرات الاقتداء: تدوين ما يمكن محاكاته من القدوات خلال الأسبوع.",
    ],
  },
  {
    id: "steadfastness",
    title: "الباب الثالث: منظومة الثبات وبناء المناعة الداخلية",
    summary:
      "يبني هذا الباب أسس التحصين الإيماني والفكري ضد موجات الفتن والمغريات المتجددة.",
    themes: [
      "التوازن بين غذاء العقل والقلب والجسد لتحقيق الثبات الشامل",
      "استراتيجية التعامل مع الشبهات عبر العلم الموثوق والرجوع للأصول",
      "تقنية إغلاق منافذ الشهوات بالتدرج والانشغال بما ينفع",
    ],
    steps: [
      "جدول «حراسة الأوقات» لتثبيت الصلوات والأوراد والقراءة الهادفة.",
      "ورشة أسرية حول كيفية استبدال العادات المربكة بعادات مستقيمة.",
      "جلسة شهرية لمراجعة ما تم تعلمه وتفعيله مع أحد المربين أو الرفاق الصالحين.",
    ],
  },
  {
    id: "service",
    title: "الباب الرابع: العمل للدين وبذل النور في محيطك",
    summary:
      "يعالج هذا الباب ضرورة التعدي بالنفع من خلال الدعوة الراقية وخدمة المجتمع بالرحمة.",
    themes: [
      "التكافل بين العلم والعمل الدعوي الواقعي المتزن",
      "أدب الاختلاف وأثره في الحفاظ على وحدة الصف",
      "خطط صغيرة لخدمة الأسرة والجيران وطلاب العلم",
    ],
    steps: [
      "إنشاء مبادرة أسبوعية للعطاء، ولو صغيرة، لإحياء معنى الرسالية.",
      "صياغة رسالة شخصية دعوية مختصرة تُرسل شهريًا لمن تحب.",
      "مرافقة الناس بالرفق، وتقديم النصح عبر الحوار والقدوة قبل الخطاب المباشر.",
    ],
  },
  {
    id: "legacy",
    title: "الباب الخامس: صناعة الأثر الممتد وبناء الإرث الصالح",
    summary:
      "يوضح كيف يضع المؤمن بصمته في الدنيا لتبقى شاهدًا على صدقه بعد الرحيل.",
    themes: [
      "تحديد الرسالة الشخصية ومجالات التأثير الممكنة",
      "التخطيط المالي الوقفي لدعم مشاريع الخير والتعلم المستمر",
      "تربية الأبناء والجيل الجديد على حب الله ورسوله بمنهجية واضحة",
    ],
    steps: [
      "خطة عشرية للعلم والعمل، تُراجع سنويًا وتُحدث عند الحاجة.",
      "إنشاء صندوق صغير للأسرة لدعم مشاريع دعوية وتعليمية موثوقة.",
      "تسليم الأمانة: تعليم مهارة أو علم لكل من حولك ليواصلوا المسيرة.",
    ],
  },
  {
    id: "companions",
    title: "الملاحق العملية: جداول، تقييمات، وأذكار جامعة",
    summary:
      "مجموعة ملاحق عملية قابلة للطباعة تساعد القارئ على ضبط إيقاع حياته الإيمانية.",
    themes: [
      "بطاقة متابعة أسبوعية للقلوب والعادات",
      "أوراد مختارة للأيام العشر والأوقات الفاضلة",
      "استبانة تقييم شهرية لقياس الأثر والتقدم",
    ],
    steps: [
      "تحميل الملاحق ودمجها في الروتين الأسبوعي للأسرة أو الحلقة الإيمانية.",
      "إعادة ضبط الخطة كل ثلاثين يومًا مع تسجيل أبرز التحولات.",
      "الاحتفال بالإنجازات الصغيرة ومشاركتها مع صحبة الخير للتحفيز.",
    ],
  },
];

const highlights = [
  {
    title: "لغة رقيقة عميقة",
    description:
      "نثر أدبي يلامس القلب ويوقظه دون تكلف، مع استشهادات منتقاة من القرآن والسنة ومن تجارب السالكين.",
  },
  {
    title: "خرائط تطبيقية جاهزة",
    description:
      "جداول متابعة، خطط أسبوعية، وأوراق تقييم يتفاعل معها القارئ ليستشعر أثر الكتاب مباشرة.",
  },
  {
    title: "مراجع موثوقة",
    description:
      "ملخصات دقيقة من كتب التراث المعتبرة، مدمجة بشرح مبسط وتسلسل يناسب القارئ المعاصر.",
  },
];

const testimonials = [
  {
    name: "أ. رقية الحارثي",
    role: "مرشدة تربوية",
    quote:
      "وجدت في «مدارج السالكين إلى الله» جوابًا على تساؤلات الطالبات حول كيفية الثبات وسط هذا الزخم. لغة الكتاب محكمة، وخطته قابلة للتنفيذ.",
  },
  {
    name: "د. ياسين الطيب",
    role: "باحث في مقاصد الشريعة",
    quote:
      "الجمع بين الأصالة والمعاصرة في هذا الكتاب يستحق الإشادة. أعجبني ربطه بين مقاصد الدين وحاجات الإنسان المعاصر بعمق متوازن.",
  },
];

const bonuses = [
  {
    name: "دليل المعلم الأسري",
    detail: "إرشادات مختصرة لتفعيل مضامين الكتاب مع الأبناء والوالدين.",
  },
  {
    name: "خطة تدبر 40 يومًا",
    detail:
      "برنامج قرآني متدرج يعيد بناء الصلة بالقرآن وفق موضوعات الكتاب ومراحله.",
  },
  {
    name: "مجموعة أذكار مسموعة",
    detail:
      "ملفات صوتية مختارة لأذكار الصباح والمساء بضوابط التجويد لمن يحب المتابعة السمعية.",
  },
];

export default function Home() {
  return (
    <main className="mx-auto flex max-w-6xl flex-col gap-20 px-6 pb-24 pt-16 sm:px-10 lg:px-20">
      <section className="rounded-3xl border border-orange-200 bg-white/80 p-10 shadow-lg shadow-orange-100/50 backdrop-blur">
        <div className="flex flex-col items-start gap-6 lg:flex-row lg:items-center lg:justify-between">
          <div className="space-y-5">
            <span className="inline-block rounded-full border border-orange-300 px-4 py-1 text-sm font-medium text-orange-700">
              إصدار رقمي حصري
            </span>
            <h1 className="text-3xl font-semibold leading-snug text-[var(--color-deep)] sm:text-4xl lg:text-5xl">
              مدارج السالكين إلى الله
            </h1>
            <p className="text-lg text-[var(--color-muted-ink)] sm:text-xl">
              دليل عملي شامل لإحياء الوعي بالله، وترتيب الحياة على أساس الطاعة،
              وتثبيت القلب في زمن الفتن والمغريات المتسارعة.
            </p>
            <div className="flex flex-wrap gap-3 text-base">
              <a
                href="#chapters"
                className="rounded-full bg-[var(--color-accent)] px-6 py-3 font-semibold text-white shadow-md shadow-orange-200 transition hover:bg-[#a35e2d]"
              >
                استكشف فصول الكتاب
              </a>
              <a
                href="#purchase"
                className="rounded-full border border-[var(--color-accent)] px-6 py-3 font-semibold text-[var(--color-accent)] transition hover:bg-[var(--color-highlight)]"
              >
                احجز نسختك الآن
              </a>
            </div>
          </div>
          <div className="w-full max-w-sm rounded-2xl border border-white/60 bg-[var(--color-highlight)]/40 p-6 shadow-inner">
            <div className="space-y-4 text-sm text-[var(--color-deep)]">
              <div className="flex items-center justify-between">
                <span className="font-medium">نوع الإصدار</span>
                <span>كتاب رقمي (PDF + تجربة تفاعلية)</span>
              </div>
              <div className="flex items-center justify-between">
                <span className="font-medium">عدد الصفحات</span>
                <span>220 صفحة شاملة الملحقات</span>
              </div>
              <div className="flex items-center justify-between">
                <span className="font-medium">المكافآت</span>
                <span>3 هدايا إضافية مجانية</span>
              </div>
              <p className="rounded-xl bg-white/70 p-4 text-[var(--color-muted-ink)] shadow-sm">
                “كتاب يضع يدك على أسباب التشتت، ويمنحك برنامجًا متدرجًا لنهضة القلب
                والعقل والعمل.”
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="grid gap-8 rounded-3xl bg-white/80 p-10 shadow-sm shadow-orange-100/40 backdrop-blur lg:grid-cols-3">
        {highlights.map((highlight) => (
          <div
            key={highlight.title}
            className="space-y-3 rounded-2xl border border-orange-100 bg-white/70 p-6 shadow"
          >
            <h3 className="text-xl font-semibold text-[var(--color-deep)]">
              {highlight.title}
            </h3>
            <p className="text-[var(--color-muted-ink)]">{highlight.description}</p>
          </div>
        ))}
      </section>

      <section
        id="chapters"
        className="space-y-14 rounded-3xl border border-orange-100 bg-white/80 p-10 shadow-lg shadow-orange-100/60"
      >
        <header className="space-y-3 text-center">
          <h2 className="text-3xl font-semibold text-[var(--color-deep)]">
            أبواب الكتاب ومضامينه الأساسية
          </h2>
          <p className="text-lg text-[var(--color-muted-ink)]">
            سبعة أبواب متدرّجة ترافق السالك من اليقظة الأولى إلى بناء الأثر
            الممتد، مع خطوات عملية واضحة لكل مرحلة.
          </p>
        </header>
        <div className="space-y-10">
          {chapters.map((chapter, index) => (
            <article
              key={chapter.id}
              id={chapter.id}
              className="rounded-3xl border border-orange-100/70 bg-gradient-to-br from-white via-white to-orange-50/60 p-8 shadow-sm"
            >
              <div className="flex flex-col gap-3 text-[var(--color-muted-ink)]">
                <span className="text-sm font-medium text-[var(--color-accent)]">
                  باب {index + 1}
                </span>
                <h3 className="text-2xl font-semibold text-[var(--color-deep)]">
                  {chapter.title}
                </h3>
                <p>{chapter.summary}</p>
              </div>
              <div className="mt-6 grid gap-6 lg:grid-cols-2">
                <div className="space-y-3 rounded-2xl bg-white/80 p-6 shadow-inner">
                  <h4 className="text-lg font-semibold text-[var(--color-deep)]">
                    محاور رئيسية
                  </h4>
                  <ul className="space-y-2 text-[var(--color-muted-ink)]">
                    {chapter.themes.map((theme) => (
                      <li key={theme} className="flex items-start gap-3">
                        <span className="mt-1 inline-flex h-2 w-2 flex-shrink-0 rounded-full bg-[var(--color-accent)]" />
                        <span>{theme}</span>
                      </li>
                    ))}
                  </ul>
                </div>
                <div className="space-y-3 rounded-2xl border border-orange-100 bg-white/60 p-6">
                  <h4 className="text-lg font-semibold text-[var(--color-deep)]">
                    خطوات عملية مقترحة
                  </h4>
                  <ol className="space-y-3 text-[var(--color-muted-ink)]">
                    {chapter.steps.map((step, stepIndex) => (
                      <li key={step} className="flex items-start gap-3">
                        <span className="flex h-6 w-6 flex-shrink-0 items-center justify-center rounded-full bg-[var(--color-accent)] text-sm font-semibold text-white">
                          {stepIndex + 1}
                        </span>
                        <span>{step}</span>
                      </li>
                    ))}
                  </ol>
                </div>
              </div>
            </article>
          ))}
        </div>
      </section>

      <section className="grid gap-8 rounded-3xl border border-orange-100 bg-white/80 p-10 shadow-lg shadow-orange-100/60 lg:grid-cols-[1.25fr,0.75fr]">
        <div className="space-y-6">
          <h2 className="text-2xl font-semibold text-[var(--color-deep)]">
            برنامج التفعيل الأربعيني
          </h2>
          <p className="text-[var(--color-muted-ink)]">
            صُمم الكتاب ليُقرأ ويُطبّق خلال أربعين يومًا، بواقع مهام يومية خفيفة
            وأخرى أسبوعية أعمق. كل مهمة مدعومة بتذكير قرآني ونص نبوي وسؤال
            محاسبة يوقظ القلب.
          </p>
          <div className="grid gap-4 sm:grid-cols-2">
            <div className="rounded-2xl bg-white/70 p-5 shadow-inner">
              <h3 className="text-lg font-semibold text-[var(--color-deep)]">
                المهام اليومية
              </h3>
              <ul className="mt-3 space-y-2 text-[var(--color-muted-ink)]">
                <li>قراءة مقطع مختار من الكتاب أو من القرآن المصاحب له.</li>
                <li>تطبيق عادة واحدة من عادات الثبات المحددة مسبقًا.</li>
                <li>تدوين ملاحظة إيمانية أو موقف يستحق الشكر لله.</li>
              </ul>
            </div>
            <div className="rounded-2xl bg-white/70 p-5 shadow-inner">
              <h3 className="text-lg font-semibold text-[var(--color-deep)]">
                اللقاء الأسبوعي
              </h3>
              <ul className="mt-3 space-y-2 text-[var(--color-muted-ink)]">
                <li>جلسة تدارس مع الأسرة أو صحبة الخير لمناقشة التقدم.</li>
                <li>اختبار قصير من الملحق لقياس أثر الأسبوع المنصرم.</li>
                <li>ضبط هدف جديد للأسبوع التالي مع دعاء جماعي بالثبات.</li>
              </ul>
            </div>
          </div>
        </div>
        <aside className="space-y-5 rounded-3xl bg-[var(--color-highlight)]/40 p-6 shadow-inner">
          <h3 className="text-lg font-semibold text-[var(--color-deep)]">
            ملحقات قابلة للطباعة
          </h3>
          <ul className="space-y-3 text-[var(--color-muted-ink)]">
            <li>مفكرة المناجاة: صفحات لتسجيل الدعوات والأجوبة المتحققة.</li>
            <li>جدول تقييم أسبوعي يقيس مستوى الطمأنينة والانضباط.</li>
            <li>بطاقات أذكار مقسمة حسب أوقات اليوم والمهام اليومية.</li>
            <li>خطة «إحياء بيتك» لإعادة توزيع الأدوار والمهام أسرًا ومجموعات.</li>
          </ul>
        </aside>
      </section>

      <section className="space-y-10 rounded-3xl border border-orange-100 bg-white/80 p-10 shadow-lg shadow-orange-100/60">
        <header className="space-y-3 text-center">
          <h2 className="text-2xl font-semibold text-[var(--color-deep)]">
            ماذا قال القراء الأوائل؟
          </h2>
          <p className="text-[var(--color-muted-ink)]">
            آراء من مربين وباحثين استخدموا مسودات الكتاب في حلقاتهم وبرامجهم.
          </p>
        </header>
        <div className="grid gap-6 lg:grid-cols-2">
          {testimonials.map((testimonial) => (
            <blockquote
              key={testimonial.name}
              className="space-y-4 rounded-3xl border border-orange-100/80 bg-white/70 p-6 shadow-sm"
            >
              <p className="text-[var(--color-muted-ink)] leading-relaxed">
                {testimonial.quote}
              </p>
              <footer className="text-sm font-medium text-[var(--color-deep)]">
                {testimonial.name} · {testimonial.role}
              </footer>
            </blockquote>
          ))}
        </div>
      </section>

      <section className="space-y-10 rounded-3xl border border-orange-100 bg-white/80 p-10 shadow-lg shadow-orange-100/60">
        <h2 className="text-2xl font-semibold text-[var(--color-deep)]">
          هدايا حصرية مع كل طلب
        </h2>
        <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {bonuses.map((bonus) => (
            <div
              key={bonus.name}
              className="space-y-3 rounded-2xl border border-orange-100 bg-white/70 p-6 shadow"
            >
              <h3 className="text-lg font-semibold text-[var(--color-deep)]">
                {bonus.name}
              </h3>
              <p className="text-[var(--color-muted-ink)]">{bonus.detail}</p>
            </div>
          ))}
        </div>
      </section>

      <section
        id="purchase"
        className="rounded-3xl bg-gradient-to-br from-[var(--color-deep)] via-[#224d5c] to-[#132a39] p-[1px]"
      >
        <div className="rounded-[calc(1.5rem-1px)] bg-white/95 p-10 text-center shadow-2xl">
          <h2 className="text-3xl font-semibold text-[var(--color-deep)]">
            احجز نسختك من «مدارج السالكين إلى الله»
          </h2>
          <p className="mt-4 text-lg text-[var(--color-muted-ink)]">
            نزودك بنسخة PDF عالية الجودة، ونسخة تفاعلية للقراءة عبر المتصفح،
            مع تحديثات مجانية مستقبلية.
          </p>
          <div className="mt-8 flex flex-wrap items-center justify-center gap-4 text-sm text-[var(--color-muted-ink)]">
            <div className="rounded-2xl border border-orange-100 bg-white/90 px-6 py-3 shadow">
              التوصيل الرقمي فوري إلى بريدك الإلكتروني
            </div>
            <div className="rounded-2xl border border-orange-100 bg-white/90 px-6 py-3 shadow">
              دعم مباشر عبر البريد للرد على الاستفسارات العلمية
            </div>
          </div>
          <div className="mt-10 flex flex-col items-center gap-4">
            <span className="text-sm font-medium text-[var(--color-accent)]">
              السعر التعريفي
            </span>
            <div className="text-4xl font-semibold text-[var(--color-deep)]">
              39<span className="text-lg"> دولارًا</span>
            </div>
            <a
              href="mailto:support@madarij-book.com?subject=طلب%20كتاب%20مدارج%20السالكين%20إلى%20الله"
              className="mt-4 inline-block rounded-full bg-[var(--color-accent)] px-10 py-3 text-lg font-semibold text-white shadow-lg shadow-orange-200 transition hover:bg-[#a35e2d]"
            >
              اطلب النسخة الآن
            </a>
            <p className="max-w-2xl text-sm text-[var(--color-muted-ink)]">
              فور إتمام الطلب ستحصل على الروابط الخاصة بالتحميل، ودليل التفعيل
              الأربعيني، والملاحق القابلة للطباعة. كما سنرسل لك أي تحديثات
              مستقبلية دون رسوم إضافية.
            </p>
          </div>
        </div>
      </section>

      <footer className="rounded-3xl border border-orange-100 bg-white/60 p-8 text-center text-sm text-[var(--color-muted-ink)]">
        <p>
          حقوق النشر © {new Date().getFullYear()} · دار «مدارج السالكين» للنشر
          الرقمي. جميع الحقوق محفوظة.
        </p>
      </footer>
    </main>
  );
}
