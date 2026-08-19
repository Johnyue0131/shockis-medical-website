import fs from "node:fs/promises";
import path from "node:path";
import { Presentation, PresentationFile } from "@oai/artifact-tool";

const ROOT = path.resolve("..");
const OUT = path.join(process.cwd(), "output");
const W = 1280, H = 720;
const C = { navy: "#081D3B", blue: "#1478C9", sky: "#70C8F3", pale: "#F3F7FB", white: "#FFFFFF", text: "#334155", muted: "#64748B", line: "#D9E4EE", red: "#EF476F" };

async function blob(rel:string){ const b=await fs.readFile(path.join(ROOT,rel)); return b.buffer.slice(b.byteOffset,b.byteOffset+b.byteLength); }
function box(slide:any,x:number,y:number,w:number,h:number,fill:string=C.white,line:string="none",r="rect"){return slide.shapes.add({geometry:r,position:{left:x,top:y,width:w,height:h},fill,line:{style:"solid",fill:line,width:line==="none"?0:1}})}
function txt(slide:any,text:string,x:number,y:number,w:number,h:number,size=24,color=C.navy,bold=false,align="left",font="Arial"){const s=slide.shapes.add({geometry:"textbox",position:{left:x,top:y,width:w,height:h},fill:"none",line:{style:"solid",fill:"none",width:0}});s.text=text;s.text.style={fontSize:size,color,bold,fontFamily:font,alignment:align};return s}
function line(slide:any,x:number,y:number,w:number,color=C.line){return box(slide,x,y,w,2,color,color)}
function pill(slide:any,text:string,x:number,y:number,w:number){box(slide,x,y,w,30,C.pale,C.line,"roundRect");txt(slide,text,x,y+5,w,20,12,C.blue,true,"center")}
function header(slide:any,kicker:string,title:string,sub?:string){txt(slide,kicker.toUpperCase(),64,42,420,22,12,C.blue,true);txt(slide,title,64,70,1100,54,34,C.navy,true);if(sub)txt(slide,sub,64,128,1080,44,17,C.text,false);line(slide,64,180,1152)}
function footer(slide:any,n:number){txt(slide,"SHOCKIS MEDICAL  ·  WEBSITE ARCHITECTURE",64,685,500,18,10,C.muted,true);txt(slide,String(n).padStart(2,"0"),1170,685,44,18,10,C.muted,true,"right")}
function notes(slide:any,sources:string[]){slide.speakerNotes.textFrame.setText(`[Sources]\n${sources.map(s=>`- ${s}`).join("\n")}\n[/Sources]`)}
async function addImg(slide:any,rel:string,x:number,y:number,w:number,h:number,fit="cover"){const ext=path.extname(rel).toLowerCase();slide.images.add({blob:await blob(rel),contentType:ext===".png"?"image/png":ext===".webp"?"image/webp":"image/jpeg",alt:path.basename(rel),fit,position:{left:x,top:y,width:w,height:h}})}

const p=Presentation.create({slideSize:{width:W,height:H}});

// 1 Cover
{
 const s=p.slides.add();s.background.fill=C.white;
 box(s,0,0,520,H,C.navy,C.navy);
 txt(s,"SHOCKIS",64,62,260,28,16,C.sky,true);txt(s,"Website Architecture",64,166,420,105,48,C.white,true);txt(s,"网站架构总览",64,282,340,45,28,C.sky,true);
 txt(s,"面向全球医疗器械合作伙伴的品牌官网\n兼顾客户沟通与内部维护",64,368,390,82,20,"#D8E6F3",false);
 pill(s,"V3 · CURRENT STRUCTURE",64,516,220);txt(s,"2026",64,650,100,22,12,"#AFC4D8",true);
 await addImg(s,"public/images/shockis-hero-wide-v2.png",520,0,760,H,"cover");
 box(s,520,0,760,H,"#081D3B40","none");
 notes(s,["Local project asset: public/images/shockis-hero-wide-v2.png","Local project source: app/ and public/"]);
}

