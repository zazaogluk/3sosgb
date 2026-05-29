// script.js

// ---------- Tüm eğitim modüllerinin tanımı ----------
const allModules = [
    { id: "genel_mevzuat", code: "1/a", category: "Genel konular", title: "Çalışma mevzuatı ile ilgili bilgiler", videoUrl: "https://www.w3schools.com/html/mov_bbb.mp4", duration: 300 },
    { id: "genel_haklar", code: "1/b", category: "Genel konular", title: "Çalışanların yasal hak ve sorumlulukları", videoUrl: "https://www.w3schools.com/html/mov_bbb.mp4", duration: 320 },
    { id: "genel_temizlik", code: "1/c", category: "Genel konular", title: "İşyeri temizliği ve düzeni", videoUrl: "https://www.w3schools.com/html/mov_bbb.mp4", duration: 280 },
    { id: "genel_hukuk", code: "1/ç", category: "Genel konular", title: "İş kazası ve meslek hastalığından doğan hukuki sonuçlar", videoUrl: "https://www.w3schools.com/html/mov_bbb.mp4", duration: 350 },
    { id: "saglik_meslek_hastaliklari", code: "2/a", category: "Sağlık konuları", title: "Meslek hastalıklarının sebepleri", videoUrl: "https://www.w3schools.com/html/mov_bbb.mp4", duration: 310 },
    { id: "saglik_korunma", code: "2/b", category: "Sağlık konuları", title: "Hastalıktan korunma prensipleri ve korunma tekniklerinin uygulaması", videoUrl: "https://www.w3schools.com/html/mov_bbb.mp4", duration: 290 },
    { id: "saglik_biyolojik_psikososyal", code: "2/c", category: "Sağlık konuları", title: "Biyolojik ve psikososyal risk etmenleri", videoUrl: "https://www.w3schools.com/html/mov_bbb.mp4", duration: 340 },
    { id: "saglik_ilk_yardim", code: "2/ç", category: "Sağlık konuları", title: "İlk yardım", videoUrl: "https://www.w3schools.com/html/mov_bbb.mp4", duration: 400 },
    { id: "saglik_bagimlilik", code: "2/d", category: "Sağlık konuları", title: "Bağımlılık yapıcı maddelerin zararları ve teknoloji bağımlılığı", videoUrl: "https://www.w3schools.com/html/mov_bbb.mp4", duration: 360 },
    { id: "teknik_kimyasal", code: "3/a", category: "Teknik konular", title: "Kimyasal, fiziksel ve ergonomik risk etmenleri", videoUrl: "https://www.w3schools.com/html/mov_bbb.mp4", duration: 330 },
    { id: "teknik_elle_tasima", code: "3/b", category: "Teknik konular", title: "Elle kaldırma ve taşıma", videoUrl: "https://www.w3schools.com/html/mov_bbb.mp4", duration: 270 },
    { id: "teknik_parlama", code: "3/c", category: "Teknik konular", title: "Parlama, patlama", videoUrl: "https://www.w3schools.com/html/mov_bbb.mp4", duration: 300 },
    { id: "teknik_yangin", code: "3/ç", category: "Teknik konular", title: "Yangın ve yangından korunma", videoUrl: "https://www.w3schools.com/html/mov_bbb.mp4", duration: 380 },
    { id: "teknik_is_ekipmanlari", code: "3/d", category: "Teknik konular", title: "İş ekipmanlarının güvenli kullanımı", videoUrl: "https://www.w3schools.com/html/mov_bbb.mp4", duration: 310 },
    { id: "teknik_ekranli", code: "3/e", category: "Teknik konular", title: "Ekranlı araçlarla çalışma", videoUrl: "https://www.w3schools.com/html/mov_bbb.mp4", duration: 290 },
    { id: "teknik_elektrik", code: "3/f", category: "Teknik konular", title: "Elektrik, tehlikeleri, riskleri ve önlemleri", videoUrl: "https://www.w3schools.com/html/mov_bbb.mp4", duration: 350 },
    { id: "teknik_is_kazalari", code: "3/g", category: "Teknik konular", title: "İş kazalarının sebepleri ve korunma prensipleri ile tekniklerinin uygulanması", videoUrl: "https://www.w3schools.com/html/mov_bbb.mp4", duration: 340 },
    { id: "teknik_isaretler", code: "3/ğ", category: "Teknik konular", title: "Sağlık ve güvenlik işaretleri", videoUrl: "https://www.w3schools.com/html/mov_bbb.mp4", duration: 260 },
    { id: "teknik_kisisel_koruyucu", code: "3/h", category: "Teknik konular", title: "Kişisel koruyucu donanım kullanımı", videoUrl: "https://www.w3schools.com/html/mov_bbb.mp4", duration: 320 },
    { id: "teknik_genel_kurallar", code: "3/ı", category: "Teknik konular", title: "İş sağlığı ve güvenliği genel kuralları ve güvenlik kültürü", videoUrl: "https://www.w3schools.com/html/mov_bbb.mp4", duration: 300 },
    { id: "teknik_acil_durumlar", code: "3/i", category: "Teknik konular", title: "Acil durumlar, tahliye ve kurtarma", videoUrl: "https://www.w3schools.com/html/mov_bbb.mp4", duration: 370 },
    { id: "risk_yuksekte", code: "4/a", category: "Faaliyetin Genel Tehlike ve Riskleri", title: "Yüksekte çalışma", videoUrl: "https://www.w3schools.com/html/mov_bbb.mp4", duration: 310 },
    { id: "risk_yuksekten_dusme", code: "4/b", category: "Faaliyetin Genel Tehlike ve Riskleri", title: "Yüksekten düşme", videoUrl: "https://www.w3schools.com/html/mov_bbb.mp4", duration: 290 },
    { id: "risk_kapali_ortam", code: "4/c", category: "Faaliyetin Genel Tehlike ve Riskleri", title: "Kapalı ortamda çalışma", videoUrl: "https://www.w3schools.com/html/mov_bbb.mp4", duration: 340 },
    { id: "risk_yangin", code: "4/ç", category: "Faaliyetin Genel Tehlike ve Riskleri", title: "Yangın", videoUrl: "https://www.w3schools.com/html/mov_bbb.mp4", duration: 360 },
    { id: "risk_ozel_ekipman", code: "4/d", category: "Faaliyetin Genel Tehlike ve Riskleri", title: "Özel risk taşıyan ekipmanla çalışma", videoUrl: "https://www.w3schools.com/html/mov_bbb.mp4", duration: 330 }
];

