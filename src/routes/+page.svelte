<script>
    import Banner2 from './images/banner/banner-2.jpg';
    import Banner1 from './images/banner/banner-1.jpg';
    import feature1 from './images/featured/feature-1.jpg';
    import feature2 from './images/featured/feature-2.jpg';
    import feature3 from './images/featured/feature-3.jpg';
    import feature4 from './images/featured/feature-4.jpg';
    import feature5 from './images/featured/feature-5.jpg';
    import feature6 from './images/featured/feature-6.jpg';
    import feature7 from './images/featured/feature-7.jpg';
    import feature8 from './images/featured/feature-8.jpg';
    import cat1 from './images/categories/cat-1.jpg';
    import cat2 from './images/categories/cat-2.jpg';
    import cat3 from './images/categories/cat-3.jpg';
    import cat4 from './images/categories/cat-4.jpg';
    import cat5 from './images/categories/cat-5.jpg';
    import lp1 from './images/latest-product/lp-1.jpg';
    import lp2 from './images/latest-product/lp-2.jpg';
    import lp3 from './images/latest-product/lp-3.jpg';
    import blog1 from './images/blog/blog-1.jpg';
    import blog2 from './images/blog/blog-2.jpg';
    import blog3 from './images/blog/blog-3.jpg';
    import blog4 from './images/blog/blog-4.jpg';
    import blog5 from './images/blog/blog-5.jpg';
    import blog6 from './images/blog/blog-6.jpg';
</script>


<section class="hero hero-normal">
    <div class="container">
        <div class="row">
            <div class="col-lg-12">
                <div class="hero__item set-bg" style="background-image: url('https://cdn.pixabay.com/photo/2022/04/30/19/12/cooking-banner-7166200__480.jpg');display: flex; justify-content: center; align-items: center;">
                    <div class="hero__text">
                        <span style="display: flex; justify-content: center; align-items: center;">FRUIT FRESH</span>
                        <h2>Vegetable <br />100% Organic</h2>
                        <p>Free Pickup and Delivery Available</p>
                        <a href="/" class="primary-btn" style="display: flex; justify-content: center; align-items: center;">SHOP NOW</a>
                    </div>
                </div>
            </div>
        </div>
    </div>
</section>

<!-- Categories Section Begin -->
<section class="categories">
    <div class="container">
        <div class="row">
            <div class="categories__slider owl-carousel">
                <div class="col-lg-3">
                    <div class="categories__item set-bg" >
                        <img src={cat1} alt="">
                        <h5><a href="/">Fresh Fruit</a></h5>
                    </div>
                </div>
                <div class="col-lg-3">
                    <div class="categories__item set-bg" >
                        <img src={cat2} alt="">
                        <h5><a href="/">Dried Fruit</a></h5>
                    </div>
                </div>
                <div class="col-lg-3">
                    <div class="categories__item set-bg" >
                        <img src={cat3} alt="">
                        <h5><a href="/">Vegetables</a></h5>
                    </div>
                </div>
                <div class="col-lg-3">
                    <div class="categories__item set-bg" >
                        <img src={cat4} alt="">
                        <h5><a href="/">drink fruits</a></h5>
                    </div>
                </div>
                <div class="col-lg-3">
                    <div class="categories__item set-bg" >
                        <img src={cat5} alt="">
                        <h5><a href="/">drink fruits</a></h5>
                    </div>
                </div>
            </div>
        </div>
    </div>
</section>
<!-- Categories Section End -->

