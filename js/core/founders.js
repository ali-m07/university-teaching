/**
 * Founder photo registry — paths relative to site root (resolved via SFH_BASE)
 */
window.SFH_PHOTOS = {
    rohrbeck: 'assets/founders/rohrbeck.svg',
    inayatullah: 'assets/founders/inayatullah.svg',
    glenn: 'assets/founders/glenn.svg',
    robinson: 'assets/founders/robinson.svg',
    popper: 'assets/founders/popper.svg',
    hines: 'assets/founders/hines.svg',
    bishop: 'assets/founders/bishop.svg',
    wack: 'assets/founders/wack.svg',
    schwartz: 'assets/founders/schwartz.svg',
    slaughter: 'assets/founders/slaughter.svg',
    candy: 'assets/founders/candy.svg',
    mansouri: 'assets/founders/mansouri.svg'
};

/** Optional Wikimedia URLs — tried first in browser, SVG fallback on error */
window.SFH_PHOTOS_REMOTE = {
    inayatullah: 'https://upload.wikimedia.org/wikipedia/commons/thumb/9/9d/Sohail_Inayatullah_july_2010.jpg/440px-Sohail_Inayatullah_july_2010.jpg',
    bishop: 'https://upload.wikimedia.org/wikipedia/commons/thumb/5/5e/Peter_Bishop_%28futurist%29.jpg/440px-Peter_Bishop_%28futurist%29.jpg',
    schwartz: 'https://upload.wikimedia.org/wikipedia/commons/thumb/8/8a/Peter_Schwartz_%28futurist%29.jpg/440px-Peter_Schwartz_%28futurist%29.jpg',
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
