// const fs = require("fs");
const xlsxFile = require("read-excel-file/node");
const htmlPrivacy = require("./htmlPrivacy.js");
const htmlAbout = require("./htmlAbout.js");
const htmlStore = require("./htmlStore.js");
const htmlPrintables = require("./htmlPrintables.js");
const htmlCompare = require("./htmlCompare.js");
const htmlList = require("./htmlList.js");
const htmlElement = require("./htmlElement.js");

let svgHeader =
  "<svg xmlns='http://www.w3.org/2000/svg' width='22' height='22' viewBox='0 0 512 512' stroke='currentColor' fill='currentColor'><path d='";
let svgFooter = "' /></svg>";
let svgHdr =
  "<svg xmlns='http://www.w3.org/2000/svg' width='1.75em' height='1.75em' viewBox='0 0 24 24' stroke-width='1.5' stroke='currentColor' fill='none' stroke-linecap='round' stroke-linejoin='round'>";

let logoIcon =
  '<svg xmlns="http://www.w3.org/2000/svg" width="38" height="38" viewBox="0 0 10.054 10.054" class="periodic-table-logo" fill="#fff"><path d="M3.146 1.905a1.301 1.301 0 00-1.301 1.301 1.301 1.301 0 001.009 1.266 1.596 1.596 0 011.553-1.581 1.301 1.301 0 00-1.261-.986zm4.841 1.581a1.508 1.508 0 00-1.47 1.178l-.824-.1a.126.126 0 00-.14.11.126.126 0 00.11.14l.821.1a1.508 1.508 0 00-.004.081 1.508 1.508 0 001.508 1.508 1.508 1.508 0 001.508-1.508 1.508 1.508 0 00-1.508-1.508zm-4.331 1.69a.126.126 0 00-.078.028l-.843.683a1.301 1.301 0 00-.874-.34A1.301 1.301 0 00.56 6.848a1.301 1.301 0 001.301 1.301 1.301 1.301 0 001.301-1.301 1.301 1.301 0 00-.257-.774l.832-.674a.126.126 0 00.019-.177.126.126 0 00-.099-.047z"/><path d="M4.45 2.978a1.508 1.508 0 00-1.508 1.508 1.508 1.508 0 00.297.895l.292-.237a.201.201 0 01.283.03.201.201 0 01-.03.283l-.265.215a1.508 1.508 0 00.931.322 1.508 1.508 0 001.444-1.077l-.241-.029a.201.201 0 01-.175-.224.201.201 0 01.224-.175l.255.031a1.508 1.508 0 00.002-.034 1.508 1.508 0 00-1.508-1.508z" opacity=".7"/></svg>';

let listIcon =
  svgHdr +
  "<line x1='9' y1='6' x2='20' y2='6' /><line x1='9' y1='12' x2='20' y2='12' /><line x1='9' y1='18' x2='20' y2='18' /><line x1='5' y1='6' x2='5' y2='6.01' /><line x1='5' y1='12' x2='5' y2='12.01' /><line x1='5' y1='18' x2='5' y2='18.01' />" +
  svgFooter;

let compareIcon =
  svgHeader +
  "M508 276l-70-70c-3-2-7-4-11-4H322c-22 0-40 18-40 40v230c0 22 18 40 40 40h150c22 0 40-18 40-40V287c0-4-2-8-4-11zm-66-23l19 19h-19zm30 229H322c-6 0-10-4-10-10V242c0-6 4-10 10-10h90v55c0 8 7 15 15 15h55v170c0 6-4 10-10 10zM156 4c-3-2-7-4-11-4H40C18 0 0 18 0 40v230c0 22 18 40 40 40h150c22 0 40-18 40-40V85c0-4-2-8-4-11zm4 47l19 19h-19zm30 229H40c-6 0-10-4-10-10V40c0-6 4-10 10-10h90v55c0 8 7 15 15 15h55v170c0 6-4 10-10 10zm136-174c3 3 7 4 11 4s8-1 11-4c5-6 5-16 0-22l-15-14h4c47 0 85 38 85 85 0 8 7 15 15 15s15-7 15-15c0-63-52-115-115-115h-4l15-14c5-6 5-16 0-22-6-5-16-5-22 0l-40 40c-5 6-5 16 0 22zM186 406c-6-5-16-5-22 0-5 6-5 16 0 22l15 14h-4c-47 0-85-38-85-85 0-8-7-15-15-15s-15 7-15 15c0 63 52 115 115 115h4l-15 14c-5 6-5 16 0 22 3 3 7 4 11 4s8-1 11-4l40-40c5-6 5-16 0-22zm251-74h-80c-8 0-15 7-15 15s7 15 15 15h80c8 0 15-7 15-15s-7-15-15-15zm0 60h-80c-8 0-15 7-15 15s7 15 15 15h80c8 0 15-7 15-15s-7-15-15-15zM155 130H75c-8 0-15 7-15 15s7 15 15 15h80c8 0 15-7 15-15s-7-15-15-15zm0 60H75c-8 0-15 7-15 15s7 15 15 15h80c8 0 15-7 15-15s-7-15-15-15z" +
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

