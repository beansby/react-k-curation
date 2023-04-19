import React, { useState } from "react";
import Item from "../../components/Item";

const tabs = [
    {
        id:1,
        tab:'Traditional',
        label:'traditional',
        content : '전통 코스'
    },
    {
        id:2,
        tab:'Modern',
        label:'modern',
        content : '도시 코스'
    },
    {
        id:3,
        tab:'Nature',
        label:'nature',
        content : '자연 코스'
    },
]

const theme = [
    {
        id:1,
        label :'traditional',  
        data : [
            { place:'경복궁', img:"/img/img-gyeongbok.jpeg", location:'서울 종로구 사직로 161 (세종로, 경복궁)', description:"경복궁은 조선 왕조 제일의 법궁입니다. 북으로 북악산을 기대어 자리 잡았고 정문인 광화문 앞으로는 넓은 육조거리(지금의 세종로)가 펼쳐져, 왕도인 한양(서울) 도시 계획의 중심이기도 합니다.", url:"http://www.royalpalace.go.kr", tag:"", traffic:"5호선 광화문역 2번 출구, 3호선 경복궁 5번 출구" },
            { place:'덕수궁', img:"/img/img-deoksu.jpeg", location:'서울 중구 세종대로 99', description:"조선의 고종황제가 승하한 곳이며, 아관파천 등 한국의 역사가 담긴 곳입니다. 덕수궁 돌담길의 풍경이 멋져 가을의 운치를 느끼기에 좋습니다.", url:"http://www.deoksugung.go.kr", tag:"", traffic:"2호선 시청 12번 출구, 1호선 시청 2번 출구"},
            { place:'창덕궁', img:"/img/img-changdeok.jpeg", location:'서울 종로구 율곡로 99 (와룡동, 창덕궁)', description:"창덕궁에는 세계문화유산으로 지정된 후원(비원)이 있습니다. 빼어난 자연관광을 자랑하는 곳으로서 사계절의 다양한 경치와 함께 해설사의 재미있는 가이드 또한 즐기실 수 있는 곳입니다.", url:"http://www.cdg.go.kr", tag:"", traffic:"5호선 종로3가역 6번 출구, 3호선 안국역 3번 출구" },
            { place:'운현궁', img:"/img/img-unhyeon.jpeg", location:'서울 종로구 삼일대로 464 (운현궁)', description:"운현궁은 현재 종로구 운니동에 위치한 사적 제 257호의 문화유산입니다. 운현궁은 경복궁과 같은 궁궐이 아니라 왕족의 친족들이 거주하던 곳을 궁(宮)으로 부른 것 중의 하나입니다.", url:"http://unhyeongung.or.kr", tag:"", traffic:"3호선 안국역 4번 출구, 5호선 종로3가역 5번 출구" },
            { place:'창경궁', img:"/img/img-changgyeong.jpeg", location:'서울 종로구 창경궁로 185 (와룡동, 창경궁)', description:"창경궁은 성종 14년(1483) 세 명의 대비들을 위해 지은 궁궐로써 창덕궁과 인접해 하나의 궁궐처럼 사용했습니다. 일제강점기에는 식물원과 동물원이 들어서 유원지로 변했고 창경원이라 불렸지만, 1983년부터 복원 작업을 시작해 창경궁이라는 이름을 회복했습니다.", url:"http://cgg.cha.go.kr", tag:"", traffic:"4호선 혜화역 4번 출구" },
            { place:'종묘', img:"/img/img-jongmyo.jpeg", location:'서울 종로구 종로 157 (훈정동, 종묘공원)', description:"역대 왕과 왕비의 제를 모시는 곳으로 제사, 궁궐 음악 등을 감상하실 수 있는 곳입니다.", url:"http://jm.cha.go.kr/", tag:"", traffic:"5호선 종로3가역 8번 출구, 1호선 종로3가역 11번 출구, 3호선 종로3가역 8번 출구" },
            { place:'북촌 한옥마을', img:"/img/img-bukchon.jpeg", location:'서울 종로구 계동길 37 북촌문화센터', description:"전통적인 풍경이 잘 보존된 한옥마을은 사진 찍기 좋은 북촌 8경을 포함해 작은 상점이나 레스토랑 구석구석을 찾는 재미가 있는 곳입니다. 북촌한옥마을은 삼청동과 인접해 있으며 한국 전통문화를 접할 수 있는 곳입니다.", url:"https://hanok.seoul.go.kr", tag:"", traffic:"3호선 안국역 2번 출구" },
            { place:'남산골 한옥마을', img:"/img/img-namsan.jpeg", location:'서울 중구 퇴계로34길 28 남산골한옥마을', description:"한옥 5개 동과 전통 정원으로 이뤄져 있으며, 한국의 옛 양반 가옥을 감상하며 다양한 놀이 또는 직접 체험하실 수 있습니다.", url:"www.hanokmaeul.or.kr", tag:"", traffic:"3호선 충무로역 4번 출구" },
            { place:'전주 한옥마을', img:"/img/img-jeonju.webp", location:'전북 전주시 완산구 기린대로 99', description:"전주 풍남동 일대에 700여 채의 한옥이 군락을 이루고 있는 국내 최대 규모의 전통 한옥촌이며, 전국 유일의 도심 한옥군입니다. 1910년 조성되기 시작한 우리나라 근대 주거문화 발달과정의 중요한 공간으로, 경기전, 오목대, 향교 등 중요 문화재와 20여개의 문화시설이 산재되어 있으며, 한옥, 한식, 한지, 한소리, 한복, 한방 등 韓스타일이 집약된 대한민국 대표 여행지입니다.", url:"hanok.jeonju.go.kr", tag:"", traffic:"" },
        ]
    },
    {
        id:2,
        label :'modern',
        data : [
            //관광지명(place), 주소(location), 설명(description), 홈페이지(url), 이미지소스(img)
            //태그(tag), 교통정보(traffic)
            // { place:'', img:"", location:'', description:"", url:"", tag:"", traffic:"" },
            { place:'을지로', img:"/img/img-hipjiro.png", location:'서울특별시 중구 을지로 42', description:"1970년대 한국 최초의 주상복합건물인 세운 상가가 서울의 랜드마크로 들어서며 인파가 몰렸던 을지로. 골목 골목길에 인쇄소, 조명가게, 공구상 등이 늘어서 있는 을지로는 서울의 옛 모습을 고스란히 간직하고 있습니다. 을지로의 매력은 기존의 공간을 완전히 새롭게 탈바꿈하기보단 옛 모습을 살리면서 그들만의 방식으로 풀어나가는 점입니다. 최신 유행이라는 뜻의 영어 힙(hip)과 지역명이 합쳐진 ‘힙지로’, 과거와 현재가 공존하는 분위기를 뜻하는 ‘을지로 감성’ 등 다양한 단어가 생겨날 만큼 을지로는 트렌드를 주도하고 있는 동네입니다. 골목골목 숨어 있는 보석 같은 핫플레이스를 찾는 재미를 느낄 수 있습니다.", url:"", tag:"", traffic:"2호선 을지로입구역" },
            { place:'홍대', img:"/img/img-hongdae.webp", location:'서울특별시 마포구 와우산로', description:"청춘들의 아지트 홍대 거리에는 패션과 뷰티, 리빙, 책과 문구 등 종류를 불문하고 갖은 매장과 디자이너 브랜드나 편집숍, 서점, 카페와 레스토랑 등이 즐비합니다. 또 버스킹이나 춤 공연이 끊이지 않는 걷고싶은거리, 홍익대 후문 와우산로22길에 펼쳐진 벽화거리, 상수역과도 잇닿은 홍대클럽거리 등 이름난 골목들이 있습니다. 쇼핑과 맛집에 이어 공연이나 전시 관람을 충족하는 상권이 있고, 젊음과 트렌드, 감각과 역동이 도처에 도사린, 언제나 매력적인 동네입니다.", url:"", tag:"", traffic:"2호선 홍대입구역" },
            { place:'동대문디자인플라자(DDP)', img:"/img/img-ddp.jpeg", location:'서울 중구 을지로 281', description:"영국의 건축가 자하 하디드가 설계했으며, 세계 최대 규모의 3차원 비정형 건축물입니다. 곡선 중심으로 이루어진 공간 활용은 기존 한국 건축물들에서 찾아보기 어려웠던 독특한 내부 구조를 보여주고 있습니다.", url:"ddp.or.kr", tag:"", traffic:"2호선 동대문역사문화공원역 1번 2번 출구" },
            { place:'코엑스 아쿠아리움', img:"/img/img-coex-aquarium.jpeg", location:'서울 강남구 영동대로 513 코엑스몰 B1', description:"전시 수조 183개, 사육수조 90개, 수량 3,500톤에 이르는 대형수족관입니다. ‘환상적인 물의 여행’을 테마로 16개 테마존에서 650여 종 4만여 마리의 수중생물들을 만날 수 있으며, 특히 국내 최다(最多)종, 개체 수의 상어의 서식하고 있습니다.", url:"http://www.coexaqua.com", tag:"", traffic:"2호선 삼성역 5번 6번 출구 연결" },
            { place:'롯데월드', img:"/img/img-lotteworld.jpeg", location:'서울 송파구 올림픽로 240 (롯데월드)', description:"모험과 신비를 주제로 한 실내 주제공원인 롯데월드 어드벤처, 호수공원인 매직아일랜드, 쇼핑몰, 민속박물관, 아이스링크, 호텔, 백화점 등으로 구성되어 관광, 레저, 쇼핑, 문화를 한곳에서 해결할 수 있는 세계에서 가장 큰 실내 테마파크입니다.", url:"http://www.lotteworld.com", tag:"", traffic:"2호선 잠실역 4번 출구 연결" },
            { place:'에버랜드', img:"/img/img-everland.jpeg", location:'경기 용인시 처인구 포곡읍 에버랜드로 199', description:"1년 365일, 계절별 다채롭게 펼쳐지는 축제와 어트랙션, 동물, 식물 등 다양한 시설로 즐거운 휴식과 기쁨을 선사하는 테마파크입니다.", url:"http://www.everland.com", tag:"", traffic:"" },
            { place:'서울랜드', img:"/img/img-seoulland.jpeg", location:'경기 과천시 광명로 181 (막계동, 서울랜드)', description:"한국 최초의 놀이공원이라는 타이틀을 가진 서울랜드는 개장과 동시에 대한민국 대표 테마파크로 자리매김했습니다. 계절별로 신선한 즐거움을 주기 위해 새로운 공연, 축제, 이벤트 등을 도입하고 있으며, 인근에는 서울대공원의 동.식물원과 산림욕장, 국립현대미술관 등이 모여 있어 한국을 대표하는 관광지로 널리 사랑 받고 있습니다.", url:"http://www.seoulland.co.kr", tag:"", traffic:"4호선 대공원역 5번 출구" },
            { place:'레고랜드', img:"/img/img-legoland.jpeg", location:'강원도 춘천시 하중도길 128', description:"", url:"https://www.legoland.kr/", tag:"", traffic:"" },
        ]
    },
    {
        id:3,
        label :'nature',
        data : [
            { place:'한강', img:"/img/img-hanriver.jpeg", location:'서울 성동구 강변북로 257', description:"한국의 중부, 강원도·충청북도·경기도·서울특별시를 거쳐 황해로 유입하는 강. 한강은 반만년 유구한 역사를 우리 민족과 더불어 기쁨과 슬픔을 함께 해 온 우리 삶의 터전이며, 서울시민의 가장 대표적인 휴식공원입니다.", url:"http://hangang.seoul.go.kr", tag:"", traffic:"" },
            { place:'청계천', img:"/img/img-cheonggyecheon.jpeg", location:'서울 종로구 창신동', description:"청계천은 서울 종로구와 중구를 가로질러 왕십리까지 이어집니다. 서울을 둘러싼 산에서 내려온 물이 중랑천과 만나 살곶이 다리를 거쳐 한강으로 흘러드는 것입니다. 600년이 넘는 오랜 역사와 함께한 청계천은 문화유산도 다양합니다. 1987년에는 청계천이 광장의 역할을 했으며, 사람이 많이 모이는 청계천 인근 건물에서 대통령 선거유세를 하기도 했고 대규모 집회가 이어지기도 했습니다. 이처럼 다양한 역사를 지닌 청계천은 오늘도 변함없이 서울의 한가운데를 흐르고 있습니다.", url:"https://www.sisul.or.kr/open_content/cheonggye", tag:"", traffic:"" },
            { place:'서울숲', img:"/img/img-seoulsup.jpeg", location:'서울 성동구 뚝섬로 273', description:"서울숲은 문화예술공원, 체험학습원, 생태숲, 습지생태원 네 가지의 특색 있는 공간들로 구성되어 있으며, 한강과 맞닿아 있어 다양한 문화여가공간을 제공합니다. 또한 서울숲공원은 조성부터 프로그램 운영까지 시민의 참여로 이루어진 최초의 공원입니다.", url:"https://parks.seoul.go.kr", tag:"", traffic:"분당선 서울숲역 4번 출구" },
            { place:'하늘공원', img:"/img/img-haneul.jpeg", location:'서울 마포구 하늘공원로 95', description:"2002년 제17회 월드컵축구대회를 기념해 도시의 생활폐기물로 오염된 난지도 쓰레기매립장을 자연생태계로 복원하기 위해 개원했습니다. 평화공원·난지천공원·난지한강공원·노을공원과 함께 월드컵경기장 주변의 5대 공원을 이루며, 테마별로 억새 식재지, 순초지, 암석원, 혼생초지, 시설지 연결로, 해바라기 식재지, 메밀 식재지, 전망휴게소, 전망대, 풍력발전기 등으로 구성되어 있습니다.", url:"", tag:"", traffic:"" },
            { place:'화담숲', img:"/img/img-hwadam.jpeg", location:'경기도 광주시 도척면 도척윗로 278-1', description:"화담숲의 화담(和談)은 ‘정답게 이야기를 나누다’는 의미로, 화담숲은 인간과 자연이 교감할 수 있는 생태 공간을 지향합니다. 우리 숲의 식생을 최대한 보존하였고, 자연을 사랑하는 누구나 편히 찾을 수 있도록 친환경적인 생태공간으로 꾸몄다. 또한 자연의 지형과 식생을 최대한 보존하여 조성된 덕분에, 노고봉의 계곡과 능선을 따라 자연스럽게 자리 잡은 수목들의 다양한 모습을 볼 수 있습니다.", url:"http://www.hwadamsup.com", tag:"", traffic:"" },
            { place:'아침고요수목원', img:"/img/img-morningcalm.jpeg", location:'경기도 가평군 상면 수목원로 432', description:"축령산의 빼어난 자연경관을 배경으로 하여 한국의 미를 듬뿍 담은 정원들을 원예학적으로 조화시켜 설계한 원예 수목원입니다. 영화 ‘편지’를 시작으로 영화 ‘조선 명탐정’, ‘중독’, 드라마 ‘황금빛 내 인생’, ‘손 꼭 잡고 지는 석양을 바라보자’, ‘저글러스’, ‘군주’, ‘블랙’, ‘학교 2017’, ‘왕은 사랑한다’, ‘내성적인 보스’, ‘구르미 그린 달빛’, ‘웃어라 동해야’, ‘미남이시네요’, ‘이 죽일 놈의 사랑’, 예능 ‘무한도전’, 다큐 ‘성공 다큐 최고다’ 등의 촬영 장소입니다.", url:"http://www.morningcalm.co.kr", tag:"", traffic:"" },
            { place:'죽녹원', img:"/img/img-damyang.jpeg", location:'전남 담양군 담양읍 죽녹원로 119', description:"담양군이 성인산 일대에 조성하여 2005년 3월 개원한 대나무 정원으로, 약 31만 제곱미터의 울창한 대숲이 펼쳐져 있습니다. 죽림욕을 즐길 수 있는 총 2.2km의 산책로는 운수대통길,죽마고우길,철학자의 길 등 8가지 주제의 길로 구성됩니다. 죽녹원전망대로부터 산책로가 시작되는데, 전망대에서는 담양천을 비롯하여 수령 300년이 넘은 고목들로 조성된 담양 관방제림과 담양의 명물인 메타세쿼이아 가로수길 등이 한눈에 내려다보입니다.", url:"https://www.juknokwon.go.kr", tag:"", traffic:"" },
            { place:'보성 녹차밭', img:"/img/img-bosung.jpeg", location:'전남 보성군 보성읍 녹차로 763-43', description:"보성군은 한국에서 가장 많은 차(茶)를 재배하는 지역으로, 《동국여지승람(東國輿地勝覽)》 《세종실록지리지(世宗實錄地理志)》 등 여러 문헌에 차의 자생지로 기록되어 있을 만큼, 한국 차의 본고장으로 불립니다. 현재도 보성군에서 생산되는 차는 전국 차 생산량의 40%를 차지할 정도로 차나무 재배가 활발합니다.", url:"http://www.dhdawon.com", tag:"", traffic:"" },
            { place:'남이섬', img:"/img/img-namyisum.jpeg", location:'강원 춘천시 남산면 남이섬길 1', description:"앞섬이라는 뜻의 남섬(南島)으로도 불렸던 남이섬 지명의 유래는 남이섬 북쪽 언덕의 돌무더기에 남이장군이 묻혀있다는 오랜 민간전승에 기인하여 자연스럽게 정착된 것입니다. 남이섬은 1944년 청평댐을 만들 때 북한강 강물이 차서 생긴 경기도와 강원도 경계에 있는 내륙의 섬입니다.", url:"www.namisum.com", tag:"", traffic:"" },
            { place:'대관령 양떼목장', img:"/img/img-sheep.jpeg", location:'강원 평창군 대관령면 대관령마루길 483-32 대관령양떼목장', description:"진녹색의 목초가 바람따라 흔들거리는 능선에서 양들이 한가로이 노니는 모습을 보고 있으면 마치 알프스에 와 있는 듯한 착각을 하게 됩니다.", url:"http://www.yangtte.co.kr", tag:"", traffic:"" },
            { place:'설악산 공룡능선', img:"/img/img-seolak.jpeg", location:'강원도 인제군 북면 용대리', description:"마등령에서부터 희운각대피소 앞 무너미고개까지의 능선구간을 가리키며, 외설악과 내설악을 남북으로 가르는 능선이자 속초시와 인제군을 나누는 경계선으로 용아장성능선과 함께 설악산을 대표하는 암봉 능선입니다. 명칭은 연이어진 암봉들이 마치 공룡의 등같이 생겨 용솟음치는 것처럼 장쾌해 보인다고 해 붙여진 이름으로 공룡릉(恐龍稜)이라고도 불립니다. 이곳은 영동·영서를 나누는 분기점으로 구름이나 안개가 자주 끼는 등 기상이 시시각각 변하며, 그 운해와 어우러져 국립공원 100경 중 제1경일 정도로 아름답고 웅장합니다.", url:"http://seorak.knps.or.kr", tag:"", traffic:"" },
            { place:'천지연 폭포', img:"/img/img-cheonjiyeon.jpg", location:'제주 서귀포시 천지동 667-7', description:"서귀포는 다른 지역에 비해 용천수가 많이 솟고, 지하 층에 물이 잘 스며들지 않는 수성응회암이 널리 분포하여 다른 지역보다 상대적으로 폭포가 많습니다. 그런 서귀포 폭포 중에서도 규모나 경관 면에서 단연 으뜸으로 관광객의 발길이 머무는 곳이 있으니, 천지연 폭포가 바로 그곳입니다. 천지연은 하늘과 땅이 만나 이루어진 연못이라는 의미를 담고 있는데, 폭포의 길이 22m, 그 아래 못의 깊이가 20m로, 가히 하늘과 땅이 만나는 연못이라 불립니다.", url:"https://www.visitjeju.net", tag:"", traffic:"" },
            { place:'우도', img:"/img/img-udo.png", location:'제주 제주시 우도면', description:"우도는 소가 누워있는 모양을 닮았다고 해서 일찍부터 소섬 또는 쉐섬으로 불리었습니다. 완만한 경사와 옥토, 풍부한 어장, 우도팔경 등 천혜의 자연조건을 갖춘 관광지로써 한해 약 200만 명의 관광객이 찾는 제주의 대표적인 부속섬입니다.", url:"http://www.visitjeju.net", tag:"", traffic:"" },
            { place:'월미도', img:"/img/img-wolmido.jpeg", location:'인천광역시 중구 월미문화로 36', description:"섬의 생김새가 반달의 꼬리처럼 휘어져 있는 데에서 유래되었습니다. 해안도로에는 놀이시설과 유흥시설이 늘어서 있으며, 1987년 7월 월미도 문화의 거리가 조성된 이래 문화예술 공연과 월미축제 등 각종 행사가 다채롭게 펼쳐지고 있습니다.", url:"http://wolmi-do.co.kr", tag:"", traffic:"" },
            
        ]
    }
]

