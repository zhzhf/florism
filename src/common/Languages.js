/** @format */

import LocalizedStrings from "react-native-localization";
/**
 * @api  {公用} ./src/common/language.js 多语言
 * @apiName Language
 * @apiGroup 公用
 * @apiDescription 项目配置多语言
 */
export default new LocalizedStrings({
  en: {
    MemberCenter: 'member Center',
    Exit: "Exit",
    ExitConfirm: "Are you sure you want to exit this app",
    YES: "YES",
    OK: "OK",
    ViewMyOrders: "View My Oders",
    CANCEL: "CANCEL",
    Confirm: "Confirm",
    pleaseLogin:"Please login first",
    AddCredit: "AddCredit",
    // Scene's Titles
    Home: "Home",
    Intro: "Intro",
    Product: "Product",
    Cart: "Cart",
    WishList: "WishList",
    InputPhone: "Please input your phone",

    // Home
    products: "products",

    // TopBar
    ShowFilter: "Sub Categories",
    HideFilter: "Hide",
    Sort: "Sort",
    textFilter: "Recent",

    // Category
    ThereIsNoMore: "There is no more product to show",

    // Product
    AddedtoCart: "Added item to Cart",
    AddtoCart: "Add to Cart",
    AddtoWishlist: "Add to Wishlist",
    ProductVariations: "Variations",
    NoVariation: "This product don't have any variation",
    AdditionalInformation: "Description",
    NoProductDescription: "No Product Description",
    ProductReviews: "Reviews",
    NoReview: "This product don't have any reviews ...yet",
    BUYNOW: "BUY NOW",
    ProductLimitWaring: "You can't add more than 10 product",
    EmptyProductAttribute: "This product don't have any attributes",
    ProductFeatures: "Features",
    ErrorMessageRequest: "Can't get data from server",
    NoConnection: "No internet connection",
    ProductRelated: "You May Also Like",

    // Cart
    NoCartItem: "There is no product in cart",
    Total: "Total",
    EmptyCheckout: "Sorry, you can't check out an empty cart",
    RemoveCartItemConfirm: "Remove this product from cart?",
    MyCart: "Cart",
    Order: "Order",
    ShoppingCart: "Shopping Cart",
    ShoppingCartIsEmpty: "Your Cart is Empty",
    Delivery: "Delivery",
    AddProductToCart: "Add a product to the shopping cart",
    TotalPrice: "Total Price:",
    YourDeliveryInfo: "Your delivery info:",
    ShopNow: "Shop Now",
    YourChoice: "Your wishlist:",
    YourSale: "Your Sale:",
    SubtotalPrice: "Subtotal Price:",
    BuyNow: "Buy Now",
    Items: "items",
    Item: "item",
    ThankYou: "Thank you",
    FinishOrderCOD: "You can use to number of order to track shipping status",
    FinishOrder:
      "Thank you so much for your purchased, to check your delivery status please go to My Orders",
    NextStep: "Next Step",
    ConfirmOrder: "Confirm Order",
    RequireEnterAllFileds: "Please enter all fields",
    Error: "Error",
    InvalidEmail: "Invalid email address",
    Finish: "Finish",

    // Wishlist
    NoWishListItem: "There is no item in wishlist",
    MoveAllToCart: "Add all to cart",
    EmptyWishList: "Empty wishlist",
    EmptyAddToCart: "Sorry, the wishlist is empty",
    RemoveWishListItemConfirm: "Remove this product from wishlist?",
    CleanAll: "Clean All",

    // Sidemenu
    SignIn: "Log In",
    SignOut: "Log Out",
    GuestAccount: "Guest Account",
    CantReactEmailError:
      "We can't reach your email address, please try other login method",
    NoEmailError: "Your account don't have valid email address",
    EmailIsNotVerifiedError:
      "Your email address is not verified, we can' trust you",
    Shop: "Shop",
    News: "News",
    Contact: "Contact us",
    Setting: "Setting",
    Login: "Login",
    Logout: "Logout",
    Category: "Category",
    deleteButton:'Delete this user',
    // Checkout
    Checkout: "Checkout",
    ProceedPayment: "Proceed Payment",
    Purchase: "Purchase",
    CashOnDelivery: "Cash on Delivery",
    Paypal: "Paypal",
    Stripe: "Stripe",
    CreditCard: "Credit Card",
    PaymentMethod: "Payment Method - Not select",
    PaymentMethodError: "Please select your payment method",
    PayWithCoD: "Your purchase will be pay when goods were delivered",
    PayWithPayPal: "Your purchase will be pay with PayPal",
    PayWithStripe: "Your purchase will be pay with Stripe",
    ApplyCoupon: "Apply",
    CouponPlaceholder: "COUPON CODE",
    CheckCouponDefault:'The coupon has been locked by the unpaid order and cannot be used',
    NoCoupon:"Sorry, you haven't redeemed the coupon",
    APPLY: "APPLY",
    Back: "Back",
    CardNamePlaceholder: "Name written on card",
    BackToHome: "Back to Home",
    OrderCompleted: "Your order was completed",
    OrderCanceled: "Your order was canceled",
    OrderFailed: "Something went wrong...",
    OrderCompletedDesc: "Your order id is ",
    OrderCanceledDesc:
      "You have canceled the order. The transaction has not been completed",
    OrderFailedDesc:
      "We have encountered an error while processing your order. The transaction has not been completed. Please try again",
    OrderTip:
      'Tip: You could track your order status in "My Orders" section from side menu',
    Payment: "Payment",
    Complete: "Complete",
    EnterYourFirstName: "Enter your First Name",
    EnterYourLastName: "Enter your Last Name",
    EnterYourEmail: "Enter your email",
    EnterYourPhone: "Enter your phone",
    EnterYourAddress: "Enter your address",
    CreateOrderError: "Cannot create new order. Please try again later",
    AccountNumner: "Account number",
    CardHolderName: "Cardholder Name",
    ExpirationDate: "Expiration Date",
    SecurityCode: "CVV",
    deleteSuccess:"SignOut Success",
    // myorder
    OrderId: "Order ID",
    MyOrder: "My Orders",
    NoOrder: "You don't have any orders",
    OrderDate: "Order Date: ",
    OrderStatus: "Status: ",
    OrderPayment: "Payment method: ",
    OrderTotal: "Total: ",
    OrderDetails: "Show detail",
    ShippingAddress: "Shipping Address:",
    Refund: "Refund",
    AddCredit: "AddCredit",

    PostDetails: "Post Details",
    FeatureArticles: "Feature articles",
    MostViews: "Most views",
    EditorChoice: "Editor choice",

    // settings
    Settings: "Settings",
    BASICSETTINGS: "BASIC SETTINGS",
    Language: "Language",
    INFO: "INFO",
    About: "About us",
    changeRTL: "Switch RTL",

    // language
    AvailableLanguages: "Available Languages",
    SwitchLanguage: "Switch Language",
    SwitchLanguageConfirm: "Switch language require an app reload, continue?",
    SwitchRtlConfirm: "Switch RTL require an app reload, continue?",

    // about us
    AppName: "MSTORE",
    AppDescription: "React Native template for mCommerce",
    AppContact: " Contact us at: mstore.io",
    AppEmail: " Email: support@mstore.io",
    AppCopyRights: "© MSTORE 2016",

    // contact us
    contactus: "Contact us",

    // form
    NotSelected: "Not selected",
    EmptyError: "This field is empty",
    DeliveryInfo: "Delivery Info",
    FirstName: "First Name",
    LastName: "Last Name",
    Address: "Address",
    City: "Town/City",
    State: "State",
    NotSelectedError: "Please choose one",
    Postcode: "Postcode",
    Country: "Country",
    Email: "Email",
    Phone: "Phone Number",
    Note: "Note",

    // search
    Search: "Search",
    SearchPlaceHolder: "Search product by name",
    NoResultError: "Your search keyword did not match any products.",
    Details: "Details",

    // filter panel
    Categories: "Categories",

    // sign up
    profileDetail: "Profile Details",
    firstName: "First name",
    lastName: "Last name",
    accountDetails: "Account Details",
    username: "Username",
    email: "Email",
    generatePass: "Use generate password",
    password: "Password",
    signup: "Sign Up",

    // filter panel
    Loading: "LOADING...",
    welcomeBack: "Welcome back! ",
    seeAll: "Show All",

    // Layout
    cardView: "Card ",
    simpleView: "List View",
    twoColumnView: "Two Column ",
    threeColumnView: "Three Column ",
    listView: "List View",
    default: "Default",
    advanceView: "Advance ",
    horizontal: "Horizontal ",

    couponCodeIsExpired: "This coupon code is expired",
    invalidCouponCode: "This coupon code is invalid",
    remove: "Remove",
    reload: "Reload",
    applyCouponSuccess: "Congratulations! Coupon code applied successfully ",
    applyCouponFailMin: `This minimum spend for this coupon is `,
    applyCouponFailMax: `This maximum spend for this coupon is `,

    OutOfStock: "OUT OF STOCK",
    ShippingType: "Shipping method",

    // Place holder
    TypeFirstName: "Type your first name",
    TypeLastName: "Type your last name",
    TypeAddress: "Type address",
    TypeCity: "Type your town or city",
    TypeState: "Type your state",
    TypeNotSelectedError: "Please choose one",
    TypePostcode: "Type postcode",
    TypeEmail: "Type email (Ex. acb@gmail.com), ",
    TypePhone: "Type your phone number",
    TypeNote: "Note",
    TypeCountry: "Select country",
    SelectPayment: "Select Payment method",
    close: "CLOSE",
    noConnection: "NO INTERNET ACCESS",

    // user profile screen
    AccountInformations: "Account Informations",
    PushNotification: "Push notification",
    DarkTheme: "Dark Theme",
    Privacy: "Privacy policies",
    SelectCurrency: "Select currency",
    Name: "Name",
    Currency: "Currency",
    Languages: "Languages",

    GetDataError: "Can't get data from server",
    UserOrEmail: "Username or email",
    Or: "Or",
    FacebookLogin: "Facebook Login",
    DontHaveAccount: "Don't have an account?",

    // Horizontal
    featureProducts: "Feature Products",
    bagsCollections: "Bags Collections",
    womanBestSeller: "Woman Best Seller",
    manCollections: "Man Collections",
    deleteTip:"Are You Sure You Want Yo Delete",
    // Modal
    Select: "Select",
    Cancel: "Cancel",
    Guest: "Guest",

    LanguageName: "English",

    // review
    vendorTitle: "Vendor",
    comment: "Leave a review",
    yourcomment: "Your comment",
    placeComment:
      "Tell something about your experience or leave a tip for others",
    writeReview: "Review",
    thanksForReview:
      "Thanks for the review, your content will be verify by the admin and will be published later",
    errInputComment: "Please input your content to submit",
    errRatingComment: "Please rating to submit",
    send: "Send",

    termCondition: "Term & Condition",
    Subtotal: "Subtotal",
    Discount: "Discount",
    Shipping: "Shipping",
    Taxes: "Taxes",
    Recents: "Recents",
    Filters: "Filters",
    Princing: "Pricing",
    Filter: "Filter",
    ClearFilter: "Clear Filter",
    ProductCatalog: "Product Catalog",
    ProductTags: "Product Tags",
    AddToAddress: "Add to Address",
    SMSLogin: "SMS Login",
    OrderNotes: "Order Notes",

    CanNotLogin: "Can not login, something was wrong!",
    PleaseCompleteForm: "Please complete the form!",
    ServerNotResponse: "Server doesn't response correctly",
    CanNotRegister: "Can't register user, please try again.",

    UserProfile: "User Profile",
    LoadMore: "Load More",
    RoseCrown: 'Vincent',
    WR: 'nunchuck jewelry',
    RegisterErr: "Please login first",
    MemberErr: "You are not a member, please register as a member first",
    RegisteredMembers: "Registered Member",
    MyPoints: "My Points",
    MyCoupon: "My Coupon",
    PointsErr: "You don't have enough credits",
    CouponErr: "Sorry, this coupon can only be used once",
    CouponInfo: "Coupon exchange information",
    Exchange: "Confirm the change",
    Coupon: "Coupon",
    ConversionCode: "Code",
    ForSuccessful: "Redeem successful, can go to my coupon to view"
  },
  cn: {
    AddCredit: "获取积分",
    Exit: "退出",
    ExitConfirm: "你确定要退出这个应用程序",
    YES: "是的",
    OK: "OK",
    ViewMyOrders: "查看我的订单",
    CANCEL: "取消",
    Confirm: "确认",
    pleaseLogin:'请先登录',
    ////场景的标题
    Home: "家",
    Intro: "介绍",
    Product: "产品",
    Cart: "购物车",
    WishList: "愿望列表",
    deleteButton:'删除该用户',
    InputPhone: "请填写您的电话号码",
    deleteTip:"确认要删除吗",
    // 家
    products: "产品",
    // TopBar
    ShowFilter: "子类别",
    HideFilter: "隐藏",
    Sort: "排序",
    textFilter: "最近",
    //类别
    ThereIsNoMore: "没有更多的产品展示",
    //产品
    addtocart: "添加项目到购物车",
    AddtoCart: "添加到购物车",
    AddtoWishlist: "添加到愿望列表",
    ProductVariations: "变化",
    NoVariation: "本产品无变型",
    AdditionalInformation: "描述",
    NoProductDescription: "无产品描述",
    ProductReviews: "评论",
    NoReview: "该产品目前还没有任何评论……",
    BUYNOW: "现在购买",
    ProductLimitWaring: "你不能添加超过10个产品",
    EmptyProductAttribute: "此产品没有任何属性",
    ProductFeatures: "功能",
    ErrorMessageRequest: "不能从服务器获取数据",
    NoConnection: "没有网络连接",
    ProductRelated: "你可能也喜欢",
    //购物车
    NoCartItem: "购物车里没有产品",
    Total: "总",
    EmptyCheckout: "对不起,您不能在空车里结账",
    RemoveCartItemConfirm: "从购物车中移除此产品 ?",
    MyCart: "购物车",
    Order: "完成",
    ShoppingCart: "购物车",
    ShoppingCartIsEmpty: "你的购物车是空的",
    Delivery: "物流",
    AddProductToCart: "将产品添加到购物车",
    TotalPrice: "总价格:",
    YourDeliveryInfo: "您的送货信息:",
    ShopNow: "商店",
    YourChoice: "你的愿望列表:",
    YourSale: "你的出售:",
    SubtotalPrice: "小计价格:",
    BuyNow: "现在购买",
    Items: "项目",
    Item: "项",
    ThankYou: "谢谢",
    FinishOrderCOD: "您可以使用订单号来跟踪运输状态",
    FinishOrder:
      "非常感谢您的购买,要查看您的送货状态请访问我的订单",
    NextStep: "下一步",
    ConfirmOrder: "确认订单",
    requireenterallfields: "请输入所有字段",
    Error: "错误",
    InvalidEmail: "无效的电子邮件地址",
    Finish: "完成",
    //列表
    NoWishListItem: "没有项目在愿望列表",
    MoveAllToCart: "添加所有到购物车",
    EmptyWishList: "空愿望列表",
    EmptyAddToCart: "抱歉,愿望列表是空的",
    RemoveWishListItemConfirm: "从愿望列表中删除该产品 ?",
    CleanAll: "清空",
    // Sidemenu
    SignIn: "登录",
    SignOut: "注销",
    GuestAccount: "客人账户",
    CantReactEmailError:
      "我们无法到达您的邮箱,请尝试其他登录方式",
    NoEmailError: "您的帐户没有有效的电子邮件地址",
    EmailIsNotVerifiedError:
      "您的电子邮件地址未经验证,我们不能信任您",
    Shop: "商店",
    News: "新闻",
    Contact: "联系我们",
    Setting: "设置",
    Login: "登录",
    Logout: "注销",
    Category: "类别",
    //付款
    Checkout: "结账",
    ProceedPayment: "继续支付",
    Purchase: "购买",
    CashOnDelivery: "货到付款",
    Paypal: "Paypal",
    Stripe: "Stripe",
    CreditCard: "信用卡",
    PaymentMethod: "付款方法 - 不选择",
    PaymentMethodError: "请选择您的支付方式",
    PayWithCoD: "货到付款",
    PayWithPayPal: "您的购买将通过PayPal支付",
    PayWithStripe: "您的购买将被Stripe支付",
    ApplyCoupon: "应用",
    CouponPlaceholder: "优惠券代码",
    CheckCouponDefault:"该优惠券已被未支付订单锁定,无法使用",
    NoCoupon:'抱歉，你没有兑换该优惠券，不能使用',
    APPLY: "应用",
    Back: "返回",
    CardNamePlaceholder: "姓名写在卡片上",
    BackToHome: "Back to Home",
    OrderCompleted: "您的订单已完成",
    OrderCanceled: "您的订单被取消",
    OrderFailed: "出了问题……",
    OrderCompletedDesc: "您的订单id是",
    OrderCanceledDesc:
      "你取消了订单。交易尚未完成",
    OrderFailedDesc:
      "我们在处理您的订单时遇到了一个错误。交易尚未完成。请再试一次",
    OrderTip:
      "提示: 你可以在侧边菜单的'我的订单'部分跟踪你的订单状态",
    Payment: "支付",
    Complete: "完成",
    EnterYourFirstName: "输入你的名字",
    EnterYourLastName: "输入你的姓氏",
    EnterYourEmail: "输入你的电子邮件",
    EnterYourPhone: "输入你的手机",
    EnterYourAddress: "输入您的地址",
    CreateOrderError: "无法创建新订单。请稍后再试",
    AccountNumner: "帐号",
    CardHolderName: "持卡人姓名",
    ExpirationDate: "截止日期",
    SecurityCode: "CVV",

    // myorder
    OrderId: "订单ID",
    MyOrder: "我的订单",
    NoOrder: "你没有任何订单",
    OrderDate: "订单日期:",
    OrderStatus: "状态:",
    OrderPayment: "付款方式:",
    OrderTotal: "总价:",
    OrderDetails: "细节",
    ShippingAddress: "送货地址:",
    Refund: "退款",
    AddCredit: "获取积分",
    PostDetails: "细节",
    FeatureArticles: "专题",
    MostViews: "多数意见",
    EditorChoice: "编辑选择",
    //设置
    Settings: "设置",
    BASICSETTINGS: "基本设置",
    Language: "语言",
    INFO: "信息",
    About: "关于我们",
    changeRTL: "开关",
    //语言
    AvailableLanguages: "语言",
    SwitchLanguage: "切换语言",
    SwitchLanguageConfirm: "切换语言需要重新加载应用程序,继续?",
    SwitchRtlConfirm: "Switch RTL需要重新加载应用程序,继续?",
    //关于我们
    AppName: "MSTORE",
    AppDescription: "React Native template for mCommerce",
    AppContact: "联系我们:mstore.io",
    AppEmail: "Email: support@mstore.io",
    appcopyright: "©MSTORE 2016",
    //联系我们
    contactus: "联系我们",
    //表单
    NotSelected: "不选择",
    EmptyError: "此字段为空",
    DeliveryInfo: "传递信息",
    FirstName: "名字",
    LastName: "姓",
    Address: "地址",
    City: "镇/城市",
    State: "州/区",
    NotSelectedError: "请选择一个",
    Postcode: "邮政编码",
    Country: "国家",
    Email: "电子邮件",
    Phone: "电话号码",
    Note: "注意",
    //搜索
    Search: "搜索",
    SearchPlaceHolder: "按名称搜索产品",
    NoResultError: "您的搜索关键词与任何产品都不匹配。",
    Details: "细节",
    //过滤板
    Categories: "类别",
    //注册
    profileDetail: "个人资料详情",
    firstName: "名字",
    lastName: "姓",
    accountdetail: "账户信息",
    username: "用户名",
    email: "电子邮件",
    generatpass: "使用生成密码",
    password: "密码",
    signup: "注册",
    //过滤板
    Loading: "加载……",
    welcomeBack: "欢迎回来!",
    seeAll: "显示所有",
    //布局
    cardView: "卡",
    simpleView: "列表视图",
    twoColumnView: "Two Column ",
    threeColumnView: "三列",
    listView: "列表视图",
    default: "默认",
    advanceView: "前进",
    horizontal: "水平",
    couponCodeIsExpired: "此优惠券代码已过期",
    invalidCouponCode: "此优惠券代码无效",
    remove: "删除",
    reload: "重新加载",
    applyCouponSuccess: "恭喜你!优惠券代码申请成功",
    applyCouponFailMin: '此优惠券的最低消费为',
    applyCouponFailMax: '此优惠券的最大消费为',
    OutOfStock: "脱销",
    ShippingType: "运输方式",
    //占位符
    TypeFirstName: "输入你的名字",
    TypeLastName: "输入你的姓",
    TypeAddress: "键入地址",
    TypeCity: "输入你的城镇或城市",
    TypeState: "输入你的州/区",
    TypeNotSelectedError: "请选择一个",
    TypePostcode: "邮编",
    TypeEmail: "输入email(例如acb@gmail.com),",
    TypePhone: "输入您的电话号码",
    TypeNote: "注意",
    TypeCountry: "选择",
    SelectPayment: "选择付款方式",
    close: "关闭",
    noConnection: "没有互联网接入",
    //用户配置文件界面
    accountinformation: "账户信息",
    PushNotification: "推送通知",
    DarkTheme: "黑暗主题",
    Privacy: "隐私政策",
    SelectCurrency: "选择货币",
    Name: "名字",
    Currency: "货币",
    Languages: "语言",
    GetDataError: "无法从服务器获取数据",
    UserOrEmail: "用户名或电子邮件",
    Or: "或",
    FacebookLogin: "Facebook登录",
    DontHaveAccount: "没有账户?",
    //水平
    featureProducts: "特色产品",
    bagsCollections: "包集合",
    womanBestSeller: "女性畅销书",
    manCollections: "集合",
    deleteSuccess:"删除成功",
    //模态
    Select: "选择",
    Cancel: "取消",
    Guest: "客人",
    LanguageName: "英语",
    //评论
    vendorTitle: "供应商",
    comment: "留下评论",
    yourcomment: "你的评论",
    placeComment:
      "说说你的经历或者给别人留点小费",
    writeReview: "评论",
    thanksForReview:
      "感谢审核,您的内容将由管理员审核,稍后发布",
    errInputComment: "请输入要提交的内容",
    errRatingComment: "请评分提交",
    send: "发送",
    termCondition: "条款与条件",
    Subtotal: "小计",
    Discount: "折扣",
    Shipping: "航运",
    Taxes: "税",
    Recents: "最近",
    Filters: "过滤器",
    Princing: "定价",
    Filter: "过滤器",
    ClearFilter: "清除过滤器",
    ProductCatalog: "产品目录",
    ProductTags: "产品标签",
    AddToAddress: "添加到地址",
    SMSLogin: "短信登录",
    OrderNotes: "订单",

    CanNotLogin: "无法登录，出现问题!",
    PleaseCompleteForm: "请填写表格!",
    ServerNotResponse: "服务器没有正确响应",
    CanNotRegister: "无法注册用户，请重试。",

    UserProfile: "用户资料",
    LoadMore: "加载更多",
    AccountInformations: "用户信息",
    RoseCrown: '双节棍',
    WR: '双节棍饰品',
    MemberCenter: "会员中心",
    RegisterErr: "请先登录",
    MemberErr: "您不是会员，请先注册成为会员",
    RegisteredMembers: "注册会员",
    MyPoints: "我的积分",
    MyCoupon: "我的优惠券",
    PointsErr: "您的积分不足",
    CouponErr: "抱歉，该券只能使用一次",
    CouponInfo: "优惠券兑换信息",
    Exchange: "确认兌換",
    Coupon: "优惠券",
    ConversionCode: "兑换码",
    ForSuccessful: "兑换成功，可前往我的优惠券查看"
  },
  tc: {
    Exit: "退出",
    ExitConfirm: "你確定要退出此程序",
    YES: "是的",
    OK: "OK",
    ViewMyOrders: "查看我們的訂單",
    CANCEL: "取消",
    Confirm: "確認",
    pleaseLogin:"請先登錄",
    ////场景的标题
    Home: "家",
    Intro: "介紹",
    Product: "產品",
    Cart: "購物車",
    WishList: "願望列表",
    InputPhone: "請填寫您的電話號碼",
    deleteSuccess:"删除成功",
    // 家
    products: "產品",
    deleteTip:"確認要删除嗎",
    // TopBar
    ShowFilter: "子類別",
    HideFilter: "應藏",
    Sort: "排序",
    textFilter: "最近",
    deleteButton:'删除該用戶',
    //类别
    ThereIsNoMore: "沒有更多的產品展示",
    //产品
    addtocart: "添加項目到購物車",
    AddtoCart: "添加到購物車",
    AddtoWishlist: "添加到願望列表",
    ProductVariations: "變化",
    NoVariation: "本產品無變形",
    AdditionalInformation: "描述",
    NoProductDescription: "無產品描述",
    ProductReviews: "評論",
    NoReview: "該產品目前還沒有評論……",
    BUYNOW: "現在購買",
    ProductLimitWaring: "你不能添加超過10個產品",
    EmptyProductAttribute: "此產品麽有任何屬性",
    ProductFeatures: "功能",
    ErrorMessageRequest: "不能不衝服務獲取數據",
    NoConnection: "沒有網絡連結",
    ProductRelated: "你可能也喜歡",
    //购物车
    NoCartItem: "購物車裡沒有產品",
    Total: "總",
    EmptyCheckout: "對不起，您不能在空車結帳",
    RemoveCartItemConfirm: "從購物車移除此產品?",
    MyCart: "購物車",
    Order: "完成",
    ShoppingCart: "購物車",
    ShoppingCartIsEmpty: "你的購物車是空的",
    Delivery: "物流",
    AddProductToCart: "將產品添加到購物車",
    TotalPrice: "總價格:",
    YourDeliveryInfo: "您的送貨信息:",
    ShopNow: "商店",
    YourChoice: "您的願望列表:",
    YourSale: "您的出售:",
    SubtotalPrice: "小計價格:",
    BuyNow: "現在購買",
    Items: "項目",
    Item: "項",
    ThankYou: "謝謝",
    FinishOrderCOD: "您可以使用訂單號來跟蹤運輸狀態",
    FinishOrder:
      "非常感謝您的購買,要查看您的送貨狀態請訪問我的訂單",
    NextStep: "下一步",
    ConfirmOrder: "確認訂單",
    requireenterallfields: "請輸入所有字段",
    Error: "錯誤",
    InvalidEmail: "無效的電子郵箱地址",
    Finish: "完成",
    //列表
    NoWishListItem: "沒有項目在願望列表",
    MoveAllToCart: "添加所有到購物車",
    EmptyWishList: "空願望列表",
    EmptyAddToCart: "抱歉，願望列表是空的",
    RemoveWishListItemConfirm: "從願望列表中刪除該產品?",
    CleanAll: "清空",
    // Sidemenu
    SignIn: "登錄",
    SignOut: "註銷",
    GuestAccount: "客人帳戶",
    CantReactEmailError:
      "我們無法到達您的郵箱，請嘗試其他登錄方式",
    NoEmailError: "您的帳戶沒有有效的電子郵箱地址",
    EmailIsNotVerifiedError:
      "您的電子郵箱未經驗證，我們不能信任您",
    Shop: "商店",
    News: "新聞",
    Contact: "聯繫我們",
    Setting: "設置",
    Login: "登錄",
    Logout: "註銷",
    Category: "類別",
    //付款
    Checkout: "結帳",
    ProceedPayment: "繼續支付",
    Purchase: "購買",
    CashOnDelivery: "貨到付款",
    Paypal: "Paypal",
    Stripe: "Stripe",
    CreditCard: "信用卡",
    PaymentMethod: "付款方法 - 不選擇",
    PaymentMethodError: "請選擇您的支付方式",
    PayWithCoD: "活到膚況",
    PayWithPayPal: "您的購買將通過PayPal支付",
    PayWithStripe: "您的購買將被Stripe支付",
    ApplyCoupon: "應用",
    CouponPlaceholder: "優惠券代碼",
    CheckCouponDefault:'該優惠券已被未支付訂單鎖定，無法使用',
    NoCoupon:'抱歉，你沒有兌換該優惠券，无法使用',
    APPLY: "應用",
    Back: "返回",
    CardNamePlaceholder: "姓名寫在卡片上",
    BackToHome: "返回主頁",
    OrderCompleted: "您的訂單已完成",
    OrderCanceled: "您的訂單被取消",
    OrderFailed: "出了問題……",
    OrderCompletedDesc: "您的訂單id是",
    OrderCanceledDesc:
      "你取消的訂單。交易尚未完成",
    OrderFailedDesc:
      "我們在處理您的訂單是遇到了一個錯誤。交易尚未完成。請再試一次",
    OrderTip:
      "提示: 你可以在側邊菜單的‘我的訂單’部分跟蹤你的訂單狀態",
    Payment: "支付",
    Complete: "完成",
    EnterYourFirstName: "請輸入你的名字",
    EnterYourLastName: "請輸入你的姓氏",
    EnterYourEmail: "請輸入你的電子郵箱",
    EnterYourPhone: "請輸入你的手機號",
    EnterYourAddress: "請輸入你的地址",
    CreateOrderError: "無法創建新訂單。請稍候再試",
    AccountNumner: "帳號",
    CardHolderName: "持卡人姓名",
    ExpirationDate: "截止日期",
    SecurityCode: "CVV",

    // myorder
    OrderId: "訂單ID",
    MyOrder: "我的訂單",
    NoOrder: "你沒有任何訂單",
    OrderDate: "訂單日期:",
    OrderStatus: "狀態:",
    OrderPayment: "付款方式:",
    OrderTotal: "總價:",
    OrderDetails: "細節",
    ShippingAddress: "送貨地址:",
    Refund: "退款",
    AddCredit: "獲取積分",
    PostDetails: "細節",
    FeatureArticles: "專題",
    MostViews: "多數意見",
    EditorChoice: "編輯選擇",
    //设置
    Settings: "設置",
    BASICSETTINGS: "基本設置",
    Language: "語言",
    INFO: "信息",
    About: "關於我們",
    changeRTL: "開關",
    //语言
    AvailableLanguages: "語言",
    SwitchLanguage: "切換語言",
    SwitchLanguageConfirm: "切换语言需要重新加載應用程序，繼續?",
    SwitchRtlConfirm: "Switch RTL需要重新加載應用程序，繼續?",
    //关于我们
    AppName: "MSTORE",
    AppDescription: "React Native template for mCommerce",
    AppContact: "聯繫我們:mstore.io",
    AppEmail: "Email: support@mstore.io",
    appcopyright: "©MSTORE 2016",
    //联系我们
    contactus: "聯繫我們",
    //表单
    NotSelected: "不選擇",
    EmptyError: "此字段為空",
    DeliveryInfo: "傳遞信息",
    FirstName: "名字",
    LastName: "姓",
    Address: "地址",
    City: "鎮/城市",
    State: "州/區",
    NotSelectedError: "請選擇一個",
    Postcode: "郵政編碼",
    Country: "國家",
    Email: "電子郵箱",
    Phone: "電話號碼",
    Note: "注意",
    //搜索
    Search: "搜索",
    SearchPlaceHolder: "按名稱搜索產品",
    NoResultError: "您的搜索關鍵詞與任何產品都不匹配。",
    Details: "細節",
    //过滤板
    Categories: "類別",
    //注册
    profileDetail: "個人資料詳情",
    firstName: "名字",
    lastName: "姓",
    accountdetail: "帳戶信息",
    username: "用戶名",
    email: "電子郵箱",
    generatpass: "使用生成密碼",
    password: "密碼",
    signup: "註冊",
    //过滤板
    Loading: "加載……",
    welcomeBack: "歡迎回來!",
    seeAll: "顯示所有",
    //布局
    cardView: "卡",
    simpleView: "列表視圖",
    twoColumnView: "T兩列 ",
    threeColumnView: "三列",
    listView: "列表視圖",
    default: "默認",
    advanceView: "前進",
    horizontal: "水平",
    couponCodeIsExpired: "此優惠券代碼已過期",
    invalidCouponCode: "此優惠券代碼無效",
    remove: "刪除",
    reload: "重新加載",
    applyCouponSuccess: "恭喜你!優惠券代碼聲請成功",
    applyCouponFailMin: '此優惠券的最小優惠為',
    applyCouponFailMax: '此優惠券的最大消費為',
    OutOfStock: "脫銷",
    ShippingType: "運輸方式",
    //占位符
    TypeFirstName: "輸入你的名字",
    TypeLastName: "輸入你的姓",
    TypeAddress: "鍵入地址",
    TypeCity: "輸入的城鎮或城市",
    TypeState: "輸入你的州/區",
    TypeNotSelectedError: "請選擇一個",
    TypePostcode: "郵編",
    TypeEmail: "輸入email(例如acb@gmail.com),",
    TypePhone: "輸入的電話號碼",
    TypeNote: "注意",
    TypeCountry: "選擇",
    SelectPayment: "選擇付款方式",
    close: "關閉",
    noConnection: "沒有互聯網接入",
    //用户配置文件界面
    accountinformation: "帳戶信息",
    PushNotification: "推送通知",
    DarkTheme: "黑暗主題",
    Privacy: "隱私政策",
    SelectCurrency: "選擇貨幣",
    Name: "名字",
    Currency: "貨幣",
    Languages: "語言",
    GetDataError: "無法從服務器獲取數據",
    UserOrEmail: "用戶名或電子郵箱",
    Or: "或",
    FacebookLogin: "Facebook登錄",
    DontHaveAccount: "沒有帳戶?",
    //水平
    featureProducts: "特色產品",
    bagsCollections: "包集合",
    womanBestSeller: "女性暢銷書",
    manCollections: "集合",
    //模态
    Select: "選擇",
    Cancel: "取消",
    Guest: "客人",
    LanguageName: "英語",
    //评论
    vendorTitle: "供應商",
    comment: "留下評論",
    yourcomment: "你的評論",
    placeComment:
      "說說你的經歷或責給別人留點消費",
    writeReview: "評論",
    thanksForReview:
      "感謝審核，您的內容將由管理員審核，稍後發布",
    errInputComment: "請輸入要提交的內容",
    errRatingComment: "請評分提交",
    send: "發送",
    termCondition: "條款與條件",
    Subtotal: "小計",
    Discount: "折扣",
    Shipping: "航運",
    Taxes: "稅",
    Recents: "最近",
    Filters: "過濾器",
    Princing: "定價",
    Filter: "過濾器",
    ClearFilter: "清除過濾器",
    ProductCatalog: "產品目錄",
    ProductTags: "產品標籤",
    AddToAddress: "添加到地址",
    SMSLogin: "短信登錄",
    OrderNotes: "訂單",

    CanNotLogin: "無法登陸，請重試!",
    PleaseCompleteForm: "請填寫表格!",
    ServerNotResponse: "服務器沒有正確響應",
    CanNotRegister: "無法註冊用戶，請重試。",

    UserProfile: "用戶資料",
    LoadMore: "加載更多",
    AccountInformations: "用戶信息",
    RoseCrown: '雙節棍',
    WR: '雙節棍飾品',
    MemberCenter: "會員中心",
    RegisterErr: "請先登錄",
    MemberErr: "您不是會員，請先註冊成為會員",
    RegisteredMembers: "註冊會員",
    MyPoints: "我的積分",
    MyCoupon: "我的優惠券",
    PointsErr: "您的積分不足",
    CouponErr: "抱歉，該券只能使用一次",
    CouponInfo: "優惠券兌換信息",
    Exchange: "確認兌換",
    Coupon: "優惠券",
    ConversionCode: "兌換碼",
    ForSuccessful: "兌換成功，可前往我的優惠券查看"
  }
});