<!-- Featured Section Begin -->
<section class="featured spad">
    <div class="container">
        <div class="row">
            <div class="col-lg-12">
                <div class="section-title">
                    <h2>Featured Product</h2>
                </div>
                <div class="featured__controls">
                    <ul>
                        <li class="active" data-filter="*">All</li>
                        <li data-filter=".oranges">Oranges</li>
                        <li data-filter=".fresh-meat">Fresh Meat</li>
                        <li data-filter=".vegetables">Vegetables</li>
                        <li data-filter=".fastfood">Fastfood</li>
                    </ul>
                </div>
            </div>
        </div>
        <div class="row featured__filter">
            <div class="col-lg-3 col-md-4 col-sm-6 mix oranges fresh-meat">
                <div class="featured__item">
                    <div class="featured__item__pic set-bg" >
                        <img src={feature1} alt="">
                        <ul class="featured__item__pic__hover">
                            <li><a href="/"><i class="fa fa-heart"></i></a></li>
                            <li><a href="/"><i class="fa fa-retweet"></i></a></li>
                            <li><a href="/"><i class="fa fa-shopping-cart"></i></a></li>
                        </ul>
                    </div>
                    <div class="featured__item__text">
                        <h6><a href="/">Crab Pool Security</a></h6>
                        <h5>$30.00</h5>
                    </div>
                </div>
            </div>
            <div class="col-lg-3 col-md-4 col-sm-6 mix vegetables fastfood">
                <div class="featured__item">
                    <div class="featured__item__pic set-bg" >
                        <img src={feature2} alt="">
                        <ul class="featured__item__pic__hover">
                            <li><a href="/"><i class="fa fa-heart"></i></a></li>
                            <li><a href="/"><i class="fa fa-retweet"></i></a></li>
                            <li><a href="/"><i class="fa fa-shopping-cart"></i></a></li>
                        </ul>
                    </div>
                    <div class="featured__item__text">
                        <h6><a href="/">Crab Pool Security</a></h6>
                        <h5>$30.00</h5>
                    </div>
                </div>
            </div>
            <div class="col-lg-3 col-md-4 col-sm-6 mix vegetables fresh-meat">
                <div class="featured__item">
                    <div class="featured__item__pic set-bg" >
                        <img src={feature3} alt="">
                        <ul class="featured__item__pic__hover">
                            <li><a href="/"><i class="fa fa-heart"></i></a></li>
                            <li><a href="/"><i class="fa fa-retweet"></i></a></li>
                            <li><a href="/"><i class="fa fa-shopping-cart"></i></a></li>
                        </ul>
                    </div>
                    <div class="featured__item__text">
                        <h6><a href="/">Crab Pool Security</a></h6>
                        <h5>$30.00</h5>
                    </div>
                </div>
            </div>
            <div class="col-lg-3 col-md-4 col-sm-6 mix fastfood oranges">
                <div class="featured__item">
                    <div class="featured__item__pic set-bg" >
                        <img src={feature4} alt="">
                        <ul class="featured__item__pic__hover">
                            <li><a href="/"><i class="fa fa-heart"></i></a></li>
                            <li><a href="/"><i class="fa fa-retweet"></i></a></li>
                            <li><a href="/"><i class="fa fa-shopping-cart"></i></a></li>
                        </ul>
                    </div>
                    <div class="featured__item__text">
                        <h6><a href="/">Crab Pool Security</a></h6>
                        <h5>$30.00</h5>
                    </div>
                </div>
            </div>
            <div class="col-lg-3 col-md-4 col-sm-6 mix fresh-meat vegetables">
                <div class="featured__item">
                    <div class="featured__item__pic set-bg" >
                        <img src={feature5} alt="">
                        <ul class="featured__item__pic__hover">
                            <li><a href="/"><i class="fa fa-heart"></i></a></li>
                            <li><a href="/"><i class="fa fa-retweet"></i></a></li>
                            <li><a href="/"><i class="fa fa-shopping-cart"></i></a></li>
                        </ul>
                    </div>
                    <div class="featured__item__text">
                        <h6><a href="/">Crab Pool Security</a></h6>
                        <h5>$30.00</h5>
                    </div>
                </div>
            </div>
            <div class="col-lg-3 col-md-4 col-sm-6 mix oranges fastfood">
                <div class="featured__item">
                    <div class="featured__item__pic set-bg" >
                        <img src={feature6} alt="">
                        <ul class="featured__item__pic__hover">
                            <li><a href="/"><i class="fa fa-heart"></i></a></li>
                            <li><a href="/"><i class="fa fa-retweet"></i></a></li>
                            <li><a href="/"><i class="fa fa-shopping-cart"></i></a></li>
                        </ul>
                    </div>
                    <div class="featured__item__text">
                        <h6><a href="/">Crab Pool Security</a></h6>
                        <h5>$30.00</h5>
                    </div>
                </div>
            </div>
            <div class="col-lg-3 col-md-4 col-sm-6 mix fresh-meat vegetables">
                <div class="featured__item">
                    <div class="featured__item__pic set-bg" >
                        <img src={feature7} alt="">
                        <ul class="featured__item__pic__hover">
                            <li><a href="/"><i class="fa fa-heart"></i></a></li>
                            <li><a href="/"><i class="fa fa-retweet"></i></a></li>
                            <li><a href="/"><i class="fa fa-shopping-cart"></i></a></li>
                        </ul>
                    </div>
                    <div class="featured__item__text">
                        <h6><a href="/">Crab Pool Security</a></h6>
                        <h5>$30.00</h5>
                    </div>
                </div>
            </div>
            <div class="col-lg-3 col-md-4 col-sm-6 mix fastfood vegetables">
                <div class="featured__item">
                    <div class="featured__item__pic set-bg" >
                        <img src={feature8} alt="">
                        <ul class="featured__item__pic__hover">
                            <li><a href="/"><i class="fa fa-heart"></i></a></li>
                            <li><a href="/"><i class="fa fa-retweet"></i></a></li>
                            <li><a href="/"><i class="fa fa-shopping-cart"></i></a></li>
                        </ul>
                    </div>
                    <div class="featured__item__text">
                        <h6><a href="/">Crab Pool Security</a></h6>
                        <h5>$30.00</h5>
                    </div>
                </div>
            </div>
        </div>
    </div>