// 2 Executive view
{
 const s=p.slides.add();s.background.fill=C.white;header(s,"Executive view","一个聚焦产品、可持续扩展的 B2B 官网","以冲击波治疗系统为核心，用专业内容建立信任，用清晰路径承接询盘。");
 const cards=[
  ["01","品牌定位","Professional medical device manufacturer","专业、可靠、全球合作"],
  ["02","核心产品","SHOCKIS ST100","冲击波治疗系统与配件"],
  ["03","目标客户","Distributors · Clinics · OEM","经销商、医疗机构与合作伙伴"],
  ["04","网站目标","Trust → Explore → Inquiry","从了解品牌到提交询盘"]
 ];
 cards.forEach((a,i)=>{const x=64+i*286;box(s,x,226,258,330,i===0?C.navy:C.pale,i===0?C.navy:C.line,"roundRect");txt(s,a[0],x+24,248,48,26,14,i===0?C.sky:C.blue,true);txt(s,a[1],x+24,294,210,36,26,i===0?C.white:C.navy,true);txt(s,a[2],x+24,354,210,64,18,i===0?C.white:C.text,true);line(s,x+24,440,190,i===0?"#34506E":C.line);txt(s,a[3],x+24,466,210,62,15,i===0?"#C8D8E6":C.muted,false)});
 footer(s,2);notes(s,["Local project routes and page content under app/"]);
}

// 3 Sitemap
{
 const s=p.slides.add();s.background.fill=C.pale;header(s,"Information architecture","Website Sitemap V3","主导航保持简洁，内容通过产品、适应症、资源与转化页面逐层展开。");
 const top=["HOME\n/","PRODUCTS\n/products","INDICATIONS\n/indications","RESOURCES","ABOUT\n/about","CONTACT\n/contact","SHOP\n/shop"];
 top.forEach((t,i)=>{const x=42+i*174;box(s,x,220,154,74,i===0?C.navy:C.white,i===0?C.navy:C.line,"roundRect");txt(s,t,x+8,237,138,42,15,i===0?C.white:C.navy,true,"center")});
 const branches=[
  [216,335,"Shockwave Therapy System\n/product · /products"],[216,435,"Accessories\n/accessories"],
  [390,335,"6 Condition Pages\n/indications/[slug]"],[564,335,"FAQ · Downloads · Blog"],
  [912,335,"Request Quote\n/request-quote"],[1086,335,"Product Catalog\n/shop"]
 ];
 branches.forEach(([x,y,t]:any)=>{box(s,x,y,154,70,C.white,C.line,"roundRect");txt(s,t,x+8,y+14,138,42,14,C.text,true,"center")});
 txt(s,"LEGAL & SUPPORT",64,565,180,22,12,C.blue,true);txt(s,"Privacy Policy  ·  Terms of Service  ·  Shipping & Returns  ·  Refund Policy  ·  Warranty Policy",64,600,1060,30,16,C.text,false);
 footer(s,3);notes(s,["Local project routes under app/**/page.tsx"]);
}

// 4 Page portfolio
{
 const s=p.slides.add();s.background.fill=C.white;header(s,"Page portfolio","现有页面与业务角色","每个页面只承担一个核心任务，避免首页或产品页信息过载。");
 const rows=[
  ["Home","/","品牌第一印象、合规能力、核心产品、配件与评价"],
  ["Products","/products · /product","ST100 产品详情、图片画廊、参数、FAQ 与询盘"],
  ["Accessories","/accessories","配件分类框架与 Shop 入口"],
  ["Indications","/indications · /indications/[slug]","临床应用入口、身体区域与 SEO 子页面"],
  ["About","/about","品牌故事、使命、愿景与支持 CTA"],
  ["Contact / Quote","/contact · /request-quote","业务询盘、技术支持与报价需求"],
  ["Shop","/shop","B2B 产品目录，不展示价格或购物车"],
  ["Resources / Legal","/faq · policies","内容支持、下载与合规基础页面"]
 ];
 txt(s,"PAGE",70,212,190,24,12,C.blue,true);txt(s,"ROUTE",310,212,280,24,12,C.blue,true);txt(s,"PRIMARY ROLE",640,212,530,24,12,C.blue,true);
 rows.forEach((r,i)=>{const y=248+i*50;if(i%2===0)box(s,58,y-8,1164,44,C.pale,"none");txt(s,r[0],70,y,220,24,15,C.navy,true);txt(s,r[1],310,y,300,24,14,C.text,false);txt(s,r[2],640,y,550,24,14,C.text,false)});
 footer(s,4);notes(s,["Local project route scan: app/**/page.tsx"]);
}

