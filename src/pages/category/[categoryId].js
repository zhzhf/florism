import { constant } from "@/constant/index";
import Header from "../component/Header";
import styles from '@/styles/Home.module.css'
import Footer from "../component/Footer";
import Contactus from "../component/Contactus";
import LoginPannel from "../component/LoginPannel";
import RegisterPannerl from "../component/ResgisterPannel";
import ForgetPassword from "../component/ForgetPassword";
import style from '@/styles/banner.module.css'
import { useState, useEffect } from "react";
import { spliceArr } from "@/method";
import GoodsScoll from "../component/GoodsScroll";
import BodyBanner from "../component/BodyBanner";
import DynamicComponent from "../component/Dynamic";
import Head from "next/head";
import CateScroll from "../component/cateScroll";
import { useRouter } from "next/router";
import DynamicButton from "../component/DynamicButton";
import GoodsItem from "../component/GoodsItem";
// import { ToastContainer, toast } from 'react-toastify';
import toast, { Toaster } from "react-hot-toast";
import Image from "next/image";
export default function Category({ categoryId, meta_desc, allcate, cate_desc, meta, cateList, data, top_banner, middle_banner, tiny_top_banner, tiny_middle_banner }) {
    // ////////////////////////////////console.log("----");
    //////////////////////////////console.log(data);
    ////console.log(data);
    ////console.log(cateList);
    //////console.log(categoryId);
    //////////////////console.log(tiny_middle_banner.alt)
    // //////////////////////console.log(tiny_top_banner,tiny_middle_banner);
    const router = useRouter();
    const [login, setLogin] = useState(false);
    const [bannerSize, setBannerSize] = useState(false);
    const [register, setRegister] = useState(false);
    const [visible, setVisible] = useState(false);
    const [flag, setFlag] = useState(1);
    const [category, setCategory] = useState([]);
    const [categoryPage, setCategoryPage] = useState(1);
    const [goodsList, setGoodsList] = useState([]);
    const [goodsPage, setGoodsPage] = useState(1);
    const resizeUpdate = (e) => {
        if (e.target.innerWidth <= 675) {
            setFlag(0);
        } else if (e.target.innerWidth <= 1100) {
            setFlag(1)
        } else {
            setFlag(2);
        }
        setBannerSize(window.innerWidth <= 800 ? true : false);
    }
//console.log(cate_desc);
    useEffect(() => {
        window.addEventListener("resize", resizeUpdate);
        if (window.innerWidth <= 675) {
            //////////////////////////////////console.log("====", e.target.innerWidth);
            setFlag(0);
        } else if (window.innerWidth <= 1100) {
            setFlag(1)
        } else {
            //////////////////////////////////console.log("-----", e.target.innerWidth);
            setFlag(2);
        }
        setBannerSize(window.innerWidth <= 675 ? true : false);
        return () => {
            window.removeEventListener("resize", resizeUpdate);
        }
    }, [])
    useEffect(() => {
        //////////////////////////////////console.log("flag改變", flag);
        setCategory(spliceArr(allcate, !flag ? 4 : flag === 1 ? 6 : flag === 2 && 8, 1));
        //////////////////////////////////console.log(spliceArr(GoodsPage,  !flag ? 4 :flag===1? 6:flag===2&&8))
        setGoodsList(spliceArr(data.data, !flag ? 4 : flag === 1 ? 6 : flag === 2 && 8));
        setGoodsPage(1);
        setCategoryPage(1);
    }, [flag])

    // const checkname = () => {
    //     //    ////////////////////////////////console.log(goodsList);
    //     let res = allcate.filter((item) => {
    //         if (item.id === data.data[0].flower_category_id) {
    //             return item;
    //         }
    //     })

    //     return res[0].categoryname;
    // }
    ////////////console.log(data)
    useEffect(() => {
        ////////////console.log(bannerSize)
        // ////////////////////////////////console.log(goodsList);
    }, [bannerSize])
    ////////////////////////////console.log("======");
    ////////////////////////////console.log(data);
    return (<div>
        <Head>
            {/* <meta title={`${meta.title}`}  /> */}
            <title>{`${meta?.title !== "" ? meta?.title : (data?.category_name + " | 「Floralism」香港花店")}`}</title>
            <meta name={'descirption'} content={`${meta?.metadescription}`} />
            <meta name={'keywords'} content={`${meta?.keyword}`} />
        </Head>
        <DynamicComponent cateList={cateList} setLogin={setLogin} />
        <div style={{ width: '100%', display: 'flex', color: 'white', position: 'relative', backgroundPosition: 'revert', backgroundImage: bannerSize ? `url(${tiny_top_banner?.coverimage})` : `url(${top_banner?.coverimage})`, marginBottom: 0 }} className={styles.banner} >
            {/* <Image priority src="/homepage/top-banner.png" width={1920} height={700} style={{width:'100%'}}/> */}
            <div className={(categoryId === "紀念日花束" || categoryId === "母親節花束") ? styles.spec_banner : styles.top_banner_area} style={{ display: "flex", flexDirection: 'column', alignItems: 'center' }}>
                <div style={{ display: "flex", flexDirection: 'column', alignItems: 'center', marginRight: categoryId === '母親節花束' ? '20%' : 0, marginTop: categoryId === '母親節花束' ? '5%' : 0 }}>
                    <img alt={bannerSize ? (tiny_top_banner?.alt?.length ? tiny_top_banner.alt[0] : "") : (top_banner?.alt?.length ? top_banner?.alt[0] : "")} src={bannerSize ? tiny_top_banner?.descriptionimage : top_banner?.descriptionimage} style={{ width: '100%' }} />
                    <a href={`${data?.data?.length ? "/productSearch/" + data?.category_name : "/"}`} onClick={() => {
                        //////////////////console.log(data);
                        // data.data.length ?
                        //     router.push(`/productSearch/${data.data[0].flower_category_id}`)
                        //     : router.push('/')
                    }} style={{ border: 'none', display: 'block', cursor: 'pointer' }} className={styles.banner_buttom} >點擊選購</a>
                </div>
            </div>
        </div>
        <div className="c1 container" >
            <div className={`row`} style={{ margin: '2.5rem 0' }}>
                <div style={{ padding: '0 2%' }} >
                    <div className={styles.keywords_area} style={{ textAlign: 'center', padding: '1rem 0', color: 'rgba(255, 255, 255, 1)', letterSpacing: 0.1, textDecorationLine: 'underline', fontWeight: 'bold' }}>{`${meta?.title}`}</div>
                </div>
            </div>
        </div>
        <div className="c1 container" >
            <div className={`row`} style={{ margin: '2.5rem 0' }}>
                <div style={{ padding: '0 2%' }} >
                    <GoodsScoll
                        title={""}
                        list={goodsList}
                        page={goodsPage}
                        id={data?.data[0]?.flower_category_id ?? 0}
                        setPage={setGoodsPage}
                        perPage={!flag ? 4 : flag === 1 ? 6 : flag === 2 && 8}
                        maxPage={data?.last_page}
                        setList={setGoodsList}
                        animation
                        type={''}
                        page_type={"category"}
                        cate_desc={cate_desc}
                        meta_desc={meta_desc}
                    // se_title={}
                    />
                </div>
            </div>
        </div>
        {/* <div style={{ width: '100%', position: 'relative' }}>
            {
                <img alt={flag < 2 ? (tiny_middle_banner?.alt?.length > 2 ? tiny_middle_banner?.alt[2] : "") : (middle_banner?.alt?.length > 2 ? middle_banner?.alt[2] : "")} src={flag < 2 ? tiny_middle_banner?.coverimage : middle_banner?.coverimage} style={{ width: '100%', height: '100%', display: 'block' }}></img>
            }
            <div className={style.banner_desc} style={{}}>
                <div style={{ textOverflow: 'ellipsis' }}>
                    <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                        <img alt={flag < 2 ? (tiny_middle_banner?.alt?.length > 1 ? tiny_middle_banner.alt[1] : "") : (middle_banner?.alt?.length > 1 ? middle_banner?.alt[1] : "")} src={flag < 2 ? tiny_middle_banner?.descriptionimage : middle_banner?.descriptionimage} style={{ width: '100%' }} />
                    </div>
                </div>
            </div>
        </div> */}
        <BodyBanner
          flag={flag}
          imgTiny={tiny_middle_banner?.coverimage}
          img={middle_banner?.coverimage}
          title={`【FLORALISM】 ${categoryId}寓意`}
          desc1={cate_desc.metadescription2}
        //   desc2={}
        />
        <div className="c1 container" >
            <div className={`row`} style={{ margin: '2.5rem 0' }}>
                <div style={{ padding: '0 2%' }} >
                    <div style={{ display: 'flex', alignItems: 'center' }}>
                        {flag !== 0 && <div className={styles.distance}></div>}
                        <div className={styles.title} style={{ whiteSpace: 'nowrap', flex: 1 }}>{'【FLORALISM】 全部分類'}</div>
                        {flag !== 0 && <div className={styles.distance}></div>}
                    </div>
                    <div style={{ display: 'flex', flexWrap: 'wrap' }}>
                        {
                            allcate?.map((item, index) => {
                                return <GoodsItem key={index} src={item?.src} item={item} title={item?.categoryname} price={item?.price} type={'category'} animation={'animation'} />
                            })
                        }
                    </div>
                    {cate_desc?.metatitle3!==""&&<div style={{ display: 'flex', alignItems: 'center', margin: '2.5rem 0' }}>
                        <div className={styles.distance}></div>
                        <div className={styles.title}>{cate_desc?.metatitle3}</div>
                        <div className={styles.distance}></div>
                    </div>}
                </div>
            </div>
        </div>
        <div className="c1 container" >
            <div className={`row`} style={{ margin: '2.5rem 0' }}>
                <div style={{ padding: '0 4%' }} >
                    <Contactus />
                </div>
            </div>
        </div>
        <Footer />
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
        {/* {!login && <ToastContainer />} */}
        {!login && <DynamicButton />}
        {/* {!login && <Toaster
            position="top-center"
        />} */}
    </div>)
}


