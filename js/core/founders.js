/**
 * Founder photo registry — paths relative to site root (resolved via SFH_BASE)
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
    'lotfi-zadeh': 'assets/founders/lotfi-zadeh.jpg'
};

/** Optional Wikimedia URLs — tried first in browser, SVG fallback on error */
window.SFH_PHOTOS_REMOTE = {
    rohrbeck: 'https://soif.org.uk/app/uploads/2019/04/Rene-Rohrbeck_2018_c-1024x1024.jpg',
    inayatullah: 'https://upload.wikimedia.org/wikipedia/commons/9/9d/Sohail_Inayatullah_july_2010.jpg',
    bishop: 'https://upload.wikimedia.org/wikipedia/commons/f/f6/Peter_C._Bishop.jpg',
    hines: 'https://ascend.events/wp-content/uploads/2023/02/Andy-Hines_2023ASCEND.jpg',
    schwartz: 'https://upload.wikimedia.org/wikipedia/commons/thumb/d/d7/Peter_Schwartz_in_2022.jpg/960px-Peter_Schwartz_in_2022.jpg',
    glenn: 'https://upload.wikimedia.org/wikipedia/commons/thumb/4/4a/Jerome_C._Glenn.jpg/440px-Jerome_C._Glenn.jpg'
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