</section>
<!-- Featured Section End -->

<!-- Banner Begin -->
<div class="banner">
    <div class="container">
        <div class="row">
            <div class="col-lg-6 col-md-6 col-sm-6">
                <div class="banner__pic">
                    <img src={Banner1} alt="">
                </div>
            </div>
            <div class="col-lg-6 col-md-6 col-sm-6">
                <div class="banner__pic">
                    <img src={Banner2} alt="">
                </div>
            </div>
        </div>
    </div>
</div>
<!-- Banner End -->

<!-- Latest Product Section Begin -->
<section class="latest-product spad">
    <div class="container">
        <div class="row">
            <div class="col-lg-4 col-md-6">
                <div class="latest-product__text">
                    <h4>Latest Products</h4>
                    <div class="latest-product__slider owl-carousel">
                        <div class="latest-prdouct__slider__item">
                            <a href="/" class="latest-product__item">
                                <div class="latest-product__item__pic">
                                    <img src={lp1} alt="">
                                </div>
                                <div class="latest-product__item__text">
                                    <h6>Crab Pool Security</h6>
                                    <span>$30.00</span>
                                </div>
                            </a>
                            <a href="/" class="latest-product__item">
                                <div class="latest-product__item__pic">
                                    <img src={lp2} alt="">
                                </div>
                                <div class="latest-product__item__text">
                                    <h6>Crab Pool Security</h6>
                                    <span>$30.00</span>
                                </div>
                            </a>
                            <a href="/" class="latest-product__item">
                                <div class="latest-product__item__pic">
                                    <img src={lp3} alt="">
                                </div>
                                <div class="latest-product__item__text">
                                    <h6>Crab Pool Security</h6>
                                    <span>$30.00</span>
                                </div>
                            </a>
                        </div>
                        <div class="latest-prdouct__slider__item">
                            <a href="/" class="latest-product__item">
                                <div class="latest-product__item__pic">
                                    <img src={lp1} alt="">
                                </div>
                                <div class="latest-product__item__text">
                                    <h6>Crab Pool Security</h6>
                                    <span>$30.00</span>
                                </div>
                            </a>
                            <a href="/" class="latest-product__item">
                                <div class="latest-product__item__pic">
                                    <img src={lp2} alt="">
                                </div>
                                <div class="latest-product__item__text">
                                    <h6>Crab Pool Security</h6>
                                    <span>$30.00</span>
                                </div>
                            </a>
                            <a href="/" class="latest-product__item">
                                <div class="latest-product__item__pic">
                                    <img src={lp3} alt="">
                                </div>
                                <div class="latest-product__item__text">
                                    <h6>Crab Pool Security</h6>
                                    <span>$30.00</span>
                                </div>
                            </a>
                        </div>
                    </div>
                </div>
            </div>
            <div class="col-lg-4 col-md-6">
                <div class="latest-product__text">
                    <h4>Top Rated Products</h4>
                    <div class="latest-product__slider owl-carousel">
                        <div class="latest-prdouct__slider__item">
                            <a href="/" class="latest-product__item">
                                <div class="latest-product__item__pic">
                                    <img src={lp1} alt="">
                                </div>
                                <div class="latest-product__item__text">
                                    <h6>Crab Pool Security</h6>
                                    <span>$30.00</span>
                                </div>
                            </a>
                            <a href="/" class="latest-product__item">
                                <div class="latest-product__item__pic">
                                    <img src={lp2} alt="">
                                </div>
                                <div class="latest-product__item__text">
                                    <h6>Crab Pool Security</h6>
                                    <span>$30.00</span>
                                </div>
                            </a>
                            <a href="/" class="latest-product__item">
                                <div class="latest-product__item__pic">
                                    <img src={lp3} alt="">
                                </div>
                                <div class="latest-product__item__text">
                                    <h6>Crab Pool Security</h6>
                                    <span>$30.00</span>
                                </div>
                            </a>
                        </div>
                        <div class="latest-prdouct__slider__item">
                            <a href="/" class="latest-product__item">
                                <div class="latest-product__item__pic">
                                    <img src={lp1} alt="">
                                </div>
                                <div class="latest-product__item__text">
                                    <h6>Crab Pool Security</h6>
                                    <span>$30.00</span>
                                </div>
                            </a>
                            <a href="/" class="latest-product__item">
                                <div class="latest-product__item__pic">
                                    <img src={lp2} alt="">
                                </div>
                                <div class="latest-product__item__text">
                                    <h6>Crab Pool Security</h6>
                                    <span>$30.00</span>
                                </div>
                            </a>
                            <a href="/" class="latest-product__item">
                                <div class="latest-product__item__pic">
                                    <img src={lp3} alt="">
                                </div>
                                <div class="latest-product__item__text">
                                    <h6>Crab Pool Security</h6>
                                    <span>$30.00</span>
                                </div>
                            </a>
                        </div>
                    </div>
                </div>
            </div>
            <div class="col-lg-4 col-md-6">
                <div class="latest-product__text">
                    <h4>Review Products</h4>
                    <div class="latest-product__slider owl-carousel">
                        <div class="latest-prdouct__slider__item">
                            <a href="/" class="latest-product__item">
                                <div class="latest-product__item__pic">
                                    <img src={lp1} alt="">
                                </div>
                                <div class="latest-product__item__text">
                                    <h6>Crab Pool Security</h6>
                                    <span>$30.00</span>
                                </div>
                            </a>
                            <a href="/" class="latest-product__item">
                                <div class="latest-product__item__pic">
                                    <img src={lp2} alt="">
                                </div>
                                <div class="latest-product__item__text">
                                    <h6>Crab Pool Security</h6>
                                    <span>$30.00</span>
                                </div>
                            </a>
                            <a href="/" class="latest-product__item">
                                <div class="latest-product__item__pic">
                                    <img src={lp3} alt="">
                                </div>
                                <div class="latest-product__item__text">
                                    <h6>Crab Pool Security</h6>
                                    <span>$30.00</span>
                                </div>
                            </a>
                        </div>
                        <div class="latest-prdouct__slider__item">
                            <a href="/" class="latest-product__item">
                                <div class="latest-product__item__pic">
                                    <img src={lp1} alt="">
                                </div>
                                <div class="latest-product__item__text">
                                    <h6>Crab Pool Security</h6>
                                    <span>$30.00</span>
                                </div>
                            </a>
                            <a href="/" class="latest-product__item">
                                <div class="latest-product__item__pic">
                                    <img src={lp2} alt="">
                                </div>
                                <div class="latest-product__item__text">
                                    <h6>Crab Pool Security</h6>
                                    <span>$30.00</span>
                                </div>
                            </a>
                            <a href="/" class="latest-product__item">
                                <div class="latest-product__item__pic">
                                    <img src={lp3} alt="">
                                </div>
                                <div class="latest-product__item__text">
                                    <h6>Crab Pool Security</h6>
                                    <span>$30.00</span>
                                </div>
                            </a>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</section>
