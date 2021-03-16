import React from "react";
import "./styles.scss"
import ApexCharts from 'apexcharts'
import LineChart from './graphs/LineChart.js';
import DonutChart from './graphs/DonutChart.js';



function App() {
  return <VUEApexDarkStandalone {...VUEApexDarkStandaloneData} />;
}

export default App;


function VUEApexDarkStandalone(props) {
  const {
    background,
    trafficTrends,
    line7,
    line13,
    line14,
    line15,
    path2447,
    allTraffic,
    text11,
    text12,
    line2,
    line4,
    line5,
    chart,
    line,
    chart2,
    line3,
    chart3,
    line6,
    chart4,
    line8,
    line62,
    calendar_Today24Px,
    path2445,
    last28Days,
    text13,
    uniqueVisitors,
    price,
    cpc,
    text14,
    siteSpeedSec,
    polygon82,
    text15,
    spanText,
    spanText2,
    bounceRate,
    polygon822,
    text16,
    text17,
    surname,
    polygon823,
    text18,
    visitors,
    xnew,
    returning,
    spanText3,
    spanText4,
    spanText5,
    spanText6,
    overlapGroup11,
    trafficDetail,
    text19,
    pieChartDark,
    direct18,
    organic42,
    paid34,
    referral4,
    social,
    social2,
    overlapGroup12,
    path1,
    path2,
    path3,
    line82,
    line9,
    line10,
    overlapGroup2,
    path2474,
    line11,
    overlapGroup1,
    path2476,
    path2477,
    path2478,
    overlapGroup13,
    path2480,
    line12,
    menumover24Px,
    path2459,
    webMetrics,
    leadRecordTypes,
    totalLeads,
    number,
    polygon824,
    percent,
    subscriberLeads,
    number2,
    polygon825,
    percent2,
    nurtureP2,
    demoRequestP1,
    discovery,
    number3,
    polygon826,
    percent3,
    converted,
    number4,
    polygon827,
    percent4,
    yearlyTarget,
    spanText7,
    spanText8,
    path2496,
    quarterlyTarget,
    spanText9,
    spanText10,
    spanText11,
    spanText12,
    ourTargets,
    toggle_On24Px,
    path2492,
    mode_Night24Px,
    path2495,
    directTrafficProps,
    directTraffic2Props,
    directTraffic3Props,
    referralTrafficProps,
    referralTraffic2Props,
    group1Props,
    group12Props,
    group13Props,
    group14Props,
    group29Props,
    group292Props,
  } = props;

  return (
    <div className="vue-apex-dark-standalone">
      <div className="overlap-group">
        <img className="background" src={background} />
        <div className="traffic-trends smart-layers-pointers ">
          <div className="traffic-trends-1 nunitosans-bold-link-water-16px">{trafficTrends}</div>
          <DirectTraffic
            direct={directTrafficProps.direct}
            text1={directTrafficProps.text1}
            text2={directTrafficProps.text2}
          />
          <div className="overlap-group4">
            <DirectTraffic
              direct={directTraffic2Props.direct}
              text1={directTraffic2Props.text1}
              text2={directTraffic2Props.text2}
              className="x-traffic"
            />
            <img className="line-" src={line7} />
          </div>
          <div className="overlap-group2">
            <DirectTraffic
              direct={directTraffic3Props.direct}
              text1={directTraffic3Props.text1}
              text2={directTraffic3Props.text2}
              className="x-traffic"
            />
            <img className="line-13" src={line13} />
          </div>
          <div className="overlap-group3">
            <ReferralTraffic
              referral={referralTrafficProps.referral}
              text7={referralTrafficProps.text7}
              text8={referralTrafficProps.text8}
              className="x-traffic"

            />
            
            <img className="line-" src={line14} />
          </div>
          <div className="overlap-group5">
            <ReferralTraffic
              referral={referralTraffic2Props.referral}
              text7={referralTraffic2Props.text7}
              text8={referralTraffic2Props.text8}
            />
            <img className="line-" src={line15} />
          </div>
          <div className="all-traffic">
            <div className="overlap-group6">
              <img className="path-2447" src={path2447} />
              <div className="all-traffic-1 nunitosans-normal-link-water-14px">{allTraffic}</div>
            </div>
            <div className="text-1">{text11}</div>
            <div className="text-12 nunitosans-bold-carnation-12px">{text12}</div>
          </div>
          <div className="overlap-group1">
            <div className="container">
              <LineChart/>
            </div>
          </div>
          {/* <div className="overlap-group1">
            <img className="line-2" src={line2} />
            <img className="line-4" src={line4} />
            <img className="line-5" src={line5} />
            <div className="fade-line1">
              <div className="overlap-group6-1">
                <img className="chart" src={chart} />
                <img className="line" src={line} />
              </div>
            </div>
            <div className="fade-line1-1">
              <div className="overlap-group7">
                <img className="chart-1" src={chart2} />
                <img className="line-1" src={line3} />
              </div>
            </div>
            <div className="fade-line1-2">
              <div className="overlap-group8">
                <img className="chart-2" src={chart3} />
                <img className="line-3" src={line6} />
              </div>
            </div>
            <div className="fade-line1-3">
              <div className="overlap-group9">
                <img className="chart-3" src={chart4} />
                <img className="line-7" src={line8} />
              </div>
            </div>
          </div> */}
        </div>
        <div className="custom">
          <div className="x-24px" style={{ backgroundImage: `url(${calendar_Today24Px})` }}>
            <img className="path-2445" src={path2445} />
          </div>
        </div>
        <div className="last-28-days">{last28Days}</div>
        <div className="clasa2aint smart-layers-pointers ">
          <div className="text-13">{text13}</div>
          <div className="unique-visitors nunitosans-bold-link-water-16px">{uniqueVisitors}</div>
          <Group1 polygon82={group1Props.polygon82} percent={group1Props.percent} />
        </div>
        <div className="class2aint smart-layers-pointers ">
          <div className="price nunitosans-bold-link-water-50px">{price}</div>
          <div className="cpc nunitosans-bold-link-water-16px">{cpc}</div>
          <Group1 polygon82={group12Props.polygon82} percent={group12Props.percent} />
        </div>
        <div className="class2ass smart-layers-pointers ">
          <div className="text-1-1 nunitosans-bold-link-water-50px">{text14}</div>
          <div className="site-speed-sec nunitosans-bold-link-water-16px">{siteSpeedSec}</div>
          <div className="group-3">
            <img className="polygon-82-1" src={polygon82} />
            <div className="text-15 nunitosans-bold-caribbean-green-12px">{text15}</div>
          </div>
        </div>
        <div className="class2apct smart-layers-pointers ">
          <h1 className="percent">
            <span className="span0">{spanText}</span>
            <span className="span1">{spanText2}</span>
          </h1>
          <div className="bounce-rate nunitosans-bold-link-water-16px">{bounceRate}</div>
          <div className="group-4">
            <img className="polygon-82-1" src={polygon822} />
            <div className="text-16 nunitosans-bold-carnation-12px">{text16}</div>
          </div>
        </div>
        <div className="class2apct-1 smart-layers-pointers ">
          <div className="text-1-1 nunitosans-bold-link-water-50px">{text17}</div>
          <div className="surname nunitosans-bold-link-water-16px">{surname}</div>
          <div className="group-5">
            <img className="polygon-82-1" src={polygon823} />
            <div className="text-18 nunitosans-bold-carnation-12px">{text18}</div>
          </div>
        </div>
        <div className="class2apct-2 smart-layers-pointers ">
          <div className="visitors nunitosans-bold-link-water-16px">{visitors}</div>
          <div className="overlap-group10">
            <div className="new nunitosans-normal-silver-12px">{xnew}</div>
            <div className="returning nunitosans-normal-silver-12px">{returning}</div>
            <div className="group-33">
              <div className="flex-col">
                <Group1 polygon82={group13Props.polygon82} percent={group13Props.percent} className="group-6" />
                <div className="percent-2 nunitosans-bold-link-water-30px">
                  <span className="span0-1">{spanText3}</span>
                  <span className="span1-1">{spanText4}</span>
                </div>
              </div>
              <div className="flex-col-1">
                <Group1 polygon82={group14Props.polygon82} percent={group14Props.percent} className="group-7" />
                <div className="percent-2 nunitosans-bold-link-water-30px">
                  <span className="span0-1">{spanText5}</span>
                  <span className="span1-1">{spanText6}</span>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="traffic-detail smart-layers-pointers ">
          <div className="overlap-group11" style={{ backgroundImage: `url(${overlapGroup11})` }}>
            <div className="overlap-group1-1">
              <DonutChart/>
            </div>
       
          </div>
        </div>
        <div className="nav-menu">
          <div className="overlap-group12" style={{ backgroundImage: `url(${overlapGroup12})` }}>
            <div className="stack-icon-gradient">
              <div className="overlap-group1-2">
                <img className="path-1" src={path1} />
                <img className="path-2" src={path2} />
                <img className="path-3" src={path3} />
              </div>
            </div>
            <div className="menu2">
              <div className="websitemetrics">
                <div className="overlap-group1-3">
                  <img className="line-8" src={line82} />
                  <img className="line-9" src={line9} />
                  <img className="line-10" src={line10} />
                  <div className="group-11">
                    <div className="overlap-group2-2" style={{ backgroundImage: `url(${overlapGroup2})` }}>
                      <div className="group-10">
                        <div className="overlap-group3-1">
                          <img className="path-2474" src={path2474} />
                          <img className="line-11" src={line11} />
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="menu3">
              <div className="leadsmetrics">
                <div className="overlap-group1-4" style={{ backgroundImage: `url(${overlapGroup1})` }}>
                  <div className="ellipse-4 border-2px-link-water"></div>
                  <div className="ellipse-5 border-1px-link-water"></div>
                </div>
              </div>
            </div>
            <div className="menu4">
              <div className="brandmetrics">
                <img className="path-2476" src={path2476} />
                <img className="path-2477" src={path2477} />
                <img className="path-2478" src={path2478} />
              </div>
            </div>
            <div className="menu5">
              <div className="productstrategy">
                <div className="overlap-group1-5" style={{ backgroundImage: `url(${overlapGroup13})` }}>
                  <img className="path-2480" src={path2480} />
                  <img className="line-12" src={line12} />
                </div>
              </div>
            </div>
            <div className="menu6">
              <div className="menumover-24px" style={{ backgroundImage: `url(${menumover24Px})` }}>
                <img className="path-2459" src={path2459} />
              </div>
            </div>
          </div>
          <div className="web-metrics">{webMetrics}</div>
        </div>
        <div className="lead-record-types smart-layers-pointers ">
          <div className="lead-record-types-1 nunitosans-bold-link-water-16px">{leadRecordTypes}</div>
          <div className="group-22">
            <div className="flex-row-5">
              <div className="total-leads nunitosans-normal-silver-12px">{totalLeads}</div>
              <div className="group-1-1">
                <div className="number nunitosans-bold-silver-12px">{number}</div>
                <img className="polygon-82" src={polygon824} />
                <div className="percent-5 nunitosans-bold-caribbean-green-12px">{percent}</div>
              </div>
            </div>
            <div className="rectangle-117"></div>
          </div>
          <div className="group-23">
            <div className="flex-col-2">
              <div className="subscriber-leads nunitosans-normal-silver-12px">{subscriberLeads}</div>
              <div className="rectangle-119"></div>
            </div>
            <div className="group-28">
              <div className="number-1 nunitosans-bold-silver-12px">{number2}</div>
              <img className="polygon-82-2" src={polygon825} />
              <div className="percent-3 nunitosans-bold-caribbean-green-12px">{percent2}</div>
            </div>
          </div>
          <div className="group-24">
            <div className="flex-col-3">
              <div className="nurture-p2 nunitosans-normal-silver-12px">{nurtureP2}</div>
              <div className="rectangle-119-1"></div>
            </div>
            <Group29 number={group29Props.number} polygon82={group29Props.polygon82} percent={group29Props.percent} />
          </div>
          <div className="group-25">
            <div className="flex-col-4">
              <div className="demo-request-p1 nunitosans-normal-silver-12px">{demoRequestP1}</div>
              <div className="rectangle-119-2"></div>
            </div>
            <Group29
              number={group292Props.number}
              polygon82={group292Props.polygon82}
              percent={group292Props.percent}
              className="group-30"
            />
          </div>
          <div className="group-26">
            <div className="flex-col-5">
              <div className="discovery nunitosans-normal-silver-12px">{discovery}</div>
              <div className="rectangle-119-3"></div>
            </div>
            <div className="group-31">
              <div className="number-2 nunitosans-bold-silver-12px">{number3}</div>
              <img className="polygon-82-3" src={polygon826} />
              <div className="percent-6 nunitosans-bold-caribbean-green-12px">{percent3}</div>
            </div>
          </div>
          <div className="group-27">
            <div className="flex-col-6">
              <div className="converted nunitosans-normal-silver-12px">{converted}</div>
              <div className="rectangle-119-4"></div>
            </div>
            <div className="group-32">
              <div className="number-3 nunitosans-bold-silver-12px">{number4}</div>
              <img className="polygon-82-2" src={polygon827} />
              <div className="percent-3 nunitosans-bold-caribbean-green-12px">{percent4}</div>
            </div>
          </div>
        </div>
        <div className="targets smart-layers-pointers ">
          <div className="group-22-1">
            <div className="flex-row-6">
              <div className="yearly-target nunitosans-normal-silver-12px">{yearlyTarget}</div>
              <div className="days-left-326">
                <span className="span">{spanText7}</span>
                <span className="span-1">{spanText8}</span>
              </div>
            </div>
            <div className="overlap-group1-6">
              <div className="rectangle-117-1"></div>
            </div>
          </div>
          <div className="group-23-1">
            <div className="overlap-group2-3">
              <img className="path-2496" src={path2496} />
              <div className="rectangle-119-5"></div>
              <div className="quarterly-target nunitosans-normal-silver-12px">{quarterlyTarget}</div>
              <div className="days-left-50">
                <span className="span-1">{spanText9}</span>
                <span className="span">{spanText10}</span>
                <span className="span2">{spanText11}</span>
                <span className="span-1">{spanText12}</span>
              </div>
            </div>
          </div>
          <div className="our-targets nunitosans-bold-link-water-16px">{ourTargets}</div>
        </div>
        <div className="toggle-night">
          <div className="x-24px" style={{ backgroundImage: `url(${toggle_On24Px})` }}>
            <img className="path-2492" src={path2492} />
          </div>
          <div className="modenight-24px" style={{ backgroundImage: `url(${mode_Night24Px})` }}>
            <img className="path-2495" src={path2495} />
          </div>
        </div>
      </div>
    </div>
  );
}


