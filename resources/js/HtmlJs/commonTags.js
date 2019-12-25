window.onload = function() {
    var commonTags = {

        mynavbar: `
        <div class="MyNavbar">
        <div class="row myRow" unselectable="on" onmousedown="return false;">
            <div class="col MyNavbarIcons text-center" id="companyHomePage">
                <a class="btn btn-default navbarIcons" href="../company-top-navbar/Home.html">
                    <img src="../../../resources/images/home.png" width="100%" />
                </a>
            </div>
            <div class="col MyNavbarIcons text-center" id="companyProductsPage">
                <a class="btn btn-default navbarIcons" href="../company-top-navbar/Products.html">
                    <img src="../../../resources/images/products.png" width="100%" />
                </a>
            </div>
            <div class="col MyNavbarIcons text-center">
                <a class="btn btn-default navbarIcons" href="#3">
                    <img src="../../../resources/images/shop_icon.png" width="100%" />
                </a>
            </div>
            <div class="col MyNavbarIcons text-center">
                <a class="btn btn-default navbarIcons" href="#4">
                    <img src="../../../resources/images/orders.png" width="100%" />
                </a>
            </div>
            <div class="col MyNavbarIcons text-center">
                <a class="btn btn-default navbarIcons" href="#5">
                    <img src="../../../resources/images/find_icon.png" width="100%" />
                </a>
            </div>
        </div>
        <div>
            <div class="row navbarNames" unselectable="on" onmousedown="return false;">
                <div class="col MyNavbarIcons text-center" id="companyHomePage">
                    <span class="text-overflow-centeraa">ANASAYFA</span>
                </div>
                <div class="col MyNavbarIcons text-center">
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
        </div>`,
        leftSide: `
        <div class="leftSide">
        <!--Logo Division-->
        <div class="logo-field text-center"><img class="logo" src="../../../resources/images/company_logo.png" width="100%" max-height=15% /></div>
        <!--Left Side Menu Division-->
        <div class="leftmenu">
            <div class="leftmenubuttons">
                <div id="accordion" unselectable="on" onmousedown="return false;">
                    <div class="card">
                        <div class="collapsed card-body leftSideSubmenuParentButtons" data-toggle="collapse" href="#collapseOne">
                            Hesap Bilgileri
                        </div>
                        <div id="collapseOne" class="collapse" data-parent="#accordion">
                            <div class="card-body leftSideSubmenuChildButtons">
                                <p class="leftSideSubmenuChildButton">Hesap Bilgileri</p>
                                <p class="leftSideSubmenuChildButton">Geçmiş Siparişler</p>
                                <p class="leftSideSubmenuChildButton">Kullanıcı Ayarları</p>
                                <a href="../company-left-menu/company-change-password.html" class="leftSideSubmenuChildButton">Şifremi Değiştir</a>
                            </div>
                        </div>
                    </div>
                    <div class="card">
                        <div class="collapsed card-body leftSideSubmenuParentButtons" data-toggle="collapse" href="#collapseTwo">
                            İletişim
                        </div>
                        <div id="collapseTwo" class="collapse" data-parent="#accordion">
                            <div class="card-body leftSideSubmenuChildButtons">
                                <p class="leftSideSubmenuChildButton">içerik2</p>
                            </div>
                        </div>
                    </div>
                    <div class="card">
                        <div class="collapsed card-body leftSideSubmenuParentButtons" data-toggle="collapse" href="#collapseThree">
                            Destek
                        </div>
                        <div id="collapseThree" class="collapse" data-parent="#accordion">
                            <div class="card-body leftSideSubmenuChildButtons">
                                <p class="leftSideSubmenuChildButton">içerik3</p>
                            </div>
                        </div>
                    </div>
                    <div class="card">
                        <div class="collapsed card-body leftSideSubmenuParentButtons" data-toggle="collapse" href="#collapseFour">
                            Mesaj
                        </div>
                        <div id="collapseFour" class="collapse" data-parent="#accordion">
                            <div class="card-body leftSideSubmenuChildButtons">
                                <p class="leftSideSubmenuChildButton">içerik4</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>



        </div>
        </div>
        `
    };

    $(function() {
        $("#MyNavbar").replaceWith(commonTags.mynavbar);
        $("#leftSide").replaceWith(commonTags.leftSide);
    });


}