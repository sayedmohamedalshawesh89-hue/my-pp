document.addEventListener('DOMContentLoaded', () => {
    const year = new Date().getFullYear();
    ['year', 'year2', 'year3', 'year4', 'year5'].forEach(id => {
        const el = document.getElementById(id);
        if (el) el.textContent = year;
    });


    // توليد بطاقات الدورات إذا كنا في صفحة الدورات
    const coursesList = document.getElementById('courses-list');
    if (coursesList) {
        const courses = [
            { title: 'أساسيات HTML و CSS', desc: 'ابدأ في بناء صفحات الويب.' },
            { title: 'جافاسكربت للمبتدئين', desc: 'مفاهيم مهمة لبناء تفاعلية.' },
            { title: 'تصميم واجهات المستخدم', desc: 'مبادئ UX/UI العملية.' },
            { title: 'بايثون للمبتدئين', desc: 'مقدمة برمجية مع أمثلة.' }
        ];


        courses.forEach(c => {
            const card = document.createElement('div');
            card.className = 'course-card';
            card.innerHTML = `<h4>${c.title}</h4><p>${c.desc}</p><a class='btn' href='instructors.html'>عرض الدورة</a>`;
            coursesList.appendChild(card);
        });
    }


    // نموذج الاتصال: منع الإرسال الحقيقي واظهار رسالة بسيطة
    const contactForm = document.getElementById('contact-form');
    if (contactForm) {
        contactForm.addEventListener('submit', e => {
            e.preventDefault();
            alert('شكراً! تم استلام رسالتك (هذا مثال محلي فقط).');
            contactForm.reset();
        });
    }
});