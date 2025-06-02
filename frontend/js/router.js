document.addEventListener('DOMContentLoaded', () => {

    // --- Navigation: from part1 to part3 ---
    const nextBtn = document.getElementById('nextBtn');
    if (nextBtn) {
        nextBtn.addEventListener('click', goPart3);
    }

    // --- Navigation: from part3 back to part1 ---
    const backBtn = document.getElementById('backBtn');
    if (backBtn) {
        backBtn.addEventListener('click', goPart1);
    }

    // --- Navigation: from 1st agreement to Part1 ---
    const startBtn = document.getElementById('formStartBtn');
    if (startBtn) {
        startBtn.addEventListener('click', goPart1);
    }

    // --- Navigation: from 1st agreement to Home ---
    const backHomeBtn = document.getElementById('backhomeBtn');
    if (backHomeBtn) {
        backHomeBtn.addEventListener('click', goHome);
    }

    // go to first agreement page 1
    const goToAgreementBtn1 = document.getElementById('goToAgreementBtn1');
    if (goToAgreementBtn1) {
        goToAgreementBtn1.addEventListener('click', goAgreement);
    }

    // go to first agreement page 2
    const goToAgreementBtn2 = document.getElementById('goToAgreementBtn2');
    if (goToAgreementBtn2) {
        goToAgreementBtn2.addEventListener('click', goAgreement);
    }

    // go to agreeDownload page
    const goToAgreeDownloadBtn = document.getElementById('goToAgreeDownloadBtn');
    if (goToAgreeDownloadBtn) {
        goToAgreeDownloadBtn.addEventListener('click', goLastAgreement);
    }

    // Header navigations
    // header navigation: go to home page
    const headerHomeBtn = document.getElementById('headerHomeBtn');
    if (headerHomeBtn) {
        headerHomeBtn.addEventListener('click', goHome);
    }

    // header navigation: go to agreement page
    const headerAgreementBtn = document.getElementById('headerAgreementBtn');
    if (headerAgreementBtn) {
        headerAgreementBtn.addEventListener('click', goAgreement);
    }

    // Hooter navigations
    // footer navigation: go to home page
    const footerHomeBtn = document.getElementById('footerHomeBtn');
    if (footerHomeBtn) {
        footerHomeBtn.addEventListener('click', goHome);
    }
    // footer navigation: go to agreement page
    const footerAgreementBtn = document.getElementById('footerAgreementBtn');
    if (footerAgreementBtn) {
        footerAgreementBtn.addEventListener('click', goAgreement);
    }
    // footer navigation: go to terms of service page
    const footerTermsBtn = document.getElementById('footerTermsBtn');
    if (footerTermsBtn) {
        footerTermsBtn.addEventListener('click', goTermsOfService);
    }
});

/**
 * 現在のページのパスに応じて、ホームページ(index.html)へ遷移する
 */
function goHome() {
    // /html/以下のページの場合、ひとつ上のフォルダへ戻す
    if (window.location.pathname.includes('/html/')) {
        window.location.href = "../index.html";
    } else {
        window.location.href = "index.html";
    }
}

/**
 * 現在のページのパスに応じて、最初の同意ページ(agreeAtFirst.html)へ遷移する
 */
function goAgreement() {
    // /html/ 以下の場合は同じフォルダ内にあるのでそのまま
    if (window.location.pathname.includes('/html/')) {
        window.location.href = "agreeAtFirst.html";
    } else {
        // index.html などの場合は html フォルダ以下へ
        window.location.href = "html/agreeAtFirst.html";
    }
}

// go to last agreement page function
function goLastAgreement() {
    // /html/ 以下の場合は同じフォルダ内にあるのでそのまま
    if (window.location.pathname.includes('/html/')) {
        window.location.href = "agreeDownload.html";
    } else {
        // index.html などの場合は html フォルダ以下へ
        window.location.href = "html/agreeDownload.html";
    }
}

// go to part1 page function
function goPart1() {
    // /html/ 以下の場合は同じフォルダ内にあるのでそのまま
    if (window.location.pathname.includes('/html/')) {
        window.location.href = "part1.html";
    } else {
        // index.html などの場合は html フォルダ以下へ
        window.location.href = "html/part1.html";
    }
}
// go to part3 page function
function goPart3() {
    // /html/ 以下の場合は同じフォルダ内にあるのでそのまま
    if (window.location.pathname.includes('/html/')) {
        window.location.href = "part3.html";
    } else {
        // index.html などの場合は html フォルダ以下へ
        window.location.href = "html/part3.html";
    }
}
// go to terms of service page function
function goTermsOfService() {
    // /html/ 以下の場合は同じフォルダ内にあるのでそのまま
    if (window.location.pathname.includes('/html/')) {
        window.location.href = "termsOfService.html";
    } else {
        // index.html などの場合は html フォルダ以下へ
        window.location.href = "html/termsOfService.html";
    }
}