function getModulesForDangerClass(dangerClass) {
    if (dangerClass === 'az_tehlikeli') return allModules;
    return allModules.filter(m => m.category !== "Faaliyetin Genel Tehlike ve Riskleri");
}

const categoryExams = {
    "Genel konular": {
        questions: [
            { text: "İş Kanunu'na göre işverenin temel yükümlülüğü nedir?", options: ["Kar maksimizasyonu", "Çalışanların sağlık ve güvenliğini sağlamak", "Vergi avantajı sağlamak", "Sendikaları yasaklamak"], correct: 1 },
            { text: "Çalışanın iş sağlığı ve güvenliği ile ilgili temel hakkı nedir?", options: ["Tehlikeli işlerde çalışmama", "Daha yüksek ücret", "Sağlıklı ve güvenli bir ortamda çalışma", "Sendika kurma"], correct: 2 },
            { text: "İşyeri temizliği hangi riskleri azaltır?", options: ["Yangın", "Kayma-takılma-düşme", "Elektrik çarpması", "Gürültü"], correct: 1 },
            { text: "İş kazasının bildirilmesi için azami süre nedir?", options: ["24 saat", "3 iş günü", "1 hafta", "10 gün"], correct: 1 },
            { text: "Meslek hastalığı bildirimi kim tarafından yapılır?", options: ["Çalışan", "İşveren", "SGK", "Aile hekimi"], correct: 1 },
            { text: "5S yöntemi nedir?", options: ["Beş adımda temizlik", "Sınıflandırma, düzenleme, temizlik, standartlaştırma, disiplin", "Beş tip atık", "Beş güvenlik kuralı"], correct: 1 },
            { text: "İş kazası sonucu işverenin hukuki sorumluluğu hangi kanunda düzenlenir?", options: ["Türk Ceza Kanunu", "Borçlar Kanunu", "İş Kanunu", "Tümü"], correct: 3 },
            { text: "Çalışan hangi durumda işi reddedebilir?", options: ["Ücret düşüklüğünde", "Ciddi ve yakın tehlike durumunda", "Fazla mesai yapmak istemiyorsa", "Yöneticisiyle anlaşamıyorsa"], correct: 1 },
            { text: "İş sağlığı ve güvenliği mevzuatının temel amacı nedir?", options: ["İş kazalarını raporlamak", "Çalışanları korumak", "Cezai müeyyide uygulamak", "Üretimi hızlandırmak"], correct: 1 },
            { text: "Aşağıdakilerden hangisi işverenin sorumluluklarından biri değildir?", options: ["Risk değerlendirmesi yapmak", "Çalışanlara eğitim vermek", "Çalışanların özel hayatını denetlemek", "Acil durum planı hazırlamak"], correct: 2 }
        ]
    },
    "Sağlık konuları": { questions: [] },
    "Teknik konular": { questions: [] },
    "Faaliyetin Genel Tehlike ve Riskleri": { questions: [] }
};

