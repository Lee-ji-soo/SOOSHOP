// modules are defined as an array
// [ module function, map of requires ]
//
// map of requires is short require name -> numeric require
//
// anything defined in a previous bundle is accessed via the
// orig method which is the require for previous bundles
parcelRequire = (function (modules, cache, entry, globalName) {
  // Save the require from previous bundle to this closure if any
  var previousRequire = typeof parcelRequire === 'function' && parcelRequire;
  var nodeRequire = typeof require === 'function' && require;

  function newRequire(name, jumped) {
    if (!cache[name]) {
      if (!modules[name]) {
        // if we cannot find the module within our internal map or
        // cache jump to the current global require ie. the last bundle
        // that was added to the page.
        var currentRequire = typeof parcelRequire === 'function' && parcelRequire;
        if (!jumped && currentRequire) {
          return currentRequire(name, true);
        }

        // If there are other bundles on this page the require from the
        // previous one is saved to 'previousRequire'. Repeat this as
        // many times as there are bundles until the module is found or
        // we exhaust the require chain.
        if (previousRequire) {
          return previousRequire(name, true);
        }

        // Try the node require function if it exists.
        if (nodeRequire && typeof name === 'string') {
          return nodeRequire(name);
        }

        var err = new Error('Cannot find module \'' + name + '\'');
        err.code = 'MODULE_NOT_FOUND';
        throw err;
      }

      localRequire.resolve = resolve;
      localRequire.cache = {};

      var module = cache[name] = new newRequire.Module(name);

      modules[name][0].call(module.exports, localRequire, module, module.exports, this);
    }

    return cache[name].exports;

    function localRequire(x){
      return newRequire(localRequire.resolve(x));
    }

    function resolve(x){
      return modules[name][1][x] || x;
    }
  }

  function Module(moduleName) {
    this.id = moduleName;
    this.bundle = newRequire;
    this.exports = {};
  }

  newRequire.isParcelRequire = true;
  newRequire.Module = Module;
  newRequire.modules = modules;
  newRequire.cache = cache;
  newRequire.parent = previousRequire;
  newRequire.register = function (id, exports) {
    modules[id] = [function (require, module) {
      module.exports = exports;
    }, {}];
  };

  var error;
  for (var i = 0; i < entry.length; i++) {
    try {
      newRequire(entry[i]);
    } catch (e) {
      // Save first error but execute all entries
      if (!error) {
        error = e;
      }
    }
  }

  if (entry.length) {
    // Expose entry point to Node, AMD or browser globals
    // Based on https://github.com/ForbesLindesay/umd/blob/master/template.js
    var mainExports = newRequire(entry[entry.length - 1]);

    // CommonJS
    if (typeof exports === "object" && typeof module !== "undefined") {
      module.exports = mainExports;

    // RequireJS
    } else if (typeof define === "function" && define.amd) {
     define(function () {
       return mainExports;
     });

    // <script>
    } else if (globalName) {
      this[globalName] = mainExports;
    }
  }

  // Override the current require with this new one
  parcelRequire = newRequire;

  if (error) {
    // throw error from earlier, _after updating parcelRequire_
    throw error;
  }

  return newRequire;
})({"../js/const/const.js":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.EMAIL_RULE = void 0;
var EMAIL_RULE = /^[0-9a-zA-Z]([-_.]?[0-9a-zA-Z])*@[0-9a-zA-Z]([-_.]?[0-9a-zA-Z])*.[a-zA-Z]{2,3}$/i;
exports.EMAIL_RULE = EMAIL_RULE;
},{}],"../assets/products.js":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.products = void 0;
//상품 DATA js
var products = [{
  id: 1,
  price: '₩305,000',
  priceset: 305000,
  img: ['../../images/product/pic1-0.jpg', '../../images/pic1-1.jpg'],
  title: '스쿱 넥 탱크 탑',
  text: "Do you like some random yellow stuff? Here's one for you."
}, {
  id: 2,
  price: '₩4,304,000',
  priceset: 4304000,
  img: ['../../images/product/pic2-0.jpg'],
  title: '인트레치아토 우븐 클러치',
  text: "Stole it from my dad."
}, {
  id: 3,
  price: '₩3,625,000',
  priceset: 3625000,
  img: ['../../images/product/pic3-0.jpg'],
  title: '플리세 플리츠 재킷',
  text: "The best beer comes from the monastery."
}, {
  id: 4,
  price: '₩1,380,000',
  priceset: 1380000,
  img: ['../../images/product/pic4-0.jpg'],
  title: 'GG 플로라 숄더 백',
  text: "The best beer comes from the monastery."
}, {
  id: 5,
  price: '₩719,000',
  priceset: 719000,
  img: ['../../images/product/pic5-0.jpg'],
  title: '바로크 패턴 목욕 가운',
  text: "The best beer comes from the monastery."
}, {
  id: 6,
  price: '₩178,000',
  priceset: 178000,
  img: ['../../images/product/pic6-0.jpg'],
  title: "90's 탱크탑",
  text: "The best beer comes from the monastery."
}, {
  id: 7,
  price: '₩825,000',
  priceset: 825000,
  img: ['../../images/product/pic7-0.jpg'],
  title: "플로럴 프린트 맥시 스커트",
  text: "The best beer comes from the monastery."
}, {
  id: 8,
  price: '₩462,000',
  priceset: 462000,
  img: ['../../images/product/pic8-0.jpg'],
  title: "캣아이 프레임 안경",
  text: "The best beer comes from the monastery."
}, // {
//     id: 9,
//     price: '₩413,000',
//     img: '../../images/pic9.jpg',
//     title: "시퀸 방도 비키니 세트",
//     text: "The best beer comes from the monastery."
// }, {
//     id: 10,
//     price: '₩697,000',
//     img: '../../images/pic10.jpg',
//     title: "메두사 시퀸드 쿠션",
//     text: "The best beer comes from the monastery."
// }, 
{
  id: 11,
  price: '₩297,000',
  priceset: 297000,
  img: ['../../images/product/pic11-0.jpg'],
  title: "골지 슬림 핏 폴로 탑",
  text: "The best beer comes from the monastery."
}, {
  id: 12,
  price: '₩3,098,000',
  priceset: 3098000,
  img: ['../../images/product/pic12-0.jpg'],
  title: "디보스드 로고 버킷 백",
  text: "The best beer comes from the monastery."
}, {
  id: 13,
  price: '₩457,000',
  priceset: 457000,
  img: ['../../images/product/pic13-0.jpg'],
  title: "윙 칼라 볼륨 트렌치코트",
  text: "The best beer comes from the monastery."
}];
exports.products = products;
},{}],"../js/components/Modal.js":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

