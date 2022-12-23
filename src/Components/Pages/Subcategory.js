// import React from "react";
// import { useDispatch, useSelector } from "react-redux";
// import { getSingleSubcategoryStart } from "../../Redux/Actions/SubcategoryAction";

// const Subcategory = () => {
//     const dispatch = useDispatch()
//     const subCatData = useSelector((state) => state?.subcategory?.cateData?.categoryData);
//     // console.log('SUBCAT-DATA~~~~~~~~~~~~~', subCatData)
  
//     const subCategoryData = useSelector((state) => state?.subcategory?.cateData?.categoryData);
//     console.log('SUBCATERGORY-DATA~~~~~~~~~~~', subCategoryData)
  
//     const handleClickSubcategory = (item) => {
//         dispatch(getSingleSubcategoryStart(item))
//     }
  
//     const handleClickSubcat = (data) => {
//       dispatch(getSingleSubcategoryStart(data))
//   }
//     return (
//         <>
//     <div className="container-scroller">
//       <div className="main-panel">
//       <div className="container-scroller">
//                 <div className="main-panel">
//                     <div className="flash-news-banner">
//                         <div className="container">
//                             <div className="d-lg-flex align-items-center justify-content-between">
//                                 <div className="d-flex align-items-center">
//                                     <span className="badge badge-dark mr-2">Flash News</span>
//                                 </div>
//                                 <div className="d-flex">
//                                     <span className="mr-4 text-danger">{date}</span>
//                                     <span className="text-danger">30°C, India</span>
//                                 </div>
//                             </div>
//                         </div>
//                     </div>
//                 </div>
//             </div>
//         <div className="content-wrapper">
//           <div className="container">
//             <div className="row" data-aos="fade-up">
//               <div className="col-xl-8 stretch-card grid-margin">
//                 <div className="position-relative">
//                   <img
//                     style={{ height: '93%', width: '100%', marginLeft: '6%' }}
//                     src="assets/images/dashboard/banner.jpg"
//                     alt="banner"
//                     className="img-fluid"
//                   />
//                   <div className="banner-content">
//                     <div className="badge badge-danger fs-12 font-weight-bold mb-3">
//                       global news
//                     </div>
//                     <h2 className="mb-0">GLOBAL PANDEMIC</h2>
//                     <h3 className="mb-2">
//                       Coronavirus Outbreak LIVE Updates: ICSE, CBSE Exams
//                       Postponed, 168 Trains
//                     </h3>
//                     <div className="fs-12">
//                       <span className="mr-2">Photo </span>10 Minutes ago
//                     </div>
//                   </div>
//                 </div>
//               </div>
//               <div className="col-xl-3 stretch-card grid-margin">
//                 <div className="card text-white" style={{ backgroundColor: 'black' }}>
//                   <div className="card-body">
//                     <h2>Latest news</h2>
//                     {latestnewsdata && latestnewsdata.map((item) => (
//                     <div
//                       className="d-flex border-bottom-blue pt-3 pb-4 align-items-center justify-content-between"
//                     >
//                       <div className="pr-3">
//                         <h6>{item.title}</h6>
//                         <div className="fs-10">
//                           <span className="mr-2">Photo </span>10 Minutes ago
//                         </div>
//                       </div>
//                       <div className="rotate-img">
//                         <img
//                           src={item.image}
//                           alt="thumb"
//                           className="img-fluid img-lg"
//                         />
//                       </div>
//                     </div>
//                      ))}
//                   </div>
//                 </div>
//               </div>
//             </div>
//             <div className="row" data-aos="fade-up">
//               <div className="col-lg-2 stretch-card grid-margin" style={{marginLeft :'3%'}}>
//                 <div className="card">
//                   <div className="card-body">
//                     <h3>Category</h3>
//                     {data && data.map((item) => (
//                     <ul className="vertical-menu">
//                         {item.header === 0 ? (
//                           <li onClick={() => handleClickCategory(item?.Subcategories)}><a>{item.category_name}</a></li>
//                         ): (null)} 
//                     </ul>
//                      ))}
//                   </div>
//                 </div>
//               </div>
//               <div className="col-lg-9 stretch-card grid-margin">
//                 <div className="card">
//                   <div className="card-body">
//                     {singleData && singleData.map((item) => (
//                       <div className="row">
//                         <div className="col-sm-4 grid-margin">
//                           <div className="position-relative">
//                           <li onClick={() => handleClickSubcategory(item.id)}><a>{item.subcategory_name}</a></li>
//                           </div>
//                         </div>
//                       </div>
//                     ))}
//                   </div>
//                 </div>
//               </div>
//             </div>
//             <div class="row" data-aos="fade-up">
//               <div class="col-sm-12 grid-margin">
//                 <div class="card">
//                   <div class="card-body">
//                     <div class="row">
//                       <div class="col-lg-8">
//                         <div class="card-title">
//                           Video
//                         </div>
//                         <div class="row">
//                           <div class="col-sm-6 grid-margin">
//                             <div class="position-relative">
//                               <div class="rotate-img">
//                                 <img
//                                   src="assets/images/dashboard/home_7.jpg"
//                                   alt="thumb"
//                                   class="img-fluid"
//                                 />
//                               </div>
//                               <div class="badge-positioned w-90">
//                                 <div
//                                   class="d-flex justify-content-between align-items-center"
//                                 >
//                                   <span
//                                     class="badge badge-danger font-weight-bold"
//                                     >Lifestyle</span
//                                   >
//                                   <div class="video-icon">
//                                     <i class="mdi mdi-play"></i>
//                                   </div>
//                                 </div>
//                               </div>
//                             </div>
//                           </div>

