const fs = require("fs");
const xlsxFile = require("read-excel-file/node");
const htmlPrivacy = require("./htmlPrivacy.js");
const htmlAbout = require("./htmlAbout.js");
const htmlStore = require("./htmlStore.js");
const htmlPrintables = require("./htmlPrintables.js");
const htmlCompare = require("./htmlCompare.js");
const htmlList = require("./htmlList.js");
const htmlElement = require("./htmlElement.js");
const htmlIndex = require("./htmlIndex.js");

// let svgHeader =
//   "<svg xmlns='http://www.w3.org/2000/svg' width='22' height='22' viewBox='0 0 512 512' stroke='currentColor' fill='currentColor'><path d='";
let svgFooter = "'</svg>";
let svgHdr =
  "<svg xmlns='http://www.w3.org/2000/svg' width='1.75em' height='1.75em' viewBox='0 0 24 24' stroke-width='1.5' stroke='currentColor' fill='none' stroke-linecap='round' stroke-linejoin='round'>";

let logoIcon =
  '<svg xmlns="http://www.w3.org/2000/svg" width="38" height="38" viewBox="0 0 10.054 10.054" class="periodic-table-logo" fill="#fff"><path d="M3.146 1.905a1.301 1.301 0 00-1.301 1.301 1.301 1.301 0 001.009 1.266 1.596 1.596 0 011.553-1.581 1.301 1.301 0 00-1.261-.986zm4.841 1.581a1.508 1.508 0 00-1.47 1.178l-.824-.1a.126.126 0 00-.14.11.126.126 0 00.11.14l.821.1a1.508 1.508 0 00-.004.081 1.508 1.508 0 001.508 1.508 1.508 1.508 0 001.508-1.508 1.508 1.508 0 00-1.508-1.508zm-4.331 1.69a.126.126 0 00-.078.028l-.843.683a1.301 1.301 0 00-.874-.34A1.301 1.301 0 00.56 6.848a1.301 1.301 0 001.301 1.301 1.301 1.301 0 001.301-1.301 1.301 1.301 0 00-.257-.774l.832-.674a.126.126 0 00.019-.177.126.126 0 00-.099-.047z"/><path d="M4.45 2.978a1.508 1.508 0 00-1.508 1.508 1.508 1.508 0 00.297.895l.292-.237a.201.201 0 01.283.03.201.201 0 01-.03.283l-.265.215a1.508 1.508 0 00.931.322 1.508 1.508 0 001.444-1.077l-.241-.029a.201.201 0 01-.175-.224.201.201 0 01.224-.175l.255.031a1.508 1.508 0 00.002-.034 1.508 1.508 0 00-1.508-1.508z" opacity=".7"/></svg>';

let listIcon = svgHdr + "<rect x='4' y='4' width='16' height='6' rx='2' /><rect x='4' y='14' width='16' height='6' rx='2' />" + svgFooter;

let compareIcon =
  svgHdr +
  "<rect x='3' y='3' width='6' height='6' rx='1' /><rect x='15' y='15' width='6' height='6' rx='1' /><path d='M21 11v-3a2 2 0 0 0 -2 -2h-6l3 3m0 -6l-3 3' /><path d='M3 13v3a2 2 0 0 0 2 2h6l-3 -3m0 6l3 -3' />" +
  svgFooter;

let tablesIcon =
  svgHdr +
  "<rect x='4' y='4' width='16' height='16' rx='2' /><line x1='4' y1='10' x2='20' y2='10' /><line x1='10' y1='4' x2='10' y2='20' />" +
  svgFooter;

let printablesIcon =
  svgHdr +
  "<path d='M17 17h2a2 2 0 0 0 2 -2v-4a2 2 0 0 0 -2 -2h-14a2 2 0 0 0 -2 2v4a2 2 0 0 0 2 2h2' /><path d='M17 9v-4a2 2 0 0 0 -2 -2h-6a2 2 0 0 0 -2 2v4' /><rect x='7' y='13' width='10' height='8' rx='2' />" +
  svgFooter;

let storeIcon = svgHdr + "<path d='M15 4l6 2v5h-3v8a1 1 0 0 1 -1 1h-10a1 1 0 0 1 -1 -1v-8h-3v-5l6 -2a3 3 0 0 0 6 0' />" + svgFooter;

let translationIcon = svgHdr + "<path d='M5 7h7m-2 -2v2a5 8 0 0 1 -5 8m1 -4a7 4 0 0 0 6.7 4' /><path d='M11 19l4 -9l4 9m-.9 -2h-6.2' />" + svgFooter;

