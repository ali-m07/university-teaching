/**
 * Founder photo registry — remote URLs first, local assets as fallback on error.
 */
window.SFH_PHOTOS = {
    rohrbeck: 'assets/founders/rohrbeck.jpg',
    inayatullah: 'assets/founders/inayatullah.jpg',
    glenn: 'assets/founders/glenn.svg',
    robinson: 'assets/founders/robinson.svg',
    popper: 'assets/founders/popper.svg',
    hines: 'assets/founders/hines.jpg',
    bishop: 'assets/founders/bishop.jpg',
    wack: 'assets/founders/wack.svg',
    schwartz: 'assets/founders/schwartz.jpg',
    slaughter: 'assets/founders/slaughter.svg',
    candy: 'assets/founders/candy.svg',
    mansouri: 'assets/founders/mansouri.svg',
    'lotfi-zadeh': 'assets/founders/lotfi-zadeh.jpg',
    'jerry-mendel': 'assets/founders/mendel.svg',
    'robert-john': 'assets/founders/john.svg'
};

window.SFH_PHOTOS_REMOTE = {
    rohrbeck: 'https://soif.org.uk/app/uploads/2019/04/Rene-Rohrbeck_2018_c-1024x1024.jpg',
    inayatullah: 'https://upload.wikimedia.org/wikipedia/commons/9/9d/Sohail_Inayatullah_july_2010.jpg',
    glenn: 'https://upload.wikimedia.org/wikipedia/commons/thumb/4/4a/Jerome_C._Glenn.jpg/440px-Jerome_C._Glenn.jpg',
    hines: 'https://ascend.events/wp-content/uploads/2023/02/Andy-Hines_2023ASCEND.jpg',
    bishop: 'https://upload.wikimedia.org/wikipedia/commons/f/f6/Peter_C._Bishop.jpg',
    schwartz: 'https://upload.wikimedia.org/wikipedia/commons/thumb/d/d7/Peter_Schwartz_in_2022.jpg/960px-Peter_Schwartz_in_2022.jpg',
    'lotfi-zadeh': 'https://upload.wikimedia.org/wikipedia/commons/b/b3/Zadeh%2C_L.A._2005.jpg',
    'jerry-mendel': 'https://upload.wikimedia.org/wikipedia/commons/e/e4/Jerry_Mendel.jpg'
};

window.SFH_MEDIA = {
    articles: {
        rohrbeck: 'https://images.unsplash.com/photo-1552664730-d307ca884978?auto=format&fit=crop&w=1200&q=80',
        cla: 'https://jfsdigital.org/wp-content/uploads/2022/07/smart-isfahan-1-scaled-e1656742344477.jpg',
        uncertainty: 'https://images.unsplash.com/photo-1501386761578-4fd643a2879e?auto=format&fit=crop&w=1200&q=80',
        aiTime: 'https://images.unsplash.com/photo-1495364141860-b0d03eccd065?auto=format&fit=crop&w=1200&q=80',
        hines: 'https://images.unsplash.com/photo-1553877522-43269d4ea984?auto=format&fit=crop&w=1200&q=80'
    },
    claDiagram: 'https://jfsdigital.org/wp-content/uploads/2022/07/word-image-15283-2.jpeg'
};

function founderPhotoUrl(key) {
    const rel = window.SFH_PHOTOS?.[key];
    if (!rel) return null;
    const base = window.SFH_BASE || './';
    return base + rel;
}

function founderInitials(name) {
    return String(name || '?')
        .split(/\s+/)
        .filter(Boolean)
        .slice(0, 2)
        .map(w => w[0])
        .join('')
        .toUpperCase();
}

window.founderPhotoUrl = founderPhotoUrl;
window.founderInitials = founderInitials;
