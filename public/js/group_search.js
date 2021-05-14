function showHintList(data) {
    console.log(data);
    let output = "";
    output += `<div class="hint-list hint-list-layout hint-list-layout--absolute">`;

    if (data.length === 0) {
        output += `<div class="hint-item hint-item-layout">
                        <img class="hint-item__search-icon search-icon" src="/images/icons/search_fff.png" alt="search-icon">
                        <div class="hint-item__content">No suggestions</div>
                    </div>`;
    } else {
        for (let i of data) {
            output += `<a class="hint-item-hyperlink" href="/search/group?name=${i}">
                            <div class="hint-item hint-item-layout">
                                <img class="hint-item__search-icon search-icon" src="/images/icons/search_fff.png" alt="search-icon">
                                <div class="hint-item__content">${i}</div>
                            </div>
                        </a>`;
        }
    }
    output += `</div>`;
    return output;
}

function handleFormSubmit(event) { return document.querySelector('.search-input').value !== ""; }

let searchInputObj = document.querySelector('.search-input');
let hintListwrapper = document.querySelector('#group-live-searching-results');

searchInputObj.addEventListener('blur', () => { hintListwrapper.style.display = "none"; });

searchInputObj.addEventListener('click', () => { hintListwrapper.style.display = "block"; });

searchInputObj.addEventListener('keyup', () => {
    if (searchInputObj.value === "") {
        console.log("1");
        hintListwrapper.innerHTML = showHintList([]);
    } else {
        let data = [];
        let xmlhttp = new XMLHttpRequest();
        xmlhttp.onreadystatechange = function () {
            if (this.readyState == 4 && this.status == 200) {
                JSON.parse(this.responseText).forEach((obj) => { data.push(obj.name); });
                hintListwrapper.innerHTML = showHintList(data);
            }
        }
        xmlhttp.open("GET", "/search/group?name=" + searchInputObj.value, true);
        xmlhttp.send();
    }
});