function DirectTraffic(props) {
  const { direct, text1, text2, className } = props;

  return (
    <div className={`direct-traffic ${className || ""}`}>
      <div className="direct">{direct}</div>
      <div className="text-1">{text1}</div>
      <div className="text-2 nunitosans-bold-link-water-12px">{text2}</div>
    </div>
  );
}


function ReferralTraffic(props) {
  const { referral, text7, text8 } = props;

  return (
    <div className="referral-traffic">
      <div className="referral nunitosans-normal-link-water-14px">{referral}</div>
      <div className="text-1">{text7}</div>
      <div className="text-8 nunitosans-bold-caribbean-green-12px">{text8}</div>
    </div>
  );
}


function Group1(props) {
  const { polygon82, percent, className } = props;

  return (
    <div className={`group-1 ${className || ""}`}>
      <img className="polygon-82-1" src={polygon82} />
      <div className="percent-1 nunitosans-bold-carnation-12px">{percent}</div>
    </div>
  );
}


function Group29(props) {
  const { number, polygon82, percent, className } = props;

  return (
    <div className={`group-29 ${className || ""}`}>
      <div className="number-1 nunitosans-bold-silver-12px">{number}</div>
      <img className="polygon-82-2" src={polygon82} />
      <div className="percent-4 nunitosans-bold-carnation-12px">{percent}</div>
    </div>
  );
}
const directTrafficData = {
    direct: "Direct",
    text1: "20,716",
    text2: "-0.61%",
};

