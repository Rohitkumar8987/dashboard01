
// import React , {useState}  from 'react'
// import ReactDOM from 'react-dom/client';
// import { Line } from '@ant-design/charts';
// // import { Chart } from 'smart-webcomponents-react/chart';
// import {XYPlot,LineSeries, XAxis, VerticalGridLines,HorizontalGridLines,YAxis} from 'react-dom'

// export default function Dashboard() {
//   const data = [
//     { year: '1991', value: 3 },
//     { year: '1992', value: 4 },
//     { year: '1993', value: 3.5 },
//     { year: '1994', value: 5 },
//     { year: '1995', value: 4.9 },
//     { year: '1996', value: 6 },
//     { year: '1997', value: 7 },
//     { year: '1998', value: 9 },
//     { year: '1999', value: 18 },
//     { year: '2000', value: 13 },
//     { year: '2001', value: 10 },
//     { year: '2002', value: 13 },
//     { year: '2003', value: 12 },
//     { year: '2004', value: 16 },
//   ];

//   const config = {
//     data,
//     width: 800,
//     height: 730,
//     autoFit: false,
//     xField: 'year',
//     yField: 'value',
//     point: {
//       size: 5,
//       shape: 'diamond',
//     },
//     label: {
//       style: {
//         fill: '#aaa',
//       },
//     },
//   };

//   let chart;

//   // Export Image
//   const downloadImage = () => {
//     chart?.downloadImage();
//   };

//   // Get chart base64 string
//   const toDataURL = () => {
//     console.log(chart?.toDataURL());
//   };

//   return (
//     <>
//     <div className="p-2" style={{background:"#E2E8F0" ,width:"100%"}}>
//     <div className="p-4 d-flex" style={{background:"#E2E8F0",gap:"10px",width:"1000px"}}>
//       <div className="p-2" style={{ width:"500px",height:"120px",border:"1px solid #EAF2FA" ,background:"#FFFFFF"}}>
//         <span style={{display:"flex",}}>
//         <svg id="_003-packing-list" data-name="003-packing-list" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" style={{background:"#EAF2FA" ,padding:"20px",width:"100px",height:"100px"}}>
//   <path id="Path_43" data-name="Path 43" d="M148.56,2.437l1.639.83V0h-3.91V3.267l1.638-.829A.7.7,0,0,1,148.56,2.437Zm0,0" transform="translate(-139.432)" fill="#28589a" fill-rule="evenodd"/>
//   <path id="Path_44" data-name="Path 44" d="M12.082,6.984a2.11,2.11,0,0,1,1.934-1.266h3.609V.7a.7.7,0,0,0-.7-.7H12.174V4.409a.7.7,0,0,1-1.065.6l-2.3-1.163L6.47,5.035a.7.7,0,0,1-1.017-.626L5.451,0H.7A.7.7,0,0,0,0,.7V16.922a.7.7,0,0,0,.7.7H9.094V9.094A2.11,2.11,0,0,1,11.2,6.984Zm0,0" fill="#28589a" fill-rule="evenodd"/>
//   <path id="Path_45" data-name="Path 45" d="M284,152.7v2.531a.7.7,0,0,0,.7.7h6.469a.7.7,0,0,0,.7-.7V152.7a.7.7,0,0,0-.7-.7H284.7A.7.7,0,0,0,284,152.7Zm0,0" transform="translate(-270.688 -144.875)" fill="#28589a" fill-rule="evenodd"/>
//   <path id="Path_46" data-name="Path 46" d="M236.8,179h-.7v1.969a2.11,2.11,0,0,1-2.109,2.109h-6.469a2.11,2.11,0,0,1-2.109-2.109V179h-.7a.7.7,0,0,0-.7.7v14.2a.7.7,0,0,0,.7.7H236.8a.7.7,0,0,0,.7-.7V179.7A.7.7,0,0,0,236.8,179Zm-6.751,11.73-1.33,1.33a.7.7,0,0,1-.994,0l-.7-.7a.7.7,0,0,1,.994-.994l.206.206.833-.833a.7.7,0,0,1,.994.994Zm0-4.107-1.33,1.33a.7.7,0,0,1-.994,0l-.7-.7a.7.7,0,0,1,.994-.994l.206.206.833-.833a.7.7,0,0,1,.994.994Zm3.941,4.978H232.32a.7.7,0,0,1,0-1.406h1.667a.7.7,0,0,1,0,1.406Zm0-4.107H232.32a.7.7,0,0,1,0-1.406h1.667a.7.7,0,0,1,0,1.406Zm0,0" transform="translate(-213.5 -170.609)" fill="#28589a" fill-rule="evenodd"/>
// </svg>
// <div className="p-3" style={{width:"200px"}}>
// <h3 style={{display:"flex",justifyItems:"center"}}>1234</h3>
// <lable >Sales Orderd</lable>
// </div>
//         </span>
//       </div>
//       <div className="p-2" style={{ width:"500px",height:"120px",border:"1px solid #EAF2FA" ,background:"#FFFFFF"}}>
//         <span style={{display:"flex",}}>
//         <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" style={{background:"#EAF2FA" ,padding:"20px",width:"100px",height:"100px"}}>
//   <g id="_002-shopping-bag" data-name="002-shopping-bag" transform="translate(0 0)">
//     <path id="Path_41" data-name="Path 41" d="M3.784,7.125H5.19V8.531a.7.7,0,1,1-1.406,0V7.125H1.717a.937.937,0,0,0-.936.886L0,22.021A1.875,1.875,0,0,0,1.875,24H9.487a3.293,3.293,0,0,1-.582-2.106l.557-7.9A2.344,2.344,0,0,1,11.8,11.812h3.216L14.8,8.01a.937.937,0,0,0-.936-.886H12.034v-3a4.125,4.125,0,1,0-8.25,0Zm1.406-3a2.719,2.719,0,0,1,5.437,0v3h1.406V8.531a.7.7,0,0,1-1.406,0V7.125H5.19Z" transform="translate(0)" fill="#28589a"/>
//     <path id="Path_42" data-name="Path 42" d="M233.492,290.774l-.557-7.9A.938.938,0,0,0,232,282H221.3a.937.937,0,0,0-.935.872l-.557,7.9a1.875,1.875,0,0,0,1.87,2.007h9.947A1.875,1.875,0,0,0,233.492,290.774Zm-4.225-5.111a2.712,2.712,0,1,1-5.424,0v-.85a.7.7,0,0,1,1.406,0v.85a1.306,1.306,0,1,0,2.612,0v-.85a.7.7,0,0,1,1.406,0Z" transform="translate(-209.497 -268.781)" fill="#28589a"/>
//   </g>
// </svg>