function Modal(EMAIL_RULE) {
  var _this = this;

  var modal = document.querySelector('.modal-box');
  var modalBg = document.querySelector('.modal-bg-box');
  var signBtn = document.querySelectorAll('.nav_sign');
  var closeBtn = document.getElementById('close-btn');
  var modalTT = document.getElementById('modal_title');

  this.evtBinding = function () {
    _this.handleOpen = function () {
      var signInUpTxt = '';

      var openModal = function openModal(e) {
        if (e.target.id === 'signup-btn') {
          signInUpTxt = "가입 하세요";
        } else if (e.target.id === 'signin-btn') {
          signInUpTxt = "로그인 하세요";
        }

        if (modalTT, modal) {
          modalTT.innerHTML = signInUpTxt;
          modal.style.display = 'block';
        }
      };

      var closeModal = function closeModal(e) {
        if (e.target === modalBg || e.target === closeBtn) {
          modal.style.display = 'none';
        }
      };

      if (signBtn, modalBg) {
        signBtn.forEach(function (btn) {
          return btn.addEventListener('click', openModal);
        });
        modalBg.addEventListener('click', closeModal);
      }
    };

    _this.emailCheck = function () {
      //모달창 email-check JS
      var email = document.getElementById('form-email');
      var password = document.getElementById('form-password');
      var modalSubmit = document.getElementById('input-form');
      var emailRule = EMAIL_RULE;

      var isPermitted = function isPermitted(e) {
        var emailValue = email.value;
        var passwordValue = password.value;

        if (emailValue == '') {
          alert('이메일을 입력해 주세요.');
          e.preventDefault();
        } else if (passwordValue == '') {
          alert('비밀번호를 입력해 주세요.');
          e.preventDefault();
        } else if (emailValue.match(emailRule) === false) {
          alert('이메일이 형식에 맞지 않습니다.');
          e.preventDefault();
        } else {
          return true;
        }
      };

      if (modalSubmit) {
        modalSubmit.addEventListener('submit', isPermitted);
      }
    };

    _this.handleOpen();

    _this.emailCheck();
  };

  this.evtBinding();
}