const directTraffic2Data = {
    direct: "Organic",
    text1: "48,337",
    text2: "+14.08%",
};

const directTraffic3Data = {
    direct: "Paid",
    text1: "39,130",
    text2: "+6%",
};

const referralTrafficData = {
    referral: "Referral",
    text7: "4,603",
    text8: "+35.66%",
};

const referralTraffic2Data = {
    referral: "Social",
    text7: "2,301",
    text8: "+61.95%",
};

const group1Data = {
    polygon82: "https://anima-uploads.s3.amazonaws.com/projects/60493ccaabcd57109fd15b62/releases/60493ed4ab3aab30f5349d44/img/polygon-82@1x.png",
    percent: "8%",
};

const group12Data = {
    polygon82: "https://anima-uploads.s3.amazonaws.com/projects/60493ccaabcd57109fd15b62/releases/60493ed4ab3aab30f5349d44/img/polygon-82-1@1x.png",
    percent: "5%",
};

const group13Data = {
    polygon82: "https://anima-uploads.s3.amazonaws.com/projects/60493ccaabcd57109fd15b62/releases/60493ed4ab3aab30f5349d44/img/polygon-82-5@1x.png",
    percent: "0%",
};

const group14Data = {
    polygon82: "https://anima-uploads.s3.amazonaws.com/projects/60493ccaabcd57109fd15b62/releases/60493ed4ab3aab30f5349d44/img/polygon-82-5@1x.png",
    percent: "0%",
};

