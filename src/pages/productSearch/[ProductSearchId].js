import Header from "../component/Header";
import Footer from "../component/Footer";
import styles from '@/styles/Home.module.css'
import style from '@/styles/productSearch.module.css'
import SearchInput from "../component/SearchInput";
import GoodsItem from "../component/GoodsItem";
import Head from "next/head";
import { useEffect, useRef, useState } from "react";
import { spliceArr } from "@/method";
import { constant } from "../../constant";
import GoodsScoll from "../component/GoodsScroll";
import DynamicComponent from "@/pages/component/Dynamic";
import { useMutation } from "@tanstack/react-query";
import m_api from "../../m_api";
import { useRouter } from "next/router";
import useDebounce from '@/hooks/useDebounce'
import useThrottle from "../../hooks/useThrottle";
// import { ToastContainer, toast } from 'react-toastify';
import toast, { Toaster } from "react-hot-toast";
import LoginPannel from "../component/LoginPannel";
import DynamicButton from "../component/DynamicButton";
export default function ProductSearch({ tiny_top_banner, meta, cateList, data, top_banner }) {
  ////////////////////console.log(data);
  const router = useRouter();
  // const debounce=useDebounce();
  const [flag, setFlag] = useState(false);
  const [page, setPage] = useState(1);
  const [login, setLogin] = useState(false);
  const [register, setRegister] = useState(false);
  const [visible, setVisible] = useState(false);
  const [goodsList, setGoodsList] = useState([]);
  const [type, setType] = useState(false);
  const [searchResult, setSearchResult] = useState([]);
  const input = useRef();
  const [keyword, setKeyWord] = useState("")
  const fetchGoods = useMutation({
    mutationKey: ['fetchGoods'],
    mutationFn: async (data) => await m_api.fetchGoods(data),
  })

  const ToSearch = (data) => {
    ////////////////////////////console.log("點擊了");
    // ////////////////////console.log(keyword);
    setType(true);
    fetchGoods.mutate({ keyword: data, flower_category_id: "", listRows: 16, page: page }, {
      onSuccess: async (res) => {
        // let _res = await res.json();
        if (res.code === 1) {
          setSearchResult(res.data.data);
          ////////////////////////////console.log(_res);
          setPage(1);
        } else {
          toast.error(res.msg);
        }
      },
      onError: (res) => {
        //////////////////////////////console.log(res);
        if (res instanceof Error) {
          toast.error(res.msg);
        } else toast.error(JSON.stringify(res.msg))
      }
    })
  }
  const resizeUpdate = (e) => {
    if (e.target.innerWidth <= 675) {
      ////////////////////////////////console.log("====", e.target.innerWidth);
      setFlag(true);
    } else {
      ////////////////////////////////console.log("-----", e.target.innerWidth);
      setFlag(false);
    }
  }
  useEffect(() => {
    window.addEventListener("resize", resizeUpdate);
    let str;
    window.innerWidth < 675 ? (!flag && setFlag(true)) : (flag && setFlag(false))
    // window.addEventListener("keypress", (e) => {

    //   if (e.key === "Enter") {
    //     ToSearch();
    //     if (keyword === "") {
    //       setSearchResult([]);
    //     }
    //   }
    // })

    return () => {
      window.removeEventListener("resize", resizeUpdate);
    }

  }, [])

  useEffect(() => {
    ////////////////////////////////console.log("flag改變", flag);
    setPage(1);
    setGoodsList(spliceArr(data.data, 16))
    // setCategoryPage(1);
  }, [flag])

  useEffect(() => {
    ////////////////////////////////console.log(goodsList)

  }, [])

  return (<div style={{ position: 'relative' }}>
    <Head>
      <title>{`${meta?.title !== "" ? meta?.title : (data?.category_name + " | 「Floralism」香港花店")}`}</title>
      <meta name={'descirption'} content={`${meta?.metadescription}`} />
      <meta name={'keywords'} content={`${meta?.keyword}`} />
    </Head>
    <DynamicComponent cateList={cateList} setLogin={setLogin} />
    <div style={{ width: '100%', position: 'relative' }}>
      <img alt={flag ? (tiny_top_banner?.alt?.length ? tiny_top_banner?.alt[0] : "") : (top_banner?.alt?.length ? top_banner.alt[0] : "")} src={flag ? tiny_top_banner?.coverimage : top_banner?.coverimage} style={{ width: '100%' }} />
      <div className={style.banner_search} style={{ position: 'absolute' }}>
        <img alt={flag ? (tiny_top_banner?.alt?.length > 1 ? tiny_top_banner?.alt[1] : "") : (top_banner?.alt?.length ? top_banner.alt[1] : "")} src={flag ? tiny_top_banner?.descriptionimage : top_banner?.descriptionimage} className={style.banner_desc}
        />
        <div className={`${styles.search_area}`} style={{ marginBottom: 12 }}>
          <span className={`${styles.serach_icon} iconfont`} style={{ marginLeft: 8 }}>&#xe82e;</span>
          <input
            ref={input}
            type='text'
            value={keyword}
            onInput={(e) => {
              setKeyWord(e.target.value);
              useDebounce(() => ToSearch(e.target.value), 2000)()
            }}
            placeholder='Search....'
            className={`${styles.input}`}
            style={{ flex: 1, padding: 1, marginLeft: 10, border: "none", outline: "none", backgroundColor: 'transparent' }}
          />
        </div>
      </div>
    </div>
    <div className={`${style.search_main_body}`} style={{ marginBottom: 32 }}>
      {/* <GoodsItem /> */}
      {/* <GoodsScoll
                 list={goodsList}
                 page={page} 
                 type={''} 
                 setPage={setPage} 
                 title={'【FLORALISM】 玫瑰'}
                 top_style={{marginBottom:24}}
                 ButtonGroupStyle={{marginTop:6}}
                 animation
                 click={(data) => {
                    ////////////////////////////////console.log(data);
                    
                  }}
                 /> */}
      {/* {
        keyword.trim()!==""? */}
      <GoodsScoll
        title={keyword !== "" ? "搜索結果" : data?.category_name}
        list={keyword !== "" ? searchResult : goodsList}
        page={page}
        id={data?.data[0]?.flower_category_id ?? 0}
        setPage={setPage}
        perPage={16}
        maxPage={data?.last_page}
        setList={setGoodsList}
        animation
        type={''}
      />
      {/* :
        <GoodsScoll
          title={data.category_name}
          list={goodsList}
          page={page}
          id={data?.data[0]?.flower_category_id ?? 0}
          setPage={setPage}
          perPage={16}
          maxPage={data.last_page}
          setList={setGoodsList}
          animation
          type={''}
        />} */}
    </div>
    <Footer />
    {/* {!login&&<ToastContainer />} */}
    {!login && <DynamicButton />}
    {/* {!login && <Toaster
      position="top-center"
    />} */}
    {
      <LoginPannel login={login} close={() => setLogin(false)} toRegister={() => {
        setLogin(false);
        setRegister(true);
      }} toForget={() => {
        setLogin(false);
        setVisible(true);
      }
      } />
    }
  </div>)
}