var _default = Modal;
exports.default = _default;
},{}],"../js/components/MainPage.js":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

function MainPage() {
  var _this = this;

  var $topImg = document.querySelector('#top-img');
  var $shoppingCartImg = document.createElement('img');
  $topImg.appendChild($shoppingCartImg);
  $shoppingCartImg.classList.add('shoppingCart');
  this.turn = 'right';
  this.x = 0;
  this.vx = 10;
  this.stageWidth = document.body.clientWidth;

  this.render = function () {
    console.log(_this.turn);
    _this.turn = 'right' ? 'right' : 'left';
    $shoppingCartImg.setAttribute('src', "../../../images/illustration/shoppingcart-".concat(_this.turn, ".png"));
    console.log($shoppingCartImg);
  };

  this.animate = function () {
    _this.x += _this.vx;

    if (_this.x === _this.stageWidth - 35) {
      _this.vx *= -1;
      _this.turn = 'left';

      _this.render();
    } else if (_this.x < 0) {
      _this.vx *= -1;
      _this.turn = 'right';
    }

    $shoppingCartImg.style.left = "".concat(_this.x, "px");
    requestAnimationFrame(_this.animate);
  };

  requestAnimationFrame(this.animate);
  this.render();
}

var _default = MainPage;
exports.default = _default;
},{}],"../js/components/MainProduct.js":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

function MainProduct(_ref) {
  var _this = this;

  var products = _ref.products,
      setProductId = _ref.setProductId;
  this.products = products;
  this.setProductId = setProductId;
  var productUL = document.getElementById('product-ul');

  this.render = function () {
    if (productUL) {
      var htmlStr = '';
      htmlStr += _this.products.map(function (product) {
        return "<li class='product' id='".concat(product.id, "'>\n                        <a href='./detail.html'>\n                            <img data-product='").concat(product.id, "'class='product_img'\n                            src='").concat(product.img[0], "'>\n                        </a>\n                        <p class='product_title'>").concat(product.title, "</p>\n                        <p class='product_price'>").concat(product.price, "</p>\n                     </li>");
      }).join('');
      productUL.innerHTML = htmlStr;
    }
  };

  this.setState = function (nextData) {
    _this.products = nextData;

    _this.render();
  };

  this.evtBingding = function () {
    _this.handleSorting = function () {
      var sortBtnLow = document.getElementById('sort-btn__low');
      var sortBtnHigh = document.getElementById('sort-btn__high');

      var sortLowPrice = function sortLowPrice() {
        var sortedProducts = _this.products.sort(function (a, b) {
          return a.priceset - b.priceset;
        });

        _this.setState(sortedProducts);
      };

      var sortHighPrice = function sortHighPrice() {
        var sortedProducts = _this.products.sort(function (a, b) {
          return b.priceset - a.priceset;
        });

        _this.setState(sortedProducts);
      };

      if (sortBtnHigh, sortBtnLow) {
        sortBtnLow.addEventListener('click', sortLowPrice);
        sortBtnHigh.addEventListener('click', sortHighPrice);
      }
    };

    _this.handleMoreBtn = function () {
      var moreBtn = document.getElementById('more-btn');

      if (moreBtn) {
        var addProducts = function addProducts(calledProducts) {
          var addedProducts = _this.products.concat(calledProducts);

          _this.setState(addedProducts);
        };

        var more = 0;

        var callProductAjax = function callProductAjax() {
          if (more == 0) {
            $.get("../../src/assets/more.json").done(function (product) {
              addProducts(product);
            });
          }

          if (more == 1) {
            $.get("../../src/assets/more2.json").done(function (product) {
              addProducts(product);
              moreBtn.classList.add('hidden'); //버튼없애기
            });
          }

          more++;
        };

        moreBtn.addEventListener('click', callProductAjax);
      }
    };

    _this.handleClickProduct = function () {
      var getProductId = function getProductId(e) {
        var productId = e.target.dataset.product;

        _this.setProductId(productId);
      };

      if (productUL) {
        productUL.addEventListener('click', getProductId);
      }
    };

    _this.handleSorting();

    _this.handleMoreBtn();

    _this.handleClickProduct();
  };

  this.render();
  this.evtBingding();
}

