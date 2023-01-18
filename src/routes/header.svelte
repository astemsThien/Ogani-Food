<script>
import { initializeApp } from "firebase/app";
import { getAuth, signInWithEmailAndPassword, signOut, onAuthStateChanged } from "firebase/auth";
import { onMount } from 'svelte';

let email = ''; 
// let username = '';
// let phone = '';
let password = '';
let user = null;
const firebaseConfig = {
    apiKey: "AIzaSyDpaJJ09_8vdpRDJsG22OJB75bsx4jwdtg",
    authDomain: "yotube-firebase.firebaseapp.com",
    projectId: "yotube-firebase",
    storageBucket: "yotube-firebase.appspot.com",
    messagingSenderId: "817100251711",
    appId: "1:817100251711:web:20765beceeab731a10ce8a"
};

const app = initializeApp(firebaseConfig);

// Login firebase
// const logIn = () => {
//         const auth = getAuth(app);
//         signInWithEmailAndPassword(auth, email, password)
//             .then((userCredential) => {
//                 user = userCredential.user;
//             })
//             .catch((error) => {
//                 const errorCode = error.code;
//                 const errorMessage = error.message;
//                 console.log(errorCode, errorMessage);
//             });
//     };
    // LogOut firebase
    const logOut = async () => {
        const auth = getAuth(app);
        signOut(auth).then(() => {
            user = null;
        });
    };
    // SignUp firebase
    // const signUp = () => {
    //     const auth = getAuth(app);
    //     createUserWithEmailAndPassword(auth, email, password)
    //         .then((userCredential) => {
    //           // Signed in 
    //             user = userCredential.user;
    //         })
    //         .catch((error) => {
    //             const errorCode = error.code;
    //             const errorMessage = error.message;
    //             console.log(errorCode, errorMessage);
    //         });
    // };
    //
    onMount(async () => {
        const auth = getAuth(app);
        onAuthStateChanged(auth, (newUser) => {
            user = newUser;
        });
    })
</script>

<!-- Header Section Begin -->
<header class="header">
    <div class="header__top">
        <div class="container">
            <div class="row">
                
                <div class="col-lg-6 col-md-6">
                    <div class="header__top__left">
                        <ul>
                            {#if !user}
                            <li><i class="fa fa-envelope"></i>Hi, name@gmail.com</li>
                            {:else}
                            <li><i class="fa fa-envelope"></i>Hi, {user.email}</li>
                            {/if}
                            <li>Free Shipping for all Order of 99k</li>
                        </ul>
                    </div>
                </div>
                <div class="col-lg-6 col-md-6">
                    {#if user}
                    <div class="header__top__right">
                        <div class="header__top__right__social">
                            <a href="/"><i class="fa fa-facebook"></i></a>
                            <a href="/"><i class="fa fa-twitter"></i></a>
                            <a href="/"><i class="fa fa-linkedin"></i></a>
                            <a href="/"><i class="fa fa-pinterest-p"></i></a>
                        </div>
                        <div class="header__top__right__language">
                            <img src="img/language.png" alt="">
                            <div>English</div>
                            <span class="arrow_carrot-down"></span>
                            <ul>
                                <li><a href="/">Spanis</a></li>
                                <li><a href="/">English</a></li>
                            </ul>
                        </div>
                        <div class="header__top__right__auth">
                            <button class="signOut" on:click={logOut} type="button" style="border: 1px solid #f5f5f5;">Logout</button>
                        </div>
                    </div>
                    {:else}
                    <div class="header__top__right">
                        <div class="header__top__right__social">
                            <a href="/"><i class="fa fa-facebook"></i></a>
                            <a href="/"><i class="fa fa-twitter"></i></a>
                            <a href="/"><i class="fa fa-linkedin"></i></a>
                            <a href="/"><i class="fa fa-pinterest-p"></i></a>
                        </div>
                        <div class="header__top__right__language">
                            <img src="img/language.png" alt="">
                            <div>English</div>
                            <span class="arrow_carrot-down"></span>
                            <ul>
                                <li><a href="/">Spanis</a></li>
                                <li><a href="/">English</a></li>
                            </ul>
                        </div>
                        <div class="header__top__right__auth">
                            <a href="/login"><i class="fa fa-user"></i> Login</a>
                        </div>
                    </div>
                    {/if}
                </div>
            </div>
        </div>
    </div>
    
    <div class="container">
        <div class="row">
            <div class="col-lg-3">
                <div class="header__logo">
                    <a href="/"><img src="img/logo.png" alt=""></a>
                </div>
            </div>
            <div class="col-lg-6">
                <nav class="header__menu">
                    <ul>
                        <li class="active"><a href="/">Home</a></li>
                        <li><a href="/">Shop</a></li>
                        <li><a href="/">Pages</a>
                            <ul class="header__menu__dropdown">
                                <li><a href="/">Shop Details</a></li>
                                <li><a href="/">Shoping Cart</a></li>
                                <li><a href="./checkout.html">Check Out</a></li>
                                <li><a href="./blog-details.html">Blog Details</a></li>
                            </ul>
                        </li>
                        <li><a href="./blog.html">Blog</a></li>
                        <li><a href="./contact.html">Contact</a></li>
                    </ul>
                </nav>
            </div>
            <div class="col-lg-3">
                <div class="header__cart">
                    <ul>
                        <li><a href="/"><i class="fa fa-heart"></i> <span>1</span></a></li>
                        <li><a href="/"><i class="fa fa-shopping-bag"></i> <span>3</span></a></li>
                    </ul>
                    <div class="header__cart__price">item: <span>150k</span></div>
                </div>
            </div>
        </div>
        <div class="humberger__open">
            <i class="fa fa-bars"></i>
        </div>
    </div>
</header>
<!-- Header Section End -->

<!-- Hero Section Begin -->
<section class="hero hero-normal">
        <div class="container">
            <div class="row">
                <div class="col-lg-3">
                    <div class="hero__categories">
                        <div class="hero__categories__all">
                            <i class="fa fa-bars"></i>
                            <span>All departments</span>
                        </div>
                        <ul >
                            <li><a href="/">Fresh Meat</a></li>
                            <li><a href="/">Vegetables</a></li>
                            <li><a href="/">Fruit & Nut Gifts</a></li>
                            <li><a href="/">Fresh Berries</a></li>
                            <li><a href="/">Ocean Foods</a></li>
                            <li><a href="/">Butter & Eggs</a></li>
                            <li><a href="/">Fastfood</a></li>
                            <li><a href="/">Fresh Onion</a></li>
                            <li><a href="/">Papayaya & Crisps</a></li>
                            <li><a href="/">Oatmeal</a></li>
                            <li><a href="/">Fresh Bananas</a></li>
                        </ul>
                    </div>
                </div>
                <div class="col-lg-9">
                    <div class="hero__search">
                        <div class="hero__search__form">
                            <form action="#">
                                <input type="text" placeholder="What do yo u need?">
                                <button type="submit" class="site-btn">SEARCH</button>
                            </form>
                        </div>
                        <div class="hero__search__phone">
                            <div class="hero__search__phone__icon">
                                <i class="fa fa-phone"></i>
                            </div>
                            <div class="hero__search__phone__text">
                                <h5>+65 11.188.888</h5>
                                <span>support 24/7 time</span>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </section>
<!-- Hero Section End -->

