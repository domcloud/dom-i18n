export default {
    footer: {
        help: `هل تواجه مشكلة؟ اطلب المساعدة عبر 
        <a href="{0}" target="_blank">المنتدى</a> أو <a href="{1}">البريد الإلكتروني</a> أو
        <a href="{2}">الدردشة</a>.`,
        credit: `{0}, تم إنشاؤه بواسطة <a href="{1}">{2}</a>`,
    },
    welcome: {
        title: `مرحبًا بك في {0}! 🎉`,
        description: ` <p>مرحبًا، {0}</p>
        <p>
          شكرًا لك على الانضمام إلى {1} للوصول إلى الحرية لمطوري الويب على الإنترنت!
        </p>
        <p>
          لنتمكن من خدمتك بشكل أفضل، نحتاج إلى تأكيد المنطقة التي تقيم فيها حاليًا. 
          يؤثر ذلك أيضًا على خيارات الدفع وموقع الخادم الافتراضي الذي يمكنك تغييره لاحقًا:
        </p>
        `,
        createWebsiteHint: `جاهز؟ لنقم بإنشاء موقعك الأول.`,
        createWebsiteBtn: `إنشاء موقع`,
        emailConfirmation: `
            يبدو أنك بحاجة إلى تأكيد البريد الإلكتروني <strong>{0}</strong>
            قبل المتابعة.<br />
            يرجى التحقق من بريدك الإلكتروني (وصندوق البريد العشوائي).
        `,
        emailConfirmationHint: `لم يصلك البريد الإلكتروني بعد؟`,
        emailConfirmationBtn: `إعادة إرسال بريد التأكيد`,
        emailConfirmationSent: "تم إرسال تأكيد البريد الإلكتروني إلى <strong>{0}</strong>!",
        changeCountryBtn: `تغيير البلد`,
    },
    notification: {
        freeUserGuideTitle: "مرحبًا بك على متن الطائرة!",
        freeUserGuideHint: "شكرًا لاختيارك لنا كمنصة السحابة الخاصة بك 🥳 إذا لم تقم بذلك بعد، حاول قراءة <a href=\"{0}\" target=\"_blank\">دليل البداية</a>. هل تحتاج إلى تجربتنا الكاملة؟ جرب <a href=\"{1}\">ترقية خطتك</a> للتخلص من جدار الحماية الخاص بـ API، لافتات النطاق المجانية، وفتح <a href=\"{2}\" target=\"_blank\">مزيد من الميزات</a>!",
        lockedUserGuideTitle: "مرحبًا بك على متن الطائرة!",
        lockedUserGuideHint: "شكرًا لاختيارك لنا كمنصة السحابة الخاصة بك 🥳 قم بإنشاء موقعك الأول <a href=\"{0}\">هنا</a>. قد يُطلب منك ربط حساب GitHub الخاص بك للتحقق من هذا الحساب. يمكنك أيضًا <a href=\"{1}\">ترقية خطتك</a> للتحقق من حسابك فورًا مع <a href=\"{2}\" target=\"_blank\">مزيد من الميزات</a> كحساب مشترك.",
        accountNoticeTitle: "⚠️ قد يتم تعليق حسابك",
        accountNoticeHint: "تم تعليق حسابك بسبب هذا السبب: {0}. يمكنك <a href=\"{1}\">ترقية خطتك</a> لحل هذه المشكلة.",
        empty: "لا يوجد شيء هنا"
    },
    purchaseConfirmation: {
        purchasedHint: "شكرًا لك. إذا قام نظامنا بالتحقق من دفعتك، سيتم إرسال بريد تأكيد إلى بريدك الإلكتروني.",
        purchaseCancel: "تم إلغاء دفعتك.",
    },
    accountDeletion: {
        title: `حذف حسابك`,
        hint: `انتباه! حذف الحساب نهائي ولا يمكننا التراجع عن هذا الإجراء. إذا كان لديك استضافة أو نطاق مسجل، يجب حذفهم أولاً. تواصل معنا إذا كنت بحاجة إلى مساعدة.`,
        prompt: `يرجى كتابة بريدك الإلكتروني للموافقة على حذف الحساب.`,
        disabled: `لا يمكنك حذف هذا الحساب إذا كانت هناك استضافة أو نطاق مسجل.`,
    },
    hostNeedInvite: {
        title: "رمز الدعوة مطلوب",
        hint: "مرحبًا 👋 للاستمتاع بخطتنا المجانية، نحتاج إلى ثقتك إما عبر رمز دعوة أو رابط لحساب GitHub. يأتي رمز الدعوة من الشخص الذي أوصى بهذه المنصة لك.",
        hintBtn: "تأكيد!",
        hintGitHub: "بدلاً من ذلك، يمكنك ربط حساب GitHub الخاص بك. يجب أن يكون حساب GitHub الخاص بك <b>قديمًا لمدة ستة أشهر أو أكثر ولديه متابع واحد أو أكثر</b>.",
        githubFail: "عذرًا! حساب GitHub المرتبط بك غير موثوق به حتى الآن. يمكنك محاولة إعادة ربط الحساب الصحيح الذي يطابق متطلباتنا.",
        altHint: "إذا كنت ترغب في تخطي هذه الخطوة، يمكنك <a href=\"{0}\">الترقية مرة واحدة على الأقل</a>. الترقية تؤكد أنك إنسان حقيقي ويمكن الوثوق بك بدون رمز دعوة أو ربط حسابات إضافية 😄."
    },
    hostCreate: {
        chooseTemplate: `اختر قالبًا للبدء`,
        startFromScratch: `ابدأ من الصفر`,
        uploadFileHint: `قم بتحميل ملف أو أدخل الرابط لتحليل المحتوى`,
        readingTheFile: `جارٍ قراءة الملف...`,
        readingFiles: `جارٍ قراءة {0} من {1} ملف/ملفات...`,
        readingZipFile: `جارٍ قراءة ملف zip...`,
        compressingZipFile: `جارٍ ضغط الملفات إلى ملف zip...`,
        uploadingFiles: `جارٍ تحميل الملفات... ({0} من {1})`,
        uploadCompleted: `اكتمل التحميل ({0} ملف/ملفات بحجم إجمالي {1}})`,
        uploadError: `فشل التحميل برمز الحالة {0}`,
        emptyZipFile: `لم يتم العثور على أي ملفات في ملف zip`,
        noFileSelected: `لم يتم اختيار أي ملف`,
        exceededFileSizeLimit: `حجم هذا الملف ({0}) يتجاوز الحد المسموح به ({1}). حاول تحميله إلى GitHub وضع الرابط هنا بدلًا من ذلك.`,
        missingTemplate: `فشل في جلب قالب البيانات. ربما لا يزال الملف مفقودًا.`,
        checkingRepo: `جارٍ التحقق من هذا المستودع...`,
        cloneWithDeployKey: `سيتم استنساخ المستودع باستخدام مفتاح نشر.`,
        uploadDirectory: `تحميل مجلد`,
        uploadZipFile: `تحميل ملف zip`,
        dropDirectory: `اسحب المجلد هنا...`,
        dropZipFile: `اسحب ملف zip هنا...`,
        dropWhatsThat: `هذا ليس ملف zip أو مجلد...`,
        dropMultiple: `(يرجى سحب ملف أو مجلد واحد فقط)`,
        readingDroppedDirectory: `جارٍ قراءة المجلد المسحوب...`,
        readingDroppedZipFile: `جارٍ قراءة ملف zip المسحوب...`,
        orPasteUrl: "... أو الصق رابط مستودع Git/ملف Zip",
        attachDeployKey: `إرفاق مفتاح نشر`,
        selectFramework: `أخبرنا عن الإطار أو اللغة`,
        applyFramework: `تطبيق هذا القالب`,
        attachDeployKeyHint: `إذا كان المستودع خاصًا، يمكنك استخدام مفاتيح النشر للوصول إليه. لقد أنشأنا مفتاح نشر غير متماثل لك، تحتاج إلى إضافة هذا المفتاح العام إلى مستودعك.`,
        attachDeployKeyLearnMore: `تعرف على المزيد حول التكامل مع GitHub باستخدام مفاتيح النشر.`,
        attachDeployKeyOpenConfig: `افتح إعدادات مفتاح النشر للمستودع`,
        attachDeployKeyConfirm: `لقد أضفت هذا المفتاح العام`,
    },
    hostConnection: {
        title: `تحقق من الاتصال`,
        description: `
        <p>
            تتحقق هذه الصفحة مما إذا كان هذا الموقع يمكن الوصول إليه من
            الإنترنت.
        </p>
        <p>
            هناك ثلاثة متطلبات مسبقة لكي يكون الموقع قابلاً للوصول
            من الإنترنت:
        </p>
        <ul>
            <li>يجب أن يكون خادم DNS متاحًا</li>
            <li>يجب أن يكون عنوان IP المرتجع صحيحًا</li>
            <li>يجب أن يكون محتوى الخادم قابلاً للوصول</li>
        </ul>
        <p>
            إذا فشل أحد المتطلبات المذكورة أعلاه، قد لا يكون هذا الموقع
            قابلاً للوصول من الإنترنت.
        </p>`,
        dnsOffTitle: `لا يوجد خادم أسماء`,
        dnsOffContent: `هذا الموقع لا يحتوي على خادم أسماء. قد يكون مهيأ خارجيًا.`,
        dnsNotExistTitle: "النطاق غير موجود",
        dnsNotExistContent: "هذا النطاق غير موجود أو قد لا يكون مسجلًا. هل قمت بشرائه؟",
        dnsManagedTitle: `DNS مُدار`,
        dnsManagedContent: `يتم إدارة DNS لهذا الموقع بواسطة {0}.`,
        dnsMixedTitle: `DNS مختلط`,
        dnsMixedContent: `DNS لهذا الموقع يحتوي على تكوين مختلط. تأكد من
            تكوين خادم الأسماء بشكل صحيح. لا تخلط سجلاتنا مع السجلات الأخرى!`,
        dnsExternalTitle: `DNS مُدار خارجيًا`,
        dnsExternalContent: `يتم التعامل مع DNS لهذا الموقع من قبل طرف ثالث.`,
        pingNoIpTitle: `لم يتم العثور على عنوان IP`,
        pingNoIpContent: `لا يقوم خادم DNS بإرجاع عنوان IP.`,
        pingNoIp6Title: `لا يوجد IPv6`,
        pingNoIp6Content: `لا يحتوي DNS لهذا الموقع على عنوان IPv6. قد يكون غير متاح لمستخدمي IPv6.`,
        pingNoIp6Hint: "يرجى إضافة سجل AAAA بالقيمة",
        pingWrongIpTitle: `عنوان IP غير صحيح`,
        pingWrongIpContent: `قام DNS لهذا الموقع بإرجاع عنوان IP غير صحيح.
            قد لا يخدم المحتوى الصحيح، أو أنه خلف وكيل.`,
        pingWrongIpCurrent: "عناوين IP الحالية",
        pingWrongIpExpect: "عناوين IP الصحيحة",
        pingNoWwwTitle: `لم يتم العثور على عنوان IP لنطاق www.*`,
        pingNoWwwContent: `
            قد لا يتمكن بعض الأشخاص من الوصول إلى هذا
            الموقع إذا قاموا ببدءه بـ www. يوصى بإعداد
            إعادة توجيه نطاق www.`,
        pingNoWwwFix: "إعداد إعادة توجيه النطاق الفرعي www.*",
        pingOkTitle: `عنوان IP صحيح`,
        pingOkContent: `قام DNS لهذا الموقع بإرجاع عنوان IP صحيح.`,
        webNoHttpTitle: `الموقع غير متاح`,
        webNoHttpContent: `هذا الموقع غير متاح عبر HTTP.`,
        webNoHttpsTitle: `HTTPS غير متاح`,
        webNoHttpsContent: `قد لا يحتوي هذا الموقع على شهادة HTTPS
            مثبتة، أو قد انتهت صلاحيتها، أو لم يتم تكوينها بشكل صحيح.`,
        pingNoHttpsFix: "تثبيت شهادة HTTPS",
        webBadHttpTitle: `الموقع يعيد خطأ`,
        webBadHttpContent: `هذا الموقع يعيد خطأ 500 أو 403،
            قد لا يكون مهيأ بشكل صحيح (تحقق من إعدادات NGINX/التطبيق!).`,
        webBadRedirectTitle: `الموقع يحتوي على عمليات إعادة توجيه سيئة`,
        webBadRedirectContent: `يقوم هذا الموقع بإعادة توجيه الزوار إلى خارج النطاق،
            قد لا يكون مهيأ بشكل صحيح (تحقق من إعدادات عنوان URL الأساسي!).`,
        webInfiniteRedirectTitle: "الموقع يحتوي على إعادة توجيه لا نهائية",
        webInfiniteRedirectContent: "هذا الموقع يقوم حاليًا بخدمة طلبات HTTPS لا نهائية، قد يكون بالفعل خلف وكيل HTTPS.",
        webInfiniteRedirectFix: "تعطيل إعادة توجيه HTTPS",
        webBadWwwTitle: "النطاق الفرعي www.* غير متاح",
        webBadWwwContent: "النطاق الفرعي www إما غير متاح أو يعيد خطأ.",
        webInsecureTitle: "الموقع يقدم طلبات HTTP غير آمنة",
        webInsecureContent: "هذا الموقع لا يعيد التوجيه إلى بروتوكول HTTPS، هذا غير موصى به وقد يؤدي إلى مشكلات ملفات تعريف الارتباط.",
        webInsecureContentFix: "فرض إعادة توجيه HTTPS",
        webOkTitle: `الموقع جيد`,
        webOkContent: `يمكن الوصول إلى هذا الموقع عبر HTTP و HTTPS.`,
    },
    hostFirewall: {
        title: `تحقق من جدار الحماية`,
        description: `
        <p>
            يساعد جدار الحماية موقعك على عدم التعرض للاختراق في حالة
            اختراقه عن طريق حظر كل حركة المرور الصادرة باستثناء تلك الموجودة في
            <a href="{0}" target="_blank" rel="noreferrer">القائمة البيضاء</a>.
        </p>
        <p>
            بناءً على استخدامك للموقع، قد ترغب في إيقاف تشغيل
            جدار الحماية إذا كان موقعك يتطلب API لطرف ثالث أو أشكال أخرى من
            الاتصال غير المدرجة في القائمة البيضاء.
        </p>
        <p>ينطبق جدار الحماية على النطاق وجميع النطاقات الفرعية بداخله. يتم
        تشغيله بشكل إلزامي للمستخدمين ذوي الخطة المجانية. لإيقاف تشغيله، يجب أن
        تكون في خطة اشتراك (Lite أو أعلى).</p>
        <p><a href="{1}" target="_blank" rel="noreferrer">اقرأ المزيد</a></p>
        `,
        offTitle: `جدار الحماية متوقف`,
        offContent: `<p>
            يتم السماح بكل حركة المرور الصادرة. حافظ على موقعك آمنًا، من فضلك!
        </p>`,
        offBtn: `تشغيله`,
        onTitle: `جدار الحماية نشط`,
        onContent: `<p>
            يتم حظر كل الاتصال الصادر للطرف الثالث باستثناء القوائم البيضاء.<br/>
            قم بإيقاف تشغيله لإزالة هذا القيد.
        </p>`,
        onBtn: `إيقافه`,
    },
    hostNginx: {
        title: `تحقق من تكوين NGINX`,
        description: `
        <p>
            NGINX هو بوابة الخادم الرئيسية لدينا التي تخدم المنافذ HTTP (80 و 443).
            لجعل موقعك يعمل، يجب تكوين تطبيق الويب الخاص بك بشكل صحيح
            هنا. هنا يمكنك عرض تكوينك الحالي وإجراء التغييرات
            إما عبر واجهة مستخدم مهيأة مسبقًا أو تكوين NGINX بالكامل كسيناريو YAML.
        </p>
        <p>
            يقوم NGINX عادةً بخدمة المحتوى الثابت أولاً الذي يتم تكوينه عبر مسار <code>root</code>
            ، أو إعادة توجيه الطلب ديناميكيًا إلى تطبيقك عبر PHP-FPM <code>fastcgi</code>
            أو Passenger <code>passenger</code> إذا لم يكن هذا الملف موجودًا.
        </p>
        <p>
            يختلف تكوين NGINX للنطاقات الفرعية. إذا كان محتوى نطاقك الفرعي
            يقع داخل هذا الموقع، يرجى إدخال اسم النطاق الفرعي أدناه لتكوينه.
            أيضًا، يرجى أخذ لحظة لقراءة <a href="{0}" target="_blank" rel="noreferrer">
            تكوين NGINX الخاص بنا</a> أو الاتصال بنا في حالة مواجهتك لمشكلة.
        </p>
        `,
        subdomain: `النطاق الفرعي`,
        error: `خطأ: لا يوجد تكوين لـ {0}`,
        errorFetch: "حدث خطأ أثناء جلب تكوين NGINX",
        notExist: `خطأ: لا يوجد تكوين لـ {0}`,
        tabCurrent: `تكوين NGINX الحالي`,
        tabEdit: `تحرير بشكل تفاعلي`,
        tabPreview: `معاينة التغييرات`,
        labels: {
            subfolderConfig: "تكوين المجلد الفرعي",
            rootConfig: "تكوين الجذر",
            rootPath: "مسار الجذر",
            rootIsAlias: "الجذر هو الاسم المستعار",
            resolveType: "نوع الحل",
            resolveTypes: {
                static: "ثابت",
                php: "PHP-FPM",
                app: "تطبيق Phusion",
                gls: "تطبيق عام",
                proxy: "إعادة توجيه المنفذ",
                deny: "رفض الطلبات",
            },
            staticMode: "وضع الثابت",
            staticModes: {
                default: "افتراضي",
                smart: "ذكي",
                autoindex: "الفهرسة التلقائية",
                index: "فهرس الجذر",
            },
            static404Path: "مسار ملف 404 HTML",
            phpMode: "وضع PHP",
            phpModes: {
                default: 'افتراضي',
                smart: 'ذكي',
                indexSafe: 'فهرس الجذر - آمن',
                index: 'فهرس الجذر - قياسي',
                always: 'فهرس الجذر - دائمًا',
            },
            proxyPort: 'إعادة التوجيه إلى المنفذ',
            appMode: 'وضع التطبيق',
            appEntry: 'ملف بدء التشغيل للتطبيق',
            appBin: 'مسار البرنامج الثنائي للتطبيق',
            appModes: {
                default: 'تلقائي',
                node: 'Node',
                python: 'Python',
                ruby: 'Ruby',
            },
            glsCmd: 'أمر التطبيق',
            appEnv: 'مفاتيح البيئة',
            appDev: 'وضع التطوير؟',
            appRoot: 'دليل العمل',
            addSubfolderConfig: 'إضافة تكوين المجلد الفرعي',
        },
        hints: {
            root: "سيتم حل الملفات الثابتة من {0} إلى {1}",
            proxy: "إعادة توجيه طلبات العميل إلى المنفذ {0}",
            app: "تشغيل سيناريو {0} من {1} باستخدام {2} من {3}",
            gls: "تشغيل \"{0}\" من {1} باستخدام $PORT المعطاة",
            staticModes: {
                default: 'خدمة الملفات الثابتة',
                smart: 'محاولة العثور على ملف HTML إن أمكن',
                index: 'خدمة ملف index.html الجذر إذا لم يتم العثور على ملف',
                autoindex: 'السماح بإدراج ملفات الخادم إذا لم يتم العثور على ملف index.html',
                with404: 'أو عرض صفحة خطأ 404 مخصصة'
            },
            phpModes: {
                default: 'خدمة ملف index.php أو ملفات PHP التي تنتهي بـ .php',
                smart: 'محاولة العثور على ملف PHP بدون .php',
                indexSafe: 'خدمة ملف index.php الجذر ولكن لا تحاول إذا كان العميل يبحث عن ملف',
                index: 'خدمة ملف index.php الجذر عندما لا يتم العثور على ملف ثابت',
                always: 'السماح بطلبات نمط PATH_INFO التي يتم توجيهها إلى PHP',
            },
            deleteSubfolderPrompt: "هل أنت متأكد من رغبتك في حذف تكوين المجلد الفرعي لـ {0}",
            inputSubfolderPrompt: "يرجى إدخال المجلد الفرعي (يجب أن يبدأ بـ '/' وبدون مسافات)",
            inputSubfolderNotValid: "إدخال المجلد الفرعي غير صالح",
            inputSubfolderNotUnique: "يجب أن تكون قيمة المجلد الفرعي فريدة مع إدخالات المجلد الفرعي الأخرى",
        }
    },
    hostDNS: {
        title: `تحقق من تكوين DNS`,
        description: `<p>تساعدك هذه الصفحة على تغيير سجلات DNS إذا قمت بتوجيه خادم اسم النطاق الخاص بك إلينا.
        </p> <p>بدلاً من ذلك، يمكنك أيضًا تحرير سجلات DNS عبر Webmin.</p>`,
        helpText: `مساعدة في التكوين`,
        error: `خطأ: لا يوجد تكوين لـ {0}`,
        errorFetch: "حدث خطأ أثناء جلب تكوين dns",
        notExist: `خطأ: لا يوجد تكوين لـ {0}`,
        tabCurrent: `إعدادات DNS الحالية`,
        tabEdit: `تحرير DNS بشكل تفاعلي`,
        tabPreview: `معاينة التغييرات`,
        existingRecords: `سجلات DNS الموجودة`,
        addedRecords: `سجلات DNS المضافة`,
    },
    hostLog: {
        runningList: 'قائمة العمليات الجارية',
        logTypeError: 'سجل أخطاء NGINX',
        logTypeAccess: 'سجل وصول NGINX',
        logTypePassenger: 'سجل تطبيق Passenger',
        logTypeErrorHint: 'يتضمن هذا السجل سجلات أخطاء NGINX و PHP لليوم الحالي',
        logTypeAccessHint: 'يتضمن هذا السجل سجلات وصول NGINX لليوم الحالي',
        logTypePassengerHint: 'يتضمن هذا السجل سجل تطبيق Passenger الجاري',
        errorFetch: "حدث خطأ أثناء جلب ملف السجل",
        subdomain: `النطاق الفرعي`,
        maxLines: `الحد الأقصى لعدد السطور`,
        emptyLog: `هذا السجل فارغ حاليًا`,
    },
    hostManage: {
        title: `Manage Website Access`,
        description: `
        <p>
            Use the following login access to upload or edit your website
            content. <a href="{0}" target="_blank">Learn more</a>.
        </p>`,
        openPorts: `Opened Ports`,
        openPortsDescription: `Opened Ports for editing your server`,
        onlineEditor: `Online Editors`,
        webminInfo: `<p>
            Webmin is used to manage your server files and
            configurations using web interface.
        </p>
        <p>You'll be autologged in.</p>`,
        filestashInfo: `<p>
            Filestash is used to manage your server files 
            using web-interface of SFTP connection.
            (to upload files, use drag-and-drop).
        </p>
        <p>You'll be autologged in.</p>`,
        phpMyAdminInfo: ` <p>
        phpMyAdmin is used to manage MySQL database
        using web interface.
        </p>
        <p class="mb-0">
            You need to enter credentials manually.
        </p>`,
        phpPgAdminInfo: `  <p>
        phpPgAdmin is used to manage PostgreSQL database
        using web interface.
        </p>
        <p class="mb-0">
            You need to enter credentials manually.
        </p>`,
        websshInfo: `<p>
            WebSSH is used to open SSH connection using web
            interface.
            </p>
            <p class="mb-0">You'll be autologged in.</p>`,
        vscodeInfo: ` <p>
            Open VS Code to edit files and run commands
            directly on your server.<br />
            Make sure you already have installed VS Code and
            its Remote SSH Extension.
        </p>
        <p>
            If you want to open another folder, enter here
            and press return:
        </p>`,
    },
    hostTransfer: {
        warn: `ATTENTION! Website transfer means moving it to another account. You will lose access to your data because the owner has changed!`,
        currentOwner: `Current owner: {0}`,
        hint: `Please enter the email of the account you wish to receive:`,
        disabled: `You cannot transfer this website while it's not active.`,
        member: `Members cannot transfer this website.`,
        action: `Transfer!`,
    },
    hostDelete: {
        warn: `ATTENTION! Host deletions are permanent and we can't reverse the action. Please be certain.`,
        hint: `Please enter your website username to agree to host deletion.`,
        member: `Members cannot delete this website.`,
        action: `Delete!`,
    },
    hostCname: {
        disabled: `You cannot change the domain name when this website is not active.`,
        curHint: `Current domain name: `,
        hint: `You can change the main domain name website here. Enter the new domain name:`,
        warn: `This will make your website unusable for current domain! Please update DNS in new domain beforehand for minimal downtime.`,
        member: `Members cannot change the domain of this website.`,
        action: `Change domain name!`,
    },
    hostRename: {
        disabled: `You cannot change the username when this website is not active.`,
        hint: `You can change your website username here. Enter the new username:`,
        warn: `This will also change database username! Your website may be unusable until you change it in your website config.`,
        member: `Members cannot change the username of this website.`,
        action: `Rename this username!`,
    },
    hostPasswd: {
        disabled: `You cannot change the password when this website is not active.`,
        hint: `You can change your website password here. Enter the new password:`,
        warn: `This will also change database password! Your website may be unusable until you change it in your website config.`,
        member: `Members cannot change the password this website.`,
        action: `Update this password!`,
    },
    hostCheck: {
        'title': `Mandatory DNS Checkup`,
        'prompt': `This checks whether {0} can be resolved via Google's DNS before get added into our server.`,
        'valid': `This domain is resolvable`,
        'valid_with_note': `This domain will be resolvable once additional configs added automatically for you`,
        'incorrect': 'Incorrect A+AAAA/CNAME record to this domain, please configure it first before continue.',
        'missing': 'Missing A+AAAA/CNAME record to this domain, please configure it first before continue.',
        'loading': '...',
        'retrying': '...',
    },
    domain: {
        createInfo: `Keep in mind you are only registering a domain. If you want
            to manage the website, <a href="{0}" target="_blank">create the website here</a>`,
        transferInfo: `Make sure that you have access rights to transfer the
            domain from another service. We will reach out to you if the
            domain transfer fails after payment, but if you fail to
            prove domain ownership through the EPP code or existing
            document requirements, we cannot help you. By ToS you will
            not get a refund in the purchase of a domain under any
            circumstances.`,
        eppTransferInfo: `You can transfer your domain to another registrar by
            using this EPP code. The transfer works if the domain is not locked`,
        dnsManagedHint: `We don't provide UI for custom DNS records. <br />
          If your nameservers are set to <b>{0}</b> then DNS are handled by
          <a href="{1}" target="_blank">the respective website DNS</a>.`,
        dnsManagedOpen: `If you want to change it anyway please manage it via our
        <a href="{0}" target="_blank">Registrar UI</a>. Click forgot password
        and enter your current email to set your password the first time.`
    },
}