// 5 Home anatomy
{
 const s=p.slides.add();s.background.fill=C.white;header(s,"Homepage anatomy","首页是一条快速信任路径","Overview first：让访问者快速理解品牌、产品与下一步行动。");
 const stages=[
  ["01","HERO","定位 + 单一 CTA"],["02","COMPLIANCE","FDA · FSA/HSA · OEM/ODM"],["03","CORE PRODUCT","主产品 + 详情入口"],["04","ACCESSORIES","配件能力 + 分类入口"],["05","REVIEWS","专业用户评价"],["06","FOOTER","导航 · 订阅 · 法律"]
 ];
 stages.forEach((a,i)=>{const x=54+i*201;box(s,x,238,174,198,i===0?C.navy:C.pale,i===0?C.navy:C.line,"roundRect");txt(s,a[0],x+18,256,40,20,12,i===0?C.sky:C.blue,true);txt(s,a[1],x+18,300,138,28,17,i===0?C.white:C.navy,true);txt(s,a[2],x+18,348,138,54,14,i===0?"#D5E4F0":C.text,false);if(i<5)txt(s,"→",x+176,320,24,30,24,C.blue,true,"center")});
 await addImg(s,"public/images/products/amazon-current/st100-main-current.jpg",835,466,340,164,"contain");
 txt(s,"HOME = OVERVIEW",64,500,400,42,28,C.navy,true);txt(s,"更少文字 · 更清晰层级 · 更明确跳转",64,548,500,32,18,C.text,false);
 footer(s,5);notes(s,["Local project source: app/page.tsx","Local project asset: public/images/products/amazon-current/st100-main-current.jpg"]);
}

// 6 Conversion journey
{
 const s=p.slides.add();s.background.fill=C.pale;header(s,"B2B conversion journey","从发现产品到建立合作","页面之间形成明确的采购与合作路径，而不是传统电商结账流程。");
 const nodes=[
  ["DISCOVER","Home · Shop · Indications"],["EVALUATE","Product Detail · Applications · FAQ"],["TRUST","Compliance · About · Reviews"],["CONVERT","Contact · Request Quote"]
 ];
 nodes.forEach((a,i)=>{const x=80+i*295;box(s,x,245,240,160,i===3?C.navy:C.white,i===3?C.navy:C.line,"roundRect");txt(s,String(i+1).padStart(2,"0"),x+22,265,40,20,12,i===3?C.sky:C.blue,true);txt(s,a[0],x+22,305,196,28,22,i===3?C.white:C.navy,true);txt(s,a[1],x+22,347,196,42,14,i===3?"#D6E3EF":C.text,false,"center");if(i<3)txt(s,"→",x+248,300,38,38,28,C.blue,true,"center")});
 box(s,190,474,900,92,C.white,C.line,"roundRect");txt(s,"核心转化原则",220,494,170,24,15,C.blue,true);txt(s,"不展示价格  ·  不设置购物车  ·  用专业信息降低询盘门槛  ·  统一导向 Contact / Request Quote",390,493,660,42,16,C.navy,true);
 footer(s,6);notes(s,["Local project navigation and CTA links in app/ pages and components"]);
}

// 7 Indications
{
 const s=p.slides.add();s.background.fill=C.white;header(s,"Clinical content architecture","Indications：可扩展的临床内容中心","总入口负责浏览，详情页使用统一模板，支持未来 SEO / AEO / GEO 扩展。");
 await addImg(s,"public/images/indications/body-area-application-figure.png",64,220,360,400,"contain");
 const x=480;txt(s,"/indications",x,220,240,34,26,C.navy,true);pill(s,"HUB PAGE",795,218,130);
 const layers=[
  ["Common Indications","6 个常见适应症入口"],["Professional Applications","身体区域切换 + 应用详情"],["Explore by Body Area","按肩、肘、背髋、膝、足踝、肌筋膜浏览"],["Dynamic Detail Template","Hero → Overview → Application → Benefits → FAQ → CTA"]
 ];
 layers.forEach((a,i)=>{const y=278+i*78;box(s,x,y,700,58,C.pale,C.line,"roundRect");txt(s,a[0],x+18,y+10,245,24,16,C.navy,true);txt(s,a[1],x+280,y+10,395,30,14,C.text,false)});
 txt(s,"CURRENT DETAIL SLUGS",x,602,240,20,11,C.blue,true);txt(s,"plantar-fasciitis · tennis-elbow · achilles-tendinopathy · tendinopathy · calcific-tendinitis · myofascial-trigger-points",x,628,700,34,13,C.text,false);
 footer(s,7);notes(s,["Local project source: app/indications/","Local project asset: public/images/indications/body-area-application-figure.png"]);
}