//                           <div class="col-sm-6 grid-margin">
//                             <div class="position-relative">
//                               <div class="rotate-img">
//                                 <img
//                                   src="assets/images/dashboard/home_8.jpg"
//                                   alt="thumb"
//                                   class="img-fluid"
//                                 />
//                               </div>
//                               <div class="badge-positioned w-90">
//                                 <div
//                                   class="d-flex justify-content-between align-items-center"
//                                 >
//                                   <span
//                                     class="badge badge-danger font-weight-bold"
//                                     >National News</span
//                                   >
//                                   <div class="video-icon">
//                                     <i class="mdi mdi-play"></i>
//                                   </div>
//                                 </div>
//                               </div>
//                             </div>
//                           </div>
//                         </div>
//                         <div class="row">
//                           <div class="col-sm-6 grid-margin">
//                             <div class="position-relative">
//                               <div class="rotate-img">
//                                 <img
//                                   src="assets/images/dashboard/home_9.jpg"
//                                   alt="thumb"
//                                   class="img-fluid"
//                                 />
//                               </div>
//                               <div class="badge-positioned w-90">
//                                 <div
//                                   class="d-flex justify-content-between align-items-center"
//                                 >
//                                   <span
//                                     class="badge badge-danger font-weight-bold"
//                                     >Lifestyle</span
//                                   >
//                                   <div class="video-icon">
//                                     <i class="mdi mdi-play"></i>
//                                   </div>
//                                 </div>
//                               </div>
//                             </div>
//                           </div>