let settingsIcon =
  svgHdr +
  "<path d='M10.325 4.317c.426 -1.756 2.924 -1.756 3.35 0a1.724 1.724 0 0 0 2.573 1.066c1.543 -.94 3.31 .826 2.37 2.37a1.724 1.724 0 0 0 1.065 2.572c1.756 .426 1.756 2.924 0 3.35a1.724 1.724 0 0 0 -1.066 2.573c.94 1.543 -.826 3.31 -2.37 2.37a1.724 1.724 0 0 0 -2.572 1.065c-.426 1.756 -2.924 1.756 -3.35 0a1.724 1.724 0 0 0 -2.573 -1.066c-1.543 .94 -3.31 -.826 -2.37 -2.37a1.724 1.724 0 0 0 -1.065 -2.572c-1.756 -.426 -1.756 -2.924 0 -3.35a1.724 1.724 0 0 0 1.066 -2.573c-.94 -1.543 .826 -3.31 2.37 -2.37c1 .608 2.296 .07 2.572 -1.065z' /><circle cx='12' cy='12' r='3' />" +
  svgFooter;

// let lightIcon =
//   svgHdr +
//   "<circle cx='12' cy='12' r='4' /><path d='M3 12h1m8 -9v1m8 8h1m-9 8v1m-6.4 -15.4l.7 .7m12.1 -.7l-.7 .7m0 11.4l.7 .7m-12.1 -.7l-.7 .7' />" +
//   svgFooter;

// let darkIcon = svgHdr + "<path d='M12 3c.132 0 .263 0 .393 0a7.5 7.5 0 0 0 7.92 12.446a9 9 0 1 1 -8.313 -12.454z' />" + svgFooter;

let lightIcon =
  "<svg xmlns='http://www.w3.org/2000/svg' width='1.75em' height='1.75em' viewBox='0 0 24 24' stroke-width='1.5' stroke='currentColor' fill='none' stroke-linecap='round' stroke-linejoin='round'><circle cx='12' cy='12' r='4' /><path d='M3 12h1m8 -9v1m8 8h1m-9 8v1m-6.4 -15.4l.7 .7m12.1 -.7l-.7 .7m0 11.4l.7 .7m-12.1 -.7l-.7 .7' /></svg>";

let darkIcon =
  "<svg xmlns='http://www.w3.org/2000/svg' width='1.75em' height='1.75em' viewBox='0 0 24 24' stroke-width='1.5' stroke='currentColor' fill='none' stroke-linecap='round' stroke-linejoin='round'><path d='M12 3c.132 0 .263 0 .393 0a7.5 7.5 0 0 0 7.92 12.446a9 9 0 1 1 -8.313 -12.454z' /></svg>";

