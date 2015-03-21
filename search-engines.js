// initialize event handlers
window.onload = function() {
    // WEB SEARCH
    document.ddg.onsubmit = ddg;
    document.google_en.onsubmit = google_en;
    document.google_de.onsubmit = google_de;

    // MAPS
    document.google_maps.onsubmit = google_maps;
    document.osm.onsubmit = osm;

    // WIKIPEDIA
    document.de_wikipedia.onsubmit = de_wikipedia;
    document.en_wikipedia.onsubmit = en_wikipedia;

    // LINUX
    document.wiki_arch.onsubmit = wiki_arch;
    document.wiki_debian.onsubmit = wiki_debian;
    document.packages_arch.onsubmit = pkgs_arch;
    document.packages_debian.onsubmit = pkgs_debian;
    document.packages_aur.onsubmit = pkgs_aur;
};

function pkgs_aur() {
    location.href = "https://aur.archlinux.org/packages/?K=" + encodeURIComponent(document.packages_aur.input.value);
    return false;         
}

function pkgs_arch() {
    location.href = "https://archlinux.org/packages/?q=" + encodeURIComponent(document.packages_arch.input.value);
    return false;         
}

function pkgs_debian() {
    location.href = "https://packages.debian.org/search?keywords=" + encodeURIComponent(document.packages_debian.input.value);
    return false;         
}

function wiki_arch() {
    location.href = "https://wiki.archlinux.org/index.php?search=" + encodeURIComponent(document.wiki_arch.input.value);
    return false;     
}
function wiki_debian() {
    location.href = "https://wiki.debian.org/FrontPage?action=fullsearch&value=" + encodeURIComponent(document.wiki_debian.input.value);
    return false;     
}

function de_wikipedia() {
    location.href = "https://de.wikipedia.org/w/index.php?search=" + encodeURIComponent(document.de_wikipedia.input.value);
    return false;     
}

function en_wikipedia() {
    location.href = "https://en.wikipedia.org/w/index.php?search=" + encodeURIComponent(document.en_wikipedia.input.value);
    return false;     
}

function google_maps() {
    location.href = "https://www.google.com/maps/search/" + encodeURIComponent(document.google_maps.input.value);
    return false; // prevent default browser behaviour	
}
function ddg() {
    location.href = "https://duckduckgo.com/?q=" + encodeURIComponent(document.ddg.input.value);
    return false;
}
function google_de() {
    location.href = "https://google.de/#q=" + encodeURIComponent(document.google_de.input.value);
    return false;
}
function google_en() {
    location.href = "https://google.com/#q=" + encodeURIComponent(document.google_en.input.value);
    return false;
}
function osm() {
    location.href = "https://www.openstreetmap.org/search?query=" + encodeURIComponent(document.osm.input.value);
    return false;
}