//                           <div class="col-sm-6 grid-margin">
//                             <div class="position-relative">
//                               <div class="rotate-img">
//                                 <img
//                                   src="assets/images/dashboard/home_10.jpg"
//                                   alt="thumb"
//                                   class="img-fluid"
//                                 />
//                               </div>
//                               <div class="badge-positioned w-90">
//                                 <div
//                                   class="d-flex justify-content-between align-items-center"
//                                 >
//                                   <span
//                                     class="badge badge-danger font-weight-bold"
//                                     >National News</span
//                                   >
//                                   <div class="video-icon">
//                                     <i class="mdi mdi-play"></i>
//                                   </div>
//                                 </div>
//                               </div>
//                             </div>
//                           </div>
//                         </div>
//                       </div>
//                       <div class="col-lg-4">
//                         <div
//                           class="d-flex justify-content-between align-items-center"
//                         >
//                           <div class="card-title">
//                             Latest Video
//                           </div>
//                           <p class="mb-3">See all</p>
//                         </div>
//                         <div
//                           class="d-flex justify-content-between align-items-center border-bottom pb-2"
//                         >
//                           <div class="div-w-80 mr-3">
//                             <div class="rotate-img">
//                               <img
//                                 src="assets/images/dashboard/home_11.jpg"
//                                 alt="thumb"
//                                 class="img-fluid"
//                               />
//                             </div>
//                           </div>
//                           <h3 class="font-weight-600 mb-0">
//                             Apple Introduces Apple Watch
//                           </h3>
//                         </div>
//                         <div
//                           class="d-flex justify-content-between align-items-center border-bottom pt-3 pb-2"
//                         >
//                           <div class="div-w-80 mr-3">
//                             <div class="rotate-img">
//                               <img
//                                 src="assets/images/dashboard/home_12.jpg"
//                                 alt="thumb"
//                                 class="img-fluid"
//                               />
//                             </div>
//                           </div>
//                           <h3 class="font-weight-600 mb-0">
//                             SEO Strategy & Google Search
//                           </h3>
//                         </div>
//                         <div
//                           class="d-flex justify-content-between align-items-center border-bottom pt-3 pb-2"
//                         >
//                           <div class="div-w-80 mr-3">
//                             <div class="rotate-img">
//                               <img
//                                 src="assets/images/dashboard/home_13.jpg"
//                                 alt="thumb"
//                                 class="img-fluid"
//                               />
//                             </div>
//                           </div>
//                           <h3 class="font-weight-600 mb-0">
//                             Cycling benefit & disadvantag
//                           </h3>
//                         </div>
//                         <div
//                           class="d-flex justify-content-between align-items-center border-bottom pt-3 pb-2"
//                         >
//                           <div class="div-w-80 mr-3">
//                             <div class="rotate-img">
//                               <img
//                                 src="assets/images/dashboard/home_14.jpg"
//                                 alt="thumb"
//                                 class="img-fluid"
//                               />
//                             </div>
//                           </div>
//                           <h3 class="font-weight-600">
//                             The Major Health Benefits of
//                           </h3>
//                         </div>
//                         <div
//                           class="d-flex justify-content-between align-items-center pt-3"
//                         >
//                           <div class="div-w-80 mr-3">
//                             <div class="rotate-img">
//                               <img
//                                 src="assets/images/dashboard/home_15.jpg"
//                                 alt="thumb"
//                                 class="img-fluid"
//                               />
//                             </div>
//                           </div>
//                           <h3 class="font-weight-600 mb-0">
//                             Powerful Moments of Peace
//                           </h3>
//                         </div>
//                       </div>
//                     </div>
//                   </div>
//                 </div>
//               </div>
//             </div>
//             <div class="row" data-aos="fade-up">
//               <div class="col-sm-12">
//                 <div class="card">
//                   <div class="card-body">
//                     <div class="row">
//                       <div class="col-xl-6">
//                         <div class="card-title">
//                          Matters
//                         </div>
//                         {matterData && matterData.map((item) => (
//                         <div class="row">
//                           <div class="col-xl-6 col-lg-8 col-sm-6">
//                             <div class="rotate-img">
//                               <img
//                                 src={item.image}
//                                 alt="thumb"
//                                 class="img-fluid"
//                               />
//                             </div>
//                             <h2 class="mt-3 text-primary mb-2">
//                               {item.title}
//                             </h2>
//                             <p class="fs-13 mb-1 text-muted">
//                               <span class="mr-2">Photo </span>10 Minutes ago
//                             </p>
//                             <p class="my-3 fs-15">
//                               {item.Description}
//                             </p>
//                             <a href="#" class="font-weight-600 fs-16 text-dark"
//                               >Read more</a>
//                           </div>
//                         </div>
//                         ))}
//                       </div>
//                     </div>
//                   </div>
//                 </div>
//               </div>
//             </div>
//           </div>
//         </div>
//       </div>
//     </div>
//         </>
//     )
// }

// export default Subcategory;