// 8 Technical architecture
{
 const s=p.slides.add();s.background.fill=C.pale;header(s,"Technical architecture","React app-directory 项目结构","页面路由、共享组件、页面组件、样式与图片资源分层维护。");
 const cols=[
  ["ROUTES","app/**/page.tsx","页面 URL 与 metadata"],
  ["SHARED UI","app/components.tsx","Header · Footer · common UI"],
  ["PAGE COMPONENTS","app/home · app/products\napp/indications","交互与页面专属模块"],
  ["STYLES","app/globals.css\npage-scoped styles","全局基础 + 页面隔离"],
  ["ASSETS","public/images/**","产品、品牌、适应症图片"]
 ];
 cols.forEach((a,i)=>{const x=42+i*244;box(s,x,228,220,294,C.white,C.line,"roundRect");box(s,x,228,220,8,i===0?C.blue:i===4?C.sky:C.navy,"none");txt(s,a[0],x+18,258,184,22,12,C.blue,true);txt(s,a[1],x+18,310,184,70,18,C.navy,true,"center");line(s,x+18,400,184);txt(s,a[2],x+18,426,184,58,14,C.text,false,"center")});
 txt(s,"STACK",64,578,80,20,11,C.blue,true);txt(s,"React 19 · Vinext · Vite 8 · Tailwind 4 · TypeScript · Cloudflare-ready",150,575,920,28,16,C.navy,true);
 footer(s,8);notes(s,["Local project files: package.json, app/, public/, tsconfig.json"]);
}

// 9 Maintenance map
{
 const s=p.slides.add();s.background.fill=C.navy;txt(s,"MAINTENANCE MAP",64,48,260,22,12,C.sky,true);txt(s,"网站后续维护从哪里开始",64,82,650,50,34,C.white,true);txt(s,"内部维护清单 + 下一阶段建议",64,140,500,28,17,"#C8D8E7",false);
 const items=[
  ["页面内容","app/[route]/page.tsx","只改对应页面，避免影响其他 route"],
  ["全站导航","app/components.tsx","Header / Footer 为共享组件，修改前先评估全站影响"],
  ["首页模块","app/page.tsx + app/home/","Hero、Product、Accessories、Reviews 分区维护"],
  ["产品画廊","app/products/ProductImageGallery.tsx","图片顺序与资源路径保持一致"],
  ["临床内容","app/indications/data.ts + [slug]","统一数据与模板，避免重复页面"],
  ["图片资产","public/images/","保留清晰文件名、alt 与稳定路径"]
 ];
 items.forEach((a,i)=>{const x=i%2===0?64:650,y=220+Math.floor(i/2)*132;box(s,x,y,540,106,"#102B4C","#24496D","roundRect");txt(s,a[0],x+20,y+18,140,24,17,C.white,true);txt(s,a[1],x+170,y+18,340,24,14,C.sky,true);txt(s,a[2],x+20,y+56,490,32,13,"#D2DFEA",false)});
 txt(s,"NEXT",64,640,80,20,11,C.sky,true);txt(s,"Visual assets → Brand content → SEO content → Official launch",150,635,900,30,18,C.white,true);
 txt(s,"09",1170,685,44,18,10,"#8DA8C0",true,"right");notes(s,["Local project source map under app/ and public/"]);
}

await fs.mkdir(OUT,{recursive:true});
for(const [i,s] of p.slides.items.entries()){
 const stem=`slide-${String(i+1).padStart(2,"0")}`;
 const png=await p.export({slide:s,format:"png",scale:1});await fs.writeFile(path.join(OUT,`${stem}.png`),new Uint8Array(await png.arrayBuffer()));
 const layout=await s.export({format:"layout"});await fs.writeFile(path.join(OUT,`${stem}.layout.json`),await layout.text());
}
const montage=await p.export({format:"webp",montage:true,scale:0.5});await fs.writeFile(path.join(OUT,"montage.webp"),new Uint8Array(await montage.arrayBuffer()));
const pptx=await PresentationFile.exportPptx(p);await pptx.save(path.join(ROOT,"SHOCKIS-Website-Architecture.pptx"));