function Theme(){
    const [currentTab, setCurrentTab] = useState('traditional');

    const handleTabClick = (e) => {
        setCurrentTab(e.target.value);
        // console.log(currentTab);
    }

    return(
        <section>
            <div className="shadow"> </div>
            <div className="container-body">
                <div className="tab-container font-eng-title">
                    {/* 탭 메뉴 */}
                    <div className="tab-menu category flex justify-between bg-darknavy text-white">
                        {tabs.map((tab, i)=>{
                            return (
                                <button className="btn-category" key={i} id={tab.id} value={tab.label} disabled={currentTab === `${tab.label}`} onClick={handleTabClick}> {tab.tab} </button>
                            )
                        })}
                    </div>

                    {/* 탭 컨텐츠 */}
                    <div className="tab-contents contents-category mt-20 mb-10">
                        {theme.map((tab,i)=>{
                            return (
                                <div key={i} className="contents-grid grid">
                                    {currentTab == `${tab.label}` && 
                                        tab.data.map((item)=>{
                                            // console.log(item);
                                            let propitem = item;
                                            return (
                                                // <div> {item.place} </div>
                                                <Item item={propitem}/>
                                            )
                                        })
                                    }
                                </div>
                            )
                        })}
                    </div>
                </div>
            </div>
            
        </section>
    )
}

export default Theme;