// <div className="p-3" style={{width:"200px"}}>
// <h3 style={{display:"flex",justifyItems:"center"}}>12</h3>
// <lable >Purchase Orderd</lable>
// </div>
//         </span>
//       </div>
//       </div>
//       <div className="d-flex p-4" style={{gap:"12px" ,background:"#E2E8F0",width:"1000px"}}>
//       <div className="p-2" style={{ width:"500px",height:"120px",border:"1px solid #EAF2FA" ,background:"#FFFFFF"}}>
//         <span style={{display:"flex",}}>
//         <svg xmlns="http://www.w3.org/2000/svg" width="20.525" height="24" viewBox="0 0 20.525 24" style={{background:"#EAF2FA" ,padding:"20px",width:"100px",height:"100px"}}>
//   <g id="_004-to-do" data-name="004-to-do" transform="translate(-37.068)">
//     <g id="Group_73" data-name="Group 73" transform="translate(37.068)">
//       <g id="Group_72" data-name="Group 72" transform="translate(0)">
//         <path id="Path_47" data-name="Path 47" d="M37.931,208.175a.492.492,0,0,0-.355-.16h-.01a.5.5,0,0,0-.365.835l.352.382.7-.7Z" transform="translate(-37.068 -198.264)" fill="#28589a"/>
//         <path id="Path_48" data-name="Path 48" d="M64.575,237.488a2.589,2.589,0,0,0-.667-1.419l-2.932-3.177-.7.7,2.86,3.1A2.606,2.606,0,0,0,64.575,237.488Z" transform="translate(-59.184 -221.975)" fill="#28589a"/>
//         <path id="Path_49" data-name="Path 49" d="M130.915,0h-1.333V.971a1.333,1.333,0,1,1-.889,0V0H123.36V.971a1.333,1.333,0,1,1-.889,0V0h-5.333V.971a1.333,1.333,0,1,1-.889,0V0h-1.333a.445.445,0,0,0-.444.444V11.556c0,.014-.007.026-.008.04l1.75,1.9a3.477,3.477,0,0,1,.923,2.323l.316.316a.444.444,0,1,1-.628.628l-.324-.324a3.5,3.5,0,0,1-2.028-.794v7.915a.445.445,0,0,0,.444.444h16a.445.445,0,0,0,.444-.444V.444A.445.445,0,0,0,130.915,0ZM118.382,10.489l-1.333,1.778a.444.444,0,0,1-.324.177h-.031a.444.444,0,0,1-.314-.13l-.889-.889a.444.444,0,0,1,.628-.628l.526.526,1.026-1.368a.444.444,0,0,1,.711.533Zm0-4.889h0l-1.333,1.778a.444.444,0,0,1-.324.177h-.031a.444.444,0,0,1-.314-.13l-.889-.889a.444.444,0,0,1,.628-.628l.526.526,1.026-1.368a.444.444,0,0,1,.711.533Zm11.645,16.178H119.8a.444.444,0,0,1,0-.889h10.222a.444.444,0,1,1,0,.889Zm0-4.889H119.8a.444.444,0,0,1,0-.889h10.222a.444.444,0,1,1,0,.889Zm0-4.889H119.8a.444.444,0,0,1,0-.889h10.222a.444.444,0,1,1,0,.889Zm0-4.889H119.8a.444.444,0,0,1,0-.889h10.222a.444.444,0,1,1,0,.889Z" transform="translate(-110.835)" fill="#28589a"/>
//         <circle id="Ellipse_26" data-name="Ellipse 26" cx="0.444" cy="0.444" r="0.444" transform="translate(5.414 1.778)" fill="#28589a"/>
//         <circle id="Ellipse_27" data-name="Ellipse 27" cx="0.444" cy="0.444" r="0.444" transform="translate(17.858 1.778)" fill="#28589a"/>
//         <circle id="Ellipse_28" data-name="Ellipse 28" cx="0.444" cy="0.444" r="0.444" transform="translate(11.636 1.778)" fill="#28589a"/>
//       </g>
//     </g>
//   </g>
// </svg>