// ---------- Kullanıcı ilerleme yönetimi ----------
function getUserProgress(userId) {
    let allProgress = JSON.parse(localStorage.getItem('userProgress') || '{}');
    if (!allProgress[userId]) allProgress[userId] = {};
    return allProgress[userId];
}

function saveUserProgress(userId, moduleId, data) {
    let allProgress = JSON.parse(localStorage.getItem('userProgress') || '{}');
    if (!allProgress[userId]) allProgress[userId] = {};
    if (!allProgress[userId][moduleId]) allProgress[userId][moduleId] = { videoWatchedPercent: 0, completedAt: null };
    if (data.videoWatchedPercent === 100 && allProgress[userId][moduleId].videoWatchedPercent !== 100) {
        data.completedAt = new Date().toISOString();
    }
    allProgress[userId][moduleId] = { ...allProgress[userId][moduleId], ...data };
    localStorage.setItem('userProgress', JSON.stringify(allProgress));
}

function getCompletedModulesCodesForUserUntil(userId, untilDate, modulesList) {
    const progress = getUserProgress(userId);
    const target = new Date(untilDate);
    return modulesList.filter(m => {
        const p = progress[m.id];
        if (!p || p.videoWatchedPercent !== 100) return false;
        if (p.completedAt) return new Date(p.completedAt) <= target;
        return true;
    }).map(m => m.code);
}

function getUserWatchedDurationForModulesUntil(userId, untilDate, modulesList) {
    const progress = getUserProgress(userId);
    const target = new Date(untilDate);
    let total = 0;
    modulesList.forEach(m => {
        const p = progress[m.id];
        if (p && p.videoWatchedPercent) {
            if (p.completedAt && new Date(p.completedAt) <= target) total += m.duration;
            else if (!p.completedAt) total += (m.duration * p.videoWatchedPercent / 100);
        }
    });
    return total;
}

function getCategoryExamStatus(userId, category) {
    const progress = getUserProgress(userId);
    const examKey = `exam_${category}`;
    return progress[examKey] || { passed: false, score: null, completedAt: null };
}

function setCategoryExamResult(userId, category, score, passed) {
    const examKey = `exam_${category}`;
    const data = { passed, score };
    if (passed) {
        data.completedAt = new Date().toISOString();
    }
    saveUserProgress(userId, examKey, data);
}

// ---------- OTURUM KONTROLÜ ----------
function checkSessionAndRedirect() {
    let token = localStorage.getItem('activeSessionToken');
    const userId = localStorage.getItem('activeUserId');
    const userRole = localStorage.getItem('activeUserRole');
    
    if (!token && userId && userRole) {
        console.log("Oturum tokeni kaybolmuş, yeniden oluşturuluyor...");
        const newToken = Date.now() + '_' + Math.random().toString(36).substring(2, 18) + '_' + userId;
        localStorage.setItem('activeSessionToken', newToken);
        token = newToken;
        
        let logs = JSON.parse(localStorage.getItem('trainingLogs') || '[]');
        const idx = logs.findIndex(l => l.userId == userId && !l.logoutTime);
        if (idx !== -1) {
            logs[idx].sessionId = newToken;
            localStorage.setItem('trainingLogs', JSON.stringify(logs));
        }
        return true;
    }
    
    if (!token || !userId) {
        alert('Oturum bulunamadı. Lütfen tekrar giriş yapın.');
        window.location.href = 'index.html';
        return false;
    }
    return true;
}

// ---------- IDLE TIMEOUT (script.js'deki logoutDueToInactivity, dashboard'da override edilecek) ----------
let idleTimer;
const IDLE_TIMEOUT = 60 * 60 * 1000;

function resetIdleTimer() {
    if (idleTimer) clearTimeout(idleTimer);
    idleTimer = setTimeout(() => {
        if (typeof window.logoutDueToInactivity === 'function') {
            window.logoutDueToInactivity();
        } else {
            // fallback
            window.location.href = 'index.html';
        }
    }, IDLE_TIMEOUT);
}

function startIdleMonitoring() {
    const events = ['mousemove', 'mousedown', 'keydown', 'scroll', 'click', 'touchstart'];
    events.forEach(event => {
        window.addEventListener(event, resetIdleTimer);
    });
    resetIdleTimer();
}

function stopIdleMonitoring() {
    if (idleTimer) clearTimeout(idleTimer);
    const events = ['mousemove', 'mousedown', 'keydown', 'scroll', 'click', 'touchstart'];
    events.forEach(event => {
        window.removeEventListener(event, resetIdleTimer);
    });
}