var _default = MainProduct;
exports.default = _default;
},{}],"../js/components/DetailProduct.js":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

function DetailProduct(_ref) {
  var _this = this;

  var products = _ref.products;
  var product = products[0];

  this.render = function () {
    var productBox = document.getElementById('detail-product-box');
    var htmlStr = '';
    htmlStr += "\n        <img id=\"product_img\" src=".concat(product.img[0], ">\n        <div id=\"produc_img-btn\">\n            <button class=\"img_btn prev\">\n                <i class=\"fas fa-caret-left fa-3x\"></i>\n            </button>\n            <button class=\"img_btn next\">\n                <i class=\"fas fa-caret-right fa-3x\"></i>\n            </button>\n        </div>\n        <h4 id=\"detail-product_title\">").concat(product.title, "</h4>\n        <p id=\"detail-product_text\">").concat(product.text, "</p>\n        <p id=\"detail-product_price\">").concat(product.price, "</p>\n        ");

    if (productBox) {
      productBox.innerHTML = htmlStr;
    }
  };

  this.setState = function (productId) {
    product = products[productId - 1];

    _this.render();
  };

  this.evtBinding = function () {
    _this.handleImgBtn = function () {
      var productImgBtn = document.getElementById('produc_img-btn');
      var productImg = document.getElementById('product_img');
      var cur = 0;

      var changeImg = function changeImg() {
        if (cur < 1) {
          cur++;
        } else {
          cur = 0;
        }

        productImg.src = "".concat(product.img[cur]);
      };

      if (productImgBtn) {
        productImgBtn.addEventListener('click', changeImg);
      }
    };

    _this.handleShoppingBag = function () {
      var shoppingBag = document.getElementById('shoppingbag');

      var handleSelected = function handleSelected() {
        var name = document.getElementById("detail-product_title").innerHTML;
        var quantity = document.getElementById("detail-form_quantity").value;
        var price = document.getElementById("detail-product_price").innerHTML;
        var color = document.getElementById("detail-form_color").value;
        var size = document.getElementById("detail-form_size").value;
        var quantityValue = quantity;

        var saveSelectedItem = function saveSelectedItem(e) {
          e.preventDefault();
          var selectedObj = {
            name: 'name',
            quantity: 'quantity',
            price: 'price',
            color: 'color',
            size: 'size'
          };
          selectedObj.name = name;
          selectedObj.quantity = quantity;
          selectedObj.price = price;
          selectedObj.color = color;
          selectedObj.size = size;
          localStorage.setItem("selectedProduct", JSON.stringify(selectedObj));
        };

        var moveToCartPage = function moveToCartPage() {
          if (quantityValue < 1) {
            window.alert('수량은 최소1개입니다');
          } else {
            var answer = window.confirm('장바구니에 추가되었습니다.장바구니로 이동하시겠습니까?');

            if (answer) {
              window.location = './cart.html';
            } else {
              return;
            }
          }
        };
      };

      if (shoppingBag) {
        shoppingBag.addEventListener('click', handleSelected);
      }
    };

    _this.handleTab = function () {
      var tabBox = document.getElementById('detail-tab');
      var tabBtn = document.querySelectorAll('.tab_btn');
      var tabCon = document.querySelectorAll('.tab_content');

      var changeTab = function changeTab(e) {
        var currentTarget = event.target.dataset.tab;
        var eTargetCon = document.getElementById("tab_".concat(currentTarget));
        tabBtn.forEach(function (tab) {
          return tab.classList.remove('orange');
        });
        e.target.classList.add('orange');
        tabCon.forEach(function (con) {
          return con.classList.remove('show');
        });
        eTargetCon.classList.add('show');
      };

      if (tabBox) {
        tabBox.addEventListener('click', changeTab);
      }
    };

    _this.handleShoppingBag();

    _this.handleImgBtn();

    _this.handleTab();
  };

  this.render();
  this.evtBinding();
}