// <div className="p-3" style={{width:"200px"}}>
// <h3 style={{display:"flex",justifyItems:"center"}}>2</h3>
// <lable >P0 Ledgers</lable>
// </div>
//         </span>
//       </div>
//       <div className="p-2" style={{ width:"500px",height:"120px",border:"1px solid #EAF2FA" ,background:"#FFFFFF"}}>
//         <span style={{display:"flex",}}>
//         <svg xmlns="http://www.w3.org/2000/svg" width="24.6" height="24" viewBox="0 0 24.6 24" style={{background:"#EAF2FA" ,padding:"20px",width:"100px",height:"100px"}}>
//   <path id="Product" d="M32.6,15.332V26.109a1.23,1.23,0,0,1-.68,1.1l-11.005,5.5V21.174l2.768-1.384v5.769a.615.615,0,0,0,.431.587.639.639,0,0,0,.185.028.613.613,0,0,0,.5-.264l2.414-3.484L28.861,23.6a.614.614,0,0,0,.972-.5V16.715ZM19.75,8.841,17.831,9.8l11.541,5.769,2.469-1.233L20.85,8.842a1.23,1.23,0,0,0-1.1,0Zm5.162,10.334v4.416l1.648-2.38a.606.606,0,0,1,.4-.255.615.615,0,0,1,.461.1L28.6,21.9V17.33Zm-8.456-8.687L12.911,12.26l11.541,5.769L28,16.257Zm-4.92,2.46L8.76,14.335,20.3,20.1l2.777-1.387ZM8,15.332V26.109a1.23,1.23,0,0,0,.68,1.1l11.005,5.5V21.174Z" transform="translate(-8 -8.712)" fill="#28589a"/>
// </svg>

// <div className="p-3" style={{width:"200px"}}>
// <h3 style={{display:"flex",justifyItems:"center"}}>109</h3>
// <lable >Items Received</lable>
// </div>

//         </span>
//       </div>
//       </div>
//       <div className='bg-white ' style={{width:"998px" ,padding:"10px",height:"50%"}}>
//       {/* <button type="button" onClick={downloadImage} style={{ marginRight: 24 }}>
//         Export Image
//       </button>
//       <button type="button" onClick={toDataURL}>
//         Get base64
//       </button> */}
//       <Line className='p-5' {...config} onReady={(chartInstance) => (chart = chartInstance)} />
//     </div>
    
//       </div>
     
//     </>
//   )
// }


import React from "react";
import { Card, Col, Row } from "antd";
import { Line, Pie } from "@ant-design/plots";
import PackingList from "../../assest/Images/003-packing-list@2x.png"
import Todo from  "../../assest/Images/004-to-do@2x.png"
import Product from "../../assest/Images/Product@2x.png"
import ShoppingBag from "../../assest/Images/002-shopping-bag@2x.png"