<!-- Latest Product Section End -->

<!-- Blog Section Begin -->
<section class="from-blog spad">
    <div class="container">
        <div class="row">
            <div class="col-lg-12">
                <div class="section-title from-blog__title">
                    <h2>From The Blog</h2>
                </div>
            </div>
        </div>
        <div class="row">
            <div class="col-lg-4 col-md-4 col-sm-6">
                <div class="blog__item">
                    <div class="blog__item__pic">
                        <img src={blog1} alt="">
                    </div>
                    <div class="blog__item__text">
                        <ul>
                            <li><i class="fa fa-calendar-o"></i> May 4,2019</li>
                            <li><i class="fa fa-comment-o"></i> 5</li>
                        </ul>
                        <h5><a href="/">Cooking tips make cooking simple</a></h5>
                        <p>Sed quia non numquam modi tempora indunt ut labore et dolore magnam aliquam quaerat </p>
                    </div>
                </div>
            </div>
            <div class="col-lg-4 col-md-4 col-sm-6">
                <div class="blog__item">
                    <div class="blog__item__pic">
                        <img src={blog2} alt="">
                    </div>
                    <div class="blog__item__text">
                        <ul>
                            <li><i class="fa fa-calendar-o"></i> May 4,2019</li>
                            <li><i class="fa fa-comment-o"></i> 5</li>
                        </ul>
                        <h5><a href="/">6 ways to prepare breakfast for 30</a></h5>
                        <p>Sed quia non numquam modi tempora indunt ut labore et dolore magnam aliquam quaerat </p>
                    </div>
                </div>
            </div>
            <div class="col-lg-4 col-md-4 col-sm-6">
                <div class="blog__item">
                    <div class="blog__item__pic">
                        <img src={blog3} alt="">
                    </div>
                    <div class="blog__item__text">
                        <ul>
                            <li><i class="fa fa-calendar-o"></i> May 4,2019</li>
                            <li><i class="fa fa-comment-o"></i> 5</li>
                        </ul>
                        <h5><a href="/">Visit the clean farm in the US</a></h5>
                        <p>Sed quia non numquam modi tempora indunt ut labore et dolore magnam aliquam quaerat </p>
                    </div>
                </div>
            </div>
        </div>
    </div>
</section>
<!-- Blog Section End -->