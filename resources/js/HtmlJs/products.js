window.onload = function() {

    var header = `
    <div class="row myRow" unselectable="on" onmousedown="return false;">
    <div class="col MyNavbarIcons text-center" id="companyHomePage">
        <a class="btn btn-default navbarIcons" href="Home.html">
            <img src="resources/images/home.png" width="100%" />
        </a>
    </div>
    <div class="col MyNavbarIcons text-center" id="companyProductsPage">
        <a class="btn btn-default navbarIcons" href="Products.html">
            <img src="resources/images/products.png" width="100%" />
        </a>
    </div>
    <div class="col MyNavbarIcons text-center">
        <a class="btn btn-default navbarIcons" href="#3">
            <img src="resources/images/shop_icon.png" width="100%" />
        </a>
    </div>
    <div class="col MyNavbarIcons text-center">
        <a class="btn btn-default navbarIcons" href="#4">
            <img src="resources/images/orders.png" width="100%" />
        </a>
    </div>
    <div class="col MyNavbarIcons text-center">
        <a class="btn btn-default navbarIcons" href="#5">
            <img src="resources/images/find_icon.png" width="100%" />
        </a>
    </div>
    </div>
    <div>
        <div class="row navbarNames" unselectable="on" onmousedown="return false;">
            <div class="col MyNavbarIcons text-center" id="companyHomePage">
                <span class="text-overflow-centeraa">ANASAYFA</span>
            </div>
            <div class="col MyNavbarIcons text-center" id="companyProductsPage">
                <span class="text-overflow-centeraa">ÜRÜNLER</span>
            </div>
            <div class="col MyNavbarIcons text-center">
                <span class="text-overflow-centeraa">MAĞAZALAR</span>
            </div>
            <div class="col MyNavbarIcons text-center">
                <span class="text-overflow-centeraa">SİPARİŞLERİM</span>
            </div>
            <div class="col MyNavbarIcons text-center">
                <span class="text-overflow-centeraa">BUL</span>
            </div>
        </div>
    </div>
    `;
    $(function() {
        $("#MyNavbarHeader").html(header);
    });

    $("#MyNavbarHeader").click(function(e) {
        console.log("dsadasdasdasd");
    });
}