console.log("Initializing...");

let baseColorsMap = new Map();
baseColorsMap.set("primary", "#192d49");
baseColorsMap.set("secondary", "#468189");
baseColorsMap.set("complement", "#f6edd6");
baseColorsMap.set("neutral", "#797979");

let lightnessIncrements = 0.1;

let asRGBStrings = true;

let wp = new WebsitePalette(baseColorsMap, lightnessIncrements, asRGBStrings);

console.log(wp);

wp.mapPaletteToRoot();