var _default = DetailProduct;
exports.default = _default;
},{}],"../assets/localStorage.js":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.sampleStorage = void 0;
var sampleStorage = [{
  "id": 1,
  "name": "스쿱 넥 탱크 탑",
  "price": "₩305,000",
  "priceset": 305000,
  "img": ["../../images/product/pic1-0.jpg"],
  "title": "Black Mocade",
  "text": "Hey look up! It's a plane! No, It's a bird! No, it's the assassin performing leap of faith."
}, {
  "id": 2,
  "name": "인트레치아토 우븐 클러치",
  "price": "₩4,304,000",
  "priceset": 4304000,
  "img": ["../../images/product/pic2-0.jpg"],
  "title": "No zipper dress",
  "text": "The price of this dress has been cut off since we lost the zipper on the back."
}, {
  "id": 3,
  "name": "플리세 플리츠 재킷",
  "price": "₩3,625,000",
  "priceset": 3625000,
  "img": ["../../images/product/pic3-0.jpg"],
  "title": "Dear Ernest",
  "text": "We'll bring readers to the edge of ther seats and keep them there until we sell this dress."
}];
exports.sampleStorage = sampleStorage;
},{}],"../js/components/Cart.js":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _localStorage = require("../../assets/localStorage.js");

function Cart() {
  var _this = this;

  this.products = _localStorage.sampleStorage;
  var sumResult = document.getElementById('sum_result');

  this.render = function () {
    var productBox = document.getElementById('product-box');
    var htmlStr = '';
    htmlStr += _this.products.map(function (sample) {
      return "<div class=\"cart-box\" data-id=\"".concat(sample.id, "\">\n                    <div class=\"cart-box__img\">\n                        <img src=\"").concat(sample.img, "\">\n                    </div>\n                    <div class=\"cart-box__detail\">\n                        <div data-id=\"").concat(sample.id, "\" class=\"price\">").concat(sample.price, "</div>\n                        <div class='name'>").concat(sample.name, "</div>\n                        <div>\n                            <select class=\"form-control size-form-control\" class=\"select-size\">\n                                <option>S</option>\n                                <option>M</option>\n                                <option>L</option>\n                            </select>\n                            <select data-id=\"").concat(sample.id, "\" \n                            class=\"form-control quantity-form-control select-quantity\" size='1'\n                            onfocus='this.size=3;' onblur='this.size=1;' onchange='this.size=1; \n                            this.blur();'>\n                                <option>1</option>\n                                <option>2</option>\n                                <option>3</option>\n                                <option>4</option>\n                                <option>5</option>\n                                <option>6</option>\n                            </select>\n                        </div>\n                        <button class=\"cart_delte-btn\" data-id=\"").concat(sample.id, "\">\n                            <div class=\"cart_delete-icon\">\n                                <i class=\"fas fa-trash-alt\"></i>\n                            </div>\n                        </button>\n                    </div>\n                    <div class=\"changeOrNot\" class=\"changeOrNot\">\n                        <p class=\"txt\">\uC218\uB7C9\uC744 \uBCC0\uACBD\uD558\uC2DC\uACA0\uC2B5\uB2C8\uAE4C?</p>\n                        <button class=\"confirm-go\">\uBCC0\uACBD</button>\n                        <button class=\"confirm-no\">\uCDE8\uC18C</button>\n                    </div>\n                </div>");
    }).join('');

    if (productBox) {
      productBox.innerHTML = htmlStr;
    }
  };

  this.converToKRW = function (nextSum, nextHTML) {
    var converted = new Intl.NumberFormat('ko-KR', {
      style: 'currency',
      currency: 'KRW'
    }).format(nextSum);

    if (nextHTML) {
      nextHTML.innerHTML = converted;
    }
  };

  this.renderSum = function () {
    var eachPrice = _this.products.map(function (sample) {
      return sample.priceset;
    });

    var formQuantity = document.querySelectorAll('.quantity-form-control');
    var sum = 0;

    if (formQuantity.length > 0) {
      for (var i = 0; i < eachPrice.length; i++) {
        var eachSum = eachPrice[i] * formQuantity[i].value;
        sum += eachSum;
      }
    }

    _this.converToKRW(sum, sumResult);
  };

  this.evtBinding = function () {
    _this.handleQuantity = function () {
      var quantityForm = document.querySelectorAll('.select-quantity');

      var confirmChange = function confirmChange(e) {
        var showConfirm = function showConfirm(e) {
          var confirmAlert = e.target.closest('.cart-box').children[2];
          confirmAlert.classList.add('displayBlock');
        };

        var hideConfirm = function hideConfirm(e) {
          e.target.parentNode.classList.remove('displayBlock');
        };

        var confirmGo = document.querySelectorAll('.confirm-go');
        var confirmNo = document.querySelectorAll('.confirm-no');
        showConfirm(e);
        confirmGo.forEach(function (go) {
          return go.addEventListener('click', _this.renderSum);
        });
        confirmGo.forEach(function (go) {
          return go.addEventListener('click', hideConfirm);
        });
        confirmNo.forEach(function (go) {
          return go.addEventListener('click', hideConfirm);
        });
      };

      if (quantityForm) {
        quantityForm.forEach(function (form) {
          return form.addEventListener('change', confirmChange);
        });
      }
    };

    _this.handleDeletBtn = function () {
      var deleteBtn = document.querySelectorAll('.cart_delete-icon');

      var deleteProduct = function deleteProduct(e) {
        var cartBox = document.querySelectorAll('.cart-box');
        var clicked = e.target.parentNode.parentNode.dataset.id;
        cartBox.forEach(function (box) {
          if (box.dataset.id === clicked) {
            box.remove();
          }
        });

        _this.sum();
      };

      if (deleteBtn) {
        deleteBtn.forEach(function (btn) {
          return btn.addEventListener('click', deleteProduct);
        });
      }
    };

    _this.handleQuantity();

    _this.handleDeletBtn();
  };

  this.render();
  this.evtBinding();
  this.renderSum();
}

