let majorList = [
    "Công nghệ thông tin",
    "Điện tử viễn thông",
    "Hệ thống thông tin",
    "Khoa học máy tính",
    "Kỹ thuật hóa học",
    "Kỹ thuật máy tính",
    "Kỹ thuật sinh học",
    "Toán tin"
];

function generateMajors(majorList) {
    let temp;
    temp = document.getElementById("major-list");
    for (let i = 0; i < majorList.length; ++i) temp.innerHTML = temp.innerHTML + '<option value="'+ majorList[i] + '">' + majorList[i] + '</option>';
}

function generateDate() {
    let i, temp;
    temp = document.getElementById("date");
    for(i = 1; i <= 31; ++i) temp.innerHTML = temp.innerHTML + '<option value="'+ i + '">' + i.toString() + '</option>';
    temp = document.getElementById("year");
    for(i = 1900; i <= new Date().getFullYear(); ++i) temp.innerHTML = temp.innerHTML + '<option value="'+ i + '">' + i.toString() + '</option>';
}

function generateDynamicData() {
    generateDate();
    generateMajors(majorList);
}

window.onload = generateDynamicData;