let lightIcon =
  svgHdr +
  "<circle cx='12' cy='12' r='4' /><path d='M3 12h1m8 -9v1m8 8h1m-9 8v1m-6.4 -15.4l.7 .7m12.1 -.7l-.7 .7m0 11.4l.7 .7m-12.1 -.7l-.7 .7' />" +
  svgFooter;

xlsxFile("../Translation/Periodic Table others.xlsm").then((rows) => {
  let languages = [
    // { lang: "en", col: 3 },
    // { lang: "en-gb", col: 40 },
    // { lang: "bg", col: 20 },
    // { lang: "ca", col: 25 },
    // { lang: "zh-cn", col: 6 },
    // { lang: "zh-tw", col: 28 },
    // { lang: "hr", col: 39 },
    // { lang: "cs", col: 24 },
    // { lang: "da", col: 33 },
    // { lang: "nl", col: 7 },
    // { lang: "fi", col: 19 },
    { lang: "fr", col: 5 },
    // { lang: "de", col: 12 },
    // { lang: "el", col: 35 },
    // { lang: "hi", col: 29 },
    // { lang: "hu", col: 11 },
    // { lang: "id", col: 21 },
    // { lang: "it", col: 8 },
    { lang: "ja", col: 23 },
    // { lang: "ko", col: 10 },
    // { lang: "ms", col: 41 },
    // { lang: "nb-no", col: 27 },
    // { lang: "nn-no", col: 38 },
    // { lang: "pl", col: 30 },
    // { lang: "pt", col: 18 },
    // { lang: "ro", col: 17 },
    // { lang: "ru", col: 9 },
    // { lang: "sr", col: 26 },
    // { lang: "sk", col: 13 },
    // { lang: "sl", col: 37 },
    { lang: "es", col: 4 },
    // { lang: "sv", col: 32 },
    // { lang: "th", col: 34 },
    // { lang: "tr", col: 22 },
    // { lang: "uk", col: 14 },
    // { lang: "vi", col: 15 },
    // { lang: "ar", col: 31 },
    // { lang: "he", col: 36 },
    // { lang: "fa", col: 16 },
    // { lang: "hy", col: 42 },
    // { lang: "mk", col: 43 },
  ];

  languages.forEach((language) => {
    let langValues = printObject(language.col); // es
    let lang = language.lang;

    function printObject(col) {
      let o = {};
      for (var j = 1; j < rows.length; j++) {
        o[rows[j][2]] = rows[j][col] === "" || !rows[j][col] ? rows[j][3] : rows[j][col];
      }

      return o;
    }
    let pages = [
      { page: "about", keywords: "about", title: langValues.about },
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

    let defaultNav = [
      "<nav>",
      "<a id=logo class='navbar-brand' href='.' aria-label='Home'>",
      logoIcon + "PERIODIC-TABLE.IO",
      "</a>",
      "<label for='drop' onclick='toggleMenu()' class='toggle burger'><svg xmlns='http://www.w3.org/2000/svg' ",
      "width='22' height='22' viewBox='0 0 24 24' ",
      "stroke-width='1.5' stroke='currentColor' fill='none' ",
      "stroke-linecap='round' stroke-linejoin='round'>",
      "<path stroke='none' d='M0 0h24v24H0z' fill='none' />",
      "<line x1='4' y1='6' x2='20' y2='6' />",
      "<line x1='4' y1='12' x2='20' y2='12' />",
      "<line x1='4' y1='18'x2='20' y2='18' />",
      "</svg></label>",
      "<input type='checkbox' id='drop' /><ul>",
      "<li>",
      "<a href='list.html'>",
      listIcon + langValues.list + "</a>",
      "</li>",
      "<li>",
      "<a href='compare.html'>" + compareIcon + langValues.compare + "</a>",
      "</li>",
      "<li>",
      "<label for='drop-1' class='toggle'>",
      tablesIcon + "Tables +</label>",
      "<a>",
      tablesIcon + "Tables ▼</a>",
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
      "<li>",
      "<a href='" + lang + "/translation'>",
      settingsIcon + langValues.settings + "</a>",
      "</li>",
      "<li>",
      "<a href='" + lang + "/translation'>",
      lightIcon + langValues.theme + "</a>",
      "</li>",
      "<li>",
      // ","<a on:click={() => changeTheme()}>
      // ","<svg xmlns="http://www.w3.org/2000/svg" width="22" height="22" viewBox="0 0 512 512" stroke="currentColor" fill="currentColor">
      //           {#if theme === light}
      //             <path transition:fly={{ y: 200, duration: 600 }} d={theme} />
      //           {:else}
      //           ","            <path transition:fly={{ y: -200, duration: 600 }} d={theme} />
      //           {/if}","
      //         </svg>{Lang.theme}","
      //       </a>","
      "</li>",
      "</ul>",
      "</nav>",
    ];

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
      "</div>",
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

      let metaTags = [
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
        "<link rel='stylesheet' href='../global.css' />",
        "<script defer src='../htmlJs.js'></script>",
        "</head>",
      ];

      switch (page) {
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
        // case "element":
        //   htmlElement.writeFile(lang, langValues, language.col, page, defaultHead, defaultNav, defaultFooter);
        //   break;
        case "list":
          htmlList.writeFile(lang, langValues, page, defaultHead, metaTags, defaultNav, defaultFooter);
          break;
      }
    });
  });
});