var _default = Cart;
exports.default = _default;
},{"../../assets/localStorage.js":"../assets/localStorage.js"}],"../js/App.js":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _const = require("./const/const.js");

var _products = require("./../assets/products.js");

var _Modal = _interopRequireDefault(require("./components/Modal.js"));

var _MainPage = _interopRequireDefault(require("./components/MainPage.js"));

var _MainProduct = _interopRequireDefault(require("./components/MainProduct.js"));

var _DetailProduct = _interopRequireDefault(require("./components/DetailProduct.js"));

var _Cart = _interopRequireDefault(require("./components/Cart.js"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function App() {
  var _this = this;

  var productId = '';
  this.products = _products.products;

  this.setProductId = function (id) {
    productId = id;

    _this.detailProduct.setState(productId);
  };

  this.window = new _MainPage.default();
  this.modal = new _Modal.default(_const.EMAIL_RULE);
  this.mainProduct = new _MainProduct.default({
    products: this.products,
    setProductId: this.setProductId
  });
  this.detailProduct = new _DetailProduct.default({
    products: this.products
  });
  this.cartProduct = new _Cart.default();
}

var _default = App;
exports.default = _default;
},{"./const/const.js":"../js/const/const.js","./../assets/products.js":"../assets/products.js","./components/Modal.js":"../js/components/Modal.js","./components/MainPage.js":"../js/components/MainPage.js","./components/MainProduct.js":"../js/components/MainProduct.js","./components/DetailProduct.js":"../js/components/DetailProduct.js","./components/Cart.js":"../js/components/Cart.js"}],"../js/index.js":[function(require,module,exports) {
"use strict";

var _App = _interopRequireDefault(require("./App.js"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

new _App.default();
},{"./App.js":"../js/App.js"}],"../../node_modules/parcel/src/builtins/hmr-runtime.js":[function(require,module,exports) {

},{}]