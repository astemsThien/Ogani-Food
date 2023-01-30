import {readable, writable} from "svelte/store";

export const products = readable([
    {id: 1,  name: "Rửa chén",      image: "https://bizweb.dktcdn.net/thumb/1024x1024/100/383/124/products/nuoc-rua-chen-lix-sieu-sach-huong-chanh-3kg6-01.jpg",  price: 75000, prices: 100000, quantity: 1, content: "Nước rửa chén",},
    {id: 2,  name: "Pepsi",         image: "https://sieuthixanh.com.vn/Upload/products/zoom/Loc-6-lon-nuoc-ngot-Pepsi-Cola-330ml132690937107383744.jpg",  price: 60000, prices: 100000, quantity: 1, content: "PEPSI",},
    {id: 3,  name: "Gạo Nhật Bản",  image: "https://concung.com/2021/10/47952-75943-large_mobile/gao-nhat-hokkaido.jpg",  price: 50000, prices: 100000, quantity: 1, content: "Gạo Nhật Bản",},
    {id: 4,  name: "Bánh Gạo Hàn Quốc",  image: "https://product.hstatic.net/200000245115/product/sptoto21_4d4e4407c80e4059b88fdab0163b248d.jpg",  price: 120000, prices: 140000, quantity: 1, content: "Bánh Gạo Hàn Quốc",},
    {id: 5,  name: "Hạt nêm",      image: "https://vietmartjp.com/wp-content/uploads/2020/09/hat-nem-knorr-gia-vi-viet-cho-viet-nam-tai-nhat-ban-vietmart-1-2.jpg",  price: 120000, prices: 140000, quantity: 1, content:  "Hạt nêm",},
    {id: 6,  name: "Mì Ý",          image: "https://thichlambanh.com/data/images/2021_11/mi-spaghetti-mama-rosa-500g-1636349172.png",  price: 80000, prices: 140000, quantity: 1, content: "Mì Ý",},
    {id: 7,  name: "Khoai tây",     image: "https://everydayorganic.com.vn/data/news/3970/85.1.png",  price: 50000, prices: 80000, quantity: 1, content: "Khoai tây",},
    {id: 8,  name: "Bánh gạo",      image: "https://csfood.vn/wp-content/uploads/2017/03/B%C3%A1nh-G%E1%BA%A1o-V%E1%BB%8B-T%C3%B4m-N%C6%B0%E1%BB%9Bng-One-One-G%C3%B3i-150g.jpg",  price: 30000, prices: 50000, quantity: 1, content: "Bánh gạo",},
    {id: 9,  name: "Rau dền",       image: "https://vinmec-prod.s3.amazonaws.com/images/20201226_005345_144787_rau_den.max-800x800.jpg",  price: 20000, prices: 50000, quantity: 1, content: "Rau dền",},
    {id: 10, name: "Xoài đài loan", image: "https://bizweb.dktcdn.net/thumb/1024x1024/100/324/966/products/xoaixanh01-f47729d6-f8db-43d4-8b95-5702c47aa95b.jpg", price: 50000, prices:  80000, quantity: 1, content: "Xoài đài loan",},
    {id: 11, name: "Táo đỏ",        image: "https://csfood.vn/wp-content/uploads/2019/05/T%C3%A1o-Red-Delicious-Nk-M%E1%BB%B9-t%C3%BAi-1kg.png", price: 140000, prices: 120000, quantity: 1, content: "Táo đỏ",},
    {id: 12, name: "Bông cải",      image: "https://csfood.vn/wp-content/uploads/2018/04/B%C3%B4ng-c%E1%BA%A3i-xanh.png", price: 120000, prices: 140000, quantity: 1, content: "Bông cải",},
    {id: 13, name: "Strongbow",      image: "https://douongnhapkhau.com/wp-content/uploads/2020/01/strongbow-apple-honey.jpeg", price: 120000, prices: 140000, quantity: 1, content: "Strongbow",},
    {id: 14, name: "Sữa trái cây",  image: "https://nutifood.com.vn/files/products/suatraicaysieuqua/suatraicaysieuqua-product-img-610.png", price: 50000, prices: 80000, quantity: 1, content: "Sữa trái cây",},
    {id: 15, name: "Cocacola",      image: "https://cf.shopee.vn/file/084238a3fd329b9bbe3f445f63a4ffc9", price: "50000", prices: 100000, quantity: 1, content: "Cocacola",},
    {id: 16, name: "Sprite",        image: "https://product.hstatic.net/200000352097/product/8935049510680_779525168cbc4f3d9014ee55f4660cc4.png", price: 80000, prices: 100000, quantity: 1, content: "Sprite",},
    {id: 17, name: "Rửa kính",      image: "https://ptphucthinh.com/wp-content/uploads/2017/08/NUOC-LAU-KINH-GIFT-580ML-1.jpg", price: 50000, prices: 80000, quantity: 1, content: "Rửa kính",},
    {id: 18, name: "Vim",           image: "https://product.hstatic.net/200000046434/product/vim900ml_3340002ddfa44da58c7da4fcc92a8dbe_master.jpg", price: 50000, prices: 80000, quantity: 1, content:"Vim",},
    {id: 19, name: "Comfort",        image: "https://cdn.concung.com/2022/03/54425-84742-large_mobile/nuoc-xa-vai-comfort-cham-soc-chuyen-sau-1-lan-xa-huong-ban-mai-tui-3-2l.jpg", price: 70000, prices: 100000, quantity: 1, content: "Comfort",},
    {id: 20, name: "OMO",   image: "https://www.sieuthianhduong.com/images/product/theme-1591238663-Bot-giat-omo2.jpg", price: 25000, prices: 50000, quantity: 1, content: "OMO",},

    {id: 21, name: "Táo", image: "http://hstatic.net/520/1000107520/1/2016/8-18/tao_my_master.jpg", price: 35000, prices:250000, quantity: 1, content: "Táo",},
    {id: 22, name: "Cam", image: "https://dungculamvuon.net/resources/2019/10/cay-cam-vang-my-2.jpg", price: 50000, prices:250000,quantity: 1, content: "Cam",},
    {id: 23, name: "Nho", image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT5HrLPLR16Cnv7W63QKfObG8ESH1atBI4Z43UXGVqJn8MzshQxSaL4qDDgw32TScGqYys&usqp=CAU", price: 120000, prices:250000,quantity: 1, content: "Nho",},
    {id: 24, name: "Chuối", image: "https://cooponline.vn/wp-content/uploads/2020/05/chuoi-coop-select-loai-1-ul.jpg", price: 35000, prices:250000,quantity: 1, content: "Chuối",},
    {id: 25, name: "Đu đủ", image: "https://suckhoedoisong.qltns.mediacdn.vn/2014/2-1b92c9hoaqua2-1409278912857.jpg", price: 20000, prices:250000,quantity: 1, content: "Đu đủ",},
    {id: 26, name: "Bơ", image: "https://dalatfarm.net/wp-content/uploads/2020/12/qua-bo-1-2.jpg", price: 85000, prices:250000,quantity: 1, content: "Bơ",},
    {id: 27, name: "Thơm", image: "https://nattapamekk.files.wordpress.com/2015/07/tnews_1428917183_75751.jpg", price: 15000, prices:250000,quantity: 1, content: "Thơm",},
    {id: 28, name: "Bưởi", image: "https://product.hstatic.net/200000423303/product/buoi-da-xanh-huu-co_75d4bef79f2b4e19b2460997d4a0cd04_1024x1024.jpg", price: 55000, prices:250000,quantity: 1, content: "Bưởi",},
    {id: 29, name: "Dưa hấu", image: "https://cooponline.vn/wp-content/uploads/2021/05/dua-hau-do-1.jpg", price: 12000, prices:250000,quantity: 1, content: "Dưa hấu",},
    {id: 30, name: "Sầu riêng", image: "https://product.hstatic.net/200000416189/product/trai_ri6_9fbb8a6efb704d908a4a0d0e1fd1ace4.jpg", price: 175000, prices:250000,quantity: 1, content: "Sầu riêng",},
    {id: 31, name: "Mận", image: "https://bizweb.dktcdn.net/thumb/1024x1024/100/324/966/products/mananphuoc2-d7e97c31-7c6e-4370-89f6-55d3eddc7bfa.jpg?v=1624982780953", price: 25000, prices:250000,quantity: 1, content: "Mận",},
    {id: 32, name: "Dưa lưới", image: "https://storage.googleapis.com/ifarmer-vn/c332f3cbe09b4a1ea546db5ab410b33a/qua-dua-vang.jpg", price: 75000, prices:250000,quantity: 1, content: "Dưa lưới",},
    {id: 33, name: "Xoài", image: "https://product.hstatic.net/200000460455/product/2_e78eae928d8d4f4c880a55dca187871f_master.png", price: 35000, prices:250000,quantity: 1, content: "Xoài",},
    {id: 34, name: "Mít", image: "https://nongsansachdamrong.com/wp-content/uploads/2020/05/cong-dung-cua-mit-va-mit-say.jpg", price: 50000, prices:250000,quantity: 1, content: "Mít",},
    {id: 35, name: "Chôm chôm thường", image: "http://hn.check.net.vn/data/product/mainimages/original/product4556.jpg", price: 35000, prices:250000,quantity: 1, content: "Chôm chôm thường",},
    {id: 36, name: "Chôm chôm thái", image: "http://hn.check.net.vn/data/product/mainimages/original/product4556.jpg", price: 35000, prices:250000,quantity: 1, content: "Chôm chôm thái",},
    ])

export const product1 = readable([
    {id: 21, name: "Táo", image: "http://hstatic.net/520/1000107520/1/2016/8-18/tao_my_master.jpg", price: 35000, prices:250000, quantity: 1, content: "Táo",},
    {id: 22, name: "Cam", image: "https://dungculamvuon.net/resources/2019/10/cay-cam-vang-my-2.jpg", price: 50000, prices:250000,quantity: 1, content: "Cam",},
    {id: 23, name: "Nho", image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT5HrLPLR16Cnv7W63QKfObG8ESH1atBI4Z43UXGVqJn8MzshQxSaL4qDDgw32TScGqYys&usqp=CAU", price: 120000, prices:250000,quantity: 1, content: "Nho",},
    {id: 24, name: "Chuối", image: "https://cooponline.vn/wp-content/uploads/2020/05/chuoi-coop-select-loai-1-ul.jpg", price: 35000, prices:250000,quantity: 1, content: "Chuối",},
    {id: 25, name: "Đu đủ", image: "https://suckhoedoisong.qltns.mediacdn.vn/2014/2-1b92c9hoaqua2-1409278912857.jpg", price: 20000, prices:250000,quantity: 1, content: "Đu đủ",},
    {id: 26, name: "Bơ", image: "https://dalatfarm.net/wp-content/uploads/2020/12/qua-bo-1-2.jpg", price: 85000, prices:250000,quantity: 1, content: "Bơ",},
    {id: 27, name: "Thơm", image: "https://nattapamekk.files.wordpress.com/2015/07/tnews_1428917183_75751.jpg", price: 15000, prices:250000,quantity: 1, content: "Thơm",},
    {id: 28, name: "Bưởi", image: "https://product.hstatic.net/200000423303/product/buoi-da-xanh-huu-co_75d4bef79f2b4e19b2460997d4a0cd04_1024x1024.jpg", price: 55000, prices:250000,quantity: 1, content: "Bưởi",},
    {id: 29, name: "Dưa hấu", image: "https://cooponline.vn/wp-content/uploads/2021/05/dua-hau-do-1.jpg", price: 12000, prices:250000,quantity: 1, content: "Dưa hấu",},
    ])

export const product2 = readable([
    {id: 1,  name: "Rửa chén",      image: "https://bizweb.dktcdn.net/thumb/1024x1024/100/383/124/products/nuoc-rua-chen-lix-sieu-sach-huong-chanh-3kg6-01.jpg",  price: 75000, prices: 100000, quantity: 1, content: "Nước rửa chén",},
    {id: 2,  name: "Pepsi",         image: "https://sieuthixanh.com.vn/Upload/products/zoom/Loc-6-lon-nuoc-ngot-Pepsi-Cola-330ml132690937107383744.jpg",  price: 60000, prices: 100000, quantity: 1, content: "PEPSI",},
    {id: 3,  name: "Gạo Nhật Bản",  image: "https://concung.com/2021/10/47952-75943-large_mobile/gao-nhat-hokkaido.jpg",  price: 50000, prices: 100000, quantity: 1, content: "Gạo Nhật Bản",},
    {id: 4,  name: "Bánh Gạo Hàn Quốc",  image: "https://product.hstatic.net/200000245115/product/sptoto21_4d4e4407c80e4059b88fdab0163b248d.jpg",  price: 120000, prices: 140000, quantity: 1, content: "Bánh Gạo Hàn Quốc",},
    {id: 5,  name: "Hạt nêm",      image: "https://vietmartjp.com/wp-content/uploads/2020/09/hat-nem-knorr-gia-vi-viet-cho-viet-nam-tai-nhat-ban-vietmart-1-2.jpg",  price: 120000, prices: 140000, quantity: 1, content:  "Hạt nêm",},
    {id: 6,  name: "Mì Ý",          image: "https://thichlambanh.com/data/images/2021_11/mi-spaghetti-mama-rosa-500g-1636349172.png",  price: 80000, prices: 140000, quantity: 1, content: "Mì Ý",},
    {id: 7,  name: "Khoai tây",     image: "https://everydayorganic.com.vn/data/news/3970/85.1.png",  price: 50000, prices: 80000, quantity: 1, content: "Khoai tây",},
    {id: 8,  name: "Bánh gạo",      image: "https://csfood.vn/wp-content/uploads/2017/03/B%C3%A1nh-G%E1%BA%A1o-V%E1%BB%8B-T%C3%B4m-N%C6%B0%E1%BB%9Bng-One-One-G%C3%B3i-150g.jpg",  price: 30000, prices: 50000, quantity: 1, content: "Bánh gạo",},
    {id: 9,  name: "Rau dền",       image: "https://vinmec-prod.s3.amazonaws.com/images/20201226_005345_144787_rau_den.max-800x800.jpg",  price: 20000, prices: 50000, quantity: 1, content: "Rau dền",},
    ])

export const product3 = readable([
    {id: 12, name: "Bông cải",      image: "https://csfood.vn/wp-content/uploads/2018/04/B%C3%B4ng-c%E1%BA%A3i-xanh.png", price: 120000, prices: 140000, quantity: 1, content: "Bông cải",},
    {id: 13, name: "Strongbow",      image: "https://douongnhapkhau.com/wp-content/uploads/2020/01/strongbow-apple-honey.jpeg", price: 120000, prices: 140000, quantity: 1, content: "Strongbow",},
    {id: 14, name: "Sữa trái cây",  image: "https://nutifood.com.vn/files/products/suatraicaysieuqua/suatraicaysieuqua-product-img-610.png", price: 50000, prices: 80000, quantity: 1, content: "Sữa trái cây",},
    {id: 15, name: "Cocacola",      image: "https://cf.shopee.vn/file/084238a3fd329b9bbe3f445f63a4ffc9", price: "50000", prices: 100000, quantity: 1, content: "Cocacola",},
    {id: 16, name: "Sprite",        image: "https://product.hstatic.net/200000352097/product/8935049510680_779525168cbc4f3d9014ee55f4660cc4.png", price: 80000, prices: 100000, quantity: 1, content: "Sprite",},
    {id: 17, name: "Rửa kính",      image: "https://ptphucthinh.com/wp-content/uploads/2017/08/NUOC-LAU-KINH-GIFT-580ML-1.jpg", price: 50000, prices: 80000, quantity: 1, content: "Rửa kính",},
    {id: 18, name: "Vim",           image: "https://product.hstatic.net/200000046434/product/vim900ml_3340002ddfa44da58c7da4fcc92a8dbe_master.jpg", price: 50000, prices: 80000, quantity: 1, content:"Vim",},
    {id: 19, name: "Comfort",        image: "https://cdn.concung.com/2022/03/54425-84742-large_mobile/nuoc-xa-vai-comfort-cham-soc-chuyen-sau-1-lan-xa-huong-ban-mai-tui-3-2l.jpg", price: 70000, prices: 100000, quantity: 1, content: "Comfort",},
    {id: 20, name: "OMO",   image: "https://www.sieuthianhduong.com/images/product/theme-1591238663-Bot-giat-omo2.jpg", price: 25000, prices: 50000, quantity: 1, content: "OMO",},
])

export const cart = writable([])
export const card = writable([])