export default function Dashboard() {
  const data = [
    { month: "1 Aug", price: 2 },
    { month: "2 Aug", price: 4 },
    { month: "3 Aug", price: 2 },
    { month: "4 Aug", price: 12 },
    { month: "5 Aug", price: 4 },
    { month: "6 Aug", price: 2 },
    { month: "7 Aug", price: 5 },
    { month: "8 Aug", price: 10 },
    { month: "9 Aug", price: 5 },
    { month: "10 Aug", price: 8 },
    { month: "11 Aug", price: 15 },
    { month: "12 Aug", price: 12 },
    { month: "13 Aug", price: 7 },
  ];
  const config = {
    data,
    xField: "month",
    yField: "price",
    point: {
      shape: "diamond | circule",
    },
    tooltip: {
      formatter: (data) => {
        return {
          name: "",
          value: "any",
        };
      },
      customContent: (name, data) =>
        `<div>${data?.map((item) => {
          return `<div class="tooltip-chart" >
              <span class="tooltip-item-name">${item?.name}</span>
              <span class="tooltip-item-value">${item?.value}</span>
            </div>`;
        })}</div>`,
      showMarkers: true,
      showContent: true,
      position: "right | left",
      showCrosshairs: true,
    },
  };

  const DemoPie = () => {
    const data = [
      {
        type: "Online",
        value: 48,
      },
      {
        type: "Shop",
        value: 52,
      },
    ];
    const config = {
      appendPadding: 10,
      data,
      angleField: "value",
      colorField: "type",
      radius: 0.8,
      label: {
        type: "outer",
      },

      state: {
        active: {
          style: {
            lineWidth: 0,
            fillOpacity: 0.65,
          },
        },
      },

      interactions: [
        {
          type: "element-single-selected",
        },
        {
          type: "element-active",
        },
      ],
    };
    return <Pie {...config} />;
  };

  const reportCard = (icon, count, title) => {
    return (
      <Col span={12}>
        <Card>
          <Row gutter={[16, 16]}>
            <div className="dash-icon">
              <h1>{icon}</h1>
            </div>
            <div>
              <h1 className="dash-count">{count}</h1>
              <h4 className="dash-title1">{title}</h4>
            </div>
          </Row>
        </Card>
      </Col>
    );
  };

  const listItem = (title, subTitle, amount) => {
    return (
      <Card bodyStyle={{ padding: "10px 20px" }}>
        <Row gutter={[16, 16]} justify="space-between">
          <Col span={14}>
            <h1 className="dash-title">{title}</h1>
            <h4 className="dash-subtitle">{subTitle}</h4>
          </Col>
          <Col>
            <h1 className="dash-amount">${amount}</h1>
            <h4 className="dash-convert">Convert to PO</h4>
          </Col>
        </Row>
      </Card>
    );
  };

  return (
    <Col className="fireFox" span={24}>
      <Row gutter={[16, 16]}>
        <Col span={16}>
          <Row gutter={[16, 16]}>
            {reportCard(
              <img 
                alt="example"
                src={PackingList}
                width="30"
                height="30px"
                className="dash-img" style={{padding:"0px"}}
              />,
               
              <span style={{ fontSize: "30px" }}>1234</span>,
              "Sales Orders"
            )}
            {reportCard(
              <img
                alt="example"
                src={ShoppingBag}
                width="30px"
                height="30px"
                className="dash-img"
              />,
              <span style={{ fontSize: "30px" }}>12</span>,
              "Purchase Orders"
            )}
            {reportCard(
              <img
                alt="example"
                src={Todo}
                width="30px"
                height="30px"
                className="dash-img"
              />,
              <span style={{ fontSize: "30px" }}>2</span>,
              "PO Ledgers"
            )}
            {reportCard(
              <img
                alt="example"
                src={Product}
                width="30px"
                height="30px"
                className="dash-img"
              />,
              <span style={{ fontSize: "30px" }}>109</span>,
              "Items Received"
            )}

            <Col span={24}>
              <Card title="Sales Orders" style={{ height: "36.5vw" }}>
                <h1 style={{ height: "26vw" }}>
                  <Line {...config} />
                </h1>
              </Card>
            </Col>
          </Row>
        </Col>

        <Col span={8}>
          <Row gutter={[16, 16]}>
            <Col span={24}>
              <Card title="PO Ledgers" bodyStyle={{ padding: "0px" }}>
                {listItem(
                  "Quorum",
                  "Free Freight at $99 anytime of week",
                  "560"
                )}
                {listItem(
                  "Capital",
                  "Free Freight if PO = $500 any time of the week",
                  "980"
                )}
                {listItem(
                  "Craftmade",
                  "Free Freight anytime of week or total PO (No constraints)",
                  "50"
                )}
                {listItem(
                  "Bulbrite",
                  "Minimum Order must be $100. Free Freight Allowance at $800",
                  "260"
                )}
                {listItem(
                  "American",
                  "Free Freight at $120 anytime of weekn",
                  "40"
                )}
              </Card>
            </Col>

            <Col span={24}>
              <Card title="Orders">{DemoPie()}</Card>
            </Col>
          </Row>
        </Col>
      </Row>
    </Col>
  );
}