xlsxFile("../Translation/Periodic Table others.xlsm").then((rows) => {
  let languages = [
    // { lang: "en", name: "English", col: 3, regular: "NotoSans", heavy: "NotoSansBold" },
    // { lang: "en-gb", name: "English (UK)", col: 40, regular: "NotoSans", heavy: "NotoSansBold" },
    // { lang: "bg", name: "Български", col: 20, regular: "NotoSans", heavy: "NotoSansBold" },
    // { lang: "ca", name: "Català", col: 25, regular: "NotoSans", heavy: "NotoSansBold" },
    // { lang: "zh-cn", name: "中文(简体)", col: 6, regular: "NotoSansSC-Regular", heavy: "NotoSansSC-Bold" },
    // { lang: "zh-tw", name: "中文(繁體)", col: 28, regular: "NotoSansTC-Regular", heavy: "NotoSansTC-Bold" },
    // { lang: "hr", name: "Hrvatski", col: 39, regular: "NotoSans", heavy: "NotoSansBold" },
    // { lang: "cs", name: "Čeština", col: 24, regular: "NotoSans", heavy: "NotoSansBold" },
    // { lang: "da", name: "Dansk", col: 33, regular: "NotoSans", heavy: "NotoSansBold" },
    // { lang: "nl", name: "Nederlands", col: 7, regular: "NotoSans", heavy: "NotoSansBold" },
    // { lang: "fi", name: "Suomi", col: 19, regular: "NotoSans", heavy: "NotoSansBold" },
    { lang: "fr", name: "Français", col: 5, regular: "NotoSans", heavy: "NotoSansBold" },
    // { lang: "de", name: "Deutsch", col: 12, regular: "NotoSans", heavy: "NotoSansBold" },
    // { lang: "el", name: "Ελληνικά", col: 35, regular: "NotoSans", heavy: "NotoSansBold" },
    // { lang: "hi", name: "हिंदी", col: 29, regular: "NotoSansDevanagari-Regular", heavy: "NotoSansDevanagari-Bold" },
    // { lang: "hu", name: "Magyar", col: 11, regular: "NotoSans", heavy: "NotoSansBold" },
    // { lang: "id", name: "Bahasa Indonesia", col: 21, regular: "NotoSans", heavy: "NotoSansBold" },
    // { lang: "it", name: "Italiano", col: 8, regular: "NotoSans", heavy: "NotoSansBold" },
    { lang: "ja", name: "日本語", col: 23, regular: "NotoSansJP-Regular", heavy: "NotoSansJP-Bold" },
    // { lang: "ko", name: "한국어", col: 10, regular: "NotoSansKR-Regular", heavy: "NotoSansKR-Bold" },
    // { lang: "ms", name: "Bahasa Melayu", col: 41, regular: "NotoSans", heavy: "NotoSansBold" },
    // { lang: "nb-no", name: "Norsk Bokmål", col: 27, regular: "NotoSans", heavy: "NotoSansBold" },
    // { lang: "nn-no", name: "Norsk Nynorsk", col: 38, regular: "NotoSans", heavy: "NotoSansBold" },
    // { lang: "pl", name: "Polski", col: 30, regular: "NotoSans", heavy: "NotoSansBold" },
    // { lang: "pt", name: "Português", col: 18, regular: "NotoSans", heavy: "NotoSansBold" },
    // { lang: "ro", name: "Română", col: 17, regular: "NotoSans", heavy: "NotoSansBold" },
    // { lang: "ru", name: "Русский", col: 9, regular: "NotoSans", heavy: "NotoSansBold" },
    // { lang: "sr", name: "Српски", col: 26, regular: "NotoSans", heavy: "NotoSansBold" },
    // { lang: "sk", name: "Slovenčina", col: 13, regular: "NotoSans", heavy: "NotoSansBold" },
    // { lang: "sl", name: "Slovenščina", col: 37, regular: "NotoSans", heavy: "NotoSansBold" },
    { lang: "es", name: "Español", col: 4, regular: "NotoSans", heavy: "NotoSansBold" },
    // { lang: "sv", name: "Svenska", col: 32, regular: "NotoSans", heavy: "NotoSansBold" },
    // { lang: "th", name: "ไทย", col: 34, regular: "NotoSansThai-Regular", heavy: "NotoSansThai-Bold" },
    // { lang: "tr", name: "Türkçe", col: 22, regular: "NotoSans", heavy: "NotoSansBold" },
    // { lang: "uk", name: "Українська", col: 14, regular: "NotoSans", heavy: "NotoSansBold" },
    // { lang: "vi", name: "Tiếng Việt", col: 15, regular: "NotoSans", heavy: "NotoSansBold" },
    // { lang: "ar", name: "العربية", col: 31, regular: "NotoSansKufiArabic-Regular", heavy: "NotoSansKufiArabic-Bold" },
    // { lang: "he", name: "עברית", col: 36, regular: "NotoSansHebrew-Regular", heavy: "NotoSansHebrew-Bold" },
    // { lang: "fa", name: "فارسی", col: 16, regular: "NotoSansKufiArabic-Regular", heavy: "NotoSansKufiArabic-Bold" },
    // { lang: "hy", name: "Հայերեն", col: 42, regular: "NotoSansArmenian-Regular", heavy: "NotoSansArmenian-Bold" },
    // { lang: "mk", name: "Македонски", col: 43, regular: "NotoSans", heavy: "NotoSansBold" },
  ];

  languages.forEach((language) => {
    let langValues = printObject(language.col); // es
    let lang = language.lang;

    var cssDir = lang + "/css";
    var jsDir = lang + "/js";
    var fontDir = lang + "/fonts";

    if (!fs.existsSync(cssDir)) fs.mkdirSync(cssDir);
    if (!fs.existsSync(jsDir)) fs.mkdirSync(jsDir);
    if (!fs.existsSync(fontDir)) fs.mkdirSync(fontDir);

    fs.copyFile("global.css", lang + "/css/global.css", (err) => {
      if (err) throw err;
      // console.log("source.txt was copied to destination.txt");
    });

    fs.copyFile("htmlJS.js", lang + "/js/htmlJS.js", (err) => {
      if (err) throw err;
      // console.log("source.txt was copied to destination.txt");
    });

    fs.copyFile("fonts2/" + language.regular + ".woff2", lang + "/fonts/" + language.regular + ".woff2", (err) => {
      if (err) throw err;
      // console.log("source.txt was copied to destination.txt");
    });

    fs.copyFile("fonts2/" + language.heavy + ".woff2", lang + "/fonts/" + language.heavy + ".woff2", (err) => {
      if (err) throw err;
      // console.log("source.txt was copied to destination.txt");
    });

    function printObject(col) {
      let o = {};
      for (let j = 1; j < rows.length; j++) {
        o[rows[j][2]] = rows[j][col] === "" || !rows[j][col] ? rows[j][3] : rows[j][col];
      }

      return o;
    }
    let pages = [
      { page: "about", keywords: "about", title: langValues.about },
      { page: "index", keywords: "periodic table", title: langValues.homeHeader },
      { page: "privacy-policy", keywords: "privacy policy", title: langValues.privacy },
      { page: "store", keywords: "store, tees", title: langValues.store },
      { page: "printables", keywords: "printables, poster, flash cards", title: langValues.printables },
      { page: "list", keywords: "list", title: langValues.list },
      { page: "element", keywords: "element", title: langValues.helium },
      { page: "compare", keywords: "compare, comparison", title: langValues.compare },
    ];

    let defaultHead = [
      "<!DOCTYPE html>",
      "<html lang='" + lang + "' class='normalFont' data-direction='ltr' data-theme='dark' data-style='1'>",
      "<head>",
      "<meta charset='utf-8'/>",
      "<meta http-equiv='X-UA-Compatible' content='IE=edge'/>",
      "<meta name='viewport' content='width=device-width,initial-scale=1'/>",
      "<link rel='apple-touch-icon' sizes='180x180' href='../images/icons/apple-touch-icon.png'/>",
      "<link rel='icon' type='image/png' sizes='32x32' href='../favicon-32x32.png'/>",
      "<link rel='icon' type='image/png' sizes='16x16' href='../favicon-16x16.png'/>",
      "<link rel='manifest' href='../manifest.json'/>",
      "<link rel='mask-icon' href='safari-pinned-tab.svg' color='#0078d7'/>",

      "<meta name='msapplication-TileColor' content='#0078d7'/>",
      "<meta name='msapplication-TileImage' content='../images/icons/mstile-144x144.png'/>",
      "<meta name='msapplication-square70x70logo' content='../images/icons/mstile-70x70.png'/>",
      "<meta name='msapplication-square150x150logo' content='../images/icons/mstile-150x150.png'/>",
      "<meta name='msapplication-wide310x150logo' content='../images/icons/mstile-310x150.png'/>",
      "<meta name='msapplication-square310x310logo' content='../images/icons/mstile-310x310.png'/>",
      "<meta name='theme-color' content='#003c6c'/>",
      "<meta name='google' content='notranslate'/>",
      "<meta name='robots' content='index,follow'/>",
      "<meta name='format-detection' content='telephone=no'/>",
      "<meta name='mobile-web-app-capable' content='yes'/>",
      "<meta name='apple-mobile-web-app-capable' content='yes'/>",
      "<meta name='author' content='Naveen CS'/>",
      "<meta name='twitter:card' content='summary_large_image'/>",
      "<meta name='twitter:site' content='@periodictableio'/>",
      "<meta property='og:site_name' content='Periodic-Table.io'/>",
      "<meta property='og:type' content='website'/>",
    ];

    let colorList = [
      { id: "color1", value: "253, 58, 74", title: "Red" },
      { id: "color2", value: "245, 128, 37", title: "Orange" },
      { id: "color3", value: "255, 167, 0", title: "Yellow" },
      { id: "color4", value: "123, 113, 81", title: "Brown" },
      { id: "color5", value: "91, 170, 9", title: "Lime" },
      { id: "color6", value: "26, 152, 90", title: "Green" },
      { id: "color7", value: "59, 168, 221", title: "Cyan" },
      { id: "color8", value: "0, 120, 215", title: "Blue" },
      { id: "color9", value: "139, 102, 204", title: "Purple" },
      { id: "color10", value: "228, 27, 144", title: "Pink" },
    ];

    let nav1 = [
      "<div id='overlap' class='collapsed' onclick='sideBar()'></div>",
      "<div id='sidebar' class='collapsed'>",
      "<div class='settingsGrid items-center'>",
      "<div class='heavyFont text-left'>" + langValues.language + "</div>",
      "<div>",
      "<select id='languageSelectSetting' class='select-css' aria-label='" + langValues.language + "' onchange='setLanguage()'>",
    ];

    let langNav = [];

    languages.forEach((langVal) => {
      langNav.push("<option value='" + langVal.lang + "'>" + langVal.name + "</option>");
    });

    let nav2 = [
      "</select>",
      "</div>",
      "<div class='heavyFont text-left self-start'>" + langValues.temperature + "</div>",
      "<div class='radio-toolbar radio-temp'>",
      "<input type='radio' id='tempcelsius' name='temperature' value='celsius' onchange='setTemp()' />",
      "<label class='disable-select' for='tempcelsius'>" +
        langValues.tempCelsius +
        "</label><input type='radio' id='tempfahrenheit' name='temperature' value='fahrenheit' onchange='setTemp()' />",
      "<label class='disable-select' for='tempfahrenheit'>" + langValues.tempFahrenheit + "</label>",
      "</div>",
      "<div class='heavyFont text-left self-start'>" + langValues.labelColorMain + "</div>",
      "<div class='radio-toolbar radio-color'>",
    ];

    let colorNav = [];
    colorList.forEach((color) => {
      colorNav.push(
        "<input type='radio' id='" +
          color.id +
          "' name='tableColor' value='" +
          color.value +
          "' onchange='setColorSettings()'><label id='" +
          color.id +
          "Label' class='disable-select' title='" +
          color.title +
          "' for='" +
          color.id +
          "'></label>"
      );
    });

    let nav3 = [
      "</div>",
      "<div id='settingPeriodicTable' class='span-2'>" + langValues.homeHeader + "</div>",
      "<div class='heavyFont text-left'>" + langValues.tableWidth + "</div>",
      "<div>",
      "<select id='marginSetting' class='select-css' aria-label='" + langValues.tableWidth + "'>",
      "<option value='1'>100%</option>",
      "<option value='0.95'>95%</option>",
      "<option value='0.9'>90%</option>",
      "<option value='0.85'>85%</option>",
      "<option value='0.8'>80%</option>",
      "</select>",
      "</div>",
      "<div class='heavyFont text-left'>" + langValues.labelName + "</div>",
      "<div class='text-left'>",
      "<label class='switch'>",
      "<input id='nameSelectSetting' type='checkbox' >",
      "<span class='slider round' ></span>",
      "</label>",
      "</div>",
      "<div class='heavyFont text-left'>" + langValues.labelAtmWtMain + "</div>",
      "<div class='text-left'>",
      "<label class='switch'>",
      "<input id='atmNoSelectSetting' type='checkbox' >",
      "<span class='slider round' ></span>",
      "</label>",
      "</div>",
      "<div class='heavyFont text-left self-start' id='tableStyle'>" + langValues.style + "</div>",
      "<div class='radio-toolbar radio-style'>",
      "<input type='radio' id='style1' name='tableStyle' value='1' onchange='setStyle()' >",
      "<label id='style1Label' class='disable-select' for='style1'></label>",
      "<input type='radio' id='style2' name='tableStyle' value='2' onchange='setStyle()' >",
      "<label id='style2Label' class='disable-select' for='style2'></label>",
      "<input type='radio' id='style3' name='tableStyle' value='3' onchange='setStyle()' >",
      "<label id='style3Label' class='disable-select' for='style3'></label>",
      "</div>",
      "</div>",
      "</div><nav>",
      "<a id=logo class='navbar-brand' href='.' aria-label='Home'>",
      logoIcon + "PERIODIC-TABLE.IO",
      "</a><input type='checkbox' id='drop' />",
      "<ul>",
      "<li>",
      "<a href='list.html'>",
      listIcon + langValues.list + "</a>",
      "</li>",
      "<li>",
      "<a href='compare.html'>" + compareIcon + langValues.compare + "</a>",
      "</li>",
      "<li>",
      "<label for='drop-1' class='toggle'>",
      tablesIcon +
        "Tables <svg xmlns='http://www.w3.org/2000/svg' width='1.5em' height='1.5em' viewBox='0 0 24 24' stroke-width='1.5' stroke='currentColor' fill='none' stroke-linecap='round' stroke-linejoin='round'><polyline points='6 9 12 15 18 9' /></svg></label>",
      "<a id='tablesLink'>",
      tablesIcon +
        "Tables <svg xmlns='http://www.w3.org/2000/svg' width='1.5em' height='1.5em' viewBox='0 0 24 24' stroke-width='1.5' stroke='currentColor' fill='none' stroke-linecap='round' stroke-linejoin='round'><polyline points='6 9 12 15 18 9' /></svg></a>",
      "<input type='checkbox' id='drop-1' />",
      "<ul>",
      "<li><a href='#a'>Solubility Chart</a></li>",
      "<li><a href='#a'>Reactivity Series</a></li>",
      "</ul>",
      "</li>",
      "<li>",
      "<a href='printables.html'>",
      printablesIcon + langValues.printables + "</a>",
      "</li>",
      "<li>",
      "<a href='store.html'>",
      storeIcon + langValues.store + "</a>",
      "</li>",
      "<li>",
      "<a href='translation.html'>",
      translationIcon + langValues.translation + "</a>",
      "</li>",
      "</ul>",
      "<button onclick='sideBar()' title='" + langValues.settings + "'>",
      settingsIcon + "</button>",
      "<button id='themeIcon' onclick='changeTheme()' data-theme='light' title='" + langValues.theme + "'>",
      lightIcon + "</button>",
      "<label for='drop' onclick='toggleMenu()' class='toggle burger'><svg xmlns='http://www.w3.org/2000/svg' ",
      "width='22' height='22' viewBox='0 0 24 24' ",
      "stroke-width='1.5' stroke='currentColor' fill='none' ",
      "stroke-linecap='round' stroke-linejoin='round'>",
      "<path stroke='none' d='M0 0h24v24H0z' fill='none' />",
      "<line x1='4' y1='6' x2='20' y2='6' />",
      "<line x1='4' y1='12' x2='20' y2='12' />",
      "<line x1='4' y1='18'x2='20' y2='18' />",
      "</svg></label>",
      "</nav>",
    ];

    let defaultNav = nav1.concat(langNav).concat(nav2).concat(colorNav).concat(nav3);

    let defaultFooter = [
      "<div class='footer'>",
      "<div class='flex flex-wrap justify-center pt-2'>",
      "<a target='_blank' href='https://feedback.periodic-table.io/' rel='noopener noreferrer' class='m-1 p-2'>",
      "<span id='suggestionLink' class='linkText'>" + langValues.suggestions + "</span>",
      "</a>",
      "<a id='translationFooter' href='translation.html' class='m-1 p-2 flex'>",
      "<span id='translate2Link' class='linkText'>" + langValues.translate + "</span>",
      "</a>",
      "<a id='aboutFooter' href='about.html' class='m-1 p-2'> <span id='aboutLink' class='linkText'>" + langValues.about + "</span> </a>",
      "<a id='creditsFooter' href='credits.html' class='m-1 p-2'>",
      "<span id='creditsLink' class='linkText'>" + langValues.credits + "</span> </a>",
      "<a id='privacyFooter' href='privacy-policy.html' class='m-1 p-2'>",
      "<span id='privacyLink' class='linkText'>" + langValues.privacy + "</span> </a>",
      "</div>",
      "<div class='flex flex-wrap justify-center pt-2 py-4'>",
      "<a target='_blank' href='https://github.com/catchspider2002/periodic-table.io' rel='noopener noreferrer' class='flex m-1 p-2' title='Github'>",
      "<svg xmlns='http://www.w3.org/2000/svg' width='24' height='24' viewBox='0 0 512 512' stroke='currentColor' fill='currentColor'>",
      "<path d='M256 6.178c-141 0-256 115-256 256 0 113 73 209 175 243 13 3 18-5 18-12 0-6-1-26-1-48-71 16-86-30-86-30-12-30-28-37-28-37-24-16 1-16 1-16 26 2 40 26 40 26 22 40 59 28 74 22 2-17 9-28 16-35-57-6-116-28-116-126 0-28 10-51 26-69-3-6-11-32 3-68 0 0 21-6 70 27 20-6 42-9 64-9s44 3 64 9c49-33 70-27 70-27 14 36 6 62 3 68 16 18 26 41 26 69 0 98-60 120-117 126 10 8 18 24 18 48 0 34-1 61-1 70 0 7 5 15 18 12 102-34 175-130 175-243 0-141-115-256-256-256z' />",
      "</svg>",
      "</a>",
      "<a target='_blank' href='https://twitter.com/periodictableio' rel='noopener noreferrer' class='flex m-1 p-2' title='Twitter'>",
      "<svg xmlns='http://www.w3.org/2000/svg' width='24' height='24' viewBox='0 0 512 512' stroke='currentColor' fill='currentColor'>",
      "<path d='M511.426 97c-19 9-39 14-60 17 21-13 38-34 46-58-20 12-43 20-67 25-19-20-46-33-76-33-58 0-105 47-105 105 0 8 0 16 2 24-87-4-164-46-216-110-9 16-14 34-14 53 0 36 18 69 46 87-17 0-33-5-47-13v2c0 50 36 93 84 103-9 2-18 3-28 3-7 0-13 0-20-2 14 42 53 72 99 73-36 29-82 45-131 45-8 0-17 0-25-1 47 30 102 47 161 47 193 0 299-160 299-299v-13c20-15 38-34 52-55z' />",
      "</svg>",
      "</a>",
      "<a target='_blank' href='https://www.instagram.com/periodictableio/' rel='noopener noreferrer' class='flex m-1 p-2' title='Instagram'>",
      "<svg xmlns='http://www.w3.org/2000/svg' width='24' height='24' viewBox='0 0 512 512' stroke='currentColor' fill='currentColor'>",
      "<path d='M466 256c0-68 0-77-2-103-1-25-5-39-8-48-5-12-11-20-20-29s-17-15-29-20c-9-3-23-7-47-8-27-2-36-2-104-2s-76 0-103 2c-25 1-39 5-48 8-12 5-20 11-29 20s-15 17-19 29c-4 9-8 23-9 47-1 27-2 36-2 104s1 76 2 103c1 25 5 39 9 48 4 12 10 20 19 29s17 15 29 19c9 4 23 8 48 9 27 1 35 2 103 2s77-1 103-2c25-1 39-5 48-9 12-4 20-10 29-19s15-17 20-29c3-9 7-23 8-48 2-27 2-35 2-103zm46 0c0 69 0 78-2 105-1 28-5 46-11 63-7 16-16 31-30 45s-29 23-45 30c-17 6-35 10-62 11-28 2-37 2-106 2-70 0-78 0-106-2-27-1-45-5-62-11-17-7-31-16-45-30s-23-29-30-45c-6-17-10-35-11-62-2-28-2-36-2-106 0-69 0-78 2-105 1-28 5-46 11-63 7-16 16-31 30-45s28-23 45-29c17-7 35-11 62-12 28-1 36-2 106-2 69 0 78 1 105 2 28 1 46 5 62 12 17 6 32 15 46 29s23 28 29 45c7 17 11 35 12 62 2 28 2 36 2 106zm-125 0c0 73-58 131-131 131s-132-58-132-131 59-132 132-132 131 59 131 132zm-216 0c0 47 38 85 85 85s85-38 85-85-38-85-85-85-85 38-85 85zM393 89c-17 0-31 13-31 30s14 31 31 31 30-14 30-31-13-30-30-30z' />",
      "</svg>",
      "</a>",
      "<a target='_blank' href='https://gumroad.com/periodictabio' rel='noopener noreferrer' class='flex m-1 p-2' title='Gumroad'>",
      "<svg xmlns='http://www.w3.org/2000/svg' width='24' height='24' viewBox='0 0 512 512' stroke='currentColor' fill='currentColor'>",
      "<path d='M338 321c12 0 21 10 21 22s-9 22-21 22c0 0 0 0 0 0v0c-12 0-22-10-22-22s10-22 22-22c0 0 0 0 0 0zM455 24s0 0 0 0c12 0 22 9 22 21s-10 22-22 22c0 0 0 0 0 0-12 0-22-10-22-22s10-21 22-21zM71 66h344c7 15 23 25 40 25 25 0 45-21 45-46S480 0 455 0c-19 0-35 12-42 28H71c-33 0-59 26-59 58v366c0 32 27 60 59 60h366c32 0 58-27 58-60V235c0-33-26-60-58-60H220c-33 0-61 27-61 60v68c0 32 27 57 61 57h76c6 17 23 29 42 29v0c25 0 45-21 45-46s-20-45-45-45c-18 0-33 10-41 24v0h-77c-11 0-23-7-23-19v-68c0-12 11-22 23-22h217c11 0 20 10 20 22v217c0 12-9 22-20 22H71c-11 0-21-10-21-22V86c0-11 9-20 21-20z' />",
      "</svg>",
      "</a>",
      "</div>",
      "<div class='flex flex-wrap justify-center p-2 pb-8 self-center'>Made with&nbsp; <span style='color:#e25555'>❤</span> &nbsp;by <a target='_blank' href='https://twitter.com/MrNaveenCS/' rel='noopener noreferrer'>",
      "<span class='linkText'>Naveen CS</span>",
      "</a></div>",
      "</div></body>",
    ];

    pages.forEach((pageValue) => {
      let keywords =
        pageValue.keywords +
        ", " +
        langValues.homeHeader +
        ", chemical, " +
        langValues.elements +
        ", interactive, PWA, " +
        langValues.properties +
        ", " +
        langValues.uses +
        ", " +
        langValues.hist +
        ", " +
        langValues.isotopes +
        ", " +
        langValues.labelConfigMain +
        ", " +
        langValues.labelElectronsMain +
        ", name origin, images, hazards, diagram, chemistry, information";
      let description =
        "Interactive periodic table of the chemical elements in 39 languages - Includes properties, history, name origin, facts, applications, hazards, isotopes and more.";
      let website = "https://periodic-table.io";
      let image = website + "/images/icons/android-chrome-256x256.png";
      let title = pageValue.title + " - " + langValues.homeHeader;
      let page = pageValue.page;
      let link = website + "/" + lang + "/" + pageValue.page + "/";

      let metaTags1 = [
        "<meta name='keywords' content='" + keywords + "' />",
        "<meta name='description' content='" + description + "' />",
        "<meta property='og:description' content='" + description + "' />",
        "<meta name='twitter:description' content='" + description + "' />",
        "<meta property='og:title' content='" + title + "' />",
        "<meta name='twitter:title' content='" + title + "' />",
        "<title id='homeTitle'>" + title + "</title>",
        "<meta property='og:image' content='" + image + "' />",
        "<meta name='twitter:image' content='" + image + "' />",
        "<meta name='twitter:image:src' content='" + image + "' />",
        "<meta property='og:url' content='" + link + "' />",
        "<link rel='canonical' href='" + link + "' />",
      ];

      let metaAlternate = [];

      languages.forEach((langVal) => {
        metaAlternate.push(
          "<link rel='alternate' hreflang='" + langVal.lang + "' href='" + website + "/" + langVal.lang + "/" + pageValue.page + "'/>"
        );
      });

      let metaTags2 = [
        "<link rel='stylesheet' href='css/global.css' />",
        "<script defer src='js/htmlJS.js'></script>",
        "<link rel='preload' href='fonts/" + language.regular + ".woff2' as='font' crossorigin='anonymous' />",
        "<link rel='preload' href='fonts/" + language.heavy + ".woff2' as='font' crossorigin='anonymous' />",
        "<style>@font-face {font-family: SpecialRegular; src: url(fonts/" + language.regular + ".woff2) format('woff2'); font-display: swap;}",
        "@font-face {font-family: SpecialHeavy;src: url(fonts/" + language.heavy + ".woff2) format('woff2'); font-display: swap;}</style>",
        "</head><body>",
      ];

      let metaTags = metaTags1.concat(metaAlternate).concat(metaTags2);

      switch (page) {
        case "index":
          htmlIndex.writeFile(lang, langValues, page, defaultHead, metaTags, defaultNav, defaultFooter);
          break;
        case "privacy-policy":
          htmlPrivacy.writeFile(lang, langValues, page, defaultHead, metaTags, defaultNav, defaultFooter);
          break;
        case "about":
          htmlAbout.writeFile(lang, langValues, page, defaultHead, metaTags, defaultNav, defaultFooter);
          break;
        case "store":
          htmlStore.writeFile(lang, langValues, page, defaultHead, metaTags, defaultNav, defaultFooter);
          break;
        case "printables":
          htmlPrintables.writeFile(lang, langValues, page, defaultHead, metaTags, defaultNav, defaultFooter);
          break;
        case "compare":
          htmlCompare.writeFile(lang, langValues, page, defaultHead, metaTags, defaultNav, defaultFooter);
          break;
        case "element":
          htmlElement.writeFile(lang, langValues, language.col, page, defaultHead, defaultNav, defaultFooter);
          break;
        case "list":
          htmlList.writeFile(lang, langValues, page, defaultHead, metaTags, defaultNav, defaultFooter);
          break;
      }
    });
  });
});
