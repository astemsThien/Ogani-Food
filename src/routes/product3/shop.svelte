<script>
    import {cart,  product3} from '$lib/config/cart.js';

const addToCart = (product) => {
    for(let item of $cart) {
            if(item.id === product.id) {
                product.quantity += 1
                $cart = $cart;
                return;
            }
    }
    $cart = [...$cart, product]
}
</script>

<!-- Breadcrumb Section Begin -->
<section class="breadcrumb-section set-bg">
    <div class="container" style="background-color: #7fad39; padding: 10px;">
        <div class="row">
            <div class="col-lg-12 text-center">
                <div class="breadcrumb__text">
                    <h2>Organi Shop</h2>
                    <div class="breadcrumb__option">
                        <a href="./index.html">Home</a>
                        <span>Shop</span>
                    </div>
                </div>
            </div>
        </div>
    </div>
</section>
<!-- Breadcrumb Section End -->

<!-- Product Section Begin -->
<section class="product spad">
    <div class="container">
        <div class="row">
            <div class="col-lg-3 col-md-5">
                <div class="sidebar">
                    <div class="sidebar__item">
                        <h4>Department</h4>
                        <ul>
                            <li><a href="/in:">Fresh Meat</a></li>
                            <li><a href="/in:">Vegetables</a></li>
                            <li><a href="/in:">Fruit & Nut Gifts</a></li>
                            <li><a href="/in:">Fresh Berries</a></li>
                            <li><a href="/in:">Ocean Foods</a></li>
                            <li><a href="/in:">Butter & Eggs</a></li>
                            <li><a href="/in:">Fastfood</a></li>
                            <li><a href="/in:">Fresh Onion</a></li>
                            <li><a href="/in:">Papayaya & Crisps</a></li>
                            <li><a href="/in:">Oatmeal</a></li>
                        </ul>
                    </div>
                    <div class="sidebar__item">
                        <h4>Price</h4>
                        <div class="price-range-wrap">
                            <div class="price-range ui-slider ui-corner-all ui-slider-horizontal ui-widget ui-widget-content"
                                data-min="10" data-max="540">
                                <div class="ui-slider-range ui-corner-all ui-widget-header"></div>
                                <span tabindex="0" class="ui-slider-handle ui-corner-all ui-state-default"></span>
                                <span tabindex="0" class="ui-slider-handle ui-corner-all ui-state-default"></span>
                            </div>
                            <div class="range-slider">
                                <div class="price-input">
                                    <input type="text" id="minamount">
                                    <input type="text" id="maxamount">
                                </div>
                            </div>
                        </div>
                    </div>
                    <div class="sidebar__item sidebar__item__color--option">
                        <h4>Colors</h4>
                        <div class="sidebar__item__color sidebar__item__color--white">
                            <label for="white">
                                White
                                <input type="radio" id="white">
                            </label>
                        </div>
                        <div class="sidebar__item__color sidebar__item__color--gray">
                            <label for="gray">
                                Gray
                                <input type="radio" id="gray">
                            </label>
                        </div>
                        <div class="sidebar__item__color sidebar__item__color--red">
                            <label for="red">
                                Red
                                <input type="radio" id="red">
                            </label>
                        </div>
                        <div class="sidebar__item__color sidebar__item__color--black">
                            <label for="black">
                                Black
                                <input type="radio" id="black">
                            </label>
                        </div>
                        <div class="sidebar__item__color sidebar__item__color--blue">
                            <label for="blue">
                                Blue
                                <input type="radio" id="blue">
                            </label>
                        </div>
                        <div class="sidebar__item__color sidebar__item__color--green">
                            <label for="green">
                                Green
                                <input type="radio" id="green">
                            </label>
                        </div>
                    </div>
                    <div class="sidebar__item">
                        <h4>Popular Size</h4>
                        <div class="sidebar__item__size">
                            <label for="large">
                                Large
                                <input type="radio" id="large">
                            </label>
                        </div>
                        <div class="sidebar__item__size">
                            <label for="medium">
                                Medium
                                <input type="radio" id="medium">
                            </label>
                        </div>
                        <div class="sidebar__item__size">
                            <label for="small">
                                Small
                                <input type="radio" id="small">
                            </label>
                        </div>
                        <div class="sidebar__item__size">
                            <label for="tiny">
                                Tiny
                                <input type="radio" id="tiny">
                            </label>
                        </div>
                    </div>
                </div>
            </div>
            <div class="col-lg-9 col-md-7">
                <div class="filter__item">
                    <div class="row">
                        <div class="col-lg-4 col-md-5">
                            <div class="filter__sort">
                                <span>Sort By</span>
                                <select>
                                    <option value="0">Default</option>
                                    <option value="0">Default</option>
                                </select>
                            </div>
                        </div>
                        <div class="col-lg-4 col-md-4">
                            <div class="filter__found">
                                <h6><span>16</span> Products found</h6>
                            </div>
                        </div>
                        <div class="col-lg-4 col-md-3">
                            <div class="filter__option">
                                <span class="icon_grid-2x2"></span>
                                <span class="icon_ul"></span>
                            </div>
                        </div>
                    </div>
                </div>
                <div class="row">
                    {#each $product3 as product}
                    <div class="col-lg-4 col-md-6 col-sm-6">
                        <div class="product__item">
                            <div class="product__item__pic set-bg">
                                <img src={product.image} alt="">
                                <ul class="product__item__pic__hover">
                                    <li><a href="/"><i class="fa fa-heart"></i></a></li>
                                    <li><button ><i class="fa fa-retweet"></i></button></li>
                                    <li><button on:click={() => addToCart(product)}><i class="fa fa-shopping-cart"></i></button></li>
                                </ul>
                            </div>
                            <div class="product__item__text">
                                <h6><a href="/">{product.name}</a></h6>
                                <h5>{product.price} ??</h5>
                            </div>
                        </div>
                    </div>
                    {/each}
                </div>
                <div class="product__pagination">
                    <a href="/product2"><i class="fa fa-long-arrow-left"></i></a>
                    <a href="/product1">1</a>
                    <a href="/product2">2</a>
                    <a href="/product3" style="background-color: #7fad39; color: white;">3</a>
                </div>
            </div>
        </div>
    </div>
</section>
<!-- Product Section End -->