const group29Data = {
    number: "251",
    polygon82: "https://anima-uploads.s3.amazonaws.com/projects/60493ccaabcd57109fd15b62/releases/60493ed4ab3aab30f5349d44/img/polygon-82@1x.png",
    percent: "12%",
};

const group292Data = {
    number: "147",
    polygon82: "https://anima-uploads.s3.amazonaws.com/projects/60493ccaabcd57109fd15b62/releases/60493ed4ab3aab30f5349d44/img/polygon-82@1x.png",
    percent: "20%",
};

const VUEApexDarkStandaloneData = {
    background: "https://anima-uploads.s3.amazonaws.com/projects/60493ccaabcd57109fd15b62/releases/60493ed4ab3aab30f5349d44/img/background@1x.png",
    trafficTrends: "Traffic Trends",
    line7: "https://anima-uploads.s3.amazonaws.com/projects/60493ccaabcd57109fd15b62/releases/60493ed4ab3aab30f5349d44/img/line-7@1x.png",
    line13: "https://anima-uploads.s3.amazonaws.com/projects/60493ccaabcd57109fd15b62/releases/60493ed4ab3aab30f5349d44/img/line-13@1x.png",
    line14: "https://anima-uploads.s3.amazonaws.com/projects/60493ccaabcd57109fd15b62/releases/60493ed4ab3aab30f5349d44/img/line-7@1x.png",
    line15: "https://anima-uploads.s3.amazonaws.com/projects/60493ccaabcd57109fd15b62/releases/60493ed4ab3aab30f5349d44/img/line-7@1x.png",
    path2447: "https://anima-uploads.s3.amazonaws.com/projects/60493ccaabcd57109fd15b62/releases/60493ed4ab3aab30f5349d44/img/path-2447@1x.png",
    allTraffic: "All Traffic",
    text11: "115,087",
    text12: "-4%",
    line2: "https://anima-uploads.s3.amazonaws.com/projects/60493ccaabcd57109fd15b62/releases/60493ed4ab3aab30f5349d44/img/line-2@1x.png",
    line4: "https://anima-uploads.s3.amazonaws.com/projects/60493ccaabcd57109fd15b62/releases/60493ed4ab3aab30f5349d44/img/line-2@1x.png",
    line5: "https://anima-uploads.s3.amazonaws.com/projects/60493ccaabcd57109fd15b62/releases/60493ed4ab3aab30f5349d44/img/line-2@1x.png",
    chart: "https://anima-uploads.s3.amazonaws.com/projects/60493ccaabcd57109fd15b62/releases/60493ed4ab3aab30f5349d44/img/chart@1x.png",
    line: "https://anima-uploads.s3.amazonaws.com/projects/60493ccaabcd57109fd15b62/releases/60493ed4ab3aab30f5349d44/img/line@1x.png",
    chart2: "https://anima-uploads.s3.amazonaws.com/projects/60493ccaabcd57109fd15b62/releases/60493ed4ab3aab30f5349d44/img/chart-1@1x.png",
    line3: "https://anima-uploads.s3.amazonaws.com/projects/60493ccaabcd57109fd15b62/releases/604a64dcaed8ce891842baeb/img/line-1@1x.png",
    chart3: "https://anima-uploads.s3.amazonaws.com/projects/60493ccaabcd57109fd15b62/releases/60493ed4ab3aab30f5349d44/img/chart-2@1x.png",
    line6: "https://anima-uploads.s3.amazonaws.com/projects/60493ccaabcd57109fd15b62/releases/60493ed4ab3aab30f5349d44/img/line-3@1x.png",
    chart4: "https://anima-uploads.s3.amazonaws.com/projects/60493ccaabcd57109fd15b62/releases/60493ed4ab3aab30f5349d44/img/chart-3@1x.png",
    line8: "https://anima-uploads.s3.amazonaws.com/projects/60493ccaabcd57109fd15b62/releases/604a64dcaed8ce891842baeb/img/line-8@1x.png",
    line62: "https://anima-uploads.s3.amazonaws.com/projects/60493ccaabcd57109fd15b62/releases/60493ed4ab3aab30f5349d44/img/line-2@1x.png",
    calendar_Today24Px: "https://anima-uploads.s3.amazonaws.com/projects/60493ccaabcd57109fd15b62/releases/60493ed4ab3aab30f5349d44/img/path-2444@1x.png",
    path2445: "https://anima-uploads.s3.amazonaws.com/projects/60493ccaabcd57109fd15b62/releases/60493ed4ab3aab30f5349d44/img/path-2445@1x.png",
    last28Days: "Last 28 Days",
    text13: "108,021",
    uniqueVisitors: "Unique Visitors",
    price: "$5.89",
    cpc: "CPC",
    text14: "3.92",
    siteSpeedSec: "Site Speed (sec)",
    polygon82: "https://anima-uploads.s3.amazonaws.com/projects/60493ccaabcd57109fd15b62/releases/60493ed4ab3aab30f5349d44/img/polygon-82-2@1x.png",
    text15: "-.26",
    spanText: "38",
    spanText2: "%",
    bounceRate: "Bounce Rate",
    polygon822: "https://anima-uploads.s3.amazonaws.com/projects/60493ccaabcd57109fd15b62/releases/60493ed4ab3aab30f5349d44/img/polygon-82-1@1x.png",
    text16: "+35%",
    text17: "1.97",
    surname: "Page / Session",
    polygon823: "https://anima-uploads.s3.amazonaws.com/projects/60493ccaabcd57109fd15b62/releases/60493ed4ab3aab30f5349d44/img/polygon-82@1x.png",
    text18: "-5%",
    visitors: "Visitors",
    xnew: "New",
    returning: "Returning",
    spanText3: "82",
    spanText4: "%",
    spanText5: "18",
    spanText6: "%",
    overlapGroup11: "https://anima-uploads.s3.amazonaws.com/projects/60493ccaabcd57109fd15b62/releases/604a32d0d0e0568317888264/img/path-2509@1x.png",
    trafficDetail: "Traffic Detail",
    text19: "115, 087",
    pieChartDark: "https://anima-uploads.s3.amazonaws.com/projects/60493ccaabcd57109fd15b62/releases/604a2597aed8ce891842b9c7/img/pie-chart---dark@1x.png",
    direct18: "Direct (18%)",
    organic42: "Organic (42%)",
    paid34: "Paid (34%)",
    referral4: "Referral (4%)",
    social: "Social",
    social2: "Social (2%)",
    overlapGroup12: "https://anima-uploads.s3.amazonaws.com/projects/60493ccaabcd57109fd15b62/releases/60493ed4ab3aab30f5349d44/img/path-7@1x.png",
    path1: "https://anima-uploads.s3.amazonaws.com/projects/60493ccaabcd57109fd15b62/releases/60493ed4ab3aab30f5349d44/img/path-1@1x.png",
    path2: "https://anima-uploads.s3.amazonaws.com/projects/60493ccaabcd57109fd15b62/releases/60493ed4ab3aab30f5349d44/img/path-2@1x.png",
    path3: "https://anima-uploads.s3.amazonaws.com/projects/60493ccaabcd57109fd15b62/releases/60493ed4ab3aab30f5349d44/img/path-3@1x.png",
    line82: "https://anima-uploads.s3.amazonaws.com/projects/60493ccaabcd57109fd15b62/releases/60493ed4ab3aab30f5349d44/img/line-8-1@1x.png",
    line9: "https://anima-uploads.s3.amazonaws.com/projects/60493ccaabcd57109fd15b62/releases/60493ed4ab3aab30f5349d44/img/line-9@1x.png",
    line10: "https://anima-uploads.s3.amazonaws.com/projects/60493ccaabcd57109fd15b62/releases/60493ed4ab3aab30f5349d44/img/line-9@1x.png",
    overlapGroup2: "https://anima-uploads.s3.amazonaws.com/projects/60493ccaabcd57109fd15b62/releases/60493ed4ab3aab30f5349d44/img/path-2473@1x.png",
    path2474: "https://anima-uploads.s3.amazonaws.com/projects/60493ccaabcd57109fd15b62/releases/60493ed4ab3aab30f5349d44/img/path-2474@1x.png",
    line11: "https://anima-uploads.s3.amazonaws.com/projects/60493ccaabcd57109fd15b62/releases/60493ed4ab3aab30f5349d44/img/line-11@1x.png",
    overlapGroup1: "https://anima-uploads.s3.amazonaws.com/projects/60493ccaabcd57109fd15b62/releases/60493ed4ab3aab30f5349d44/img/path-2475@1x.png",
    path2476: "https://anima-uploads.s3.amazonaws.com/projects/60493ccaabcd57109fd15b62/releases/60493ed4ab3aab30f5349d44/img/path-2476@1x.png",
    path2477: "https://anima-uploads.s3.amazonaws.com/projects/60493ccaabcd57109fd15b62/releases/60493ed4ab3aab30f5349d44/img/path-2477@1x.png",
    path2478: "https://anima-uploads.s3.amazonaws.com/projects/60493ccaabcd57109fd15b62/releases/60493ed4ab3aab30f5349d44/img/path-2478@1x.png",
    overlapGroup13: "https://anima-uploads.s3.amazonaws.com/projects/60493ccaabcd57109fd15b62/releases/60493ed4ab3aab30f5349d44/img/path-2479@1x.png",
    path2480: "https://anima-uploads.s3.amazonaws.com/projects/60493ccaabcd57109fd15b62/releases/60493ed4ab3aab30f5349d44/img/path-2480@1x.png",
    line12: "https://anima-uploads.s3.amazonaws.com/projects/60493ccaabcd57109fd15b62/releases/60493ed4ab3aab30f5349d44/img/line-12@1x.png",
    menumover24Px: "https://anima-uploads.s3.amazonaws.com/projects/60493ccaabcd57109fd15b62/releases/60493ed4ab3aab30f5349d44/img/path-2444@1x.png",
    path2459: "https://anima-uploads.s3.amazonaws.com/projects/60493ccaabcd57109fd15b62/releases/60493ed4ab3aab30f5349d44/img/path-2459@1x.png",
    webMetrics: "Web Metrics",
    leadRecordTypes: "Lead Record Types",
    totalLeads: "Total Leads",
    number: "698",
    polygon824: "https://anima-uploads.s3.amazonaws.com/projects/60493ccaabcd57109fd15b62/releases/60493ed4ab3aab30f5349d44/img/polygon-82-7@1x.png",
    percent: "6%",
    subscriberLeads: "Subscriber Leads",
    number2: "300",
    polygon825: "https://anima-uploads.s3.amazonaws.com/projects/60493ccaabcd57109fd15b62/releases/60493ed4ab3aab30f5349d44/img/polygon-82-7@1x.png",
    percent2: "2%",
    nurtureP2: "Nurture (P2)",
    demoRequestP1: "Demo Request (P1)",
    discovery: "Discovery",
    number3: "75",
    polygon826: "https://anima-uploads.s3.amazonaws.com/projects/60493ccaabcd57109fd15b62/releases/60493ed4ab3aab30f5349d44/img/polygon-82-7@1x.png",
    percent3: "16%",
    converted: "Converted",
    number4: "25",
    polygon827: "https://anima-uploads.s3.amazonaws.com/projects/60493ccaabcd57109fd15b62/releases/60493ed4ab3aab30f5349d44/img/polygon-82-7@1x.png",
    percent4: "4%",
    yearlyTarget: "Yearly Target",
    spanText7: "Days Left:",
    spanText8: " 326",
    path2496: "https://anima-uploads.s3.amazonaws.com/projects/60493ccaabcd57109fd15b62/releases/60493ed4ab3aab30f5349d44/img/path-2496@1x.png",
    quarterlyTarget: "Quarterly Target",
    spanText9: "",
    spanText10: "Days Left:",
    spanText11: " ",
    spanText12: "50",
    ourTargets: "Our Targets",
    toggle_On24Px: "https://anima-uploads.s3.amazonaws.com/projects/60493ccaabcd57109fd15b62/releases/60493ed4ab3aab30f5349d44/img/path-2444@1x.png",
    path2492: "https://anima-uploads.s3.amazonaws.com/projects/60493ccaabcd57109fd15b62/releases/60493ed4ab3aab30f5349d44/img/path-2492@1x.png",
    mode_Night24Px: "https://anima-uploads.s3.amazonaws.com/projects/60493ccaabcd57109fd15b62/releases/60493ed4ab3aab30f5349d44/img/path-2444@1x.png",
    path2495: "https://anima-uploads.s3.amazonaws.com/projects/60493ccaabcd57109fd15b62/releases/60493ed4ab3aab30f5349d44/img/path-2495@1x.png",
    directTrafficProps: directTrafficData,
    directTraffic2Props: directTraffic2Data,
    directTraffic3Props: directTraffic3Data,
    referralTrafficProps: referralTrafficData,
    referralTraffic2Props: referralTraffic2Data,
    group1Props: group1Data,
    group12Props: group12Data,
    group13Props: group13Data,
    group14Props: group14Data,
    group29Props: group29Data,
    group292Props: group292Data,
};

