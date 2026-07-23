document.addEventListener("DOMContentLoaded", () => {

    document.body.innerHTML =
        document.body.innerHTML.replace(
            /\[\[(.*?)\|(.*?)\]\]/g,

            (_,kanji,kana)=>

            `<span class="furi">
                <span class="kana">${kana}</span>
                <span class="kanji">${kanji}</span>
            </span>`
        );

});