export async function getStaticPaths() {
    const response = await fetch(
        `${constant.api_url}/api/Flowercategory/allIndex`, {
        mode: 'cors',
        headers: {
            // "Authorization": `Bearer ${data.cookie}`,
            "Content-Type": "application/json",
            "Access-Control-Request-Method": "POST",
            "Access-Control-Request-Headers": "Content-Type",
        }
    }
    );
    const data = await response.json();
    // ////////////console.log(data);
    let res = [];
    data.data.map((item, index) => {
        res.push({ params: { categoryId: item.categoryname.toString() } });
    })
    //////////////////console.log(res);
    // ////////////////////////////////console.log(res);
    // const data=await response.json()
    // TODO get product id to be array
    return {
        paths: res,
        fallback: true,
    };
}

export async function getStaticProps(context) {
    const { params } = context;
    ////////////console.log(params);

    const response = await fetch(
        `${constant.api_url}/api/flowers/index?keyword=&flower_category_name=${params.categoryId}`, {
        mode: 'cors',
        headers: {
            // "Authorization": `Bearer ${data.cookie}`,
            "Content-Type": "application/json",
            "Access-Control-Request-Method": "POST",
            "Access-Control-Request-Headers": "Content-Type",
        }
    }
    );
    // const List_response = await fetch(
    //     `${constant.api_url}/api/Flowercategory/allIndex`, {
    //     mode: 'cors',
    //     headers: {
    //         // "Authorization": `Bearer ${data.cookie}`,
    //         "Content-Type": "application/json",
    //         "Access-Control-Request-Method": "POST",
    //         "Access-Control-Request-Headers": "Content-Type",
    //     }
    // }
    // );
    const banner = await fetch(`${constant.api_url}/api/banner/index`, {
        mode: 'cors',
        headers: {
            // "Authorization": `Bearer ${data.cookie}`,
            "Content-Type": "application/json",
            "Access-Control-Request-Method": "POST",
            "Access-Control-Request-Headers": "Content-Type",
        }
    })

    const tt_response = await fetch(
        `${constant.api_url}/api/flowercategory/index`, {
        mode: 'cors',
        headers: {
            // "Authorization": `Bearer ${data.cookie}`,
            "Content-Type": "application/json",
            "Access-Control-Request-Method": "POST",
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
            "Access-Control-Request-Method": "POST",
            "Access-Control-Request-Headers": "Content-Type",
        }
    }
    )
    // let list=await List_response.json();
    let allcate = await allcate_response.json();
    const tt_data = await tt_response.text()
    const data = await response.text();
    const banner_list = await banner.json();

    let cateId = allcate.data.filter((item, index) => {
        if (item.categoryname === params.categoryId) {
            return item;
        }
    })
    //console.log("0----0")
    //console.log(cateId);
    // //console.log(JSON.parse(tt_data).data[0].get_child)
    let meta_desc = JSON.parse(tt_data).data.filter((item, index) => {
        //console.log(item.categoryname, params.categoryId);
        if (item.categoryname === params.categoryId) {
            return item;
        }
    })
    //console.log("-------");
    //console.log(meta_desc);
    // ////console.log("========");
    // ////console.log(cateId[0]);
    //////////////////////////console.log(JSON.parse(data).data);
    ////////////////////////////console.log("--------");
    ////////////////////console.log(banner_list.data.top_banner);
    // //////////////////////console.log(banner_list.data.top_banner.web);
    // //////////////////////console.log(banner_list.data.middle_banner);
    ////////////////////////////console.log(params.categoryId)
    // ////////////console.log(JSON.parse(data).data.data.length);
    // let list=JSON.parse(tt_data);
    // //////////////////////console.log(list);
    //////////////////////console.log(allcate.data);
    // ////////////console.log(res[0]);
    let meta = {
        keyword: cateId[0]?.keywords,
        title: cateId[0]?.metatitle ?? "",
        metadescription: cateId[0]?.metadescription ?? "",
    }

    ////////////////////console.log(meta);

    let top_banner = banner_list.data.top_banner.web.filter((item) => {
        // ////////////console.log(item.flower_category_ids,cateId[0].id)
        if (item.flower_category_ids.includes(parseInt(cateId[0].id))) {
            ////////////////////////////console.log("找到了");
            return item;
        }
    })
    let tiny_top_banner = banner_list.data.top_banner.mobile.filter((item) => {

        if (item.flower_category_ids.includes(parseInt(cateId[0].id))) {
            ////////////////////////////console.log("找到了");
            return item;
        }
    })
    // ////console.log(cateId[0].id);
    let middle_banner = banner_list.data.middle_banner.web.filter((item) => {
        if (item.flower_category_ids.includes(parseInt(cateId[0].id))) {
            return item;
        }
        // ////////////////////////////console.log(item.flower_category_ids.includes(params.categoryId))
    })
    let tiny_middle_banner = banner_list.data.middle_banner.mobile.filter((item) => {
        //////////////////////console.log(item.flower_category_ids);
        if (item.flower_category_ids.includes(parseInt(cateId[0].id))) {
            ////////////////////////////console.log("找到了");
            return item;
        }
    })
    ////////////console.log("======================");

    // ////console.log(data);
    //////////////////console.log(top_banner, middle_banner);
    ////////////console.log(tiny_top_banner, tiny_middle_banner);
    ////////////console.log(middle_banner,top_banner)
    // //////////////////////console.log(JSON.parse(data).data);
    // //////////////////////console.log()
    //////////////////////console.log(meta);
    console.log(cateId[0]);
    return {
        props: {
            categoryId: params.categoryId,
            allcate: allcate.data,
            cateList: JSON.parse(tt_data).data,
            data: JSON.parse(data).data,
            meta: meta,
            cate_desc: cateId.length && cateId[0],
            meta_desc: meta_desc,
            top_banner: top_banner.length ? top_banner[0] : { coverimage: `${constant.api_url}/uploads/20230523/637cfca2255479e7b2fb99f6364b11b4.png)`, descriptionimage: `${constant.api_url}/uploads/20230601/a0175c1d8f3f40eae16a007b632426bd.png` },
            tiny_top_banner: tiny_top_banner.length ? tiny_top_banner[0] : { coverimage: `https://admin.floralismhk.com/uploads/20230531/bc5d6275780e4f4a4d02711d787936dc.png`, descriptionimage: `${constant.api_url}/uploads/20230601/a0175c1d8f3f40eae16a007b632426bd.png` },
            middle_banner: middle_banner.length ? middle_banner[0] : { coverimage: `https://admin.floralismhk.com/uploads/20230531/1932d9f810c34c19f49de7bb8dc47b31.png`, descriptionimage: `${constant.api_url}/uploads/20230531/a73467978f2b41da91b88593d370858a.png` },
            tiny_middle_banner: tiny_middle_banner.length ? tiny_middle_banner[0] : { coverimage: `${constant.api_url}/uploads/20230523/637cfca2255479e7b2fb99f6364b11b4.png`, descriptionimage: `${constant.api_url}/uploads/20230601/a0175c1d8f3f40eae16a007b632426bd.png` },
        },
        revalidate: 1,
    };
}