export async function getStaticPaths() {
  const response = await fetch(
    `${constant.api_url}/api/Flowercategory/allIndex`, {
    mode: 'cors',
    headers: {
      // "Authorization": `Bearer ${data.cookie}`,
      "Content-Type": "application/json",
      "Access-Control-Request-Method": "GET,POST",
      "Access-Control-Request-Headers": "Content-Type",
    }
  }
  );
  const data = await response.json()
  let res = [];
  data.data.map((item, index) => {
    res.push({ params: { ProductSearchId: item.categoryname.toString() } });

  })

  return {
    paths: res,
    fallback:true,
  };
}


export async function getStaticProps(context) {

  const { params } = context;
  // //////////////////////////////console.log(params);
  const response = await fetch(
    `${constant.api_url}/api/flowers/index?keyword=&flower_category_name=${params.ProductSearchId}&listRows=16`, {
    headers: {
      // "Authorization": `Bearer ${data.cookie}`,
      "Content-Type": "application/json",
      "Access-Control-Request-Method": "GET,POST",
      "Access-Control-Request-Headers": "Content-Type",
    }
  }
  );
  const allcate_response = await fetch(
    `${constant.api_url}/api/Flowercategory/allIndex`, {
    mode: 'cors',
    headers: {
      // "Authorization": `Bearer ${data.cookie}`,
      "Content-Type": "application/json",
      "Access-Control-Request-Method": "GET,POST",
      "Access-Control-Request-Headers": "Content-Type",
    }
  }
  );
  const allcate = await allcate_response.json();
  // ////////console.log(allcate,params)
  ;
  let cateId = allcate.data.filter((item, index) => {
    ////////console.log(item.categoryname===params.ProductSearchId);
    if (item.categoryname === params.ProductSearchId) {
      ////////console.log("=====");
      return item;
    }
  })
  ////////console.log(cateId);
  let meta = {
    keyword: cateId[0]?.keywords ?? "",
    title: cateId[0]?.metatitle ?? "",
    metadescription: cateId[0]?.metadescription ?? "",
  }
  let banner_list;
  let top_banner
  try {
    const banner = await fetch(`${constant.api_url}/api/banner/index`, {
      mode: 'cors',
      headers: {
        // "Authorization": `Bearer ${data.cookie}`,
        "Content-Type": "application/json",
        "Access-Control-Request-Method": "POST",
        "Access-Control-Request-Headers": "Content-Type",
      }
    })
    banner_list = await banner.json();
  } catch (e) {

  }
  //////////////////console.log("===");
  //////////////////console.log(banner_list.data.top_banner.web);
  top_banner = banner_list.data.top_banner.web.filter((item) => {
    //////////////////console.log(item.flower_category_ids, params.ProductSearchId);
    if (item.flower_category_ids.includes(parseInt(cateId[0].id))) {
      ////////////////////////console.log("找到了");
      return item;
    }
  })
  let tiny_top_banner = banner_list.data.top_banner.mobile.filter((item) => {
    //////////////////console.log(item.flower_category_ids, params.ProductSearchId);
    if (item.flower_category_ids.includes(parseInt(cateId[0].id))) {
      ////////////////////////console.log("找到了");
      return item;
    }
  })
  const tt_response = await fetch(
    `${constant.api_url}/api/flowercategory/index`, {
    headers: {
      // "Authorization": `Bearer ${data.cookie}`,
      "Content-Type": "application/json",
      "Access-Control-Request-Method": "GET,POST",
      "Access-Control-Request-Headers": "Content-Type",
    }
  }
  );
  const tt_data = await tt_response.text()
  const data = await response.text()
  //////////////////console.log("----");
  //////////////////console.log(tiny_top_banner);
  //////////////////console.log(top_banner);
  return {
    props: {
      cateList: JSON.parse(tt_data).data,
      data: JSON.parse(data).data,
      meta,
      top_banner: top_banner.length ? top_banner[0] : { coverimage: `/banner-搜索背景.png`, descriptionimage: `/product-search-desc.png` },
      tiny_top_banner: tiny_top_banner.length ? tiny_top_banner[0] : { coverimage: `/banner-搜索背景.png`, descriptionimage: `/product-search-desc.png` },
    },
    revalidate: 1,
  };
}