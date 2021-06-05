window.addEventListener("load", ()=> {
    document.querySelector(".main").classList.remove("hidden");
    document.querySelector(".home-section").classList.add("active");
    // Page Loader
    document.querySelector(".page-loader").classList.add("fade-out");
    setTimeout(()=>{
        document.querySelector(".page-loader").style.display = "none";
    },600);
})

// About 탭 전환 기능
const tabs = document.querySelector(".about-tabs"),
aboutSection = document.querySelector(".about-section");

tabs.addEventListener("click", (e) =>{
    if (e.target.classList.contains("tab-item") 
    && !e.target.classList.contains("active")){
        tabs.querySelector(".active").classList.remove("active");
        e.target.classList.add("active");

        const target = e.target.getAttribute("data-target");
        aboutSection.querySelector(".tab-content.active").classList.remove("active");
        aboutSection.querySelector(target).classList.add("active");
    }
});

// 포트폴리오 썸네일 클릭 시 상세페이지 보이게 
document.addEventListener("click", (e) =>{
    if (e.target.classList.contains("view-project-btn")){
        togglePortfolioPopup();
        // document.querySelector(".portfolio-popub").scrollTo(0,0);
        portfolioItemDetails(e.target.parentElement);
    } 
})
function togglePortfolioPopup() {
    document.querySelector(".portfolio-popup").classList.toggle("open");    
    document.body.classList.toggle("hide-scrolling");
    document.querySelector(".main").classList.toggle("fade-out");
}
document.querySelector(".pp-close").addEventListener("click", togglePortfolioPopup);

// 창 밖을 클릭하면 모달창이 닫히게
document.addEventListener("click", (e) =>{
    if (e.target.classList.contains("pp-inner")){
        togglePortfolioPopup();
    } 
})


// 썸네일 이미지 그대로 상세페이지로
function portfolioItemDetails(portfolioItem) {
    document.querySelector(".pp-thumbnail img").src = 
    portfolioItem.querySelector(".portfolio-item-thumbnail img").src;

    
    document.querySelector(".pp-header h3").innerHTML =
    portfolioItem.querySelector(".portfolio-item-title").innerHTML;
    

    document.querySelector(".pp-body").innerHTML =
    portfolioItem.querySelector(".portfolio-item-details").innerHTML;
    
}

//토글 여닫기
const navToggler = document.querySelector(".nav-toggler");
navToggler.addEventListener("click", () => {
    hideSection();
    toggleNavBar();
    document.body.classList.toggle("hide-scrolling");
});

function hideSection() {
    document.querySelector("section.active").classList.toggle("fade-out");
}
function toggleNavBar() {
    document.querySelector(".header").classList.toggle("active");
}

// Active Section 
document.addEventListener("click", (e)=>{
    if(e.target.classList.contains("link-item") && e.target.hash !== ""){
        // activate the overlay to prevent multiple clicks
        document.querySelector(".overlay").classList.add("active");
        navToggler.classList.add("hide");
        if(e.target.classList.contains("nav-item")){
            toggleNavBar();
        }
        else {
            hideSection();
            document.body.classList.add("hide-scrolling");
        }
        setTimeout(() => {
            document.querySelector("section.active").classList.remove("active", "fade-out");
            document.querySelector(e.target.hash).classList.add("active");
            window.scrollTo(0,0);
            document.body.classList.remove("hide-scrolling");
            navToggler.classList.remove("hide");
            document.querySelector(".overlay").classList.remove("active");
        },500);
    }
});